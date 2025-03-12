import{j as m,r as vi}from"./index-DqFIyNb4.js";import{r as L,R as J,g as _i}from"./index-Dkaqzkgy.js";import"./index-COq-NKRs.js";var Ct="delete",R=5,ce=1<<R,Y=ce-1,Z={};function q1(){return{value:!1}}function ue(e){e&&(e.value=!0)}function J1(){}function et(e){return e.size===void 0&&(e.size=e.__iterate(ts)),e.size}function Me(e,t){if(typeof t!="number"){var n=t>>>0;if(""+n!==t||n===4294967295)return NaN;t=n}return t<0?et(e)+t:t}function ts(){return!0}function T1(e,t,n){return(e===0&&!rs(e)||n!==void 0&&e<=-n)&&(t===void 0||n!==void 0&&t>=n)}function Nt(e,t){return ns(e,t,0)}function y1(e,t){return ns(e,t,t)}function ns(e,t,n){return e===void 0?n:rs(e)?t===1/0?t:Math.max(0,t+e)|0:t===void 0||t===e?e:Math.min(t,e)|0}function rs(e){return e<0||e===0&&1/e===-1/0}var ss="@@__IMMUTABLE_ITERABLE__@@";function ee(e){return!!(e&&e[ss])}var is="@@__IMMUTABLE_KEYED__@@";function D(e){return!!(e&&e[is])}var os="@@__IMMUTABLE_INDEXED__@@";function Q(e){return!!(e&&e[os])}function b1(e){return D(e)||Q(e)}var P=function(t){return ee(t)?t:ie(t)},de=function(e){function t(n){return D(n)?n:Pe(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(P),He=function(e){function t(n){return Q(n)?n:_e(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(P),at=function(e){function t(n){return ee(n)&&!b1(n)?n:ft(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(P);P.Keyed=de;P.Indexed=He;P.Set=at;var as="@@__IMMUTABLE_SEQ__@@";function Q1(e){return!!(e&&e[as])}var cs="@@__IMMUTABLE_RECORD__@@";function ct(e){return!!(e&&e[cs])}function we(e){return ee(e)||ct(e)}var ut="@@__IMMUTABLE_ORDERED__@@";function ge(e){return!!(e&&e[ut])}var zt=0,ve=1,fe=2,U1=typeof Symbol=="function"&&Symbol.iterator,us="@@iterator",Z1=U1||us,x=function(t){this.next=t};x.prototype.toString=function(){return"[Iterator]"};x.KEYS=zt;x.VALUES=ve;x.ENTRIES=fe;x.prototype.inspect=x.prototype.toSource=function(){return this.toString()};x.prototype[Z1]=function(){return this};function N(e,t,n,r){var s=e===0?t:e===1?n:[t,n];return r?r.value=s:r={value:s,done:!1},r}function te(){return{value:void 0,done:!0}}function ls(e){return Array.isArray(e)?!0:!!w1(e)}function qn(e){return e&&typeof e.next=="function"}function j1(e){var t=w1(e);return t&&t.call(e)}function w1(e){var t=e&&(U1&&e[U1]||e[us]);if(typeof t=="function")return t}function Ti(e){var t=w1(e);return t&&t===e.entries}function yi(e){var t=w1(e);return t&&t===e.keys}var lt=Object.prototype.hasOwnProperty;function fs(e){return Array.isArray(e)||typeof e=="string"?!0:e&&typeof e=="object"&&Number.isInteger(e.length)&&e.length>=0&&(e.length===0?Object.keys(e).length===1:e.hasOwnProperty(e.length-1))}var ie=function(e){function t(n){return n==null?tn():we(n)?n.toSeq():Zi(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq {","}")},t.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},t.prototype.__iterate=function(r,s){var i=this._cache;if(i){for(var o=i.length,a=0;a!==o;){var c=i[s?o-++a:a++];if(r(c[1],c[0],this)===!1)break}return a}return this.__iterateUncached(r,s)},t.prototype.__iterator=function(r,s){var i=this._cache;if(i){var o=i.length,a=0;return new x(function(){if(a===o)return te();var c=i[s?o-++a:a++];return N(r,c[0],c[1])})}return this.__iteratorUncached(r,s)},t}(P),Pe=function(e){function t(n){return n==null?tn().toKeyedSeq():ee(n)?D(n)?n.toSeq():n.fromEntrySeq():ct(n)?n.toSeq():nn(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toKeyedSeq=function(){return this},t}(ie),_e=function(e){function t(n){return n==null?tn():ee(n)?D(n)?n.entrySeq():n.toIndexedSeq():ct(n)?n.toSeq().entrySeq():ds(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toIndexedSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq [","]")},t}(ie),ft=function(e){function t(n){return(ee(n)&&!b1(n)?n:_e(n)).toSetSeq()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toSetSeq=function(){return this},t}(ie);ie.isSeq=Q1;ie.Keyed=Pe;ie.Set=ft;ie.Indexed=_e;ie.prototype[as]=!0;var $e=function(e){function t(n){this._array=n,this.size=n.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return this.has(r)?this._array[Me(this,r)]:s},t.prototype.__iterate=function(r,s){for(var i=this._array,o=i.length,a=0;a!==o;){var c=s?o-++a:a++;if(r(i[c],c,this)===!1)break}return a},t.prototype.__iterator=function(r,s){var i=this._array,o=i.length,a=0;return new x(function(){if(a===o)return te();var c=s?o-++a:a++;return N(r,c,i[c])})},t}(_e),en=function(e){function t(n){var r=Object.keys(n).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[]);this._object=n,this._keys=r,this.size=r.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return s!==void 0&&!this.has(r)?s:this._object[r]},t.prototype.has=function(r){return lt.call(this._object,r)},t.prototype.__iterate=function(r,s){for(var i=this._object,o=this._keys,a=o.length,c=0;c!==a;){var u=o[s?a-++c:c++];if(r(i[u],u,this)===!1)break}return c},t.prototype.__iterator=function(r,s){var i=this._object,o=this._keys,a=o.length,c=0;return new x(function(){if(c===a)return te();var u=o[s?a-++c:c++];return N(r,u,i[u])})},t}(Pe);en.prototype[ut]=!0;var bi=function(e){function t(n){this._collection=n,this.size=n.length||n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.__iterateUncached=function(r,s){if(s)return this.cacheResult().__iterate(r,s);var i=this._collection,o=j1(i),a=0;if(qn(o))for(var c;!(c=o.next()).done&&r(c.value,a++,this)!==!1;);return a},t.prototype.__iteratorUncached=function(r,s){if(s)return this.cacheResult().__iterator(r,s);var i=this._collection,o=j1(i);if(!qn(o))return new x(te);var a=0;return new x(function(){var c=o.next();return c.done?c:N(r,a++,c.value)})},t}(_e),Un;function tn(){return Un||(Un=new $e([]))}function nn(e){var t=rn(e);if(t)return t.fromEntrySeq();if(typeof e=="object")return new en(e);throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: "+e)}function ds(e){var t=rn(e);if(t)return t;throw new TypeError("Expected Array or collection object of values: "+e)}function Zi(e){var t=rn(e);if(t)return Ti(e)?t.fromEntrySeq():yi(e)?t.toSetSeq():t;if(typeof e=="object")return new en(e);throw new TypeError("Expected Array or collection object of values, or keyed object: "+e)}function rn(e){return fs(e)?new $e(e):ls(e)?new bi(e):void 0}var ps="@@__IMMUTABLE_MAP__@@";function sn(e){return!!(e&&e[ps])}function hs(e){return sn(e)&&ge(e)}function jn(e){return!!(e&&typeof e.equals=="function"&&typeof e.hashCode=="function")}function se(e,t){if(e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1;if(typeof e.valueOf=="function"&&typeof t.valueOf=="function"){if(e=e.valueOf(),t=t.valueOf(),e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1}return!!(jn(e)&&jn(t)&&e.equals(t))}var mt=typeof Math.imul=="function"&&Math.imul(4294967295,2)===-2?Math.imul:function(t,n){t|=0,n|=0;var r=t&65535,s=n&65535;return r*s+((t>>>16)*s+r*(n>>>16)<<16>>>0)|0};function k1(e){return e>>>1&1073741824|e&3221225471}var wi=Object.prototype.valueOf;function re(e){if(e==null)return Fn(e);if(typeof e.hashCode=="function")return k1(e.hashCode(e));var t=Ei(e);if(t==null)return Fn(t);switch(typeof t){case"boolean":return t?1108378657:1108378656;case"number":return ki(t);case"string":return t.length>Oi?xi(t):F1(t);case"object":case"function":return Ii(t);case"symbol":return Si(t);default:if(typeof t.toString=="function")return F1(t.toString());throw new Error("Value type "+typeof t+" cannot be hashed.")}}function Fn(e){return e===null?1108378658:1108378659}function ki(e){if(e!==e||e===1/0)return 0;var t=e|0;for(t!==e&&(t^=e*4294967295);e>4294967295;)e/=4294967295,t^=e;return k1(t)}function xi(e){var t=R1[e];return t===void 0&&(t=F1(e),O1===Ri&&(O1=0,R1={}),O1++,R1[e]=t),t}function F1(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return k1(t)}function Si(e){var t=Kn[e];return t!==void 0||(t=ms(),Kn[e]=t),t}function Ii(e){var t;if($1&&(t=H1.get(e),t!==void 0)||(t=e[Ue],t!==void 0)||!Hn&&(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[Ue],t!==void 0||(t=Li(e),t!==void 0)))return t;if(t=ms(),$1)H1.set(e,t);else{if($n!==void 0&&$n(e)===!1)throw new Error("Non-extensible objects are not allowed as keys.");if(Hn)Object.defineProperty(e,Ue,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(e.propertyIsEnumerable!==void 0&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[Ue]=t;else if(e.nodeType!==void 0)e[Ue]=t;else throw new Error("Unable to set a non-enumerable property on object.")}return t}var $n=Object.isExtensible,Hn=function(){try{return Object.defineProperty({},"@",{}),!0}catch{return!1}}();function Li(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}function Ei(e){return e.valueOf!==wi&&typeof e.valueOf=="function"?e.valueOf(e):e}function ms(){var e=++E1;return E1&1073741824&&(E1=0),e}var $1=typeof WeakMap=="function",H1;$1&&(H1=new WeakMap);var Kn=Object.create(null),E1=0,Ue="__immutablehash__";typeof Symbol=="function"&&(Ue=Symbol(Ue));var Oi=16,Ri=255,O1=0,R1={},x1=function(e){function t(n,r){this._iter=n,this._useKeys=r,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return this._iter.get(r,s)},t.prototype.has=function(r){return this._iter.has(r)},t.prototype.valueSeq=function(){return this._iter.valueSeq()},t.prototype.reverse=function(){var r=this,s=on(this,!0);return this._useKeys||(s.valueSeq=function(){return r._iter.toSeq().reverse()}),s},t.prototype.map=function(r,s){var i=this,o=ys(this,r,s);return this._useKeys||(o.valueSeq=function(){return i._iter.toSeq().map(r,s)}),o},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o,a){return r(o,a,i)},s)},t.prototype.__iterator=function(r,s){return this._iter.__iterator(r,s)},t}(Pe);x1.prototype[ut]=!0;var gs=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.includes=function(r){return this._iter.includes(r)},t.prototype.__iterate=function(r,s){var i=this,o=0;return s&&et(this),this._iter.__iterate(function(a){return r(a,s?i.size-++o:o++,i)},s)},t.prototype.__iterator=function(r,s){var i=this,o=this._iter.__iterator(ve,s),a=0;return s&&et(this),new x(function(){var c=o.next();return c.done?c:N(r,s?i.size-++a:a++,c.value,c)})},t}(_e),vs=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.has=function(r){return this._iter.includes(r)},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o){return r(o,o,i)},s)},t.prototype.__iterator=function(r,s){var i=this._iter.__iterator(ve,s);return new x(function(){var o=i.next();return o.done?o:N(r,o.value,o.value,o)})},t}(ft),_s=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.entrySeq=function(){return this._iter.toSeq()},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o){if(o){Yn(o);var a=ee(o);return r(a?o.get(1):o[1],a?o.get(0):o[0],i)}},s)},t.prototype.__iterator=function(r,s){var i=this._iter.__iterator(ve,s);return new x(function(){for(;;){var o=i.next();if(o.done)return o;var a=o.value;if(a){Yn(a);var c=ee(a);return N(r,c?a.get(0):a[0],c?a.get(1):a[1],o)}}})},t}(Pe);gs.prototype.cacheResult=x1.prototype.cacheResult=vs.prototype.cacheResult=_s.prototype.cacheResult=cn;function Ts(e){var t=ke(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var n=e.reverse.apply(this);return n.flip=function(){return e.reverse()},n},t.has=function(n){return e.includes(n)},t.includes=function(n){return e.has(n)},t.cacheResult=cn,t.__iterateUncached=function(n,r){var s=this;return e.__iterate(function(i,o){return n(o,i,s)!==!1},r)},t.__iteratorUncached=function(n,r){if(n===fe){var s=e.__iterator(n,r);return new x(function(){var i=s.next();if(!i.done){var o=i.value[0];i.value[0]=i.value[1],i.value[1]=o}return i})}return e.__iterator(n===ve?zt:ve,r)},t}function ys(e,t,n){var r=ke(e);return r.size=e.size,r.has=function(s){return e.has(s)},r.get=function(s,i){var o=e.get(s,Z);return o===Z?i:t.call(n,o,s,e)},r.__iterateUncached=function(s,i){var o=this;return e.__iterate(function(a,c,u){return s(t.call(n,a,c,u),c,o)!==!1},i)},r.__iteratorUncached=function(s,i){var o=e.__iterator(fe,i);return new x(function(){var a=o.next();if(a.done)return a;var c=a.value,u=c[0];return N(s,u,t.call(n,c[1],u,e),a)})},r}function on(e,t){var n=this,r=ke(e);return r._iter=e,r.size=e.size,r.reverse=function(){return e},e.flip&&(r.flip=function(){var s=Ts(e);return s.reverse=function(){return e.flip()},s}),r.get=function(s,i){return e.get(t?s:-1-s,i)},r.has=function(s){return e.has(t?s:-1-s)},r.includes=function(s){return e.includes(s)},r.cacheResult=cn,r.__iterate=function(s,i){var o=this,a=0;return i&&et(e),e.__iterate(function(c,u){return s(c,t?u:i?o.size-++a:a++,o)},!i)},r.__iterator=function(s,i){var o=0;i&&et(e);var a=e.__iterator(fe,!i);return new x(function(){var c=a.next();if(c.done)return c;var u=c.value;return N(s,t?u[0]:i?n.size-++o:o++,u[1],c)})},r}function bs(e,t,n,r){var s=ke(e);return r&&(s.has=function(i){var o=e.get(i,Z);return o!==Z&&!!t.call(n,o,i,e)},s.get=function(i,o){var a=e.get(i,Z);return a!==Z&&t.call(n,a,i,e)?a:o}),s.__iterateUncached=function(i,o){var a=this,c=0;return e.__iterate(function(u,l,f){if(t.call(n,u,l,f))return c++,i(u,r?l:c-1,a)},o),c},s.__iteratorUncached=function(i,o){var a=e.__iterator(fe,o),c=0;return new x(function(){for(;;){var u=a.next();if(u.done)return u;var l=u.value,f=l[0],d=l[1];if(t.call(n,d,f,e))return N(i,r?f:c++,d,u)}})},s}function Wi(e,t,n){var r=pt().asMutable();return e.__iterate(function(s,i){r.update(t.call(n,s,i,e),0,function(o){return o+1})}),r.asImmutable()}function Ci(e,t,n){var r=D(e),s=(ge(e)?We():pt()).asMutable();e.__iterate(function(o,a){s.update(t.call(n,o,a,e),function(c){return c=c||[],c.push(r?[a,o]:o),c})});var i=ks(e);return s.map(function(o){return E(e,i(o))}).asImmutable()}function an(e,t,n,r){var s=e.size;if(T1(t,n,s))return e;var i=Nt(t,s),o=y1(n,s);if(i!==i||o!==o)return an(e.toSeq().cacheResult(),t,n,r);var a=o-i,c;a===a&&(c=a<0?0:a);var u=ke(e);return u.size=c===0?c:e.size&&c||void 0,!r&&Q1(e)&&c>=0&&(u.get=function(l,f){return l=Me(this,l),l>=0&&l<c?e.get(l+i,f):f}),u.__iterateUncached=function(l,f){var d=this;if(c===0)return 0;if(f)return this.cacheResult().__iterate(l,f);var p=0,h=!0,g=0;return e.__iterate(function(v,_){if(!(h&&(h=p++<i)))return g++,l(v,r?_:g-1,d)!==!1&&g!==c}),g},u.__iteratorUncached=function(l,f){if(c!==0&&f)return this.cacheResult().__iterator(l,f);if(c===0)return new x(te);var d=e.__iterator(l,f),p=0,h=0;return new x(function(){for(;p++<i;)d.next();if(++h>c)return te();var g=d.next();return r||l===ve||g.done?g:l===zt?N(l,h-1,void 0,g):N(l,h-1,g.value[1],g)})},u}function Ni(e,t,n){var r=ke(e);return r.__iterateUncached=function(s,i){var o=this;if(i)return this.cacheResult().__iterate(s,i);var a=0;return e.__iterate(function(c,u,l){return t.call(n,c,u,l)&&++a&&s(c,u,o)}),a},r.__iteratorUncached=function(s,i){var o=this;if(i)return this.cacheResult().__iterator(s,i);var a=e.__iterator(fe,i),c=!0;return new x(function(){if(!c)return te();var u=a.next();if(u.done)return u;var l=u.value,f=l[0],d=l[1];return t.call(n,d,f,o)?s===fe?u:N(s,f,d,u):(c=!1,te())})},r}function Zs(e,t,n,r){var s=ke(e);return s.__iterateUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterate(i,o);var c=!0,u=0;return e.__iterate(function(l,f,d){if(!(c&&(c=t.call(n,l,f,d))))return u++,i(l,r?f:u-1,a)}),u},s.__iteratorUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterator(i,o);var c=e.__iterator(fe,o),u=!0,l=0;return new x(function(){var f,d,p;do{if(f=c.next(),f.done)return r||i===ve?f:i===zt?N(i,l++,void 0,f):N(i,l++,f.value[1],f);var h=f.value;d=h[0],p=h[1],u&&(u=t.call(n,p,d,a))}while(u);return i===fe?f:N(i,d,p,f)})},s}function zi(e,t){var n=D(e),r=[e].concat(t).map(function(o){return ee(o)?n&&(o=de(o)):o=n?nn(o):ds(Array.isArray(o)?o:[o]),o}).filter(function(o){return o.size!==0});if(r.length===0)return e;if(r.length===1){var s=r[0];if(s===e||n&&D(s)||Q(e)&&Q(s))return s}var i=new $e(r);return n?i=i.toKeyedSeq():Q(e)||(i=i.toSetSeq()),i=i.flatten(!0),i.size=r.reduce(function(o,a){if(o!==void 0){var c=a.size;if(c!==void 0)return o+c}},0),i}function ws(e,t,n){var r=ke(e);return r.__iterateUncached=function(s,i){if(i)return this.cacheResult().__iterate(s,i);var o=0,a=!1;function c(u,l){u.__iterate(function(f,d){return(!t||l<t)&&ee(f)?c(f,l+1):(o++,s(f,n?d:o-1,r)===!1&&(a=!0)),!a},i)}return c(e,0),o},r.__iteratorUncached=function(s,i){if(i)return this.cacheResult().__iterator(s,i);var o=e.__iterator(s,i),a=[],c=0;return new x(function(){for(;o;){var u=o.next();if(u.done!==!1){o=a.pop();continue}var l=u.value;if(s===fe&&(l=l[1]),(!t||a.length<t)&&ee(l))a.push(o),o=l.__iterator(s,i);else return n?u:N(s,c++,l,u)}return te()})},r}function Di(e,t,n){var r=ks(e);return e.toSeq().map(function(s,i){return r(t.call(n,s,i,e))}).flatten(!0)}function Mi(e,t){var n=ke(e);return n.size=e.size&&e.size*2-1,n.__iterateUncached=function(r,s){var i=this,o=0;return e.__iterate(function(a){return(!o||r(t,o++,i)!==!1)&&r(a,o++,i)!==!1},s),o},n.__iteratorUncached=function(r,s){var i=e.__iterator(ve,s),o=0,a;return new x(function(){return(!a||o%2)&&(a=i.next(),a.done)?a:o%2?N(r,o++,t):N(r,o++,a.value,a)})},n}function tt(e,t,n){t||(t=xs);var r=D(e),s=0,i=e.toSeq().map(function(o,a){return[a,o,s++,n?n(o,a,e):o]}).valueSeq().toArray();return i.sort(function(o,a){return t(o[3],a[3])||o[2]-a[2]}).forEach(r?function(o,a){i[a].length=2}:function(o,a){i[a]=o[1]}),r?Pe(i):Q(e)?_e(i):ft(i)}function Ut(e,t,n){if(t||(t=xs),n){var r=e.toSeq().map(function(s,i){return[s,n(s,i,e)]}).reduce(function(s,i){return Vn(t,s[1],i[1])?i:s});return r&&r[0]}return e.reduce(function(s,i){return Vn(t,s,i)?i:s})}function Vn(e,t,n){var r=e(n,t);return r===0&&n!==t&&(n==null||n!==n)||r>0}function jt(e,t,n,r){var s=ke(e),i=new $e(n).map(function(o){return o.size});return s.size=r?i.max():i.min(),s.__iterate=function(o,a){for(var c=this.__iterator(ve,a),u,l=0;!(u=c.next()).done&&o(u.value,l++,this)!==!1;);return l},s.__iteratorUncached=function(o,a){var c=n.map(function(f){return f=P(f),j1(a?f.reverse():f)}),u=0,l=!1;return new x(function(){var f;return l||(f=c.map(function(d){return d.next()}),l=r?f.every(function(d){return d.done}):f.some(function(d){return d.done})),l?te():N(o,u++,t.apply(null,f.map(function(d){return d.value})))})},s}function E(e,t){return e===t?e:Q1(e)?t:e.constructor(t)}function Yn(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function ks(e){return D(e)?de:Q(e)?He:at}function ke(e){return Object.create((D(e)?Pe:Q(e)?_e:ft).prototype)}function cn(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):ie.prototype.cacheResult.call(this)}function xs(e,t){return e===void 0&&t===void 0?0:e===void 0?1:t===void 0?-1:e>t?1:e<t?-1:0}function ye(e,t){t=t||0;for(var n=Math.max(0,e.length-t),r=new Array(n),s=0;s<n;s++)r[s]=e[s+t];return r}function un(e,t){if(!e)throw new Error(t)}function le(e){un(e!==1/0,"Cannot perform this action with an infinite size.")}function Ss(e){if(fs(e)&&typeof e!="string")return e;if(ge(e))return e.toArray();throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: "+e)}var Bi=Object.prototype.toString;function Pi(e){if(!e||typeof e!="object"||Bi.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t,r=Object.getPrototypeOf(t);r!==null;)n=r,r=Object.getPrototypeOf(n);return n===t}function Be(e){return typeof e=="object"&&(we(e)||Array.isArray(e)||Pi(e))}function xt(e){try{return typeof e=="string"?JSON.stringify(e):String(e)}catch{return JSON.stringify(e)}}function Ai(e,t){return we(e)?e.has(t):Be(e)&&lt.call(e,t)}function Is(e,t,n){return we(e)?e.get(t,n):Ai(e,t)?typeof e.get=="function"?e.get(t):e[t]:n}function u1(e){if(Array.isArray(e))return ye(e);var t={};for(var n in e)lt.call(e,n)&&(t[n]=e[n]);return t}function qi(e,t){if(!Be(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(we(e)){if(!e.remove)throw new TypeError("Cannot update immutable value without .remove() method: "+e);return e.remove(t)}if(!lt.call(e,t))return e;var n=u1(e);return Array.isArray(n)?n.splice(t,1):delete n[t],n}function Ui(e,t,n){if(!Be(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(we(e)){if(!e.set)throw new TypeError("Cannot update immutable value without .set() method: "+e);return e.set(t,n)}if(lt.call(e,t)&&n===e[t])return e;var r=u1(e);return r[t]=n,r}function dt(e,t,n,r){r||(r=n,n=void 0);var s=Ls(we(e),e,Ss(t),0,n,r);return s===Z?n:s}function Ls(e,t,n,r,s,i){var o=t===Z;if(r===n.length){var a=o?s:t,c=i(a);return c===a?t:c}if(!o&&!Be(t))throw new TypeError("Cannot update within non-data-structure value in path ["+n.slice(0,r).map(xt)+"]: "+t);var u=n[r],l=o?Z:Is(t,u,Z),f=Ls(l===Z?e:we(l),l,n,r+1,s,i);return f===l?t:f===Z?qi(t,u):Ui(o?e?he():{}:t,u,f)}function ji(e,t,n){return dt(e,t,Z,function(){return n})}function ln(e,t){return ji(this,e,t)}function Fi(e,t){return dt(e,t,function(){return Z})}function fn(e){return Fi(this,e)}function Es(e,t,n,r){return dt(e,[t],n,r)}function dn(e,t,n){return arguments.length===1?e(this):Es(this,e,t,n)}function pn(e,t,n){return dt(this,e,t,n)}function Os(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Ws(this,e)}function Rs(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(typeof e!="function")throw new TypeError("Invalid merger function: "+e);return Ws(this,t,e)}function Ws(e,t,n){for(var r=[],s=0;s<t.length;s++){var i=de(t[s]);i.size!==0&&r.push(i)}return r.length===0?e:e.toSeq().size===0&&!e.__ownerID&&r.length===1?e.constructor(r[0]):e.withMutations(function(o){for(var a=n?function(u,l){Es(o,l,Z,function(f){return f===Z?u:n(f,u,l)})}:function(u,l){o.set(l,u)},c=0;c<r.length;c++)r[c].forEach(a)})}function hn(e,t,n){return mn(e,t,$i(n))}function mn(e,t,n){if(!Be(e))throw new TypeError("Cannot merge into non-data-structure value: "+e);if(we(e))return typeof n=="function"&&e.mergeWith?e.mergeWith.apply(e,[n].concat(t)):e.merge?e.merge.apply(e,t):e.concat.apply(e,t);for(var r=Array.isArray(e),s=e,i=r?He:de,o=r?function(c){s===e&&(s=u1(s)),s.push(c)}:function(c,u){var l=lt.call(s,u),f=l&&n?n(s[u],c,u):c;(!l||f!==s[u])&&(s===e&&(s=u1(s)),s[u]=f)},a=0;a<t.length;a++)i(t[a]).forEach(o);return s}function $i(e){function t(n,r,s){return Be(n)&&Be(r)&&Hi(n,r)?mn(n,[r],t):e?e(n,r,s):r}return t}function Hi(e,t){var n=ie(e),r=ie(t);return Q(n)===Q(r)&&D(n)===D(r)}function Cs(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return hn(this,e)}function Ns(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return hn(this,t,e)}function gn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return dt(this,e,he(),function(r){return mn(r,t)})}function vn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return dt(this,e,he(),function(r){return hn(r,t)})}function Dt(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this}function Mt(){return this.__ownerID?this:this.__ensureOwner(new J1)}function Bt(){return this.__ensureOwner()}function _n(){return this.__altered}var pt=function(e){function t(n){return n==null?he():sn(n)&&!ge(n)?n:he().withMutations(function(r){var s=e(n);le(s.size),s.forEach(function(i,o){return r.set(o,i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];return he().withMutations(function(i){for(var o=0;o<r.length;o+=2){if(o+1>=r.length)throw new Error("Missing value for key: "+r[o]);i.set(r[o],r[o+1])}})},t.prototype.toString=function(){return this.__toString("Map {","}")},t.prototype.get=function(r,s){return this._root?this._root.get(0,void 0,r,s):s},t.prototype.set=function(r,s){return Jn(this,r,s)},t.prototype.remove=function(r){return Jn(this,r,Z)},t.prototype.deleteAll=function(r){var s=P(r);return s.size===0?this:this.withMutations(function(i){s.forEach(function(o){return i.remove(o)})})},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):he()},t.prototype.sort=function(r){return We(tt(this,r))},t.prototype.sortBy=function(r,s){return We(tt(this,s,r))},t.prototype.map=function(r,s){var i=this;return this.withMutations(function(o){o.forEach(function(a,c){o.set(c,r.call(s,a,c,i))})})},t.prototype.__iterator=function(r,s){return new Ki(this,r,s)},t.prototype.__iterate=function(r,s){var i=this,o=0;return this._root&&this._root.iterate(function(a){return o++,r(a[1],a[0],i)},s),o},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?Tn(this.size,this._root,r,this.__hash):this.size===0?he():(this.__ownerID=r,this.__altered=!1,this)},t}(de);pt.isMap=sn;var W=pt.prototype;W[ps]=!0;W[Ct]=W.remove;W.removeAll=W.deleteAll;W.setIn=ln;W.removeIn=W.deleteIn=fn;W.update=dn;W.updateIn=pn;W.merge=W.concat=Os;W.mergeWith=Rs;W.mergeDeep=Cs;W.mergeDeepWith=Ns;W.mergeIn=gn;W.mergeDeepIn=vn;W.withMutations=Dt;W.wasAltered=_n;W.asImmutable=Bt;W["@@transducer/init"]=W.asMutable=Mt;W["@@transducer/step"]=function(e,t){return e.set(t[0],t[1])};W["@@transducer/result"]=function(e){return e.asImmutable()};var St=function(t,n){this.ownerID=t,this.entries=n};St.prototype.get=function(t,n,r,s){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(se(r,i[o][0]))return i[o][1];return s};St.prototype.update=function(t,n,r,s,i,o,a){for(var c=i===Z,u=this.entries,l=0,f=u.length;l<f&&!se(s,u[l][0]);l++);var d=l<f;if(d?u[l][1]===i:c)return this;if(ue(a),(c||!d)&&ue(o),!(c&&u.length===1)){if(!d&&!c&&u.length>=Qi)return Vi(t,u,s,i);var p=t&&t===this.ownerID,h=p?u:ye(u);return d?c?l===f-1?h.pop():h[l]=h.pop():h[l]=[s,i]:h.push([s,i]),p?(this.entries=h,this):new St(t,h)}};var nt=function(t,n,r){this.ownerID=t,this.bitmap=n,this.nodes=r};nt.prototype.get=function(t,n,r,s){n===void 0&&(n=re(r));var i=1<<((t===0?n:n>>>t)&Y),o=this.bitmap;return(o&i)===0?s:this.nodes[zs(o&i-1)].get(t+R,n,r,s)};nt.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=(n===0?r:r>>>n)&Y,u=1<<c,l=this.bitmap,f=(l&u)!==0;if(!f&&i===Z)return this;var d=zs(l&u-1),p=this.nodes,h=f?p[d]:void 0,g=yn(h,t,n+R,r,s,i,o,a);if(g===h)return this;if(!f&&g&&p.length>=eo)return Gi(t,p,l,c,g);if(f&&!g&&p.length===2&&Qn(p[d^1]))return p[d^1];if(f&&g&&p.length===1&&Qn(g))return g;var v=t&&t===this.ownerID,_=f?g?l:l^u:l|u,w=f?g?Ds(p,d,g,v):Ji(p,d,v):Xi(p,d,g,v);return v?(this.bitmap=_,this.nodes=w,this):new nt(t,_,w)};var It=function(t,n,r){this.ownerID=t,this.count=n,this.nodes=r};It.prototype.get=function(t,n,r,s){n===void 0&&(n=re(r));var i=(t===0?n:n>>>t)&Y,o=this.nodes[i];return o?o.get(t+R,n,r,s):s};It.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=(n===0?r:r>>>n)&Y,u=i===Z,l=this.nodes,f=l[c];if(u&&!f)return this;var d=yn(f,t,n+R,r,s,i,o,a);if(d===f)return this;var p=this.count;if(!f)p++;else if(!d&&(p--,p<to))return Yi(t,l,p,c);var h=t&&t===this.ownerID,g=Ds(l,c,d,h);return h?(this.count=p,this.nodes=g,this):new It(t,p,g)};var rt=function(t,n,r){this.ownerID=t,this.keyHash=n,this.entries=r};rt.prototype.get=function(t,n,r,s){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(se(r,i[o][0]))return i[o][1];return s};rt.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=i===Z;if(r!==this.keyHash)return c?this:(ue(a),ue(o),bn(this,t,n,r,[s,i]));for(var u=this.entries,l=0,f=u.length;l<f&&!se(s,u[l][0]);l++);var d=l<f;if(d?u[l][1]===i:c)return this;if(ue(a),(c||!d)&&ue(o),c&&f===2)return new Re(t,this.keyHash,u[l^1]);var p=t&&t===this.ownerID,h=p?u:ye(u);return d?c?l===f-1?h.pop():h[l]=h.pop():h[l]=[s,i]:h.push([s,i]),p?(this.entries=h,this):new rt(t,this.keyHash,h)};var Re=function(t,n,r){this.ownerID=t,this.keyHash=n,this.entry=r};Re.prototype.get=function(t,n,r,s){return se(r,this.entry[0])?this.entry[1]:s};Re.prototype.update=function(t,n,r,s,i,o,a){var c=i===Z,u=se(s,this.entry[0]);if(u?i===this.entry[1]:c)return this;if(ue(a),c){ue(o);return}return u?t&&t===this.ownerID?(this.entry[1]=i,this):new Re(t,this.keyHash,[s,i]):(ue(o),bn(this,t,n,re(s),[s,i]))};St.prototype.iterate=rt.prototype.iterate=function(e,t){for(var n=this.entries,r=0,s=n.length-1;r<=s;r++)if(e(n[t?s-r:r])===!1)return!1};nt.prototype.iterate=It.prototype.iterate=function(e,t){for(var n=this.nodes,r=0,s=n.length-1;r<=s;r++){var i=n[t?s-r:r];if(i&&i.iterate(e,t)===!1)return!1}};Re.prototype.iterate=function(e,t){return e(this.entry)};var Ki=function(e){function t(n,r,s){this._type=r,this._reverse=s,this._stack=n._root&&Gn(n._root)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.next=function(){for(var r=this._type,s=this._stack;s;){var i=s.node,o=s.index++,a=void 0;if(i.entry){if(o===0)return W1(r,i.entry)}else if(i.entries){if(a=i.entries.length-1,o<=a)return W1(r,i.entries[this._reverse?a-o:o])}else if(a=i.nodes.length-1,o<=a){var c=i.nodes[this._reverse?a-o:o];if(c){if(c.entry)return W1(r,c.entry);s=this._stack=Gn(c,s)}continue}s=this._stack=this._stack.__prev}return te()},t}(x);function W1(e,t){return N(e,t[0],t[1])}function Gn(e,t){return{node:e,index:0,__prev:t}}function Tn(e,t,n,r){var s=Object.create(W);return s.size=e,s._root=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var Xn;function he(){return Xn||(Xn=Tn(0))}function Jn(e,t,n){var r,s;if(e._root){var i=q1(),o=q1();if(r=yn(e._root,e.__ownerID,0,void 0,t,n,i,o),!o.value)return e;s=e.size+(i.value?n===Z?-1:1:0)}else{if(n===Z)return e;s=1,r=new St(e.__ownerID,[[t,n]])}return e.__ownerID?(e.size=s,e._root=r,e.__hash=void 0,e.__altered=!0,e):r?Tn(s,r):he()}function yn(e,t,n,r,s,i,o,a){return e?e.update(t,n,r,s,i,o,a):i===Z?e:(ue(a),ue(o),new Re(t,r,[s,i]))}function Qn(e){return e.constructor===Re||e.constructor===rt}function bn(e,t,n,r,s){if(e.keyHash===r)return new rt(t,r,[e.entry,s]);var i=(n===0?e.keyHash:e.keyHash>>>n)&Y,o=(n===0?r:r>>>n)&Y,a,c=i===o?[bn(e,t,n+R,r,s)]:(a=new Re(t,r,s),i<o?[e,a]:[a,e]);return new nt(t,1<<i|1<<o,c)}function Vi(e,t,n,r){e||(e=new J1);for(var s=new Re(e,re(n),[n,r]),i=0;i<t.length;i++){var o=t[i];s=s.update(e,0,void 0,o[0],o[1])}return s}function Yi(e,t,n,r){for(var s=0,i=0,o=new Array(n),a=0,c=1,u=t.length;a<u;a++,c<<=1){var l=t[a];l!==void 0&&a!==r&&(s|=c,o[i++]=l)}return new nt(e,s,o)}function Gi(e,t,n,r,s){for(var i=0,o=new Array(ce),a=0;n!==0;a++,n>>>=1)o[a]=n&1?t[i++]:void 0;return o[r]=s,new It(e,i+1,o)}function zs(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),e=e+(e>>4)&252645135,e+=e>>8,e+=e>>16,e&127}function Ds(e,t,n,r){var s=r?e:ye(e);return s[t]=n,s}function Xi(e,t,n,r){var s=e.length+1;if(r&&t+1===s)return e[t]=n,e;for(var i=new Array(s),o=0,a=0;a<s;a++)a===t?(i[a]=n,o=-1):i[a]=e[a+o];return i}function Ji(e,t,n){var r=e.length-1;if(n&&t===r)return e.pop(),e;for(var s=new Array(r),i=0,o=0;o<r;o++)o===t&&(i=1),s[o]=e[o+i];return s}var Qi=ce/4,eo=ce/2,to=ce/4,Ms="@@__IMMUTABLE_LIST__@@";function Bs(e){return!!(e&&e[Ms])}var K=function(e){function t(n){var r=i1();if(n==null)return r;if(Bs(n))return n;var s=e(n),i=s.size;return i===0?r:(le(i),i>0&&i<ce?Lt(0,i,R,null,new De(s.toArray())):r.withMutations(function(o){o.setSize(i),s.forEach(function(a,c){return o.set(c,a)})}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("List [","]")},t.prototype.get=function(r,s){if(r=Me(this,r),r>=0&&r<this.size){r+=this._origin;var i=Ps(this,r);return i&&i.array[r&Y]}return s},t.prototype.set=function(r,s){return no(this,r,s)},t.prototype.remove=function(r){return this.has(r)?r===0?this.shift():r===this.size-1?this.pop():this.splice(r,1):this},t.prototype.insert=function(r,s){return this.splice(r,0,s)},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=R,this._root=this._tail=this.__hash=void 0,this.__altered=!0,this):i1()},t.prototype.push=function(){var r=arguments,s=this.size;return this.withMutations(function(i){Ne(i,0,s+r.length);for(var o=0;o<r.length;o++)i.set(s+o,r[o])})},t.prototype.pop=function(){return Ne(this,0,-1)},t.prototype.unshift=function(){var r=arguments;return this.withMutations(function(s){Ne(s,-r.length);for(var i=0;i<r.length;i++)s.set(i,r[i])})},t.prototype.shift=function(){return Ne(this,1)},t.prototype.concat=function(){for(var r=arguments,s=[],i=0;i<arguments.length;i++){var o=r[i],a=e(typeof o!="string"&&ls(o)?o:[o]);a.size!==0&&s.push(a)}return s.length===0?this:this.size===0&&!this.__ownerID&&s.length===1?this.constructor(s[0]):this.withMutations(function(c){s.forEach(function(u){return u.forEach(function(l){return c.push(l)})})})},t.prototype.setSize=function(r){return Ne(this,0,r)},t.prototype.map=function(r,s){var i=this;return this.withMutations(function(o){for(var a=0;a<i.size;a++)o.set(a,r.call(s,o.get(a),a,i))})},t.prototype.slice=function(r,s){var i=this.size;return T1(r,s,i)?this:Ne(this,Nt(r,i),y1(s,i))},t.prototype.__iterator=function(r,s){var i=s?this.size:0,o=er(this,s);return new x(function(){var a=o();return a===Zt?te():N(r,s?--i:i++,a)})},t.prototype.__iterate=function(r,s){for(var i=s?this.size:0,o=er(this,s),a;(a=o())!==Zt&&r(a,s?--i:i++,this)!==!1;);return i},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?Lt(this._origin,this._capacity,this._level,this._root,this._tail,r,this.__hash):this.size===0?i1():(this.__ownerID=r,this.__altered=!1,this)},t}(He);K.isList=Bs;var A=K.prototype;A[Ms]=!0;A[Ct]=A.remove;A.merge=A.concat;A.setIn=ln;A.deleteIn=A.removeIn=fn;A.update=dn;A.updateIn=pn;A.mergeIn=gn;A.mergeDeepIn=vn;A.withMutations=Dt;A.wasAltered=_n;A.asImmutable=Bt;A["@@transducer/init"]=A.asMutable=Mt;A["@@transducer/step"]=function(e,t){return e.push(t)};A["@@transducer/result"]=function(e){return e.asImmutable()};var De=function(t,n){this.array=t,this.ownerID=n};De.prototype.removeBefore=function(t,n,r){if(r===n?1<<n:this.array.length===0)return this;var s=r>>>n&Y;if(s>=this.array.length)return new De([],t);var i=s===0,o;if(n>0){var a=this.array[s];if(o=a&&a.removeBefore(t,n-R,r),o===a&&i)return this}if(i&&!o)return this;var c=st(this,t);if(!i)for(var u=0;u<s;u++)c.array[u]=void 0;return o&&(c.array[s]=o),c};De.prototype.removeAfter=function(t,n,r){if(r===(n?1<<n:0)||this.array.length===0)return this;var s=r-1>>>n&Y;if(s>=this.array.length)return this;var i;if(n>0){var o=this.array[s];if(i=o&&o.removeAfter(t,n-R,r),i===o&&s===this.array.length-1)return this}var a=st(this,t);return a.array.splice(s+1),i&&(a.array[s]=i),a};var Zt={};function er(e,t){var n=e._origin,r=e._capacity,s=Et(r),i=e._tail;return o(e._root,e._level,0);function o(u,l,f){return l===0?a(u,f):c(u,l,f)}function a(u,l){var f=l===s?i&&i.array:u&&u.array,d=l>n?0:n-l,p=r-l;return p>ce&&(p=ce),function(){if(d===p)return Zt;var h=t?--p:d++;return f&&f[h]}}function c(u,l,f){var d,p=u&&u.array,h=f>n?0:n-f>>l,g=(r-f>>l)+1;return g>ce&&(g=ce),function(){for(;;){if(d){var v=d();if(v!==Zt)return v;d=null}if(h===g)return Zt;var _=t?--g:h++;d=o(p&&p[_],l-R,f+(_<<l))}}}}function Lt(e,t,n,r,s,i,o){var a=Object.create(A);return a.size=t-e,a._origin=e,a._capacity=t,a._level=n,a._root=r,a._tail=s,a.__ownerID=i,a.__hash=o,a.__altered=!1,a}var tr;function i1(){return tr||(tr=Lt(0,0,R))}function no(e,t,n){if(t=Me(e,t),t!==t)return e;if(t>=e.size||t<0)return e.withMutations(function(o){t<0?Ne(o,t).set(0,n):Ne(o,0,t+1).set(t,n)});t+=e._origin;var r=e._tail,s=e._root,i=q1();return t>=Et(e._capacity)?r=K1(r,e.__ownerID,0,t,n,i):s=K1(s,e.__ownerID,e._level,t,n,i),i.value?e.__ownerID?(e._root=s,e._tail=r,e.__hash=void 0,e.__altered=!0,e):Lt(e._origin,e._capacity,e._level,s,r):e}function K1(e,t,n,r,s,i){var o=r>>>n&Y,a=e&&o<e.array.length;if(!a&&s===void 0)return e;var c;if(n>0){var u=e&&e.array[o],l=K1(u,t,n-R,r,s,i);return l===u?e:(c=st(e,t),c.array[o]=l,c)}return a&&e.array[o]===s?e:(i&&ue(i),c=st(e,t),s===void 0&&o===c.array.length-1?c.array.pop():c.array[o]=s,c)}function st(e,t){return t&&e&&t===e.ownerID?e:new De(e?e.array.slice():[],t)}function Ps(e,t){if(t>=Et(e._capacity))return e._tail;if(t<1<<e._level+R){for(var n=e._root,r=e._level;n&&r>0;)n=n.array[t>>>r&Y],r-=R;return n}}function Ne(e,t,n){t!==void 0&&(t|=0),n!==void 0&&(n|=0);var r=e.__ownerID||new J1,s=e._origin,i=e._capacity,o=s+t,a=n===void 0?i:n<0?i+n:s+n;if(o===s&&a===i)return e;if(o>=a)return e.clear();for(var c=e._level,u=e._root,l=0;o+l<0;)u=new De(u&&u.array.length?[void 0,u]:[],r),c+=R,l+=1<<c;l&&(o+=l,s+=l,a+=l,i+=l);for(var f=Et(i),d=Et(a);d>=1<<c+R;)u=new De(u&&u.array.length?[u]:[],r),c+=R;var p=e._tail,h=d<f?Ps(e,a-1):d>f?new De([],r):p;if(p&&d>f&&o<i&&p.array.length){u=st(u,r);for(var g=u,v=c;v>R;v-=R){var _=f>>>v&Y;g=g.array[_]=st(g.array[_],r)}g.array[f>>>R&Y]=p}if(a<i&&(h=h&&h.removeAfter(r,0,a)),o>=d)o-=d,a-=d,c=R,u=null,h=h&&h.removeBefore(r,0,o);else if(o>s||d<f){for(l=0;u;){var w=o>>>c&Y;if(w!==d>>>c&Y)break;w&&(l+=(1<<c)*w),c-=R,u=u.array[w]}u&&o>s&&(u=u.removeBefore(r,c,o-l)),u&&d<f&&(u=u.removeAfter(r,c,d-l)),l&&(o-=l,a-=l)}return e.__ownerID?(e.size=a-o,e._origin=o,e._capacity=a,e._level=c,e._root=u,e._tail=h,e.__hash=void 0,e.__altered=!0,e):Lt(o,a,c,u,h)}function Et(e){return e<ce?0:e-1>>>R<<R}var We=function(e){function t(n){return n==null?Tt():hs(n)?n:Tt().withMutations(function(r){var s=de(n);le(s.size),s.forEach(function(i,o){return r.set(o,i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},t.prototype.get=function(r,s){var i=this._map.get(r);return i!==void 0?this._list.get(i)[1]:s},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this.__altered=!0,this):Tt()},t.prototype.set=function(r,s){return rr(this,r,s)},t.prototype.remove=function(r){return rr(this,r,Z)},t.prototype.__iterate=function(r,s){var i=this;return this._list.__iterate(function(o){return o&&r(o[1],o[0],i)},s)},t.prototype.__iterator=function(r,s){return this._list.fromEntrySeq().__iterator(r,s)},t.prototype.__ensureOwner=function(r){if(r===this.__ownerID)return this;var s=this._map.__ensureOwner(r),i=this._list.__ensureOwner(r);return r?Zn(s,i,r,this.__hash):this.size===0?Tt():(this.__ownerID=r,this.__altered=!1,this._map=s,this._list=i,this)},t}(pt);We.isOrderedMap=hs;We.prototype[ut]=!0;We.prototype[Ct]=We.prototype.remove;function Zn(e,t,n,r){var s=Object.create(We.prototype);return s.size=e?e.size:0,s._map=e,s._list=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var nr;function Tt(){return nr||(nr=Zn(he(),i1()))}function rr(e,t,n){var r=e._map,s=e._list,i=r.get(t),o=i!==void 0,a,c;if(n===Z){if(!o)return e;s.size>=ce&&s.size>=r.size*2?(c=s.filter(function(u,l){return u!==void 0&&i!==l}),a=c.toKeyedSeq().map(function(u){return u[0]}).flip().toMap(),e.__ownerID&&(a.__ownerID=c.__ownerID=e.__ownerID)):(a=r.remove(t),c=i===s.size-1?s.pop():s.set(i,void 0))}else if(o){if(n===s.get(i)[1])return e;a=r,c=s.set(i,[t,n])}else a=r.set(t,s.size),c=s.set(s.size,[t,n]);return e.__ownerID?(e.size=a.size,e._map=a,e._list=c,e.__hash=void 0,e.__altered=!0,e):Zn(a,c)}var As="@@__IMMUTABLE_STACK__@@";function V1(e){return!!(e&&e[As])}var wn=function(e){function t(n){return n==null?Ft():V1(n)?n:Ft().pushAll(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("Stack [","]")},t.prototype.get=function(r,s){var i=this._head;for(r=Me(this,r);i&&r--;)i=i.next;return i?i.value:s},t.prototype.peek=function(){return this._head&&this._head.value},t.prototype.push=function(){var r=arguments;if(arguments.length===0)return this;for(var s=this.size+arguments.length,i=this._head,o=arguments.length-1;o>=0;o--)i={value:r[o],next:i};return this.__ownerID?(this.size=s,this._head=i,this.__hash=void 0,this.__altered=!0,this):yt(s,i)},t.prototype.pushAll=function(r){if(r=e(r),r.size===0)return this;if(this.size===0&&V1(r))return r;le(r.size);var s=this.size,i=this._head;return r.__iterate(function(o){s++,i={value:o,next:i}},!0),this.__ownerID?(this.size=s,this._head=i,this.__hash=void 0,this.__altered=!0,this):yt(s,i)},t.prototype.pop=function(){return this.slice(1)},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Ft()},t.prototype.slice=function(r,s){if(T1(r,s,this.size))return this;var i=Nt(r,this.size),o=y1(s,this.size);if(o!==this.size)return e.prototype.slice.call(this,r,s);for(var a=this.size-i,c=this._head;i--;)c=c.next;return this.__ownerID?(this.size=a,this._head=c,this.__hash=void 0,this.__altered=!0,this):yt(a,c)},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?yt(this.size,this._head,r,this.__hash):this.size===0?Ft():(this.__ownerID=r,this.__altered=!1,this)},t.prototype.__iterate=function(r,s){var i=this;if(s)return new $e(this.toArray()).__iterate(function(c,u){return r(c,u,i)},s);for(var o=0,a=this._head;a&&r(a.value,o++,this)!==!1;)a=a.next;return o},t.prototype.__iterator=function(r,s){if(s)return new $e(this.toArray()).__iterator(r,s);var i=0,o=this._head;return new x(function(){if(o){var a=o.value;return o=o.next,N(r,i++,a)}return te()})},t}(He);wn.isStack=V1;var G=wn.prototype;G[As]=!0;G.shift=G.pop;G.unshift=G.push;G.unshiftAll=G.pushAll;G.withMutations=Dt;G.wasAltered=_n;G.asImmutable=Bt;G["@@transducer/init"]=G.asMutable=Mt;G["@@transducer/step"]=function(e,t){return e.unshift(t)};G["@@transducer/result"]=function(e){return e.asImmutable()};function yt(e,t,n,r){var s=Object.create(G);return s.size=e,s._head=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var sr;function Ft(){return sr||(sr=yt(0))}var qs="@@__IMMUTABLE_SET__@@";function kn(e){return!!(e&&e[qs])}function Us(e){return kn(e)&&ge(e)}function js(e,t){if(e===t)return!0;if(!ee(t)||e.size!==void 0&&t.size!==void 0&&e.size!==t.size||e.__hash!==void 0&&t.__hash!==void 0&&e.__hash!==t.__hash||D(e)!==D(t)||Q(e)!==Q(t)||ge(e)!==ge(t))return!1;if(e.size===0&&t.size===0)return!0;var n=!b1(e);if(ge(e)){var r=e.entries();return t.every(function(c,u){var l=r.next().value;return l&&se(l[1],c)&&(n||se(l[0],u))})&&r.next().done}var s=!1;if(e.size===void 0)if(t.size===void 0)typeof e.cacheResult=="function"&&e.cacheResult();else{s=!0;var i=e;e=t,t=i}var o=!0,a=t.__iterate(function(c,u){if(n?!e.has(c):s?!se(c,e.get(u,Z)):!se(e.get(u,Z),c))return o=!1,!1});return o&&e.size===a}function Ke(e,t){var n=function(r){e.prototype[r]=t[r]};return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}function l1(e){if(!e||typeof e!="object")return e;if(!ee(e)){if(!Be(e))return e;e=ie(e)}if(D(e)){var t={};return e.__iterate(function(r,s){t[s]=l1(r)}),t}var n=[];return e.__iterate(function(r){n.push(l1(r))}),n}var S1=function(e){function t(n){return n==null?bt():kn(n)&&!ge(n)?n:bt().withMutations(function(r){var s=e(n);le(s.size),s.forEach(function(i){return r.add(i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(r){return this(de(r).keySeq())},t.intersect=function(r){return r=P(r).toArray(),r.length?F.intersect.apply(t(r.pop()),r):bt()},t.union=function(r){return r=P(r).toArray(),r.length?F.union.apply(t(r.pop()),r):bt()},t.prototype.toString=function(){return this.__toString("Set {","}")},t.prototype.has=function(r){return this._map.has(r)},t.prototype.add=function(r){return $t(this,this._map.set(r,r))},t.prototype.remove=function(r){return $t(this,this._map.remove(r))},t.prototype.clear=function(){return $t(this,this._map.clear())},t.prototype.map=function(r,s){var i=this,o=!1,a=$t(this,this._map.mapEntries(function(c){var u=c[1],l=r.call(s,u,u,i);return l!==u&&(o=!0),[l,l]},s));return o?a:this},t.prototype.union=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];return r=r.filter(function(i){return i.size!==0}),r.length===0?this:this.size===0&&!this.__ownerID&&r.length===1?this.constructor(r[0]):this.withMutations(function(i){for(var o=0;o<r.length;o++)e(r[o]).forEach(function(a){return i.add(a)})})},t.prototype.intersect=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];if(r.length===0)return this;r=r.map(function(o){return e(o)});var i=[];return this.forEach(function(o){r.every(function(a){return a.includes(o)})||i.push(o)}),this.withMutations(function(o){i.forEach(function(a){o.remove(a)})})},t.prototype.subtract=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];if(r.length===0)return this;r=r.map(function(o){return e(o)});var i=[];return this.forEach(function(o){r.some(function(a){return a.includes(o)})&&i.push(o)}),this.withMutations(function(o){i.forEach(function(a){o.remove(a)})})},t.prototype.sort=function(r){return Ot(tt(this,r))},t.prototype.sortBy=function(r,s){return Ot(tt(this,s,r))},t.prototype.wasAltered=function(){return this._map.wasAltered()},t.prototype.__iterate=function(r,s){var i=this;return this._map.__iterate(function(o){return r(o,o,i)},s)},t.prototype.__iterator=function(r,s){return this._map.__iterator(r,s)},t.prototype.__ensureOwner=function(r){if(r===this.__ownerID)return this;var s=this._map.__ensureOwner(r);return r?this.__make(s,r):this.size===0?this.__empty():(this.__ownerID=r,this._map=s,this)},t}(at);S1.isSet=kn;var F=S1.prototype;F[qs]=!0;F[Ct]=F.remove;F.merge=F.concat=F.union;F.withMutations=Dt;F.asImmutable=Bt;F["@@transducer/init"]=F.asMutable=Mt;F["@@transducer/step"]=function(e,t){return e.add(t)};F["@@transducer/result"]=function(e){return e.asImmutable()};F.__empty=bt;F.__make=Fs;function $t(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:t.size===0?e.__empty():e.__make(t)}function Fs(e,t){var n=Object.create(F);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}var ir;function bt(){return ir||(ir=Fs(he()))}var Je=function(e){function t(n,r,s){if(!(this instanceof t))return new t(n,r,s);if(un(s!==0,"Cannot step a Range by 0"),n=n||0,r===void 0&&(r=1/0),s=s===void 0?1:Math.abs(s),r<n&&(s=-s),this._start=n,this._end=r,this._step=s,this.size=Math.max(0,Math.ceil((r-n)/s-1)+1),this.size===0){if(C1)return C1;C1=this}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.size===0?"Range []":"Range [ "+this._start+"..."+this._end+(this._step!==1?" by "+this._step:"")+" ]"},t.prototype.get=function(r,s){return this.has(r)?this._start+Me(this,r)*this._step:s},t.prototype.includes=function(r){var s=(r-this._start)/this._step;return s>=0&&s<this.size&&s===Math.floor(s)},t.prototype.slice=function(r,s){return T1(r,s,this.size)?this:(r=Nt(r,this.size),s=y1(s,this.size),s<=r?new t(0,0):new t(this.get(r,this._end),this.get(s,this._end),this._step))},t.prototype.indexOf=function(r){var s=r-this._start;if(s%this._step===0){var i=s/this._step;if(i>=0&&i<this.size)return i}return-1},t.prototype.lastIndexOf=function(r){return this.indexOf(r)},t.prototype.__iterate=function(r,s){for(var i=this.size,o=this._step,a=s?this._start+(i-1)*o:this._start,c=0;c!==i&&r(a,s?i-++c:c++,this)!==!1;)a+=s?-o:o;return c},t.prototype.__iterator=function(r,s){var i=this.size,o=this._step,a=s?this._start+(i-1)*o:this._start,c=0;return new x(function(){if(c===i)return te();var u=a;return a+=s?-o:o,N(r,s?i-++c:c++,u)})},t.prototype.equals=function(r){return r instanceof t?this._start===r._start&&this._end===r._end&&this._step===r._step:js(this,r)},t}(_e),C1;function $s(e,t,n){for(var r=Ss(t),s=0;s!==r.length;)if(e=Is(e,r[s++],Z),e===Z)return n;return e}function Hs(e,t){return $s(this,e,t)}function ro(e,t){return $s(e,t,Z)!==Z}function so(e){return ro(this,e)}function Ks(){le(this.size);var e={};return this.__iterate(function(t,n){e[n]=t}),e}P.isIterable=ee;P.isKeyed=D;P.isIndexed=Q;P.isAssociative=b1;P.isOrdered=ge;P.Iterator=x;Ke(P,{toArray:function(){le(this.size);var t=new Array(this.size||0),n=D(this),r=0;return this.__iterate(function(s,i){t[r++]=n?[i,s]:s}),t},toIndexedSeq:function(){return new gs(this)},toJS:function(){return l1(this)},toKeyedSeq:function(){return new x1(this,!0)},toMap:function(){return pt(this.toKeyedSeq())},toObject:Ks,toOrderedMap:function(){return We(this.toKeyedSeq())},toOrderedSet:function(){return Ot(D(this)?this.valueSeq():this)},toSet:function(){return S1(D(this)?this.valueSeq():this)},toSetSeq:function(){return new vs(this)},toSeq:function(){return Q(this)?this.toIndexedSeq():D(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return wn(D(this)?this.valueSeq():this)},toList:function(){return K(D(this)?this.valueSeq():this)},toString:function(){return"[Collection]"},__toString:function(t,n){return this.size===0?t+n:t+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+n},concat:function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return E(this,zi(this,t))},includes:function(t){return this.some(function(n){return se(n,t)})},entries:function(){return this.__iterator(fe)},every:function(t,n){le(this.size);var r=!0;return this.__iterate(function(s,i,o){if(!t.call(n,s,i,o))return r=!1,!1}),r},filter:function(t,n){return E(this,bs(this,t,n,!0))},find:function(t,n,r){var s=this.findEntry(t,n);return s?s[1]:r},forEach:function(t,n){return le(this.size),this.__iterate(n?t.bind(n):t)},join:function(t){le(this.size),t=t!==void 0?""+t:",";var n="",r=!0;return this.__iterate(function(s){r?r=!1:n+=t,n+=s!=null?s.toString():""}),n},keys:function(){return this.__iterator(zt)},map:function(t,n){return E(this,ys(this,t,n))},reduce:function(t,n,r){return or(this,t,n,r,arguments.length<2,!1)},reduceRight:function(t,n,r){return or(this,t,n,r,arguments.length<2,!0)},reverse:function(){return E(this,on(this,!0))},slice:function(t,n){return E(this,an(this,t,n,!0))},some:function(t,n){return!this.every(Ht(t),n)},sort:function(t){return E(this,tt(this,t))},values:function(){return this.__iterator(ve)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return this.size!==void 0?this.size===0:!this.some(function(){return!0})},count:function(t,n){return et(t?this.toSeq().filter(t,n):this)},countBy:function(t,n){return Wi(this,t,n)},equals:function(t){return js(this,t)},entrySeq:function(){var t=this;if(t._cache)return new $e(t._cache);var n=t.toSeq().map(oo).toIndexedSeq();return n.fromEntrySeq=function(){return t.toSeq()},n},filterNot:function(t,n){return this.filter(Ht(t),n)},findEntry:function(t,n,r){var s=r;return this.__iterate(function(i,o,a){if(t.call(n,i,o,a))return s=[o,i],!1}),s},findKey:function(t,n){var r=this.findEntry(t,n);return r&&r[0]},findLast:function(t,n,r){return this.toKeyedSeq().reverse().find(t,n,r)},findLastEntry:function(t,n,r){return this.toKeyedSeq().reverse().findEntry(t,n,r)},findLastKey:function(t,n){return this.toKeyedSeq().reverse().findKey(t,n)},first:function(t){return this.find(ts,null,t)},flatMap:function(t,n){return E(this,Di(this,t,n))},flatten:function(t){return E(this,ws(this,t,!0))},fromEntrySeq:function(){return new _s(this)},get:function(t,n){return this.find(function(r,s){return se(s,t)},void 0,n)},getIn:Hs,groupBy:function(t,n){return Ci(this,t,n)},has:function(t){return this.get(t,Z)!==Z},hasIn:so,isSubset:function(t){return t=typeof t.includes=="function"?t:P(t),this.every(function(n){return t.includes(n)})},isSuperset:function(t){return t=typeof t.isSubset=="function"?t:P(t),t.isSubset(this)},keyOf:function(t){return this.findKey(function(n){return se(n,t)})},keySeq:function(){return this.toSeq().map(io).toIndexedSeq()},last:function(t){return this.toSeq().reverse().first(t)},lastKeyOf:function(t){return this.toKeyedSeq().reverse().keyOf(t)},max:function(t){return Ut(this,t)},maxBy:function(t,n){return Ut(this,n,t)},min:function(t){return Ut(this,t?ar(t):ur)},minBy:function(t,n){return Ut(this,n?ar(n):ur,t)},rest:function(){return this.slice(1)},skip:function(t){return t===0?this:this.slice(Math.max(0,t))},skipLast:function(t){return t===0?this:this.slice(0,-Math.max(0,t))},skipWhile:function(t,n){return E(this,Zs(this,t,n,!0))},skipUntil:function(t,n){return this.skipWhile(Ht(t),n)},sortBy:function(t,n){return E(this,tt(this,n,t))},take:function(t){return this.slice(0,Math.max(0,t))},takeLast:function(t){return this.slice(-Math.max(0,t))},takeWhile:function(t,n){return E(this,Ni(this,t,n))},takeUntil:function(t,n){return this.takeWhile(Ht(t),n)},update:function(t){return t(this)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=ao(this))}});var V=P.prototype;V[ss]=!0;V[Z1]=V.values;V.toJSON=V.toArray;V.__toStringMapper=xt;V.inspect=V.toSource=function(){return this.toString()};V.chain=V.flatMap;V.contains=V.includes;Ke(de,{flip:function(){return E(this,Ts(this))},mapEntries:function(t,n){var r=this,s=0;return E(this,this.toSeq().map(function(i,o){return t.call(n,[o,i],s++,r)}).fromEntrySeq())},mapKeys:function(t,n){var r=this;return E(this,this.toSeq().flip().map(function(s,i){return t.call(n,s,i,r)}).flip())}});var Pt=de.prototype;Pt[is]=!0;Pt[Z1]=V.entries;Pt.toJSON=Ks;Pt.__toStringMapper=function(e,t){return xt(t)+": "+xt(e)};Ke(He,{toKeyedSeq:function(){return new x1(this,!1)},filter:function(t,n){return E(this,bs(this,t,n,!1))},findIndex:function(t,n){var r=this.findEntry(t,n);return r?r[0]:-1},indexOf:function(t){var n=this.keyOf(t);return n===void 0?-1:n},lastIndexOf:function(t){var n=this.lastKeyOf(t);return n===void 0?-1:n},reverse:function(){return E(this,on(this,!1))},slice:function(t,n){return E(this,an(this,t,n,!1))},splice:function(t,n){var r=arguments.length;if(n=Math.max(n||0,0),r===0||r===2&&!n)return this;t=Nt(t,t<0?this.count():this.size);var s=this.slice(0,t);return E(this,r===1?s:s.concat(ye(arguments,2),this.slice(t+n)))},findLastIndex:function(t,n){var r=this.findLastEntry(t,n);return r?r[0]:-1},first:function(t){return this.get(0,t)},flatten:function(t){return E(this,ws(this,t,!1))},get:function(t,n){return t=Me(this,t),t<0||this.size===1/0||this.size!==void 0&&t>this.size?n:this.find(function(r,s){return s===t},void 0,n)},has:function(t){return t=Me(this,t),t>=0&&(this.size!==void 0?this.size===1/0||t<this.size:this.indexOf(t)!==-1)},interpose:function(t){return E(this,Mi(this,t))},interleave:function(){var t=[this].concat(ye(arguments)),n=jt(this.toSeq(),_e.of,t),r=n.flatten(!0);return n.size&&(r.size=n.size*t.length),E(this,r)},keySeq:function(){return Je(0,this.size)},last:function(t){return this.get(-1,t)},skipWhile:function(t,n){return E(this,Zs(this,t,n,!1))},zip:function(){var t=[this].concat(ye(arguments));return E(this,jt(this,cr,t))},zipAll:function(){var t=[this].concat(ye(arguments));return E(this,jt(this,cr,t,!0))},zipWith:function(t){var n=ye(arguments);return n[0]=this,E(this,jt(this,t,n))}});var ht=He.prototype;ht[os]=!0;ht[ut]=!0;Ke(at,{get:function(t,n){return this.has(t)?t:n},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}});var it=at.prototype;it.has=V.includes;it.contains=it.includes;it.keys=it.values;Ke(Pe,Pt);Ke(_e,ht);Ke(ft,it);function or(e,t,n,r,s,i){return le(e.size),e.__iterate(function(o,a,c){s?(s=!1,n=o):n=t.call(r,n,o,a,c)},i),n}function io(e,t){return t}function oo(e,t){return[t,e]}function Ht(e){return function(){return!e.apply(this,arguments)}}function ar(e){return function(){return-e.apply(this,arguments)}}function cr(){return ye(arguments)}function ur(e,t){return e<t?1:e>t?-1:0}function ao(e){if(e.size===1/0)return 0;var t=ge(e),n=D(e),r=t?1:0,s=e.__iterate(n?t?function(i,o){r=31*r+lr(re(i),re(o))|0}:function(i,o){r=r+lr(re(i),re(o))|0}:t?function(i){r=31*r+re(i)|0}:function(i){r=r+re(i)|0});return co(s,r)}function co(e,t){return t=mt(t,3432918353),t=mt(t<<15|t>>>-15,461845907),t=mt(t<<13|t>>>-13,5),t=(t+3864292196|0)^e,t=mt(t^t>>>16,2246822507),t=mt(t^t>>>13,3266489909),t=k1(t^t>>>16),t}function lr(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}var Ot=function(e){function t(n){return n==null?Y1():Us(n)?n:Y1().withMutations(function(r){var s=at(n);le(s.size),s.forEach(function(i){return r.add(i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(r){return this(de(r).keySeq())},t.prototype.toString=function(){return this.__toString("OrderedSet {","}")},t}(S1);Ot.isOrderedSet=Us;var Ve=Ot.prototype;Ve[ut]=!0;Ve.zip=ht.zip;Ve.zipWith=ht.zipWith;Ve.zipAll=ht.zipAll;Ve.__empty=Y1;Ve.__make=Vs;function Vs(e,t){var n=Object.create(Ve);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}var fr;function Y1(){return fr||(fr=Vs(Tt()))}function uo(e){if(ct(e))throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.");if(we(e))throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.");if(e===null||typeof e!="object")throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.")}var U=function(t,n){var r;uo(t);var s=function(a){var c=this;if(a instanceof s)return a;if(!(this instanceof s))return new s(a);if(!r){r=!0;var u=Object.keys(t),l=i._indices={};i._name=n,i._keys=u,i._defaultValues=t;for(var f=0;f<u.length;f++){var d=u[f];l[d]=f,i[d]?typeof console=="object"&&console.warn&&console.warn("Cannot define "+Sn(this)+' with property "'+d+'" since that property name is part of the Record API.'):lo(i,d)}}return this.__ownerID=void 0,this._values=K().withMutations(function(p){p.setSize(c._keys.length),de(a).forEach(function(h,g){p.set(c._indices[g],h===c._defaultValues[g]?void 0:h)})}),this},i=s.prototype=Object.create(O);return i.constructor=s,n&&(s.displayName=n),s};U.prototype.toString=function(){for(var t=Sn(this)+" { ",n=this._keys,r,s=0,i=n.length;s!==i;s++)r=n[s],t+=(s?", ":"")+r+": "+xt(this.get(r));return t+" }"};U.prototype.equals=function(t){return this===t||ct(t)&&ot(this).equals(ot(t))};U.prototype.hashCode=function(){return ot(this).hashCode()};U.prototype.has=function(t){return this._indices.hasOwnProperty(t)};U.prototype.get=function(t,n){if(!this.has(t))return n;var r=this._indices[t],s=this._values.get(r);return s===void 0?this._defaultValues[t]:s};U.prototype.set=function(t,n){if(this.has(t)){var r=this._values.set(this._indices[t],n===this._defaultValues[t]?void 0:n);if(r!==this._values&&!this.__ownerID)return xn(this,r)}return this};U.prototype.remove=function(t){return this.set(t)};U.prototype.clear=function(){var t=this._values.clear().setSize(this._keys.length);return this.__ownerID?this:xn(this,t)};U.prototype.wasAltered=function(){return this._values.wasAltered()};U.prototype.toSeq=function(){return ot(this)};U.prototype.toJS=function(){return l1(this)};U.prototype.entries=function(){return this.__iterator(fe)};U.prototype.__iterator=function(t,n){return ot(this).__iterator(t,n)};U.prototype.__iterate=function(t,n){return ot(this).__iterate(t,n)};U.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var n=this._values.__ensureOwner(t);return t?xn(this,n,t):(this.__ownerID=t,this._values=n,this)};U.isRecord=ct;U.getDescriptiveName=Sn;var O=U.prototype;O[cs]=!0;O[Ct]=O.remove;O.deleteIn=O.removeIn=fn;O.getIn=Hs;O.hasIn=V.hasIn;O.merge=Os;O.mergeWith=Rs;O.mergeIn=gn;O.mergeDeep=Cs;O.mergeDeepWith=Ns;O.mergeDeepIn=vn;O.setIn=ln;O.update=dn;O.updateIn=pn;O.withMutations=Dt;O.asMutable=Mt;O.asImmutable=Bt;O[Z1]=O.entries;O.toJSON=O.toObject=V.toObject;O.inspect=O.toSource=function(){return this.toString()};function xn(e,t,n){var r=Object.create(Object.getPrototypeOf(e));return r._values=t,r.__ownerID=n,r}function Sn(e){return e.constructor.displayName||e.constructor.name||"Record"}function ot(e){return nn(e._keys.map(function(t){return[t,e.get(t)]}))}function lo(e,t){try{Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(n){un(this.__ownerID,"Cannot set on an immutable record."),this.set(t,n)}})}catch{}}const Qe=null,{min:ze,max:pe,abs:dr,floor:fo}=Math,Ys=(e,t,n)=>ze(n,pe(t,e)),Gs=e=>[...e].sort((t,n)=>t-n),Xs=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},In=e=>{let t,n;return()=>(t||(t=!0,n=e()),n)},je=-1,wt=(e,t,n)=>{const r=n?"unshift":"push";for(let s=0;s<t;s++)e[r](je);return e},f1=(e,t)=>{const n=e.t[t];return n===je?e.o:n},po=(e,t,n)=>{const r=e.t[t]===je;return e.t[t]=n,e.i=ze(t,e.i),r},o1=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let n=e.i,r=e.u[n];for(;n<t;)r+=f1(e,n),e.u[++n]=r;return e.i=t,r},qe=(e,t,n=0,r=e.l-1)=>{for(;n<=r;){const s=fo((n+r)/2),i=o1(e,s);if(i<=t){if(i+f1(e,s)>t)return s;n=s+1}else r=s-1}return Ys(n,0,e.l-1)},pr=(e,t,n)=>{const r=t-e.l;return e.i=n?-1:ze(t-1,e.i),e.l=t,r>0?(wt(e.u,r),wt(e.t,r,n),e.o*r):(e.u.splice(r),(n?e.t.splice(0,-r):e.t.splice(r)).reduce((s,i)=>s-(i===je?e.o:i),0))},Js=typeof window<"u",Qs=()=>document.documentElement,ho=e=>e.ownerDocument,mo=e=>e.defaultView,ei=In(()=>!!Js&&getComputedStyle(Qs()).direction==="rtl"),ti=In(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),go=In(()=>"scrollBehavior"in Qs().style),vo=e=>pe(e.h(),e.v()),_o=e=>!!e.v(),To=(e,t=40,n=4,r=0,s,i=!1)=>{let o=!!r,a=1,c=0,u=0,l=0,f=0,d=0,p=0,h=0,g=0,v=o?[0,pe(r-1,0)]:Qe,_=[0,0],w=0;const b=((T,k,B)=>({o:B?B[1]:k,t:B&&B[0]?wt(B[0].slice(0,ze(T,B[0].length)),pe(0,T-B[0].length)):wt([],T),l:T,i:-1,u:wt([],T)}))(e,t,s),$=new Set,ne=()=>l-u,S=()=>ne()+d+f,Ce=T=>((k,B,Se,z)=>{if(z=ze(z,k.l-1),o1(k,z)<=B){const q=qe(k,B+Se,z);return[qe(k,B,z,q),q]}{const q=qe(k,B,void 0,z);return[q,qe(k,B+Se,q)]}})(b,T,c,_[0]),oe=()=>(T=>T.l?o1(T,T.l-1)+f1(T,T.l-1):0)(b),Ye=T=>o1(b,T)-d,Ge=T=>f1(b,T),Xe=T=>{T&&(ti()&&h!==0?d+=T:f+=T)};return{p:()=>a,_:()=>(T=>[T.t.slice(),T.o])(b),m:()=>{let T,k;return p?[T,k]=_:([T,k]=_=Ce(pe(0,S())),v&&(T=ze(T,v[0]),k=pe(k,v[1]))),h!==1&&(T-=pe(0,n)),h!==2&&(k+=pe(0,n)),[pe(T,0),ze(k,b.l-1)]},S:()=>qe(b,S()),$:()=>qe(b,S()+c),I:T=>b.t[T]===je,k:()=>!!v&&b.t.slice(pe(0,v[0]-1),ze(b.l-1,v[1]+1)+1).includes(je),T:Ye,R:Ge,M:()=>b.l,C:()=>l,H:()=>h!==0,v:()=>c,W:()=>u,h:oe,B:()=>(p=f,f=0,[p,g===2||ne()+c>=oe()]),J:(T,k)=>{const B=[T,k];return $.add(B),()=>{$.delete(B)}},O:(T,k)=>{let B,Se,z=0;switch(T){case 1:{const q=p;p=0;const y=k-l,I=dr(y);q&&I<dr(q)+1||g!==0||(h=y<0?2:1),o&&(v=Qe,o=!1),l=k,z=4;const H=ne();H>=-c&&H<=oe()&&(z+=1,Se=I>c);break}case 2:z=8,h!==0&&(B=!0,z+=1),h=0,g=0,v=Qe;break;case 3:{const q=k.filter(([y,I])=>b.t[y]!==I);if(!q.length)break;Xe(q.reduce((y,[I,H])=>((g===2||(v?!o&&I<v[0]:Ye(I)+(h===0&&g===0?Ge(I):0)<ne()))&&(y+=H-Ge(I)),y),0));for(const[y,I]of q){const H=Ge(y),Ae=po(b,y,I);i&&(w+=Ae?I:I-H)}i&&c&&w>c&&(Xe(((y,I)=>{let H=0;const Ae=[];y.t.forEach((An,gi)=>{An!==je&&(Ae.push(An),gi<I&&H++)}),y.i=-1;const Ie=Gs(Ae),Pn=Ie.length,L1=Pn/2|0,hi=Pn%2==0?(Ie[L1-1]+Ie[L1])/2:Ie[L1],mi=y.o;return((y.o=hi)-mi)*pe(I-H,0)})(b,qe(b,S()))),i=!1),z=3,Se=!0;break}case 4:c!==k&&(c=k,z=3);break;case 5:k[1]?(Xe(pr(b,k[0],!0)),g=2,z=1):(pr(b,k[0]),z=1);break;case 6:u=k;break;case 7:g=1;break;case 8:v=Ce(k),z=1}z&&(a=1+(2147483647&a),B&&d&&(f+=d,d=0),$.forEach(([q,y])=>{z&q&&y(Se)}))}}},G1=setTimeout,a1=(e,t)=>t&&ei()?-e:e,yo=(e,t,n,r,s,i)=>{const o=Date.now;let a=0,c=!1,u=!1,l=!1,f=!1;const d=(()=>{let _;const w=()=>{_!=Qe&&clearTimeout(_)},b=()=>{w(),_=G1(()=>{_=Qe,(()=>{if(c||u)return c=!1,void d();l=!1,e.O(2)})()},150)};return b.L=w,b})(),p=()=>{a=o(),l&&(f=!0),e.O(1,r()),d()},h=_=>{if(c||!e.H()||_.ctrlKey)return;const w=o()-a;150>w&&50<w&&(n?_.deltaX:_.deltaY)&&(c=!0)},g=()=>{u=!0,l=f=!1},v=()=>{u=!1,ti()&&(l=!0)};return t.addEventListener("scroll",p),t.addEventListener("wheel",h,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",v,{passive:!0}),{P:()=>{t.removeEventListener("scroll",p),t.removeEventListener("wheel",h),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",v),d.L()},A:()=>{const[_,w]=e.B();_&&(s(a1(_,n),w,f),f=!1,w&&e.v()>e.h()&&e.O(1,r()))}}},bo=(e,t)=>{let n,r,s;const i=t?"scrollLeft":"scrollTop",o=t?"overflowX":"overflowY",a=async(c,u)=>{if(!n)return void Xs(()=>a(c,u));s&&s();const l=()=>{let f;return[new Promise((d,p)=>{f=d,s=p,_o(e)&&G1(p,150)}),e.J(2,()=>{f&&f()})]};if(u&&go()){for(;e.O(8,c()),e.k();){const[f,d]=l();try{await f}catch{return}finally{d()}}n.scrollTo({[t?"left":"top"]:a1(c(),t),behavior:"smooth"})}else for(;;){const[f,d]=l();try{n[i]=a1(c(),t),e.O(7),await f}catch{return}finally{d()}}};return{V(c){n=c,r=yo(e,c,t,()=>a1(c[i],t),(u,l,f)=>{if(f){const d=c.style,p=d[o];d[o]="hidden",G1(()=>{d[o]=p})}l?(c[i]=e.C()+u,s&&s()):c[i]+=u})},X(){r&&r.P()},Y(c){a(()=>c)},j(c){c+=e.C(),a(()=>c)},q(c,{align:u,smooth:l,offset:f=0}={}){if(c=Ys(c,0,e.M()-1),u==="nearest"){const d=e.T(c),p=e.C();if(d<p)u="start";else{if(!(d+e.R(c)>p+e.v()))return;u="end"}}a(()=>f+e.W()+e.T(c)+(u==="end"?e.R(c)-e.v():u==="center"?(e.R(c)-e.v())/2:0),l)},D:()=>{r&&r.A()}}},Zo=e=>{let t;return{U(n){(t||(t=new(mo(ho(n))).ResizeObserver(e))).observe(n)},F(n){t.unobserve(n)},P(){t&&t.disconnect()}}},wo=(e,t)=>{let n;const r=t?"width":"height",s=new WeakMap,i=Zo(o=>{const a=[];for(const{target:c,contentRect:u}of o)if(c.offsetParent)if(c===n)e.O(4,u[r]);else{const l=s.get(c);l!=Qe&&a.push([l,u[r]])}a.length&&e.O(3,a)});return{G(o){i.U(n=o)},K:(o,a)=>(s.set(o,a),i.U(o),()=>{s.delete(o),i.F(o)}),X:i.P}},d1=Js?L.useLayoutEffect:L.useEffect,ae="current",ni=(e,t)=>{if(Array.isArray(e))for(const n of e)ni(n,t);else e==null||typeof e=="boolean"||t.push(e)},ko=(e,t)=>{const n=e.key;return n??"_"+t},xo=e=>{const t=L.useRef();return t[ae]||(t[ae]=e())},hr=e=>{const t=L.useRef(e);return d1(()=>{t[ae]=e},[e]),t},So=L.memo(({N:e,Z:t,ee:n,te:r,ne:s,oe:i,re:o,ie:a})=>{const c=L.useRef(null);d1(()=>t(c[ae],n),[n]);const u=L.useMemo(()=>{const l={position:s&&a?void 0:"absolute",[o?"height":"width"]:"100%",[o?"top":"left"]:0,[o?ei()?"right":"left":"top"]:r,visibility:!s||a?"visible":"hidden"};return o&&(l.display="flex"),l},[r,s,a,o]);return m.jsx(i,typeof i=="string"?{ref:c,style:u,children:e}:{ref:c,style:u,index:n,children:e})}),Io=(e,t)=>L.useMemo(()=>{if(typeof e=="function")return[e,t||0];const n=(r=>{const s=[];return ni(r,s),s})(e);return[r=>n[r],n.length]},[e,t]),Lo=L.forwardRef(({children:e,count:t,overscan:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,cache:a,startMargin:c=0,ssrCount:u,as:l="div",item:f="div",scrollRef:d,onScroll:p,onScrollEnd:h},g)=>{const[v,_]=Io(e,t),w=L.useRef(null),b=L.useRef(!!u),$=hr(p),ne=hr(h),[S,Ce,oe,Ye]=xo(()=>{const y=!!i,I=To(_,r,n,u,a,!r);return[I,wo(I,y),bo(I,y),y]});_!==S.M()&&S.O(5,[_,s]),c!==S.W()&&S.O(6,c);const[Ge,Xe]=L.useReducer(S.p,void 0,S.p),[T,k]=S.m(),B=S.H(),Se=S.h(),z=[],q=y=>{const I=v(y);return m.jsx(So,{Z:Ce.K,ee:y,te:S.T(y),ne:S.I(y),oe:f,N:I,re:Ye,ie:b[ae]},ko(I,y))};d1(()=>{b[ae]=!1;const y=S.J(1,Ie=>{Ie?vi.flushSync(Xe):Xe()}),I=S.J(4,()=>{$[ae]&&$[ae](S.C())}),H=S.J(8,()=>{ne[ae]&&ne[ae]()}),Ae=Ie=>{Ce.G(Ie),oe.V(Ie)};return d?Xs(()=>Ae(d[ae])):Ae(w[ae].parentElement),()=>{y(),I(),H(),Ce.X(),oe.X()}},[]),d1(()=>{oe.D()},[Ge]),L.useImperativeHandle(g,()=>({get cache(){return S._()},get scrollOffset(){return S.C()},get scrollSize(){return vo(S)},get viewportSize(){return S.v()},findStartIndex:S.S,findEndIndex:S.$,getItemOffset:S.T,getItemSize:S.R,scrollToIndex:oe.q,scrollTo:oe.Y,scrollBy:oe.j}),[]);for(let y=T,I=k;y<=I;y++)z.push(q(y));if(o){const y=[],I=[];Gs(o).forEach(H=>{H<T&&y.push(q(H)),H>k&&I.push(q(H))}),z.unshift(...y),z.push(...I)}return m.jsx(l,{ref:w,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:Ye?Se:"100%",height:Ye?"100%":Se,pointerEvents:B?"none":void 0},children:z})}),Eo=L.forwardRef(({children:e,count:t,overscan:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,reverse:a,cache:c,ssrCount:u,item:l,onScroll:f,onScrollEnd:d,style:p,...h},g)=>{const v=L.useRef(null),_=a&&!i;let w=m.jsx(Lo,{ref:g,scrollRef:_?v:void 0,count:t,overscan:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,cache:c,ssrCount:u,item:l,onScroll:f,onScrollEnd:d,children:e});return _&&(w=m.jsx("div",{style:{visibility:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"100%"},children:w})),m.jsx("div",{ref:v,...h,style:{display:i?"inline-block":"block",[i?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...p},children:w})}),Oo="_bold_127iv_1",Ro="_underline_127iv_3",Wo="_italic_127iv_5",Co="_wrapLine_127iv_9",No="_noWrapLine_127iv_21",zo="_black_127iv_29",Do="_red_127iv_31",Mo="_green_127iv_33",Bo="_yellow_127iv_35",Po="_blue_127iv_37",Ao="_magenta_127iv_39",qo="_cyan_127iv_41",Uo="_white_127iv_43",jo="_grey_127iv_45",Fo="_blackBold_127iv_49",$o="_redBold_127iv_51",Ho="_greenBold_127iv_53",Ko="_yellowBold_127iv_55",Vo="_blueBold_127iv_57",Yo="_magentaBold_127iv_59",Go="_cyanBold_127iv_61",Xo="_whiteBold_127iv_63",Jo="_greyBold_127iv_65",Qo="_blackBg_127iv_69",ea="_redBg_127iv_71",ta="_greenBg_127iv_73",na="_yellowBg_127iv_75",ra="_blueBg_127iv_77",sa="_magentaBg_127iv_79",ia="_cyanBg_127iv_81",oa="_whiteBg_127iv_83",aa="_greyBg_127iv_85",Le={bold:Oo,underline:Ro,italic:Wo,wrapLine:Co,noWrapLine:No,black:zo,red:Do,green:Mo,yellow:Bo,blue:Po,magenta:Ao,cyan:qo,white:Uo,grey:jo,blackBold:Fo,redBold:$o,greenBold:Ho,yellowBold:Ko,blueBold:Vo,magentaBold:Yo,cyanBold:Go,whiteBold:Xo,greyBold:Jo,blackBg:Qo,redBg:ea,greenBg:ta,yellowBg:na,blueBg:ra,magentaBg:sa,cyanBg:ia,whiteBg:oa,greyBg:aa},ca=(e,t)=>{const n=["log-part"];return e.foreground&&e.bold?n.push(Le[`${e.foreground}Bold`],Le.bold):e.foreground?n.push(Le[e.foreground]):e.bold&&n.push(Le.bold),t?n.push(Le.wrapLine):n.push(Le.noWrapLine),e.background&&n.push(Le[`${e.background}Bg`]),e.italic&&n.push(Le.italic),e.underline&&n.push(Le.underline),n.join(" ")},Rn=class Rn extends L.Component{render(){const{format:t,part:n,style:r}=this.props,s=n.text,i=ca(n,!!this.props.wrapLines),o=t?t(s):s;if(this.props.enableLinks){if(n.link)return m.jsxs("span",{children:[m.jsx("a",{className:i,href:s,target:"_blank",rel:"noopener noreferrer",children:o})," "]});if(n.email)return m.jsxs("span",{children:[m.jsx("a",{className:i,href:`mailto:${s}`,children:o})," "]})}return m.jsxs("span",{className:i,style:r,children:[o,this.props.enableLinks?" ":null]})}};Rn.defaultProps={format:null,style:null,enableLinks:!1,wrapLines:!1};let p1=Rn;p1.__docgenInfo={description:`An individual segment of text within a line. When the text content\r
is ANSI-parsed, each boundary is placed within its own \`LinePart\`\r
and styled separately (colors, text formatting, etc.) from the\r
rest of the line's content.`,methods:[],displayName:"LinePart",props:{part:{required:!0,tsType:{name:"LinePartCss"},description:`The pieces of data to render in a line. Will typically\r
be multiple items in the array if ANSI parsed prior.`},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"Style for the line Part",defaultValue:{value:"null",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false.",defaultValue:{value:"false",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Execute a function against each line part's\r\n`text` property in `data` to process and\r\nreturn a new value to render for the part.",defaultValue:{value:"null",computed:!1}},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}}}};const ua="_lineContent_17xbk_1",la={lineContent:ua},Wn=class Wn extends L.Component{render(){const{data:t,formatPart:n,onClick:r,number:s,style:i}=this.props;if(t){const o=t[t.length-1];o&&typeof o.text=="string"&&!o.text.endsWith(`
`)&&(o.text+=`
`)}return m.jsx("span",{className:`log-content ${la.lineContent}`,style:i,onClick:r,children:t&&t.map((o,a)=>m.jsx(p1,{wrapLines:this.props.wrapLines,part:o,format:n,enableLinks:this.props.enableLinks},`line-${s}-${a}`))})}};Wn.defaultProps={formatPart:null,style:null};let h1=Wn;h1.__docgenInfo={description:"The container of all the individual pieces of content that\r\nis on a single line. May contain one or more `LinePart`s\r\ndepending on ANSI parsing.",methods:[],displayName:"LineContent",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:`The pieces of data to render in a line. Will typically\r
be multiple items in the array if ANSI parsed prior.`},number:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:"The line number being rendered."},formatPart:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Execute a function against each line part's\r\n`text` property in `data` to process and\r\nreturn a new value to render for the part.",defaultValue:{value:"null",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"CSS Style of the LineContent.",defaultValue:{value:"null",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false."},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false"}}};const fa="_lineGutter_i4frd_1",da={lineGutter:fa},Cn=class Cn extends L.Component{render(){const{gutter:t}=this.props;return m.jsx("span",{className:`log-gutter ${da.lineGutter}`,children:t})}};Cn.defaultProps={gutter:null};let m1=Cn;m1.__docgenInfo={description:"The gutter is an element between the line number and content.",methods:[],displayName:"LineGutter",props:{gutter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The gutter object",defaultValue:{value:"null",computed:!1}}}};const pa="_lineNumber_jm5lr_1",ha="_wrapLine_jm5lr_31",ma="_lineNumberHighlight_jm5lr_47 _lineNumber_jm5lr_1",N1={lineNumber:pa,wrapLine:ha,lineNumberHighlight:ma},Nn=class Nn extends L.Component{render(){const{highlight:t,onClick:n,number:r,style:s}=this.props,i=`log-number ${t?N1.lineNumberHighlight:N1.lineNumber} ${this.props.wrapLines?N1.wrapLine:""}`;return m.jsx("a",{id:""+r,onClick:n,className:i,style:s})}};Nn.defaultProps={style:null,highlight:!1,onClick:null,wrapLines:!1};let g1=Nn;g1.__docgenInfo={description:`The line number of a single line.\r
The anchor contained within is interactive, and will highlight the\r
entire line upon selection.`,methods:[],displayName:"LineNumber",props:{number:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:"The line number to display in the anchor."},highlight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Specify whether this line is highlighted.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"union",raw:"MouseEventHandler<HTMLAnchorElement> | undefined",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEventHandler<HTMLAnchorElement>"},{name:"undefined"}]},description:"Execute a function when the line number is clicked.",defaultValue:{value:"null",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"CSS style for the Line Number.",defaultValue:{value:"null",computed:!1}},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}}}};const ga="_line_1mn7u_1",va="_wrapLine_1mn7u_11",_a="_lineHighlight_1mn7u_27",Ta="_lineSelectable_1mn7u_35",Kt={line:ga,wrapLine:va,lineHighlight:_a,lineSelectable:Ta},zn=class zn extends L.Component{render(){const{data:t,formatPart:n,highlight:r,selectable:s,onLineNumberClick:i,onLineContentClick:o,number:a,rowHeight:c,style:u,className:l,highlightClassName:f,gutter:d,wrapLines:p}=this.props,h=s?` ${Kt.lineSelectable}`:"",g=r?` ${Kt.lineHighlight} ${f}`:"",v=`${Kt.line}${h}${g} ${p?Kt.wrapLine:""} ${l}`,_={...u,lineHeight:`${u&&u.height||c}px`,minWidth:u&&u.width||"100%",width:void 0};return m.jsxs("div",{className:v,style:_,children:[this.props.enableLineNumbers?m.jsx(g1,{number:a,highlight:r,onClick:i,wrapLines:p}):null,this.props.enableGutters?m.jsx(m1,{gutter:d}):null,m.jsx(h1,{wrapLines:p,number:a,formatPart:n,data:t,onClick:o,enableLinks:this.props.enableLinks})]})}};zn.defaultProps={highlight:!1,selectable:!1,style:{},formatPart:void 0,onLineNumberClick:void 0,onLineContentClick:void 0,className:"",highlightClassName:"",enableLineNumbers:!0,enableLinks:!1,wrapLines:!1};let Te=zn;Te.__docgenInfo={description:`A single row of content, containing both the line number\r
and any text content within the line.`,methods:[],displayName:"Line",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},number:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rowHeight:{required:!1,tsType:{name:"number"},description:""},highlight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},gutter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},highlightClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},enableLineNumbers:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Enable the line numbers to be displayed. Default is true.",defaultValue:{value:"true",computed:!1}},enableGutters:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Enable the line gutters to be displayed. Default is false"},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false.",defaultValue:{value:"false",computed:!1}},formatPart:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},onLineNumberClick:{required:!1,tsType:{name:"union",raw:"MouseEventHandler<HTMLAnchorElement> | undefined",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEventHandler<HTMLAnchorElement>"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},onLineContentClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const ya="_loading_4hm73_1",ba={loading:ya},v1=J.memo(e=>m.jsx("svg",{width:"44",height:"44",viewBox:"0 0 44 44",stroke:"#fff",className:ba.loading,...e,children:m.jsxs("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[m.jsxs("circle",{cx:"22",cy:"22",r:"1",children:[m.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),m.jsxs("circle",{cx:"22",cy:"22",r:"1",children:[m.jsx("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})}));v1.displayName="Loading";v1.__docgenInfo={description:"Just a loading spinner.",methods:[],displayName:"Loading"};const z1=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function D1(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),n)}function gt(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on".concat(t),n)}function ri(e,t){const n=t.slice(0,t.length-1);for(let r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function si(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let n=t.lastIndexOf("");for(;n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Za(e,t){const n=e.length>=t.length?e:t,r=e.length>=t.length?t:e;let s=!0;for(let i=0;i<n.length;i++)r.indexOf(n[i])===-1&&(s=!1);return s}const Rt={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":z1?173:189,"=":z1?61:187,";":z1?59:186,"'":222,"[":219,"]":221,"\\":220},be={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},c1={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},j={16:!1,18:!1,17:!1,91:!1},M={};for(let e=1;e<20;e++)Rt["f".concat(e)]=111+e;let C=[],kt=null,ii="all";const Ee=new Map,At=e=>Rt[e.toLowerCase()]||be[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),wa=e=>Object.keys(Rt).find(t=>Rt[t]===e),ka=e=>Object.keys(be).find(t=>be[t]===e);function oi(e){ii=e||"all"}function Wt(){return ii||"all"}function xa(){return C.slice(0)}function Sa(){return C.map(e=>wa(e)||ka(e)||String.fromCharCode(e))}function Ia(){const e=[];return Object.keys(M).forEach(t=>{M[t].forEach(n=>{let{key:r,scope:s,mods:i,shortcut:o}=n;e.push({scope:s,shortcut:o,mods:i,keys:r.split("+").map(a=>At(a))})})}),e}function La(e){const t=e.target||e.srcElement,{tagName:n}=t;let r=!0;const s=n==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(s||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Ea(e){return typeof e=="string"&&(e=At(e)),C.indexOf(e)!==-1}function Oa(e,t){let n,r;e||(e=Wt());for(const s in M)if(Object.prototype.hasOwnProperty.call(M,s))for(n=M[s],r=0;r<n.length;)n[r].scope===e?n.splice(r,1).forEach(o=>{let{element:a}=o;return Ln(a)}):r++;Wt()===e&&oi(t||"all")}function Ra(e){let t=e.keyCode||e.which||e.charCode;const n=C.indexOf(t);if(n>=0&&C.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&C.splice(0,C.length),(t===93||t===224)&&(t=91),t in j){j[t]=!1;for(const r in be)be[r]===t&&(me[r]=!1)}}function ai(e){if(typeof e>"u")Object.keys(M).forEach(s=>{Array.isArray(M[s])&&M[s].forEach(i=>Vt(i)),delete M[s]}),Ln(null);else if(Array.isArray(e))e.forEach(s=>{s.key&&Vt(s)});else if(typeof e=="object")e.key&&Vt(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let[s,i]=n;typeof s=="function"&&(i=s,s=""),Vt({key:e,scope:s,method:i,splitKey:"+"})}}const Vt=e=>{let{key:t,scope:n,method:r,splitKey:s="+"}=e;si(t).forEach(o=>{const a=o.split(s),c=a.length,u=a[c-1],l=u==="*"?"*":At(u);if(!M[l])return;n||(n=Wt());const f=c>1?ri(be,a):[],d=[];M[l]=M[l].filter(p=>{const g=(r?p.method===r:!0)&&p.scope===n&&Za(p.mods,f);return g&&d.push(p.element),!g}),d.forEach(p=>Ln(p))})};function mr(e,t,n,r){if(t.element!==r)return;let s;if(t.scope===n||t.scope==="all"){s=t.mods.length>0;for(const i in j)Object.prototype.hasOwnProperty.call(j,i)&&(!j[i]&&t.mods.indexOf(+i)>-1||j[i]&&t.mods.indexOf(+i)===-1)&&(s=!1);(t.mods.length===0&&!j[16]&&!j[18]&&!j[17]&&!j[91]||s||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(C),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function gr(e,t){const n=M["*"];let r=e.keyCode||e.which||e.charCode;if(!me.filter.call(this,e))return;if((r===93||r===224)&&(r=91),C.indexOf(r)===-1&&r!==229&&C.push(r),["metaKey","ctrlKey","altKey","shiftKey"].forEach(a=>{const c=c1[a];e[a]&&C.indexOf(c)===-1?C.push(c):!e[a]&&C.indexOf(c)>-1?C.splice(C.indexOf(c),1):a==="metaKey"&&e[a]&&(C=C.filter(u=>u in c1||u===r))}),r in j){j[r]=!0;for(const a in be)be[a]===r&&(me[a]=!0);if(!n)return}for(const a in j)Object.prototype.hasOwnProperty.call(j,a)&&(j[a]=e[c1[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(C.indexOf(17)===-1&&C.push(17),C.indexOf(18)===-1&&C.push(18),j[17]=!0,j[18]=!0);const s=Wt();if(n)for(let a=0;a<n.length;a++)n[a].scope===s&&(e.type==="keydown"&&n[a].keydown||e.type==="keyup"&&n[a].keyup)&&mr(e,n[a],s,t);if(!(r in M))return;const i=M[r],o=i.length;for(let a=0;a<o;a++)if((e.type==="keydown"&&i[a].keydown||e.type==="keyup"&&i[a].keyup)&&i[a].key){const c=i[a],{splitKey:u}=c,l=c.key.split(u),f=[];for(let d=0;d<l.length;d++)f.push(At(l[d]));f.sort().join("")===C.sort().join("")&&mr(e,c,s,t)}}function me(e,t,n){C=[];const r=si(e);let s=[],i="all",o=document,a=0,c=!1,u=!0,l="+",f=!1,d=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(i=t.scope),t.element&&(o=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey),t.single===!0&&(d=!0)),typeof t=="string"&&(i=t),d&&ai(e,i);a<r.length;a++)e=r[a].split(l),s=[],e.length>1&&(s=ri(be,e)),e=e[e.length-1],e=e==="*"?"*":At(e),e in M||(M[e]=[]),M[e].push({keyup:c,keydown:u,scope:i,mods:s,shortcut:r[a],method:n,key:r[a],splitKey:l,element:o});if(typeof o<"u"&&window){if(!Ee.has(o)){const p=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return gr(g,o)},h=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;gr(g,o),Ra(g)};Ee.set(o,{keydownListener:p,keyupListenr:h,capture:f}),D1(o,"keydown",p,f),D1(o,"keyup",h,f)}if(!kt){const p=()=>{C=[]};kt={listener:p,capture:f},D1(window,"focus",p,f)}}}function Wa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(M).forEach(n=>{M[n].filter(s=>s.scope===t&&s.shortcut===e).forEach(s=>{s&&s.method&&s.method()})})}function Ln(e){const t=Object.values(M).flat();if(t.findIndex(r=>{let{element:s}=r;return s===e})<0){const{keydownListener:r,keyupListenr:s,capture:i}=Ee.get(e)||{};r&&s&&(gt(e,"keyup",s,i),gt(e,"keydown",r,i),Ee.delete(e))}if((t.length<=0||Ee.size<=0)&&(Object.keys(Ee).forEach(s=>{const{keydownListener:i,keyupListenr:o,capture:a}=Ee.get(s)||{};i&&o&&(gt(s,"keyup",o,a),gt(s,"keydown",i,a),Ee.delete(s))}),Ee.clear(),Object.keys(M).forEach(s=>delete M[s]),kt)){const{listener:s,capture:i}=kt;gt(window,"focus",s,i),kt=null}}const M1={getPressedKeyString:Sa,setScope:oi,getScope:Wt,deleteScope:Oa,getPressedKeyCodes:xa,getAllKeyCodes:Ia,isPressed:Ea,filter:La,trigger:Wa,unbind:ai,keyMap:Rt,modifier:be,modifierMap:c1};for(const e in M1)Object.prototype.hasOwnProperty.call(M1,e)&&(me[e]=M1[e]);if(typeof window<"u"){const e=window.hotkeys;me.noConflict=t=>(t&&window.hotkeys===me&&(window.hotkeys=e),me),window.hotkeys=me}const Ca="_downArrowIcon_149cp_1",Na={downArrowIcon:Ca},ci=J.memo(e=>m.jsx("svg",{className:Na.downArrowIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.4 122.88",children:m.jsx("path",{d:"M24.94,55A14.66,14.66,0,0,0,4.38,75.91l43.45,42.76a14.66,14.66,0,0,0,20.56,0L111,76.73A14.66,14.66,0,0,0,90.46,55.82l-18,17.69-.29-59.17c-.1-19.28-29.42-19-29.33.24l.29,58.34L24.94,55Z"})}));ci.__docgenInfo={description:"",methods:[],displayName:"DownArrowIcon"};const za="_upArrowIcon_rmkju_1",Da={upArrowIcon:za},ui=J.memo(e=>m.jsx("svg",{className:Da.upArrowIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.4 122.88",children:m.jsx("path",{d:"M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"})}));ui.__docgenInfo={description:"",methods:[],displayName:"UpArrowIcon"};const Ma="_filterLinesIcon_1y5x6_1",Ba={filterLinesIcon:Ma},li=J.memo(e=>m.jsx("svg",{className:Ba.filterLinesIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 286.054 286.054",children:m.jsx("path",{d:"M8.939 44.696h178.784a8.931 8.931 0 0 0 8.939-8.939V8.939A8.937 8.937 0 0 0 187.723 0H8.939C4.005 0 0 4.005 0 8.939v26.818c0 4.934 4.005 8.939 8.939 8.939zm268.176 35.757H8.939C4.005 80.453 0 84.457 0 89.392v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939V89.392a8.936 8.936 0 0 0-8.939-8.939zM8.939 205.601h178.784a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939H8.939A8.937 8.937 0 0 0 0 169.844v26.818a8.937 8.937 0 0 0 8.939 8.939zm268.176 35.757H8.939A8.937 8.937 0 0 0 0 250.297v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939z"})}));li.__docgenInfo={description:"",methods:[],displayName:"FilterLinesIcon"};const Pa="_searchBar_1f73d_1",Aa="_searchInput_1f73d_12",qa="_active_1f73d_23",Ua="_clickable_1f73d_28",ja="_inactive_1f73d_33",Fa="_button_1f73d_40",X={searchBar:Pa,searchInput:Aa,active:qa,clickable:Ua,inactive:ja,button:Fa},Dn=class Dn extends L.Component{constructor(t){super(t),this.state={keywords:""},this.handleSearchChange=n=>{const{value:r}=n.target;this.setState({keywords:r},()=>this.search())},this.handleFilterToggle=()=>{this.props.onFilterLinesWithMatches&&this.props.onFilterLinesWithMatches(!this.props.filterActive)},this.handleKeyPress=n=>{n.key==="Enter"&&(n.shiftKey?this.props.onShiftEnter&&this.props.onShiftEnter(n):this.props.onEnter&&this.props.onEnter(n))},this.handleSearchHotkey=n=>{this.inputRef.current&&(n.preventDefault(),this.inputRef.current.focus())},this.search=()=>{const{keywords:n}=this.state,{onSearch:r,onClearSearch:s,searchMinCharacters:i=2}=this.props;n&&n.length>i?r&&r(n):s&&s()},this.inputRef=L.createRef()}componentDidMount(){if(this.props.enableHotKeys){const t=this;me("ctrl+f,command+f,f3,ctrl+f3",function(n,r){switch(r.key){case"ctrl+f":case"command+f":t.handleSearchHotkey(n),n.preventDefault();break;case"f3":t.props.onEnter(n),n.preventDefault();break;case"ctrl+f3":t.props.onShiftEnter(n),n.preventDefault();break}}),me.filter=()=>!0}}componentWillUnmount(){this.props.enableHotKeys&&me.deleteScope("all")}render(){const{resultsCount:t,filterActive:n,disabled:r,enableSearchNavigation:s,currentResultsPosition:i,onEnter:o,onShiftEnter:a}=this.props,c=`match${t===1?"":"es"}`,u=n?X.active:X.inactive,l=t?X.active:X.inactive;return m.jsxs("div",{className:`react-lazylog-searchbar ${X.searchBar}`,children:[m.jsx("span",{className:`react-lazylog-searchbar-matches ${t?"active":"inactive"} ${t?X.active:X.inactive}`,style:{marginRight:"10px"},children:s&&t?`${i+1} of ${t} ${c}`:`${t} ${c}`}),m.jsx("input",{autoComplete:"off",type:"text",name:"search",placeholder:"Search",className:`react-lazylog-searchbar-input ${X.searchInput}`,onChange:this.handleSearchChange,onKeyUp:this.handleKeyPress,value:this.state.keywords,disabled:r,ref:this.inputRef,"aria-label":"Search Log"}),m.jsx("button",{title:"Filter Lines",disabled:r,className:`react-lazylog-searchbar-filter ${n?"active":"inactive"} ${X.button} ${u} ${X.clickable}`,onKeyUp:this.handleKeyPress,onMouseUp:this.handleFilterToggle,children:this.props.iconFilterLines||m.jsx(li,{})}),s&&m.jsxs(L.Fragment,{children:[m.jsx("button",{title:"Previous",disabled:r,className:`react-lazylog-searchbar-up-arrow ${t?`active ${X.clickable}`:"inactive"} ${X.button} ${l}`,onClick:a,children:this.props.iconFindPrevious||m.jsx(ui,{})}),m.jsx("button",{title:"Next",disabled:r,className:`react-lazylog-searchbar-down-arrow ${t?`active ${X.clickable}`:"inactive"} ${X.button} ${l}`,onClick:o,children:this.props.iconFindNext||m.jsx(ci,{})})]})]})}};Dn.defaultProps={currentResultsPosition:0,disabled:!1,enableHotKeys:!1,filterActive:!1,onClearSearch:()=>{},onFilterLinesWithMatches:()=>{},onSearch:()=>{},resultsCount:0,searchMinCharacters:2};let _1=Dn;_1.__docgenInfo={description:"",methods:[{name:"handleSearchChange",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],alias:"React.ChangeEvent"}}],returns:null},{name:"handleFilterToggle",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyPress",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLElement>",elements:[{name:"HTMLElement"}],alias:"React.KeyboardEvent"}}],returns:null},{name:"handleSearchHotkey",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"search",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SearchBar",props:{enableSearchNavigation:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:`If true, adds up and down arrows to search bar to jump\r
to the next and previous result. The down arrow calls\r
"onEnter" and the up arrow calls "onShiftEnter"\r
Defaults to false, which does not add the arrows.`},enableHotKeys:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:`If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,\r
etc.)`,defaultValue:{value:"false",computed:!1}},currentResultsPosition:{required:!1,tsType:{name:"number"},description:`The current result the browser search is highlighting.\r
Only applicable if searchLikeBrowser is true.\r
Defaults to 0.`,defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"If true, the input field and filter button will be disabled.",defaultValue:{value:"false",computed:!1}},filterActive:{required:!1,tsType:{name:"boolean"},description:"If true, then only lines that match the search term will be displayed.",defaultValue:{value:"false",computed:!1}},iconFilterLines:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Filter Lines button in the Search Bar. Defaults to FilterLineIcon SVG."},iconFindNext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Next button in the Search Bar. Defaults to ArrowDownIcon SVG."},iconFindPrevious:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Previous button in the Search Bar. Defaults to ArrowUpIcon SVG."},onClearSearch:{required:!1,tsType:{name:"union",raw:"(() => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Executes a function when the search input has been cleared.",defaultValue:{value:"() => {}",computed:!1}},onFilterLinesWithMatches:{required:!1,tsType:{name:"union",raw:"((isFiltered: boolean) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Executes a function when the option `Filter Lines With Matches`\r\nis enable.",defaultValue:{value:"() => {}",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(keyword: string) => void",signature:{arguments:[{type:{name:"string"},name:"keyword"}],return:{name:"void"}}},description:"Executes a function when the user starts typing.",defaultValue:{value:"() => {}",computed:!1}},onEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.UIEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactUIEvent",raw:"React.UIEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:"Exectues a function when enter is pressed."},onShiftEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.UIEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactUIEvent",raw:"React.UIEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:"Exectues a function when shift + enter is pressed."},resultsCount:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:`Number of search results. Should come from the component\r
executing the search algorithm.`,defaultValue:{value:"0",computed:!1}},searchMinCharacters:{required:!1,tsType:{name:"number"},description:"Minimum number of characters to trigger a search. Defaults to 2.",defaultValue:{value:"2",computed:!1}}}};const vr={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"white",90:"grey"},_r={40:"black",41:"red",42:"green",43:"yellow",44:"blue",45:"magenta",46:"cyan",47:"white"},Tr={1:"bold",3:"italic",4:"underline"},$a=(e,t)=>{if(e.length)return[e.substr(0,e.length-1),t];if(t.length){const n=t.length-1,{text:r}=t[n],s=r.length===1?t.slice(0,t.length-1):t.map((i,o)=>n===o?{...i,text:r.substr(0,r.length-1)}:i);return[e,s]}return[e,t]},yr=e=>{let t=null,n=null,r="",s=[],i=[],o={};for(let a=0;a<e.length;a++){if(t!==null){t==="\x1B"&&e[a]==="["?(r&&(o.text=r,i.push(o),o={text:""},r=""),t=null,n=""):(r+=t+e[a],t=null);continue}else if(n!==null){if(e[a]===";")s.push(n),n="";else if(e[a]==="m"){s.push(n),n=null,r="";for(let c=0;c<s.length;c++){const u=s[c];vr[u]?o.foreground=vr[u]:_r[u]?o.background=_r[u]:u==="39"?delete o.foreground:u==="49"?delete o.background:Tr[u]?o[Tr[u]]=!0:u==="22"?o.bold=!1:u==="23"?o.italic=!1:u==="24"&&(o.underline=!1)}s=[]}else n+=e[a];continue}e[a]==="\x1B"?t=e[a]:e[a]==="\b"?[r,i]=$a(r,i):r+=e[a]}return r&&(o.text=r+(t||""),i.push(o)),i},Oe=e=>new TextEncoder().encode(e),fi=e=>(ArrayBuffer.isView(e)||(e=new Uint8Array([e])),new TextDecoder("utf-8").decode(e));function I1(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(s){s(n)}),(r=e.get("*"))&&r.slice().map(function(s){s(t,n)})}}}var B1,br;function Ha(){if(br)return B1;br=1;var e=function(i){return i instanceof RegExp},t=function(o){var a=/[\\^$.*+?()[\]{}|]/g,c=RegExp(a.source);return o&&c.test(o)?o.replace(a,"\\$&"):o},n=function(i){return typeof i=="string"},r=function(i){var o=[];return i.forEach(function(a){Array.isArray(a)?o=o.concat(a):o.push(a)}),o};function s(i,o,a){var c=0,u=0;if(i==="")return i;if(!i||!n(i))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var l=o;e(l)||(l=new RegExp("("+t(l)+")","gi"));for(var f=i.split(l),d=1,p=f.length;d<p;d+=2){if(f[d]===void 0||f[d-1]===void 0){console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");continue}u=f[d].length,c+=f[d-1].length,f[d]=a(f[d],d,c),c+=u}return f}return B1=function(o,a,c){return Array.isArray(o)||(o=[o]),r(o.map(function(u){return n(u)?s(u,a,c):u}))},B1}var Ka=Ha();const P1=_i(Ka),En=10,On=13,Zr=45,di=e=>e===En||e===On,vt=({follow:e=!1,scrollToLine:t=0,previousCount:n=0,count:r=0,offset:s=0})=>e?r-1-s:t&&n>t?-1:t?t-1-s:-1,A1=e=>!e||Array.isArray(e)&&(isNaN(e[0])||isNaN(e[1]))||!Array.isArray(e)&&isNaN(e)?Je(0,0):Array.isArray(e)?e.length===1?Je(e[0],e[0]+1):Je(e[0],e[1]+1):Je(e,e+1),qt=(e,t)=>{const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n},Fe=(e,t)=>{const n=t?qt(t,e):e,{length:r}=n;let s=0,i=0;return{lines:K().withMutations(a=>{for(;i<r;){const c=n[i],u=n[i+1];di(c)?(a.push(n.subarray(s,i)),s=c===On&&u===En?i+2:i+1,i=s):i+=1}!t&&i!==s&&a.push(n.slice(s))}),remaining:i!==s?n.slice(s):null}},Va=e=>{const{length:t}=e,n=[];let r=0,s=0;for(;s<t;){const i=e[s],o=e[s+1];di(i)?(n.push(s),r=i===On&&o===En?s+2:s+1,s=r):s+=1}return n},wr=({searchKeywords:e,nextFormatPart:t,caseInsensitive:n,replaceJsx:r,selectedLine:s,replaceJsxHighlight:i,highlightedWordLocation:o})=>a=>{let c=a;const u=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),l=new RegExp(`(?=${u})`,n?"i":void 0),f=a.split(l),d=new RegExp(`(${u})`,n?"i":void 0),p=()=>(s?f.length===1?c=P1(c,u,i):c=f.map((h,g)=>P1(h,d,g===o?i:r)):c=P1(c,d,r),c);return n?a.toLowerCase().includes(e.toLowerCase())&&(c=p()):a.includes(e)&&(c=p()),c},Ya='^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")',Ga="[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$",Xa=new RegExp(`${Ya}@${Ga}`),kr="(((http|ftp)?s?s?)(:)(/{2}))",Ja=/https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/,Qa=e=>{const t=[];return e.forEach(n=>{const r=n.text.split(" ");let s=!1,i="";r.forEach(o=>{if(o.search(Ja)>-1){if(t.push({text:i.trimEnd()}),i="",s=!0,o.search(Xa)>-1){t.push({token:o,email:!0});return}if(o.search(kr)===-1){t.push({text:`https://${o}`,link:!0});return}o.split(new RegExp(/(\()*([^\)]+)(\))*/)).filter(Boolean).forEach(c=>{c.search(kr)>-1?t.push({text:c,link:!0}):t.push({text:c})});return}i+=o+" "}),s||t.push(n)}),t},ec=(e,t)=>{const{withCredentials:n,onOpen:r,onClose:s,onError:i,formatMessage:o}=t,a=I1();let c=new Uint8Array,u=null,l=!1;return a.on("data",f=>{c=qt(c,Oe(f));const{lines:d,remaining:p}=Fe(Oe(f),u);u=p,a.emit("update",{lines:d,encodedLog:c})}),a.on("done",()=>{u&&a.emit("update",{lines:K.of(u),encodedLog:c}),a.emit("end",c)}),a.on("start",()=>{try{const f=new EventSource(e,{withCredentials:n});f.addEventListener("open",d=>{r&&r(d,f)}),f.addEventListener("close",d=>{if(s&&s(d),!l&&t.reconnect){const p=t.reconnectWait??1;setTimeout(()=>a.emit("start"),p*1e3)}}),f.addEventListener("error",d=>{i&&i(d)}),f.addEventListener("message",d=>{let p=o?o(d.data):d.data;typeof p=="string"&&(p=p.endsWith(`
`)?p:`${p}
`,a.emit("data",p))})}catch(f){a.emit("error",f)}}),a},tc=Promise.resolve().then(()=>globalThis.fetch),nc=(e,t)=>{const n=I1();return n.on("start",async()=>{try{const s=await(await tc)(e,Object.assign({credentials:"omit"},t));if(!s.ok){const c=new Error(s.statusText);c.status=s.status,n.emit("error",c);return}const i=await s.arrayBuffer(),o=new Uint8Array(i),{lines:a}=Fe(o);n.emit("update",{lines:a}),n.emit("end",o)}catch(r){n.emit("error",r)}}),n},rc=(e,t)=>{const n=Array.from(Oe(e)),r=[-1,0],s=n.length,i=t.length,o=s-1;let a=0,c=0,u=0,l=2;for(;l<s;)n[l-1]===n[a]?(a+=1,r[l]=a,l+=1):a>0?a=r[a]:(r[l]=0,l+=1);const f=[];for(;c+u<i;)n[u]===t[c+u]?(u===o&&f.push(c),u+=1):r[u]>-1?(c=c+u-r[u],u=r[u]):(u=0,c+=1);return f},sc=(e,t,n)=>{let r=e,s=t,i=fi(s);n&&(r=r==null?void 0:r.toLowerCase(),i=i.toLowerCase()),i=i.endsWith(`
`)?i:i+`
`,s=Oe(i);const o=rc(r,s),a=Va(s),c=a.length,u=o.length,l=[];let f=0,d=0,p,h;for(;f<c;){for(p=a[f];d<u&&(h=o[d],h<=p);)l.push(f+1),d+=1;f+=1}return l},ic=Promise.resolve().then(()=>globalThis.fetch),pi=async(e,t)=>{const n=await e.read();if(n.value&&t.emit("data",n.value),!n.done)return pi(e,t);t.emit("done")},oc=(e,t)=>{const n=I1();let r=null,s=new Uint8Array;return n.on("data",i=>{s=qt(s,new Uint8Array(i));const{lines:o,remaining:a}=Fe(i,r);r=a,n.emit("update",{lines:o,encodedLog:s})}),n.on("done",()=>{r&&n.emit("update",{lines:K.of(r),encodedLog:s}),n.emit("end",s)}),n.on("start",async()=>{var i;try{const a=await(await ic)(e,Object.assign({credentials:"omit"},t));if(!a.ok){const u=new Error(a.statusText);u.status=a.status,n.emit("error",u);return}const c=(i=a.body)==null?void 0:i.getReader();return n.on("abort",()=>c==null?void 0:c.cancel("ABORTED")),pi(c,n)}catch(o){n.emit("error",o)}}),n},ac=(e,t)=>{const{onOpen:n,onClose:r,onError:s,formatMessage:i}=t,o=I1();let a=new Uint8Array,c=null,u=!1;return o.on("data",l=>{a=qt(a,Oe(l));const{lines:f,remaining:d}=Fe(Oe(l),c);c=d,o.emit("update",{lines:f,encodedLog:a})}),o.on("done",()=>{c&&o.emit("update",{lines:K.of(c),encodedLog:a}),o.emit("end",a)}),o.on("start",()=>{try{const l=new WebSocket(e);l.addEventListener("open",f=>{n&&n(f,l)}),l.addEventListener("close",f=>{if(r&&r(f),!u&&t.reconnect){const d=t.reconnectWait??1;setTimeout(()=>o.emit("start"),d*1e3)}}),l.addEventListener("error",f=>{s&&s(f)}),l.addEventListener("message",f=>{let d=i?i(f.data):f.data;typeof d=="string"&&(d=d.endsWith(`
`)?d:`${d}
`,o.emit("data",d))}),o.on("abort",()=>{u=!0,l.close()})}catch(l){o.emit("error",l)}}),o},cc="_lazyLog_1hlpt_1",uc="_wrapLine_1hlpt_35",lc="_searchMatch_1hlpt_43",fc="_searchMatchHighlighted_1hlpt_53",_t={lazyLog:cc,wrapLine:uc,searchMatch:lc,searchMatchHighlighted:fc},Mn=class Mn extends L.Component{constructor(){super(...arguments),this.state={resultLines:[],count:0,currentResultsPosition:0,isFilteringLinesWithMatches:!1,isSearching:!1,offset:0,resultLineUniqueIndexes:[],scrollOffset:0,scrollToIndex:0,scrollToLine:0,lines:K()},this.emitter=void 0,this.encodedLog=void 0,this.searchBarRef=J.createRef(),this.listRef=J.createRef(),this.handleUpdate=({lines:t,encodedLog:n})=>{this.encodedLog=n;const{scrollToLine:r,follow:s,stream:i,websocket:o,eventsource:a,external:c}=this.props;if(i||o||a||c)this.setState((u,l)=>{const{scrollToLine:f,follow:d}=l,{count:p}=u,h=0,g=(u.lines||K()).concat(t),v=g.count(),_=vt({follow:d,scrollToLine:f,previousCount:p,count:v,offset:h});return{lines:g,offset:h,count:v,scrollToIndex:_}}),this.forceSearch();else{const{count:u}=this.state,l=0,f=(this.state.lines||K()).concat(t),d=f.count(),p=vt({follow:s,scrollToLine:r,previousCount:u,count:d,offset:l});this.setState({lines:f,offset:l,count:d,scrollToIndex:p})}},this.handleEnd=t=>{this.encodedLog=t,this.setState({loaded:!0}),this.props.onLoad&&this.props.onLoad()},this.handleError=t=>{this.setState({error:t}),this.props.onError&&this.props.onError(t)},this.handleHighlight=t=>{var f,d;const{onHighlight:n,enableMultilineHighlight:r}=this.props,{isFilteringLinesWithMatches:s}=this.state;if(!t.currentTarget.id)return;const i=+t.currentTarget.id;if(!i)return;const o=(f=this.state.highlight)==null?void 0:f.first(),a=(d=this.state.highlight)==null?void 0:d.last();let c;o===i?c=null:!t.shiftKey||!o?c=i:r&&i>o?c=[o,i]:!r&&i>o?c=i:c=[i,a];const u=A1(c),l={highlight:u};return s&&Object.assign(l,{scrollToIndex:vt({scrollToLine:i})}),this.setState(l,()=>{n&&n(u),s&&this.handleFilterLinesWithMatches(!1)}),u},this.handleEnterPressed=()=>{const{resultLines:t,scrollToLine:n,currentResultsPosition:r,isFilteringLinesWithMatches:s}=this.state;if(!this.props.enableSearchNavigation){this.handleFilterLinesWithMatches(!s);return}if(t){if(n&&r+1<t.length){this.handleScrollToLine(t[r+1]),this.setState({currentResultsPosition:r+1});return}this.handleScrollToLine(t[0]),this.setState({currentResultsPosition:0})}},this.handleShiftEnterPressed=()=>{const{resultLines:t,scrollToLine:n,currentResultsPosition:r}=this.state;if(this.props.enableSearchNavigation&&t){if(n&&r-1>=0){this.handleScrollToLine(t[r-1]),this.setState({currentResultsPosition:r-1});return}this.handleScrollToLine(t[t.length-1]),this.setState({currentResultsPosition:t.length-1})}},this.handleSearch=t=>{const{resultLines:n,searchKeywords:r,currentResultsPosition:s}=this.state,{caseInsensitive:i,stream:o,websocket:a,eventsource:c,external:u}=this.props,l=!o&&!a&&!c&&!u&&t===r?n:sc(t,this.encodedLog,i);let f=s;f>l.length-1&&(f=0),this.setState({resultLines:l,isSearching:!0,searchKeywords:t,currentResultsPosition:f},this.filterLinesWithMatches)},this.forceSearch=()=>{const{searchKeywords:t}=this.state,{searchMinCharacters:n}=this.props;t&&t.length>(n||0)&&this.handleSearch(this.state.searchKeywords)},this.handleClearSearch=()=>{this.setState({isSearching:!1,searchKeywords:"",resultLines:[],filteredLines:K(),resultLineUniqueIndexes:[],isFilteringLinesWithMatches:this.state.isFilteringLinesWithMatches,scrollToIndex:0,currentResultsPosition:0})},this.handleFilterLinesWithMatches=t=>{this.setState({isFilteringLinesWithMatches:t,filteredLines:K(),resultLineUniqueIndexes:[]},this.filterLinesWithMatches)},this.filterLinesWithMatches=()=>{const{resultLines:t,lines:n,isFilteringLinesWithMatches:r}=this.state;if(t.length>0&&r){const s=[...new Set(t)];this.setState({resultLineUniqueIndexes:s,filteredLines:n==null?void 0:n.filter((i,o)=>s.some(a=>o+1===a))})}},this.handleFormatPart=t=>{const{isSearching:n,searchKeywords:r,resultLines:s,currentResultsPosition:i}=this.state,{enableSearchNavigation:o}=this.props;if(n){if(o&&s&&i!==void 0&&s[i]===t){let a=0;const c=s.findIndex(u=>u===s[i]);for(let u=c;u<=i;u+=1)s[u]===t&&(a+=1);return wr({searchKeywords:r,nextFormatPart:void 0,caseInsensitive:this.props.caseInsensitive,replaceJsx:(u,l)=>m.jsx("span",{className:_t.searchMatch,children:u},l),selectedLine:!0,replaceJsxHighlight:(u,l)=>m.jsx("span",{className:_t.searchMatchHighlighted,children:u},l),highlightedWordLocation:a})}return wr({searchKeywords:r,nextFormatPart:void 0,caseInsensitive:this.props.caseInsensitive,replaceJsx:(a,c)=>m.jsx("span",{className:_t.searchMatch,children:a},c),selectedLine:void 0,replaceJsxHighlight:void 0,highlightedWordLocation:void 0})}return this.props.formatPart},this.renderRow=t=>{const{rowHeight:n,selectableLines:r,lineClassName:s,highlightLineClassName:i,onLineNumberClick:o,onLineContentClick:a,gutter:c,enableGutters:u,enableLineNumbers:l,wrapLines:f,enableLinks:d}=this.props,{highlight:p,lines:h,offset:g,isFilteringLinesWithMatches:v,filteredLines:_,resultLineUniqueIndexes:w}=this.state,b=v?_:h,$=v?w[t.index]:t.index+1+g;if((b==null?void 0:b.size)<=0)return this.renderNoRows();if(!$)return;const ne=fi(b==null?void 0:b.get(t.index)),S=d?Qa(yr(ne)):yr(ne);return m.jsx(Te,{className:`log-line ${s}`,data:S,enableGutters:u,wrapLines:f,enableLineNumbers:l,enableLinks:d,formatPart:this.handleFormatPart($),gutter:c?c[$]:void 0,highlight:p==null?void 0:p.includes($),highlightClassName:`log-highlight ${i}`,number:$,rowHeight:n,selectable:r,onLineNumberClick:Ce=>{const oe=this.handleHighlight(Ce);o==null||o({lineNumber:$,highlightRange:oe})},onLineContentClick:a},t.index)},this.renderNoRows=()=>{const{lineClassName:t,highlightLineClassName:n,wrapLines:r}=this.props,{error:s,count:i,loaded:o}=this.state;return s?this.renderError():!i&&o?m.jsx(m.Fragment,{}):i?m.jsx(Te,{wrapLines:r,className:t,highlightClassName:n,data:[{bold:!0,text:"No filter matches"}]}):this.props.loadingComponent||m.jsx(v1,{})},this.calculateListHeight=(t=!1)=>{var o;const{height:n,enableSearch:r}=this.props;if(!((o=this.listRef)!=null&&o.current))return 0;const s=this.listRef.current.viewportSize,i=r?Zr:0;return n==="auto"?t?r?`calc(100% - ${Zr}px)`:"100%":s:Number(n)-i},this.getItemSize=t=>this.props.rowHeight||19}static getDerivedStateFromProps({highlight:t,follow:n,scrollToLine:r,url:s,text:i},{count:o,offset:a,url:c,text:u,highlight:l,isSearching:f,scrollToIndex:d}){const p=f?d:vt({follow:n,scrollToLine:r,count:o,offset:a}),h=s&&s!==c||i&&i!==u;return{scrollToIndex:p,highlight:l===Je(0,0)?A1(t):l||A1(l),...h?{url:s,text:i,lines:K(),count:0,offset:0,loaded:!1,error:null}:null}}componentDidMount(){this.request(),this.props.scrollToLine&&setTimeout(()=>{this.listRef&&this.listRef.current&&this.handleScrollToLine(this.props.scrollToLine)},100)}componentDidUpdate(t,n){var $,ne;const{props:r,state:s,listRef:i}=this,{url:o,text:a,follow:c,extraLines:u,onLoad:l,onError:f,highlight:d,onHighlight:p,scrollToLine:h}=r,{scrollOffset:g,scrollToIndex:v,isSearching:_,loaded:w,error:b}=s;(t.url!==o||n.url!==s.url||t.text!==a)&&this.request(),t.text!==a&&!c&&g>0&&(($=i==null?void 0:i.current)==null||$.scrollTo(g)),c&&!_&&((ne=i==null?void 0:i.current)==null||ne.scrollToIndex(v+(u||0),{align:"nearest"})),!w&&n.loaded!==w&&l?l():b&&n.error!==b&&f&&f(b),d&&d!==t.highlight&&p&&p(s.highlight),console.log("scrollToLine",h),!c&&h&&t.scrollToLine!==h&&this.handleScrollToLine(h)}componentWillUnmount(){this.endRequest()}initEmitter(){const{stream:t,websocket:n,eventsource:r,url:s,fetchOptions:i,websocketOptions:o,eventsourceOptions:a}=this.props;return n?ac(s,o):r?ec(s,a):t?oc(s,i):nc(s,i)}request(){const{text:t,url:n,external:r}=this.props;if(this.endRequest(),t){const s=Oe(t),{lines:i}=Fe(s);this.handleUpdate({lines:i,encodedLog:s}),this.handleEnd(s)}if(n&&(this.emitter=this.initEmitter(),this.emitter.on("update",this.handleUpdate),this.emitter.on("end",this.handleEnd),this.emitter.on("error",this.handleError),this.emitter.emit("start")),r){const s=Oe(""),{lines:i}=Fe(s);this.handleUpdate({lines:i,encodedLog:s})}}endRequest(){this.emitter&&(this.emitter.emit("abort"),this.emitter.off("update",this.handleUpdate),this.emitter.off("end",this.handleEnd),this.emitter.off("error",this.handleError),this.emitter=null)}appendLines(t){const n=t.join(`
`),r=Oe(n.endsWith(`
`)?n:n+`
`),s=qt(this.encodedLog,r),{lines:i}=Fe(r);this.handleUpdate({lines:i,encodedLog:s})}handleScrollToLine(t=0){var r,s;const n=vt({scrollToLine:t});this.setState({scrollToIndex:n,scrollToLine:t}),(s=(r=this.listRef)==null?void 0:r.current)==null||s.scrollToIndex(n,{align:"nearest"})}renderError(){const{url:t,lineClassName:n,selectableLines:r,highlightLineClassName:s,enableLinks:i,wrapLines:o}=this.props,{error:a}=this.state;return m.jsxs(L.Fragment,{children:[m.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,number:"Error",data:[{bold:!0,foreground:"red",text:a!=null&&a.status?`${a==null?void 0:a.message} (HTTP ${a==null?void 0:a.status})`:(a==null?void 0:a.message)||"Network Error"}]},"error-line-0"),m.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{bold:!0,text:"An error occurred attempting to load the provided log."}]},"error-line-1"),m.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{bold:!0,text:"Please check the URL and ensure it is reachable."}]},"error-line-2"),m.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[]},"error-line-3"),m.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{foreground:"blue",text:t}]},"error-line-4")]})}clear(){var t;(t=this.searchBarRef.current)==null||t.setState({keywords:""}),this.handleClearSearch(),this.setState({count:0,lines:K(),isFilteringLinesWithMatches:!1})}render(){const{enableSearch:t}=this.props,{resultLines:n,isFilteringLinesWithMatches:r,filteredLines:s=K(),count:i,currentResultsPosition:o}=this.state,a=r?s.size:i;return m.jsxs(L.Fragment,{children:[t&&m.jsx(_1,{ref:this.searchBarRef,currentResultsPosition:o,disabled:i===0,enableHotKeys:this.props.enableHotKeys,enableSearchNavigation:this.props.enableSearchNavigation,filterActive:r,iconFilterLines:this.props.iconFilterLines,iconFindNext:this.props.iconFindNext,iconFindPrevious:this.props.iconFindPrevious,onClearSearch:this.handleClearSearch,onEnter:this.handleEnterPressed,onFilterLinesWithMatches:this.handleFilterLinesWithMatches,onSearch:this.handleSearch,onShiftEnter:this.handleShiftEnterPressed,resultsCount:n.length,searchMinCharacters:this.props.searchMinCharacters}),m.jsxs(Eo,{ref:this.listRef,className:`react-lazylog ${_t.lazyLog} ${this.props.wrapLines?_t.wrapLine:""}`,style:{height:this.calculateListHeight(!0)},onScroll:c=>{var u;if(this.setState({scrollOffset:c}),this.props.onScroll){if(!((u=this.listRef)!=null&&u.current))return;const l={scrollTop:c,scrollHeight:this.listRef.current.scrollSize,clientHeight:this.calculateListHeight()};this.props.onScroll(l)}},children:[Array.from({length:a===0?a:a+(this.props.extraLines||0)}).map((c,u)=>this.renderRow({index:u})),this.props.loading===!0&&(this.props.loadingComponent||m.jsx(v1,{}))]})]})}};Mn.defaultProps={containerStyle:{width:"auto",maxWidth:"initial",overflow:"initial"},caseInsensitive:!1,enableGutters:!1,enableHotKeys:!1,enableLineNumbers:!0,enableLinks:!1,enableMultilineHighlight:!0,enableSearch:!1,enableSearchNavigation:!0,wrapLines:!1,extraLines:0,fetchOptions:{credentials:"omit"},follow:!1,formatPart:void 0,height:"auto",highlight:void 0,highlightLineClassName:"",lineClassName:"",onError:void 0,onHighlight:void 0,onLineNumberClick:void 0,onLoad:void 0,loading:void 0,overscanRowCount:100,rowHeight:19,scrollToLine:0,searchMinCharacters:2,selectableLines:!1,stream:!1,style:{},websocket:!1,websocketOptions:{},eventsource:!1,eventsourceOptions:{},width:"auto",external:!1};let Ze=Mn;Ze.__docgenInfo={description:`React component that loads and views remote text in the browser lazily and efficiently.\r
Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting.`,methods:[{name:"initEmitter",docblock:null,modifiers:[],params:[],returns:null},{name:"request",docblock:null,modifiers:[],params:[],returns:null},{name:"endRequest",docblock:null,modifiers:[],params:[],returns:null},{name:"appendLines",docblock:null,modifiers:[],params:[{name:"newLines",optional:!1,type:{name:"Array",elements:[{name:"string"}],raw:"string[]"}}],returns:null},{name:"handleUpdate",docblock:null,modifiers:[],params:[{name:"{ lines: moreLines, encodedLog }: any",optional:!1,type:{name:"any"}}],returns:null},{name:"handleEnd",docblock:null,modifiers:[],params:[{name:"encodedLog",optional:!1,type:{name:"Uint8Array",alias:"Uint8Array"}}],returns:null},{name:"handleError",docblock:null,modifiers:[],params:[{name:"err",optional:!1,type:{name:"ErrorStatus",alias:"ErrorStatus"}}],returns:null},{name:"handleHighlight",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement, MouseEvent>",elements:[{name:"HTMLAnchorElement"},{name:"MouseEvent"}],alias:"React.MouseEvent"}}],returns:null},{name:"handleScrollToLine",docblock:null,modifiers:[],params:[{name:"scrollToLine",optional:!0,type:null}],returns:null},{name:"handleEnterPressed",docblock:null,modifiers:[],params:[],returns:null},{name:"handleShiftEnterPressed",docblock:null,modifiers:[],params:[],returns:null},{name:"handleSearch",docblock:null,modifiers:[],params:[{name:"keywords",optional:!1,type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}],returns:null},{name:"forceSearch",docblock:null,modifiers:[],params:[],returns:null},{name:"handleClearSearch",docblock:null,modifiers:[],params:[],returns:null},{name:"handleFilterLinesWithMatches",docblock:null,modifiers:[],params:[{name:"isFilterEnabled",optional:!1,type:{name:"boolean"}}],returns:null},{name:"filterLinesWithMatches",docblock:null,modifiers:[],params:[],returns:null},{name:"handleFormatPart",docblock:null,modifiers:[],params:[{name:"lineNumber",optional:!1,type:{name:"number"}}],returns:null},{name:"renderError",docblock:null,modifiers:[],params:[],returns:null},{name:"renderRow",docblock:null,modifiers:[],params:[{name:"options",optional:!1,type:{name:"signature",type:"object",raw:"{ index: number }",signature:{properties:[{key:"index",value:{name:"number",required:!0}}]}}}],returns:null},{name:"renderNoRows",docblock:null,modifiers:[],params:[],returns:null},{name:"calculateListHeight",docblock:null,modifiers:[],params:[{name:"useCSSStyle",optional:!0,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"index",optional:!1,type:{name:"number"}}],returns:null},{name:"clear",docblock:"Clears the log and search",modifiers:[],params:[],returns:null,description:"Clears the log and search"}],displayName:"LazyLog",props:{caseInsensitive:{required:!1,tsType:{name:"boolean"},description:"Flag to enable/disable case insensitive search",defaultValue:{value:"false",computed:!1}},containerStyle:{required:!1,tsType:{name:"CSSProperties"},description:`Optional custom inline style to attach to element which contains\r
the interior scrolling container.`,defaultValue:{value:`{\r
    width: "auto",\r
    maxWidth: "initial",\r
    overflow: "initial",\r
}`,computed:!1}},enableHotKeys:{required:!1,tsType:{name:"boolean"},description:`If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,\r
etc.)`,defaultValue:{value:"false",computed:!1}},enableGutters:{required:!1,tsType:{name:"boolean"},description:"Enable the line gutters to be displayed. Default is false",defaultValue:{value:"false",computed:!1}},enableLineNumbers:{required:!1,tsType:{name:"boolean"},description:"Enable the line numbers to be displayed. Default is true.",defaultValue:{value:"true",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false.",defaultValue:{value:"false",computed:!1}},enableSearch:{required:!1,tsType:{name:"boolean"},description:"Enable the search feature.",defaultValue:{value:"false",computed:!1}},enableSearchNavigation:{required:!1,tsType:{name:"boolean"},description:`If true, search like a browser search - enter jumps to the next line\r
with the searched term, shift + enter goes backwards.\r
Also adds up and down arrows to search bar to jump\r
to the next and previous result.\r
If false, enter toggles the filter instead.\r
Defaults to true.`,defaultValue:{value:"true",computed:!1}},enableMultilineHighlight:{required:!1,tsType:{name:"boolean"},description:`Enable the ability to select multiple lines using shift + click.\r
Defaults to true.`,defaultValue:{value:"true",computed:!1}},extraLines:{required:!1,tsType:{name:"number"},description:`Number of extra lines to show at the bottom of the log.\r
Set this to 1 so that Linux users can see the last line\r
of the log output.`,defaultValue:{value:"0",computed:!1}},fetchOptions:{required:!1,tsType:{name:"RequestInit"},description:"Options object which will be passed through to the `fetch` request.\r\nDefaults to `{ credentials: 'omit' }`.",defaultValue:{value:'{ credentials: "omit" as RequestCredentials }',computed:!1}},follow:{required:!1,tsType:{name:"boolean"},description:"Scroll to the end of the component after each update to the content.\r\nCannot be used in combination with `scrollToLine`.",defaultValue:{value:"false",computed:!1}},formatPart:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"ReactNode"}}},description:`Execute a function against each string part of a line,\r
returning a new line part. Is passed a single argument which is\r
the string part to manipulate, should return a new string\r
with the manipulation completed.`,defaultValue:{value:"undefined",computed:!0}},gutter:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"The Line Gutter component"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Set the height in pixels for the component.\r\nDefaults to `'auto'` if unspecified. When the `height` is `'auto'`,\r\nthe component will expand vertically to fill its container.",defaultValue:{value:'"auto"',computed:!1}},highlight:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:"Line number (e.g. `highlight={10}`) or line number range to highlight\r\ninclusively (e.g. `highlight={[5, 10]}` highlights lines 5-10).\r\nThis is 1-indexed, i.e. line numbers start at `1`.",defaultValue:{value:"undefined",computed:!0}},highlightLineClassName:{required:!1,tsType:{name:"string"},description:"Specify an additional className to append to highlighted lines.",defaultValue:{value:'""',computed:!1}},iconFilterLines:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Filter Lines button in the Search Bar. Defaults to FilterLineIcon SVG."},iconFindNext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Next button in the Search Bar. Defaults to ArrowDownIcon SVG."},iconFindPrevious:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Previous button in the Search Bar. Defaults to ArrowUpIcon SVG."},lineClassName:{required:!1,tsType:{name:"string"},description:"Specify an additional className to append to lines.",defaultValue:{value:'""',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Manually display the loading component",defaultValue:{value:"undefined",computed:!0}},loadingComponent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Specify an alternate component to use when loading."},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: any) => any",signature:{arguments:[{type:{name:"any"},name:"error"}],return:{name:"any"}}},description:"Execute a function if the provided `url` has encountered an error\r\nduring loading.",defaultValue:{value:"undefined",computed:!0}},onHighlight:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: Immutable.Seq.Indexed<number>) => any",signature:{arguments:[{type:{name:"Immutable.Seq.Indexed",elements:[{name:"number"}],raw:"Immutable.Seq.Indexed<number>"},name:"range"}],return:{name:"any"}}},description:"Execute a function when the highlighted range has changed.\r\nIs passed a single argument which is an `Immutable.Range`\r\nof the highlighted line numbers.",defaultValue:{value:"undefined",computed:!0}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => any",signature:{arguments:[],return:{name:"any"}}},description:"Execute a function if/when the provided `url` has completed loading.",defaultValue:{value:"undefined",computed:!0}},onLineNumberClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: LineNumberClickEvent) => any",signature:{arguments:[{type:{name:"LineNumberClickEvent"},name:"event"}],return:{name:"any"}}},description:`Additional function called when a line number is clicked.\r
On click, the line will always be highlighted.\r
This function is to provide additional actions.\r
Receives an object with lineNumber and highlightRange.\r
Defaults to null.`,defaultValue:{value:"undefined",computed:!0}},overscanRowCount:{required:!1,tsType:{name:"number"},description:"Number of rows to render above/below the visible bounds of the list.\r\nThis can help reduce flickering during scrolling on\r\ncertain browsers/devices. Defaults to `100`.",defaultValue:{value:"100",computed:!1}},rowHeight:{required:!1,tsType:{name:"number"},description:"A fixed row height in pixels. Controls how tall a line is,\r\nas well as the `lineHeight` style of the line's text.\r\nDefaults to `19`.",defaultValue:{value:"19",computed:!1}},scrollToLine:{required:!1,tsType:{name:"number"},description:"Scroll to a particular line number once it has loaded.\r\nThis is 1-indexed, i.e. line numbers start at `1`.\r\nCannot be used in combination with `follow`.",defaultValue:{value:"0",computed:!1}},searchMinCharacters:{required:!1,tsType:{name:"number"},description:"Minimum number of characters to trigger a search. Defaults to 2.",defaultValue:{value:"2",computed:!1}},selectableLines:{required:!1,tsType:{name:"boolean"},description:"Make the text selectable, allowing to copy & paste. Defaults to `false`.",defaultValue:{value:"false",computed:!1}},stream:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify remote URL will be streaming chunked data.\r\nDefaults to `false` to download data until completion.",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Optional custom inline style to attach to root\r\nvirtual `LazyList` element.",defaultValue:{value:"{}",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"String containing text to display."},url:{required:!1,tsType:{name:"string"},description:`The URL from which to fetch content. Subject to same-origin policy,\r
so must be accessible via fetch on same domain or via CORS.`},websocket:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that url is a websocket URL.\r\nDefaults to `false` to download data until completion.",defaultValue:{value:"false",computed:!1}},websocketOptions:{required:!1,tsType:{name:"WebsocketOptions"},description:"Options object which will be passed through to websocket.",defaultValue:{value:"{}",computed:!1}},eventsource:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that url is an eventsource URL.\r\nDefaults to `false` to download data until completion.",defaultValue:{value:"false",computed:!1}},eventsourceOptions:{required:!1,tsType:{name:"EventSourceOptions"},description:"Options object which will be passed through to evensource.",defaultValue:{value:"{}",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Set the width in pixels for the component.\r\nDefaults to `'auto'` if unspecified.\r\nWhen the `width` is `'auto'`, the component will expand\r\nhorizontally to fill its container.",defaultValue:{value:'"auto"',computed:!1}},wrapLines:{required:!1,tsType:{name:"boolean"},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that parent component will be calling `appendLines` to update data.\r\nParent component should hold a ref (with `useRef` or `createRef`) to the `LazyLog` component.\r\nDefaults to `false`.",defaultValue:{value:"false",computed:!1}}}};const Bn=class Bn extends L.Component{constructor(){super(...arguments),this.state={follow:this.props.startFollowing??!1},this.handleScroll=({scrollTop:t,scrollHeight:n,clientHeight:r})=>{n>r&&(this.state.follow&&n-t!==r?this.setState({follow:!1}):!this.state.follow&&n-t===r&&this.setState({follow:!0}))},this.startFollowing=()=>{this.setState({follow:!0})},this.stopFollowing=()=>{this.setState({follow:!1})}}render(){const{render:t}=this.props,{follow:n}=this.state;return m.jsx(L.Fragment,{children:t({follow:n,onScroll:this.handleScroll,startFollowing:this.startFollowing,stopFollowing:this.stopFollowing})})}};Bn.defaultProps={startFollowing:!1};let X1=Bn;X1.__docgenInfo={description:"",methods:[{name:"handleScroll",docblock:null,modifiers:[],params:[{name:"{ scrollTop, scrollHeight, clientHeight }: any",optional:!1,type:{name:"any"}}],returns:null},{name:"startFollowing",docblock:null,modifiers:[],params:[],returns:null},{name:"stopFollowing",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ScrollFollow",props:{render:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: ScrollFollowRenderProps) => ReactNode",signature:{arguments:[{type:{name:"ScrollFollowRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:"Render a component based on the function's arguments\r\n\r\n  - `follow: bool` This value is `true` or `false`\r\n  based on whether the component should be auto-following.\r\n  This value can be passed directly to the Lazy component's\r\n  `follow` prop.\r\n\r\n  - `onScroll: func`: This function is used to listen for scrolling\r\n  events and turn off auto-following (`follow`).\r\n  This value can be passed directly to the Lazy component's\r\n  `onScroll` prop.\r\n\r\n  - `startFollowing: func`: A helper function for manually re-starting\r\n  `follow`ing. Is not used by a Lazy component;\r\n  rather this can be invoked whenever you need to turn back on\r\n  auto-following, but cannot reliably do this from the `startFollowing`\r\n  prop. e.g `startFollowing();`\r\n\r\n  - `stopFollowing: func`: A helper function for manually stopping\r\n  `follow`ing. Is not used by a Lazy component;\r\n  rather this can be invoked whenever you need to turn off\r\n  auto-following, but cannot reliably do this from the `startFollowing`\r\n  prop. e.g `stopFollowing();`"},startFollowing:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"The initial follow action; defaults to `false`.\r\nThe value provided here will inform the initial `follow`\r\nproperty passed to the child function.",defaultValue:{value:"false",computed:!1}}}};const gc={component:Ze,render:e=>m.jsx(Ze,{...e})},xe={caseInsensitive:!0,enableGutters:!1,enableHotKeys:!0,enableLineNumbers:!0,enableLinks:!1,wrapLines:!1,enableMultilineHighlight:!0,enableSearch:!0,enableSearchNavigation:!0,extraLines:1,height:"520",loadingComponent:void 0,onError:void 0,onHighlight:void 0,onLineNumberClick:void 0,onLoad:void 0,selectableLines:!0,width:"auto"},Yt={name:"Text Based",args:{...xe,text:`\x1B[4;1mRunning "clean:all" (clean) task\x1B[0m
\x1B[32m>> \x1B[39m0 paths cleaned.

\x1B[4;1mRunning "copy:base" (copy) task\x1B[0m
Created 188 directories, copied 1433 files

\x1B[4;1mRunning "copy:app" (copy) task\x1B[0m
Created 40 directories, copied 233 files

\x1B[4;1mRunning "processhtml:dist" (processhtml) task\x1B[0m

\x1B[4;1mRunning "ngAnnotate:dist" (ngAnnotate) task\x1B[0m
\x1B[32m>> \x1B[39m52 files successfully generated.

\x1B[4;1mRunning "uglify:dist" (uglify) task\x1B[0m
\x1B[32m>> \x1B[39m2 sourcemaps created.
\x1B[32m>> \x1B[39m2 files created.

\x1B[4;1mRunning "less:app" (less) task\x1B[0m
\x1B[32mFile target/dist/css/alertEvents.css created\x1B[39m
\x1B[32mFile target/dist/css/application.css created\x1B[39m

\x1B[4;1mRunning "less:libs" (less) task\x1B[0m
\x1B[31mCreate file target/dist/css/libs.css failed\x1B[39m`}},Gt={name:"URL Based",args:{...xe,url:"https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"}},Xt={name:"External Mode",args:{...xe,external:!0,text:`You can provide some initial content (multiple lines),
such as this one.`},render:e=>{const t=J.createRef();return m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.appendLines(["This is a new line!","This is another new line!"])},style:{marginBottom:"6px"},children:"Append Line"}),m.jsx("br",{}),m.jsx(Ze,{ref:t,...e})]})}},Jt={args:{...xe,height:100,text:"Press the Clear button to test clearing the log!"},render:e=>{const t=J.createRef();return m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.clear()},style:{marginBottom:"6px"},children:"Clear Log"}),m.jsx("br",{}),m.jsx(Ze,{ref:t,...e})]})}},Qt={args:{...xe,height:150,text:`Click me 100!
Click me 200!
Click me 300!
`},render:e=>m.jsx(Ze,{...e,onLineNumberClick:t=>alert(`Line No: ${t.lineNumber} - ${t.highlightRange}`),onLineContentClick:t=>alert(`Line Content: ${t.currentTarget.textContent}`)})},e1={args:{...xe,height:200,enableLinks:!0,text:`Can be secure https://www.mozilla.org or unsecure http://www.mozilla.org
We want to upload data to ftp://www.mozilla.org or ftps://www.mozilla.org
We just need to write documents for www.mozilla.org
And at the end send a mail to react-lazylog@mozilla.org
`}},t1={args:{...xe,height:150,text:""},render:e=>{const t=J.createRef();let n;J.useEffect(()=>(r(),()=>clearInterval(n)),[]);const r=()=>{var a;clearInterval(n),(a=t.current)==null||a.clear();let s=0;const i=30,o=()=>`[${new Date().toLocaleTimeString()}] Log entry #${s+1}`;n=setInterval(()=>{var c;s<i?((c=t==null?void 0:t.current)==null||c.appendLines([o()]),s++):clearInterval(n)},1e3)};return m.jsxs(m.Fragment,{children:[m.jsx("button",{onClick:()=>{r()},style:{marginBottom:"6px"},children:"Restart Log"}),m.jsx("br",{}),m.jsx(Ze,{ref:t,...e,external:!0,follow:!0})]})}},n1={args:{...xe,height:400,highlight:[70,75],scrollToLine:77,text:`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
[taskcluster 2018-11-14 21:08:32.452Z] Worker ID: i-010f9c4a4b041ee6c
[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1
[taskcluster 2018-11-14 21:08:32.453Z] Worker Node Type: m3.xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Worker Type: gecko-t-linux-xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Public IP: 54.172.91.38
[taskcluster 2018-11-14 21:08:32.453Z] using cache "level-1-checkouts-v3-2f7c6cb7dd63ce826370" -> /builds/worker/checkouts

[taskcluster 2018-11-14 21:08:33.314Z] Downloading artifact "public/image.tar.zst" from task ID: fZ80-a7IT_yOpvW_jc_HPg.
[taskcluster 2018-11-14 21:08:38.316Z] Download Progress: 67.10%
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded artifact successfully.
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded 265.212 mb
[taskcluster 2018-11-14 21:08:41.077Z] Decompressing downloaded image
[taskcluster 2018-11-14 21:08:43.321Z] Loading docker image from downloaded archive.
[taskcluster 2018-11-14 21:09:06.885Z] Image 'public/image.tar.zst' from task 'fZ80-a7IT_yOpvW_jc_HPg' loaded.  Using image ID sha256:4f1121f66938146cc05dfe474f399a631816e2130c04562187fd96e1085e0433.
[taskcluster 2018-11-14 21:09:07.046Z] === Task Starting ===
[setup 2018-11-14T21:09:07.575Z] run-task started in /builds/worker
[cache 2018-11-14T21:09:07.579Z] cache /builds/worker/checkouts exists; requirements: gid=1000 uid=1000 version=1
[volume 2018-11-14T21:09:07.579Z] changing ownership of volume /builds/worker/.cache to 1000:1000
[volume 2018-11-14T21:09:07.579Z] volume /builds/worker/checkouts is a cache
[setup 2018-11-14T21:09:07.580Z] running as worker:worker
[vcs 2018-11-14T21:09:07.580Z] executing ['hg', 'robustcheckout', '--sharebase', '/builds/worker/checkouts/hg-store', '--purge', '--upstream', 'https://hg.mozilla.org/mozilla-unified', '--revision', '6926e117b97cd120f5de0be2ab3bff7153f10a78', 'https://hg.mozilla.org/try', '/builds/worker/checkouts/gecko']
[vcs 2018-11-14T21:09:07.670Z] (using Mercurial 4.7.1)
[vcs 2018-11-14T21:09:07.671Z] ensuring https://hg.mozilla.org/try@6926e117b97cd120f5de0be2ab3bff7153f10a78 is available at /builds/worker/checkouts/gecko
[vcs 2018-11-14T21:09:08.721Z] (cloning from upstream repo https://hg.mozilla.org/mozilla-unified)
[vcs 2018-11-14T21:09:09.000Z] (sharing from new pooled repository 8ba995b74e18334ab3707f27e9eb8f4e37ba3d29)
[vcs 2018-11-14T21:09:09.516Z] applying clone bundle from https://s3-external-1.amazonaws.com/moz-hg-bundles-us-east-1/mozilla-unified/d3f4d556a89d3e5e72749314a0cf81d942fafc13.packed1.hg
[vcs 2018-11-14T21:09:09.622Z] 478890 files to transfer, 2.58 GB of data
[vcs 2018-11-14T21:09:11.623Z]
[vcs 2018-11-14T21:09:12.626Z] clone [>                                          ]   67491620/2774698696 1m21s
[vcs 2018-11-14T21:09:13.625Z] clone [>                                          ]  106279767/2774698696 1m16s
[vcs 2018-11-14T21:09:14.625Z] clone [=>                                         ]  146574164/2774698696 1m12s
[vcs 2018-11-14T21:09:15.626Z] clone [=>                                         ]  171690108/2774698696 1m16s
[vcs 2018-11-14T21:09:16.626Z] clone [=>                                         ]  193265720/2774698696 1m21s
[vcs 2018-11-14T21:09:17.626Z] clone [==>                                        ]  225280444/2774698696 1m20s
[vcs 2018-11-14T21:09:18.627Z] clone [==>                                        ]  257914310/2774698696 1m19s
[vcs 2018-11-14T21:09:19.628Z] clone [===>                                       ]  291327117/2774698696 1m17s
[vcs 2018-11-14T21:09:20.628Z] clone [====>                                      ]  338022905/2774698696 1m13s
[vcs 2018-11-14T21:09:21.629Z] clone [====>                                      ]  358720039/2774698696 1m15s
[vcs 2018-11-14T21:09:22.629Z] clone [=====>                                     ]  398228450/2774698696 1m12s
[vcs 2018-11-14T21:09:23.629Z] clone [=====>                                     ]  437631658/2774698696 1m10s
[vcs 2018-11-14T21:09:24.632Z] clone [======>                                    ]  454641086/2774698696 1m12s
[vcs 2018-11-14T21:09:25.633Z] clone [======>                                    ]  476720904/2774698696 1m13s
[vcs 2018-11-14T21:09:26.632Z] clone [======>                                    ]  503457966/2774698696 1m13s
[vcs 2018-11-14T21:09:27.632Z] clone [=======>                                   ]  530000110/2774698696 1m13s
[vcs 2018-11-14T21:09:28.635Z] clone [=======>                                   ]  548996071/2774698696 1m14s
[vcs 2018-11-14T21:09:29.677Z] clone [=======>                                   ]  556249797/2774698696 1m16s
[vcs 2018-11-14T21:09:30.678Z] clone [=======>                                   ]  575477464/2774698696 1m17s
[vcs 2018-11-14T21:09:31.678Z] clone [========>                                  ]  618973849/2774698696 1m14s
[vcs 2018-11-14T21:09:32.678Z] clone [=========>                                 ]  666030876/2774698696 1m10s
[vcs 2018-11-14T21:09:33.678Z] clone [=========>                                 ]  685719380/2774698696 1m11s
[vcs 2018-11-14T21:09:34.679Z] clone [=========>                                 ]  701005022/2774698696 1m12s
[vcs 2018-11-14T21:09:35.678Z] clone [==========>                                ]  717606060/2774698696 1m12s
[vcs 2018-11-14T21:09:36.679Z] clone [==========>                                ]  740693499/2774698696 1m12s
[vcs 2018-11-14T21:09:37.679Z] clone [==========>                                ]  766929304/2774698696 1m11s
[vcs 2018-11-14T21:09:38.679Z] clone [===========>                               ]  792545880/2774698696 1m11s
[vcs 2018-11-14T21:09:39.680Z] clone [===========>                               ]  811996205/2774698696 1m11s
[vcs 2018-11-14T21:09:40.680Z] clone [===========>                               ]  836938668/2774698696 1m10s
[vcs 2018-11-14T21:09:41.680Z] clone [============>                              ]  864657484/2774698696 1m09s
[vcs 2018-11-14T21:09:42.680Z] clone [============>                              ]  891236611/2774698696 1m08s
[vcs 2018-11-14T21:09:43.682Z] clone [=============>                             ]  926041406/2774698696 1m06s
[vcs 2018-11-14T21:09:44.682Z] clone [=============>                             ]  930498893/2774698696 1m08s
[vcs 2018-11-14T21:09:45.682Z] clone [=============>                             ]  956331306/2774698696 1m07s
[vcs 2018-11-14T21:09:46.682Z] clone [==============>                            ] 1002140521/2774698696 1m04s
[vcs 2018-11-14T21:09:47.682Z] clone [==============>                            ] 1012508363/2774698696 1m05s
[vcs 2018-11-14T21:09:48.682Z] clone [==============>                            ] 1017437926/2774698696 1m06s
[vcs 2018-11-14T21:09:49.682Z] clone [==============>                            ] 1022219365/2774698696 1m07s
[vcs 2018-11-14T21:09:50.682Z] clone [==============>                            ] 1025786907/2774698696 1m09s
[vcs 2018-11-14T21:09:51.683Z] clone [==============>                            ] 1028794844/2774698696 1m10s
[vcs 2018-11-14T21:09:52.683Z] clone [===============>                           ] 1034819687/2774698696 1m11s
[vcs 2018-11-14T21:09:53.683Z] clone [===============>                           ] 1039912128/2774698696 1m12s
[vcs 2018-11-14T21:09:54.683Z] clone [===============>                           ] 1046252425/2774698696 1m13s
[vcs 2018-11-14T21:09:55.683Z] clone [===============>                           ] 1066134534/2774698696 1m13s
[vcs 2018-11-14T21:09:56.685Z] clone [===============>                           ] 1087894225/2774698696 1m12s
[vcs 2018-11-14T21:09:57.684Z] clone [================>                          ] 1107758509/2774698696 1m11s
[vcs 2018-11-14T21:09:58.684Z] clone [================>                          ] 1114750252/2774698696 1m12s
[vcs 2018-11-14T21:09:59.684Z] clone [================>                          ] 1129561806/2774698696 1m12s
[vcs 2018-11-14T21:10:00.684Z] clone [================>                          ] 1135341160/2774698696 1m13s
[vcs 2018-11-14T21:10:01.684Z] clone [================>                          ] 1144287548/2774698696 1m13s
[vcs 2018-11-14T21:10:02.684Z] clone [=================>                         ] 1170279456/2774698696 1m12s
[vcs 2018-11-14T21:10:03.685Z] clone [=================>                         ] 1192722867/2774698696 1m11s
[vcs 2018-11-14T21:10:04.685Z] clone [=================>                         ] 1214537175/2774698696 1m10s
[vcs 2018-11-14T21:10:05.685Z] clone [==================>                        ] 1229775369/2774698696 1m10s
[vcs 2018-11-14T21:10:06.685Z] clone [==================>                        ] 1248697180/2774698696 1m09s
[vcs 2018-11-14T21:10:07.862Z] clone [==================>                        ] 1269071662/2774698696 1m08s
[vcs 2018-11-14T21:10:08.862Z] clone [===================>                       ] 1296830077/2774698696 1m07s
[vcs 2018-11-14T21:10:09.862Z] clone [===================>                       ] 1321742345/2774698696 1m06s
[vcs 2018-11-14T21:10:10.862Z] clone [===================>                       ] 1346954223/2774698696 1m04s
[vcs 2018-11-14T21:10:11.862Z] clone [====================>                      ] 1367819568/2774698696 1m03s
[vcs 2018-11-14T21:10:12.864Z] clone [====================>                      ] 1391377778/2774698696 1m02s
[vcs 2018-11-14T21:10:13.865Z] clone [====================>                      ] 1416584059/2774698696 1m01s
[vcs 2018-11-14T21:10:14.868Z] clone [=====================>                     ] 1445335587/2774698696 1m00s
[vcs 2018-11-14T21:10:15.865Z] clone [=======================>                     ] 1513951972/2774698696 55s
[vcs 2018-11-14T21:10:16.865Z] clone [========================>                    ] 1562297481/2774698696 52s
[vcs 2018-11-14T21:10:17.970Z] clone [========================>                    ] 1599653315/2774698696 50s
[vcs 2018-11-14T21:10:18.971Z] clone [=========================>                   ] 1643817175/2774698696 47s
[vcs 2018-11-14T21:10:19.971Z] clone [==========================>                  ] 1675753258/2774698696 46s
[vcs 2018-11-14T21:10:20.971Z] clone [==========================>                  ] 1697761018/2774698696 45s
[vcs 2018-11-14T21:10:21.972Z] clone [==========================>                  ] 1716687932/2774698696 44s
[vcs 2018-11-14T21:10:22.972Z] clone [===========================>                 ] 1761680403/2774698696 42s
[vcs 2018-11-14T21:10:23.972Z] clone [===========================>                 ] 1763511023/2774698696 42s
[vcs 2018-11-14T21:10:24.972Z] clone [===========================>                 ] 1769106587/2774698696 43s
[vcs 2018-11-14T21:10:25.972Z] clone [===========================>                 ] 1773288870/2774698696 43s
[vcs 2018-11-14T21:10:26.972Z] clone [===========================>                 ] 1778806084/2774698696 43s
[vcs 2018-11-14T21:10:27.972Z] clone [===========================>                 ] 1780338054/2774698696 44s
[vcs 2018-11-14T21:10:28.972Z] clone [===========================>                 ] 1783985855/2774698696 44s
[vcs 2018-11-14T21:10:29.972Z] clone [===========================>                 ] 1788136760/2774698696 45s
[vcs 2018-11-14T21:10:30.972Z] clone [============================>                ] 1794430357/2774698696 45s
[vcs 2018-11-14T21:10:31.972Z] clone [============================>                ] 1800555329/2774698696 45s
[vcs 2018-11-14T21:10:32.972Z] clone [============================>                ] 1808119505/2774698696 45s
[vcs 2018-11-14T21:10:33.972Z] clone [============================>                ] 1820816366/2774698696 45s
[vcs 2018-11-14T21:10:34.973Z] clone [============================>                ] 1831494668/2774698696 45s
[vcs 2018-11-14T21:10:35.973Z] clone [============================>                ] 1836162975/2774698696 45s
[vcs 2018-11-14T21:10:36.973Z] clone [=============================>               ] 1854002346/2774698696 45s
[vcs 2018-11-14T21:10:37.973Z] clone [=============================>               ] 1860466166/2774698696 45s
[vcs 2018-11-14T21:10:38.973Z] clone [=============================>               ] 1877930700/2774698696 44s
[vcs 2018-11-14T21:10:39.973Z] clone [=============================>               ] 1883326687/2774698696 44s
[vcs 2018-11-14T21:10:40.973Z] clone [=============================>               ] 1899828059/2774698696 44s
[vcs 2018-11-14T21:10:41.973Z] clone [==============================>              ] 1913964212/2774698696 43s
[vcs 2018-11-14T21:10:42.973Z] clone [==============================>              ] 1933092528/2774698696 42s
[vcs 2018-11-14T21:10:43.973Z] clone [==============================>              ] 1953767204/2774698696 41s
[vcs 2018-11-14T21:10:44.973Z] clone [==============================>              ] 1971632105/2774698696 40s
[vcs 2018-11-14T21:10:45.974Z] clone [===============================>             ] 1987729693/2774698696 40s
[vcs 2018-11-14T21:10:46.974Z] clone [===============================>             ] 2012095873/2774698696 38s
[vcs 2018-11-14T21:10:47.974Z] clone [================================>            ] 2036880640/2774698696 37s
[vcs 2018-11-14T21:10:48.974Z] clone [================================>            ] 2063644564/2774698696 36s
[vcs 2018-11-14T21:10:49.974Z] clone [================================>            ] 2092201306/2774698696 34s
[vcs 2018-11-14T21:10:50.975Z] clone [=================================>           ] 2112958191/2774698696 33s
[vcs 2018-11-14T21:10:51.975Z] clone [=================================>           ] 2129736646/2774698696 32s
[vcs 2018-11-14T21:10:52.978Z] clone [==================================>          ] 2160844802/2774698696 30s
[vcs 2018-11-14T21:10:53.976Z] clone [==================================>          ] 2192312521/2774698696 29s
[vcs 2018-11-14T21:10:54.978Z] clone [===================================>         ] 2262137673/2774698696 24s
[vcs 2018-11-14T21:10:55.983Z] clone [=====================================>       ] 2371320649/2774698696 18s
[vcs 2018-11-14T21:10:56.979Z] clone [======================================>      ] 2460842825/2774698696 14s
[vcs 2018-11-14T21:10:57.982Z] clone [========================================>    ] 2562423625/2774698696 09s
[vcs 2018-11-14T21:10:58.983Z] clone [==========================================>  ] 2651822447/2774698696 05s
[vcs 2018-11-14T21:10:59.782Z] clone [===========================================> ] 2714343791/2774698696 03s
[vcs 2018-11-14T21:10:59.783Z]
[vcs 2018-11-14T21:10:59.783Z] transferred 2.58 GB in 110.2 seconds (24.0 MB/sec)
[vcs 2018-11-14T21:11:00.268Z] finished applying clone bundle
[vcs 2018-11-14T21:11:01.445Z] searching for changes
[vcs 2018-11-14T21:11:01.999Z] adding changesets
[vcs 2018-11-14T21:11:02.072Z]
[vcs 2018-11-14T21:11:02.146Z] changesets [                                                          ]   1/314
[vcs 2018-11-14T21:11:02.146Z]
[vcs 2018-11-14T21:11:02.146Z] adding manifests
[vcs 2018-11-14T21:11:02.477Z] adding file changes
[vcs 2018-11-14T21:11:03.050Z] added 314 changesets with 1315 changes to 1067 files
[vcs 2018-11-14T21:11:44.403Z] new changesets 80b0b8b446fd:7585190c5954
[vcs 2018-11-14T21:11:44.999Z] searching for changes
[vcs 2018-11-14T21:11:45.095Z] no changes found
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark aurora
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark beta
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark central
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr10
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr17
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr24
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr31
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr38
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr45
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr52
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr60
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark fx-team
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark inbound
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark release
[vcs 2018-11-14T21:11:46.045Z] (pulling to obtain 6926e117b97cd120f5de0be2ab3bff7153f10a78)
[vcs 2018-11-14T21:11:48.984Z] searching for changes
[vcs 2018-11-14T21:11:50.797Z]
[vcs 2018-11-14T21:11:52.672Z] searching [ <=>                                                             ] 2
[vcs 2018-11-14T21:11:54.295Z] searching [  <=>                                                            ] 3
[vcs 2018-11-14T21:11:59.781Z]
[vcs 2018-11-14T21:11:59.781Z] adding changesets
[vcs 2018-11-14T21:11:59.782Z]
[vcs 2018-11-14T21:11:59.783Z] changesets [==============================>                               ] 1/2
[vcs 2018-11-14T21:11:59.783Z]
[vcs 2018-11-14T21:11:59.783Z] adding manifests
[vcs 2018-11-14T21:11:59.813Z] adding file changes
[vcs 2018-11-14T21:11:59.822Z] added 2 changesets with 4 changes to 4 files (+1 heads)
[vcs 2018-11-14T21:11:59.847Z] new changesets f8f2c4c13360:6926e117b97c
[vcs 2018-11-14T21:12:04.110Z] (warning: large working directory being used without fsmonitor enabled; enable fsmonitor to improve performance; see "hg help -e fsmonitor")
[vcs 2018-11-14T21:12:05.059Z]
[vcs 2018-11-14T21:12:06.078Z] updating [                                                      ]    100/258996
[vcs 2018-11-14T21:12:07.117Z] updating [                                                ]   2800/258996 1m37s
[vcs 2018-11-14T21:12:08.121Z] updating [>                                               ]   5600/258996 1m35s
[vcs 2018-11-14T21:12:09.142Z] updating [>                                               ]   8200/258996 1m35s
[vcs 2018-11-14T21:12:10.203Z] updating [=>                                              ]  10900/258996 1m34s
[vcs 2018-11-14T21:12:11.257Z] updating [=>                                              ]  14000/258996 1m31s
[vcs 2018-11-14T21:12:12.333Z] updating [==>                                             ]  17400/258996 1m27s
[vcs 2018-11-14T21:12:13.384Z] updating [==>                                             ]  20400/258996 1m26s
[vcs 2018-11-14T21:12:14.422Z] updating [===>                                            ]  23300/258996 1m25s
[vcs 2018-11-14T21:12:15.448Z] updating [===>                                            ]  26900/258996 1m22s
[vcs 2018-11-14T21:12:16.453Z] updating [====>                                           ]  30300/258996 1m19s
[vcs 2018-11-14T21:12:17.455Z] updating [=====>                                          ]  33100/258996 1m18s
[vcs 2018-11-14T21:12:18.465Z] updating [=====>                                          ]  36500/258996 1m16s
[vcs 2018-11-14T21:12:19.477Z] updating [======>                                         ]  40400/258996 1m13s
[vcs 2018-11-14T21:12:20.573Z] updating [=======>                                        ]  43800/258996 1m11s
[vcs 2018-11-14T21:12:21.627Z] updating [=======>                                        ]  46900/258996 1m11s
[vcs 2018-11-14T21:12:22.674Z] updating [========>                                       ]  50000/258996 1m10s
[vcs 2018-11-14T21:12:23.714Z] updating [========>                                       ]  53200/258996 1m09s
[vcs 2018-11-14T21:12:24.744Z] updating [=========>                                      ]  56300/258996 1m08s
[vcs 2018-11-14T21:12:25.800Z] updating [==========>                                     ]  60000/258996 1m06s
[vcs 2018-11-14T21:12:26.826Z] updating [==========>                                     ]  63000/258996 1m05s
[vcs 2018-11-14T21:12:27.873Z] updating [===========>                                    ]  66300/258996 1m04s
[vcs 2018-11-14T21:12:28.880Z] updating [===========>                                    ]  69600/258996 1m03s
[vcs 2018-11-14T21:12:29.881Z] updating [============>                                   ]  72900/258996 1m01s
[vcs 2018-11-14T21:12:30.893Z] updating [=============>                                  ]  76000/258996 1m00s
[vcs 2018-11-14T21:12:31.893Z] updating [==============>                                   ]  79000/258996 59s
[vcs 2018-11-14T21:12:32.902Z] updating [==============>                                   ]  82000/258996 58s
[vcs 2018-11-14T21:12:33.905Z] updating [===============>                                  ]  85200/258996 57s
[vcs 2018-11-14T21:12:34.937Z] updating [================>                                 ]  88300/258996 56s
[vcs 2018-11-14T21:12:35.939Z] updating [================>                                 ]  91500/258996 55s
[vcs 2018-11-14T21:12:36.967Z] updating [=================>                                ]  94800/258996 54s
[vcs 2018-11-14T21:12:37.981Z] updating [=================>                                ]  97900/258996 53s
[vcs 2018-11-14T21:12:39.014Z] updating [==================>                               ] 101000/258996 52s
[vcs 2018-11-14T21:12:40.023Z] updating [===================>                              ] 104200/258996 51s
[vcs 2018-11-14T21:12:41.067Z] updating [===================>                              ] 106700/258996 50s
[vcs 2018-11-14T21:12:42.074Z] updating [====================>                             ] 110800/258996 49s
[vcs 2018-11-14T21:12:43.088Z] updating [=====================>                            ] 115100/258996 47s
[vcs 2018-11-14T21:12:44.116Z] updating [=====================>                            ] 118600/258996 46s
[vcs 2018-11-14T21:12:45.135Z] updating [======================>                           ] 122500/258996 44s
[vcs 2018-11-14T21:12:46.141Z] updating [=======================>                          ] 126200/258996 43s
[vcs 2018-11-14T21:12:47.212Z] updating [=======================>                          ] 129300/258996 42s
[vcs 2018-11-14T21:12:48.228Z] updating [========================>                         ] 132600/258996 41s
[vcs 2018-11-14T21:12:49.292Z] updating [=========================>                        ] 135400/258996 40s
[vcs 2018-11-14T21:12:50.321Z] updating [=========================>                        ] 138200/258996 39s
[vcs 2018-11-14T21:12:51.325Z] updating [==========================>                       ] 141200/258996 38s
[vcs 2018-11-14T21:12:52.339Z] updating [==========================>                       ] 142900/258996 38s
[vcs 2018-11-14T21:12:53.391Z] updating [===========================>                      ] 145200/258996 38s
[vcs 2018-11-14T21:12:54.399Z] updating [===========================>                      ] 148500/258996 36s
[vcs 2018-11-14T21:12:55.412Z] updating [============================>                     ] 152000/258996 35s
[vcs 2018-11-14T21:12:56.452Z] updating [=============================>                    ] 155400/258996 34s
[vcs 2018-11-14T21:12:57.630Z] updating [=============================>                    ] 158700/258996 33s
[vcs 2018-11-14T21:12:58.656Z] updating [==============================>                   ] 162200/258996 32s
[vcs 2018-11-14T21:12:59.702Z] updating [===============================>                  ] 166100/258996 30s
[vcs 2018-11-14T21:13:00.731Z] updating [===============================>                  ] 170000/258996 29s
[vcs 2018-11-14T21:13:01.744Z] updating [================================>                 ] 174200/258996 28s
[vcs 2018-11-14T21:13:02.750Z] updating [=================================>                ] 178200/258996 26s
[vcs 2018-11-14T21:13:03.766Z] updating [==================================>               ] 181900/258996 25s
[vcs 2018-11-14T21:13:04.774Z] updating [==================================>               ] 185600/258996 24s
[vcs 2018-11-14T21:13:05.779Z] updating [===================================>              ] 189700/258996 22s
[vcs 2018-11-14T21:13:06.803Z] updating [====================================>             ] 193900/258996 21s
[vcs 2018-11-14T21:13:07.840Z] updating [=====================================>            ] 197900/258996 20s
[vcs 2018-11-14T21:13:08.841Z] updating [=====================================>            ] 201600/258996 18s
[vcs 2018-11-14T21:13:09.873Z] updating [======================================>           ] 205700/258996 17s
[vcs 2018-11-14T21:13:10.896Z] updating [=======================================>          ] 209700/258996 16s
[vcs 2018-11-14T21:13:11.906Z] updating [========================================>         ] 213700/258996 14s
[vcs 2018-11-14T21:13:12.922Z] updating [========================================>         ] 217300/258996 13s
[vcs 2018-11-14T21:13:13.937Z] updating [=========================================>        ] 220500/258996 12s
[vcs 2018-11-14T21:13:14.954Z] updating [==========================================>       ] 224100/258996 11s
[vcs 2018-11-14T21:13:15.957Z] updating [==========================================>       ] 227900/258996 10s
[vcs 2018-11-14T21:13:17.039Z] updating [===========================================>      ] 231600/258996 09s
[vcs 2018-11-14T21:13:18.050Z] updating [============================================>     ] 235000/258996 08s
[vcs 2018-11-14T21:13:19.074Z] updating [=============================================>    ] 238600/258996 07s
[vcs 2018-11-14T21:13:20.102Z] updating [=============================================>    ] 242100/258996 06s
[vcs 2018-11-14T21:13:21.127Z] updating [==============================================>   ] 245800/258996 05s
[vcs 2018-11-14T21:13:22.140Z] updating [===============================================>  ] 249200/258996 03s
[vcs 2018-11-14T21:13:23.174Z] updating [===============================================>  ] 251400/258996 03s
[vcs 2018-11-14T21:13:24.259Z] updating [================================================> ] 254649/258996 02s
[vcs 2018-11-14T21:13:25.294Z] updating [================================================> ] 255698/258996 02s
[vcs 2018-11-14T21:13:26.512Z] updating [================================================> ] 256598/258996 01s
[vcs 2018-11-14T21:13:27.520Z] updating [================================================> ] 257547/258996 01s
[vcs 2018-11-14T21:13:27.979Z] updating [================================================> ] 258547/258996 01s
[vcs 2018-11-14T21:13:38.214Z]
[vcs 2018-11-14T21:13:38.214Z] 258996 files updated, 0 files merged, 0 files removed, 0 files unresolved
[vcs 2018-11-14T21:13:38.463Z] updated to 6926e117b97cd120f5de0be2ab3bff7153f10a78
[vcs 2018-11-14T21:13:38.469Z] PERFHERDER_DATA: {"framework": {"name": "vcs"}, "suites": [{"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "clone", "shouldAlert": false, "subtests": [], "value": 156.62339401245117}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "pull", "shouldAlert": false, "subtests": [], "value": 13.032690048217773}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "update", "shouldAlert": false, "subtests": [], "value": 98.61538600921631}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "overall", "shouldAlert": false, "subtests": [], "value": 270.7935130596161}]}
[vcs 2018-11-14T21:13:38.917Z] TinderboxPrint:<a href=https://hg.mozilla.org/try/rev/6926e117b97cd120f5de0be2ab3bff7153f10a78 title='Built from try revision 6926e117b97cd120f5de0be2ab3bff7153f10a78'>6926e117b97cd120f5de0be2ab3bff7153f10a78</a>
[task 2018-11-14T21:13:38.917Z] executing ['bash', '-cx', 'cd /builds/worker/checkouts/gecko/ && cp -r /build/node_modules_eslint node_modules && ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules && ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules && ./mach lint -l eslint -f treeherder --quiet
']
[task 2018-11-14T21:13:38.920Z] + cd /builds/worker/checkouts/gecko/
[task 2018-11-14T21:13:38.920Z] + cp -r /build/node_modules_eslint node_modules
[task 2018-11-14T21:13:40.120Z] + ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules
[task 2018-11-14T21:13:40.123Z] + ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules
[task 2018-11-14T21:13:40.124Z] + ./mach lint -l eslint -f treeherder --quiet
[task 2018-11-14T21:13:40.989Z] New python executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python2.7
[task 2018-11-14T21:13:40.990Z] Also creating executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python
[task 2018-11-14T21:13:42.910Z] Installing setuptools, pip, wheel...done.
[task 2018-11-14T21:13:44.179Z] running build_ext
[task 2018-11-14T21:13:44.179Z] building 'psutil._psutil_linux' extension
[task 2018-11-14T21:13:44.179Z] creating build
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so
[task 2018-11-14T21:13:44.180Z] building 'psutil._psutil_posix' extension
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so -> psutil
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so -> psutil
[task 2018-11-14T21:13:44.180Z]
[task 2018-11-14T21:13:44.180Z] Error processing command. Ignoring because optional. (optional:packages.txt:comm/build/virtualenv_packages.txt)
[task 2018-11-14T21:19:41.952Z] No lint issues found.
[taskcluster 2018-11-14 21:19:42.433Z] === Task Finished ===
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds`}},r1={args:{...xe,height:400,wrapLines:!0,text:`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
[taskcluster 2018-11-14 21:08:32.452Z] Worker ID: i-010f9c4a4b041ee6c
[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1
[taskcluster 2018-11-14 21:08:32.453Z] Worker Node Type: m3.xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Worker Type: gecko-t-linux-xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Public IP: 54.172.91.38
[taskcluster 2018-11-14 21:08:32.453Z] using cache "level-1-checkouts-v3-2f7c6cb7dd63ce826370" -> /builds/worker/checkouts

[taskcluster 2018-11-14 21:08:33.314Z] Downloading artifact "public/image.tar.zst" from task ID: fZ80-a7IT_yOpvW_jc_HPg.
[taskcluster 2018-11-14 21:08:38.316Z] Download Progress: 67.10%
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded artifact successfully.
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded 265.212 mb
[taskcluster 2018-11-14 21:08:41.077Z] Decompressing downloaded image
[taskcluster 2018-11-14 21:08:43.321Z] Loading docker image from downloaded archive.
[taskcluster 2018-11-14 21:09:06.885Z] Image 'public/image.tar.zst' from task 'fZ80-a7IT_yOpvW_jc_HPg' loaded.  Using image ID sha256:4f1121f66938146cc05dfe474f399a631816e2130c04562187fd96e1085e0433.
[taskcluster 2018-11-14 21:09:07.046Z] === Task Starting ===
[setup 2018-11-14T21:09:07.575Z] run-task started in /builds/worker
[cache 2018-11-14T21:09:07.579Z] cache /builds/worker/checkouts exists; requirements: gid=1000 uid=1000 version=1
[volume 2018-11-14T21:09:07.579Z] changing ownership of volume /builds/worker/.cache to 1000:1000
[volume 2018-11-14T21:09:07.579Z] volume /builds/worker/checkouts is a cache
[setup 2018-11-14T21:09:07.580Z] running as worker:worker
[vcs 2018-11-14T21:09:07.580Z] executing ['hg', 'robustcheckout', '--sharebase', '/builds/worker/checkouts/hg-store', '--purge', '--upstream', 'https://hg.mozilla.org/mozilla-unified', '--revision', '6926e117b97cd120f5de0be2ab3bff7153f10a78', 'https://hg.mozilla.org/try', '/builds/worker/checkouts/gecko']
[vcs 2018-11-14T21:09:07.670Z] (using Mercurial 4.7.1)
[vcs 2018-11-14T21:09:07.671Z] ensuring https://hg.mozilla.org/try@6926e117b97cd120f5de0be2ab3bff7153f10a78 is available at /builds/worker/checkouts/gecko
[vcs 2018-11-14T21:09:08.721Z] (cloning from upstream repo https://hg.mozilla.org/mozilla-unified)
[vcs 2018-11-14T21:09:09.000Z] (sharing from new pooled repository 8ba995b74e18334ab3707f27e9eb8f4e37ba3d29)
[vcs 2018-11-14T21:09:09.516Z] applying clone bundle from https://s3-external-1.amazonaws.com/moz-hg-bundles-us-east-1/mozilla-unified/d3f4d556a89d3e5e72749314a0cf81d942fafc13.packed1.hg
[vcs 2018-11-14T21:09:09.622Z] 478890 files to transfer, 2.58 GB of data
[vcs 2018-11-14T21:09:11.623Z]
[vcs 2018-11-14T21:09:12.626Z] clone [>                                          ]   67491620/2774698696 1m21s
[vcs 2018-11-14T21:09:13.625Z] clone [>                                          ]  106279767/2774698696 1m16s
[vcs 2018-11-14T21:09:14.625Z] clone [=>                                         ]  146574164/2774698696 1m12s
[vcs 2018-11-14T21:09:15.626Z] clone [=>                                         ]  171690108/2774698696 1m16s
[vcs 2018-11-14T21:09:16.626Z] clone [=>                                         ]  193265720/2774698696 1m21s
[vcs 2018-11-14T21:09:17.626Z] clone [==>                                        ]  225280444/2774698696 1m20s
[vcs 2018-11-14T21:09:18.627Z] clone [==>                                        ]  257914310/2774698696 1m19s
[vcs 2018-11-14T21:09:19.628Z] clone [===>                                       ]  291327117/2774698696 1m17s
[vcs 2018-11-14T21:09:20.628Z] clone [====>                                      ]  338022905/2774698696 1m13s
[vcs 2018-11-14T21:09:21.629Z] clone [====>                                      ]  358720039/2774698696 1m15s
[vcs 2018-11-14T21:09:22.629Z] clone [=====>                                     ]  398228450/2774698696 1m12s
[vcs 2018-11-14T21:09:23.629Z] clone [=====>                                     ]  437631658/2774698696 1m10s
[vcs 2018-11-14T21:09:24.632Z] clone [======>                                    ]  454641086/2774698696 1m12s
[vcs 2018-11-14T21:09:25.633Z] clone [======>                                    ]  476720904/2774698696 1m13s
[vcs 2018-11-14T21:09:26.632Z] clone [======>                                    ]  503457966/2774698696 1m13s
[vcs 2018-11-14T21:09:27.632Z] clone [=======>                                   ]  530000110/2774698696 1m13s
[vcs 2018-11-14T21:09:28.635Z] clone [=======>                                   ]  548996071/2774698696 1m14s
[vcs 2018-11-14T21:09:29.677Z] clone [=======>                                   ]  556249797/2774698696 1m16s
[vcs 2018-11-14T21:09:30.678Z] clone [=======>                                   ]  575477464/2774698696 1m17s
[vcs 2018-11-14T21:09:31.678Z] clone [========>                                  ]  618973849/2774698696 1m14s
[vcs 2018-11-14T21:09:32.678Z] clone [=========>                                 ]  666030876/2774698696 1m10s
[vcs 2018-11-14T21:09:33.678Z] clone [=========>                                 ]  685719380/2774698696 1m11s
[vcs 2018-11-14T21:09:34.679Z] clone [=========>                                 ]  701005022/2774698696 1m12s
[vcs 2018-11-14T21:09:35.678Z] clone [==========>                                ]  717606060/2774698696 1m12s
[vcs 2018-11-14T21:09:36.679Z] clone [==========>                                ]  740693499/2774698696 1m12s
[vcs 2018-11-14T21:09:37.679Z] clone [==========>                                ]  766929304/2774698696 1m11s
[vcs 2018-11-14T21:09:38.679Z] clone [===========>                               ]  792545880/2774698696 1m11s
[vcs 2018-11-14T21:09:39.680Z] clone [===========>                               ]  811996205/2774698696 1m11s
[vcs 2018-11-14T21:09:40.680Z] clone [===========>                               ]  836938668/2774698696 1m10s
[vcs 2018-11-14T21:09:41.680Z] clone [============>                              ]  864657484/2774698696 1m09s
[vcs 2018-11-14T21:09:42.680Z] clone [============>                              ]  891236611/2774698696 1m08s
[vcs 2018-11-14T21:09:43.682Z] clone [=============>                             ]  926041406/2774698696 1m06s
[vcs 2018-11-14T21:09:44.682Z] clone [=============>                             ]  930498893/2774698696 1m08s
[vcs 2018-11-14T21:09:45.682Z] clone [=============>                             ]  956331306/2774698696 1m07s
[vcs 2018-11-14T21:09:46.682Z] clone [==============>                            ] 1002140521/2774698696 1m04s
[vcs 2018-11-14T21:09:47.682Z] clone [==============>                            ] 1012508363/2774698696 1m05s
[vcs 2018-11-14T21:09:48.682Z] clone [==============>                            ] 1017437926/2774698696 1m06s
[vcs 2018-11-14T21:09:49.682Z] clone [==============>                            ] 1022219365/2774698696 1m07s
[vcs 2018-11-14T21:09:50.682Z] clone [==============>                            ] 1025786907/2774698696 1m09s
[vcs 2018-11-14T21:09:51.683Z] clone [==============>                            ] 1028794844/2774698696 1m10s
[vcs 2018-11-14T21:09:52.683Z] clone [===============>                           ] 1034819687/2774698696 1m11s
[vcs 2018-11-14T21:09:53.683Z] clone [===============>                           ] 1039912128/2774698696 1m12s
[vcs 2018-11-14T21:09:54.683Z] clone [===============>                           ] 1046252425/2774698696 1m13s
[vcs 2018-11-14T21:09:55.683Z] clone [===============>                           ] 1066134534/2774698696 1m13s
[vcs 2018-11-14T21:09:56.685Z] clone [===============>                           ] 1087894225/2774698696 1m12s
[vcs 2018-11-14T21:09:57.684Z] clone [================>                          ] 1107758509/2774698696 1m11s
[vcs 2018-11-14T21:09:58.684Z] clone [================>                          ] 1114750252/2774698696 1m12s
[vcs 2018-11-14T21:09:59.684Z] clone [================>                          ] 1129561806/2774698696 1m12s
[vcs 2018-11-14T21:10:00.684Z] clone [================>                          ] 1135341160/2774698696 1m13s
[vcs 2018-11-14T21:10:01.684Z] clone [================>                          ] 1144287548/2774698696 1m13s
[vcs 2018-11-14T21:10:02.684Z] clone [=================>                         ] 1170279456/2774698696 1m12s
[vcs 2018-11-14T21:10:03.685Z] clone [=================>                         ] 1192722867/2774698696 1m11s
[vcs 2018-11-14T21:10:04.685Z] clone [=================>                         ] 1214537175/2774698696 1m10s
[vcs 2018-11-14T21:10:05.685Z] clone [==================>                        ] 1229775369/2774698696 1m10s
[vcs 2018-11-14T21:10:06.685Z] clone [==================>                        ] 1248697180/2774698696 1m09s
[vcs 2018-11-14T21:10:07.862Z] clone [==================>                        ] 1269071662/2774698696 1m08s
[vcs 2018-11-14T21:10:08.862Z] clone [===================>                       ] 1296830077/2774698696 1m07s
[vcs 2018-11-14T21:10:09.862Z] clone [===================>                       ] 1321742345/2774698696 1m06s
[vcs 2018-11-14T21:10:10.862Z] clone [===================>                       ] 1346954223/2774698696 1m04s
[vcs 2018-11-14T21:10:11.862Z] clone [====================>                      ] 1367819568/2774698696 1m03s
[vcs 2018-11-14T21:10:12.864Z] clone [====================>                      ] 1391377778/2774698696 1m02s
[vcs 2018-11-14T21:10:13.865Z] clone [====================>                      ] 1416584059/2774698696 1m01s
[vcs 2018-11-14T21:10:14.868Z] clone [=====================>                     ] 1445335587/2774698696 1m00s
[vcs 2018-11-14T21:10:15.865Z] clone [=======================>                     ] 1513951972/2774698696 55s
[vcs 2018-11-14T21:10:16.865Z] clone [========================>                    ] 1562297481/2774698696 52s
[vcs 2018-11-14T21:10:17.970Z] clone [========================>                    ] 1599653315/2774698696 50s
[vcs 2018-11-14T21:10:18.971Z] clone [=========================>                   ] 1643817175/2774698696 47s
[vcs 2018-11-14T21:10:19.971Z] clone [==========================>                  ] 1675753258/2774698696 46s
[vcs 2018-11-14T21:10:20.971Z] clone [==========================>                  ] 1697761018/2774698696 45s
[vcs 2018-11-14T21:10:21.972Z] clone [==========================>                  ] 1716687932/2774698696 44s
[vcs 2018-11-14T21:10:22.972Z] clone [===========================>                 ] 1761680403/2774698696 42s
[vcs 2018-11-14T21:10:23.972Z] clone [===========================>                 ] 1763511023/2774698696 42s
[vcs 2018-11-14T21:10:24.972Z] clone [===========================>                 ] 1769106587/2774698696 43s
[vcs 2018-11-14T21:10:25.972Z] clone [===========================>                 ] 1773288870/2774698696 43s
[vcs 2018-11-14T21:10:26.972Z] clone [===========================>                 ] 1778806084/2774698696 43s
[vcs 2018-11-14T21:10:27.972Z] clone [===========================>                 ] 1780338054/2774698696 44s
[vcs 2018-11-14T21:10:28.972Z] clone [===========================>                 ] 1783985855/2774698696 44s
[vcs 2018-11-14T21:10:29.972Z] clone [===========================>                 ] 1788136760/2774698696 45s
[vcs 2018-11-14T21:10:30.972Z] clone [============================>                ] 1794430357/2774698696 45s
[vcs 2018-11-14T21:10:31.972Z] clone [============================>                ] 1800555329/2774698696 45s
[vcs 2018-11-14T21:10:32.972Z] clone [============================>                ] 1808119505/2774698696 45s
[vcs 2018-11-14T21:10:33.972Z] clone [============================>                ] 1820816366/2774698696 45s
[vcs 2018-11-14T21:10:34.973Z] clone [============================>                ] 1831494668/2774698696 45s
[vcs 2018-11-14T21:10:35.973Z] clone [============================>                ] 1836162975/2774698696 45s
[vcs 2018-11-14T21:10:36.973Z] clone [=============================>               ] 1854002346/2774698696 45s
[vcs 2018-11-14T21:10:37.973Z] clone [=============================>               ] 1860466166/2774698696 45s
[vcs 2018-11-14T21:10:38.973Z] clone [=============================>               ] 1877930700/2774698696 44s
[vcs 2018-11-14T21:10:39.973Z] clone [=============================>               ] 1883326687/2774698696 44s
[vcs 2018-11-14T21:10:40.973Z] clone [=============================>               ] 1899828059/2774698696 44s
[vcs 2018-11-14T21:10:41.973Z] clone [==============================>              ] 1913964212/2774698696 43s
[vcs 2018-11-14T21:10:42.973Z] clone [==============================>              ] 1933092528/2774698696 42s
[vcs 2018-11-14T21:10:43.973Z] clone [==============================>              ] 1953767204/2774698696 41s
[vcs 2018-11-14T21:10:44.973Z] clone [==============================>              ] 1971632105/2774698696 40s
[vcs 2018-11-14T21:10:45.974Z] clone [===============================>             ] 1987729693/2774698696 40s
[vcs 2018-11-14T21:10:46.974Z] clone [===============================>             ] 2012095873/2774698696 38s
[vcs 2018-11-14T21:10:47.974Z] clone [================================>            ] 2036880640/2774698696 37s
[vcs 2018-11-14T21:10:48.974Z] clone [================================>            ] 2063644564/2774698696 36s
[vcs 2018-11-14T21:10:49.974Z] clone [================================>            ] 2092201306/2774698696 34s
[vcs 2018-11-14T21:10:50.975Z] clone [=================================>           ] 2112958191/2774698696 33s
[vcs 2018-11-14T21:10:51.975Z] clone [=================================>           ] 2129736646/2774698696 32s
[vcs 2018-11-14T21:10:52.978Z] clone [==================================>          ] 2160844802/2774698696 30s
[vcs 2018-11-14T21:10:53.976Z] clone [==================================>          ] 2192312521/2774698696 29s
[vcs 2018-11-14T21:10:54.978Z] clone [===================================>         ] 2262137673/2774698696 24s
[vcs 2018-11-14T21:10:55.983Z] clone [=====================================>       ] 2371320649/2774698696 18s
[vcs 2018-11-14T21:10:56.979Z] clone [======================================>      ] 2460842825/2774698696 14s
[vcs 2018-11-14T21:10:57.982Z] clone [========================================>    ] 2562423625/2774698696 09s
[vcs 2018-11-14T21:10:58.983Z] clone [==========================================>  ] 2651822447/2774698696 05s
[vcs 2018-11-14T21:10:59.782Z] clone [===========================================> ] 2714343791/2774698696 03s
[vcs 2018-11-14T21:10:59.783Z]
[vcs 2018-11-14T21:10:59.783Z] transferred 2.58 GB in 110.2 seconds (24.0 MB/sec)
[vcs 2018-11-14T21:11:00.268Z] finished applying clone bundle
[vcs 2018-11-14T21:11:01.445Z] searching for changes
[vcs 2018-11-14T21:11:01.999Z] adding changesets
[vcs 2018-11-14T21:11:02.072Z]
[vcs 2018-11-14T21:11:02.146Z] changesets [                                                          ]   1/314
[vcs 2018-11-14T21:11:02.146Z]
[vcs 2018-11-14T21:11:02.146Z] adding manifests
[vcs 2018-11-14T21:11:02.477Z] adding file changes
[vcs 2018-11-14T21:11:03.050Z] added 314 changesets with 1315 changes to 1067 files
[vcs 2018-11-14T21:11:44.403Z] new changesets 80b0b8b446fd:7585190c5954
[vcs 2018-11-14T21:11:44.999Z] searching for changes
[vcs 2018-11-14T21:11:45.095Z] no changes found
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark aurora
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark beta
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark central
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr10
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr17
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr24
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr31
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr38
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr45
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr52
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr60
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark fx-team
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark inbound
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark release
[vcs 2018-11-14T21:11:46.045Z] (pulling to obtain 6926e117b97cd120f5de0be2ab3bff7153f10a78)
[vcs 2018-11-14T21:11:48.984Z] searching for changes
[vcs 2018-11-14T21:11:50.797Z]
[vcs 2018-11-14T21:11:52.672Z] searching [ <=>                                                             ] 2
[vcs 2018-11-14T21:11:54.295Z] searching [  <=>                                                            ] 3
[vcs 2018-11-14T21:11:59.781Z]
[vcs 2018-11-14T21:11:59.781Z] adding changesets
[vcs 2018-11-14T21:11:59.782Z]
[vcs 2018-11-14T21:11:59.783Z] changesets [==============================>                               ] 1/2
[vcs 2018-11-14T21:11:59.783Z]
[vcs 2018-11-14T21:11:59.783Z] adding manifests
[vcs 2018-11-14T21:11:59.813Z] adding file changes
[vcs 2018-11-14T21:11:59.822Z] added 2 changesets with 4 changes to 4 files (+1 heads)
[vcs 2018-11-14T21:11:59.847Z] new changesets f8f2c4c13360:6926e117b97c
[vcs 2018-11-14T21:12:04.110Z] (warning: large working directory being used without fsmonitor enabled; enable fsmonitor to improve performance; see "hg help -e fsmonitor")
[vcs 2018-11-14T21:12:05.059Z]
[vcs 2018-11-14T21:12:06.078Z] updating [                                                      ]    100/258996
[vcs 2018-11-14T21:12:07.117Z] updating [                                                ]   2800/258996 1m37s
[vcs 2018-11-14T21:12:08.121Z] updating [>                                               ]   5600/258996 1m35s
[vcs 2018-11-14T21:12:09.142Z] updating [>                                               ]   8200/258996 1m35s
[vcs 2018-11-14T21:12:10.203Z] updating [=>                                              ]  10900/258996 1m34s
[vcs 2018-11-14T21:12:11.257Z] updating [=>                                              ]  14000/258996 1m31s
[vcs 2018-11-14T21:12:12.333Z] updating [==>                                             ]  17400/258996 1m27s
[vcs 2018-11-14T21:12:13.384Z] updating [==>                                             ]  20400/258996 1m26s
[vcs 2018-11-14T21:12:14.422Z] updating [===>                                            ]  23300/258996 1m25s
[vcs 2018-11-14T21:12:15.448Z] updating [===>                                            ]  26900/258996 1m22s
[vcs 2018-11-14T21:12:16.453Z] updating [====>                                           ]  30300/258996 1m19s
[vcs 2018-11-14T21:12:17.455Z] updating [=====>                                          ]  33100/258996 1m18s
[vcs 2018-11-14T21:12:18.465Z] updating [=====>                                          ]  36500/258996 1m16s
[vcs 2018-11-14T21:12:19.477Z] updating [======>                                         ]  40400/258996 1m13s
[vcs 2018-11-14T21:12:20.573Z] updating [=======>                                        ]  43800/258996 1m11s
[vcs 2018-11-14T21:12:21.627Z] updating [=======>                                        ]  46900/258996 1m11s
[vcs 2018-11-14T21:12:22.674Z] updating [========>                                       ]  50000/258996 1m10s
[vcs 2018-11-14T21:12:23.714Z] updating [========>                                       ]  53200/258996 1m09s
[vcs 2018-11-14T21:12:24.744Z] updating [=========>                                      ]  56300/258996 1m08s
[vcs 2018-11-14T21:12:25.800Z] updating [==========>                                     ]  60000/258996 1m06s
[vcs 2018-11-14T21:12:26.826Z] updating [==========>                                     ]  63000/258996 1m05s
[vcs 2018-11-14T21:12:27.873Z] updating [===========>                                    ]  66300/258996 1m04s
[vcs 2018-11-14T21:12:28.880Z] updating [===========>                                    ]  69600/258996 1m03s
[vcs 2018-11-14T21:12:29.881Z] updating [============>                                   ]  72900/258996 1m01s
[vcs 2018-11-14T21:12:30.893Z] updating [=============>                                  ]  76000/258996 1m00s
[vcs 2018-11-14T21:12:31.893Z] updating [==============>                                   ]  79000/258996 59s
[vcs 2018-11-14T21:12:32.902Z] updating [==============>                                   ]  82000/258996 58s
[vcs 2018-11-14T21:12:33.905Z] updating [===============>                                  ]  85200/258996 57s
[vcs 2018-11-14T21:12:34.937Z] updating [================>                                 ]  88300/258996 56s
[vcs 2018-11-14T21:12:35.939Z] updating [================>                                 ]  91500/258996 55s
[vcs 2018-11-14T21:12:36.967Z] updating [=================>                                ]  94800/258996 54s
[vcs 2018-11-14T21:12:37.981Z] updating [=================>                                ]  97900/258996 53s
[vcs 2018-11-14T21:12:39.014Z] updating [==================>                               ] 101000/258996 52s
[vcs 2018-11-14T21:12:40.023Z] updating [===================>                              ] 104200/258996 51s
[vcs 2018-11-14T21:12:41.067Z] updating [===================>                              ] 106700/258996 50s
[vcs 2018-11-14T21:12:42.074Z] updating [====================>                             ] 110800/258996 49s
[vcs 2018-11-14T21:12:43.088Z] updating [=====================>                            ] 115100/258996 47s
[vcs 2018-11-14T21:12:44.116Z] updating [=====================>                            ] 118600/258996 46s
[vcs 2018-11-14T21:12:45.135Z] updating [======================>                           ] 122500/258996 44s
[vcs 2018-11-14T21:12:46.141Z] updating [=======================>                          ] 126200/258996 43s
[vcs 2018-11-14T21:12:47.212Z] updating [=======================>                          ] 129300/258996 42s
[vcs 2018-11-14T21:12:48.228Z] updating [========================>                         ] 132600/258996 41s
[vcs 2018-11-14T21:12:49.292Z] updating [=========================>                        ] 135400/258996 40s
[vcs 2018-11-14T21:12:50.321Z] updating [=========================>                        ] 138200/258996 39s
[vcs 2018-11-14T21:12:51.325Z] updating [==========================>                       ] 141200/258996 38s
[vcs 2018-11-14T21:12:52.339Z] updating [==========================>                       ] 142900/258996 38s
[vcs 2018-11-14T21:12:53.391Z] updating [===========================>                      ] 145200/258996 38s
[vcs 2018-11-14T21:12:54.399Z] updating [===========================>                      ] 148500/258996 36s
[vcs 2018-11-14T21:12:55.412Z] updating [============================>                     ] 152000/258996 35s
[vcs 2018-11-14T21:12:56.452Z] updating [=============================>                    ] 155400/258996 34s
[vcs 2018-11-14T21:12:57.630Z] updating [=============================>                    ] 158700/258996 33s
[vcs 2018-11-14T21:12:58.656Z] updating [==============================>                   ] 162200/258996 32s
[vcs 2018-11-14T21:12:59.702Z] updating [===============================>                  ] 166100/258996 30s
[vcs 2018-11-14T21:13:00.731Z] updating [===============================>                  ] 170000/258996 29s
[vcs 2018-11-14T21:13:01.744Z] updating [================================>                 ] 174200/258996 28s
[vcs 2018-11-14T21:13:02.750Z] updating [=================================>                ] 178200/258996 26s
[vcs 2018-11-14T21:13:03.766Z] updating [==================================>               ] 181900/258996 25s
[vcs 2018-11-14T21:13:04.774Z] updating [==================================>               ] 185600/258996 24s
[vcs 2018-11-14T21:13:05.779Z] updating [===================================>              ] 189700/258996 22s
[vcs 2018-11-14T21:13:06.803Z] updating [====================================>             ] 193900/258996 21s
[vcs 2018-11-14T21:13:07.840Z] updating [=====================================>            ] 197900/258996 20s
[vcs 2018-11-14T21:13:08.841Z] updating [=====================================>            ] 201600/258996 18s
[vcs 2018-11-14T21:13:09.873Z] updating [======================================>           ] 205700/258996 17s
[vcs 2018-11-14T21:13:10.896Z] updating [=======================================>          ] 209700/258996 16s
[vcs 2018-11-14T21:13:11.906Z] updating [========================================>         ] 213700/258996 14s
[vcs 2018-11-14T21:13:12.922Z] updating [========================================>         ] 217300/258996 13s
[vcs 2018-11-14T21:13:13.937Z] updating [=========================================>        ] 220500/258996 12s
[vcs 2018-11-14T21:13:14.954Z] updating [==========================================>       ] 224100/258996 11s
[vcs 2018-11-14T21:13:15.957Z] updating [==========================================>       ] 227900/258996 10s
[vcs 2018-11-14T21:13:17.039Z] updating [===========================================>      ] 231600/258996 09s
[vcs 2018-11-14T21:13:18.050Z] updating [============================================>     ] 235000/258996 08s
[vcs 2018-11-14T21:13:19.074Z] updating [=============================================>    ] 238600/258996 07s
[vcs 2018-11-14T21:13:20.102Z] updating [=============================================>    ] 242100/258996 06s
[vcs 2018-11-14T21:13:21.127Z] updating [==============================================>   ] 245800/258996 05s
[vcs 2018-11-14T21:13:22.140Z] updating [===============================================>  ] 249200/258996 03s
[vcs 2018-11-14T21:13:23.174Z] updating [===============================================>  ] 251400/258996 03s
[vcs 2018-11-14T21:13:24.259Z] updating [================================================> ] 254649/258996 02s
[vcs 2018-11-14T21:13:25.294Z] updating [================================================> ] 255698/258996 02s
[vcs 2018-11-14T21:13:26.512Z] updating [================================================> ] 256598/258996 01s
[vcs 2018-11-14T21:13:27.520Z] updating [================================================> ] 257547/258996 01s
[vcs 2018-11-14T21:13:27.979Z] updating [================================================> ] 258547/258996 01s
[vcs 2018-11-14T21:13:38.214Z]
[vcs 2018-11-14T21:13:38.214Z] 258996 files updated, 0 files merged, 0 files removed, 0 files unresolved
[vcs 2018-11-14T21:13:38.463Z] updated to 6926e117b97cd120f5de0be2ab3bff7153f10a78
[vcs 2018-11-14T21:13:38.469Z] PERFHERDER_DATA: {"framework": {"name": "vcs"}, "suites": [{"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "clone", "shouldAlert": false, "subtests": [], "value": 156.62339401245117}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "pull", "shouldAlert": false, "subtests": [], "value": 13.032690048217773}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "update", "shouldAlert": false, "subtests": [], "value": 98.61538600921631}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "overall", "shouldAlert": false, "subtests": [], "value": 270.7935130596161}]}
[vcs 2018-11-14T21:13:38.917Z] TinderboxPrint:<a href=https://hg.mozilla.org/try/rev/6926e117b97cd120f5de0be2ab3bff7153f10a78 title='Built from try revision 6926e117b97cd120f5de0be2ab3bff7153f10a78'>6926e117b97cd120f5de0be2ab3bff7153f10a78</a>
[task 2018-11-14T21:13:38.917Z] executing ['bash', '-cx', 'cd /builds/worker/checkouts/gecko/ && cp -r /build/node_modules_eslint node_modules && ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules && ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules && ./mach lint -l eslint -f treeherder --quiet
']
[task 2018-11-14T21:13:38.920Z] + cd /builds/worker/checkouts/gecko/
[task 2018-11-14T21:13:38.920Z] + cp -r /build/node_modules_eslint node_modules
[task 2018-11-14T21:13:40.120Z] + ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules
[task 2018-11-14T21:13:40.123Z] + ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules
[task 2018-11-14T21:13:40.124Z] + ./mach lint -l eslint -f treeherder --quiet
[task 2018-11-14T21:13:40.989Z] New python executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python2.7
[task 2018-11-14T21:13:40.990Z] Also creating executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python
[task 2018-11-14T21:13:42.910Z] Installing setuptools, pip, wheel...done.
[task 2018-11-14T21:13:44.179Z] running build_ext
[task 2018-11-14T21:13:44.179Z] building 'psutil._psutil_linux' extension
[task 2018-11-14T21:13:44.179Z] creating build
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so
[task 2018-11-14T21:13:44.180Z] building 'psutil._psutil_posix' extension
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so -> psutil
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so -> psutil
[task 2018-11-14T21:13:44.180Z]
[task 2018-11-14T21:13:44.180Z] Error processing command. Ignoring because optional. (optional:packages.txt:comm/build/virtualenv_packages.txt)
[task 2018-11-14T21:19:41.952Z] No lint issues found.
[taskcluster 2018-11-14 21:19:42.433Z] === Task Finished ===
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds`}},dc=e=>new Promise(t=>{setTimeout(t,e)}),s1={args:{...xe,height:400},render:e=>{const t=(f,d=0)=>Array.from({length:f}).map((p,h)=>(h+=d,`Line: ${h}
`)),[n,r]=J.useState(!1),s=async()=>{r(!0),await dc(1e3),r(!1)},i=100,[o,a]=J.useState(()=>t(i)),c=J.useRef(null),u=J.useRef(-1),l=o.length;return m.jsx(Ze,{...e,ref:c,onScroll:async()=>{!c.current||!c.current.listRef.current||u.current<l&&c.current.listRef.current.findEndIndex()+50>l&&(u.current=l,await s(),a(f=>[...f,...t(i,f.length)]))},loading:n,text:o.join("")})}};var xr,Sr,Ir;Yt.parameters={...Yt.parameters,docs:{...(xr=Yt.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  name: "Text Based",
  args: {
    ...BaseStory,
    text: \`\\x1b[4;1mRunning "clean:all" (clean) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m0 paths cleaned.\\n\\n\\x1b[4;1mRunning "copy:base" (copy) task\\x1b[0m\\nCreated 188 directories, copied 1433 files\\n\\n\\x1b[4;1mRunning "copy:app" (copy) task\\x1b[0m\\nCreated 40 directories, copied 233 files\\n\\n\\x1b[4;1mRunning "processhtml:dist" (processhtml) task\\x1b[0m\\n\\n\\x1b[4;1mRunning "ngAnnotate:dist" (ngAnnotate) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m52 files successfully generated.\\n\\n\\x1b[4;1mRunning "uglify:dist" (uglify) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m2 sourcemaps created.\\n\\x1b[32m>> \\x1b[39m2 files created.\\n\\n\\x1b[4;1mRunning "less:app" (less) task\\x1b[0m\\n\\x1b[32mFile target/dist/css/alertEvents.css created\\x1b[39m\\n\\x1b[32mFile target/dist/css/application.css created\\x1b[39m\\n\\n\\x1b[4;1mRunning "less:libs" (less) task\\x1b[0m\\n\\x1b[31mCreate file target/dist/css/libs.css failed\\x1b[39m\`
  }
}`,...(Ir=(Sr=Yt.parameters)==null?void 0:Sr.docs)==null?void 0:Ir.source}}};var Lr,Er,Or;Gt.parameters={...Gt.parameters,docs:{...(Lr=Gt.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  name: "URL Based",
  args: {
    ...BaseStory,
    url: "https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
  }
}`,...(Or=(Er=Gt.parameters)==null?void 0:Er.docs)==null?void 0:Or.source}}};var Rr,Wr,Cr;Xt.parameters={...Xt.parameters,docs:{...(Rr=Xt.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  name: "External Mode",
  args: {
    ...BaseStory,
    external: true,
    text: \`You can provide some initial content (multiple lines),
such as this one.\`
  },
  render: args => {
    const ref = React.createRef<LazyLog>();
    return <>\r
                <button onClick={() => ref.current?.appendLines(["This is a new line!", "This is another new line!"])} style={{
        marginBottom: "6px"
      }}>\r
                    Append Line\r
                </button>\r
                <br />\r
                <LazyLog ref={ref} {...args} />\r
            </>;
  }
}`,...(Cr=(Wr=Xt.parameters)==null?void 0:Wr.docs)==null?void 0:Cr.source}}};var Nr,zr,Dr;Jt.parameters={...Jt.parameters,docs:{...(Nr=Jt.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 100,
    text: \`Press the Clear button to test clearing the log!\`
  },
  render: args => {
    const ref = React.createRef<LazyLog>();
    return <>\r
                <button onClick={() => ref.current?.clear()} style={{
        marginBottom: "6px"
      }}>\r
                    Clear Log\r
                </button>\r
                <br />\r
                <LazyLog ref={ref} {...args} />\r
            </>;
  }
}`,...(Dr=(zr=Jt.parameters)==null?void 0:zr.docs)==null?void 0:Dr.source}}};var Mr,Br,Pr;Qt.parameters={...Qt.parameters,docs:{...(Mr=Qt.parameters)==null?void 0:Mr.docs,source:{originalSource:"{\n  args: {\n    ...BaseStory,\n    height: 150,\n    text: `Click me 100!\\nClick me 200!\\nClick me 300!\\n`\n  },\n  render: args => <LazyLog {...args} onLineNumberClick={e => alert(`Line No: ${e.lineNumber} - ${e.highlightRange}`)} onLineContentClick={e => alert(`Line Content: ${e.currentTarget.textContent}`)} />\n}",...(Pr=(Br=Qt.parameters)==null?void 0:Br.docs)==null?void 0:Pr.source}}};var Ar,qr,Ur;e1.parameters={...e1.parameters,docs:{...(Ar=e1.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 200,
    enableLinks: true,
    text: \`Can be secure https://www.mozilla.org or unsecure http://www.mozilla.org
We want to upload data to ftp://www.mozilla.org or ftps://www.mozilla.org
We just need to write documents for www.mozilla.org
And at the end send a mail to react-lazylog@mozilla.org
\`
  }
}`,...(Ur=(qr=e1.parameters)==null?void 0:qr.docs)==null?void 0:Ur.source}}};var jr,Fr,$r;t1.parameters={...t1.parameters,docs:{...(jr=t1.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 150,
    text: \`\`
  },
  render: args => {
    const ref = React.createRef<LazyLog>();
    let interval: NodeJS.Timeout;
    React.useEffect(() => {
      restartLog();

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run only on mount

    const restartLog = () => {
      clearInterval(interval);
      ref.current?.clear();
      // Counter for tracking iterations
      let count = 0;
      // Maximum number of iterations (100 seconds)
      const maxCount = 30;

      // Function to generate a log entry
      const generateLogEntry = () => {
        const timestamp = new Date().toLocaleTimeString();
        return \`[\${timestamp}] Log entry #\${count + 1}\`;
      };

      // Set up interval to add new log every second
      interval = setInterval(() => {
        if (count < maxCount) {
          ref?.current?.appendLines([generateLogEntry()]);
          count++;
        } else {
          // Clear interval when we reach 100 entries
          clearInterval(interval);
        }
      }, 1000);
    };
    return <>\r
                <button onClick={() => {
        restartLog();
      }} style={{
        marginBottom: "6px"
      }}>\r
                    Restart Log\r
                </button>\r
                <br />\r
                <LazyLog ref={ref} {...args} external={true} follow={true} />\r
            </>;
  }
}`,...($r=(Fr=t1.parameters)==null?void 0:Fr.docs)==null?void 0:$r.source}}};var Hr,Kr,Vr;n1.parameters={...n1.parameters,docs:{...(Hr=n1.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 400,
    highlight: [70, 75],
    scrollToLine: 77,
    text: \`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
[taskcluster 2018-11-14 21:08:32.452Z] Worker ID: i-010f9c4a4b041ee6c
[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1
[taskcluster 2018-11-14 21:08:32.453Z] Worker Node Type: m3.xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Worker Type: gecko-t-linux-xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Public IP: 54.172.91.38
[taskcluster 2018-11-14 21:08:32.453Z] using cache "level-1-checkouts-v3-2f7c6cb7dd63ce826370" -> /builds/worker/checkouts

[taskcluster 2018-11-14 21:08:33.314Z] Downloading artifact "public/image.tar.zst" from task ID: fZ80-a7IT_yOpvW_jc_HPg.
[taskcluster 2018-11-14 21:08:38.316Z] Download Progress: 67.10%
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded artifact successfully.
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded 265.212 mb
[taskcluster 2018-11-14 21:08:41.077Z] Decompressing downloaded image
[taskcluster 2018-11-14 21:08:43.321Z] Loading docker image from downloaded archive.
[taskcluster 2018-11-14 21:09:06.885Z] Image 'public/image.tar.zst' from task 'fZ80-a7IT_yOpvW_jc_HPg' loaded.  Using image ID sha256:4f1121f66938146cc05dfe474f399a631816e2130c04562187fd96e1085e0433.
[taskcluster 2018-11-14 21:09:07.046Z] === Task Starting ===
[setup 2018-11-14T21:09:07.575Z] run-task started in /builds/worker
[cache 2018-11-14T21:09:07.579Z] cache /builds/worker/checkouts exists; requirements: gid=1000 uid=1000 version=1
[volume 2018-11-14T21:09:07.579Z] changing ownership of volume /builds/worker/.cache to 1000:1000
[volume 2018-11-14T21:09:07.579Z] volume /builds/worker/checkouts is a cache
[setup 2018-11-14T21:09:07.580Z] running as worker:worker
[vcs 2018-11-14T21:09:07.580Z] executing ['hg', 'robustcheckout', '--sharebase', '/builds/worker/checkouts/hg-store', '--purge', '--upstream', 'https://hg.mozilla.org/mozilla-unified', '--revision', '6926e117b97cd120f5de0be2ab3bff7153f10a78', 'https://hg.mozilla.org/try', '/builds/worker/checkouts/gecko']
[vcs 2018-11-14T21:09:07.670Z] (using Mercurial 4.7.1)
[vcs 2018-11-14T21:09:07.671Z] ensuring https://hg.mozilla.org/try@6926e117b97cd120f5de0be2ab3bff7153f10a78 is available at /builds/worker/checkouts/gecko
[vcs 2018-11-14T21:09:08.721Z] (cloning from upstream repo https://hg.mozilla.org/mozilla-unified)
[vcs 2018-11-14T21:09:09.000Z] (sharing from new pooled repository 8ba995b74e18334ab3707f27e9eb8f4e37ba3d29)
[vcs 2018-11-14T21:09:09.516Z] applying clone bundle from https://s3-external-1.amazonaws.com/moz-hg-bundles-us-east-1/mozilla-unified/d3f4d556a89d3e5e72749314a0cf81d942fafc13.packed1.hg
[vcs 2018-11-14T21:09:09.622Z] 478890 files to transfer, 2.58 GB of data
[vcs 2018-11-14T21:09:11.623Z]
[vcs 2018-11-14T21:09:12.626Z] clone [>                                          ]   67491620/2774698696 1m21s
[vcs 2018-11-14T21:09:13.625Z] clone [>                                          ]  106279767/2774698696 1m16s
[vcs 2018-11-14T21:09:14.625Z] clone [=>                                         ]  146574164/2774698696 1m12s
[vcs 2018-11-14T21:09:15.626Z] clone [=>                                         ]  171690108/2774698696 1m16s
[vcs 2018-11-14T21:09:16.626Z] clone [=>                                         ]  193265720/2774698696 1m21s
[vcs 2018-11-14T21:09:17.626Z] clone [==>                                        ]  225280444/2774698696 1m20s
[vcs 2018-11-14T21:09:18.627Z] clone [==>                                        ]  257914310/2774698696 1m19s
[vcs 2018-11-14T21:09:19.628Z] clone [===>                                       ]  291327117/2774698696 1m17s
[vcs 2018-11-14T21:09:20.628Z] clone [====>                                      ]  338022905/2774698696 1m13s
[vcs 2018-11-14T21:09:21.629Z] clone [====>                                      ]  358720039/2774698696 1m15s
[vcs 2018-11-14T21:09:22.629Z] clone [=====>                                     ]  398228450/2774698696 1m12s
[vcs 2018-11-14T21:09:23.629Z] clone [=====>                                     ]  437631658/2774698696 1m10s
[vcs 2018-11-14T21:09:24.632Z] clone [======>                                    ]  454641086/2774698696 1m12s
[vcs 2018-11-14T21:09:25.633Z] clone [======>                                    ]  476720904/2774698696 1m13s
[vcs 2018-11-14T21:09:26.632Z] clone [======>                                    ]  503457966/2774698696 1m13s
[vcs 2018-11-14T21:09:27.632Z] clone [=======>                                   ]  530000110/2774698696 1m13s
[vcs 2018-11-14T21:09:28.635Z] clone [=======>                                   ]  548996071/2774698696 1m14s
[vcs 2018-11-14T21:09:29.677Z] clone [=======>                                   ]  556249797/2774698696 1m16s
[vcs 2018-11-14T21:09:30.678Z] clone [=======>                                   ]  575477464/2774698696 1m17s
[vcs 2018-11-14T21:09:31.678Z] clone [========>                                  ]  618973849/2774698696 1m14s
[vcs 2018-11-14T21:09:32.678Z] clone [=========>                                 ]  666030876/2774698696 1m10s
[vcs 2018-11-14T21:09:33.678Z] clone [=========>                                 ]  685719380/2774698696 1m11s
[vcs 2018-11-14T21:09:34.679Z] clone [=========>                                 ]  701005022/2774698696 1m12s
[vcs 2018-11-14T21:09:35.678Z] clone [==========>                                ]  717606060/2774698696 1m12s
[vcs 2018-11-14T21:09:36.679Z] clone [==========>                                ]  740693499/2774698696 1m12s
[vcs 2018-11-14T21:09:37.679Z] clone [==========>                                ]  766929304/2774698696 1m11s
[vcs 2018-11-14T21:09:38.679Z] clone [===========>                               ]  792545880/2774698696 1m11s
[vcs 2018-11-14T21:09:39.680Z] clone [===========>                               ]  811996205/2774698696 1m11s
[vcs 2018-11-14T21:09:40.680Z] clone [===========>                               ]  836938668/2774698696 1m10s
[vcs 2018-11-14T21:09:41.680Z] clone [============>                              ]  864657484/2774698696 1m09s
[vcs 2018-11-14T21:09:42.680Z] clone [============>                              ]  891236611/2774698696 1m08s
[vcs 2018-11-14T21:09:43.682Z] clone [=============>                             ]  926041406/2774698696 1m06s
[vcs 2018-11-14T21:09:44.682Z] clone [=============>                             ]  930498893/2774698696 1m08s
[vcs 2018-11-14T21:09:45.682Z] clone [=============>                             ]  956331306/2774698696 1m07s
[vcs 2018-11-14T21:09:46.682Z] clone [==============>                            ] 1002140521/2774698696 1m04s
[vcs 2018-11-14T21:09:47.682Z] clone [==============>                            ] 1012508363/2774698696 1m05s
[vcs 2018-11-14T21:09:48.682Z] clone [==============>                            ] 1017437926/2774698696 1m06s
[vcs 2018-11-14T21:09:49.682Z] clone [==============>                            ] 1022219365/2774698696 1m07s
[vcs 2018-11-14T21:09:50.682Z] clone [==============>                            ] 1025786907/2774698696 1m09s
[vcs 2018-11-14T21:09:51.683Z] clone [==============>                            ] 1028794844/2774698696 1m10s
[vcs 2018-11-14T21:09:52.683Z] clone [===============>                           ] 1034819687/2774698696 1m11s
[vcs 2018-11-14T21:09:53.683Z] clone [===============>                           ] 1039912128/2774698696 1m12s
[vcs 2018-11-14T21:09:54.683Z] clone [===============>                           ] 1046252425/2774698696 1m13s
[vcs 2018-11-14T21:09:55.683Z] clone [===============>                           ] 1066134534/2774698696 1m13s
[vcs 2018-11-14T21:09:56.685Z] clone [===============>                           ] 1087894225/2774698696 1m12s
[vcs 2018-11-14T21:09:57.684Z] clone [================>                          ] 1107758509/2774698696 1m11s
[vcs 2018-11-14T21:09:58.684Z] clone [================>                          ] 1114750252/2774698696 1m12s
[vcs 2018-11-14T21:09:59.684Z] clone [================>                          ] 1129561806/2774698696 1m12s
[vcs 2018-11-14T21:10:00.684Z] clone [================>                          ] 1135341160/2774698696 1m13s
[vcs 2018-11-14T21:10:01.684Z] clone [================>                          ] 1144287548/2774698696 1m13s
[vcs 2018-11-14T21:10:02.684Z] clone [=================>                         ] 1170279456/2774698696 1m12s
[vcs 2018-11-14T21:10:03.685Z] clone [=================>                         ] 1192722867/2774698696 1m11s
[vcs 2018-11-14T21:10:04.685Z] clone [=================>                         ] 1214537175/2774698696 1m10s
[vcs 2018-11-14T21:10:05.685Z] clone [==================>                        ] 1229775369/2774698696 1m10s
[vcs 2018-11-14T21:10:06.685Z] clone [==================>                        ] 1248697180/2774698696 1m09s
[vcs 2018-11-14T21:10:07.862Z] clone [==================>                        ] 1269071662/2774698696 1m08s
[vcs 2018-11-14T21:10:08.862Z] clone [===================>                       ] 1296830077/2774698696 1m07s
[vcs 2018-11-14T21:10:09.862Z] clone [===================>                       ] 1321742345/2774698696 1m06s
[vcs 2018-11-14T21:10:10.862Z] clone [===================>                       ] 1346954223/2774698696 1m04s
[vcs 2018-11-14T21:10:11.862Z] clone [====================>                      ] 1367819568/2774698696 1m03s
[vcs 2018-11-14T21:10:12.864Z] clone [====================>                      ] 1391377778/2774698696 1m02s
[vcs 2018-11-14T21:10:13.865Z] clone [====================>                      ] 1416584059/2774698696 1m01s
[vcs 2018-11-14T21:10:14.868Z] clone [=====================>                     ] 1445335587/2774698696 1m00s
[vcs 2018-11-14T21:10:15.865Z] clone [=======================>                     ] 1513951972/2774698696 55s
[vcs 2018-11-14T21:10:16.865Z] clone [========================>                    ] 1562297481/2774698696 52s
[vcs 2018-11-14T21:10:17.970Z] clone [========================>                    ] 1599653315/2774698696 50s
[vcs 2018-11-14T21:10:18.971Z] clone [=========================>                   ] 1643817175/2774698696 47s
[vcs 2018-11-14T21:10:19.971Z] clone [==========================>                  ] 1675753258/2774698696 46s
[vcs 2018-11-14T21:10:20.971Z] clone [==========================>                  ] 1697761018/2774698696 45s
[vcs 2018-11-14T21:10:21.972Z] clone [==========================>                  ] 1716687932/2774698696 44s
[vcs 2018-11-14T21:10:22.972Z] clone [===========================>                 ] 1761680403/2774698696 42s
[vcs 2018-11-14T21:10:23.972Z] clone [===========================>                 ] 1763511023/2774698696 42s
[vcs 2018-11-14T21:10:24.972Z] clone [===========================>                 ] 1769106587/2774698696 43s
[vcs 2018-11-14T21:10:25.972Z] clone [===========================>                 ] 1773288870/2774698696 43s
[vcs 2018-11-14T21:10:26.972Z] clone [===========================>                 ] 1778806084/2774698696 43s
[vcs 2018-11-14T21:10:27.972Z] clone [===========================>                 ] 1780338054/2774698696 44s
[vcs 2018-11-14T21:10:28.972Z] clone [===========================>                 ] 1783985855/2774698696 44s
[vcs 2018-11-14T21:10:29.972Z] clone [===========================>                 ] 1788136760/2774698696 45s
[vcs 2018-11-14T21:10:30.972Z] clone [============================>                ] 1794430357/2774698696 45s
[vcs 2018-11-14T21:10:31.972Z] clone [============================>                ] 1800555329/2774698696 45s
[vcs 2018-11-14T21:10:32.972Z] clone [============================>                ] 1808119505/2774698696 45s
[vcs 2018-11-14T21:10:33.972Z] clone [============================>                ] 1820816366/2774698696 45s
[vcs 2018-11-14T21:10:34.973Z] clone [============================>                ] 1831494668/2774698696 45s
[vcs 2018-11-14T21:10:35.973Z] clone [============================>                ] 1836162975/2774698696 45s
[vcs 2018-11-14T21:10:36.973Z] clone [=============================>               ] 1854002346/2774698696 45s
[vcs 2018-11-14T21:10:37.973Z] clone [=============================>               ] 1860466166/2774698696 45s
[vcs 2018-11-14T21:10:38.973Z] clone [=============================>               ] 1877930700/2774698696 44s
[vcs 2018-11-14T21:10:39.973Z] clone [=============================>               ] 1883326687/2774698696 44s
[vcs 2018-11-14T21:10:40.973Z] clone [=============================>               ] 1899828059/2774698696 44s
[vcs 2018-11-14T21:10:41.973Z] clone [==============================>              ] 1913964212/2774698696 43s
[vcs 2018-11-14T21:10:42.973Z] clone [==============================>              ] 1933092528/2774698696 42s
[vcs 2018-11-14T21:10:43.973Z] clone [==============================>              ] 1953767204/2774698696 41s
[vcs 2018-11-14T21:10:44.973Z] clone [==============================>              ] 1971632105/2774698696 40s
[vcs 2018-11-14T21:10:45.974Z] clone [===============================>             ] 1987729693/2774698696 40s
[vcs 2018-11-14T21:10:46.974Z] clone [===============================>             ] 2012095873/2774698696 38s
[vcs 2018-11-14T21:10:47.974Z] clone [================================>            ] 2036880640/2774698696 37s
[vcs 2018-11-14T21:10:48.974Z] clone [================================>            ] 2063644564/2774698696 36s
[vcs 2018-11-14T21:10:49.974Z] clone [================================>            ] 2092201306/2774698696 34s
[vcs 2018-11-14T21:10:50.975Z] clone [=================================>           ] 2112958191/2774698696 33s
[vcs 2018-11-14T21:10:51.975Z] clone [=================================>           ] 2129736646/2774698696 32s
[vcs 2018-11-14T21:10:52.978Z] clone [==================================>          ] 2160844802/2774698696 30s
[vcs 2018-11-14T21:10:53.976Z] clone [==================================>          ] 2192312521/2774698696 29s
[vcs 2018-11-14T21:10:54.978Z] clone [===================================>         ] 2262137673/2774698696 24s
[vcs 2018-11-14T21:10:55.983Z] clone [=====================================>       ] 2371320649/2774698696 18s
[vcs 2018-11-14T21:10:56.979Z] clone [======================================>      ] 2460842825/2774698696 14s
[vcs 2018-11-14T21:10:57.982Z] clone [========================================>    ] 2562423625/2774698696 09s
[vcs 2018-11-14T21:10:58.983Z] clone [==========================================>  ] 2651822447/2774698696 05s
[vcs 2018-11-14T21:10:59.782Z] clone [===========================================> ] 2714343791/2774698696 03s
[vcs 2018-11-14T21:10:59.783Z]
[vcs 2018-11-14T21:10:59.783Z] transferred 2.58 GB in 110.2 seconds (24.0 MB/sec)
[vcs 2018-11-14T21:11:00.268Z] finished applying clone bundle
[vcs 2018-11-14T21:11:01.445Z] searching for changes
[vcs 2018-11-14T21:11:01.999Z] adding changesets
[vcs 2018-11-14T21:11:02.072Z]
[vcs 2018-11-14T21:11:02.146Z] changesets [                                                          ]   1/314
[vcs 2018-11-14T21:11:02.146Z]
[vcs 2018-11-14T21:11:02.146Z] adding manifests
[vcs 2018-11-14T21:11:02.477Z] adding file changes
[vcs 2018-11-14T21:11:03.050Z] added 314 changesets with 1315 changes to 1067 files
[vcs 2018-11-14T21:11:44.403Z] new changesets 80b0b8b446fd:7585190c5954
[vcs 2018-11-14T21:11:44.999Z] searching for changes
[vcs 2018-11-14T21:11:45.095Z] no changes found
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark aurora
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark beta
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark central
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr10
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr17
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr24
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr31
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr38
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr45
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr52
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr60
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark fx-team
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark inbound
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark release
[vcs 2018-11-14T21:11:46.045Z] (pulling to obtain 6926e117b97cd120f5de0be2ab3bff7153f10a78)
[vcs 2018-11-14T21:11:48.984Z] searching for changes
[vcs 2018-11-14T21:11:50.797Z]
[vcs 2018-11-14T21:11:52.672Z] searching [ <=>                                                             ] 2
[vcs 2018-11-14T21:11:54.295Z] searching [  <=>                                                            ] 3
[vcs 2018-11-14T21:11:59.781Z]
[vcs 2018-11-14T21:11:59.781Z] adding changesets
[vcs 2018-11-14T21:11:59.782Z]
[vcs 2018-11-14T21:11:59.783Z] changesets [==============================>                               ] 1/2
[vcs 2018-11-14T21:11:59.783Z]
[vcs 2018-11-14T21:11:59.783Z] adding manifests
[vcs 2018-11-14T21:11:59.813Z] adding file changes
[vcs 2018-11-14T21:11:59.822Z] added 2 changesets with 4 changes to 4 files (+1 heads)
[vcs 2018-11-14T21:11:59.847Z] new changesets f8f2c4c13360:6926e117b97c
[vcs 2018-11-14T21:12:04.110Z] (warning: large working directory being used without fsmonitor enabled; enable fsmonitor to improve performance; see "hg help -e fsmonitor")
[vcs 2018-11-14T21:12:05.059Z]
[vcs 2018-11-14T21:12:06.078Z] updating [                                                      ]    100/258996
[vcs 2018-11-14T21:12:07.117Z] updating [                                                ]   2800/258996 1m37s
[vcs 2018-11-14T21:12:08.121Z] updating [>                                               ]   5600/258996 1m35s
[vcs 2018-11-14T21:12:09.142Z] updating [>                                               ]   8200/258996 1m35s
[vcs 2018-11-14T21:12:10.203Z] updating [=>                                              ]  10900/258996 1m34s
[vcs 2018-11-14T21:12:11.257Z] updating [=>                                              ]  14000/258996 1m31s
[vcs 2018-11-14T21:12:12.333Z] updating [==>                                             ]  17400/258996 1m27s
[vcs 2018-11-14T21:12:13.384Z] updating [==>                                             ]  20400/258996 1m26s
[vcs 2018-11-14T21:12:14.422Z] updating [===>                                            ]  23300/258996 1m25s
[vcs 2018-11-14T21:12:15.448Z] updating [===>                                            ]  26900/258996 1m22s
[vcs 2018-11-14T21:12:16.453Z] updating [====>                                           ]  30300/258996 1m19s
[vcs 2018-11-14T21:12:17.455Z] updating [=====>                                          ]  33100/258996 1m18s
[vcs 2018-11-14T21:12:18.465Z] updating [=====>                                          ]  36500/258996 1m16s
[vcs 2018-11-14T21:12:19.477Z] updating [======>                                         ]  40400/258996 1m13s
[vcs 2018-11-14T21:12:20.573Z] updating [=======>                                        ]  43800/258996 1m11s
[vcs 2018-11-14T21:12:21.627Z] updating [=======>                                        ]  46900/258996 1m11s
[vcs 2018-11-14T21:12:22.674Z] updating [========>                                       ]  50000/258996 1m10s
[vcs 2018-11-14T21:12:23.714Z] updating [========>                                       ]  53200/258996 1m09s
[vcs 2018-11-14T21:12:24.744Z] updating [=========>                                      ]  56300/258996 1m08s
[vcs 2018-11-14T21:12:25.800Z] updating [==========>                                     ]  60000/258996 1m06s
[vcs 2018-11-14T21:12:26.826Z] updating [==========>                                     ]  63000/258996 1m05s
[vcs 2018-11-14T21:12:27.873Z] updating [===========>                                    ]  66300/258996 1m04s
[vcs 2018-11-14T21:12:28.880Z] updating [===========>                                    ]  69600/258996 1m03s
[vcs 2018-11-14T21:12:29.881Z] updating [============>                                   ]  72900/258996 1m01s
[vcs 2018-11-14T21:12:30.893Z] updating [=============>                                  ]  76000/258996 1m00s
[vcs 2018-11-14T21:12:31.893Z] updating [==============>                                   ]  79000/258996 59s
[vcs 2018-11-14T21:12:32.902Z] updating [==============>                                   ]  82000/258996 58s
[vcs 2018-11-14T21:12:33.905Z] updating [===============>                                  ]  85200/258996 57s
[vcs 2018-11-14T21:12:34.937Z] updating [================>                                 ]  88300/258996 56s
[vcs 2018-11-14T21:12:35.939Z] updating [================>                                 ]  91500/258996 55s
[vcs 2018-11-14T21:12:36.967Z] updating [=================>                                ]  94800/258996 54s
[vcs 2018-11-14T21:12:37.981Z] updating [=================>                                ]  97900/258996 53s
[vcs 2018-11-14T21:12:39.014Z] updating [==================>                               ] 101000/258996 52s
[vcs 2018-11-14T21:12:40.023Z] updating [===================>                              ] 104200/258996 51s
[vcs 2018-11-14T21:12:41.067Z] updating [===================>                              ] 106700/258996 50s
[vcs 2018-11-14T21:12:42.074Z] updating [====================>                             ] 110800/258996 49s
[vcs 2018-11-14T21:12:43.088Z] updating [=====================>                            ] 115100/258996 47s
[vcs 2018-11-14T21:12:44.116Z] updating [=====================>                            ] 118600/258996 46s
[vcs 2018-11-14T21:12:45.135Z] updating [======================>                           ] 122500/258996 44s
[vcs 2018-11-14T21:12:46.141Z] updating [=======================>                          ] 126200/258996 43s
[vcs 2018-11-14T21:12:47.212Z] updating [=======================>                          ] 129300/258996 42s
[vcs 2018-11-14T21:12:48.228Z] updating [========================>                         ] 132600/258996 41s
[vcs 2018-11-14T21:12:49.292Z] updating [=========================>                        ] 135400/258996 40s
[vcs 2018-11-14T21:12:50.321Z] updating [=========================>                        ] 138200/258996 39s
[vcs 2018-11-14T21:12:51.325Z] updating [==========================>                       ] 141200/258996 38s
[vcs 2018-11-14T21:12:52.339Z] updating [==========================>                       ] 142900/258996 38s
[vcs 2018-11-14T21:12:53.391Z] updating [===========================>                      ] 145200/258996 38s
[vcs 2018-11-14T21:12:54.399Z] updating [===========================>                      ] 148500/258996 36s
[vcs 2018-11-14T21:12:55.412Z] updating [============================>                     ] 152000/258996 35s
[vcs 2018-11-14T21:12:56.452Z] updating [=============================>                    ] 155400/258996 34s
[vcs 2018-11-14T21:12:57.630Z] updating [=============================>                    ] 158700/258996 33s
[vcs 2018-11-14T21:12:58.656Z] updating [==============================>                   ] 162200/258996 32s
[vcs 2018-11-14T21:12:59.702Z] updating [===============================>                  ] 166100/258996 30s
[vcs 2018-11-14T21:13:00.731Z] updating [===============================>                  ] 170000/258996 29s
[vcs 2018-11-14T21:13:01.744Z] updating [================================>                 ] 174200/258996 28s
[vcs 2018-11-14T21:13:02.750Z] updating [=================================>                ] 178200/258996 26s
[vcs 2018-11-14T21:13:03.766Z] updating [==================================>               ] 181900/258996 25s
[vcs 2018-11-14T21:13:04.774Z] updating [==================================>               ] 185600/258996 24s
[vcs 2018-11-14T21:13:05.779Z] updating [===================================>              ] 189700/258996 22s
[vcs 2018-11-14T21:13:06.803Z] updating [====================================>             ] 193900/258996 21s
[vcs 2018-11-14T21:13:07.840Z] updating [=====================================>            ] 197900/258996 20s
[vcs 2018-11-14T21:13:08.841Z] updating [=====================================>            ] 201600/258996 18s
[vcs 2018-11-14T21:13:09.873Z] updating [======================================>           ] 205700/258996 17s
[vcs 2018-11-14T21:13:10.896Z] updating [=======================================>          ] 209700/258996 16s
[vcs 2018-11-14T21:13:11.906Z] updating [========================================>         ] 213700/258996 14s
[vcs 2018-11-14T21:13:12.922Z] updating [========================================>         ] 217300/258996 13s
[vcs 2018-11-14T21:13:13.937Z] updating [=========================================>        ] 220500/258996 12s
[vcs 2018-11-14T21:13:14.954Z] updating [==========================================>       ] 224100/258996 11s
[vcs 2018-11-14T21:13:15.957Z] updating [==========================================>       ] 227900/258996 10s
[vcs 2018-11-14T21:13:17.039Z] updating [===========================================>      ] 231600/258996 09s
[vcs 2018-11-14T21:13:18.050Z] updating [============================================>     ] 235000/258996 08s
[vcs 2018-11-14T21:13:19.074Z] updating [=============================================>    ] 238600/258996 07s
[vcs 2018-11-14T21:13:20.102Z] updating [=============================================>    ] 242100/258996 06s
[vcs 2018-11-14T21:13:21.127Z] updating [==============================================>   ] 245800/258996 05s
[vcs 2018-11-14T21:13:22.140Z] updating [===============================================>  ] 249200/258996 03s
[vcs 2018-11-14T21:13:23.174Z] updating [===============================================>  ] 251400/258996 03s
[vcs 2018-11-14T21:13:24.259Z] updating [================================================> ] 254649/258996 02s
[vcs 2018-11-14T21:13:25.294Z] updating [================================================> ] 255698/258996 02s
[vcs 2018-11-14T21:13:26.512Z] updating [================================================> ] 256598/258996 01s
[vcs 2018-11-14T21:13:27.520Z] updating [================================================> ] 257547/258996 01s
[vcs 2018-11-14T21:13:27.979Z] updating [================================================> ] 258547/258996 01s
[vcs 2018-11-14T21:13:38.214Z]
[vcs 2018-11-14T21:13:38.214Z] 258996 files updated, 0 files merged, 0 files removed, 0 files unresolved
[vcs 2018-11-14T21:13:38.463Z] updated to 6926e117b97cd120f5de0be2ab3bff7153f10a78
[vcs 2018-11-14T21:13:38.469Z] PERFHERDER_DATA: {"framework": {"name": "vcs"}, "suites": [{"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "clone", "shouldAlert": false, "subtests": [], "value": 156.62339401245117}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "pull", "shouldAlert": false, "subtests": [], "value": 13.032690048217773}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "update", "shouldAlert": false, "subtests": [], "value": 98.61538600921631}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "overall", "shouldAlert": false, "subtests": [], "value": 270.7935130596161}]}
[vcs 2018-11-14T21:13:38.917Z] TinderboxPrint:<a href=https://hg.mozilla.org/try/rev/6926e117b97cd120f5de0be2ab3bff7153f10a78 title='Built from try revision 6926e117b97cd120f5de0be2ab3bff7153f10a78'>6926e117b97cd120f5de0be2ab3bff7153f10a78</a>
[task 2018-11-14T21:13:38.917Z] executing ['bash', '-cx', 'cd /builds/worker/checkouts/gecko/ && cp -r /build/node_modules_eslint node_modules && ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules && ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules && ./mach lint -l eslint -f treeherder --quiet\\n']
[task 2018-11-14T21:13:38.920Z] + cd /builds/worker/checkouts/gecko/
[task 2018-11-14T21:13:38.920Z] + cp -r /build/node_modules_eslint node_modules
[task 2018-11-14T21:13:40.120Z] + ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules
[task 2018-11-14T21:13:40.123Z] + ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules
[task 2018-11-14T21:13:40.124Z] + ./mach lint -l eslint -f treeherder --quiet
[task 2018-11-14T21:13:40.989Z] New python executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python2.7
[task 2018-11-14T21:13:40.990Z] Also creating executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python
[task 2018-11-14T21:13:42.910Z] Installing setuptools, pip, wheel...done.
[task 2018-11-14T21:13:44.179Z] running build_ext
[task 2018-11-14T21:13:44.179Z] building 'psutil._psutil_linux' extension
[task 2018-11-14T21:13:44.179Z] creating build
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so
[task 2018-11-14T21:13:44.180Z] building 'psutil._psutil_posix' extension
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so -> psutil
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so -> psutil
[task 2018-11-14T21:13:44.180Z]
[task 2018-11-14T21:13:44.180Z] Error processing command. Ignoring because optional. (optional:packages.txt:comm/build/virtualenv_packages.txt)
[task 2018-11-14T21:19:41.952Z] No lint issues found.
[taskcluster 2018-11-14 21:19:42.433Z] === Task Finished ===
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds\`
  }
}`,...(Vr=(Kr=n1.parameters)==null?void 0:Kr.docs)==null?void 0:Vr.source}}};var Yr,Gr,Xr;r1.parameters={...r1.parameters,docs:{...(Yr=r1.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 400,
    wrapLines: true,
    text: \`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
[taskcluster 2018-11-14 21:08:32.452Z] Worker ID: i-010f9c4a4b041ee6c
[taskcluster 2018-11-14 21:08:32.452Z] Worker Group: us-east-1
[taskcluster 2018-11-14 21:08:32.453Z] Worker Node Type: m3.xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Worker Type: gecko-t-linux-xlarge
[taskcluster 2018-11-14 21:08:32.453Z] Public IP: 54.172.91.38
[taskcluster 2018-11-14 21:08:32.453Z] using cache "level-1-checkouts-v3-2f7c6cb7dd63ce826370" -> /builds/worker/checkouts

[taskcluster 2018-11-14 21:08:33.314Z] Downloading artifact "public/image.tar.zst" from task ID: fZ80-a7IT_yOpvW_jc_HPg.
[taskcluster 2018-11-14 21:08:38.316Z] Download Progress: 67.10%
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded artifact successfully.
[taskcluster 2018-11-14 21:08:41.077Z] Downloaded 265.212 mb
[taskcluster 2018-11-14 21:08:41.077Z] Decompressing downloaded image
[taskcluster 2018-11-14 21:08:43.321Z] Loading docker image from downloaded archive.
[taskcluster 2018-11-14 21:09:06.885Z] Image 'public/image.tar.zst' from task 'fZ80-a7IT_yOpvW_jc_HPg' loaded.  Using image ID sha256:4f1121f66938146cc05dfe474f399a631816e2130c04562187fd96e1085e0433.
[taskcluster 2018-11-14 21:09:07.046Z] === Task Starting ===
[setup 2018-11-14T21:09:07.575Z] run-task started in /builds/worker
[cache 2018-11-14T21:09:07.579Z] cache /builds/worker/checkouts exists; requirements: gid=1000 uid=1000 version=1
[volume 2018-11-14T21:09:07.579Z] changing ownership of volume /builds/worker/.cache to 1000:1000
[volume 2018-11-14T21:09:07.579Z] volume /builds/worker/checkouts is a cache
[setup 2018-11-14T21:09:07.580Z] running as worker:worker
[vcs 2018-11-14T21:09:07.580Z] executing ['hg', 'robustcheckout', '--sharebase', '/builds/worker/checkouts/hg-store', '--purge', '--upstream', 'https://hg.mozilla.org/mozilla-unified', '--revision', '6926e117b97cd120f5de0be2ab3bff7153f10a78', 'https://hg.mozilla.org/try', '/builds/worker/checkouts/gecko']
[vcs 2018-11-14T21:09:07.670Z] (using Mercurial 4.7.1)
[vcs 2018-11-14T21:09:07.671Z] ensuring https://hg.mozilla.org/try@6926e117b97cd120f5de0be2ab3bff7153f10a78 is available at /builds/worker/checkouts/gecko
[vcs 2018-11-14T21:09:08.721Z] (cloning from upstream repo https://hg.mozilla.org/mozilla-unified)
[vcs 2018-11-14T21:09:09.000Z] (sharing from new pooled repository 8ba995b74e18334ab3707f27e9eb8f4e37ba3d29)
[vcs 2018-11-14T21:09:09.516Z] applying clone bundle from https://s3-external-1.amazonaws.com/moz-hg-bundles-us-east-1/mozilla-unified/d3f4d556a89d3e5e72749314a0cf81d942fafc13.packed1.hg
[vcs 2018-11-14T21:09:09.622Z] 478890 files to transfer, 2.58 GB of data
[vcs 2018-11-14T21:09:11.623Z]
[vcs 2018-11-14T21:09:12.626Z] clone [>                                          ]   67491620/2774698696 1m21s
[vcs 2018-11-14T21:09:13.625Z] clone [>                                          ]  106279767/2774698696 1m16s
[vcs 2018-11-14T21:09:14.625Z] clone [=>                                         ]  146574164/2774698696 1m12s
[vcs 2018-11-14T21:09:15.626Z] clone [=>                                         ]  171690108/2774698696 1m16s
[vcs 2018-11-14T21:09:16.626Z] clone [=>                                         ]  193265720/2774698696 1m21s
[vcs 2018-11-14T21:09:17.626Z] clone [==>                                        ]  225280444/2774698696 1m20s
[vcs 2018-11-14T21:09:18.627Z] clone [==>                                        ]  257914310/2774698696 1m19s
[vcs 2018-11-14T21:09:19.628Z] clone [===>                                       ]  291327117/2774698696 1m17s
[vcs 2018-11-14T21:09:20.628Z] clone [====>                                      ]  338022905/2774698696 1m13s
[vcs 2018-11-14T21:09:21.629Z] clone [====>                                      ]  358720039/2774698696 1m15s
[vcs 2018-11-14T21:09:22.629Z] clone [=====>                                     ]  398228450/2774698696 1m12s
[vcs 2018-11-14T21:09:23.629Z] clone [=====>                                     ]  437631658/2774698696 1m10s
[vcs 2018-11-14T21:09:24.632Z] clone [======>                                    ]  454641086/2774698696 1m12s
[vcs 2018-11-14T21:09:25.633Z] clone [======>                                    ]  476720904/2774698696 1m13s
[vcs 2018-11-14T21:09:26.632Z] clone [======>                                    ]  503457966/2774698696 1m13s
[vcs 2018-11-14T21:09:27.632Z] clone [=======>                                   ]  530000110/2774698696 1m13s
[vcs 2018-11-14T21:09:28.635Z] clone [=======>                                   ]  548996071/2774698696 1m14s
[vcs 2018-11-14T21:09:29.677Z] clone [=======>                                   ]  556249797/2774698696 1m16s
[vcs 2018-11-14T21:09:30.678Z] clone [=======>                                   ]  575477464/2774698696 1m17s
[vcs 2018-11-14T21:09:31.678Z] clone [========>                                  ]  618973849/2774698696 1m14s
[vcs 2018-11-14T21:09:32.678Z] clone [=========>                                 ]  666030876/2774698696 1m10s
[vcs 2018-11-14T21:09:33.678Z] clone [=========>                                 ]  685719380/2774698696 1m11s
[vcs 2018-11-14T21:09:34.679Z] clone [=========>                                 ]  701005022/2774698696 1m12s
[vcs 2018-11-14T21:09:35.678Z] clone [==========>                                ]  717606060/2774698696 1m12s
[vcs 2018-11-14T21:09:36.679Z] clone [==========>                                ]  740693499/2774698696 1m12s
[vcs 2018-11-14T21:09:37.679Z] clone [==========>                                ]  766929304/2774698696 1m11s
[vcs 2018-11-14T21:09:38.679Z] clone [===========>                               ]  792545880/2774698696 1m11s
[vcs 2018-11-14T21:09:39.680Z] clone [===========>                               ]  811996205/2774698696 1m11s
[vcs 2018-11-14T21:09:40.680Z] clone [===========>                               ]  836938668/2774698696 1m10s
[vcs 2018-11-14T21:09:41.680Z] clone [============>                              ]  864657484/2774698696 1m09s
[vcs 2018-11-14T21:09:42.680Z] clone [============>                              ]  891236611/2774698696 1m08s
[vcs 2018-11-14T21:09:43.682Z] clone [=============>                             ]  926041406/2774698696 1m06s
[vcs 2018-11-14T21:09:44.682Z] clone [=============>                             ]  930498893/2774698696 1m08s
[vcs 2018-11-14T21:09:45.682Z] clone [=============>                             ]  956331306/2774698696 1m07s
[vcs 2018-11-14T21:09:46.682Z] clone [==============>                            ] 1002140521/2774698696 1m04s
[vcs 2018-11-14T21:09:47.682Z] clone [==============>                            ] 1012508363/2774698696 1m05s
[vcs 2018-11-14T21:09:48.682Z] clone [==============>                            ] 1017437926/2774698696 1m06s
[vcs 2018-11-14T21:09:49.682Z] clone [==============>                            ] 1022219365/2774698696 1m07s
[vcs 2018-11-14T21:09:50.682Z] clone [==============>                            ] 1025786907/2774698696 1m09s
[vcs 2018-11-14T21:09:51.683Z] clone [==============>                            ] 1028794844/2774698696 1m10s
[vcs 2018-11-14T21:09:52.683Z] clone [===============>                           ] 1034819687/2774698696 1m11s
[vcs 2018-11-14T21:09:53.683Z] clone [===============>                           ] 1039912128/2774698696 1m12s
[vcs 2018-11-14T21:09:54.683Z] clone [===============>                           ] 1046252425/2774698696 1m13s
[vcs 2018-11-14T21:09:55.683Z] clone [===============>                           ] 1066134534/2774698696 1m13s
[vcs 2018-11-14T21:09:56.685Z] clone [===============>                           ] 1087894225/2774698696 1m12s
[vcs 2018-11-14T21:09:57.684Z] clone [================>                          ] 1107758509/2774698696 1m11s
[vcs 2018-11-14T21:09:58.684Z] clone [================>                          ] 1114750252/2774698696 1m12s
[vcs 2018-11-14T21:09:59.684Z] clone [================>                          ] 1129561806/2774698696 1m12s
[vcs 2018-11-14T21:10:00.684Z] clone [================>                          ] 1135341160/2774698696 1m13s
[vcs 2018-11-14T21:10:01.684Z] clone [================>                          ] 1144287548/2774698696 1m13s
[vcs 2018-11-14T21:10:02.684Z] clone [=================>                         ] 1170279456/2774698696 1m12s
[vcs 2018-11-14T21:10:03.685Z] clone [=================>                         ] 1192722867/2774698696 1m11s
[vcs 2018-11-14T21:10:04.685Z] clone [=================>                         ] 1214537175/2774698696 1m10s
[vcs 2018-11-14T21:10:05.685Z] clone [==================>                        ] 1229775369/2774698696 1m10s
[vcs 2018-11-14T21:10:06.685Z] clone [==================>                        ] 1248697180/2774698696 1m09s
[vcs 2018-11-14T21:10:07.862Z] clone [==================>                        ] 1269071662/2774698696 1m08s
[vcs 2018-11-14T21:10:08.862Z] clone [===================>                       ] 1296830077/2774698696 1m07s
[vcs 2018-11-14T21:10:09.862Z] clone [===================>                       ] 1321742345/2774698696 1m06s
[vcs 2018-11-14T21:10:10.862Z] clone [===================>                       ] 1346954223/2774698696 1m04s
[vcs 2018-11-14T21:10:11.862Z] clone [====================>                      ] 1367819568/2774698696 1m03s
[vcs 2018-11-14T21:10:12.864Z] clone [====================>                      ] 1391377778/2774698696 1m02s
[vcs 2018-11-14T21:10:13.865Z] clone [====================>                      ] 1416584059/2774698696 1m01s
[vcs 2018-11-14T21:10:14.868Z] clone [=====================>                     ] 1445335587/2774698696 1m00s
[vcs 2018-11-14T21:10:15.865Z] clone [=======================>                     ] 1513951972/2774698696 55s
[vcs 2018-11-14T21:10:16.865Z] clone [========================>                    ] 1562297481/2774698696 52s
[vcs 2018-11-14T21:10:17.970Z] clone [========================>                    ] 1599653315/2774698696 50s
[vcs 2018-11-14T21:10:18.971Z] clone [=========================>                   ] 1643817175/2774698696 47s
[vcs 2018-11-14T21:10:19.971Z] clone [==========================>                  ] 1675753258/2774698696 46s
[vcs 2018-11-14T21:10:20.971Z] clone [==========================>                  ] 1697761018/2774698696 45s
[vcs 2018-11-14T21:10:21.972Z] clone [==========================>                  ] 1716687932/2774698696 44s
[vcs 2018-11-14T21:10:22.972Z] clone [===========================>                 ] 1761680403/2774698696 42s
[vcs 2018-11-14T21:10:23.972Z] clone [===========================>                 ] 1763511023/2774698696 42s
[vcs 2018-11-14T21:10:24.972Z] clone [===========================>                 ] 1769106587/2774698696 43s
[vcs 2018-11-14T21:10:25.972Z] clone [===========================>                 ] 1773288870/2774698696 43s
[vcs 2018-11-14T21:10:26.972Z] clone [===========================>                 ] 1778806084/2774698696 43s
[vcs 2018-11-14T21:10:27.972Z] clone [===========================>                 ] 1780338054/2774698696 44s
[vcs 2018-11-14T21:10:28.972Z] clone [===========================>                 ] 1783985855/2774698696 44s
[vcs 2018-11-14T21:10:29.972Z] clone [===========================>                 ] 1788136760/2774698696 45s
[vcs 2018-11-14T21:10:30.972Z] clone [============================>                ] 1794430357/2774698696 45s
[vcs 2018-11-14T21:10:31.972Z] clone [============================>                ] 1800555329/2774698696 45s
[vcs 2018-11-14T21:10:32.972Z] clone [============================>                ] 1808119505/2774698696 45s
[vcs 2018-11-14T21:10:33.972Z] clone [============================>                ] 1820816366/2774698696 45s
[vcs 2018-11-14T21:10:34.973Z] clone [============================>                ] 1831494668/2774698696 45s
[vcs 2018-11-14T21:10:35.973Z] clone [============================>                ] 1836162975/2774698696 45s
[vcs 2018-11-14T21:10:36.973Z] clone [=============================>               ] 1854002346/2774698696 45s
[vcs 2018-11-14T21:10:37.973Z] clone [=============================>               ] 1860466166/2774698696 45s
[vcs 2018-11-14T21:10:38.973Z] clone [=============================>               ] 1877930700/2774698696 44s
[vcs 2018-11-14T21:10:39.973Z] clone [=============================>               ] 1883326687/2774698696 44s
[vcs 2018-11-14T21:10:40.973Z] clone [=============================>               ] 1899828059/2774698696 44s
[vcs 2018-11-14T21:10:41.973Z] clone [==============================>              ] 1913964212/2774698696 43s
[vcs 2018-11-14T21:10:42.973Z] clone [==============================>              ] 1933092528/2774698696 42s
[vcs 2018-11-14T21:10:43.973Z] clone [==============================>              ] 1953767204/2774698696 41s
[vcs 2018-11-14T21:10:44.973Z] clone [==============================>              ] 1971632105/2774698696 40s
[vcs 2018-11-14T21:10:45.974Z] clone [===============================>             ] 1987729693/2774698696 40s
[vcs 2018-11-14T21:10:46.974Z] clone [===============================>             ] 2012095873/2774698696 38s
[vcs 2018-11-14T21:10:47.974Z] clone [================================>            ] 2036880640/2774698696 37s
[vcs 2018-11-14T21:10:48.974Z] clone [================================>            ] 2063644564/2774698696 36s
[vcs 2018-11-14T21:10:49.974Z] clone [================================>            ] 2092201306/2774698696 34s
[vcs 2018-11-14T21:10:50.975Z] clone [=================================>           ] 2112958191/2774698696 33s
[vcs 2018-11-14T21:10:51.975Z] clone [=================================>           ] 2129736646/2774698696 32s
[vcs 2018-11-14T21:10:52.978Z] clone [==================================>          ] 2160844802/2774698696 30s
[vcs 2018-11-14T21:10:53.976Z] clone [==================================>          ] 2192312521/2774698696 29s
[vcs 2018-11-14T21:10:54.978Z] clone [===================================>         ] 2262137673/2774698696 24s
[vcs 2018-11-14T21:10:55.983Z] clone [=====================================>       ] 2371320649/2774698696 18s
[vcs 2018-11-14T21:10:56.979Z] clone [======================================>      ] 2460842825/2774698696 14s
[vcs 2018-11-14T21:10:57.982Z] clone [========================================>    ] 2562423625/2774698696 09s
[vcs 2018-11-14T21:10:58.983Z] clone [==========================================>  ] 2651822447/2774698696 05s
[vcs 2018-11-14T21:10:59.782Z] clone [===========================================> ] 2714343791/2774698696 03s
[vcs 2018-11-14T21:10:59.783Z]
[vcs 2018-11-14T21:10:59.783Z] transferred 2.58 GB in 110.2 seconds (24.0 MB/sec)
[vcs 2018-11-14T21:11:00.268Z] finished applying clone bundle
[vcs 2018-11-14T21:11:01.445Z] searching for changes
[vcs 2018-11-14T21:11:01.999Z] adding changesets
[vcs 2018-11-14T21:11:02.072Z]
[vcs 2018-11-14T21:11:02.146Z] changesets [                                                          ]   1/314
[vcs 2018-11-14T21:11:02.146Z]
[vcs 2018-11-14T21:11:02.146Z] adding manifests
[vcs 2018-11-14T21:11:02.477Z] adding file changes
[vcs 2018-11-14T21:11:03.050Z] added 314 changesets with 1315 changes to 1067 files
[vcs 2018-11-14T21:11:44.403Z] new changesets 80b0b8b446fd:7585190c5954
[vcs 2018-11-14T21:11:44.999Z] searching for changes
[vcs 2018-11-14T21:11:45.095Z] no changes found
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark aurora
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark beta
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark central
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr10
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr17
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr24
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr31
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr38
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr45
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr52
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark esr60
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark fx-team
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark inbound
[vcs 2018-11-14T21:11:45.340Z] adding remote bookmark release
[vcs 2018-11-14T21:11:46.045Z] (pulling to obtain 6926e117b97cd120f5de0be2ab3bff7153f10a78)
[vcs 2018-11-14T21:11:48.984Z] searching for changes
[vcs 2018-11-14T21:11:50.797Z]
[vcs 2018-11-14T21:11:52.672Z] searching [ <=>                                                             ] 2
[vcs 2018-11-14T21:11:54.295Z] searching [  <=>                                                            ] 3
[vcs 2018-11-14T21:11:59.781Z]
[vcs 2018-11-14T21:11:59.781Z] adding changesets
[vcs 2018-11-14T21:11:59.782Z]
[vcs 2018-11-14T21:11:59.783Z] changesets [==============================>                               ] 1/2
[vcs 2018-11-14T21:11:59.783Z]
[vcs 2018-11-14T21:11:59.783Z] adding manifests
[vcs 2018-11-14T21:11:59.813Z] adding file changes
[vcs 2018-11-14T21:11:59.822Z] added 2 changesets with 4 changes to 4 files (+1 heads)
[vcs 2018-11-14T21:11:59.847Z] new changesets f8f2c4c13360:6926e117b97c
[vcs 2018-11-14T21:12:04.110Z] (warning: large working directory being used without fsmonitor enabled; enable fsmonitor to improve performance; see "hg help -e fsmonitor")
[vcs 2018-11-14T21:12:05.059Z]
[vcs 2018-11-14T21:12:06.078Z] updating [                                                      ]    100/258996
[vcs 2018-11-14T21:12:07.117Z] updating [                                                ]   2800/258996 1m37s
[vcs 2018-11-14T21:12:08.121Z] updating [>                                               ]   5600/258996 1m35s
[vcs 2018-11-14T21:12:09.142Z] updating [>                                               ]   8200/258996 1m35s
[vcs 2018-11-14T21:12:10.203Z] updating [=>                                              ]  10900/258996 1m34s
[vcs 2018-11-14T21:12:11.257Z] updating [=>                                              ]  14000/258996 1m31s
[vcs 2018-11-14T21:12:12.333Z] updating [==>                                             ]  17400/258996 1m27s
[vcs 2018-11-14T21:12:13.384Z] updating [==>                                             ]  20400/258996 1m26s
[vcs 2018-11-14T21:12:14.422Z] updating [===>                                            ]  23300/258996 1m25s
[vcs 2018-11-14T21:12:15.448Z] updating [===>                                            ]  26900/258996 1m22s
[vcs 2018-11-14T21:12:16.453Z] updating [====>                                           ]  30300/258996 1m19s
[vcs 2018-11-14T21:12:17.455Z] updating [=====>                                          ]  33100/258996 1m18s
[vcs 2018-11-14T21:12:18.465Z] updating [=====>                                          ]  36500/258996 1m16s
[vcs 2018-11-14T21:12:19.477Z] updating [======>                                         ]  40400/258996 1m13s
[vcs 2018-11-14T21:12:20.573Z] updating [=======>                                        ]  43800/258996 1m11s
[vcs 2018-11-14T21:12:21.627Z] updating [=======>                                        ]  46900/258996 1m11s
[vcs 2018-11-14T21:12:22.674Z] updating [========>                                       ]  50000/258996 1m10s
[vcs 2018-11-14T21:12:23.714Z] updating [========>                                       ]  53200/258996 1m09s
[vcs 2018-11-14T21:12:24.744Z] updating [=========>                                      ]  56300/258996 1m08s
[vcs 2018-11-14T21:12:25.800Z] updating [==========>                                     ]  60000/258996 1m06s
[vcs 2018-11-14T21:12:26.826Z] updating [==========>                                     ]  63000/258996 1m05s
[vcs 2018-11-14T21:12:27.873Z] updating [===========>                                    ]  66300/258996 1m04s
[vcs 2018-11-14T21:12:28.880Z] updating [===========>                                    ]  69600/258996 1m03s
[vcs 2018-11-14T21:12:29.881Z] updating [============>                                   ]  72900/258996 1m01s
[vcs 2018-11-14T21:12:30.893Z] updating [=============>                                  ]  76000/258996 1m00s
[vcs 2018-11-14T21:12:31.893Z] updating [==============>                                   ]  79000/258996 59s
[vcs 2018-11-14T21:12:32.902Z] updating [==============>                                   ]  82000/258996 58s
[vcs 2018-11-14T21:12:33.905Z] updating [===============>                                  ]  85200/258996 57s
[vcs 2018-11-14T21:12:34.937Z] updating [================>                                 ]  88300/258996 56s
[vcs 2018-11-14T21:12:35.939Z] updating [================>                                 ]  91500/258996 55s
[vcs 2018-11-14T21:12:36.967Z] updating [=================>                                ]  94800/258996 54s
[vcs 2018-11-14T21:12:37.981Z] updating [=================>                                ]  97900/258996 53s
[vcs 2018-11-14T21:12:39.014Z] updating [==================>                               ] 101000/258996 52s
[vcs 2018-11-14T21:12:40.023Z] updating [===================>                              ] 104200/258996 51s
[vcs 2018-11-14T21:12:41.067Z] updating [===================>                              ] 106700/258996 50s
[vcs 2018-11-14T21:12:42.074Z] updating [====================>                             ] 110800/258996 49s
[vcs 2018-11-14T21:12:43.088Z] updating [=====================>                            ] 115100/258996 47s
[vcs 2018-11-14T21:12:44.116Z] updating [=====================>                            ] 118600/258996 46s
[vcs 2018-11-14T21:12:45.135Z] updating [======================>                           ] 122500/258996 44s
[vcs 2018-11-14T21:12:46.141Z] updating [=======================>                          ] 126200/258996 43s
[vcs 2018-11-14T21:12:47.212Z] updating [=======================>                          ] 129300/258996 42s
[vcs 2018-11-14T21:12:48.228Z] updating [========================>                         ] 132600/258996 41s
[vcs 2018-11-14T21:12:49.292Z] updating [=========================>                        ] 135400/258996 40s
[vcs 2018-11-14T21:12:50.321Z] updating [=========================>                        ] 138200/258996 39s
[vcs 2018-11-14T21:12:51.325Z] updating [==========================>                       ] 141200/258996 38s
[vcs 2018-11-14T21:12:52.339Z] updating [==========================>                       ] 142900/258996 38s
[vcs 2018-11-14T21:12:53.391Z] updating [===========================>                      ] 145200/258996 38s
[vcs 2018-11-14T21:12:54.399Z] updating [===========================>                      ] 148500/258996 36s
[vcs 2018-11-14T21:12:55.412Z] updating [============================>                     ] 152000/258996 35s
[vcs 2018-11-14T21:12:56.452Z] updating [=============================>                    ] 155400/258996 34s
[vcs 2018-11-14T21:12:57.630Z] updating [=============================>                    ] 158700/258996 33s
[vcs 2018-11-14T21:12:58.656Z] updating [==============================>                   ] 162200/258996 32s
[vcs 2018-11-14T21:12:59.702Z] updating [===============================>                  ] 166100/258996 30s
[vcs 2018-11-14T21:13:00.731Z] updating [===============================>                  ] 170000/258996 29s
[vcs 2018-11-14T21:13:01.744Z] updating [================================>                 ] 174200/258996 28s
[vcs 2018-11-14T21:13:02.750Z] updating [=================================>                ] 178200/258996 26s
[vcs 2018-11-14T21:13:03.766Z] updating [==================================>               ] 181900/258996 25s
[vcs 2018-11-14T21:13:04.774Z] updating [==================================>               ] 185600/258996 24s
[vcs 2018-11-14T21:13:05.779Z] updating [===================================>              ] 189700/258996 22s
[vcs 2018-11-14T21:13:06.803Z] updating [====================================>             ] 193900/258996 21s
[vcs 2018-11-14T21:13:07.840Z] updating [=====================================>            ] 197900/258996 20s
[vcs 2018-11-14T21:13:08.841Z] updating [=====================================>            ] 201600/258996 18s
[vcs 2018-11-14T21:13:09.873Z] updating [======================================>           ] 205700/258996 17s
[vcs 2018-11-14T21:13:10.896Z] updating [=======================================>          ] 209700/258996 16s
[vcs 2018-11-14T21:13:11.906Z] updating [========================================>         ] 213700/258996 14s
[vcs 2018-11-14T21:13:12.922Z] updating [========================================>         ] 217300/258996 13s
[vcs 2018-11-14T21:13:13.937Z] updating [=========================================>        ] 220500/258996 12s
[vcs 2018-11-14T21:13:14.954Z] updating [==========================================>       ] 224100/258996 11s
[vcs 2018-11-14T21:13:15.957Z] updating [==========================================>       ] 227900/258996 10s
[vcs 2018-11-14T21:13:17.039Z] updating [===========================================>      ] 231600/258996 09s
[vcs 2018-11-14T21:13:18.050Z] updating [============================================>     ] 235000/258996 08s
[vcs 2018-11-14T21:13:19.074Z] updating [=============================================>    ] 238600/258996 07s
[vcs 2018-11-14T21:13:20.102Z] updating [=============================================>    ] 242100/258996 06s
[vcs 2018-11-14T21:13:21.127Z] updating [==============================================>   ] 245800/258996 05s
[vcs 2018-11-14T21:13:22.140Z] updating [===============================================>  ] 249200/258996 03s
[vcs 2018-11-14T21:13:23.174Z] updating [===============================================>  ] 251400/258996 03s
[vcs 2018-11-14T21:13:24.259Z] updating [================================================> ] 254649/258996 02s
[vcs 2018-11-14T21:13:25.294Z] updating [================================================> ] 255698/258996 02s
[vcs 2018-11-14T21:13:26.512Z] updating [================================================> ] 256598/258996 01s
[vcs 2018-11-14T21:13:27.520Z] updating [================================================> ] 257547/258996 01s
[vcs 2018-11-14T21:13:27.979Z] updating [================================================> ] 258547/258996 01s
[vcs 2018-11-14T21:13:38.214Z]
[vcs 2018-11-14T21:13:38.214Z] 258996 files updated, 0 files merged, 0 files removed, 0 files unresolved
[vcs 2018-11-14T21:13:38.463Z] updated to 6926e117b97cd120f5de0be2ab3bff7153f10a78
[vcs 2018-11-14T21:13:38.469Z] PERFHERDER_DATA: {"framework": {"name": "vcs"}, "suites": [{"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "clone", "shouldAlert": false, "subtests": [], "value": 156.62339401245117}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "pull", "shouldAlert": false, "subtests": [], "value": 13.032690048217773}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "update", "shouldAlert": false, "subtests": [], "value": 98.61538600921631}, {"extraOptions": ["m3.xlarge"], "lowerIsBetter": true, "name": "overall", "shouldAlert": false, "subtests": [], "value": 270.7935130596161}]}
[vcs 2018-11-14T21:13:38.917Z] TinderboxPrint:<a href=https://hg.mozilla.org/try/rev/6926e117b97cd120f5de0be2ab3bff7153f10a78 title='Built from try revision 6926e117b97cd120f5de0be2ab3bff7153f10a78'>6926e117b97cd120f5de0be2ab3bff7153f10a78</a>
[task 2018-11-14T21:13:38.917Z] executing ['bash', '-cx', 'cd /builds/worker/checkouts/gecko/ && cp -r /build/node_modules_eslint node_modules && ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules && ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules && ./mach lint -l eslint -f treeherder --quiet\\n']
[task 2018-11-14T21:13:38.920Z] + cd /builds/worker/checkouts/gecko/
[task 2018-11-14T21:13:38.920Z] + cp -r /build/node_modules_eslint node_modules
[task 2018-11-14T21:13:40.120Z] + ln -s ../tools/lint/eslint/eslint-plugin-mozilla node_modules
[task 2018-11-14T21:13:40.123Z] + ln -s ../tools/lint/eslint/eslint-plugin-spidermonkey-js node_modules
[task 2018-11-14T21:13:40.124Z] + ./mach lint -l eslint -f treeherder --quiet
[task 2018-11-14T21:13:40.989Z] New python executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python2.7
[task 2018-11-14T21:13:40.990Z] Also creating executable in /builds/worker/checkouts/gecko/obj-x86_64-pc-linux-gnu/_virtualenvs/init/bin/python
[task 2018-11-14T21:13:42.910Z] Installing setuptools, pip, wheel...done.
[task 2018-11-14T21:13:44.179Z] running build_ext
[task 2018-11-14T21:13:44.179Z] building 'psutil._psutil_linux' extension
[task 2018-11-14T21:13:44.179Z] creating build
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/temp.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7
[task 2018-11-14T21:13:44.179Z] creating build/lib.linux-x86_64-2.7/psutil
[task 2018-11-14T21:13:44.179Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o build/temp.linux-x86_64-2.7/psutil/_psutil_linux.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so
[task 2018-11-14T21:13:44.180Z] building 'psutil._psutil_posix' extension
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_common.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_common.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -fno-strict-aliasing -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=543 -DPSUTIL_LINUX=1 -I/usr/include/python2.7 -c psutil/_psutil_posix.c -o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o
[task 2018-11-14T21:13:44.180Z] x86_64-linux-gnu-gcc -pthread -shared -Wl,-O1 -Wl,-Bsymbolic-functions -Wl,-Bsymbolic-functions -Wl,-z,relro -fno-strict-aliasing -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security -Wl,-Bsymbolic-functions -Wl,-z,relro -Wdate-time -D_FORTIFY_SOURCE=2 -g -fstack-protector-strong -Wformat -Werror=format-security build/temp.linux-x86_64-2.7/psutil/_psutil_common.o build/temp.linux-x86_64-2.7/psutil/_psutil_posix.o -o build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_linux.so -> psutil
[task 2018-11-14T21:13:44.180Z] copying build/lib.linux-x86_64-2.7/psutil/_psutil_posix.so -> psutil
[task 2018-11-14T21:13:44.180Z]
[task 2018-11-14T21:13:44.180Z] Error processing command. Ignoring because optional. (optional:packages.txt:comm/build/virtualenv_packages.txt)
[task 2018-11-14T21:19:41.952Z] No lint issues found.
[taskcluster 2018-11-14 21:19:42.433Z] === Task Finished ===
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds\`
  }
}`,...(Xr=(Gr=r1.parameters)==null?void 0:Gr.docs)==null?void 0:Xr.source}}};var Jr,Qr,es;s1.parameters={...s1.parameters,docs:{...(Jr=s1.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
  args: {
    ...BaseStory,
    height: 400
  },
  render: args => {
    const createLines = (num: number, offset: number = 0) => {
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return \`Line: \${i}\\n\`;
      });
    };
    const [fetching, setFetching] = React.useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(1000);
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = React.useState(() => createLines(ITEM_BATCH_COUNT));
    const ref = React.useRef<LazyLog>(null);
    const fetchedCountRef = React.useRef(-1);
    const count = items.length;
    return <LazyLog {...args} ref={ref} onScroll={async () => {
      if (!ref.current || !ref.current.listRef.current) return;
      if (fetchedCountRef.current < count && ref.current.listRef.current.findEndIndex() + 50 > count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createLines(ITEM_BATCH_COUNT, prev.length)]);
      }
    }} loading={fetching} text={items.join("")}></LazyLog>;
  }
}`,...(es=(Qr=s1.parameters)==null?void 0:Qr.docs)==null?void 0:es.source}}};const vc=["TextLog","URLLog","ExternalMode","ClearMethod","ClickEvents","HtmlLinks","ScrollFollowForText","HighlightAndScrolling","LineWrapping","InfiniteScrolling"];export{Jt as ClearMethod,Qt as ClickEvents,Xt as ExternalMode,n1 as HighlightAndScrolling,e1 as HtmlLinks,s1 as InfiniteScrolling,r1 as LineWrapping,t1 as ScrollFollowForText,Yt as TextLog,Gt as URLLog,vc as __namedExportsOrder,gc as default};
