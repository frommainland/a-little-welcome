(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/b8u":function(t,o,n){var i=n("STAE");t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(t,o,n){var i=n("2oRo");t.exports=i.Promise},"8GlL":function(t,o,n){"use strict";var i=n("HAuM"),e=function(t){var o,n;this.promise=new t((function(t,i){if(void 0!==o||void 0!==n)throw TypeError("Bad Promise constructor");o=t,n=i})),this.resolve=i(o),this.reject=i(n)};t.exports.f=function(t){return new e(t)}},HAuM:function(t,o){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},SEBh:function(t,o,n){var i=n("glrk"),e=n("HAuM"),r=n("tiKp")("species");t.exports=function(t,o){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[r])?o:e(n)}},STAE:function(t,o,n){var i=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},bOcE:function(t,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return f}));var i,e=n("9Hrx"),r=n("q1tI"),s=n.n(r),u=n("ixhd"),h=n.n(u),a=[];function l(t,o,n,e){this.x=o,this.y=n,this.size=e,this.value=0,this.total=25,this.setToRandomSymbol=function(){this.value=t.round(t.random(0,9))},this.setToRandomSymbol(),this.render=function(o){t.textSize(this.size),t.textFont(i),0===o?t.fill(242,174,20):t.fill(14,69,149,255-o*(255/this.total)),t.text(this.value,this.x,this.y)}}function c(t,o,n,i){this.x=o,this.y=n,this.yspeed=i,this.totalSymbol=[],this.size=2*this.yspeed,this.generateSymbol=function(){this.totalSymbol=[];for(var o=0;o<25;o++){var n=new l(t,this.x,this.y-o*this.size,this.size);this.totalSymbol.push(n)}},this.generateSymbol(),this.render=function(){this.y>=this.totalSymbol[0].y+this.size&&(this.totalSymbol.unshift(new l(t,this.x,this.y,this.size)),this.totalSymbol.pop()),this.totalSymbol[this.totalSymbol.length-1].y>t.windowHeight&&(this.y=0,this.generateSymbol()),this.totalSymbol.forEach((function(t,o){t.render(o)})),t.random(1,100)<20&&this.totalSymbol[t.floor(t.random(this.totalSymbol.length))].setToRandomSymbol(),this.y+=2*this.yspeed}}var f=function(t){function o(){for(var o,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(o=t.call.apply(t,[this].concat(e))||this).windowResized=function(t){t.resizeCanvas(t.windowWidth/12*7,t.windowHeight)},o.preload=function(t){i=t.loadFont("Cindie2-M.ttf")},o.setup=function(t,o){t.createCanvas(t.windowWidth/12*7,t.windowHeight).parent(o);for(var n=0;n<80;n++)a.push(new c(t,n*(t.width/80),t.random(0,t.height),t.random(4,10)));t.noStroke(),t.textStyle(t.BOLD)},o.draw=function(t){t.background(0),a.forEach((function(t){t.render()}))},o}return Object(e.a)(o,t),o.prototype.render=function(){return s.a.createElement(h.a,{preload:this.preload,setup:this.setup,draw:this.draw,mousePressed:this.mousePressed,windowResized:this.windowResized,mouseReleased:this.mouseReleased})},o}(r.Component)},p532:function(t,o,n){"use strict";var i=n("I+eb"),e=n("xDBR"),r=n("/qmn"),s=n("0Dky"),u=n("0GbY"),h=n("SEBh"),a=n("zfnd"),l=n("busE");i({target:"Promise",proto:!0,real:!0,forced:!!r&&s((function(){r.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var o=h(this,u("Promise")),n="function"==typeof t;return this.then(n?function(n){return a(o,t()).then((function(){return n}))}:t,n?function(n){return a(o,t()).then((function(){throw n}))}:t)}}),e||"function"!=typeof r||r.prototype.finally||l(r.prototype,"finally",u("Promise").prototype.finally)},tiKp:function(t,o,n){var i=n("2oRo"),e=n("VpIT"),r=n("UTVS"),s=n("kOOl"),u=n("STAE"),h=n("/b8u"),a=e("wks"),l=i.Symbol,c=h?l:l&&l.withoutSetter||s;t.exports=function(t){return r(a,t)||(u&&r(l,t)?a[t]=l[t]:a[t]=c("Symbol."+t)),a[t]}},yLpj:function(t,o){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}t.exports=n},zfnd:function(t,o,n){var i=n("glrk"),e=n("hh1v"),r=n("8GlL");t.exports=function(t,o){if(i(t),e(o)&&o.constructor===t)return o;var n=r.f(t);return(0,n.resolve)(o),n.promise}}}]);
//# sourceMappingURL=25-9209f17cb2b5c0ceb027.js.map