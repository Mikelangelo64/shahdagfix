"use strict";(self.webpackChunkimpulse_design=self.webpackChunkimpulse_design||[]).push([[607],{3607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5706);r(n(5479)).default.pageLoad.onLoad((function(){(0,o.init)()}))},5843:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.callback,r=e.wait,o=void 0===r?250:r,i=e.isImmediate,a=void 0!==i&&i;return function(){var e=a&&!t;clearTimeout(t),t=setTimeout((function(){t=void 0,n()}),o),e&&n()}}},273:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.target,n=e.callbackIn,r=e.callbackOut,o=e.isCallOnce,i=void 0!==o&&o,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;if(e.isIntersecting){if(!n)return;n(t),i&&a.unobserve(t)}else{if(!r)return;r(t)}}),{root:null,threshold:0,rootMargin:"0px 0px 0px 0px"})}));if(t)return a.observe(t),a}},5479:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=new(n(9249).Application)({tablet:1199,phone:899,prefix:"v-",resizeDebounce:100,easing:[.25,.1,.25,1],isVersionPrinted:!0});t.default=r},803:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(7858));t.default=function(){var e=document.querySelectorAll(".fade-section");0!==e.length&&e.forEach((function(e){(0,o.default)(e)}))}},7858:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(3106)),i=r(n(94));t.default=function(e,t){void 0===t&&(t="1");var n=e.querySelector(".fade-section-content");if(n){var r={active:{key:t,item:void 0,button:void 0},prev:{key:t,item:void 0,button:void 0},parent:{item:n,parentHeight:(0,o.default)(n),activeHeight:n.clientHeight}},a=Array.from(e.querySelectorAll(".fade-section__button")),l=Array.from(e.querySelectorAll(".fade-section-content__item"));0!==l.length&&(r.active.button=e.querySelector(".fade-section__button.active"),a.forEach((function(t){t.addEventListener("click",(function(){var n,o,a=t.dataset.item;r.prev.key=r.active.key,r.active.key=a||"1",r.prev.button=r.active.button,r.active.button=t,r.prev.key!==r.active.key&&(r.prev.button&&r.prev.button.classList.remove("active"),r.active.button.classList.add("active"),l.forEach((function(e){e.dataset.item===r.active.key&&(n=e),e.dataset.item===r.prev.key&&(o=e)})),n&&o&&(r.parent.activeHeight=n.clientHeight,r.parent.parentHeight.save(),(0,i.default)({showItem:n,hideItem:o,parentHeight:r.parent.parentHeight,section:e,activeHeight:r.parent.activeHeight})))}))})))}}},94:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(9249);t.default=function(e){var t=e.showItem,n=e.hideItem,o=e.parentHeight,i=e.section,a=e.activeHeight,l=e.duration,u=void 0===l?600:l,c=t,s=n,d=i,f=new r.Timeline({duration:u,easing:[.25,.1,.25,1]});f.addCallback("start",(function(){o.save(),s.classList.add("unactive"),c.classList.remove("unactive")})),f.addCallback("progress",(function(e){var t=e.progress;d.style.pointerEvents="none",o.interpolate(a,t),c.style.opacity="".concat(t),s.style.opacity="".concat(1-t)})),f.addCallback("end",(function(){d.style.pointerEvents="",f.destroy(),o.reset()})),f.play()}},3106:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=0;return{save:function(){var n=e;n&&(t=n.clientHeight,n.style.height="".concat(t,"px"))},reset:function(){e&&(t=0,e.style.height="")},interpolate:function(n,r){if(e){var o=t+(n-t)*r;e.style.height="".concat(o,"px")}}}}},6638:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(5843)),i=r(n(5479)),a=function(e){e.forEach((function(e){var t=e.getBoundingClientRect().width,n=0,r=e.querySelectorAll(".footer-main__item");if(0!==r.length){r.forEach((function(e){var t=e.getBoundingClientRect().width;n+=t}));var o=Math.floor((t-n)/(r.length-1)*100)/100;e.style.setProperty("--footer-main-gap","".concat(o,"px"))}}))};t.default=function(){var e=document.querySelectorAll(".footer-main");0!==e.length&&(i.default.viewport.isPhone||a(e),window.addEventListener("resize",(0,o.default)({callback:function(){i.default.viewport.isPhone||a(e)}})))}},4984:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(273));t.default=function(){var e=document.querySelectorAll(".glob-bg");0!==e.length&&e.forEach((function(e){(0,o.default)({target:e,callbackIn:function(){e.classList.add("viewed")},callbackOut:function(){e.classList.remove("viewed")}})}))}},5706:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var o=r(n(803)),i=r(n(6638)),a=r(n(4984)),l=r(n(9059)),u=r(n(8932)),c=r(n(469)),s=r(n(71));t.init=function(){(0,u.default)();var e=(0,c.default)();(0,i.default)(),(0,a.default)(),(0,o.default)(),(0,s.default)(e);var t=(0,l.default)(),n=document.querySelectorAll("form");0!==n.length&&n.forEach((function(e){e.addEventListener("submit",(function(n){n.preventDefault();var r=Array.from(e.querySelectorAll("input, textarea"));t.forEach((function(e){var t=e.timeline,n=e.isThanks;e.isError,n?(null==t||t.play(),0!==r.length&&r.forEach((function(e){var t=e;console.log(t,t.value),t.value=""}))):null==t||t.reverse()}))}))}))}},9059:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(4915));t.default=function(){var e=document.querySelectorAll(".popup");if(0===e.length)return[];var t=[];return e.forEach((function(e){var n=new o.default(e);t.push(n)})),t.forEach((function(e){e.initOpen(t)})),t}},7846:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(9249);t.default=function(e,t,n,o,i){if(e&&t&&n){var a=new r.Timeline({duration:600,easing:[.25,.1,.25,1]});return a.addCallback("start",(function(){var t,n;a.isReversed||(e.classList.contains("popup-search")||(null===(t=document.querySelector("html"))||void 0===t||t.classList.add("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.add("lock")),e.classList.add("_opened"),i&&i.play())})),a.addCallback("progress",(function(r){var i=r.progress,a=r.easing;!function(e){var t=e.progress,n=e.easing,r=e.parent,o=e.overlay,i=e.scroll,a=e.additional;if(r&&((l=r).style.display="".concat(t>0?"flex":"none"),r.classList.contains("popup-header-modal")?l.style.opacity="".concat(t):l.style.opacity="".concat(t>0?1:0)),o&&((l=o).style.opacity="".concat(n)),i){var l=i;r.classList.contains("popup-search")||(l.style.opacity="".concat(n)),r.classList.contains("popup-menu")?l.style.transform="translateX(".concat(100*(1-n),"%)"):r.classList.contains("popup-header-modal")?l.style.transform="translateY(".concat(2*(n-1),"rem)"):l.style.transform="translateY(".concat(2*(1-n),"rem)")}a&&((l=a).style.opacity="".concat(n),r.classList.contains("popup-menu")?l.style.transform="translateX(".concat(100*(1-n),"%)"):l.style.transform="translateY(".concat(2*(1-n),"rem)"))}({parent:e,scroll:t,overlay:n,progress:i,easing:a,additional:o})})),a.addCallback("end",(function(){var t,n;a.isReversed&&(null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(n=document.querySelector("body"))||void 0===n||n.classList.remove("lock"),e.classList.remove("_opened"),i&&i.pause())})),a}}},4915:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(7560),i=r(n(7846)),a=r(n(5843)),l=function(){function e(e,t){var n=this;this._isThanks=!1,this._isError=!1,this._closeButtons=[],this._openButtons=[],this._parent=e,this._callback=t,this._name=e.dataset.popupname,this._scroll=this._parent.querySelector(".popup__scroll"),this._overlay=this._parent.querySelector(".popup__overlay"),this._wrapper=this._parent.querySelector(".popup__wrapper"),this._additional=this._parent.querySelector(".popup__additional"),this._video=this._parent.querySelector(".video"),this._name&&this._scroll&&this._overlay&&this._wrapper&&(this._isThanks="_popup-thanks"===this._name,this._isError="_popup-error"===this._name,this._timeline=(0,i.default)(this._parent,this._scroll,this._overlay,this._additional,this._video),this._openButtons=Array.from(document.querySelectorAll('[data-popup="'.concat(this._name,'"]'))),this._closeButtons=Array.from(this._parent.querySelectorAll(".popup__close, .popup__button")),0!==this._closeButtons.length&&this._closeButtons.forEach((function(e){e&&e.addEventListener("click",(function(){var e;null===(e=n._timeline)||void 0===e||e.reverse()}))})),(0,o.useOutsideClick)(this._wrapper,(function(){var e,t,r,o;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(r=document.querySelector("body"))||void 0===r||r.classList.remove("lock"),null===(o=n._video)||void 0===o||o.pause())})),(0,o.useOnEscape)((function(){var e,t,r,o;n._parent.classList.contains("_opened")&&(null===(e=n._timeline)||void 0===e||e.reverse(),null===(t=document.querySelector("html"))||void 0===t||t.classList.remove("lock"),null===(r=document.querySelector("body"))||void 0===r||r.classList.remove("lock"),null===(o=n._video)||void 0===o||o.pause())})))}return Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isThanks",{get:function(){return this._isThanks},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isError",{get:function(){return this._isError},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scroll",{get:function(){return this._scroll},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlay",{get:function(){return this._overlay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"additional",{get:function(){return this._additional},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapper",{get:function(){return this._wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"video",{get:function(){return this._video},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"timeline",{get:function(){return this._timeline},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"closeButtons",{get:function(){return this._closeButtons},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"openButtons",{get:function(){return this._openButtons},enumerable:!1,configurable:!0}),e.prototype.initOpen=function(e){var t=this;0!==e.length&&this._openButtons&&this._openButtons.forEach((function(n){n.addEventListener("click",(function(n){var r;n.preventDefault(),e.forEach((function(e){var n;e.parent.classList.contains("_opened")&&e.name!==t._name&&(null===(n=e.timeline)||void 0===n||n.reverse())})),null===(r=t._timeline)||void 0===r||r.play()}))}))},e.prototype.onWindowResize=function(e){this._callback=e,window.addEventListener("resize",(0,a.default)({callback:e}))},e}();t.default=l},7560:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useOnEscape=t.useOutsideClick=void 0,t.useOutsideClick=function(e,t){document.addEventListener("mousedown",(function(n){e.contains(null==n?void 0:n.target)||1!==n.which||t()}))},t.useOnEscape=function(e){window.addEventListener("keydown",(function(t){27===t.keyCode&&e()}))}},8932:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(9249),i=r(n(5479));t.default=function(){var e;return i.default.isMobile||(e=new o.ScrollBar({container:window})),e}},469:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(7036));t.default=function(){var e=[];return function(e){var t=document.querySelectorAll(".quiz");0!==t.length&&t.forEach((function(t,n){var r=(0,o.default)({container:t,className:"quiz",config:{effect:"fade",allowTouchMove:!1}});r&&e.push({name:"quiz-".concat(n),slider:r})}))}(e),function(e){var t=document.querySelectorAll(".brands");0!==t.length&&t.forEach((function(t,n){var r=(0,o.default)({container:t,className:"brands",config:{allowTouchMove:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:40,loop:!0,breakpoints:{350:{slidesPerView:2,slidesPerGroup:2},650:{slidesPerView:3,slidesPerGroup:1,spaceBetween:20},899:{slidesPerView:4,slidesPerGroup:2,spaceBetween:30},1199:{slidesPerView:6,slidesPerGroup:3,spaceBetween:50}},autoplay:{delay:2e3,disableOnInteraction:!1}}});r&&e.push({name:"brands-".concat(n),slider:r})}))}(e),function(e){var t=document.querySelectorAll(".feedback");0!==t.length&&t.forEach((function(t,n){var r=(0,o.default)({container:t,className:"feedback",config:{effect:"fade",spaceBetween:10,loop:!0}});r&&e.push({name:"feedback-".concat(n),slider:r})}))}(e),function(e){var t=document.querySelectorAll(".quiz-calendar");0!==t.length&&t.forEach((function(t,n){var r=(0,o.default)({container:t,className:"quiz-calendar",config:{allowTouchMove:!0,slidesPerView:2,slidesPerGroup:2,spaceBetween:12,breakpoints:{350:{slidesPerView:3,slidesPerGroup:3},450:{slidesPerView:4,slidesPerGroup:4},899:{slidesPerView:7,slidesPerGroup:7},1199:{slidesPerView:7,slidesPerGroup:7}}}});r&&e.push({name:"calendar-".concat(n),slider:r})}))}(e),e}},7036:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(7652)),a=n(4097);t.default=function(e){var t=e.container,n=e.className,o=e.isThumb,l=void 0!==o&&o,u=e.thumb,c=void 0===u?void 0:u,s=e.config,d=e.paginationType,f=void 0===d?"bullets":d,p=e.renderBullets;if(t&&n){var v=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"",".swiper"))||null;if(v){var h=t.querySelector(".".concat(n,"-slider-pagination")),_=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"","-controls .").concat(n,"-slider-prev")),y=t.querySelector(".".concat(n,"-slider").concat(l?"-thumb":"","-controls .").concat(n,"-slider-next"));return new i.default(v,r({modules:[a.Navigation,a.Thumbs,a.Pagination,a.EffectFade,a.Autoplay],thumbs:{swiper:c},pagination:{el:h,clickable:!0,type:f,renderBullet:p},navigation:{nextEl:y,prevEl:_},slidesPerView:1,spaceBetween:30},s))}}}},8897:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(6676)),i=r(n(7558)),a=r(n(1769));t.default=function(e,t){(0,o.default)(t),t.slides.forEach((function(e){(0,i.default)(e)})),(0,a.default)(e,t)}},71:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(8897));t.default=function(e){var t=document.querySelectorAll(".quiz__form.form");0!==t.length&&0!==e.length&&t.forEach((function(t,n){e.forEach((function(e){var r=e.name,i=e.slider;r==="quiz-".concat(n)&&i&&(0,o.default)(t,i)}))}))}},6676:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.el.querySelectorAll(".quiz-next"),n=e.el.querySelectorAll(".quiz-prev");0!==t.length&&t.forEach((function(t){t.addEventListener("click",(function(){e.slideNext()}))})),0!==n.length&&n.forEach((function(t){t.addEventListener("click",(function(){e.slidePrev()}))}))}},7558:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.querySelectorAll("input.required"),n=e.querySelectorAll(".quiz-next, .quiz-submit");0!==t.length&&0!==n.length&&t.forEach((function(e){var r,o=function(){var e=!!Array.from(t).find((function(e){return""===e.value}));n.forEach((function(t){e?t.classList.add("locked"):t.classList.remove("locked")}))};e.addEventListener("keyup",(function(){clearTimeout(r),r=setTimeout(o,200)})),e.addEventListener("keydown",(function(){clearTimeout(r)}))}))}},1769:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.querySelectorAll("input"),r=t.el.querySelectorAll("input, textarea"),o=t.el.querySelector(".quiz-submit");0!==n.length&&0!==r.length&&o&&o.addEventListener("click",(function(){r.forEach((function(e){n.forEach((function(t){var n=t;e.name===n.name&&(n.value=e.value)}))})),setTimeout((function(){t.slideTo(0),r.forEach((function(e){var t=e;"radio"!==t.type&&(t.value="")}))}),400)}))}}}]);