Oxford Saïd CV Generator
==========================

Overview
---------

A simple program for generating CVs in the format required by the Saïd Business School. As the year goes on and I begin applying for jobs I will add other formats as well, using the same source data.

Installation
-------------

    $ git clone https://github.com/owenscott/oxford-cv
    $ npm install

Content
-------

To change the content, simply edit `data/cv.json`

Styling
-------

To change the styles, edit `templates/*.html` and `templates/style.css`. The default style is a close approximation of the template required by the Saïd Business School.

Rendering
----------

To render as HTML and PDF:

    $ node render.js

This will output cv.html and cv.pdf in the root directory.