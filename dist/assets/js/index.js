!function(e){function t(t){for(var o,i,u=t[0],l=t[1],d=t[2],f=0,s=[];f<u.length;f++)i=u[f],r[i]&&s.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(a&&a(t);s.length;)s.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var a=l;c.push([0,0]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(2);const o=document.getElementById("ifr");o.onload=(()=>{document.getElementById("com1").addEventListener("click",function(e){const t={title:"Header",fn:`var p = ${document.getElementById("ui-config-com1").value}`};o.contentWindow.postMessage(JSON.stringify(t),"*")}),document.getElementById("com2").addEventListener("click",function(e){const t={title:"Marquee",fn:`var p = ${document.getElementById("ui-config-com2").value}`};o.contentWindow.postMessage(JSON.stringify(t),"*")}),document.getElementById("com3").addEventListener("click",function(e){const t={title:"LotteryTurntable",fn:`var p = ${document.getElementById("ui-config-com3").value}`};o.contentWindow.postMessage(JSON.stringify(t),"*")}),document.getElementById("com4").addEventListener("click",function(e){const t={title:"Lottery",fn:`var p = ${document.getElementById("ui-config-com4").value}`};o.contentWindow.postMessage(JSON.stringify(t),"*")}),document.getElementById("com5").addEventListener("click",function(e){const t={title:"ScratchCard",fn:`var p = ${document.getElementById("ui-config-com5").value}`};o.contentWindow.postMessage(JSON.stringify(t),"*")})})},,function(e,t,n){}]);