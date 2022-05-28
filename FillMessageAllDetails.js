// ==UserScript==
// @name         Fill Message All details
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JustS
// @match        https://fetlife.com/conversations/new?with=*&messageAllSubject=*&messageAllBody=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inputs = document.getElementsByTagName("input");
    for (var i=0, max=inputs.length; i < max; i++) {
        var input = inputs[i];
        if (input.placeholder == 'Subject') {
            input.value=urlParams.get('messageAllSubject');
        }
    }

    const textareas = document.getElementsByTagName("textarea");
    for (var i=0, max=textareas.length; i < max; i++) {
        var textarea = textareas[i];
        if (textarea.placeholder == 'What say you?') {
            textarea.value=urlParams.get('messageAllBody');
        }
    }
})();
