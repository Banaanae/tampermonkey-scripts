// ==UserScript==
// @name         AHK Logo to forum root
// @namespace    https://github.com/Banaanae/tampermonkey-scripts/
// @version      v1.0.0
// @description  Replaces to logo image link from autohotkey.com to ahk forums
// @author       Banaanae
// @match        https://www.autohotkey.com/boards/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=autohotkey.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('logo').href = 'https://www.autohotkey.com/boards/index.php';
})();
