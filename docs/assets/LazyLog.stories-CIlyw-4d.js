import{j as g,r as _i}from"./index-epQJ8pRi.js";import{r as E,R as ee,g as Ti}from"./index-C5e9SFkp.js";import"./index-Ds-sVeaf.js";/**
 * @license
 * MIT License
 * 
 * Copyright (c) 2014-present, Lee Byron and other contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var d1="@@__IMMUTABLE_INDEXED__@@";function pe(e){return!!(e&&e[d1])}var p1="@@__IMMUTABLE_KEYED__@@";function D(e){return!!(e&&e[p1])}function nn(e){return D(e)||pe(e)}var ss="@@__IMMUTABLE_ITERABLE__@@";function ce(e){return!!(e&&e[ss])}var K=function(t){return ce(t)?t:te(t)},he=function(e){function t(n){return D(n)?n:qe(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(K),He=function(e){function t(n){return pe(n)?n:ve(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(K),ut=function(e){function t(n){return ce(n)&&!nn(n)?n:dt(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(K);K.Keyed=he;K.Indexed=He;K.Set=ut;var lt=0,ue=1,le=2,$1=typeof Symbol=="function"&&Symbol.iterator,is="@@iterator",w1=$1||is,w=function(t){this.next=t};w.prototype.toString=function(){return"[Iterator]"};w.KEYS=lt;w.VALUES=ue;w.ENTRIES=le;w.prototype.inspect=w.prototype.toSource=function(){return this.toString()};w.prototype[w1]=function(){return this};function B(e,t,n,r){var s=e===lt?t:e===ue?n:[t,n];return r?r.value=s:r={value:s,done:!1},r}function X(){return{value:void 0,done:!0}}function os(e){return Array.isArray(e)?!0:!!k1(e)}function $n(e){return!!(e&&typeof e.next=="function")}function H1(e){var t=k1(e);return t&&t.call(e)}function k1(e){var t=e&&($1&&e[$1]||e[is]);if(typeof t=="function")return t}function yi(e){var t=k1(e);return t&&t===e.entries}function bi(e){var t=k1(e);return t&&t===e.keys}var At="delete",C=5,ie=1<<C,G=ie-1,b={};function K1(){return{value:!1}}function fe(e){e&&(e.value=!0)}function rn(){}function tt(e){return e.size===void 0&&(e.size=e.__iterate(as)),e.size}function Me(e,t){if(typeof t!="number"){var n=t>>>0;if(""+n!==t||n===4294967295)return NaN;t=n}return t<0?tt(e)+t:t}function as(){return!0}function x1(e,t,n){return(e===0&&!us(e)||n!==void 0&&e<=-n)&&(t===void 0||n!==void 0&&t>=n)}function qt(e,t){return cs(e,t,0)}function S1(e,t){return cs(e,t,t)}function cs(e,t,n){return e===void 0?n:us(e)?t===1/0?t:Math.max(0,t+e)|0:t===void 0||t===e?e:Math.min(t,e)|0}function us(e){return e<0||e===0&&1/e===-1/0}var ls="@@__IMMUTABLE_RECORD__@@";function Ke(e){return!!(e&&e[ls])}function ke(e){return ce(e)||Ke(e)}var Pe="@@__IMMUTABLE_ORDERED__@@";function Ze(e){return!!(e&&e[Pe])}var fs="@@__IMMUTABLE_SEQ__@@";function sn(e){return!!(e&&e[fs])}var ft=Object.prototype.hasOwnProperty;function ds(e){return Array.isArray(e)||typeof e=="string"?!0:e&&typeof e=="object"&&Number.isInteger(e.length)&&e.length>=0&&(e.length===0?Object.keys(e).length===1:e.hasOwnProperty(e.length-1))}var te=function(e){function t(n){return n==null?an():ke(n)?n.toSeq():wi(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq {","}")},t.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},t.prototype.__iterate=function(r,s){var i=this._cache;if(i){for(var o=i.length,a=0;a!==o;){var c=i[s?o-++a:a++];if(r(c[1],c[0],this)===!1)break}return a}return this.__iterateUncached(r,s)},t.prototype.__iterator=function(r,s){var i=this._cache;if(i){var o=i.length,a=0;return new w(function(){if(a===o)return X();var c=i[s?o-++a:a++];return B(r,c[0],c[1])})}return this.__iteratorUncached(r,s)},t}(K),qe=function(e){function t(n){return n==null?an().toKeyedSeq():ce(n)?D(n)?n.toSeq():n.fromEntrySeq():Ke(n)?n.toSeq():cn(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toKeyedSeq=function(){return this},t}(te),ve=function(e){function t(n){return n==null?an():ce(n)?D(n)?n.entrySeq():n.toIndexedSeq():Ke(n)?n.toSeq().entrySeq():ps(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toIndexedSeq=function(){return this},t.prototype.toString=function(){return this.__toString("Seq [","]")},t}(te),dt=function(e){function t(n){return(ce(n)&&!nn(n)?n:ve(n)).toSetSeq()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return t(arguments)},t.prototype.toSetSeq=function(){return this},t}(te);te.isSeq=sn;te.Keyed=qe;te.Set=dt;te.Indexed=ve;te.prototype[fs]=!0;var nt=function(e){function t(n){this._array=n,this.size=n.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return this.has(r)?this._array[Me(this,r)]:s},t.prototype.__iterate=function(r,s){for(var i=this._array,o=i.length,a=0;a!==o;){var c=s?o-++a:a++;if(r(i[c],c,this)===!1)break}return a},t.prototype.__iterator=function(r,s){var i=this._array,o=i.length,a=0;return new w(function(){if(a===o)return X();var c=s?o-++a:a++;return B(r,c,i[c])})},t}(ve),on=function(e){function t(n){var r=Object.keys(n).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[]);this._object=n,this._keys=r,this.size=r.length}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return s!==void 0&&!this.has(r)?s:this._object[r]},t.prototype.has=function(r){return ft.call(this._object,r)},t.prototype.__iterate=function(r,s){for(var i=this._object,o=this._keys,a=o.length,c=0;c!==a;){var u=o[s?a-++c:c++];if(r(i[u],u,this)===!1)break}return c},t.prototype.__iterator=function(r,s){var i=this._object,o=this._keys,a=o.length,c=0;return new w(function(){if(c===a)return X();var u=o[s?a-++c:c++];return B(r,u,i[u])})},t}(qe);on.prototype[Pe]=!0;var Zi=function(e){function t(n){this._collection=n,this.size=n.length||n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.__iterateUncached=function(r,s){if(s)return this.cacheResult().__iterate(r,s);var i=this._collection,o=H1(i),a=0;if($n(o))for(var c;!(c=o.next()).done&&r(c.value,a++,this)!==!1;);return a},t.prototype.__iteratorUncached=function(r,s){if(s)return this.cacheResult().__iterator(r,s);var i=this._collection,o=H1(i);if(!$n(o))return new w(X);var a=0;return new w(function(){var c=o.next();return c.done?c:B(r,a++,c.value)})},t}(ve),Hn;function an(){return Hn||(Hn=new nt([]))}function cn(e){var t=un(e);if(t)return t.fromEntrySeq();if(typeof e=="object")return new on(e);throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: "+e)}function ps(e){var t=un(e);if(t)return t;throw new TypeError("Expected Array or collection object of values: "+e)}function wi(e){var t=un(e);if(t)return yi(e)?t.fromEntrySeq():bi(e)?t.toSetSeq():t;if(typeof e=="object")return new on(e);throw new TypeError("Expected Array or collection object of values, or keyed object: "+e)}function un(e){return ds(e)?new nt(e):os(e)?new Zi(e):void 0}function Ut(){return this.__ensureOwner()}function jt(){return this.__ownerID?this:this.__ensureOwner(new rn)}var Tt=typeof Math.imul=="function"&&Math.imul(4294967295,2)===-2?Math.imul:function(t,n){t|=0,n|=0;var r=t&65535,s=n&65535;return r*s+((t>>>16)*s+r*(n>>>16)<<16>>>0)|0};function I1(e){return e>>>1&1073741824|e&3221225471}var ki=Object.prototype.valueOf;function re(e){if(e==null)return Kn(e);if(typeof e.hashCode=="function")return I1(e.hashCode(e));var t=Oi(e);if(t==null)return Kn(t);switch(typeof t){case"boolean":return t?1108378657:1108378656;case"number":return xi(t);case"string":return t.length>Ri?Si(t):V1(t);case"object":case"function":return Li(t);case"symbol":return Ii(t);default:if(typeof t.toString=="function")return V1(t.toString());throw new Error("Value type "+typeof t+" cannot be hashed.")}}function Kn(e){return e===null?1108378658:1108378659}function xi(e){if(e!==e||e===1/0)return 0;var t=e|0;for(t!==e&&(t^=e*4294967295);e>4294967295;)e/=4294967295,t^=e;return I1(t)}function Si(e){var t=z1[e];return t===void 0&&(t=V1(e),C1===Ci&&(C1=0,z1={}),C1++,z1[e]=t),t}function V1(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return I1(t)}function Ii(e){var t=Gn[e];return t!==void 0||(t=hs(),Gn[e]=t),t}function Li(e){var t;if(Y1&&(t=G1.get(e),t!==void 0)||(t=e[je],t!==void 0)||!Yn&&(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[je],t!==void 0||(t=Ei(e),t!==void 0)))return t;if(t=hs(),Y1)G1.set(e,t);else{if(Vn!==void 0&&Vn(e)===!1)throw new Error("Non-extensible objects are not allowed as keys.");if(Yn)Object.defineProperty(e,je,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(e.propertyIsEnumerable!==void 0&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[je]=t;else if(e.nodeType!==void 0)e[je]=t;else throw new Error("Unable to set a non-enumerable property on object.")}return t}var Vn=Object.isExtensible,Yn=function(){try{return Object.defineProperty({},"@",{}),!0}catch{return!1}}();function Ei(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}function Oi(e){return e.valueOf!==ki&&typeof e.valueOf=="function"?e.valueOf(e):e}function hs(){var e=++R1;return R1&1073741824&&(R1=0),e}var Y1=typeof WeakMap=="function",G1;Y1&&(G1=new WeakMap);var Gn=Object.create(null),R1=0,je="__immutablehash__";typeof Symbol=="function"&&(je=Symbol(je));var Ri=16,Ci=255,C1=0,z1={},L1=function(e){function t(n,r){this._iter=n,this._useKeys=r,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.get=function(r,s){return this._iter.get(r,s)},t.prototype.has=function(r){return this._iter.has(r)},t.prototype.valueSeq=function(){return this._iter.valueSeq()},t.prototype.reverse=function(){var r=this,s=ln(this,!0);return this._useKeys||(s.valueSeq=function(){return r._iter.toSeq().reverse()}),s},t.prototype.map=function(r,s){var i=this,o=Ts(this,r,s);return this._useKeys||(o.valueSeq=function(){return i._iter.toSeq().map(r,s)}),o},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o,a){return r(o,a,i)},s)},t.prototype.__iterator=function(r,s){return this._iter.__iterator(r,s)},t}(qe);L1.prototype[Pe]=!0;var ms=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.includes=function(r){return this._iter.includes(r)},t.prototype.__iterate=function(r,s){var i=this,o=0;return s&&tt(this),this._iter.__iterate(function(a){return r(a,s?i.size-++o:o++,i)},s)},t.prototype.__iterator=function(r,s){var i=this,o=this._iter.__iterator(ue,s),a=0;return s&&tt(this),new w(function(){var c=o.next();return c.done?c:B(r,s?i.size-++a:a++,c.value,c)})},t}(ve),gs=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.has=function(r){return this._iter.includes(r)},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o){return r(o,o,i)},s)},t.prototype.__iterator=function(r,s){var i=this._iter.__iterator(ue,s);return new w(function(){var o=i.next();return o.done?o:B(r,o.value,o.value,o)})},t}(dt),vs=function(e){function t(n){this._iter=n,this.size=n.size}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.entrySeq=function(){return this._iter.toSeq()},t.prototype.__iterate=function(r,s){var i=this;return this._iter.__iterate(function(o){if(o){Jn(o);var a=ce(o);return r(a?o.get(1):o[1],a?o.get(0):o[0],i)}},s)},t.prototype.__iterator=function(r,s){var i=this._iter.__iterator(ue,s);return new w(function(){for(;;){var o=i.next();if(o.done)return o;var a=o.value;if(a){Jn(a);var c=ce(a);return B(r,c?a.get(0):a[0],c?a.get(1):a[1],o)}}})},t}(qe);ms.prototype.cacheResult=L1.prototype.cacheResult=gs.prototype.cacheResult=vs.prototype.cacheResult=pn;function _s(e){var t=xe(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var n=e.reverse.apply(this);return n.flip=function(){return e.reverse()},n},t.has=function(n){return e.includes(n)},t.includes=function(n){return e.has(n)},t.cacheResult=pn,t.__iterateUncached=function(n,r){var s=this;return e.__iterate(function(i,o){return n(o,i,s)!==!1},r)},t.__iteratorUncached=function(n,r){if(n===le){var s=e.__iterator(n,r);return new w(function(){var i=s.next();if(!i.done){var o=i.value[0];i.value[0]=i.value[1],i.value[1]=o}return i})}return e.__iterator(n===ue?lt:ue,r)},t}function Ts(e,t,n){var r=xe(e);return r.size=e.size,r.has=function(s){return e.has(s)},r.get=function(s,i){var o=e.get(s,b);return o===b?i:t.call(n,o,s,e)},r.__iterateUncached=function(s,i){var o=this;return e.__iterate(function(a,c,u){return s(t.call(n,a,c,u),c,o)!==!1},i)},r.__iteratorUncached=function(s,i){var o=e.__iterator(le,i);return new w(function(){var a=o.next();if(a.done)return a;var c=a.value,u=c[0];return B(s,u,t.call(n,c[1],u,e),a)})},r}function ln(e,t){var n=this,r=xe(e);return r._iter=e,r.size=e.size,r.reverse=function(){return e},e.flip&&(r.flip=function(){var s=_s(e);return s.reverse=function(){return e.flip()},s}),r.get=function(s,i){return e.get(t?s:-1-s,i)},r.has=function(s){return e.has(t?s:-1-s)},r.includes=function(s){return e.includes(s)},r.cacheResult=pn,r.__iterate=function(s,i){var o=this,a=0;return i&&tt(e),e.__iterate(function(c,u){return s(c,t?u:i?o.size-++a:a++,o)},!i)},r.__iterator=function(s,i){var o=0;i&&tt(e);var a=e.__iterator(le,!i);return new w(function(){var c=a.next();if(c.done)return c;var u=c.value;return B(s,t?u[0]:i?n.size-++o:o++,u[1],c)})},r}function ys(e,t,n,r){var s=xe(e);return r&&(s.has=function(i){var o=e.get(i,b);return o!==b&&!!t.call(n,o,i,e)},s.get=function(i,o){var a=e.get(i,b);return a!==b&&t.call(n,a,i,e)?a:o}),s.__iterateUncached=function(i,o){var a=this,c=0;return e.__iterate(function(u,l,f){if(t.call(n,u,l,f))return c++,i(u,r?l:c-1,a)},o),c},s.__iteratorUncached=function(i,o){var a=e.__iterator(le,o),c=0;return new w(function(){for(;;){var u=a.next();if(u.done)return u;var l=u.value,f=l[0],d=l[1];if(t.call(n,d,f,e))return B(i,r?f:c++,d,u)}})},s}function zi(e,t,n){var r=pt().asMutable();return e.__iterate(function(s,i){r.update(t.call(n,s,i,e),0,function(o){return o+1})}),r.asImmutable()}function Wi(e,t,n){var r=D(e),s=(Ze(e)?We():pt()).asMutable();e.__iterate(function(o,a){s.update(t.call(n,o,a,e),function(c){return c=c||[],c.push(r?[a,o]:o),c})});var i=dn(e);return s.map(function(o){return R(e,i(o))}).asImmutable()}function Ni(e,t,n){var r=D(e),s=[[],[]];e.__iterate(function(o,a){s[t.call(n,o,a,e)?1:0].push(r?[a,o]:o)});var i=dn(e);return s.map(function(o){return R(e,i(o))})}function fn(e,t,n,r){var s=e.size;if(x1(t,n,s))return e;if(typeof s>"u"&&(t<0||n<0))return fn(e.toSeq().cacheResult(),t,n,r);var i=qt(t,s),o=S1(n,s),a=o-i,c;a===a&&(c=a<0?0:a);var u=xe(e);return u.size=c===0?c:e.size&&c||void 0,!r&&sn(e)&&c>=0&&(u.get=function(l,f){return l=Me(this,l),l>=0&&l<c?e.get(l+i,f):f}),u.__iterateUncached=function(l,f){var d=this;if(c===0)return 0;if(f)return this.cacheResult().__iterate(l,f);var h=0,p=!0,m=0;return e.__iterate(function(v,_){if(!(p&&(p=h++<i)))return m++,l(v,r?_:m-1,d)!==!1&&m!==c}),m},u.__iteratorUncached=function(l,f){if(c!==0&&f)return this.cacheResult().__iterator(l,f);if(c===0)return new w(X);var d=e.__iterator(l,f),h=0,p=0;return new w(function(){for(;h++<i;)d.next();if(++p>c)return X();var m=d.next();return r||l===ue||m.done?m:l===lt?B(l,p-1,void 0,m):B(l,p-1,m.value[1],m)})},u}function Di(e,t,n){var r=xe(e);return r.__iterateUncached=function(s,i){var o=this;if(i)return this.cacheResult().__iterate(s,i);var a=0;return e.__iterate(function(c,u,l){return t.call(n,c,u,l)&&++a&&s(c,u,o)}),a},r.__iteratorUncached=function(s,i){var o=this;if(i)return this.cacheResult().__iterator(s,i);var a=e.__iterator(le,i),c=!0;return new w(function(){if(!c)return X();var u=a.next();if(u.done)return u;var l=u.value,f=l[0],d=l[1];return t.call(n,d,f,o)?s===le?u:B(s,f,d,u):(c=!1,X())})},r}function bs(e,t,n,r){var s=xe(e);return s.__iterateUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterate(i,o);var c=!0,u=0;return e.__iterate(function(l,f,d){if(!(c&&(c=t.call(n,l,f,d))))return u++,i(l,r?f:u-1,a)}),u},s.__iteratorUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterator(i,o);var c=e.__iterator(le,o),u=!0,l=0;return new w(function(){var f,d,h;do{if(f=c.next(),f.done)return r||i===ue?f:i===lt?B(i,l++,void 0,f):B(i,l++,f.value[1],f);var p=f.value;d=p[0],h=p[1],u&&(u=t.call(n,h,d,a))}while(u);return i===le?f:B(i,d,h,f)})},s}var Bi=function(e){function t(n){this._wrappedIterables=n.flatMap(function(r){return r._wrappedIterables?r._wrappedIterables:[r]}),this.size=this._wrappedIterables.reduce(function(r,s){if(r!==void 0){var i=s.size;if(i!==void 0)return r+i}},0),this[p1]=this._wrappedIterables[0][p1],this[d1]=this._wrappedIterables[0][d1],this[Pe]=this._wrappedIterables[0][Pe]}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.__iterateUncached=function(r,s){if(this._wrappedIterables.length!==0){if(s)return this.cacheResult().__iterate(r,s);for(var i=0,o=D(this),a=o?le:ue,c=this._wrappedIterables[i].__iterator(a,s),u=!0,l=0;u;){for(var f=c.next();f.done;){if(i++,i===this._wrappedIterables.length)return l;c=this._wrappedIterables[i].__iterator(a,s),f=c.next()}var d=o?r(f.value[1],f.value[0],this):r(f.value,l,this);u=d!==!1,l++}return l}},t.prototype.__iteratorUncached=function(r,s){var i=this;if(this._wrappedIterables.length===0)return new w(X);if(s)return this.cacheResult().__iterator(r,s);var o=0,a=this._wrappedIterables[o].__iterator(r,s);return new w(function(){for(var c=a.next();c.done;){if(o++,o===i._wrappedIterables.length)return c;a=i._wrappedIterables[o].__iterator(r,s),c=a.next()}return c})},t}(te);function Mi(e,t){var n=D(e),r=[e].concat(t).map(function(i){return ce(i)?n&&(i=he(i)):i=n?cn(i):ps(Array.isArray(i)?i:[i]),i}).filter(function(i){return i.size!==0});if(r.length===0)return e;if(r.length===1){var s=r[0];if(s===e||n&&D(s)||pe(e)&&pe(s))return s}return new Bi(r)}function Zs(e,t,n){var r=xe(e);return r.__iterateUncached=function(s,i){if(i)return this.cacheResult().__iterate(s,i);var o=0,a=!1;function c(u,l){u.__iterate(function(f,d){return(!t||l<t)&&ce(f)?c(f,l+1):(o++,s(f,n?d:o-1,r)===!1&&(a=!0)),!a},i)}return c(e,0),o},r.__iteratorUncached=function(s,i){if(i)return this.cacheResult().__iterator(s,i);var o=e.__iterator(s,i),a=[],c=0;return new w(function(){for(;o;){var u=o.next();if(u.done!==!1){o=a.pop();continue}var l=u.value;if(s===le&&(l=l[1]),(!t||a.length<t)&&ce(l))a.push(o),o=l.__iterator(s,i);else return n?u:B(s,c++,l,u)}return X()})},r}function Pi(e,t,n){var r=dn(e);return e.toSeq().map(function(s,i){return r(t.call(n,s,i,e))}).flatten(!0)}function Ai(e,t){var n=xe(e);return n.size=e.size&&e.size*2-1,n.__iterateUncached=function(r,s){var i=this,o=0;return e.__iterate(function(a){return(!o||r(t,o++,i)!==!1)&&r(a,o++,i)!==!1},s),o},n.__iteratorUncached=function(r,s){var i=e.__iterator(ue,s),o=0,a;return new w(function(){return(!a||o%2)&&(a=i.next(),a.done)?a:o%2?B(r,o++,t):B(r,o++,a.value,a)})},n}function rt(e,t,n){t||(t=ws);var r=D(e),s=0,i=e.toSeq().map(function(o,a){return[a,o,s++,n?n(o,a,e):o]}).valueSeq().toArray();return i.sort(function(o,a){return t(o[3],a[3])||o[2]-a[2]}).forEach(r?function(o,a){i[a].length=2}:function(o,a){i[a]=o[1]}),r?qe(i):pe(e)?ve(i):dt(i)}function Vt(e,t,n){if(t||(t=ws),n){var r=e.toSeq().map(function(s,i){return[s,n(s,i,e)]}).reduce(function(s,i){return Xn(t,s[1],i[1])?i:s});return r&&r[0]}return e.reduce(function(s,i){return Xn(t,s,i)?i:s})}function Xn(e,t,n){var r=e(n,t);return r===0&&n!==t&&(n==null||n!==n)||r>0}function Yt(e,t,n,r){var s=xe(e),i=new nt(n).map(function(o){return o.size});return s.size=r?i.max():i.min(),s.__iterate=function(o,a){for(var c=this.__iterator(ue,a),u,l=0;!(u=c.next()).done&&o(u.value,l++,this)!==!1;);return l},s.__iteratorUncached=function(o,a){var c=n.map(function(f){return f=K(f),H1(a?f.reverse():f)}),u=0,l=!1;return new w(function(){var f;return l||(f=c.map(function(d){return d.next()}),l=r?f.every(function(d){return d.done}):f.some(function(d){return d.done})),l?X():B(o,u++,t.apply(null,f.map(function(d){return d.value})))})},s}function R(e,t){return e===t?e:sn(e)?t:e.constructor(t)}function Jn(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function dn(e){return D(e)?he:pe(e)?He:ut}function xe(e){return Object.create((D(e)?qe:pe(e)?ve:dt).prototype)}function pn(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):te.prototype.cacheResult.call(this)}function ws(e,t){return e===void 0&&t===void 0?0:e===void 0?1:t===void 0?-1:e>t?1:e<t?-1:0}function Qn(e){return!!(e&&typeof e.equals=="function"&&typeof e.hashCode=="function")}function oe(e,t){if(e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1;if(typeof e.valueOf=="function"&&typeof t.valueOf=="function"){if(e=e.valueOf(),t=t.valueOf(),e===t||e!==e&&t!==t)return!0;if(!e||!t)return!1}return!!(Qn(e)&&Qn(t)&&e.equals(t))}function ks(e,t,n,r){return ht(e,[t],n,r)}function xs(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return Is(this,e)}function Ss(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(typeof e!="function")throw new TypeError("Invalid merger function: "+e);return Is(this,t,e)}function Is(e,t,n){for(var r=[],s=0;s<t.length;s++){var i=he(t[s]);i.size!==0&&r.push(i)}return r.length===0?e:e.toSeq().size===0&&!e.__ownerID&&r.length===1?Ke(e)?e:e.constructor(r[0]):e.withMutations(function(o){for(var a=n?function(u,l){ks(o,l,b,function(f){return f===b?u:n(f,u,l)})}:function(u,l){o.set(l,u)},c=0;c<r.length;c++)r[c].forEach(a)})}var qi=Object.prototype.toString;function Ui(e){if(!e||typeof e!="object"||qi.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t,r=Object.getPrototypeOf(t);r!==null;)n=r,r=Object.getPrototypeOf(n);return n===t}function Ae(e){return typeof e=="object"&&(ke(e)||Array.isArray(e)||Ui(e))}function Ft(e){return typeof e=="string"&&(e==="__proto__"||e==="constructor")}function ye(e,t){t=t||0;for(var n=Math.max(0,e.length-t),r=new Array(n),s=0;s<n;s++)r[s]=e[s+t];return r}function h1(e){if(Array.isArray(e))return ye(e);var t={};for(var n in e)Ft(n)||ft.call(e,n)&&(t[n]=e[n]);return t}function hn(e,t,n){return mn(e,t,ji(n))}function mn(e,t,n){if(!Ae(e))throw new TypeError("Cannot merge into non-data-structure value: "+e);if(ke(e))return typeof n=="function"&&e.mergeWith?e.mergeWith.apply(e,[n].concat(t)):e.merge?e.merge.apply(e,t):e.concat.apply(e,t);for(var r=Array.isArray(e),s=e,i=r?He:he,o=r?function(c){s===e&&(s=h1(s)),s.push(c)}:function(c,u){if(!Ft(u)){var l=ft.call(s,u),f=l&&n?n(s[u],c,u):c;(!l||f!==s[u])&&(s===e&&(s=h1(s)),s[u]=f)}},a=0;a<t.length;a++)i(t[a]).forEach(o);return s}function ji(e){function t(n,r,s){return Ae(n)&&Ae(r)&&Fi(n,r)?mn(n,[r],t):e?e(n,r,s):r}return t}function Fi(e,t){var n=te(e),r=te(t);return pe(n)===pe(r)&&D(n)===D(r)}function Ls(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return hn(this,e)}function Es(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return hn(this,t,e)}function gn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return ht(this,e,be(),function(r){return hn(r,t)})}function vn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return ht(this,e,be(),function(r){return mn(r,t)})}function $i(e,t,n){return ht(e,t,b,function(){return n})}function _n(e,t){return $i(this,e,t)}function Tn(e,t,n){return arguments.length===1?e(this):ks(this,e,t,n)}function yn(e,t,n){return ht(this,e,t,n)}function bn(){return this.__altered}function $t(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this}var Os="@@__IMMUTABLE_MAP__@@";function Zn(e){return!!(e&&e[Os])}function It(e,t){if(!e)throw new Error(t)}function se(e){It(e!==1/0,"Cannot perform this action with an infinite size.")}var pt=function(e){function t(n){return n==null?be():Zn(n)&&!Ze(n)?n:be().withMutations(function(r){var s=e(n);se(s.size),s.forEach(function(i,o){return r.set(o,i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.__toString("Map {","}")},t.prototype.get=function(r,s){return this._root?this._root.get(0,void 0,r,s):s},t.prototype.set=function(r,s){return nr(this,r,s)},t.prototype.remove=function(r){return nr(this,r,b)},t.prototype.deleteAll=function(r){var s=K(r);return s.size===0?this:this.withMutations(function(i){s.forEach(function(o){return i.remove(o)})})},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):be()},t.prototype.sort=function(r){return We(rt(this,r))},t.prototype.sortBy=function(r,s){return We(rt(this,s,r))},t.prototype.map=function(r,s){var i=this;return this.withMutations(function(o){o.forEach(function(a,c){o.set(c,r.call(s,a,c,i))})})},t.prototype.__iterator=function(r,s){return new Hi(this,r,s)},t.prototype.__iterate=function(r,s){var i=this,o=0;return this._root&&this._root.iterate(function(a){return o++,r(a[1],a[0],i)},s),o},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?wn(this.size,this._root,r,this.__hash):this.size===0?be():(this.__ownerID=r,this.__altered=!1,this)},t}(he);pt.isMap=Zn;var N=pt.prototype;N[Os]=!0;N[At]=N.remove;N.removeAll=N.deleteAll;N.setIn=_n;N.removeIn=N.deleteIn=Sn;N.update=Tn;N.updateIn=yn;N.merge=N.concat=xs;N.mergeWith=Ss;N.mergeDeep=Ls;N.mergeDeepWith=Es;N.mergeIn=vn;N.mergeDeepIn=gn;N.withMutations=$t;N.wasAltered=bn;N.asImmutable=Ut;N["@@transducer/init"]=N.asMutable=jt;N["@@transducer/step"]=function(e,t){return e.set(t[0],t[1])};N["@@transducer/result"]=function(e){return e.asImmutable()};var Rt=function(t,n){this.ownerID=t,this.entries=n};Rt.prototype.get=function(t,n,r,s){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(oe(r,i[o][0]))return i[o][1];return s};Rt.prototype.update=function(t,n,r,s,i,o,a){for(var c=i===b,u=this.entries,l=0,f=u.length;l<f&&!oe(s,u[l][0]);l++);var d=l<f;if(d?u[l][1]===i:c)return this;if(fe(a),(c||!d)&&fe(o),!(c&&u.length===1)){if(!d&&!c&&u.length>=Ji)return Ki(t,u,s,i);var h=t&&t===this.ownerID,p=h?u:ye(u);return d?c?l===f-1?p.pop():p[l]=p.pop():p[l]=[s,i]:p.push([s,i]),h?(this.entries=p,this):new Rt(t,p)}};var st=function(t,n,r){this.ownerID=t,this.bitmap=n,this.nodes=r};st.prototype.get=function(t,n,r,s){n===void 0&&(n=re(r));var i=1<<((t===0?n:n>>>t)&G),o=this.bitmap;return(o&i)===0?s:this.nodes[Rs(o&i-1)].get(t+C,n,r,s)};st.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=(n===0?r:r>>>n)&G,u=1<<c,l=this.bitmap,f=(l&u)!==0;if(!f&&i===b)return this;var d=Rs(l&u-1),h=this.nodes,p=f?h[d]:void 0,m=kn(p,t,n+C,r,s,i,o,a);if(m===p)return this;if(!f&&m&&h.length>=Qi)return Yi(t,h,l,c,m);if(f&&!m&&h.length===2&&rr(h[d^1]))return h[d^1];if(f&&m&&h.length===1&&rr(m))return m;var v=t&&t===this.ownerID,_=f?m?l:l^u:l|u,O=f?m?Cs(h,d,m,v):Xi(h,d,v):Gi(h,d,m,v);return v?(this.bitmap=_,this.nodes=O,this):new st(t,_,O)};var Ct=function(t,n,r){this.ownerID=t,this.count=n,this.nodes=r};Ct.prototype.get=function(t,n,r,s){n===void 0&&(n=re(r));var i=(t===0?n:n>>>t)&G,o=this.nodes[i];return o?o.get(t+C,n,r,s):s};Ct.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=(n===0?r:r>>>n)&G,u=i===b,l=this.nodes,f=l[c];if(u&&!f)return this;var d=kn(f,t,n+C,r,s,i,o,a);if(d===f)return this;var h=this.count;if(!f)h++;else if(!d&&(h--,h<eo))return Vi(t,l,h,c);var p=t&&t===this.ownerID,m=Cs(l,c,d,p);return p?(this.count=h,this.nodes=m,this):new Ct(t,h,m)};var it=function(t,n,r){this.ownerID=t,this.keyHash=n,this.entries=r};it.prototype.get=function(t,n,r,s){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(oe(r,i[o][0]))return i[o][1];return s};it.prototype.update=function(t,n,r,s,i,o,a){r===void 0&&(r=re(s));var c=i===b;if(r!==this.keyHash)return c?this:(fe(a),fe(o),xn(this,t,n,r,[s,i]));for(var u=this.entries,l=0,f=u.length;l<f&&!oe(s,u[l][0]);l++);var d=l<f;if(d?u[l][1]===i:c)return this;if(fe(a),(c||!d)&&fe(o),c&&f===2)return new ze(t,this.keyHash,u[l^1]);var h=t&&t===this.ownerID,p=h?u:ye(u);return d?c?l===f-1?p.pop():p[l]=p.pop():p[l]=[s,i]:p.push([s,i]),h?(this.entries=p,this):new it(t,this.keyHash,p)};var ze=function(t,n,r){this.ownerID=t,this.keyHash=n,this.entry=r};ze.prototype.get=function(t,n,r,s){return oe(r,this.entry[0])?this.entry[1]:s};ze.prototype.update=function(t,n,r,s,i,o,a){var c=i===b,u=oe(s,this.entry[0]);if(u?i===this.entry[1]:c)return this;if(fe(a),c){fe(o);return}return u?t&&t===this.ownerID?(this.entry[1]=i,this):new ze(t,this.keyHash,[s,i]):(fe(o),xn(this,t,n,re(s),[s,i]))};Rt.prototype.iterate=it.prototype.iterate=function(e,t){for(var n=this.entries,r=0,s=n.length-1;r<=s;r++)if(e(n[t?s-r:r])===!1)return!1};st.prototype.iterate=Ct.prototype.iterate=function(e,t){for(var n=this.nodes,r=0,s=n.length-1;r<=s;r++){var i=n[t?s-r:r];if(i&&i.iterate(e,t)===!1)return!1}};ze.prototype.iterate=function(e,t){return e(this.entry)};var Hi=function(e){function t(n,r,s){this._type=r,this._reverse=s,this._stack=n._root&&er(n._root)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.next=function(){for(var r=this._type,s=this._stack;s;){var i=s.node,o=s.index++,a=void 0;if(i.entry){if(o===0)return W1(r,i.entry)}else if(i.entries){if(a=i.entries.length-1,o<=a)return W1(r,i.entries[this._reverse?a-o:o])}else if(a=i.nodes.length-1,o<=a){var c=i.nodes[this._reverse?a-o:o];if(c){if(c.entry)return W1(r,c.entry);s=this._stack=er(c,s)}continue}s=this._stack=this._stack.__prev}return X()},t}(w);function W1(e,t){return B(e,t[0],t[1])}function er(e,t){return{node:e,index:0,__prev:t}}function wn(e,t,n,r){var s=Object.create(N);return s.size=e,s._root=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var tr;function be(){return tr||(tr=wn(0))}function nr(e,t,n){var r,s;if(e._root){var i=K1(),o=K1();if(r=kn(e._root,e.__ownerID,0,void 0,t,n,i,o),!o.value)return e;s=e.size+(i.value?n===b?-1:1:0)}else{if(n===b)return e;s=1,r=new Rt(e.__ownerID,[[t,n]])}return e.__ownerID?(e.size=s,e._root=r,e.__hash=void 0,e.__altered=!0,e):r?wn(s,r):be()}function kn(e,t,n,r,s,i,o,a){return e?e.update(t,n,r,s,i,o,a):i===b?e:(fe(a),fe(o),new ze(t,r,[s,i]))}function rr(e){return e.constructor===ze||e.constructor===it}function xn(e,t,n,r,s){if(e.keyHash===r)return new it(t,r,[e.entry,s]);var i=(n===0?e.keyHash:e.keyHash>>>n)&G,o=(n===0?r:r>>>n)&G,a,c=i===o?[xn(e,t,n+C,r,s)]:(a=new ze(t,r,s),i<o?[e,a]:[a,e]);return new st(t,1<<i|1<<o,c)}function Ki(e,t,n,r){e||(e=new rn);for(var s=new ze(e,re(n),[n,r]),i=0;i<t.length;i++){var o=t[i];s=s.update(e,0,void 0,o[0],o[1])}return s}function Vi(e,t,n,r){for(var s=0,i=0,o=new Array(n),a=0,c=1,u=t.length;a<u;a++,c<<=1){var l=t[a];l!==void 0&&a!==r&&(s|=c,o[i++]=l)}return new st(e,s,o)}function Yi(e,t,n,r,s){for(var i=0,o=new Array(ie),a=0;n!==0;a++,n>>>=1)o[a]=n&1?t[i++]:void 0;return o[r]=s,new Ct(e,i+1,o)}function Rs(e){return e-=e>>1&1431655765,e=(e&858993459)+(e>>2&858993459),e=e+(e>>4)&252645135,e+=e>>8,e+=e>>16,e&127}function Cs(e,t,n,r){var s=r?e:ye(e);return s[t]=n,s}function Gi(e,t,n,r){var s=e.length+1;if(r&&t+1===s)return e[t]=n,e;for(var i=new Array(s),o=0,a=0;a<s;a++)a===t?(i[a]=n,o=-1):i[a]=e[a+o];return i}function Xi(e,t,n){var r=e.length-1;if(n&&t===r)return e.pop(),e;for(var s=new Array(r),i=0,o=0;o<r;o++)o===t&&(i=1),s[o]=e[o+i];return s}var Ji=ie/4,Qi=ie/2,eo=ie/4;function zs(e){if(ds(e)&&typeof e!="string")return e;if(Ze(e))return e.toArray();throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: "+e)}function zt(e){try{return typeof e=="string"?JSON.stringify(e):String(e)}catch{return JSON.stringify(e)}}function to(e,t){return ke(e)?e.has(t):Ae(e)&&ft.call(e,t)}function Ws(e,t,n){return ke(e)?e.get(t,n):to(e,t)?typeof e.get=="function"?e.get(t):e[t]:n}function no(e,t){if(!Ae(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(ke(e)){if(!e.remove)throw new TypeError("Cannot update immutable value without .remove() method: "+e);return e.remove(t)}if(!ft.call(e,t))return e;var n=h1(e);return Array.isArray(n)?n.splice(t,1):delete n[t],n}function ro(e,t,n){if(typeof t=="string"&&Ft(t))return e;if(!Ae(e))throw new TypeError("Cannot update non-data-structure value: "+e);if(ke(e)){if(!e.set)throw new TypeError("Cannot update immutable value without .set() method: "+e);return e.set(t,n)}if(ft.call(e,t)&&n===e[t])return e;var r=h1(e);return r[t]=n,r}function ht(e,t,n,r){r||(r=n,n=void 0);var s=Ns(ke(e),e,zs(t),0,n,r);return s===b?n:s}function Ns(e,t,n,r,s,i){var o=t===b;if(r===n.length){var a=o?s:t,c=i(a);return c===a?t:c}if(!o&&!Ae(t))throw new TypeError("Cannot update within non-data-structure value in path ["+Array.from(n).slice(0,r).map(zt)+"]: "+t);var u=n[r],l=o?b:Ws(t,u,b),f=Ns(l===b?e:ke(l),l,n,r+1,s,i);return f===l?t:f===b?no(t,u):ro(o?e?be():{}:t,u,f)}function so(e,t){return ht(e,t,function(){return b})}function Sn(e){return so(this,e)}var Ds="@@__IMMUTABLE_LIST__@@";function Bs(e){return!!(e&&e[Ds])}var H=function(e){function t(n){var r=l1();if(n==null)return r;if(Bs(n))return n;var s=e(n),i=s.size;return i===0?r:(se(i),i>0&&i<ie?Wt(0,i,C,null,new Be(s.toArray())):r.withMutations(function(o){o.setSize(i),s.forEach(function(a,c){return o.set(c,a)})}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("List [","]")},t.prototype.get=function(r,s){if(r=Me(this,r),r>=0&&r<this.size){r+=this._origin;var i=Ms(this,r);return i&&i.array[r&G]}return s},t.prototype.set=function(r,s){return io(this,r,s)},t.prototype.remove=function(r){return this.has(r)?r===0?this.shift():r===this.size-1?this.pop():this.splice(r,1):this},t.prototype.insert=function(r,s){return this.splice(r,0,s)},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=C,this._root=this._tail=this.__hash=void 0,this.__altered=!0,this):l1()},t.prototype.push=function(){var r=arguments,s=this.size;return this.withMutations(function(i){De(i,0,s+r.length);for(var o=0;o<r.length;o++)i.set(s+o,r[o])})},t.prototype.pop=function(){return De(this,0,-1)},t.prototype.unshift=function(){var r=arguments;return this.withMutations(function(s){De(s,-r.length);for(var i=0;i<r.length;i++)s.set(i,r[i])})},t.prototype.shift=function(){return De(this,1)},t.prototype.shuffle=function(r){return r===void 0&&(r=Math.random),this.withMutations(function(s){for(var i=s.size,o,a;i;)o=Math.floor(r()*i--),a=s.get(o),s.set(o,s.get(i)),s.set(i,a)})},t.prototype.concat=function(){for(var r=arguments,s=[],i=0;i<arguments.length;i++){var o=r[i],a=e(typeof o!="string"&&os(o)?o:[o]);a.size!==0&&s.push(a)}return s.length===0?this:this.size===0&&!this.__ownerID&&s.length===1?this.constructor(s[0]):this.withMutations(function(c){s.forEach(function(u){return u.forEach(function(l){return c.push(l)})})})},t.prototype.setSize=function(r){return De(this,0,r)},t.prototype.map=function(r,s){var i=this;return this.withMutations(function(o){for(var a=0;a<i.size;a++)o.set(a,r.call(s,o.get(a),a,i))})},t.prototype.slice=function(r,s){var i=this.size;return x1(r,s,i)?this:De(this,qt(r,i),S1(s,i))},t.prototype.__iterator=function(r,s){var i=s?this.size:0,o=sr(this,s);return new w(function(){var a=o();return a===Lt?X():B(r,s?--i:i++,a)})},t.prototype.__iterate=function(r,s){for(var i=s?this.size:0,o=sr(this,s),a;(a=o())!==Lt&&r(a,s?--i:i++,this)!==!1;);return i},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?Wt(this._origin,this._capacity,this._level,this._root,this._tail,r,this.__hash):this.size===0?l1():(this.__ownerID=r,this.__altered=!1,this)},t}(He);H.isList=Bs;var P=H.prototype;P[Ds]=!0;P[At]=P.remove;P.merge=P.concat;P.setIn=_n;P.deleteIn=P.removeIn=Sn;P.update=Tn;P.updateIn=yn;P.mergeIn=vn;P.mergeDeepIn=gn;P.withMutations=$t;P.wasAltered=bn;P.asImmutable=Ut;P["@@transducer/init"]=P.asMutable=jt;P["@@transducer/step"]=function(e,t){return e.push(t)};P["@@transducer/result"]=function(e){return e.asImmutable()};var Be=function(t,n){this.array=t,this.ownerID=n};Be.prototype.removeBefore=function(t,n,r){if((r&(1<<n+C)-1)===0||this.array.length===0)return this;var s=r>>>n&G;if(s>=this.array.length)return new Be([],t);var i=s===0,o;if(n>0){var a=this.array[s];if(o=a&&a.removeBefore(t,n-C,r),o===a&&i)return this}if(i&&!o)return this;var c=ot(this,t);if(!i)for(var u=0;u<s;u++)c.array[u]=void 0;return o&&(c.array[s]=o),c};Be.prototype.removeAfter=function(t,n,r){if(r===(n?1<<n+C:ie)||this.array.length===0)return this;var s=r-1>>>n&G;if(s>=this.array.length)return this;var i;if(n>0){var o=this.array[s];if(i=o&&o.removeAfter(t,n-C,r),i===o&&s===this.array.length-1)return this}var a=ot(this,t);return a.array.splice(s+1),i&&(a.array[s]=i),a};var Lt={};function sr(e,t){var n=e._origin,r=e._capacity,s=Nt(r),i=e._tail;return o(e._root,e._level,0);function o(u,l,f){return l===0?a(u,f):c(u,l,f)}function a(u,l){var f=l===s?i&&i.array:u&&u.array,d=l>n?0:n-l,h=r-l;return h>ie&&(h=ie),function(){if(d===h)return Lt;var p=t?--h:d++;return f&&f[p]}}function c(u,l,f){var d,h=u&&u.array,p=f>n?0:n-f>>l,m=(r-f>>l)+1;return m>ie&&(m=ie),function(){for(;;){if(d){var v=d();if(v!==Lt)return v;d=null}if(p===m)return Lt;var _=t?--m:p++;d=o(h&&h[_],l-C,f+(_<<l))}}}}function Wt(e,t,n,r,s,i,o){var a=Object.create(P);return a.size=t-e,a._origin=e,a._capacity=t,a._level=n,a._root=r,a._tail=s,a.__ownerID=i,a.__hash=o,a.__altered=!1,a}function l1(){return Wt(0,0,C)}function io(e,t,n){if(t=Me(e,t),t!==t)return e;if(t>=e.size||t<0)return e.withMutations(function(o){t<0?De(o,t).set(0,n):De(o,0,t+1).set(t,n)});t+=e._origin;var r=e._tail,s=e._root,i=K1();return t>=Nt(e._capacity)?r=X1(r,e.__ownerID,0,t,n,i):s=X1(s,e.__ownerID,e._level,t,n,i),i.value?e.__ownerID?(e._root=s,e._tail=r,e.__hash=void 0,e.__altered=!0,e):Wt(e._origin,e._capacity,e._level,s,r):e}function X1(e,t,n,r,s,i){var o=r>>>n&G,a=e&&o<e.array.length;if(!a&&s===void 0)return e;var c;if(n>0){var u=e&&e.array[o],l=X1(u,t,n-C,r,s,i);return l===u?e:(c=ot(e,t),c.array[o]=l,c)}return a&&e.array[o]===s?e:(i&&fe(i),c=ot(e,t),s===void 0&&o===c.array.length-1?c.array.pop():c.array[o]=s,c)}function ot(e,t){return t&&e&&t===e.ownerID?e:new Be(e?e.array.slice():[],t)}function Ms(e,t){if(t>=Nt(e._capacity))return e._tail;if(t<1<<e._level+C){for(var n=e._root,r=e._level;n&&r>0;)n=n.array[t>>>r&G],r-=C;return n}}function De(e,t,n){t!==void 0&&(t|=0),n!==void 0&&(n|=0);var r=e.__ownerID||new rn,s=e._origin,i=e._capacity,o=s+t,a=n===void 0?i:n<0?i+n:s+n;if(o===s&&a===i)return e;if(o>=a)return e.clear();for(var c=e._level,u=e._root,l=0;o+l<0;)u=new Be(u&&u.array.length?[void 0,u]:[],r),c+=C,l+=1<<c;l&&(o+=l,s+=l,a+=l,i+=l);for(var f=Nt(i),d=Nt(a);d>=1<<c+C;)u=new Be(u&&u.array.length?[u]:[],r),c+=C;var h=e._tail,p=d<f?Ms(e,a-1):d>f?new Be([],r):h;if(h&&d>f&&o<i&&h.array.length){u=ot(u,r);for(var m=u,v=c;v>C;v-=C){var _=f>>>v&G;m=m.array[_]=ot(m.array[_],r)}m.array[f>>>C&G]=h}if(a<i&&(p=p&&p.removeAfter(r,0,a)),o>=d)o-=d,a-=d,c=C,u=null,p=p&&p.removeBefore(r,0,o);else if(o>s||d<f){for(l=0;u;){var O=o>>>c&G;if(O!==d>>>c&G)break;O&&(l+=(1<<c)*O),c-=C,u=u.array[O]}u&&o>s&&(u=u.removeBefore(r,c,o-l)),u&&d<f&&(u=u.removeAfter(r,c,d-l)),l&&(o-=l,a-=l)}return e.__ownerID?(e.size=a-o,e._origin=o,e._capacity=a,e._level=c,e._root=u,e._tail=p,e.__hash=void 0,e.__altered=!0,e):Wt(o,a,c,u,p)}function Nt(e){return e<ie?0:e-1>>>C<<C}function Ps(e){return Zn(e)&&Ze(e)}var We=function(e){function t(n){return n==null?wt():Ps(n)?n:wt().withMutations(function(r){var s=he(n);se(s.size),s.forEach(function(i,o){return r.set(o,i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},t.prototype.get=function(r,s){var i=this._map.get(r);return i!==void 0?this._list.get(i)[1]:s},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this.__altered=!0,this):wt()},t.prototype.set=function(r,s){return or(this,r,s)},t.prototype.remove=function(r){return or(this,r,b)},t.prototype.__iterate=function(r,s){var i=this;return this._list.__iterate(function(o){return o&&r(o[1],o[0],i)},s)},t.prototype.__iterator=function(r,s){return this._list.fromEntrySeq().__iterator(r,s)},t.prototype.__ensureOwner=function(r){if(r===this.__ownerID)return this;var s=this._map.__ensureOwner(r),i=this._list.__ensureOwner(r);return r?In(s,i,r,this.__hash):this.size===0?wt():(this.__ownerID=r,this.__altered=!1,this._map=s,this._list=i,this)},t}(pt);We.isOrderedMap=Ps;We.prototype[Pe]=!0;We.prototype[At]=We.prototype.remove;function In(e,t,n,r){var s=Object.create(We.prototype);return s.size=e?e.size:0,s._map=e,s._list=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var ir;function wt(){return ir||(ir=In(be(),l1()))}function or(e,t,n){var r=e._map,s=e._list,i=r.get(t),o=i!==void 0,a,c;if(n===b){if(!o)return e;s.size>=ie&&s.size>=r.size*2?(c=s.filter(function(u,l){return u!==void 0&&i!==l}),a=c.toKeyedSeq().map(function(u){return u[0]}).flip().toMap(),e.__ownerID&&(a.__ownerID=c.__ownerID=e.__ownerID)):(a=r.remove(t),c=i===s.size-1?s.pop():s.set(i,void 0))}else if(o){if(n===s.get(i)[1])return e;a=r,c=s.set(i,[t,n])}else a=r.set(t,s.size),c=s.set(s.size,[t,n]);return e.__ownerID?(e.size=a.size,e._map=a,e._list=c,e.__hash=void 0,e.__altered=!0,e):In(a,c)}var As="@@__IMMUTABLE_STACK__@@";function J1(e){return!!(e&&e[As])}var Ln=function(e){function t(n){return n==null?Gt():J1(n)?n:Gt().pushAll(n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.prototype.toString=function(){return this.__toString("Stack [","]")},t.prototype.get=function(r,s){var i=this._head;for(r=Me(this,r);i&&r--;)i=i.next;return i?i.value:s},t.prototype.peek=function(){return this._head&&this._head.value},t.prototype.push=function(){var r=arguments;if(arguments.length===0)return this;for(var s=this.size+arguments.length,i=this._head,o=arguments.length-1;o>=0;o--)i={value:r[o],next:i};return this.__ownerID?(this.size=s,this._head=i,this.__hash=void 0,this.__altered=!0,this):kt(s,i)},t.prototype.pushAll=function(r){if(r=e(r),r.size===0)return this;if(this.size===0&&J1(r))return r;se(r.size);var s=this.size,i=this._head;return r.__iterate(function(o){s++,i={value:o,next:i}},!0),this.__ownerID?(this.size=s,this._head=i,this.__hash=void 0,this.__altered=!0,this):kt(s,i)},t.prototype.pop=function(){return this.slice(1)},t.prototype.clear=function(){return this.size===0?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):Gt()},t.prototype.slice=function(r,s){if(x1(r,s,this.size))return this;var i=qt(r,this.size),o=S1(s,this.size);if(o!==this.size)return e.prototype.slice.call(this,r,s);for(var a=this.size-i,c=this._head;i--;)c=c.next;return this.__ownerID?(this.size=a,this._head=c,this.__hash=void 0,this.__altered=!0,this):kt(a,c)},t.prototype.__ensureOwner=function(r){return r===this.__ownerID?this:r?kt(this.size,this._head,r,this.__hash):this.size===0?Gt():(this.__ownerID=r,this.__altered=!1,this)},t.prototype.__iterate=function(r,s){var i=this;if(s)return new nt(this.toArray()).__iterate(function(c,u){return r(c,u,i)},s);for(var o=0,a=this._head;a&&r(a.value,o++,this)!==!1;)a=a.next;return o},t.prototype.__iterator=function(r,s){if(s)return new nt(this.toArray()).__iterator(r,s);var i=0,o=this._head;return new w(function(){if(o){var a=o.value;return o=o.next,B(r,i++,a)}return X()})},t}(He);Ln.isStack=J1;var J=Ln.prototype;J[As]=!0;J.shift=J.pop;J.unshift=J.push;J.unshiftAll=J.pushAll;J.withMutations=$t;J.wasAltered=bn;J.asImmutable=Ut;J["@@transducer/init"]=J.asMutable=jt;J["@@transducer/step"]=function(e,t){return e.unshift(t)};J["@@transducer/result"]=function(e){return e.asImmutable()};function kt(e,t,n,r){var s=Object.create(J);return s.size=e,s._head=t,s.__ownerID=n,s.__hash=r,s.__altered=!1,s}var ar;function Gt(){return ar||(ar=kt(0))}function cr(e,t,n,r,s,i){return se(e.size),e.__iterate(function(o,a,c){s?(s=!1,n=o):n=t.call(r,n,o,a,c)},i),n}function oo(e,t){return t}function ao(e,t){return[t,e]}function N1(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return!e.apply(this,t)}}function ur(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return-e.apply(this,t)}}function lr(e,t){return e<t?1:e>t?-1:0}function qs(e,t){if(e===t)return!0;if(!ce(t)||e.size!==void 0&&t.size!==void 0&&e.size!==t.size||e.__hash!==void 0&&t.__hash!==void 0&&e.__hash!==t.__hash||D(e)!==D(t)||pe(e)!==pe(t)||Ze(e)!==Ze(t))return!1;if(e.size===0&&t.size===0)return!0;var n=!nn(e);if(Ze(e)){var r=e.entries();return t.every(function(c,u){var l=r.next().value;return l&&oe(l[1],c)&&(n||oe(l[0],u))})&&r.next().done}var s=!1;if(e.size===void 0)if(t.size===void 0)typeof e.cacheResult=="function"&&e.cacheResult();else{s=!0;var i=e;e=t,t=i}var o=!0,a=t.__iterate(function(c,u){if(n?!e.has(c):s?!oe(c,e.get(u,b)):!oe(e.get(u,b),c))return o=!1,!1});return o&&e.size===a}var Qe=function(e){function t(n,r,s){if(s===void 0&&(s=1),!(this instanceof t))return new t(n,r,s);if(It(s!==0,"Cannot step a Range by 0"),It(n!==void 0,"You must define a start value when using Range"),It(r!==void 0,"You must define an end value when using Range"),s=Math.abs(s),r<n&&(s=-s),this._start=n,this._end=r,this._step=s,this.size=Math.max(0,Math.ceil((r-n)/s-1)+1),this.size===0){if(D1)return D1;D1=this}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.size===0?"Range []":"Range [ "+this._start+"..."+this._end+(this._step!==1?" by "+this._step:"")+" ]"},t.prototype.get=function(r,s){return this.has(r)?this._start+Me(this,r)*this._step:s},t.prototype.includes=function(r){var s=(r-this._start)/this._step;return s>=0&&s<this.size&&s===Math.floor(s)},t.prototype.slice=function(r,s){return x1(r,s,this.size)?this:(r=qt(r,this.size),s=S1(s,this.size),s<=r?new t(0,0):new t(this.get(r,this._end),this.get(s,this._end),this._step))},t.prototype.indexOf=function(r){var s=r-this._start;if(s%this._step===0){var i=s/this._step;if(i>=0&&i<this.size)return i}return-1},t.prototype.lastIndexOf=function(r){return this.indexOf(r)},t.prototype.__iterate=function(r,s){for(var i=this.size,o=this._step,a=s?this._start+(i-1)*o:this._start,c=0;c!==i&&r(a,s?i-++c:c++,this)!==!1;)a+=s?-o:o;return c},t.prototype.__iterator=function(r,s){var i=this.size,o=this._step,a=s?this._start+(i-1)*o:this._start,c=0;return new w(function(){if(c===i)return X();var u=a;return a+=s?-o:o,B(r,s?i-++c:c++,u)})},t.prototype.equals=function(r){return r instanceof t?this._start===r._start&&this._end===r._end&&this._step===r._step:qs(this,r)},t}(ve),D1,Us="@@__IMMUTABLE_SET__@@";function En(e){return!!(e&&e[Us])}var E1=function(e){function t(n){return n==null?xt():En(n)&&!Ze(n)?n:xt().withMutations(function(r){var s=e(n);se(s.size),s.forEach(function(i){return r.add(i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(r){return this(he(r).keySeq())},t.intersect=function(r){return r=K(r).toArray(),r.length?j.intersect.apply(t(r.pop()),r):xt()},t.union=function(r){return r=K(r).toArray(),r.length?j.union.apply(t(r.pop()),r):xt()},t.prototype.toString=function(){return this.__toString("Set {","}")},t.prototype.has=function(r){return this._map.has(r)},t.prototype.add=function(r){return Xt(this,this._map.set(r,r))},t.prototype.remove=function(r){return Xt(this,this._map.remove(r))},t.prototype.clear=function(){return Xt(this,this._map.clear())},t.prototype.map=function(r,s){var i=this,o=!1,a=Xt(this,this._map.mapEntries(function(c){var u=c[1],l=r.call(s,u,u,i);return l!==u&&(o=!0),[l,l]},s));return o?a:this},t.prototype.union=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];return r=r.filter(function(i){return i.size!==0}),r.length===0?this:this.size===0&&!this.__ownerID&&r.length===1?this.constructor(r[0]):this.withMutations(function(i){for(var o=0;o<r.length;o++)typeof r[o]=="string"?i.add(r[o]):e(r[o]).forEach(function(a){return i.add(a)})})},t.prototype.intersect=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];if(r.length===0)return this;r=r.map(function(o){return e(o)});var i=[];return this.forEach(function(o){r.every(function(a){return a.includes(o)})||i.push(o)}),this.withMutations(function(o){i.forEach(function(a){o.remove(a)})})},t.prototype.subtract=function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];if(r.length===0)return this;r=r.map(function(o){return e(o)});var i=[];return this.forEach(function(o){r.some(function(a){return a.includes(o)})&&i.push(o)}),this.withMutations(function(o){i.forEach(function(a){o.remove(a)})})},t.prototype.sort=function(r){return Dt(rt(this,r))},t.prototype.sortBy=function(r,s){return Dt(rt(this,s,r))},t.prototype.wasAltered=function(){return this._map.wasAltered()},t.prototype.__iterate=function(r,s){var i=this;return this._map.__iterate(function(o){return r(o,o,i)},s)},t.prototype.__iterator=function(r,s){return this._map.__iterator(r,s)},t.prototype.__ensureOwner=function(r){if(r===this.__ownerID)return this;var s=this._map.__ensureOwner(r);return r?this.__make(s,r):this.size===0?this.__empty():(this.__ownerID=r,this._map=s,this)},t}(ut);E1.isSet=En;var j=E1.prototype;j[Us]=!0;j[At]=j.remove;j.merge=j.concat=j.union;j.withMutations=$t;j.asImmutable=Ut;j["@@transducer/init"]=j.asMutable=jt;j["@@transducer/step"]=function(e,t){return e.add(t)};j["@@transducer/result"]=function(e){return e.asImmutable()};j.__empty=xt;j.__make=js;function Xt(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:t.size===0?e.__empty():e.__make(t)}function js(e,t){var n=Object.create(j);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}var fr;function xt(){return fr||(fr=js(be()))}function Fs(e,t,n){for(var r=zs(t),s=0;s!==r.length;)if(e=Ws(e,r[s++],b),e===b)return n;return e}function $s(e,t){return Fs(this,e,t)}function co(e,t){return Fs(e,t,b)!==b}function uo(e){return co(this,e)}function Hs(){se(this.size);var e={};return this.__iterate(function(t,n){Ft(n)||(e[n]=t)}),e}function m1(e){if(!e||typeof e!="object")return e;if(!ce(e)){if(!Ae(e))return e;e=te(e)}if(D(e)){var t={};return e.__iterate(function(r,s){Ft(s)||(t[s]=m1(r))}),t}var n=[];return e.__iterate(function(r){n.push(m1(r))}),n}function lo(e){if(e.size===1/0)return 0;var t=Ze(e),n=D(e),r=t?1:0;return e.__iterate(n?t?function(s,i){r=31*r+dr(re(s),re(i))|0}:function(s,i){r=r+dr(re(s),re(i))|0}:t?function(s){r=31*r+re(s)|0}:function(s){r=r+re(s)|0}),fo(e.size,r)}function fo(e,t){return t=Tt(t,3432918353),t=Tt(t<<15|t>>>-15,461845907),t=Tt(t<<13|t>>>-13,5),t=(t+3864292196|0)^e,t=Tt(t^t>>>16,2246822507),t=Tt(t^t>>>13,3266489909),t=I1(t^t>>>16),t}function dr(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}function Ve(e,t){var n=function(r){e.prototype[r]=t[r]};return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}K.Iterator=w;Ve(K,{toArray:function(){se(this.size);var t=new Array(this.size||0),n=D(this),r=0;return this.__iterate(function(s,i){t[r++]=n?[i,s]:s}),t},toIndexedSeq:function(){return new ms(this)},toJS:function(){return m1(this)},toKeyedSeq:function(){return new L1(this,!0)},toMap:function(){return pt(this.toKeyedSeq())},toObject:Hs,toOrderedMap:function(){return We(this.toKeyedSeq())},toOrderedSet:function(){return Dt(D(this)?this.valueSeq():this)},toSet:function(){return E1(D(this)?this.valueSeq():this)},toSetSeq:function(){return new gs(this)},toSeq:function(){return pe(this)?this.toIndexedSeq():D(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return Ln(D(this)?this.valueSeq():this)},toList:function(){return H(D(this)?this.valueSeq():this)},toString:function(){return"[Collection]"},__toString:function(t,n){return this.size===0?t+n:t+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+n},concat:function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return R(this,Mi(this,t))},includes:function(t){return this.some(function(n){return oe(n,t)})},entries:function(){return this.__iterator(le)},every:function(t,n){se(this.size);var r=!0;return this.__iterate(function(s,i,o){if(!t.call(n,s,i,o))return r=!1,!1}),r},filter:function(t,n){return R(this,ys(this,t,n,!0))},partition:function(t,n){return Ni(this,t,n)},find:function(t,n,r){var s=this.findEntry(t,n);return s?s[1]:r},forEach:function(t,n){return se(this.size),this.__iterate(n?t.bind(n):t)},join:function(t){se(this.size),t=t!==void 0?""+t:",";var n="",r=!0;return this.__iterate(function(s){r?r=!1:n+=t,n+=s!=null?s.toString():""}),n},keys:function(){return this.__iterator(lt)},map:function(t,n){return R(this,Ts(this,t,n))},reduce:function(t,n,r){return cr(this,t,n,r,arguments.length<2,!1)},reduceRight:function(t,n,r){return cr(this,t,n,r,arguments.length<2,!0)},reverse:function(){return R(this,ln(this,!0))},slice:function(t,n){return R(this,fn(this,t,n,!0))},some:function(t,n){se(this.size);var r=!1;return this.__iterate(function(s,i,o){if(t.call(n,s,i,o))return r=!0,!1}),r},sort:function(t){return R(this,rt(this,t))},values:function(){return this.__iterator(ue)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return this.size!==void 0?this.size===0:!this.some(function(){return!0})},count:function(t,n){return tt(t?this.toSeq().filter(t,n):this)},countBy:function(t,n){return zi(this,t,n)},equals:function(t){return qs(this,t)},entrySeq:function(){var t=this;if(t._cache)return new nt(t._cache);var n=t.toSeq().map(ao).toIndexedSeq();return n.fromEntrySeq=function(){return t.toSeq()},n},filterNot:function(t,n){return this.filter(N1(t),n)},findEntry:function(t,n,r){var s=r;return this.__iterate(function(i,o,a){if(t.call(n,i,o,a))return s=[o,i],!1}),s},findKey:function(t,n){var r=this.findEntry(t,n);return r&&r[0]},findLast:function(t,n,r){return this.toKeyedSeq().reverse().find(t,n,r)},findLastEntry:function(t,n,r){return this.toKeyedSeq().reverse().findEntry(t,n,r)},findLastKey:function(t,n){return this.toKeyedSeq().reverse().findKey(t,n)},first:function(t){return this.find(as,null,t)},flatMap:function(t,n){return R(this,Pi(this,t,n))},flatten:function(t){return R(this,Zs(this,t,!0))},fromEntrySeq:function(){return new vs(this)},get:function(t,n){return this.find(function(r,s){return oe(s,t)},void 0,n)},getIn:$s,groupBy:function(t,n){return Wi(this,t,n)},has:function(t){return this.get(t,b)!==b},hasIn:uo,isSubset:function(t){return t=typeof t.includes=="function"?t:K(t),this.every(function(n){return t.includes(n)})},isSuperset:function(t){return t=typeof t.isSubset=="function"?t:K(t),t.isSubset(this)},keyOf:function(t){return this.findKey(function(n){return oe(n,t)})},keySeq:function(){return this.toSeq().map(oo).toIndexedSeq()},last:function(t){return this.toSeq().reverse().first(t)},lastKeyOf:function(t){return this.toKeyedSeq().reverse().keyOf(t)},max:function(t){return Vt(this,t)},maxBy:function(t,n){return Vt(this,n,t)},min:function(t){return Vt(this,t?ur(t):lr)},minBy:function(t,n){return Vt(this,n?ur(n):lr,t)},rest:function(){return this.slice(1)},skip:function(t){return t===0?this:this.slice(Math.max(0,t))},skipLast:function(t){return t===0?this:this.slice(0,-Math.max(0,t))},skipWhile:function(t,n){return R(this,bs(this,t,n,!0))},skipUntil:function(t,n){return this.skipWhile(N1(t),n)},sortBy:function(t,n){return R(this,rt(this,n,t))},take:function(t){return this.slice(0,Math.max(0,t))},takeLast:function(t){return this.slice(-Math.max(0,t))},takeWhile:function(t,n){return R(this,Di(this,t,n))},takeUntil:function(t,n){return this.takeWhile(N1(t),n)},update:function(t){return t(this)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=lo(this))}});var V=K.prototype;V[ss]=!0;V[w1]=V.values;V.toJSON=V.toArray;V.__toStringMapper=zt;V.inspect=V.toSource=function(){return this.toString()};V.chain=V.flatMap;V.contains=V.includes;Ve(he,{flip:function(){return R(this,_s(this))},mapEntries:function(t,n){var r=this,s=0;return R(this,this.toSeq().map(function(i,o){return t.call(n,[o,i],s++,r)}).fromEntrySeq())},mapKeys:function(t,n){var r=this;return R(this,this.toSeq().flip().map(function(s,i){return t.call(n,s,i,r)}).flip())}});var Ht=he.prototype;Ht[p1]=!0;Ht[w1]=V.entries;Ht.toJSON=Hs;Ht.__toStringMapper=function(e,t){return zt(t)+": "+zt(e)};Ve(He,{toKeyedSeq:function(){return new L1(this,!1)},filter:function(t,n){return R(this,ys(this,t,n,!1))},findIndex:function(t,n){var r=this.findEntry(t,n);return r?r[0]:-1},indexOf:function(t){var n=this.keyOf(t);return n===void 0?-1:n},lastIndexOf:function(t){var n=this.lastKeyOf(t);return n===void 0?-1:n},reverse:function(){return R(this,ln(this,!1))},slice:function(t,n){return R(this,fn(this,t,n,!1))},splice:function(t,n){var r=arguments.length;if(n=Math.max(n||0,0),r===0||r===2&&!n)return this;t=qt(t,t<0?this.count():this.size);var s=this.slice(0,t);return R(this,r===1?s:s.concat(ye(arguments,2),this.slice(t+n)))},findLastIndex:function(t,n){var r=this.findLastEntry(t,n);return r?r[0]:-1},first:function(t){return this.get(0,t)},flatten:function(t){return R(this,Zs(this,t,!1))},get:function(t,n){return t=Me(this,t),t<0||this.size===1/0||this.size!==void 0&&t>this.size?n:this.find(function(r,s){return s===t},void 0,n)},has:function(t){return t=Me(this,t),t>=0&&(this.size!==void 0?this.size===1/0||t<this.size:this.indexOf(t)!==-1)},interpose:function(t){return R(this,Ai(this,t))},interleave:function(){var t=[this].concat(ye(arguments)),n=Yt(this.toSeq(),ve.of,t),r=n.flatten(!0);return n.size&&(r.size=n.size*t.length),R(this,r)},keySeq:function(){return Qe(0,this.size)},last:function(t){return this.get(-1,t)},skipWhile:function(t,n){return R(this,bs(this,t,n,!1))},zip:function(){var t=[this].concat(ye(arguments));return R(this,Yt(this,pr,t))},zipAll:function(){var t=[this].concat(ye(arguments));return R(this,Yt(this,pr,t,!0))},zipWith:function(t){var n=ye(arguments);return n[0]=this,R(this,Yt(this,t,n))}});var mt=He.prototype;mt[d1]=!0;mt[Pe]=!0;Ve(ut,{get:function(t,n){return this.has(t)?t:n},includes:function(t){return this.has(t)},keySeq:function(){return this.valueSeq()}});var at=ut.prototype;at.has=V.includes;at.contains=at.includes;at.keys=at.values;Ve(qe,Ht);Ve(ve,mt);Ve(dt,at);function pr(){return ye(arguments)}function Ks(e){return En(e)&&Ze(e)}var Dt=function(e){function t(n){return n==null?Q1():Ks(n)?n:Q1().withMutations(function(r){var s=ut(n);se(s.size),s.forEach(function(i){return r.add(i)})})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.of=function(){return this(arguments)},t.fromKeys=function(r){return this(he(r).keySeq())},t.prototype.toString=function(){return this.__toString("OrderedSet {","}")},t}(E1);Dt.isOrderedSet=Ks;var Ye=Dt.prototype;Ye[Pe]=!0;Ye.zip=mt.zip;Ye.zipWith=mt.zipWith;Ye.zipAll=mt.zipAll;Ye.__empty=Q1;Ye.__make=Vs;function Vs(e,t){var n=Object.create(Ye);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}var hr;function Q1(){return hr||(hr=Vs(wt()))}function po(e){if(Ke(e))throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.");if(ke(e))throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.");if(e===null||typeof e!="object")throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.")}var q=function(t,n){var r;po(t);var s=function(a){var c=this;if(a instanceof s)return a;if(!(this instanceof s))return new s(a);if(!r){r=!0;var u=Object.keys(t),l=i._indices={};i._name=n,i._keys=u,i._defaultValues=t;for(var f=0;f<u.length;f++){var d=u[f];l[d]=f,i[d]?typeof console=="object"&&console.warn&&console.warn("Cannot define "+Rn(this)+' with property "'+d+'" since that property name is part of the Record API.'):ho(i,d)}}return this.__ownerID=void 0,this._values=H().withMutations(function(h){h.setSize(c._keys.length),he(a).forEach(function(p,m){h.set(c._indices[m],p===c._defaultValues[m]?void 0:p)})}),this},i=s.prototype=Object.create(z);return i.constructor=s,n&&(s.displayName=n),s};q.prototype.toString=function(){for(var t=Rn(this)+" { ",n=this._keys,r,s=0,i=n.length;s!==i;s++)r=n[s],t+=(s?", ":"")+r+": "+zt(this.get(r));return t+" }"};q.prototype.equals=function(t){return this===t||Ke(t)&&ct(this).equals(ct(t))};q.prototype.hashCode=function(){return ct(this).hashCode()};q.prototype.has=function(t){return this._indices.hasOwnProperty(t)};q.prototype.get=function(t,n){if(!this.has(t))return n;var r=this._indices[t],s=this._values.get(r);return s===void 0?this._defaultValues[t]:s};q.prototype.set=function(t,n){if(this.has(t)){var r=this._values.set(this._indices[t],n===this._defaultValues[t]?void 0:n);if(r!==this._values&&!this.__ownerID)return On(this,r)}return this};q.prototype.remove=function(t){return this.set(t)};q.prototype.clear=function(){var t=this._values.clear().setSize(this._keys.length);return this.__ownerID?this:On(this,t)};q.prototype.wasAltered=function(){return this._values.wasAltered()};q.prototype.toSeq=function(){return ct(this)};q.prototype.toJS=function(){return m1(this)};q.prototype.entries=function(){return this.__iterator(le)};q.prototype.__iterator=function(t,n){return ct(this).__iterator(t,n)};q.prototype.__iterate=function(t,n){return ct(this).__iterate(t,n)};q.prototype.__ensureOwner=function(t){if(t===this.__ownerID)return this;var n=this._values.__ensureOwner(t);return t?On(this,n,t):(this.__ownerID=t,this._values=n,this)};q.isRecord=Ke;q.getDescriptiveName=Rn;var z=q.prototype;z[ls]=!0;z[At]=z.remove;z.deleteIn=z.removeIn=Sn;z.getIn=$s;z.hasIn=V.hasIn;z.merge=xs;z.mergeWith=Ss;z.mergeIn=vn;z.mergeDeep=Ls;z.mergeDeepWith=Es;z.mergeDeepIn=gn;z.setIn=_n;z.update=Tn;z.updateIn=yn;z.withMutations=$t;z.asMutable=jt;z.asImmutable=Ut;z[w1]=z.entries;z.toJSON=z.toObject=V.toObject;z.inspect=z.toSource=function(){return this.toString()};function On(e,t,n){var r=Object.create(Object.getPrototypeOf(e));return r._values=t,r.__ownerID=n,r}function Rn(e){return e.constructor.displayName||e.constructor.name||"Record"}function ct(e){return cn(e._keys.map(function(t){return[t,e.get(t)]}))}function ho(e,t){try{Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(n){It(this.__ownerID,"Cannot set on an immutable record."),this.set(t,n)}})}catch{}}const Bt=null,{min:Fe,max:ge,abs:mr,floor:mo}=Math,Ys=(e,t,n)=>Fe(n,ge(t,e)),Gs=e=>[...e].sort((t,n)=>t-n),Xs=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},en=()=>{let e;return[new Promise(t=>{e=t}),e]},Js=e=>{let t;return()=>(e&&(t=e(),e=void 0),t)},Et=(e,t,n)=>{const r=n?"unshift":"push";for(let s=0;s<t;s++)e[r](-1);return e},Qs=(e,t)=>{const n=e.t[t];return n===-1?e.o:n},go=(e,t,n)=>{const r=e.t[t]===-1;return e.t[t]=n,e.i=Fe(t,e.i),r},f1=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let n=e.i,r=e.u[n];for(;n<t;)r+=Qs(e,n),e.u[++n]=r;return e.i=t,r},Je=(e,t,n=0,r=e.l-1)=>{let s=n;for(;n<=r;){const i=mo((n+r)/2);f1(e,i)<=t?(s=i,n=i+1):r=i-1}return Ys(s,0,e.l-1)},gr=(e,t,n)=>{const r=t-e.l;return e.i=n?-1:Fe(t-1,e.i),e.l=t,r>0?(Et(e.u,r),Et(e.t,r,n),e.o*r):(e.u.splice(r),(n?e.t.splice(0,-r):e.t.splice(r)).reduce((s,i)=>s-(i===-1?e.o:i),0))},vo=typeof window<"u",_o=e=>e.documentElement,To=e=>e.ownerDocument,yo=e=>e.defaultView,ei=Js(()=>!!/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>0),bo=Js(()=>"scrollBehavior"in _o(document).style),Zo=e=>ge(e.h(),e.p()),wo=(e,t=40,n=0,r,s=!1)=>{let i=!!n,o=1,a=0,c=0,u=0,l=0,f=0,d=0,h=0,p=0,m=Bt,v=[0,i?ge(n-1,0):-1],_=0,O=!1;const k=((y,S,I)=>({o:S,t:I?Et(I.slice(0,Fe(y,I.length)),ge(0,y-I.length)):Et([],y),l:y,i:-1,u:Et([],y+1)}))(e,r?r[1]:t,r&&r[0]),U=new Set,me=()=>u-c,x=()=>me()+f+l,_e=(y,S)=>((I,Y,T,Z)=>{if(Z=Fe(Z,I.l-1),f1(I,Z)<=Y){const L=Je(I,T,Z);return[Je(I,Y,Z,L),L]}{const L=Je(I,Y,void 0,Z);return[L,Je(I,T,L)]}})(k,y,S,v[0]),F=()=>f1(k,k.l),Ie=(y,S)=>{const I=f1(k,y)-f;return S?F()-I-Ue(y):I},Ue=y=>Qs(k,y),vt=(y,S=-1)=>k.t[y]===S,_t=y=>{y&&(ei()&&h!==0||m&&p===1?f+=y:l+=y)};return{v:()=>{U.clear()},m:()=>o,_:()=>(y=>[y.t.slice(),y.o])(k),S:(y=200)=>{if(!O||i)return v;let S,I;if(d)[S,I]=v;else{let Y=ge(0,x()),T=Y+a;s||(y=ge(0,y),h!==1&&(Y-=y),h!==2&&(T+=y)),[S,I]=v=_e(ge(0,Y),ge(0,T)),m&&(S=Fe(S,m[0]),I=ge(I,m[1]))}return[ge(S,0),Fe(I,k.l-1)]},$:y=>Je(k,y-c),I:vt,k:Ie,R:Ue,T:()=>k.l,C:()=>u,M:()=>h!==0,p:()=>a,O:()=>c,h:F,H:()=>(d=l,l=0,[d,p===2]),W:(y,S)=>{const I=[y,S];return U.add(I),()=>{U.delete(I)}},B:(y,S)=>{let I,Y,T=0;switch(y){case 1:{if(S===u&&p===0)break;const Z=d;d=0;const L=S-u,$=mr(L);Z&&$<mr(Z)+1||p!==0||(h=L<0?2:1),i&&(i=!1),u=S,T=4;const Le=me();Le>=-a&&Le<=F()&&(T+=1,Y=$>a);break}case 2:T=8,h!==0&&(I=!0,T+=1),h=0,p=0,m=Bt;break;case 3:{const Z=S.filter(([L,$])=>!vt(L,$));if(!Z.length)break;_t(Z.reduce((L,[$,Le])=>{let Ee;if(p===2)Ee=!0;else if(m&&p===1)Ee=$<m[0];else{const Ne=me(),Ge=Ie($),Xe=Ue($);Ee=h!==1&&p===0?Ge+Xe<Ne:Ge<Ne&&Ge+Xe<Ne+a}return Ee&&(L+=Le-Ue($)),L},0));for(const[L,$]of Z){const Le=Ue(L),Ee=go(k,L,$);s&&(_+=Ee?$:$-Le)}s&&a&&_>a&&(_t(((L,$)=>{let Le=0;const Ee=[];L.t.forEach((Fn,vi)=>{Fn!==-1&&(Ee.push(Fn),vi<$&&Le++)}),L.i=-1;const Ne=Gs(Ee),Ge=Ne.length,Xe=Ge/2|0,mi=Ge%2==0?(Ne[Xe-1]+Ne[Xe])/2:Ne[Xe],gi=L.o;return((L.o=mi)-gi)*ge($-Le,0)})(k,Je(k,x()))),s=!1),T=3,Y=!0;break}case 4:a!==S&&(a||(O=Y=!0),a=S,T=3);break;case 5:S[1]?(_t(gr(k,S[0],!0)),p=2,T=1):(gr(k,S[0]),T=1);break;case 6:c=S;break;case 7:p=1;break;case 8:m=_e(S,S+a),T=1}T&&(o=1+(2147483647&o),I&&f&&(l+=f,f=0),U.forEach(([Z,L])=>{T&Z&&L(Y)}))}}},Cn=setTimeout,B1=(e,t)=>t?-e:e,ko=(e,t,n,r,s,i)=>{const o=Date.now;let a=0,c=!1,u=!1,l=!1,f=!1;const d=(()=>{let _;const O=()=>{_!=Bt&&clearTimeout(_)},k=()=>{O(),_=Cn(()=>{_=Bt,(()=>{if(c||u)return c=!1,void d();l=!1,e.B(2)})()},150)};return k.J=O,k})(),h=()=>{a=o(),l&&(f=!0),e.B(1,r()),d()},p=_=>{if(c||!e.M()||_.ctrlKey)return;const O=o()-a;150>O&&50<O&&(n?_.deltaX:_.deltaY)&&(c=!0)},m=()=>{u=!0,l=f=!1},v=()=>{u=!1,ei()&&(l=!0)};return t.addEventListener("scroll",h),t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchend",v,{passive:!0}),{A:()=>{t.removeEventListener("scroll",h),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",m),t.removeEventListener("touchend",v),d.J()},L:()=>{const[_,O]=e.H();_&&(s(_,O,f),f=!1,O&&e.p()>e.h()&&e.B(1,r()))}}},xo=(e,t,n)=>{let r;return[async(s,i)=>{if(!await t())return;r&&r();const o=()=>{const[a,c]=en();return r=()=>{c(!1)},e.p()&&Cn(r,150),[a,e.W(2,()=>{c(!0)})]};if(i&&bo())e.B(8,s()),Xs(async()=>{for(;;){let a=!0;for(let[l,f]=e.S();l<=f;l++)if(e.I(l)){a=!1;break}if(a)break;const[c,u]=o();try{if(!await c)return}finally{u()}}e.B(7),n(s(),i)});else for(;;){const[a,c]=o();try{if(e.B(7),n(s()),!await a)return}finally{c()}}},()=>{r&&r()}]},So=(e,t)=>{let n,r,s=en(),i=!1;const o=t?"scrollLeft":"scrollTop",a=t?"overflowX":"overflowY",[c,u]=xo(e,()=>s[0],(l,f)=>{l=B1(l,i),f?n.scrollTo({[t?"left":"top"]:l,behavior:"smooth"}):n[o]=l});return{N(l,f){n=f,t&&(i=getComputedStyle(f).direction==="rtl"),r=ko(e,f,t,()=>B1(f[o],i),(d,h,p)=>{if(p){const m=f.style,v=m[a];m[a]="hidden",Cn(()=>{m[a]=v})}f[o]=B1(e.C()+d,i),h&&u()}),s[1](!0)},v(){r&&r.A(),s[1](!1),s=en()},P:()=>i,V(l){c(()=>l)},X(l){l+=e.C(),c(()=>l)},Y(l,{align:f,smooth:d,offset:h=0}={}){if(l=Ys(l,0,e.T()-1),f==="nearest"){const p=e.k(l),m=e.C();if(p<m)f="start";else{if(!(p+e.R(l)>m+e.p()))return;f="end"}}c(()=>h+e.O()+e.k(l)+(f==="end"?e.R(l)-e.p():f==="center"?(e.R(l)-e.p())/2:0),d)},q:()=>{r&&r.L()}}},Io=e=>{let t;return{D(n){(t||(t=new(yo(To(n))).ResizeObserver(e))).observe(n)},j(n){t.unobserve(n)},A(){t&&t.disconnect()}}},Lo=(e,t)=>{let n;const r=t?"width":"height",s=new WeakMap,i=Io(o=>{const a=[];for(const{target:c,contentRect:u}of o)if(c.offsetParent)if(c===n)e.B(4,u[r]);else{const l=s.get(c);l!=Bt&&a.push([l,u[r]])}a.length&&e.B(3,a)});return{G(o){i.D(n=o)},U:(o,a)=>(s.set(o,a),i.D(o),()=>{s.delete(o),i.j(o)}),v:i.A}},g1=vo?E.useLayoutEffect:E.useEffect,ne="current",ti=(e,t)=>{if(Array.isArray(e))for(const n of e)ti(n,t);else e==null||typeof e=="boolean"||t.push(e)},Eo=(e,t)=>{const n=e.key;return n??"_"+t},Oo=e=>{const t=E.useRef(null);return t[ne]||(t[ne]=e())},vr=e=>{const t=E.useRef(e);return g1(()=>{t[ne]=e},[e]),t},Ro=E.memo(({Z:e,ee:t,te:n,oe:r,ne:s,re:i,ie:o,se:a})=>{const c=E.useRef(null);g1(()=>t(c[ne],n),[n]);const u=E.useMemo(()=>{const l={contain:"layout style",position:s&&a?void 0:"absolute",[o?"height":"width"]:"100%",[o?"top":"left"]:0,[o?"left":"top"]:r,visibility:!s||a?void 0:"hidden"};return o&&(l.display="inline-flex"),l},[r,s,a,o]);return g.jsx(i,typeof i=="string"?{ref:c,style:u,children:e}:{ref:c,style:u,index:n,children:e})}),Co=(e,t)=>E.useMemo(()=>{if(typeof e=="function")return[r=>e(t[r],r),t.length];const n=(r=>{const s=[];return ti(r,s),s})(e);return[r=>n[r],n.length]},[e,t]),zo=E.forwardRef(({children:e,data:t,bufferSize:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,cache:a,startMargin:c=0,ssrCount:u,as:l="div",item:f="div",scrollRef:d,onScroll:h,onScrollEnd:p},m)=>{const[v,_]=Co(e,t),O=E.useRef(null),k=E.useRef(!!u),U=vr(h),me=vr(p),[x,_e,F,Ie]=Oo(()=>{const T=!!i,Z=wo(_,r,u,a,!r);return[Z,Lo(Z,T),So(Z,T),T]});_!==x.T()&&x.B(5,[_,s]),c!==x.O()&&x.B(6,c);const[Ue,vt]=E.useReducer(x.m,void 0,x.m),_t=x.M(),y=x.h(),S=F.P(),I=[],Y=T=>{const Z=v(T);return g.jsx(Ro,{ee:_e.U,te:T,oe:x.k(T,S),ne:x.I(T),re:f,Z,ie:Ie,se:k[ne]},Eo(Z,T))};if(g1(()=>{k[ne]=!1,x.W(1,L=>{L?_i.flushSync(vt):vt()}),x.W(4,()=>{U[ne]&&U[ne](x.C())}),x.W(8,()=>{me[ne]&&me[ne]()});const T=O[ne],Z=L=>{_e.G(L),F.N(T,L)};return d?Xs(()=>{d[ne]&&Z(d[ne])}):Z(T.parentElement),()=>{x.v(),_e.v(),F.v()}},[]),g1(()=>{F.q()},[Ue]),E.useImperativeHandle(m,()=>({get cache(){return x._()},get scrollOffset(){return x.C()},get scrollSize(){return Zo(x)},get viewportSize(){return x.p()},findItemIndex:x.$,getItemOffset:x.k,getItemSize:x.R,scrollToIndex:F.Y,scrollTo:F.V,scrollBy:F.X}),[]),o){const T=new Set(o);for(let[Z,L]=x.S(n);Z<=L;Z++)T.add(Z);Gs([...T]).forEach(Z=>{I.push(Y(Z))})}else for(let[T,Z]=x.S(n);T<=Z;T++)I.push(Y(T));return g.jsx(l,{ref:O,style:{contain:"size style",overflowAnchor:"none",flex:"none",position:"relative",width:Ie?y:"100%",height:Ie?"100%":y,pointerEvents:_t?"none":void 0},children:I})}),Wo=E.forwardRef(({children:e,data:t,bufferSize:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,cache:a,ssrCount:c,item:u,onScroll:l,onScrollEnd:f,style:d,...h},p)=>g.jsx("div",{...h,style:{display:i?"inline-block":"block",[i?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...d},children:g.jsx(zo,{ref:p,data:t,bufferSize:n,itemSize:r,shift:s,horizontal:i,keepMounted:o,cache:a,ssrCount:c,item:u,onScroll:l,onScrollEnd:f,children:e})})),No="_bold_127iv_1",Do="_underline_127iv_3",Bo="_italic_127iv_5",Mo="_wrapLine_127iv_9",Po="_noWrapLine_127iv_21",Ao="_black_127iv_29",qo="_red_127iv_31",Uo="_green_127iv_33",jo="_yellow_127iv_35",Fo="_blue_127iv_37",$o="_magenta_127iv_39",Ho="_cyan_127iv_41",Ko="_white_127iv_43",Vo="_grey_127iv_45",Yo="_blackBold_127iv_49",Go="_redBold_127iv_51",Xo="_greenBold_127iv_53",Jo="_yellowBold_127iv_55",Qo="_blueBold_127iv_57",ea="_magentaBold_127iv_59",ta="_cyanBold_127iv_61",na="_whiteBold_127iv_63",ra="_greyBold_127iv_65",sa="_blackBg_127iv_69",ia="_redBg_127iv_71",oa="_greenBg_127iv_73",aa="_yellowBg_127iv_75",ca="_blueBg_127iv_77",ua="_magentaBg_127iv_79",la="_cyanBg_127iv_81",fa="_whiteBg_127iv_83",da="_greyBg_127iv_85",Oe={bold:No,underline:Do,italic:Bo,wrapLine:Mo,noWrapLine:Po,black:Ao,red:qo,green:Uo,yellow:jo,blue:Fo,magenta:$o,cyan:Ho,white:Ko,grey:Vo,blackBold:Yo,redBold:Go,greenBold:Xo,yellowBold:Jo,blueBold:Qo,magentaBold:ea,cyanBold:ta,whiteBold:na,greyBold:ra,blackBg:sa,redBg:ia,greenBg:oa,yellowBg:aa,blueBg:ca,magentaBg:ua,cyanBg:la,whiteBg:fa,greyBg:da},pa=(e,t)=>{const n=["log-part"];return e.foreground&&e.bold?n.push(Oe[`${e.foreground}Bold`],Oe.bold):e.foreground?n.push(Oe[e.foreground]):e.bold&&n.push(Oe.bold),t?n.push(Oe.wrapLine):n.push(Oe.noWrapLine),e.background&&n.push(Oe[`${e.background}Bg`]),e.italic&&n.push(Oe.italic),e.underline&&n.push(Oe.underline),n.join(" ")},Dn=class Dn extends E.Component{render(){const{format:t,part:n,style:r}=this.props,s=n.text,i=pa(n,!!this.props.wrapLines),o=t?t(s):s;if(this.props.enableLinks){if(n.link)return g.jsxs("span",{children:[g.jsx("a",{className:i,href:s,target:"_blank",rel:"noopener noreferrer",children:o})," "]});if(n.email)return g.jsxs("span",{children:[g.jsx("a",{className:i,href:`mailto:${s}`,children:o})," "]})}return g.jsxs("span",{className:i,style:r,children:[o,this.props.enableLinks?" ":null]})}};Dn.defaultProps={format:null,style:null,enableLinks:!1,wrapLines:!1};let v1=Dn;v1.__docgenInfo={description:`An individual segment of text within a line. When the text content\r
is ANSI-parsed, each boundary is placed within its own \`LinePart\`\r
and styled separately (colors, text formatting, etc.) from the\r
rest of the line's content.`,methods:[],displayName:"LinePart",props:{part:{required:!0,tsType:{name:"LinePartCss"},description:`The pieces of data to render in a line. Will typically\r
be multiple items in the array if ANSI parsed prior.`},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"Style for the line Part",defaultValue:{value:"null",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false.",defaultValue:{value:"false",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Execute a function against each line part's\r\n`text` property in `data` to process and\r\nreturn a new value to render for the part.",defaultValue:{value:"null",computed:!1}},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}}}};const ha="_lineContent_fa3ye_1",ma={lineContent:ha},Bn=class Bn extends E.Component{render(){const{data:t,formatPart:n,onClick:r,number:s,style:i}=this.props;if(t){const o=t[t.length-1];o&&typeof o.text=="string"&&!o.text.endsWith(`
`)&&(o.text+=`
`)}return g.jsx("span",{className:`log-content ${ma.lineContent}`,style:i,onClick:r,children:t&&t.map((o,a)=>g.jsx(v1,{wrapLines:this.props.wrapLines,part:o,format:n,enableLinks:this.props.enableLinks},`line-${s}-${a}`))})}};Bn.defaultProps={formatPart:null,style:null};let _1=Bn;_1.__docgenInfo={description:"The container of all the individual pieces of content that\r\nis on a single line. May contain one or more `LinePart`s\r\ndepending on ANSI parsing.",methods:[],displayName:"LineContent",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:`The pieces of data to render in a line. Will typically\r
be multiple items in the array if ANSI parsed prior.`},number:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:"The line number being rendered."},formatPart:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Execute a function against each line part's\r\n`text` property in `data` to process and\r\nreturn a new value to render for the part.",defaultValue:{value:"null",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"CSS Style of the LineContent.",defaultValue:{value:"null",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false."},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false"}}};const ga="_lineGutter_1ek45_1",va={lineGutter:ga},Mn=class Mn extends E.Component{render(){const{gutter:t}=this.props;return g.jsx("span",{className:`log-gutter ${va.lineGutter}`,children:t})}};Mn.defaultProps={gutter:null};let T1=Mn;T1.__docgenInfo={description:"The gutter is an element between the line number and content.",methods:[],displayName:"LineGutter",props:{gutter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The gutter object",defaultValue:{value:"null",computed:!1}}}};const _a="_lineNumber_jm5lr_1",Ta="_wrapLine_jm5lr_31",ya="_lineNumberHighlight_jm5lr_47 _lineNumber_jm5lr_1",M1={lineNumber:_a,wrapLine:Ta,lineNumberHighlight:ya},Pn=class Pn extends E.Component{render(){const{highlight:t,onClick:n,number:r,style:s}=this.props,i=`log-number ${t?M1.lineNumberHighlight:M1.lineNumber} ${this.props.wrapLines?M1.wrapLine:""}`;return g.jsx("a",{id:""+r,onClick:n,className:i,style:s})}};Pn.defaultProps={style:null,highlight:!1,onClick:null,wrapLines:!1};let y1=Pn;y1.__docgenInfo={description:`The line number of a single line.\r
The anchor contained within is interactive, and will highlight the\r
entire line upon selection.`,methods:[],displayName:"LineNumber",props:{number:{required:!0,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:"The line number to display in the anchor."},highlight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Specify whether this line is highlighted.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"union",raw:"MouseEventHandler<HTMLAnchorElement> | undefined",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEventHandler<HTMLAnchorElement>"},{name:"undefined"}]},description:"Execute a function when the line number is clicked.",defaultValue:{value:"null",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"CSS style for the Line Number.",defaultValue:{value:"null",computed:!1}},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}}}};const ba="_line_1mn7u_1",Za="_wrapLine_1mn7u_11",wa="_lineHighlight_1mn7u_27",ka="_lineSelectable_1mn7u_35",Jt={line:ba,wrapLine:Za,lineHighlight:wa,lineSelectable:ka},An=class An extends E.Component{render(){const{data:t,formatPart:n,highlight:r,selectable:s,onLineNumberClick:i,onLineContentClick:o,number:a,rowHeight:c,style:u,className:l,highlightClassName:f,gutter:d,wrapLines:h}=this.props,p=s?` ${Jt.lineSelectable}`:"",m=r?` ${Jt.lineHighlight} ${f}`:"",v=`${Jt.line}${p}${m} ${h?Jt.wrapLine:""} ${l}`,_={...u,lineHeight:`${u&&u.height||c}px`,minWidth:u&&u.width||"100%",width:void 0};return g.jsxs("div",{className:v,style:_,children:[this.props.enableLineNumbers?g.jsx(y1,{number:a,highlight:r,onClick:i,wrapLines:h}):null,this.props.enableGutters?g.jsx(T1,{gutter:d}):null,g.jsx(_1,{wrapLines:h,number:a,formatPart:n,data:t,onClick:o,enableLinks:this.props.enableLinks})]})}};An.defaultProps={highlight:!1,selectable:!1,style:{},formatPart:void 0,onLineNumberClick:void 0,onLineContentClick:void 0,className:"",highlightClassName:"",enableLineNumbers:!0,enableLinks:!1,wrapLines:!1};let Te=An;Te.__docgenInfo={description:`A single row of content, containing both the line number\r
and any text content within the line.`,methods:[],displayName:"Line",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},number:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rowHeight:{required:!1,tsType:{name:"number"},description:""},highlight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},gutter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},highlightClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},enableLineNumbers:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Enable the line numbers to be displayed. Default is true.",defaultValue:{value:"true",computed:!1}},enableGutters:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Enable the line gutters to be displayed. Default is false"},wrapLines:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}},enableLinks:{required:!1,tsType:{name:"boolean"},description:"Enable hyperlinks to be discovered in log text and made clickable links. Default is false.",defaultValue:{value:"false",computed:!1}},formatPart:{required:!1,tsType:{name:"union",raw:"((text: string) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},onLineNumberClick:{required:!1,tsType:{name:"union",raw:"MouseEventHandler<HTMLAnchorElement> | undefined",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEventHandler<HTMLAnchorElement>"},{name:"undefined"}]},description:"",defaultValue:{value:"undefined",computed:!0}},onLineContentClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}};const xa="_loading_11ai0_1",Sa={loading:xa},b1=ee.memo(e=>g.jsx("svg",{width:"44",height:"44",viewBox:"0 0 44 44",stroke:"#fff",className:Sa.loading,...e,children:g.jsxs("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[g.jsxs("circle",{cx:"22",cy:"22",r:"1",children:[g.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),g.jsxs("circle",{cx:"22",cy:"22",r:"1",children:[g.jsx("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),g.jsx("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})}));b1.displayName="Loading";b1.__docgenInfo={description:"Just a loading spinner.",methods:[],displayName:"Loading"};/*!
 * hotkeys-js v4.0.2
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * @author kenny wong <wowohoo@qq.com>
 * @license MIT
 * @homepage https://jaywcjlove.github.io/hotkeys-js
 */const P1=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function A1(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent(`on${t}`,n)}function yt(e,t,n,r){e&&(e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent(`on${t}`,n))}function ni(e,t){const n=t.slice(0,t.length-1),r=[];for(let s=0;s<n.length;s++)r.push(e[n[s].toLowerCase()]);return r}function ri(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let n=t.lastIndexOf("");for(;n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Ia(e,t){const n=e.length>=t.length?e:t,r=e.length>=t.length?t:e;let s=!0;for(let i=0;i<n.length;i++)r.indexOf(n[i])===-1&&(s=!1);return s}function si(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}const Mt={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":P1?173:189,"=":P1?61:187,";":P1?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},de={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},St={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},M={};for(let e=1;e<20;e++)Mt[`f${e}`]=111+e;let W=[],Ot=null,et=null,ii="all";const Re=new Map,gt=e=>Mt[e.toLowerCase()]||de[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),La=e=>Object.keys(Mt).find(t=>Mt[t]===e),Ea=e=>Object.keys(de).find(t=>de[t]===e),oi=e=>{ii=e||"all"},Pt=()=>ii||"all",Oa=()=>W.slice(0),Ra=()=>W.map(e=>La(e)||Ea(e)||String.fromCharCode(e)),Ca=()=>{const e=[];return Object.keys(M).forEach(t=>{M[t].forEach(({key:n,scope:r,mods:s,shortcut:i})=>{e.push({scope:r,shortcut:i,mods:s,keys:n.split("+").map(o=>gt(o))})})}),e},ai=e=>{const t=e.target||e.srcElement,{tagName:n}=t;let r=!0;const s=n==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(s||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r},za=e=>(typeof e=="string"&&(e=gt(e)),W.indexOf(e)!==-1),Wa=(e,t)=>{let n,r;e||(e=Pt());for(const s in M)if(Object.prototype.hasOwnProperty.call(M,s))for(n=M[s],r=0;r<n.length;)n[r].scope===e?n.splice(r,1).forEach(({element:o})=>zn(o)):r++;Pt()===e&&oi(t||"all")};function Na(e){let t=si(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=gt(e.key));const n=W.indexOf(t);if(n>=0&&W.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&W.splice(0,W.length),(t===93||t===224)&&(t=91),t in A){A[t]=!1;for(const r in de)de[r]===t&&(ae[r]=!1)}}const ci=(e,...t)=>{if(typeof e>"u")Object.keys(M).forEach(n=>{Array.isArray(M[n])&&M[n].forEach(r=>Qt(r)),delete M[n]}),zn(null);else if(Array.isArray(e))e.forEach(n=>{n.key&&Qt(n)});else if(typeof e=="object")e.key&&Qt(e);else if(typeof e=="string"){let[n,r]=t;typeof n=="function"&&(r=n,n=""),Qt({key:e,scope:n,method:r,splitKey:"+"})}},Qt=({key:e,scope:t,method:n,splitKey:r="+"})=>{ri(e).forEach(i=>{const o=i.split(r),a=o.length,c=o[a-1],u=c==="*"?"*":gt(c);if(!M[u])return;t||(t=Pt());const l=a>1?ni(de,o):[],f=[];M[u]=M[u].filter(d=>{const p=(n?d.method===n:!0)&&d.scope===t&&Ia(d.mods,l);return p&&f.push(d.element),!p}),f.forEach(d=>zn(d))})};function _r(e,t,n,r){if(t.element!==r)return;let s;if(t.scope===n||t.scope==="all"){s=t.mods.length>0;for(const i in A)Object.prototype.hasOwnProperty.call(A,i)&&(!A[i]&&t.mods.indexOf(+i)>-1||A[i]&&t.mods.indexOf(+i)===-1)&&(s=!1);(t.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||s||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(W),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Tr(e,t){const n=M["*"];let r=si(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(ae.filter||ai).call(this,e))return;if((r===93||r===224)&&(r=91),W.indexOf(r)===-1&&r!==229&&W.push(r),["metaKey","ctrlKey","altKey","shiftKey"].forEach(c=>{const u=St[c];e[c]&&W.indexOf(u)===-1?W.push(u):!e[c]&&W.indexOf(u)>-1?W.splice(W.indexOf(u),1):c==="metaKey"&&e[c]&&(W=W.filter(l=>l in St||l===r))}),r in A){A[r]=!0;for(const c in de)if(Object.prototype.hasOwnProperty.call(de,c)){const u=St[de[c]];ae[c]=e[u]}if(!n)return}for(const c in A)Object.prototype.hasOwnProperty.call(A,c)&&(A[c]=e[St[c]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(W.indexOf(17)===-1&&W.push(17),W.indexOf(18)===-1&&W.push(18),A[17]=!0,A[18]=!0);const i=Pt();if(n)for(let c=0;c<n.length;c++)n[c].scope===i&&(e.type==="keydown"&&n[c].keydown||e.type==="keyup"&&n[c].keyup)&&_r(e,n[c],i,t);if(!(r in M))return;const o=M[r],a=o.length;for(let c=0;c<a;c++)if((e.type==="keydown"&&o[c].keydown||e.type==="keyup"&&o[c].keyup)&&o[c].key){const u=o[c],{splitKey:l}=u,f=u.key.split(l),d=[];for(let h=0;h<f.length;h++)d.push(gt(f[h]));d.sort().join("")===W.sort().join("")&&_r(e,u,i,t)}}const ae=function e(t,n,r){W=[];const s=ri(t);let i=[],o="all",a=document,c=0,u=!1,l=!0,f="+",d=!1,h=!1;if(r===void 0&&typeof n=="function"&&(r=n),Object.prototype.toString.call(n)==="[object Object]"){const p=n;p.scope&&(o=p.scope),p.element&&(a=p.element),p.keyup&&(u=p.keyup),p.keydown!==void 0&&(l=p.keydown),p.capture!==void 0&&(d=p.capture),typeof p.splitKey=="string"&&(f=p.splitKey),p.single===!0&&(h=!0)}for(typeof n=="string"&&(o=n),h&&ci(t,o);c<s.length;c++){const p=s[c].split(f);i=[],p.length>1&&(i=ni(de,p));let m=p[p.length-1];m=m==="*"?"*":gt(m),m in M||(M[m]=[]),M[m].push({keyup:u,keydown:l,scope:o,mods:i,shortcut:s[c],method:r,key:s[c],splitKey:f,element:a})}if(typeof a<"u"&&typeof window<"u"){if(!Re.has(a)){const p=(v=window.event)=>Tr(v,a),m=(v=window.event)=>{Tr(v,a),Na(v)};Re.set(a,{keydownListener:p,keyupListenr:m,capture:d}),A1(a,"keydown",p,d),A1(a,"keyup",m,d)}if(!Ot){const p=()=>{W=[]};Ot={listener:p,capture:d},A1(window,"focus",p,d)}if(!et&&typeof document<"u"){const p=()=>{W=[];for(const _ in A)A[_]=!1;for(const _ in de)e[_]=!1},m=p,v=p;document.addEventListener("fullscreenchange",m),document.addEventListener("webkitfullscreenchange",v),et={fullscreen:m,webkit:v}}}};function Da(e,t="all"){Object.keys(M).forEach(n=>{M[n].filter(s=>s.scope===t&&s.shortcut===e).forEach(s=>{s&&s.method&&s.method({},s)})})}function zn(e){const t=Object.values(M).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:s,capture:i}=Re.get(e)||{};r&&s&&(yt(e,"keyup",s,i),yt(e,"keydown",r,i),Re.delete(e))}if(t.length<=0||Re.size<=0){if(Array.from(Re.keys()).forEach(s=>{const{keydownListener:i,keyupListenr:o,capture:a}=Re.get(s)||{};i&&o&&(yt(s,"keyup",o,a),yt(s,"keydown",i,a),Re.delete(s))}),Re.clear(),Object.keys(M).forEach(s=>delete M[s]),Ot){const{listener:s,capture:i}=Ot;yt(window,"focus",s,i),Ot=null}et&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",et.fullscreen),document.removeEventListener("webkitfullscreenchange",et.webkit),et=null)}}const q1={getPressedKeyString:Ra,setScope:oi,getScope:Pt,deleteScope:Wa,getPressedKeyCodes:Oa,getAllKeyCodes:Ca,isPressed:za,filter:ai,trigger:Da,unbind:ci,keyMap:Mt,modifier:de,modifierMap:St};for(const e in q1){const t=e;Object.prototype.hasOwnProperty.call(q1,t)&&(ae[t]=q1[t])}if(typeof window<"u"){const e=window.hotkeys;ae.noConflict=t=>(t&&window.hotkeys===ae&&(window.hotkeys=e),ae),window.hotkeys=ae}typeof module<"u"&&module.exports&&(module.exports=ae,module.exports.default=ae);const Ba="_downArrowIcon_1pu8r_1",Ma={downArrowIcon:Ba},ui=ee.memo(e=>g.jsx("svg",{className:Ma.downArrowIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.4 122.88",children:g.jsx("path",{d:"M24.94,55A14.66,14.66,0,0,0,4.38,75.91l43.45,42.76a14.66,14.66,0,0,0,20.56,0L111,76.73A14.66,14.66,0,0,0,90.46,55.82l-18,17.69-.29-59.17c-.1-19.28-29.42-19-29.33.24l.29,58.34L24.94,55Z"})}));ui.__docgenInfo={description:"",methods:[],displayName:"DownArrowIcon"};const Pa="_upArrowIcon_kt6mw_1",Aa={upArrowIcon:Pa},li=ee.memo(e=>g.jsx("svg",{className:Aa.upArrowIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.4 122.88",children:g.jsx("path",{d:"M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"})}));li.__docgenInfo={description:"",methods:[],displayName:"UpArrowIcon"};const qa="_filterLinesIcon_1uema_1",Ua={filterLinesIcon:qa},fi=ee.memo(e=>g.jsx("svg",{className:Ua.filterLinesIcon,...e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 286.054 286.054",children:g.jsx("path",{d:"M8.939 44.696h178.784a8.931 8.931 0 0 0 8.939-8.939V8.939A8.937 8.937 0 0 0 187.723 0H8.939C4.005 0 0 4.005 0 8.939v26.818c0 4.934 4.005 8.939 8.939 8.939zm268.176 35.757H8.939C4.005 80.453 0 84.457 0 89.392v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939V89.392a8.936 8.936 0 0 0-8.939-8.939zM8.939 205.601h178.784a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939H8.939A8.937 8.937 0 0 0 0 169.844v26.818a8.937 8.937 0 0 0 8.939 8.939zm268.176 35.757H8.939A8.937 8.937 0 0 0 0 250.297v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939z"})}));fi.__docgenInfo={description:"",methods:[],displayName:"FilterLinesIcon"};const ja="_searchBar_pknmc_1",Fa="_searchInput_pknmc_23",$a="_active_pknmc_45",Ha="_clickable_pknmc_55",Ka="_inactive_pknmc_65",Va="_button_pknmc_79",Q={searchBar:ja,searchInput:Fa,active:$a,clickable:Ha,inactive:Ka,button:Va},qn=class qn extends E.Component{constructor(t){super(t),this.state={keywords:""},this.handleSearchChange=n=>{const{value:r}=n.target;this.setState({keywords:r},()=>this.search())},this.handleFilterToggle=()=>{this.props.onFilterLinesWithMatches&&this.props.onFilterLinesWithMatches(!this.props.filterActive)},this.handleKeyPress=n=>{n.key==="Enter"&&(n.shiftKey?this.props.onShiftEnter&&this.props.onShiftEnter(n):this.props.onEnter&&this.props.onEnter(n))},this.handleSearchHotkey=n=>{this.inputRef.current&&(n.preventDefault(),this.inputRef.current.focus())},this.search=()=>{const{keywords:n}=this.state,{onSearch:r,onClearSearch:s,searchMinCharacters:i=2}=this.props;n&&n.length>i?r&&r(n):s&&s()},this.inputRef=E.createRef()}componentDidMount(){if(this.props.enableHotKeys){const t=this;ae("ctrl+f,command+f,f3,ctrl+f3",function(n,r){switch(r.key){case"ctrl+f":case"command+f":t.handleSearchHotkey(n),n.preventDefault();break;case"f3":t.props.onEnter(n),n.preventDefault();break;case"ctrl+f3":t.props.onShiftEnter(n),n.preventDefault();break}}),ae.filter=()=>!0}}componentWillUnmount(){this.props.enableHotKeys&&ae.deleteScope("all")}render(){var f,d,h,p,m,v;const{resultsCount:t,filterActive:n,disabled:r,enableSearchNavigation:s,currentResultsPosition:i,onEnter:o,onShiftEnter:a}=this.props,c=`${t===1?((f=this.props.internacionalization)==null?void 0:f.matchLabel)||"match":((d=this.props.internacionalization)==null?void 0:d.matchesLabel)||"matches"}`,u=n?Q.active:Q.inactive,l=t?Q.active:Q.inactive;return g.jsxs("div",{className:`react-lazylog-searchbar ${Q.searchBar}`,children:[g.jsx("span",{className:`react-lazylog-searchbar-matches ${t?"active":"inactive"} ${t?Q.active:Q.inactive}`,style:{marginRight:"10px"},children:s&&t?`${i+1} of ${t} ${c}`:`${t} ${c}`}),g.jsx("input",{autoComplete:"off",type:"text",name:"search",placeholder:((h=this.props.internacionalization)==null?void 0:h.searchPlaceholder)||"Search",className:`react-lazylog-searchbar-input ${Q.searchInput}`,onChange:this.handleSearchChange,onKeyUp:this.handleKeyPress,value:this.state.keywords,disabled:r,ref:this.inputRef,"aria-label":"Search Log"}),g.jsx("button",{title:((p=this.props.internacionalization)==null?void 0:p.filterLinesTitle)||"Filter Lines",disabled:r,className:`react-lazylog-searchbar-filter ${n?"active":"inactive"} ${Q.button} ${u} ${Q.clickable}`,onKeyUp:this.handleKeyPress,onMouseUp:this.handleFilterToggle,children:this.props.iconFilterLines||g.jsx(fi,{})}),s&&g.jsxs(E.Fragment,{children:[g.jsx("button",{title:((m=this.props.internacionalization)==null?void 0:m.previousButtonTitle)||"Previous",disabled:r,className:`react-lazylog-searchbar-up-arrow ${t?`active ${Q.clickable}`:"inactive"} ${Q.button} ${l}`,onClick:a,children:this.props.iconFindPrevious||g.jsx(li,{})}),g.jsx("button",{title:((v=this.props.internacionalization)==null?void 0:v.nextButtonTitle)||"Next",disabled:r,className:`react-lazylog-searchbar-down-arrow ${t?`active ${Q.clickable}`:"inactive"} ${Q.button} ${l}`,onClick:o,children:this.props.iconFindNext||g.jsx(ui,{})})]})]})}};qn.defaultProps={currentResultsPosition:0,disabled:!1,enableHotKeys:!1,filterActive:!1,onClearSearch:()=>{},onFilterLinesWithMatches:()=>{},onSearch:()=>{},resultsCount:0,searchMinCharacters:2};let Z1=qn;Z1.__docgenInfo={description:"",methods:[{name:"handleSearchChange",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}],alias:"React.ChangeEvent"}}],returns:null},{name:"handleFilterToggle",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyPress",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLElement>",elements:[{name:"HTMLElement"}],alias:"React.KeyboardEvent"}}],returns:null},{name:"handleSearchHotkey",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"search",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SearchBar",props:{enableSearchNavigation:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:`If true, adds up and down arrows to search bar to jump\r
to the next and previous result. The down arrow calls\r
"onEnter" and the up arrow calls "onShiftEnter"\r
Defaults to false, which does not add the arrows.`},enableHotKeys:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:`If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,\r
etc.)`,defaultValue:{value:"false",computed:!1}},currentResultsPosition:{required:!1,tsType:{name:"number"},description:`The current result the browser search is highlighting.\r
Only applicable if searchLikeBrowser is true.\r
Defaults to 0.`,defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"If true, the input field and filter button will be disabled.",defaultValue:{value:"false",computed:!1}},filterActive:{required:!1,tsType:{name:"boolean"},description:"If true, then only lines that match the search term will be displayed.",defaultValue:{value:"false",computed:!1}},iconFilterLines:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Filter Lines button in the Search Bar. Defaults to FilterLineIcon SVG."},iconFindNext:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Next button in the Search Bar. Defaults to ArrowDownIcon SVG."},iconFindPrevious:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for the Find Previous button in the Search Bar. Defaults to ArrowUpIcon SVG."},onClearSearch:{required:!1,tsType:{name:"union",raw:"(() => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Executes a function when the search input has been cleared.",defaultValue:{value:"() => {}",computed:!1}},onFilterLinesWithMatches:{required:!1,tsType:{name:"union",raw:"((isFiltered: boolean) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"Executes a function when the option `Filter Lines With Matches`\r\nis enable.",defaultValue:{value:"() => {}",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(keyword: string) => void",signature:{arguments:[{type:{name:"string"},name:"keyword"}],return:{name:"void"}}},description:"Executes a function when the user starts typing.",defaultValue:{value:"() => {}",computed:!1}},onEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.UIEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactUIEvent",raw:"React.UIEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:"Exectues a function when enter is pressed."},onShiftEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.UIEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactUIEvent",raw:"React.UIEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:"Exectues a function when shift + enter is pressed."},resultsCount:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:`Number of search results. Should come from the component\r
executing the search algorithm.`,defaultValue:{value:"0",computed:!1}},searchMinCharacters:{required:!1,tsType:{name:"number"},description:"Minimum number of characters to trigger a search. Defaults to 2.",defaultValue:{value:"2",computed:!1}},internacionalization:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    matchLabel?: string;\r
    matchesLabel?: string;\r
    filterLinesTitle?: string;\r
    previousButtonTitle?: string;\r
    nextButtonTitle?: string;\r
    searchPlaceholder?: string;\r
}`,signature:{properties:[{key:"matchLabel",value:{name:"string",required:!1}},{key:"matchesLabel",value:{name:"string",required:!1}},{key:"filterLinesTitle",value:{name:"string",required:!1}},{key:"previousButtonTitle",value:{name:"string",required:!1}},{key:"nextButtonTitle",value:{name:"string",required:!1}},{key:"searchPlaceholder",value:{name:"string",required:!1}}]}},description:"Object containing internationalization strings for the search bar."}}};const yr={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"white",90:"grey"},br={40:"black",41:"red",42:"green",43:"yellow",44:"blue",45:"magenta",46:"cyan",47:"white"},Zr={1:"bold",3:"italic",4:"underline"},Ya=(e,t)=>{if(e.length)return[e.substr(0,e.length-1),t];if(t.length){const n=t.length-1,{text:r}=t[n],s=r.length===1?t.slice(0,t.length-1):t.map((i,o)=>n===o?{...i,text:r.substr(0,r.length-1)}:i);return[e,s]}return[e,t]},wr=e=>{let t=null,n=null,r="",s=[],i=[],o={};for(let a=0;a<e.length;a++){if(t!==null){t==="\x1B"&&e[a]==="["?(r&&(o.text=r,i.push(o),o={text:""},r=""),t=null,n=""):(r+=t+e[a],t=null);continue}else if(n!==null){if(e[a]===";")s.push(n),n="";else if(e[a]==="m"){s.push(n),n=null,r="";for(let c=0;c<s.length;c++){const u=s[c];yr[u]?o.foreground=yr[u]:br[u]?o.background=br[u]:u==="39"?delete o.foreground:u==="49"?delete o.background:Zr[u]?o[Zr[u]]=!0:u==="22"?o.bold=!1:u==="23"?o.italic=!1:u==="24"&&(o.underline=!1)}s=[]}else n+=e[a];continue}e[a]==="\x1B"?t=e[a]:e[a]==="\b"?[r,i]=Ya(r,i):r+=e[a]}return r&&(o.text=r+(t||""),i.push(o)),i},Ce=e=>new TextEncoder().encode(e),di=e=>(ArrayBuffer.isView(e)||(e=new Uint8Array([e])),new TextDecoder("utf-8").decode(e));function O1(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(s){s(n)}),(r=e.get("*"))&&r.slice().map(function(s){s(t,n)})}}}var U1,kr;function Ga(){if(kr)return U1;kr=1;var e=function(i){return i instanceof RegExp},t=function(o){var a=/[\\^$.*+?()[\]{}|]/g,c=RegExp(a.source);return o&&c.test(o)?o.replace(a,"\\$&"):o},n=function(i){return typeof i=="string"},r=function(i){var o=[];return i.forEach(function(a){Array.isArray(a)?o=o.concat(a):o.push(a)}),o};function s(i,o,a,c=null){var u=0,l=0;if(i==="")return i;if(!i||!n(i))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var f=o;e(f)||(f=new RegExp("("+t(f)+")","gi"));for(var d=i.split(f),h=1,p=d.length;h<p&&!(Number.isInteger(c)&&(c*2<h||c<1));h+=2){if(d[h]===void 0||d[h-1]===void 0){console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");continue}l=d[h].length,u+=d[h-1].length,d[h]=a(d[h],(h-1)/2,u),u+=l}return d}return U1=function(o,a,c,u=null){return Array.isArray(o)||(o=[o]),r(o.map(function(l){var f;if(n(l))if(Number.isInteger(u)&&u>0){f=s(l,a,c,u);var d=e(a)?a:new RegExp("("+t(a)+")","gi");u-=(l.match(d)||[]).length}else f=s(l,a,c,u);else f=l;return f}))},U1}var Xa=Ga();const j1=Ti(Xa),Wn=10,Nn=13,xr=45,pi=e=>e===Wn||e===Nn,bt=({follow:e=!1,scrollToLine:t=0,previousCount:n=0,count:r=0,offset:s=0})=>e?r-1-s:t&&n>t?-1:t?t-1-s:-1,F1=e=>!e||Array.isArray(e)&&(isNaN(e[0])||isNaN(e[1]))||!Array.isArray(e)&&isNaN(e)?Qe(0,0):Array.isArray(e)?e.length===1?Qe(e[0],e[0]+1):Qe(e[0],e[1]+1):Qe(e,e+1),Kt=(e,t)=>{const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n},$e=(e,t)=>{const n=t?Kt(t,e):e,{length:r}=n;let s=0,i=0;return{lines:H().withMutations(a=>{for(;i<r;){const c=n[i],u=n[i+1];pi(c)?(a.push(n.subarray(s,i)),s=c===Nn&&u===Wn?i+2:i+1,i=s):i+=1}!t&&i!==s&&a.push(n.slice(s))}),remaining:i!==s?n.slice(s):null}},Ja=e=>{const{length:t}=e,n=[];let r=0,s=0;for(;s<t;){const i=e[s],o=e[s+1];pi(i)?(n.push(s),r=i===Nn&&o===Wn?s+2:s+1,s=r):s+=1}return n},Sr=({searchKeywords:e,nextFormatPart:t,caseInsensitive:n,replaceJsx:r,selectedLine:s,replaceJsxHighlight:i,highlightedWordLocation:o})=>a=>{let c=a;const u=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),l=new RegExp(`(?=${u})`,n?"i":void 0),f=a.split(l),d=new RegExp(`(${u})`,n?"i":void 0),h=()=>(s?f.length===1?c=j1(c,u,i):c=f.map((p,m)=>j1(p,d,m===o?i:r)):c=j1(c,d,r),c);return n?a.toLowerCase().includes(e.toLowerCase())&&(c=h()):a.includes(e)&&(c=h()),c},Qa='^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")',ec="[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$",tc=new RegExp(`${Qa}@${ec}`),Ir="(((http|ftp)?s?s?)(:)(/{2}))",nc=/https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/,rc=e=>{const t=[];return e.forEach(n=>{const r=n.text.split(" ");let s=!1,i="";r.forEach(o=>{if(o.search(nc)>-1){if(t.push({text:i.trimEnd()}),i="",s=!0,o.search(tc)>-1){t.push({token:o,email:!0});return}if(o.search(Ir)===-1){t.push({text:`https://${o}`,link:!0});return}o.split(new RegExp(/(\()*([^\)]+)(\))*/)).filter(Boolean).forEach(c=>{c.search(Ir)>-1?t.push({text:c,link:!0}):t.push({text:c})});return}i+=o+" "}),s||t.push(n)}),t},sc=(e,t)=>{const{withCredentials:n,onOpen:r,onClose:s,onError:i,formatMessage:o}=t,a=O1();let c=new Uint8Array,u=null;return a.on("data",l=>{c=Kt(c,Ce(l));const{lines:f,remaining:d}=$e(Ce(l),u);u=d,a.emit("update",{lines:f,encodedLog:c})}),a.on("done",()=>{u&&a.emit("update",{lines:H.of(u),encodedLog:c}),a.emit("end",c)}),a.on("start",()=>{try{const l=new EventSource(e,{withCredentials:n});l.addEventListener("open",f=>{r&&r(f,l)}),l.addEventListener("close",f=>{s&&s(f)}),l.addEventListener("error",f=>{i&&i(f),t.reconnect===!1&&l.close()}),l.addEventListener("message",f=>{let d=o?o(f.data):f.data;typeof d=="string"&&(d=d.endsWith(`
`)?d:`${d}
`,a.emit("data",d))}),a.on("abort",()=>{l.close()})}catch(l){a.emit("error",l)}}),a},ic=Promise.resolve().then(()=>globalThis.fetch),oc=(e,t)=>{const n=O1();return n.on("start",async()=>{try{const s=await(await ic)(e,Object.assign({credentials:"omit"},t));if(!s.ok){const c=new Error(s.statusText);c.status=s.status,n.emit("error",c);return}const i=await s.arrayBuffer(),o=new Uint8Array(i),{lines:a}=$e(o);n.emit("update",{lines:a}),n.emit("end",o)}catch(r){n.emit("error",r)}}),n},ac=(e,t)=>{const n=Array.from(Ce(e)),r=[-1,0],s=n.length,i=t.length,o=s-1;let a=0,c=0,u=0,l=2;for(;l<s;)n[l-1]===n[a]?(a+=1,r[l]=a,l+=1):a>0?a=r[a]:(r[l]=0,l+=1);const f=[];for(;c+u<i;)n[u]===t[c+u]?(u===o&&f.push(c),u+=1):r[u]>-1?(c=c+u-r[u],u=r[u]):(u=0,c+=1);return f},cc=(e,t,n)=>{let r=e,s=t,i=di(s);n&&(r=r==null?void 0:r.toLowerCase(),i=i.toLowerCase()),i=i.endsWith(`
`)?i:i+`
`,s=Ce(i);const o=ac(r,s),a=Ja(s),c=a.length,u=o.length,l=[];let f=0,d=0,h,p;for(;f<c;){for(h=a[f];d<u&&(p=o[d],p<=h);)l.push(f+1),d+=1;f+=1}return l},uc=Promise.resolve().then(()=>globalThis.fetch),hi=async(e,t)=>{const n=await e.read();if(n.value&&t.emit("data",n.value),!n.done)return hi(e,t);t.emit("done")},lc=(e,t)=>{const n=O1();let r=null,s=new Uint8Array;return n.on("data",i=>{s=Kt(s,new Uint8Array(i));const{lines:o,remaining:a}=$e(i,r);r=a,n.emit("update",{lines:o,encodedLog:s})}),n.on("done",()=>{r&&n.emit("update",{lines:H.of(r),encodedLog:s}),n.emit("end",s)}),n.on("start",async()=>{var i;try{const a=await(await uc)(e,Object.assign({credentials:"omit"},t));if(!a.ok){const u=new Error(a.statusText);u.status=a.status,n.emit("error",u);return}const c=(i=a.body)==null?void 0:i.getReader();return n.on("abort",()=>c==null?void 0:c.cancel("ABORTED")),hi(c,n)}catch(o){n.emit("error",o)}}),n},fc=(e,t)=>{const{onOpen:n,onClose:r,onError:s,formatMessage:i,protocols:o}=t,a=O1();let c=new Uint8Array,u=null,l=!1;return a.on("data",f=>{c=Kt(c,Ce(f));const{lines:d,remaining:h}=$e(Ce(f),u);u=h,a.emit("update",{lines:d,encodedLog:c})}),a.on("done",()=>{u&&a.emit("update",{lines:H.of(u),encodedLog:c}),a.emit("end",c)}),a.on("start",()=>{try{const f=new WebSocket(e,o);f.addEventListener("open",d=>{n&&n(d,f)}),f.addEventListener("close",d=>{if(r&&r(d),!l&&t.reconnect){const h=t.reconnectWait??1;setTimeout(()=>a.emit("start"),h*1e3)}}),f.addEventListener("error",d=>{s&&s(d)}),f.addEventListener("message",d=>{let h=i?i(d.data):d.data;typeof h=="string"&&(h=h.endsWith(`
`)?h:`${h}
`,a.emit("data",h))}),a.on("abort",()=>{l=!0,f.close()})}catch(f){a.emit("error",f)}}),a},dc="_lazyLog_1hlpt_1",pc="_wrapLine_1hlpt_35",hc="_searchMatch_1hlpt_43",mc="_searchMatchHighlighted_1hlpt_53",Zt={lazyLog:dc,wrapLine:pc,searchMatch:hc,searchMatchHighlighted:mc},gc=E.forwardRef(({children:e,style:t},n)=>{const{contain:r,...s}=t||{};return g.jsx("li",{ref:n,style:s,children:e})}),Un=class Un extends E.Component{constructor(){super(...arguments),this.state={resultLines:[],count:0,currentResultsPosition:0,isFilteringLinesWithMatches:!1,isSearching:!1,offset:0,resultLineUniqueIndexes:[],scrollOffset:0,scrollToIndex:0,scrollToLine:0,lines:H()},this.emitter=void 0,this.encodedLog=void 0,this.searchBarRef=ee.createRef(),this.listRef=ee.createRef(),this.handleUpdate=({lines:t,encodedLog:n})=>{this.encodedLog=n;const{scrollToLine:r,follow:s,stream:i,websocket:o,eventsource:a,external:c}=this.props;if(i||o||a||c)this.setState((u,l)=>{const{scrollToLine:f,follow:d}=l,{count:h}=u,p=0,m=(u.lines||H()).concat(t),v=m.count(),_=bt({follow:d,scrollToLine:f,previousCount:h,count:v,offset:p});return{lines:m,offset:p,count:v,scrollToIndex:_}}),this.forceSearch();else{const{count:u}=this.state,l=0,f=(this.state.lines||H()).concat(t),d=f.count(),h=bt({follow:s,scrollToLine:r,previousCount:u,count:d,offset:l});this.setState({lines:f,offset:l,count:d,scrollToIndex:h})}},this.handleEnd=t=>{this.encodedLog=t,this.setState({loaded:!0}),this.props.onLoad&&this.props.onLoad()},this.handleError=t=>{this.setState({error:t}),this.props.onError&&this.props.onError(t)},this.handleHighlight=t=>{var f,d;const{onHighlight:n,enableMultilineHighlight:r}=this.props,{isFilteringLinesWithMatches:s}=this.state;if(!t.currentTarget.id)return;const i=+t.currentTarget.id;if(!i)return;const o=(f=this.state.highlight)==null?void 0:f.first(),a=(d=this.state.highlight)==null?void 0:d.last();let c;o===i?c=null:!t.shiftKey||!o?c=i:r&&i>o?c=[o,i]:!r&&i>o?c=i:c=[i,a];const u=F1(c),l={highlight:u};return s&&Object.assign(l,{scrollToIndex:bt({scrollToLine:i})}),this.setState(l,()=>{n&&n(u),s&&this.handleFilterLinesWithMatches(!1)}),u},this.handleEnterPressed=()=>{const{resultLines:t,scrollToLine:n,currentResultsPosition:r,isFilteringLinesWithMatches:s}=this.state;if(!this.props.enableSearchNavigation){this.handleFilterLinesWithMatches(!s);return}if(t){if(n&&r+1<t.length){this.handleScrollToLine(t[r+1]),this.setState({currentResultsPosition:r+1});return}this.handleScrollToLine(t[0]),this.setState({currentResultsPosition:0})}},this.handleShiftEnterPressed=()=>{const{resultLines:t,scrollToLine:n,currentResultsPosition:r}=this.state;if(this.props.enableSearchNavigation&&t){if(n&&r-1>=0){this.handleScrollToLine(t[r-1]),this.setState({currentResultsPosition:r-1});return}this.handleScrollToLine(t[t.length-1]),this.setState({currentResultsPosition:t.length-1})}},this.handleSearch=t=>{const{resultLines:n,searchKeywords:r,currentResultsPosition:s}=this.state,{caseInsensitive:i,stream:o,websocket:a,eventsource:c,external:u}=this.props,l=!o&&!a&&!c&&!u&&t===r?n:cc(t,this.encodedLog,i);let f=s;f>l.length-1&&(f=0),this.setState({resultLines:l,isSearching:!0,searchKeywords:t,currentResultsPosition:f},this.filterLinesWithMatches)},this.forceSearch=()=>{const{searchKeywords:t}=this.state,{searchMinCharacters:n}=this.props;t&&t.length>(n||0)&&this.handleSearch(this.state.searchKeywords)},this.handleClearSearch=()=>{this.setState({isSearching:!1,searchKeywords:"",resultLines:[],filteredLines:H(),resultLineUniqueIndexes:[],isFilteringLinesWithMatches:this.state.isFilteringLinesWithMatches,scrollToIndex:0,currentResultsPosition:0})},this.handleFilterLinesWithMatches=t=>{this.setState({isFilteringLinesWithMatches:t,filteredLines:H(),resultLineUniqueIndexes:[]},this.filterLinesWithMatches)},this.filterLinesWithMatches=()=>{const{resultLines:t,lines:n,isFilteringLinesWithMatches:r}=this.state;if(t.length>0&&r){const s=[...new Set(t)];this.setState({resultLineUniqueIndexes:s,filteredLines:n==null?void 0:n.filter((i,o)=>s.some(a=>o+1===a))})}},this.handleFormatPart=t=>{const{isSearching:n,searchKeywords:r,resultLines:s,currentResultsPosition:i}=this.state,{enableSearchNavigation:o}=this.props;if(n){if(o&&s&&i!==void 0&&s[i]===t){let a=0;const c=s.findIndex(u=>u===s[i]);for(let u=c;u<=i;u+=1)s[u]===t&&(a+=1);return Sr({searchKeywords:r,nextFormatPart:void 0,caseInsensitive:this.props.caseInsensitive,replaceJsx:(u,l)=>g.jsx("span",{className:Zt.searchMatch,children:u},l),selectedLine:!0,replaceJsxHighlight:(u,l)=>g.jsx("span",{className:Zt.searchMatchHighlighted,children:u},l),highlightedWordLocation:a})}return Sr({searchKeywords:r,nextFormatPart:void 0,caseInsensitive:this.props.caseInsensitive,replaceJsx:(a,c)=>g.jsx("span",{className:Zt.searchMatch,children:a},c),selectedLine:void 0,replaceJsxHighlight:void 0,highlightedWordLocation:void 0})}return this.props.formatPart},this.renderRow=t=>{const{rowHeight:n,selectableLines:r,lineClassName:s,highlightLineClassName:i,onLineNumberClick:o,onLineContentClick:a,gutter:c,enableGutters:u,enableLineNumbers:l,wrapLines:f,enableLinks:d}=this.props,{highlight:h,lines:p,offset:m,isFilteringLinesWithMatches:v,filteredLines:_,resultLineUniqueIndexes:O}=this.state,k=v?_:p,U=v?O[t.index]:t.index+1+m;if((k==null?void 0:k.size)<=0)return this.renderNoRows();if(!U)return;const me=di(k==null?void 0:k.get(t.index)),x=d?rc(wr(me)):wr(me);return g.jsx(Te,{className:`log-line ${s}`,data:x,enableGutters:u,wrapLines:f,enableLineNumbers:l,enableLinks:d,formatPart:this.handleFormatPart(U),gutter:c?c[U]:void 0,highlight:h==null?void 0:h.includes(U),highlightClassName:`log-highlight ${i}`,number:U,rowHeight:n,selectable:r,onLineNumberClick:_e=>{const F=this.handleHighlight(_e);o==null||o({lineNumber:U,highlightRange:F})},onLineContentClick:a},t.index)},this.renderNoRows=()=>{const{lineClassName:t,highlightLineClassName:n,wrapLines:r}=this.props,{error:s,count:i,loaded:o}=this.state;return s?this.renderError():!i&&o?g.jsx(g.Fragment,{}):i?g.jsx(Te,{wrapLines:r,className:t,highlightClassName:n,data:[{bold:!0,text:"No filter matches"}]}):this.props.loadingComponent||g.jsx(b1,{})},this.calculateListHeight=(t=!1)=>{var o;const{height:n,enableSearch:r}=this.props;if(!((o=this.listRef)!=null&&o.current))return 0;const s=this.listRef.current.viewportSize,i=r?xr:0;return n==="auto"?t?r?`calc(100% - ${xr}px)`:"100%":s:Number(n)-i},this.getItemSize=t=>this.props.rowHeight||19}static getDerivedStateFromProps({highlight:t,follow:n,scrollToLine:r,url:s,text:i},{count:o,offset:a,url:c,text:u,highlight:l,isSearching:f,scrollToIndex:d}){const h=f?d:bt({follow:n,scrollToLine:r,count:o,offset:a}),p=s&&s!==c||i&&i!==u;return{scrollToIndex:h,highlight:l===Qe(0,0)?F1(t):l||F1(l),...p?{url:s,text:i,lines:H(),count:0,offset:0,loaded:!1,error:null}:null}}componentDidMount(){this.request(),this.props.scrollToLine&&setTimeout(()=>{this.listRef&&this.listRef.current&&this.handleScrollToLine(this.props.scrollToLine)},100)}componentDidUpdate(t,n){var F,Ie;const{props:r,state:s,listRef:i}=this,{url:o,text:a,follow:c,extraLines:u,onLoad:l,onError:f,highlight:d,onHighlight:h,scrollToLine:p}=r,{scrollOffset:m,scrollToIndex:v,isSearching:_,loaded:O,error:k}=s,U=t.url!==o||n.url!==s.url||t.text!==a;U&&this.request(),U&&!c&&m>0&&((F=i==null?void 0:i.current)==null||F.scrollTo(m));const me=n.scrollOffset!=m;c&&!_&&!me&&((Ie=i==null?void 0:i.current)==null||Ie.scrollToIndex(v+(u||0),{align:"nearest"})),!O&&n.loaded!==O&&l?l():k&&n.error!==k&&f&&f(k),d&&d!==t.highlight&&h&&h(s.highlight);const _e=p&&t.scrollToLine!==p;!c&&_e&&this.handleScrollToLine(p)}componentWillUnmount(){this.endRequest()}initEmitter(){const{stream:t,websocket:n,eventsource:r,url:s,fetchOptions:i,websocketOptions:o,eventsourceOptions:a}=this.props;return n?fc(s,o):r?sc(s,a):t?lc(s,i):oc(s,i)}request(){const{text:t,url:n,external:r}=this.props;if(this.endRequest(),t){const s=Ce(t),{lines:i}=$e(s);this.handleUpdate({lines:i,encodedLog:s}),this.handleEnd(s)}if(n&&(this.emitter=this.initEmitter(),this.emitter.on("update",this.handleUpdate),this.emitter.on("end",this.handleEnd),this.emitter.on("error",this.handleError),this.emitter.emit("start")),r){const s=Ce(""),{lines:i}=$e(s);this.handleUpdate({lines:i,encodedLog:s})}}endRequest(){this.emitter&&(this.emitter.emit("abort"),this.emitter.off("update",this.handleUpdate),this.emitter.off("end",this.handleEnd),this.emitter.off("error",this.handleError),this.emitter=null)}appendLines(t){const n=t.join(`
`),r=Ce(n.endsWith(`
`)?n:n+`
`),s=Kt(this.encodedLog,r),{lines:i}=$e(r);this.handleUpdate({lines:i,encodedLog:s})}handleScrollToLine(t=0){var r,s;const n=bt({scrollToLine:t});this.setState({scrollToIndex:n,scrollToLine:t}),(s=(r=this.listRef)==null?void 0:r.current)==null||s.scrollToIndex(n,{align:"nearest"})}renderError(){const{url:t,lineClassName:n,selectableLines:r,highlightLineClassName:s,enableLinks:i,wrapLines:o}=this.props,{error:a}=this.state;return g.jsxs(E.Fragment,{children:[g.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,number:"Error",data:[{bold:!0,foreground:"red",text:a!=null&&a.status?`${a==null?void 0:a.message} (HTTP ${a==null?void 0:a.status})`:(a==null?void 0:a.message)||"Network Error"}]},"error-line-0"),g.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{bold:!0,text:"An error occurred attempting to load the provided log."}]},"error-line-1"),g.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{bold:!0,text:"Please check the URL and ensure it is reachable."}]},"error-line-2"),g.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[]},"error-line-3"),g.jsx(Te,{wrapLines:o,selectable:r,className:n,highlightClassName:s,enableLinks:i,data:[{foreground:"blue",text:t}]},"error-line-4")]})}clear(){var t;(t=this.searchBarRef.current)==null||t.setState({keywords:""}),this.handleClearSearch(),this.setState({count:0,lines:H(),isFilteringLinesWithMatches:!1})}render(){var c;const{enableSearch:t}=this.props,{resultLines:n,isFilteringLinesWithMatches:r,filteredLines:s=H(),count:i,currentResultsPosition:o}=this.state,a=r?s.size:i;return g.jsxs(E.Fragment,{children:[t&&g.jsx(Z1,{ref:this.searchBarRef,currentResultsPosition:o,disabled:i===0,enableHotKeys:this.props.enableHotKeys,enableSearchNavigation:this.props.enableSearchNavigation,filterActive:r,iconFilterLines:this.props.iconFilterLines,iconFindNext:this.props.iconFindNext,iconFindPrevious:this.props.iconFindPrevious,onClearSearch:this.handleClearSearch,onEnter:this.handleEnterPressed,onFilterLinesWithMatches:this.handleFilterLinesWithMatches,onSearch:this.handleSearch,onShiftEnter:this.handleShiftEnterPressed,resultsCount:n.length,searchMinCharacters:this.props.searchMinCharacters,internacionalization:(c=this.props.internacionalization)==null?void 0:c.searchBar}),g.jsxs(Wo,{ref:this.listRef,className:`react-lazylog ${Zt.lazyLog} ${this.props.wrapLines?Zt.wrapLine:""}`,item:gc,style:{height:this.calculateListHeight(!0)},onScroll:u=>{var l;if(this.setState({scrollOffset:u}),this.props.onScroll){if(!((l=this.listRef)!=null&&l.current))return;const f={scrollTop:u,scrollHeight:this.listRef.current.scrollSize,clientHeight:this.calculateListHeight()};this.props.onScroll(f)}},children:[Array.from({length:a===0?a:a+(this.props.extraLines||0)}).map((u,l)=>this.renderRow({index:l})),this.props.loading===!0&&(this.props.loadingComponent||g.jsx(b1,{}))]})]})}};Un.defaultProps={containerStyle:{width:"auto",maxWidth:"initial",overflow:"initial"},caseInsensitive:!1,enableGutters:!1,enableHotKeys:!1,enableLineNumbers:!0,enableLinks:!1,enableMultilineHighlight:!0,enableSearch:!1,enableSearchNavigation:!0,wrapLines:!1,extraLines:0,fetchOptions:{credentials:"omit"},follow:!1,formatPart:void 0,height:"auto",highlight:void 0,highlightLineClassName:"",lineClassName:"",onError:void 0,onHighlight:void 0,onLineNumberClick:void 0,onLoad:void 0,loading:void 0,overscanRowCount:100,rowHeight:19,scrollToLine:0,searchMinCharacters:2,selectableLines:!1,stream:!1,style:{},websocket:!1,websocketOptions:{},eventsource:!1,eventsourceOptions:{},width:"auto",external:!1};let we=Un;we.__docgenInfo={description:`React component that loads and views remote text in the browser lazily and efficiently.\r
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
so must be accessible via fetch on same domain or via CORS.`},websocket:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that url is a websocket URL.\r\nDefaults to `false` to download data until completion.",defaultValue:{value:"false",computed:!1}},websocketOptions:{required:!1,tsType:{name:"WebsocketOptions"},description:"Options object which will be passed through to websocket.",defaultValue:{value:"{}",computed:!1}},eventsource:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that url is an eventsource URL.\r\nDefaults to `false` to download data until completion.",defaultValue:{value:"false",computed:!1}},eventsourceOptions:{required:!1,tsType:{name:"EventSourceOptions"},description:"Options object which will be passed through to evensource.",defaultValue:{value:"{}",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Set the width in pixels for the component.\r\nDefaults to `'auto'` if unspecified.\r\nWhen the `width` is `'auto'`, the component will expand\r\nhorizontally to fill its container.",defaultValue:{value:'"auto"',computed:!1}},wrapLines:{required:!1,tsType:{name:"boolean"},description:"Wrap overflowing lines. Default is false",defaultValue:{value:"false",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"Set to `true` to specify that parent component will be calling `appendLines` to update data.\r\nParent component should hold a ref (with `useRef` or `createRef`) to the `LazyLog` component.\r\nDefaults to `false`.",defaultValue:{value:"false",computed:!1}},internacionalization:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    searchBar?: ComponentProps<typeof SearchBar>["internacionalization"];\r
}`,signature:{properties:[{key:"searchBar",value:{name:'ComponentProps["internacionalization"]',raw:'ComponentProps<typeof SearchBar>["internacionalization"]',required:!1}}]}},description:"Object containing internationalization strings for the LazyLog component."}}};const jn=class jn extends E.Component{constructor(){super(...arguments),this.state={follow:this.props.startFollowing??!1},this.handleScroll=({scrollTop:t,scrollHeight:n,clientHeight:r})=>{n>r&&(this.state.follow&&n-t!==r?this.setState({follow:!1}):!this.state.follow&&n-t===r&&this.setState({follow:!0}))},this.startFollowing=()=>{this.setState({follow:!0})},this.stopFollowing=()=>{this.setState({follow:!1})}}render(){const{render:t}=this.props,{follow:n}=this.state;return g.jsx(E.Fragment,{children:t({follow:n,onScroll:this.handleScroll,startFollowing:this.startFollowing,stopFollowing:this.stopFollowing})})}};jn.defaultProps={startFollowing:!1};let tn=jn;tn.__docgenInfo={description:"",methods:[{name:"handleScroll",docblock:null,modifiers:[],params:[{name:"{ scrollTop, scrollHeight, clientHeight }: any",optional:!1,type:{name:"any"}}],returns:null},{name:"startFollowing",docblock:null,modifiers:[],params:[],returns:null},{name:"stopFollowing",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ScrollFollow",props:{render:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: ScrollFollowRenderProps) => ReactNode",signature:{arguments:[{type:{name:"ScrollFollowRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:"Render a component based on the function's arguments\r\n\r\n  - `follow: bool` This value is `true` or `false`\r\n  based on whether the component should be auto-following.\r\n  This value can be passed directly to the Lazy component's\r\n  `follow` prop.\r\n\r\n  - `onScroll: func`: This function is used to listen for scrolling\r\n  events and turn off auto-following (`follow`).\r\n  This value can be passed directly to the Lazy component's\r\n  `onScroll` prop.\r\n\r\n  - `startFollowing: func`: A helper function for manually re-starting\r\n  `follow`ing. Is not used by a Lazy component;\r\n  rather this can be invoked whenever you need to turn back on\r\n  auto-following, but cannot reliably do this from the `startFollowing`\r\n  prop. e.g `startFollowing();`\r\n\r\n  - `stopFollowing: func`: A helper function for manually stopping\r\n  `follow`ing. Is not used by a Lazy component;\r\n  rather this can be invoked whenever you need to turn off\r\n  auto-following, but cannot reliably do this from the `startFollowing`\r\n  prop. e.g `stopFollowing();`"},startFollowing:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"The initial follow action; defaults to `false`.\r\nThe value provided here will inform the initial `follow`\r\nproperty passed to the child function.",defaultValue:{value:"false",computed:!1}}}};const bc={component:we,render:e=>g.jsx(we,{...e})},Se={caseInsensitive:!0,enableGutters:!1,enableHotKeys:!0,enableLineNumbers:!0,enableLinks:!1,wrapLines:!1,enableMultilineHighlight:!0,enableSearch:!0,enableSearchNavigation:!0,extraLines:1,height:"520",loadingComponent:void 0,onError:void 0,onHighlight:void 0,onLineNumberClick:void 0,onLoad:void 0,selectableLines:!0,width:"auto",internacionalization:{searchBar:{matchLabel:"match",matchesLabel:"matches",filterLinesTitle:"Filter lines",previousButtonTitle:"Previous",nextButtonTitle:"Next",searchPlaceholder:"Search..."}}},e1={name:"Text Based",args:{...Se,text:`\x1B[4;1mRunning "clean:all" (clean) task\x1B[0m
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
\x1B[31mCreate file target/dist/css/libs.css failed\x1B[39m`}},t1={name:"URL Based",args:{...Se,url:"https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"}},n1={name:"External Mode",args:{...Se,external:!0,text:`You can provide some initial content (multiple lines),
such as this one.`},render:e=>{const t=ee.createRef();return g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.appendLines(["This is a new line!","This is another new line!"])},style:{marginBottom:"6px"},children:"Append Line"}),g.jsx("br",{}),g.jsx(we,{ref:t,...e})]})}},r1={args:{...Se,height:100,text:"Press the Clear button to test clearing the log!"},render:e=>{const t=ee.createRef();return g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>{var n;return(n=t.current)==null?void 0:n.clear()},style:{marginBottom:"6px"},children:"Clear Log"}),g.jsx("br",{}),g.jsx(we,{ref:t,...e})]})}},s1={args:{...Se,height:150,text:`Click me 100!
Click me 200!
Click me 300!
`},render:e=>g.jsx(we,{...e,onLineNumberClick:t=>alert(`Line No: ${t.lineNumber} - ${t.highlightRange}`),onLineContentClick:t=>alert(`Line Content: ${t.currentTarget.textContent}`)})},i1={args:{...Se,height:200,enableLinks:!0,text:`Can be secure https://www.mozilla.org or unsecure http://www.mozilla.org
We want to upload data to ftp://www.mozilla.org or ftps://www.mozilla.org
We just need to write documents for www.mozilla.org
And at the end send a mail to react-lazylog@mozilla.org
`}},o1={args:{...Se,height:150,text:""},render:e=>{const t=ee.createRef();let n;ee.useEffect(()=>(r(),()=>clearInterval(n)),[]);const r=()=>{var a;clearInterval(n),(a=t.current)==null||a.clear();let s=0;const i=10,o=()=>`[${new Date().toLocaleTimeString()}] Log entry #${s+1}`;n=setInterval(()=>{var c;s<i?((c=t==null?void 0:t.current)==null||c.appendLines([o()]),s++):clearInterval(n)},1e3)};return g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:()=>{r()},style:{marginBottom:"6px"},children:"Restart Log"}),g.jsx("br",{}),g.jsx(we,{ref:t,...e,external:!0,follow:!0})]})}},a1={args:{...Se,height:400,highlight:[70,75],scrollToLine:77,text:`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
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
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds`}},c1={args:{...Se,height:400,wrapLines:!0,text:`[taskcluster 2018-11-14 21:08:32.452Z] Task ID: DCnyIIOITNCO5wvk1N-Z4A
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
[taskcluster 2018-11-14 21:19:42.433Z] Successful task run with exit code: 0 completed in 669.981 seconds`}},vc=e=>new Promise(t=>{setTimeout(t,e)}),u1={args:{...Se,height:400},render:e=>{const t=(f,d=0)=>Array.from({length:f}).map((h,p)=>(p+=d,`Line: ${p}
`)),[n,r]=ee.useState(!1),s=async()=>{r(!0),await vc(1e3),r(!1)},i=100,[o,a]=ee.useState(()=>t(i)),c=ee.useRef(null),u=ee.useRef(-1),l=o.length;return g.jsx(we,{...e,ref:c,onScroll:async()=>{if(!c.current||!c.current.listRef.current)return;const f=c.current.listRef.current;u.current<l&&f.findItemIndex(f.scrollOffset+f.viewportSize)+50>l&&(u.current=l,await s(),a(d=>[...d,...t(i,d.length)]))},loading:n,text:o.join("")})}};var Lr,Er,Or;e1.parameters={...e1.parameters,docs:{...(Lr=e1.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  name: "Text Based",
  args: {
    ...BaseStory,
    text: \`\\x1b[4;1mRunning "clean:all" (clean) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m0 paths cleaned.\\n\\n\\x1b[4;1mRunning "copy:base" (copy) task\\x1b[0m\\nCreated 188 directories, copied 1433 files\\n\\n\\x1b[4;1mRunning "copy:app" (copy) task\\x1b[0m\\nCreated 40 directories, copied 233 files\\n\\n\\x1b[4;1mRunning "processhtml:dist" (processhtml) task\\x1b[0m\\n\\n\\x1b[4;1mRunning "ngAnnotate:dist" (ngAnnotate) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m52 files successfully generated.\\n\\n\\x1b[4;1mRunning "uglify:dist" (uglify) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m2 sourcemaps created.\\n\\x1b[32m>> \\x1b[39m2 files created.\\n\\n\\x1b[4;1mRunning "less:app" (less) task\\x1b[0m\\n\\x1b[32mFile target/dist/css/alertEvents.css created\\x1b[39m\\n\\x1b[32mFile target/dist/css/application.css created\\x1b[39m\\n\\n\\x1b[4;1mRunning "less:libs" (less) task\\x1b[0m\\n\\x1b[31mCreate file target/dist/css/libs.css failed\\x1b[39m\`
  }
}`,...(Or=(Er=e1.parameters)==null?void 0:Er.docs)==null?void 0:Or.source}}};var Rr,Cr,zr;t1.parameters={...t1.parameters,docs:{...(Rr=t1.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  name: "URL Based",
  args: {
    ...BaseStory,
    url: "https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
  }
}`,...(zr=(Cr=t1.parameters)==null?void 0:Cr.docs)==null?void 0:zr.source}}};var Wr,Nr,Dr;n1.parameters={...n1.parameters,docs:{...(Wr=n1.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
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
}`,...(Dr=(Nr=n1.parameters)==null?void 0:Nr.docs)==null?void 0:Dr.source}}};var Br,Mr,Pr;r1.parameters={...r1.parameters,docs:{...(Br=r1.parameters)==null?void 0:Br.docs,source:{originalSource:`{
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
}`,...(Pr=(Mr=r1.parameters)==null?void 0:Mr.docs)==null?void 0:Pr.source}}};var Ar,qr,Ur;s1.parameters={...s1.parameters,docs:{...(Ar=s1.parameters)==null?void 0:Ar.docs,source:{originalSource:"{\n  args: {\n    ...BaseStory,\n    height: 150,\n    text: `Click me 100!\\nClick me 200!\\nClick me 300!\\n`\n  },\n  render: args => <LazyLog {...args} onLineNumberClick={e => alert(`Line No: ${e.lineNumber} - ${e.highlightRange}`)} onLineContentClick={e => alert(`Line Content: ${e.currentTarget.textContent}`)} />\n}",...(Ur=(qr=s1.parameters)==null?void 0:qr.docs)==null?void 0:Ur.source}}};var jr,Fr,$r;i1.parameters={...i1.parameters,docs:{...(jr=i1.parameters)==null?void 0:jr.docs,source:{originalSource:`{
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
}`,...($r=(Fr=i1.parameters)==null?void 0:Fr.docs)==null?void 0:$r.source}}};var Hr,Kr,Vr;o1.parameters={...o1.parameters,docs:{...(Hr=o1.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
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
      const maxCount = 10;

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
}`,...(Vr=(Kr=o1.parameters)==null?void 0:Kr.docs)==null?void 0:Vr.source}}};var Yr,Gr,Xr;a1.parameters={...a1.parameters,docs:{...(Yr=a1.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
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
}`,...(Xr=(Gr=a1.parameters)==null?void 0:Gr.docs)==null?void 0:Xr.source}}};var Jr,Qr,es;c1.parameters={...c1.parameters,docs:{...(Jr=c1.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
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
}`,...(es=(Qr=c1.parameters)==null?void 0:Qr.docs)==null?void 0:es.source}}};var ts,ns,rs;u1.parameters={...u1.parameters,docs:{...(ts=u1.parameters)==null?void 0:ts.docs,source:{originalSource:`{
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
      const handle = ref.current.listRef.current;
      if (fetchedCountRef.current < count && handle.findItemIndex(handle.scrollOffset + handle.viewportSize) + 50 > count) {
        fetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createLines(ITEM_BATCH_COUNT, prev.length)]);
      }
    }} loading={fetching} text={items.join("")}></LazyLog>;
  }
}`,...(rs=(ns=u1.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};const Zc=["TextLog","URLLog","ExternalMode","ClearMethod","ClickEvents","HtmlLinks","AppendLines","HighlightAndScrolling","LineWrapping","InfiniteScrolling"];export{o1 as AppendLines,r1 as ClearMethod,s1 as ClickEvents,n1 as ExternalMode,a1 as HighlightAndScrolling,i1 as HtmlLinks,u1 as InfiniteScrolling,c1 as LineWrapping,e1 as TextLog,t1 as URLLog,Zc as __namedExportsOrder,bc as default};
