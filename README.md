Graaf
=====

Graaf makes it really easy to generate network graphs in the browser. The networks are drawn in SVG using [Raphaël](http://raphaeljs.com). Additional backends might be added later. This library focusses on ease of use, flexibility and testability.

[![Build Status](https://secure.travis-ci.org/joelcox/graaf.png?branch=master)](http://travis-ci.org/joelcox/graaf)

Dependencies
------------

In order to use Graaf in your projects you'll need both [Underscore.js](http://underscorejs.org) (1.4.2) and Raphaël (2.1.0).

If you want to work on Graaf you'll need to have Node.js (both 0.6.x and 0.8.x should work) installed, together with NPM. Graaf uses [Jasmine](http://pivotal.github.com/jasmine/) for its tests, via `jasmine-node`. 


Contributing
------------
If you feel like modifying Graaf itself you can fork this repository, install the dependencies and run the tests. You can also report a bug or request a feature through the [issue tracker](https://github.com/joelcox/graaf/issues).

    git clone git://github.com/<username>/graaf.git
    cd graaf
    git submodule init
    git submodule update
    npm install
    make test

License
-------
This library is released under the MIT license.