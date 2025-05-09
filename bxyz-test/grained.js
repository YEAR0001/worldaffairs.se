/*
  ____  __   ____  ____
 | __ )|\ \ / /\ \/ /
 |  _ \\ \ V /  \  / 
 | |_) |\ | |   /  \ 
 |____/ |_|_|  /_/\_\
                     
 eliot@bosmanxyz.xyz
*/

/*! grained.js 
* författare : sarath saleem  - https://github.com/sarathsaleem 
* mit-licens: http://opensource.org/licenses/MIT 
* github : https://github.com/sarathsaleem/grained 
* v0.0.1 
*/
!function(a,b){"use strict";function c(a,c){function d(a,b,c,d){var e="";e=b.length?b+"{"+c+"}":c,"insertRule"in a?a.insertRule(e,d):"addRule"in a&&a.addRule(b,c,d)}var e=null,f=null,g=null;if("string"==typeof a&&(e=b.getElementById(a.split("#")[1])),!e)return void console.error("Grained: cannot find the element with id "+a);f=e.id,"absolute"!==e.style.position&&(e.style.position="relative"),e.style.overflow="hidden";var h=["","-moz-","-o-animation-","-webkit-","-ms-"],i={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:20};Object.keys(c).forEach(function(a){i[a]=c[a]});for(var j=function(){var a=b.createElement("canvas"),c=a.getContext("2d");a.width=i.patternWidth,a.height=i.patternHeight;for(var d=0;d<i.patternWidth;d+=i.grainDensity)for(var e=0;e<i.patternHeight;e+=i.grainDensity){var shouldDraw = Math.random() < 0.7; if(shouldDraw) {c.fillStyle="rgba(173, 173, 173, "+i.grainOpacity+")",c.fillRect(d,e,i.grainWidth,i.grainHeight)}}return a.toDataURL("image/png")},k=j(),l="",m=["0%:-10%,10%","10%:-25%,0%","20%:-30%,10%","30%:-30%,30%","40%::-20%,20%","50%:-15%,10%","60%:-20%,20%","70%:-5%,20%","80%:-25%,5%","90%:-30%,25%","100%:-10%,10%"],n=h.length;n--;){l+="@"+h[n]+"keyframes grained{";for(var o=0;o<m.length;o++){var p=m[o].split(":");l+=p[0]+"{",l+=h[n]+"transform:translate("+p[1]+");",l+="}"}l+="}"}var q=b.getElementById("grained-animation");q&&q.parentElement.removeChild(q);var r=b.createElement("style");r.type="text/css",r.id="grained-animation",r.innerHTML=l,b.body.appendChild(r);var s=b.getElementById("grained-animation-"+f);s&&s.parentElement.removeChild(s),r=b.createElement("style"),r.type="text/css",r.id="grained-animation-"+f,b.body.appendChild(r);var t="background-image: url("+k+");";if(t+='position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;',n=h.length,i.animate)for(;n--;)t+=h[n]+"animation-name:grained;",t+=h[n]+"animation-iteration-count: infinite;",t+=h[n]+"animation-duration: "+i.grainChaos+"s;",t+=h[n]+"animation-timing-function: steps("+i.grainSpeed+", end);";g="#"+f+"::before",d(r.sheet,g,t)}a.grained=c}(window,document);
