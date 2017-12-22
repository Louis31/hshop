(function(n,t){typeof define=="function"&&define.amd?define(t):typeof exports=="object"?module.exports=t():n.WebStorageCache=t()})(this,function(){"use strict";function i(n,t){for(var i in t)n[i]=t[i];return n}function h(n){var i=!1,t;if(n&&n.setItem){i=!0;t="__"+Math.round(Math.random()*1e7);try{n.setItem(t,t);n.removeItem(t)}catch(r){i=!1}}return i}function c(n){var t=typeof n;return t==="string"&&window[n]instanceof Storage?window[n]:n}function o(n){return Object.prototype.toString.call(n)==="[object Date]"&&!isNaN(n.getTime())}function l(n,t){if(t=t||new Date,typeof n=="number"?n=n===Infinity?f:new Date(t.getTime()+n*1e3):typeof n=="string"&&(n=new Date(n)),n&&!o(n))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return n}function a(n){var t=!1;if(n)if(n.code)switch(n.code){case 22:t=!0;break;case 1014:n.name==="NS_ERROR_DOM_QUOTA_REACHED"&&(t=!0)}else n.number===-2147024882&&(t=!0);return t}function v(n,t){this.c=(new Date).getTime();t=t||e;var i=l(t);this.e=i.getTime();this.v=n}function r(n){return typeof n!="object"?!1:n&&"c"in n&&"e"in n&&"v"in n?!0:!1}function u(n){var t=(new Date).getTime();return t<n.e}function t(n){return typeof n!="string"&&(console.warn(n+" used as a key, but it is not a string."),n=String(n)),n}function s(n){var f=i({storage:"localStorage",exp:Infinity},n),t=f.exp,r,u;if(t&&typeof t!="number"&&!o(t))throw new Error("Constructor `exp` parameter cannot be converted to a valid Date instance");else e=t;r=c(f.storage);u=h(r);this.isSupported=function(){return u};u?(this.storage=r,this.quotaExceedHandler=function(n,t,i){if(console.warn("Quota exceeded!"),i&&i.force===!0){var r=this.deleteAllExpires();console.warn("delete all expires CacheItem : ["+r+"] and try execute `set` method again!");try{i.force=!1;this.set(n,t,i)}catch(u){console.warn(u)}}}):i(this,y)}var f=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),e=f,n={serialize:function(n){return JSON.stringify(n)},deserialize:function(n){return n&&JSON.parse(n)}},y={set:function(){},get:function(){},"delete":function(){},deleteAllExpires:function(){},clear:function(){},add:function(){},replace:function(){},touch:function(){}},p={set:function(r,u,f){if(r=t(r),f=i({force:!0},f),u===undefined)return this.delete(r);var o=n.serialize(u),s=new v(o,f.exp);try{this.storage.setItem(r,n.serialize(s))}catch(e){a(e)?this.quotaExceedHandler(r,o,f,e):console.error(e)}return u},get:function(i){var f,e;i=t(i);f=null;try{f=n.deserialize(this.storage.getItem(i))}catch(o){return null}if(r(f)){if(u(f))return e=f.v,n.deserialize(e);this.delete(i)}return null},"delete":function(n){return n=t(n),this.storage.removeItem(n),n},deleteAllExpires:function(){for(var e=this.storage.length,r=[],o=this,u,t,f,i=0;i<e;i++){u=this.storage.key(i);t=null;try{t=n.deserialize(this.storage.getItem(u))}catch(s){}t!==null&&t.e!==undefined&&(f=(new Date).getTime(),f>=t.e&&r.push(u))}return r.forEach(function(n){o.delete(n)}),r},clear:function(){this.storage.clear()},add:function(f,e,o){f=t(f);o=i({force:!0},o);try{var s=n.deserialize(this.storage.getItem(f));if(!r(s)||!u(s))return this.set(f,e,o),!0}catch(h){return this.set(f,e,o),!0}return!1},replace:function(i,f,e){i=t(i);var o=null;try{o=n.deserialize(this.storage.getItem(i))}catch(s){return!1}if(r(o)){if(u(o))return this.set(i,f,e),!0;this.delete(i)}return!1},touch:function(i,f){i=t(i);var e=null;try{e=n.deserialize(this.storage.getItem(i))}catch(o){return!1}if(r(e)){if(u(e))return this.set(i,this.get(i),{exp:f}),!0;this.delete(i)}return!1}};return s.prototype=p,s})