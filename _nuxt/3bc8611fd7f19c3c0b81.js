/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{452:function(t,e,n){var content=n(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("088dc89c",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return o.a})),n.d(e,"b",(function(){return P}));var o=n(1);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function f(t,e){h(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){h(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){h(t,e,n)}))}function h(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(o){var r=n?Reflect.getOwnMetadata(o,e,n):Reflect.getOwnMetadata(o,e);n?Reflect.defineMetadata(o,r,t,n):Reflect.defineMetadata(o,r,t)}))}var k={__proto__:[]}instanceof Array;function m(t){return function(e,n,o){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof o&&(o=void 0),r.__decorators__.push((function(e){return t(e,n,o)}))}}function w(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var o in t.$options.props)t.hasOwnProperty(o)||n.push(o);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var o={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(o[t]=data[t])})),o}var y=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(y.indexOf(t)>-1)e[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"==typeof o.value?(e.methods||(e.methods={}))[t]=o.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,o.value)}}):(o.get||o.set)&&((e.computed||(e.computed={}))[t]={get:o.get,set:o.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return w(this,t)}});var r=t.__decorators__;r&&(r.forEach((function(t){return t(e)})),delete t.__decorators__);var l=Object.getPrototypeOf(t.prototype),h=l instanceof o.a?l.constructor:o.a,k=h.extend(e);return j(k,t,h),d()&&f(k,t),k}var x={prototype:!0,arguments:!0,callee:!0,caller:!0};function j(t,e,n){Object.getOwnPropertyNames(e).forEach((function(o){if(!x[o]){var c=Object.getOwnPropertyDescriptor(t,o);if(!c||c.configurable){var l,d,f=Object.getOwnPropertyDescriptor(e,o);if(!k){if("cid"===o)return;var h=Object.getOwnPropertyDescriptor(n,o);if(l=f.value,d=r(l),null!=l&&("object"===d||"function"===d)&&h&&h.value===f.value)return}0,Object.defineProperty(t,o,f)}}}))}function _(t){return"function"==typeof t?v(t):function(e){return v(e,t)}}_.registerHooks=function(t){y.push.apply(y,l(t))};var O=_;var L="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function C(t,e,n){L&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function P(t){return void 0===t&&(t={}),function(e,n){C(t,e,n),m((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}},457:function(t,e,n){"use strict";var o=n(452);n.n(o).a},458:function(t,e,n){(e=n(13)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},460:function(t,e,n){"use strict";var o=n(19),r=n(23),c=n(28),l=n(29),d=n(25),f=n(453),h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){function e(){return Object(o.a)(this,e),Object(r.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(l.a)(e,t),e}(f.c);h([Object(f.b)({default:"",required:!1})],k.prototype,"title",void 0),h([Object(f.b)({default:"",required:!1})],k.prototype,"link",void 0),h([Object(f.b)({default:"",required:!1})],k.prototype,"body",void 0);var m=k=h([f.a],k),w=(n(457),n(10)),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n      "+t._s(t.title)+"\n    ")]):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},507:function(t,e,n){var content=n(651);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2808f8c8",content,!0,{sourceMap:!1})},649:function(t){t.exports=JSON.parse('[{"title":"長野県 公式","items":[{"url":"https://www.pref.nagano.lg.jp/","text":"長野県 公式ホームページ トップ"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona.html","text":"新型コロナウイルス感染症対策について"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona-doko.html","text":"新型コロナウイルスの動向"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona-onegai.html","text":"感染拡大防止のためのお願い"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona-soudan.html","text":"長野県の相談窓口"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona-naganoken-taiou.html","text":"長野県の対応状況"},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/joho/corona-kisotisiki.html","text":"新型コロナウイルスの基礎知識","divider":true},{"url":"https://www.pref.nagano.lg.jp/hoken-shippei/kenko/kenko/kansensho/influ/mask.html","text":"正しいマスクの着用方法"},{"url":"https://www.pref.nagano.lg.jp/kyoiku/kyoiku/corona.html","text":"新型コロナウイルス感染症対策について（教育委員会）"}]},{"title":"政府/官公庁","items":[{"url":"https://www.kantei.go.jp/","text":"首相官邸"},{"url":"https://www.kantei.go.jp/jp/headline/kansensho/coronavirus.html","text":"首相官邸 新型コロナウイルスへの備え","divider":true},{"url":"https://www.mhlw.go.jp/index.html","text":"厚生労働省"},{"url":"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html","text":"厚生労働省 新型コロナウイルス感染症について"},{"url":"https://www.meti.go.jp/","text":"経済産業省"},{"url":"https://www.meti.go.jp/covid-19/index.html","text":"経済産業省 新型コロナウイルス感染症関連"}]},{"title":"COVID-19 関連サイト","items":[{"url":"https://vdata.nikkei.com/newsgraphics/coronavirus-world-map/","text":"新型コロナウイルス感染 世界マップ（日経新聞）"},{"url":"https://toyokeizai.net/sp/visual/tko/covid19/","text":"新型コロナウイルス 国内感染の状況（東洋経済オンライン）"},{"url":"https://stopcovid19.metro.tokyo.lg.jp/","text":"東京都 新型コロナウイルス感染症 対策サイト（東京都 公式）"},{"url":"https://github.com/tokyo-metropolitan-gov/covid19/blob/development/FORKED_SITES.md","text":"各都道府県 新型コロナウイルス感染症 対策サイト一覧（東京都 公式）"},{"url":"https://www.stopcovid19.jp/","text":"新型コロナウイルス対策ダッシュボード"},{"url":"https://vscovid19.code4japan.org/","text":"民間支援情報ナビ"},{"url":"https://note.stopcovid19.jp/","text":"新型コロナウイルス感染症に関する専門家有志の会"}]},{"title":"COVID-19 長野県非公式 運営グループ","items":[{"url":"https://github.com/Stop-COVID19-Nagano/covid19","text":"長野県 非公式 新型コロナウイルス対策サイト（開発者向け）"},{"url":"https://www.facebook.com/groups/155315052273089","text":"長野県版 COVID-19 対策サイト をつくろう（Facebook Group）"}]}]')},650:function(t,e,n){"use strict";var o=n(507);n.n(o).a},651:function(t,e,n){(e=n(13)(!1)).push([t.i,".Link-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.Link .Link-List{list-style:none;padding:0}.Link .Link-List-item-anchor{display:flex;text-decoration:none;font-size:14px}@media screen and (max-width: 768px){.Link .Link-List-item-anchor{flex-wrap:wrap}}.Link .Link-List-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.Link .Link-List-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.Link .Link-List-item-anchor-link{padding-left:0px}}.Link .Link-List-border{margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid #d9d9d9}",""]),t.exports=e},672:function(t,e,n){"use strict";n.r(e);var o=n(649),r={components:{TextCard:n(460).a},data:function(){return{urlList:o}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}},head:function(){return{title:"当サイトについて"}}},c=(n(650),n(10)),l=n(45),d=n.n(l),f=n(442),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Link"},[n("h2",{staticClass:"Link-Heading"},[t._v("\n    "+t._s(t.$t("新型コロナウイルス関連リンク集"))+"\n  ")]),t._v(" "),t._l(t.urlList,(function(e,o){return n("div",{key:o},[n("TextCard",{attrs:{title:t.$t("link.title."+e.title)}},[n("ul",{staticClass:"Link-List"},t._l(e.items,(function(e,i){return n("li",{key:i,class:["Link-List-Item",{"Link-List-border":e.divider}]},[n("a",{staticClass:"Link-List-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("span",{staticClass:"Link-List-item-anchor-link"},[t._v("\n              "+t._s(t.$t("link."+e.text))+"\n              "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"Link-List-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n                mdi-open-in-new\n              ")])],1)])])})),0)])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a})}}]);