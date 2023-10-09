"use strict";(self.webpackChunkimpulse_design=self.webpackChunkimpulse_design||[]).push([[607],{3607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(5706);o(n(5479)).default.pageLoad.onLoad((function(){(0,r.init)()}))},5843:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.callback,o=e.wait,r=void 0===o?250:o,i=e.isImmediate,a=void 0!==i&&i;return function(){var e=a&&!t;clearTimeout(t),t=setTimeout((function(){t=void 0,n()}),r),e&&n()}}},5479:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=new(n(9249).Application)({tablet:1199,phone:899,prefix:"v-",resizeDebounce:100,easing:[.25,.1,.25,1],isVersionPrinted:!0});t.default=o},5706:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var r=o(n(9059)),i=o(n(8932)),a=o(n(469));t.init=function(){(0,i.default)(),(0,a.default)();var e=(0,r.default)(),t=document.querySelectorAll("form");0!==t.length&&t.forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault();var o=Array.from(t.querySelectorAll("input, textarea"));e.forEach((function(e){var t=e.timeline,n=e.isThanks;e.isError,n?(null==t||t.play(),0!==o.length&&o.forEach((function(e){e.value=""}))):null==t||t.reverse()}))}))}))}},9059:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(4915));t.default=function(){var e=document.querySelectorAll(".popup");if(0===e.length)return[];var t=[];return e.forEach((function(e){var n=new r.default(e);t.push(n)})),t.forEach((function(e){e.initOpen(t)})),t}},7846:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(9249);t.default=function(e,t,n,r,i){if(e&&t&&n){var a=new o.Timeline({duration:600,easing:[.25,.1,.25,1]});return a.addCallback("start",(function(){var t,n;a.isReversed||(e.classList.contains("popup-search")||(null===(t=document.querySelector("html"))||void 0===t||t.classList.add("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.add("lock")),e.classList.add("_opened"),i&&i.play())})),a.addCallback("progress",(function(o){var i=o.progress,a=o.easing;!function(e){var t=e.progress,n=e.easing,o=e.parent,r=e.overlay,i=e.scroll,a=e.additional;if(o&&((s=o).style.display="".concat(t>0?"flex":"none"),o.classList.contains("popup-header-modal")?s.style.opacity="".concat(t):s.style.opacity="".concat(t>0?1:0)),r&&((s=r).style.opacity="".concat(n)),i){var s=i;o.classList.contains("popup-search")||(s.style.opacity="".concat(n)),o.classList.contains("popup-menu")?s.style.transform="translateX(".concat(100*(1-n),"%)"):o.classList.contains("popup-header-modal")?s.style.transform="translateY(".concat(2*(n-1),"rem)"):s.style.transform="translateY(".concat(2*(1-n),"rem)")}a&&((s=a).style.opacity="".concat(n),o.classList.contains("popup-menu")?s.style.transform="translateX(".concat(100*(1-n),"%)"):s.style.transform="translateY(".concat(2*(1-n),"rem)"))}({parent:e,scroll:t,overlay:n,progress:i,easing:a,additional:r})})),a.addCallback("end",(function(){var t,n;a.isReversed&&(null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.remove("lock"),e.classList.remove("_opened"),i&&i.pause())})),a}}},4915:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(7560),i=o(n(7846)),a=o(n(5843)),s=function(){function e(e,t){var n=this;this._isThanks=!1,this._isError=!1,this._closeButtons=[],this._openButtons=[],this._parent=e,this._callback=t,this._name=e.dataset.popupname,this._scroll=this._parent.querySelector(".popup__scroll"),this._overlay=this._parent.querySelector(".popup__overlay"),this._wrapper=this._parent.querySelector(".popup__wrapper"),this._additional=this._parent.querySelector(".popup__additional"),this._video=this._parent.querySelector(".video"),this._name&&this._scroll&&this._overlay&&this._wrapper&&(this._isThanks="_popup-thanks"===this._name,this._isError="_popup-error"===this._name,this._timeline=(0,i.default)(this._parent,this._scroll,this._overlay,this._additional,this._video),this._openButtons=Array.from(document.querySelectorAll('[data-popup="'.concat(this._name,'"]'))),this._closeButtons=Array.from(this._parent.querySelectorAll(".popup__close, .popup__button")),0!==this._closeButtons.length&&this._closeButtons.forEach((function(e){e&&e.addEventListener("click",(function(){var e;null===(e=n._timeline)||void 0===e||e.reverse()}))})),(0,r.useOutsideClick)(this._wrapper,(function(){var e,t,o,r;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(o=document.querySelector("body"))||void 0===o||o.classList.remove("lock"),null===(r=n._video)||void 0===r||r.pause())})),(0,r.useOnEscape)((function(){var e,t,o,r;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(o=document.querySelector("body"))||void 0===o||o.classList.remove("lock"),null===(r=n._video)||void 0===r||r.pause())})))}return Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isThanks",{get:function(){return this._isThanks},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isError",{get:function(){return this._isError},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scroll",{get:function(){return this._scroll},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlay",{get:function(){return this._overlay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"additional",{get:function(){return this._additional},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapper",{get:function(){return this._wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"video",{get:function(){return this._video},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeline",{get:function(){return this._timeline},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeButtons",{get:function(){return this._closeButtons},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"openButtons",{get:function(){return this._openButtons},enumerable:!1,configurable:!0}),e.prototype.initOpen=function(e){var t=this;0!==e.length&&this._openButtons&&this._openButtons.forEach((function(n){n.addEventListener("click",(function(n){var o;n.preventDefault(),e.forEach((function(e){var n;e.parent.classList.contains("_opened")&&e.name!==t._name&&(null===(n=e.timeline)||void 0===n||n.reverse())})),null===(o=t._timeline)||void 0===o||o.play()}))}))},e.prototype.onWindowResize=function(e){this._callback=e,window.addEventListener("resize",(0,a.default)({callback:e}))},e}();t.default=s},7560:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useOnEscape=t.useOutsideClick=void 0,t.useOutsideClick=function(e,t){document.addEventListener("mousedown",(function(n){e.contains(null==n?void 0:n.target)||1!==n.which||t()}))},t.useOnEscape=function(e){window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))}},8932:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9249),i=o(n(5479));t.default=function(){var e;return i.default.isMobile||(e=new r.ScrollBar({container:window})),e}},469:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(7036));t.default=function(){var e=[];return function(e){var t=document.querySelectorAll(".brands");0!==t.length&&t.forEach((function(t,n){var o=(0,r.default)({container:t,className:"brands",config:{allowTouchMove:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:40,loop:!0,breakpoints:{350:{slidesPerView:2,slidesPerGroup:2},650:{slidesPerView:3,slidesPerGroup:1,spaceBetween:20},899:{slidesPerView:4,slidesPerGroup:2,spaceBetween:30},1199:{slidesPerView:6,slidesPerGroup:3,spaceBetween:50}},autoplay:{delay:2e3,disableOnInteraction:!1}}});o&&e.push({name:"brands-".concat(n),slider:o})}))}(e),function(e){var t=document.querySelectorAll(".feedback");0!==t.length&&t.forEach((function(t,n){var o=(0,r.default)({container:t,className:"feedback",config:{effect:"fade",spaceBetween:10,loop:!0}});o&&e.push({name:"feedback-".concat(n),slider:o})}))}(e),e}},7036:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(7652)),a=n(4097);t.default=function(e){var t=e.container,n=e.className,r=e.isThumb,s=void 0!==r&&r,l=e.thumb,u=void 0===l?void 0:l,c=e.config,d=e.paginationType,p=void 0===d?"bullets":d,f=e.renderBullets;if(t&&n){var _=t.querySelector(".".concat(n,"-slider").concat(s?"-thumb":"",".swiper"))||null;if(_){var v=t.querySelector(".".concat(n,"-slider-pagination")),h=t.querySelector(".".concat(n,"-slider").concat(s?"-thumb":"","-controls .").concat(n,"-slider-prev")),y=t.querySelector(".".concat(n,"-slider").concat(s?"-thumb":"","-controls .").concat(n,"-slider-next"));return new i.default(_,o({modules:[a.Navigation,a.Thumbs,a.Pagination,a.EffectFade,a.Autoplay],thumbs:{swiper:u},pagination:{el:v,clickable:!0,type:p,renderBullet:f},navigation:{nextEl:y,prevEl:h},slidesPerView:1,spaceBetween:30},c))}}}}}]);