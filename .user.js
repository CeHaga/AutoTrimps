// ==UserScript==
// @name         AutoTrimps-CeHaga
// @version      1.0-CeHaga
// @namespace    https://cehaga.github.io/AutoTrimps
// @updateURL    https://cehaga.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, CeHaga
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *cehaga.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest 
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-CeHaga';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://cehaga.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin', "anonymous");
document.head.appendChild(script);
