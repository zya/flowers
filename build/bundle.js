!function e(t,a,n){function i(r,s){if(!a[r]){if(!t[r]){var d="function"==typeof require&&require;if(!s&&d)return d(r,!0);if(o)return o(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var c=a[r]={exports:{}};t[r][0].call(c.exports,function(e){var a=t[r][1][e];return i(a?a:e)},c,c.exports,e,t,a,n)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(e,t,a){"use strict";function n(e,t,a){return e>=t&&a>=e}function i(){var e="#9E9E9E";L.style.color="white",setTimeout(function(){L.style.color=e},500)}function o(){y.globalAlpha=1,y.drawImage(R,0,0,Y,Y);var e=y.getImageData(0,0,Y,Y),t=new Uint8ClampedArray(e.data),a=new Uint8ClampedArray(e.data),i=new Uint8ClampedArray(e.data),o=new Uint8ClampedArray(e.data),r=new Uint8ClampedArray(e.data),s=new Uint8ClampedArray(e.data),d=new Uint8ClampedArray(e.data),l=y.createImageData(e);l.data.set(t);var c=y.createImageData(e);c.data.set(r);var u=y.createImageData(e);c.data.set(d);var f=y.createImageData(e);f.data.set(a);var v=y.createImageData(e);v.data.set(s);var h=y.createImageData(e);h.data.set(i);var g=y.createImageData(e);g.data.set(o);for(var b=0;b<l.data.length;b+=4){var E=e.data[b],A=e.data[b+1],I=e.data[b+2],L=n(E,m(190,200),255)&&n(A,0,130)&&p(0,10)>9.4;L||(l.data[b]=0,l.data[b+1]=0,l.data[b+2]=0,l.data[b+3]=0);var T=n(E,m(190,200),255)&&n(A,0,m(120,130))&&p(0,10)>5;T?p(0,10)>2?(u.data[b]=m(0,50),u.data[b+1]=m(0,50),u.data[b+2]=m(150,150),u.data[b+3]=40):(u.data[b]=0,u.data[b+1]=0,u.data[b+2]=0,u.data[b+3]=0):(c.data[b]=0,c.data[b+1]=0,c.data[b+2]=0,c.data[b+3]=0);var x=n(A,m(110,120),m(230,225))&&n(I,m(110,115),m(220,230))&&p(0,10)>3;x||(f.data[b]=0,f.data[b+1]=0,f.data[b+2]=0,f.data[b+3]=0);var k=n(A,100,255)&&n(I,0,100)&&n(E,0,100)&&p(0,10)>9.9;k||(v.data[b]=0,v.data[b+1]=0,v.data[b+2]=0,v.data[b+3]=0);var D=n(A,220,230)&&n(I,220,230)&&p(0,20)>10;D||(h.data[b]=0,h.data[b+1]=0,h.data[b+2]=0,h.data[b+3]=0);var M=m(9,15),C=n(E,0,M)&&n(A,0,M)&&n(I,0,M)&&p(0,10)>1;C||(g.data[b]=0,g.data[b+1]=0,g.data[b+2]=0,g.data[b+3]=0)}y.putImageData(l,0,0),N.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(c,0,0),B.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(f,0,0),U.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(v,0,0),S.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(h,0,0),H.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(g,0,0),z.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.putImageData(u,0,0),W.src=w.toDataURL("image/png"),y.clearRect(0,0,Y,Y),y.drawImage(R,0,0,Y,Y)}function r(e){var t=0===Z?1:0;return Z=t,e[t]}function s(){var e=Y/20,t=6*e,a=7*e,n=7*e-17;_&&$?(a+=p(-1,1)-j/300+2,n+=p(-1,1),y.globalAlpha=p(.3,.8)):y.globalAlpha=1,y.drawImage(q,a,n,t,t)}function d(e){var t=document.getElementById("screen"),a=e.toDataURL("image/jpeg");t.href=a,t.target="_blank",t.download="Ehsan Ziya - FLOWERS.jpg",t.click()}function l(e,t){y.globalAlpha=p(0,.1);var a=j/(Y/p(1,3));y.drawImage(U,0+p(-1.5,1.5)+a,e/7+t,Y,Y),y.globalAlpha=p(0,.1);var n=j/(Y/p(2,4));y.drawImage(S,0+p(-5,5)+n,e/9+t,Y,Y),y.globalAlpha=p(0,.3),y.drawImage(H,t+p(-1,1)+j/(Y/p(0,3)),e/2,Y,Y),y.globalAlpha=p(0,.2),y.drawImage(H,0,0,Y,Y),y.globalAlpha=p(.2,.6);var i=j/(Y/p(0,4))*1.3;y.drawImage(N,p(-1,1)+i,e+p(0,1),Y,Y),y.globalAlpha=p(.5,.6),y.drawImage(B,0,e/5,Y,Y),y.globalAlpha=p(.2,.4);var o=j/(Y/p(0,2))*4;y.drawImage(z,t+p(-1,1)+o,e,Y,Y),y.globalAlpha=e/Q/4;var r=j/(Y/p(0,2))*2;y.drawImage(W,0+r,e/2.5+t+p(0,10),Y,Y);var s=e/Q*100;s>99.1&&(s=100),D.style.width=s+"%",w.style.cursor="ew-resize"}function c(){T.style.color="#9E9E9E",x.style.transform="scale(1.2)",ee=!1,setTimeout(function(){x.style.transform="scale(1)"},700),setTimeout(function(){T.style.color="#616161",T.style.color="inherit"},1300)}function u(){var e=(Date.now()-ne)/1e3*J;!V&&_&&K++;var t=K/20,a=g.noise2D(t,m.y);Q>e&&!V&&_&&te%3!==0?($=!0,l(e,a)):($=!1,w.style.cursor="pointer",0===te||V||te%3===0||(te=2,C&&ee?(L.innerHTML="DOWNLOAD THE ARTWORK",c(),i()):ee&&(L.innerHTML="DOWNLOAD THE ARTWORK",c(),i()))),s(),requestAnimationFrame(u)}var m=e("random-int"),f=e("bowser"),p=e("random-float"),v=e("node-waves"),h=e("simplex-noise"),g=new h,w=document.getElementById("canvas"),y=w.getContext("2d"),b=document.getElementById("image");b.src="./assets/flowers.png";var E=document.getElementById("image2");E.src="./assets/flowers-05.png";var A,I,L,T,x,k,D,M,C=f.mobile||f.tablet,O=[b,E],R=new Image,N=new Image,B=new Image,U=new Image,S=new Image,H=new Image,z=new Image,W=new Image,q=new Image,j=0,P=0,F=0,G=0;q.src="./assets/text.png";var X=document.getElementById("spin");X.style.opacity=1;var Y=1.3*w.getBoundingClientRect().width;900>Y&&(Y=900);var _=!1,K=0,V=!0,$=!1,Z=0,J=11,Q=170,ee=!0,te=0;w.width=Y,w.height=Y,R.onload=function(){X.style.opacity=0,y.drawImage(R,0,0,Y,Y),s(),o(),y.drawImage(R,0,0,Y,Y),u()},window.onload=function(){Array.from(document.getElementsByClassName("black")).forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),v.ripple(e)})}),A=document.getElementsByClassName("container")[0],I=document.getElementById("help"),L=document.getElementById("help-text"),T=document.getElementById("save-circle"),x=document.getElementById("save"),k=document.getElementById("play"),D=document.getElementById("progress"),M=document.getElementById("audio"),M.addEventListener("canplay",function(){k.classList.remove("fa-circle-o-notch"),k.classList.remove("fa-spin"),k.classList.add("fa-headphones"),k.addEventListener("click",function(){this.classList.contains("fa-headphones")?(this.classList.remove("fa-headphones"),this.classList.add("fa-stop"),M.play()):(this.classList.remove("fa-stop"),this.classList.add("fa-headphones"),M.pause())})}),x.addEventListener("click",function(){d(w)}),C&&(L.innerHTML="TAP THE IMAGE TO START"),i(),I.style.opacity=1,w.addEventListener("click",function(e){te++,K=0,ee=!0,e.preventDefault(),v.ripple(A,{position:{x:e.offsetX,y:e.offsetY},duration:500}),ne=Date.now(),$?(V=!0,_=!1,c(),C?L.innerHTML="TAP AGAIN TO RESET":L.innerHTML="CLICK AGAIN TO RESET",i()):(V=!1,C?L.innerHTML="TOUCH AND DRAG TO EFFECT THE DIRECTION":L.innerHTML="MOVE THE MOUSE TO EFFECT THE DIRECTION",i(),_=!0),C&&!$&&te%3===0?(L.innerHTML="TAP ON THE IMAGE TO START",I.style.opacity=0,X.style.opacity=1,setTimeout(function(){R=r(O),y.drawImage(R,0,0,Y,Y),s(),setTimeout(o,100),y.drawImage(R,0,0,Y,Y),D.style.width="0%",setTimeout(function(){X.style.opacity=0,I.style.opacity=1,i()},300)},50)):$||te%3!==0||(L.innerHTML="CLICK ON THE IMAGE TO START",i(),R=r(O),y.drawImage(R,0,0,Y,Y),s(),o(),y.drawImage(R,0,0,Y,Y),D.style.width="0%")})};var ae=O[Z].src;R.src=ae;var ne=Date.now();C&&(X.style.display="block",Q+=100),w.addEventListener("mousemove",function(e){j=1.3*e.offsetX,j-=Y/2,P=e.clientY-e.target.offsetLeft+1}),document.addEventListener("mousemove",function(e){F=e.clientX,G=e.clientY}),w.addEventListener("touchmove",function(e){j=1.3*e.touches[0].clientX,j-=Y/2,e.preventDefault()})},{bowser:2,"node-waves":3,"random-float":4,"random-int":5,"simplex-noise":6}],2:[function(e,t,a){!function(e,a){"undefined"!=typeof t&&t.exports?t.exports=a():"function"==typeof define&&define.amd?define(a):this[e]=a()}("bowser",function(){function e(e){function a(t){var a=e.match(t);return a&&a.length>1&&a[1]||""}function n(t){var a=e.match(t);return a&&a.length>1&&a[2]||""}var i,o=a(/(ipod|iphone|ipad)/i).toLowerCase(),r=/like android/i.test(e),s=!r&&/android/i.test(e),d=/nexus\s*[0-6]\s*/i.test(e),l=!d&&/nexus\s*[0-9]+/i.test(e),c=/CrOS/.test(e),u=/silk/i.test(e),m=/sailfish/i.test(e),f=/tizen/i.test(e),p=/(web|hpw)os/i.test(e),v=/windows phone/i.test(e),h=!v&&/windows/i.test(e),g=!o&&!u&&/macintosh/i.test(e),w=!s&&!m&&!f&&!p&&/linux/i.test(e),y=a(/edge\/(\d+(\.\d+)?)/i),b=a(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(e),A=!E&&/[^-]mobi/i.test(e),I=/xbox/i.test(e);/opera|opr|opios/i.test(e)?i={name:"Opera",opera:t,version:b||a(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(e)?i={name:"Opera Coast",coast:t,version:b||a(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?i={name:"Yandex Browser",yandexbrowser:t,version:b||a(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(e)?i={name:"UC Browser",ucbrowser:t,version:a(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(e)?i={name:"Maxthon",maxthon:t,version:a(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(e)?i={name:"Epiphany",epiphany:t,version:a(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(e)?i={name:"Puffin",puffin:t,version:a(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(e)?i={name:"Sleipnir",sleipnir:t,version:a(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(e)?i={name:"K-Meleon",kMeleon:t,version:a(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:v?(i={name:"Windows Phone",windowsphone:t},y?(i.msedge=t,i.version=y):(i.msie=t,i.version=a(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(e)?i={name:"Internet Explorer",msie:t,version:a(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:c?i={name:"Chrome",chromeos:t,chromeBook:t,chrome:t,version:a(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(e)?i={name:"Microsoft Edge",msedge:t,version:y}:/vivaldi/i.test(e)?i={name:"Vivaldi",vivaldi:t,version:a(/vivaldi\/(\d+(\.\d+)?)/i)||b}:m?i={name:"Sailfish",sailfish:t,version:a(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?i={name:"SeaMonkey",seamonkey:t,version:a(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(e)?(i={name:"Firefox",firefox:t,version:a(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(i.firefoxos=t)):u?i={name:"Amazon Silk",silk:t,version:a(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(e)?i={name:"PhantomJS",phantom:t,version:a(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?i={name:"BlackBerry",blackberry:t,version:b||a(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(i={name:"WebOS",webos:t,version:b||a(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(i.touchpad=t)):/bada/i.test(e)?i={name:"Bada",bada:t,version:a(/dolfin\/(\d+(\.\d+)?)/i)}:f?i={name:"Tizen",tizen:t,version:a(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||b}:/qupzilla/i.test(e)?i={name:"QupZilla",qupzilla:t,version:a(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||b}:/chrome|crios|crmo/i.test(e)?i={name:"Chrome",chrome:t,version:a(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:s?i={name:"Android",version:b}:/safari|applewebkit/i.test(e)?(i={name:"Safari",safari:t},b&&(i.version=b)):o?(i={name:"iphone"==o?"iPhone":"ipad"==o?"iPad":"iPod"},b&&(i.version=b)):i=/googlebot/i.test(e)?{name:"Googlebot",googlebot:t,version:a(/googlebot\/(\d+(\.\d+))/i)||b}:{name:a(/^(.*)\/(.*) /),version:n(/^(.*)\/(.*) /)},!i.msedge&&/(apple)?webkit/i.test(e)?(/(apple)?webkit\/537\.36/i.test(e)?(i.name=i.name||"Blink",i.blink=t):(i.name=i.name||"Webkit",i.webkit=t),!i.version&&b&&(i.version=b)):!i.opera&&/gecko\//i.test(e)&&(i.name=i.name||"Gecko",i.gecko=t,i.version=i.version||a(/gecko\/(\d+(\.\d+)?)/i)),i.msedge||!s&&!i.silk?o?(i[o]=t,i.ios=t):g?i.mac=t:I?i.xbox=t:h?i.windows=t:w&&(i.linux=t):i.android=t;var L="";i.windowsphone?L=a(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o?(L=a(/os (\d+([_\s]\d+)*) like mac os x/i),L=L.replace(/[_\s]/g,".")):s?L=a(/android[ \/-](\d+(\.\d+)*)/i):i.webos?L=a(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):i.blackberry?L=a(/rim\stablet\sos\s(\d+(\.\d+)*)/i):i.bada?L=a(/bada\/(\d+(\.\d+)*)/i):i.tizen&&(L=a(/tizen[\/\s](\d+(\.\d+)*)/i)),L&&(i.osversion=L);var T=L.split(".")[0];return E||l||"ipad"==o||s&&(3==T||T>=4&&!A)||i.silk?i.tablet=t:(A||"iphone"==o||"ipod"==o||s||d||i.blackberry||i.webos||i.bada)&&(i.mobile=t),i.msedge||i.msie&&i.version>=10||i.yandexbrowser&&i.version>=15||i.vivaldi&&i.version>=1||i.chrome&&i.version>=20||i.firefox&&i.version>=20||i.safari&&i.version>=6||i.opera&&i.version>=10||i.ios&&i.osversion&&i.osversion.split(".")[0]>=6||i.blackberry&&i.version>=10.1?i.a=t:i.msie&&i.version<10||i.chrome&&i.version<20||i.firefox&&i.version<20||i.safari&&i.version<6||i.opera&&i.version<10||i.ios&&i.osversion&&i.osversion.split(".")[0]<6?i.c=t:i.x=t,i}var t=!0,a=e("undefined"!=typeof navigator?navigator.userAgent:"");return a.test=function(e){for(var t=0;t<e.length;++t){var n=e[t];if("string"==typeof n&&n in a)return!0}return!1},a._detect=e,a})},{}],3:[function(e,t,a){(function(e){!function(e,n){"use strict";"function"==typeof define&&define.amd?define([],function(){return n.apply(e)}):"object"==typeof a?t.exports=n.call(e):e.Waves=n.call(e)}("object"==typeof e?e:this,function(){"use strict";function e(e){return null!==e&&e===e.window}function t(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(e){var t=typeof e;return"function"===t||"object"===t&&!!e}function n(e){return a(e)&&e.nodeType>0}function i(e){var t=m.call(e);return"[object String]"===t?u(e):a(e)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t)&&e.hasOwnProperty("length")?e:n(e)?[e]:[]}function o(e){var a,n,i={top:0,left:0},o=e&&e.ownerDocument;return a=o.documentElement,"undefined"!=typeof e.getBoundingClientRect&&(i=e.getBoundingClientRect()),n=t(o),{top:i.top+n.pageYOffset-a.clientTop,left:i.left+n.pageXOffset-a.clientLeft}}function r(e){var t="";for(var a in e)e.hasOwnProperty(a)&&(t+=a+":"+e[a]+";");return t}function s(e,t,a){if(a){a.classList.remove("waves-rippling");var n=a.getAttribute("data-x"),i=a.getAttribute("data-y"),o=a.getAttribute("data-scale"),s=a.getAttribute("data-translate"),d=Date.now()-Number(a.getAttribute("data-hold")),l=350-d;0>l&&(l=0),"mousemove"===e.type&&(l=150);var c="mousemove"===e.type?2500:p.duration;setTimeout(function(){var e={top:i+"px",left:n+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":o+" "+s,"-moz-transform":o+" "+s,"-ms-transform":o+" "+s,"-o-transform":o+" "+s,transform:o+" "+s};a.setAttribute("style",r(e)),setTimeout(function(){try{t.removeChild(a)}catch(e){return!1}},c)},l)}}function d(e){if(h.allowEvent(e)===!1)return null;for(var t=null,a=e.target||e.srcElement;null!==a.parentElement;){if(a.classList.contains("waves-effect")&&!(a instanceof SVGElement)){t=a;break}a=a.parentElement}return t}function l(e){var t=d(e);if(null!==t){if(t.disabled||t.getAttribute("disabled")||t.classList.contains("disabled"))return;if(h.registerEvent(e),"touchstart"===e.type&&p.delay){var a=!1,n=setTimeout(function(){n=null,p.show(e,t)},p.delay),i=function(i){n&&(clearTimeout(n),n=null,p.show(e,t)),a||(a=!0,p.hide(i,t))},o=function(e){n&&(clearTimeout(n),n=null),i(e)};t.addEventListener("touchmove",o,!1),t.addEventListener("touchend",i,!1),t.addEventListener("touchcancel",i,!1)}else p.show(e,t),f&&(t.addEventListener("touchend",p.hide,!1),t.addEventListener("touchcancel",p.hide,!1)),t.addEventListener("mouseup",p.hide,!1),t.addEventListener("mouseleave",p.hide,!1)}}var c=c||{},u=document.querySelectorAll.bind(document),m=Object.prototype.toString,f="ontouchstart"in window,p={duration:750,delay:200,show:function(e,t,a){if(2===e.button)return!1;t=t||this;var n=document.createElement("div");n.className="waves-ripple waves-rippling",t.appendChild(n);var i=o(t),s=0,d=0;"touches"in e&&e.touches.length?(s=e.touches[0].pageY-i.top,d=e.touches[0].pageX-i.left):(s=e.pageY-i.top,d=e.pageX-i.left),d=d>=0?d:0,s=s>=0?s:0;var l="scale("+t.clientWidth/100*3+")",c="translate(0,0)";a&&(c="translate("+a.x+"px, "+a.y+"px)"),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-x",d),n.setAttribute("data-y",s),n.setAttribute("data-scale",l),n.setAttribute("data-translate",c);var u={top:s+"px",left:d+"px"};n.classList.add("waves-notransition"),n.setAttribute("style",r(u)),n.classList.remove("waves-notransition"),u["-webkit-transform"]=l+" "+c,u["-moz-transform"]=l+" "+c,u["-ms-transform"]=l+" "+c,u["-o-transform"]=l+" "+c,u.transform=l+" "+c,u.opacity="1";var m="mousemove"===e.type?2500:p.duration;u["-webkit-transition-duration"]=m+"ms",u["-moz-transition-duration"]=m+"ms",u["-o-transition-duration"]=m+"ms",u["transition-duration"]=m+"ms",n.setAttribute("style",r(u))},hide:function(e,t){t=t||this;for(var a=t.getElementsByClassName("waves-rippling"),n=0,i=a.length;i>n;n++)s(e,t,a[n])}},v={input:function(e){var t=e.parentNode;if("i"!==t.tagName.toLowerCase()||!t.classList.contains("waves-effect")){var a=document.createElement("i");a.className=e.className+" waves-input-wrapper",e.className="waves-button-input",t.replaceChild(a,e),a.appendChild(e);var n=window.getComputedStyle(e,null),i=n.color,o=n.backgroundColor;a.setAttribute("style","color:"+i+";background:"+o),e.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(e){var t=e.parentNode;if("i"!==t.tagName.toLowerCase()||!t.classList.contains("waves-effect")){var a=document.createElement("i");t.replaceChild(a,e),a.appendChild(e)}}},h={touches:0,allowEvent:function(e){var t=!0;return/^(mousedown|mousemove)$/.test(e.type)&&h.touches&&(t=!1),t},registerEvent:function(e){var t=e.type;"touchstart"===t?h.touches+=1:/^(touchend|touchcancel)$/.test(t)&&setTimeout(function(){h.touches&&(h.touches-=1)},500)}};return c.init=function(e){var t=document.body;e=e||{},"duration"in e&&(p.duration=e.duration),"delay"in e&&(p.delay=e.delay),f&&(t.addEventListener("touchstart",l,!1),t.addEventListener("touchcancel",h.registerEvent,!1),t.addEventListener("touchend",h.registerEvent,!1)),t.addEventListener("mousedown",l,!1)},c.attach=function(e,t){e=i(e),"[object Array]"===m.call(t)&&(t=t.join(" ")),t=t?" "+t:"";for(var a,n,o=0,r=e.length;r>o;o++)a=e[o],n=a.tagName.toLowerCase(),-1!==["input","img"].indexOf(n)&&(v[n](a),a=a.parentElement),-1===a.className.indexOf("waves-effect")&&(a.className+=" waves-effect"+t)},c.ripple=function(e,t){e=i(e);var a=e.length;if(t=t||{},t.wait=t.wait||0,t.position=t.position||null,a)for(var n,r,s,d={},l=0,c={type:"mousedown",button:1},u=function(e,t){return function(){p.hide(e,t)}};a>l;l++)if(n=e[l],r=t.position||{x:n.clientWidth/2,y:n.clientHeight/2},s=o(n),d.x=s.left+r.x,d.y=s.top+r.y,c.pageX=d.x,c.pageY=d.y,p.show(c,n),t.wait>=0&&null!==t.wait){var m={type:"mouseup",button:1};setTimeout(u(m,n),t.wait)}},c.calm=function(e){e=i(e);for(var t={type:"mouseup",button:1},a=0,n=e.length;n>a;a++)p.hide(t,e[a])},c.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),c.init(e)},c})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,a){"use strict";t.exports=function(e,t){if(void 0===t&&(t=e,e=0),"number"!=typeof e||"number"!=typeof t)throw new TypeError("Expected all arguments to be numbers");return Math.random()*(t-e)+e}},{}],5:[function(e,t,a){"use strict";t.exports=function(e,t){if(void 0===t&&(t=e,e=0),"number"!=typeof e||"number"!=typeof t)throw new TypeError("Expected all arguments to be numbers");return Math.floor(Math.random()*(t-e+1)+e)}},{}],6:[function(e,t,a){!function(){"use strict";function e(e){e||(e=Math.random),this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;256>t;t++)this.p[t]=256*e();for(t=0;512>t;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}var n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,o=1/3,r=1/6,s=(Math.sqrt(5)-1)/4,d=(5-Math.sqrt(5))/20;e.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var a,o,r=this.permMod12,s=this.perm,d=this.grad3,l=0,c=0,u=0,m=(e+t)*n,f=Math.floor(e+m),p=Math.floor(t+m),v=(f+p)*i,h=f-v,g=p-v,w=e-h,y=t-g;w>y?(a=1,o=0):(a=0,o=1);var b=w-a+i,E=y-o+i,A=w-1+2*i,I=y-1+2*i,L=255&f,T=255&p,x=.5-w*w-y*y;if(x>=0){var k=3*r[L+s[T]];x*=x,l=x*x*(d[k]*w+d[k+1]*y)}var D=.5-b*b-E*E;if(D>=0){var M=3*r[L+a+s[T+o]];D*=D,c=D*D*(d[M]*b+d[M+1]*E)}var C=.5-A*A-I*I;if(C>=0){var O=3*r[L+1+s[T+1]];C*=C,u=C*C*(d[O]*A+d[O+1]*I)}return 70*(l+c+u)},noise3D:function(e,t,a){var n,i,s,d,l,c,u,m,f,p,v=this.permMod12,h=this.perm,g=this.grad3,w=(e+t+a)*o,y=Math.floor(e+w),b=Math.floor(t+w),E=Math.floor(a+w),A=(y+b+E)*r,I=y-A,L=b-A,T=E-A,x=e-I,k=t-L,D=a-T;x>=k?k>=D?(l=1,c=0,u=0,m=1,f=1,p=0):x>=D?(l=1,c=0,u=0,m=1,f=0,p=1):(l=0,c=0,u=1,m=1,f=0,p=1):D>k?(l=0,c=0,u=1,m=0,f=1,p=1):D>x?(l=0,c=1,u=0,m=0,f=1,p=1):(l=0,c=1,u=0,m=1,f=1,p=0);var M=x-l+r,C=k-c+r,O=D-u+r,R=x-m+2*r,N=k-f+2*r,B=D-p+2*r,U=x-1+3*r,S=k-1+3*r,H=D-1+3*r,z=255&y,W=255&b,q=255&E,j=.6-x*x-k*k-D*D;if(0>j)n=0;else{var P=3*v[z+h[W+h[q]]];j*=j,n=j*j*(g[P]*x+g[P+1]*k+g[P+2]*D)}var F=.6-M*M-C*C-O*O;if(0>F)i=0;else{var G=3*v[z+l+h[W+c+h[q+u]]];F*=F,i=F*F*(g[G]*M+g[G+1]*C+g[G+2]*O)}var X=.6-R*R-N*N-B*B;if(0>X)s=0;else{var Y=3*v[z+m+h[W+f+h[q+p]]];X*=X,s=X*X*(g[Y]*R+g[Y+1]*N+g[Y+2]*B)}var _=.6-U*U-S*S-H*H;if(0>_)d=0;else{var K=3*v[z+1+h[W+1+h[q+1]]];_*=_,d=_*_*(g[K]*U+g[K+1]*S+g[K+2]*H)}return 32*(n+i+s+d)},noise4D:function(e,t,a,n){var i,o,r,l,c,u=(this.permMod12,this.perm),m=this.grad4,f=(e+t+a+n)*s,p=Math.floor(e+f),v=Math.floor(t+f),h=Math.floor(a+f),g=Math.floor(n+f),w=(p+v+h+g)*d,y=p-w,b=v-w,E=h-w,A=g-w,I=e-y,L=t-b,T=a-E,x=n-A,k=0,D=0,M=0,C=0;I>L?k++:D++,I>T?k++:M++,I>x?k++:C++,L>T?D++:M++,L>x?D++:C++,T>x?M++:C++;var O,R,N,B,U,S,H,z,W,q,j,P;O=k>=3?1:0,R=D>=3?1:0,N=M>=3?1:0,B=C>=3?1:0,U=k>=2?1:0,S=D>=2?1:0,H=M>=2?1:0,z=C>=2?1:0,W=k>=1?1:0,q=D>=1?1:0,j=M>=1?1:0,P=C>=1?1:0;var F=I-O+d,G=L-R+d,X=T-N+d,Y=x-B+d,_=I-U+2*d,K=L-S+2*d,V=T-H+2*d,$=x-z+2*d,Z=I-W+3*d,J=L-q+3*d,Q=T-j+3*d,ee=x-P+3*d,te=I-1+4*d,ae=L-1+4*d,ne=T-1+4*d,ie=x-1+4*d,oe=255&p,re=255&v,se=255&h,de=255&g,le=.6-I*I-L*L-T*T-x*x;if(0>le)i=0;else{var ce=u[oe+u[re+u[se+u[de]]]]%32*4;le*=le,i=le*le*(m[ce]*I+m[ce+1]*L+m[ce+2]*T+m[ce+3]*x)}var ue=.6-F*F-G*G-X*X-Y*Y;if(0>ue)o=0;else{var me=u[oe+O+u[re+R+u[se+N+u[de+B]]]]%32*4;ue*=ue,o=ue*ue*(m[me]*F+m[me+1]*G+m[me+2]*X+m[me+3]*Y)}var fe=.6-_*_-K*K-V*V-$*$;if(0>fe)r=0;else{var pe=u[oe+U+u[re+S+u[se+H+u[de+z]]]]%32*4;fe*=fe,r=fe*fe*(m[pe]*_+m[pe+1]*K+m[pe+2]*V+m[pe+3]*$)}var ve=.6-Z*Z-J*J-Q*Q-ee*ee;if(0>ve)l=0;else{var he=u[oe+W+u[re+q+u[se+j+u[de+P]]]]%32*4;ve*=ve,l=ve*ve*(m[he]*Z+m[he+1]*J+m[he+2]*Q+m[he+3]*ee)}var ge=.6-te*te-ae*ae-ne*ne-ie*ie;if(0>ge)c=0;else{var we=u[oe+1+u[re+1+u[se+1+u[de+1]]]]%32*4;ge*=ge,c=ge*ge*(m[we]*te+m[we+1]*ae+m[we+2]*ne+m[we+3]*ie)}return 27*(i+o+r+l+c)}},"undefined"!=typeof define&&define.amd&&define(function(){return e}),"undefined"!=typeof a?a.SimplexNoise=e:"undefined"!=typeof window&&(window.SimplexNoise=e),"undefined"!=typeof t&&(t.exports=e)}()},{}]},{},[1]);
