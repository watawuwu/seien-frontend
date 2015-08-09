/** @jsx m */
'use strict';

//require jquery
var $ = require('jquery');
window.jQuery = $;
require('bootstrap');
//require mithril
var m = require('mithril');

$(document).ready(function() {
    //setup routes to start w/ the `#` symbol
    m.route.mode = 'hash';
    //routing configuration
    m.route(document.getElementById('ui-router'), '/', {
        '/': require('./app/app.jsx')
    });
});

