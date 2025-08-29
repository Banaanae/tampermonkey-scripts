// ==UserScript==
// @name         OpenGuessr Fixer
// @namespace    https://banaanae.github.io
// @version      1.0
// @description  Intercepts Google Maps tile requests and redirects them to OpenStreetMap.
// @author       Banaanae
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const regex = /https:\/\/mt\d+\.google\.com\/vt\/lyrs=m&x=(\d+)&y=(\d+)&z=(\d+)/;
    const osm = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

    function processUrl(url) {
        const match = url.match(regex);
        if (match) {
            const x = match[1];
            const y = match[2];
            const z = match[3];

            const newUrl = osm
                .replace('{x}', x)
                .replace('{y}', y)
                .replace('{z}', z);

            return newUrl;
        }
        return url;
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'IMG') {
                    const src = node.src;
                    const newSrc = processUrl(src);

                    if (src !== newSrc) {
                        //console.log(`Intercepted: ${originalSrc}\nRedirecting to: ${newSrc}`);
                        node.src = newSrc;
                    }
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
