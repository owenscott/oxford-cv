var fs = require('fs'),
	_ = require('underscore'),
	cheerio = require('cheerio'),
	html2pdf = require('wkhtmltopdf');

var index = fs.readFileSync('./templates/index.html').toString();

var data = JSON.parse(fs.readFileSync('./data/cv.json').toString());

var $ = cheerio.load(index);

var templEducation = _.template(fs.readFileSync('./templates/education.html').toString());
var templWork = _.template(fs.readFileSync('./templates/work.html').toString());
var templAdditional = _.template(fs.readFileSync('./templates/additional.html').toString());
var templHeader = _.template(fs.readFileSync('./templates/header.html').toString());

$('#header').append(templHeader(data));

data.education.forEach(function(e) {
	$('#education').append(templEducation(e));
})

data.workExperience.forEach(function(w) {
	$('#work-experience').append(templWork(w));
})

$('#interests').append(templAdditional({
	section:'Interests',
	contents: data.interests
}))

$('#achievements').append(templAdditional({
	section:'Achievements',
	contents: data.achievements
}))

$('#nationality').append(templAdditional({
	section:'Nationality',
	contents: data.nationality
}))

$('#languages').append(templAdditional({
	section:'Languages',
	contents: data.languages
}))

fs.writeFileSync('./cv.html', $.html());

var pdf = fs.createWriteStream('./cv.pdf');

html2pdf($.html(), {
	pageSize: 'A4',
	marginLeft: 0,
	marginRight: 0,
	marginTop:0,
	marginBottom:0,
	userStyleSheet: './templates/style.css'
}).pipe(pdf);

