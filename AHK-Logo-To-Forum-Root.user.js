// ==UserScript==
// @name         AHK Logo to forum root
// @namespace    https://github.com/Banaanae/tampermonkey-scripts/
// @version      1.0.1
// @description  Replaces to logo image link from autohotkey.com to ahk forums
// @author       Banaanae
// @match        https://www.autohotkey.com/boards/*
// @icon         https://autohotkey.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const logo = document.getElementById('logo');
    logo.href = 'https://www.autohotkey.com/boards/index.php';
    logo.title = 'Forum index';
})();
