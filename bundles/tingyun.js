window._ty_rum&&window._ty_rum.server||function(n){function l(n){var i,t,r,u;switch(typeof n){case"object":if(!n)return"null";if(n instanceof Array){for(i="[",t=0;t<n.length;t++)i+=(t>0?",":"")+l(n[t]);return i+"]"}i="{";t=0;for(r in n)"function"!=typeof n[r]&&(u=l(n[r]),i+=(t>0?",":"")+l(r)+":"+u,t++);return i+"}";case"string":return'"'+n.replace(/([\"\\])/g,"\\$1").replace(/\n/g,"\\n")+'"';case"number":return n.toString();case"boolean":return n?"true":"false";case"function":return l(n.toString());case"undefined":default:return'"undefined"'}}function s(n){return wt?wt(n):n}function u(){return Date.now?Date.now():(new Date).valueOf()}function ri(t,r,e){function n(){var n=i.args.apply(this,arguments);return r(o,n,e)}var a,o=t[t.length-1];if("function"==typeof o){switch(o.length){case 0:a=function(){return n.apply(this,arguments)};break;case 1:a=function(){return n.apply(this,arguments)};break;case 2:a=function(){return n.apply(this,arguments)};break;case 3:a=function(){return n.apply(this,arguments)};break;case 4:a=function(){return n.apply(this,arguments)};break;case 5:a=function(){return n.apply(this,arguments)};break;default:for(var i=[],s=0,u=o.length;s<u;s++)i.push("_"+s);a=eval("(function(){return function("+i.join(",")+"){var args = [].slice.call(arguments, 0);return r(o, args, e);};})();")}t[t.length-1]=a}return t}function d(n,t){return n&&t&&(n.moduleName=t),n}function et(n,t,i){return function(){try{h=t;i&&g(t);n.apply(this,arguments);i&&a()}catch(r){throw i&&a(),d(r,t);}}}function g(t){i.each(["setTimeout","setInterval"],function(r){i.wrap(!0,n,r,function(n){return function(){var u,r=i.args.apply(this,arguments),f=r[0];return"function"==typeof f&&(u=et(f,t,!0)),u&&(r[0]=u),n.apply?n.apply(this,r):Function.prototype.apply.apply(n,[n,r])}})})}function a(){i.each(["setTimeout","setInterval"],function(t){i.unwrap(n,t)})}function ui(n){w&&i.wrap(!1,w.prototype,"addEventListener",function(t){return function(){var r,u=i.args.apply(this,arguments),f=u[1];return"function"==typeof f&&(r=et(f,n,!0)),r&&(u[1]=r),t.apply(this,u)}});g(n)}function ot(){w&&i.unwrap(w.prototype,"addEventListener");a()}function st(){return function(){}}function ht(){if(this.errors.length){var n=function(n){var r=[],t={},u;i.each(n,function(n){var i=it(n[1],n[2],n[3],n[6]);t[i]?t[i][4]+=1:t[i]=[n[1],n[2],n[3],"#"==n[4]?f.URL:n[4],1,n[5],n[6],n[7]]});for(u in t)r.push(t[u]);return r}(this.errors),r=this;i.POST(i.mkurl(t.server.beacon,"err",{fu:rt?rt:rt++,os:parseInt((u()-(bt||t.st))/1e3)}),i.stringify({datas:n}),{},function(n){n||(r.errors=[])})}}function fi(){r.initend()}function ei(){"complete"===f.readyState&&r.initend()}function ct(n){function i(){r.send()}return!!t.load_time||(r.initend(),t.load_time=u(),void(9===n?i():setTimeout(i,0)))}function nt(){ti||ct(9);i.bind(ht,r)();ti=1}function tt(){r.touch||(r.touch=u())}function lt(n){var r,i,t;n[6]&&(r=n[4],i=n[5],i&&"string"==typeof i&&r&&(i=i.split(/\n/),t=pt.exec(i[0]),t||(t=pt.exec(i[1])),t&&t[1]!=r&&(n[4]=t[1]||r,n[2]=t[2]||n[2],n[3]=t[3]||n[3])))}function it(n,t,i,r){return n+t+i+(r?r:"")}function oi(t){var e=arguments,h="unknown",i=[u()],o,s;if(0!=e.length){if("string"==typeof t)o=e.length<4?e.length:4,i[1]=e[0],o>2&&(i[2]=e[2],i[3]=0,i[4]=e[1]),o>3&&e[3]&&(i[3]=e[3]);else if(t instanceof Event||n.ErrorEvent&&t instanceof ErrorEvent){if(i[1]=t.message||(t.error&&t.error.constructor.name)+(t.error&&t.error.message)||"",i[2]=t.lineno?t.lineno:0,i[3]=t.colno?t.colno:0,i[4]=t.filename||t.error&&t.error.fileName||t.target&&t.target.baseURI||"",!i[4]&&dt)return;if(i[4]==f.URL&&(i[4]="#"),t.error?(i[5]=t.error.stack,i[6]=t.error.moduleName):(i[5]=null,i[6]=null),s=it(i[1],i[2],i[3],i[6]),i[7]=b[s]?0:1,b[s]=!0,i[1]===h&&i[4]===h)return;lt(i)}r.errors.push(i)}}function at(n){return function(){var t=arguments,r;this._ty_wrap||(r=i.args.apply(this,t),this._ty_rum={method:r[0],url:r[1],start:u()});try{return n.apply(this,t)}catch(f){return Function.prototype.apply.call(n,this,t)}}}function y(t){return"string"==typeof t?t.length:n.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:n.Blob&&t instanceof Blob?t.size:t&&t.length?t.length:0}function vt(f){return function(){function s(n){var s,f,i=o._ty_rum,e;if(i){if(4!==i.readyState&&(i.end=u()),i.s=o.status,""==o.responseType||"text"==o.responseType)i.res=y(o.responseText);else if(o.response)i.res=y(o.response);else try{i.res=y(o.responseText)}catch(h){i.res=0}if(i.readyState=o.readyState,i.cb_time=c,s=[i.method+" "+i.url,i.s>0?i.end-i.start:0,c,i.s,i.s>0?0:n,i.res,i.req],i.r&&(f=nt(o),f&&(f=f.xData)&&(s.push(f.id),s.push(f.action),s.push(f.time&&f.time.duration),s.push(f.time&&f.time.qu))),t.aa.push(s),t.server.custom_urls&&t.server.custom_urls.length&&!r.ct){if(!t.pattern)for(t.pattern=[],e=0;e<t.server.custom_urls.length;e++)t.pattern.push(new RegExp(t.server.custom_urls[e]));for(e=0;e<t.pattern.length;e++)if(i.url.match(t.pattern[e])){r.ct=i.end+c;break}}r.sa();o._ty_rum=null}}function p(){4==o.readyState&&s(0)}function nt(t){var u,r;return t.getResponseHeader&&(r=i.parseJSON(t.getResponseHeader("X-Tingyun-Tx-Data")),r&&r.r&&t._ty_rum&&r.r+""==t._ty_rum.r+""&&(u={name:t._ty_rum.url,xData:r},e&&n._ty_rum.c_ra.push(u))),u}function w(n){return function(){var i,r;4==o.readyState&&o._ty_rum&&(o._ty_rum.end=i=u(),o._ty_rum.readyState=4);try{h&&g(h);r=n.apply(this,arguments);h&&a()}catch(t){throw t=d(t,h),h&&a(),h=null,t;}return 4==o.readyState&&(c=u()-i),p(),r}}function tt(n){return function(){var t=o._ty_rum;return!t||"progress"==n||("abort"==n?s(905):"loadstart"==n?t.start=u():"error"==n?s(990):"timeout"==n&&s(903),!0)}}function it(n,t){var r,u;for(t instanceof Array||(t=[t]),r=0;r<t.length;r++)u=t[r],i.sh(n,u,tt(u),!1)}var k,v,l;if(!this._ty_wrap){this._ty_rum.start=u();this._ty_rum.req=arguments[0]?y(arguments[0]):0;var o=this,c=0,b=i.wrap(!1,this,"onreadystatechange",w);b||i.sh(this,"readystatechange",p,!1);it(this,["error","progress","abort","load","loadstart","loadend","timeout"]);b||setTimeout(function(){i.wrap(!1,o,"onreadystatechange",w)},0)}k=function(){function n(n){var i={},t=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?/.exec(n);return t&&(i.protocol=t[1]?t[1]+":":"http:",i.hostname=t[3],i.port=t[4]||""),i}return function(t){var r=location,u,f;return(t=i.trim(t))?(t=t.toLowerCase(),t.startsWith("//")&&(t=r.protocol+t),!t.startsWith("http"))?!0:(u=n(t),f=u.protocol===r.protocol&&u.hostname===r.hostname,f&&(f=u.port===r.port||!r.port&&("http:"===r.protocol&&"80"===u.port||"https:"===r.protocol&&"443"===u.port)),f):!1}}();v=arguments;try{l=t.server;l&&l.id&&this._ty_rum&&k(this._ty_rum.url)&&(this._ty_rum.r=(new Date).getTime()%1e8,this.setRequestHeader&&this.setRequestHeader("X-Tingyun-Id",l.id+";r="+this._ty_rum.r))}catch(rt){}try{return f.apply(this,v)}catch(ut){return Function.prototype.apply.call(f,this,v)}}}var h,c=n.XMLHttpRequest,f=document,yt=Object.defineProperty,p=n.define,w=n.EventTarget,rt=0,pt=new RegExp("([a-z]+:/{2,3}.*):(\\d+):(\\d+)"),wt=n.encodeURIComponent,bt=null,i={wrap:function(n,t,i,r,u){try{var f=t[i]}catch(e){if(!n)return!1}if(!f&&!n||f&&f._ty_wrap)return!1;try{t[i]=r(f,u)}catch(e){return!1}return t[i]._ty_wrap=[f],!0},unwrap:function(n,t){try{var i=n[t]._ty_wrap;i&&(n[t]=i[0])}catch(r){}},each:function(n,t){if(n)for(var i=0;i<n.length&&(!n[i]||!t(n[i],i,n));i+=1);},mkurl:function(i,r){var c=arguments,e=/^https/i.test(f.URL)?"https":"http",o,h;if(e=e+"://"+i+"/"+r+"?av=1.3.3&v=1.3.2&key="+s(t.server.key)+"&ref="+s(f.URL)+"&rand="+u()+"&pvid="+ni,"pf"!==r&&t&&(t.agent=t.agent||n._ty_rum.agent,t.agent&&t.agent.n&&(e+="&n="+s(t.agent.n))),c.length>2){o=c[2];for(h in o)e+="&"+h+"="+o[h]}return v.host&&(e+="&cshst="+s(v.host)),v.url&&(e+="&csurl="+s(v.url)),e},GET:function(n,t){function r(){t&&t.apply(this,arguments);i.parentNode&&i.parentNode.removeChild(i)}if(navigator&&navigator.sendBeacon&&ut.test(n))return navigator.sendBeacon(n,null);var i=f.createElement("img");return i.setAttribute("src",n),i.setAttribute("style","display:none"),this.sh(i,"readystatechange",function(){"loaded"!=i.readyState&&4!=i.readyState||r("loaded")},!1),this.sh(i,"load",function(){return r("load"),!0},!1),this.sh(i,"error",function(){return r("error"),!0},!1),f.body.appendChild(i)},fpt:function(n,t,i){function u(n,t,i){var e=f.createElement(n),u,r;try{for(r in t)e[r]=t[r]}catch(o){u="<"+n;for(r in t)u+=" "+r+'="'+t[r]+'"';u+=">";i||(u+="<\/"+n+">");e=f.createElement(u)}return e}var e=u("div",{style:"display:none"},!1),r=u("iframe",{name:"_ty_rum_frm",width:0,height:0,style:"display:none"},!1),o=u("form",{style:"display:none",action:n,enctype:"application/x-www-form-urlencoded",method:"post",target:"_ty_rum_frm"},!1),s=u("input",{name:"data",type:"hidden"},!0);return s.value=t,o.appendChild(s),e.appendChild(r),e.appendChild(o),f.body.appendChild(e),o.submit(),r.onreadystatechange=function(){"complete"!==r.readyState&&4!==r.readyState||(i(null,r.innerHTML),f.body.removeChild(e))},!0},POST:function(t,i,r,u){var e,f,o,s;if(this.ie)return this.fpt(t,i,u);if(navigator&&navigator.sendBeacon&&ut.test(t))return e=navigator.sendBeacon(t,i),u(!e),e;if(n.XDomainRequest)return f=new XDomainRequest,f.open("POST",t),f.onload=function(){u(null,f.responseText)},this.sh(f,"load",function(){u(null,f.responseText)},!1),this.sh(f,"error",function(){u("POST("+t+")error")},!1),this.wrap(!0,f,"onerror",function(){return function(){return u&&u("post error",f.responseText),!0}}),f.send(i),!0;if(!c)return!1;f=new c;f.overrideMimeType&&f.overrideMimeType("text/html");try{f._ty_wrap=1}catch(h){}o=0;f.onreadystatechange=function(){4==f.readyState&&200==f.status&&(0==o&&u(null,f.responseText),o++)};f.onerror&&this.wrap(!0,f,"onerror",function(n){return function(){return u("post error",f.responseText),"function"!=typeof n||n.apply(this,arguments)}});try{f.open("POST",t,!0)}catch(h){return this.fpt(t,i,u)}for(s in r)f.setRequestHeader(s,r[s]);return f.send(i),!0},sh:function(n,t,i,r){return n.addEventListener?n.addEventListener(t,i,r):!!n.attachEvent&&n.attachEvent("on"+t,i)},args:function(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);return t},stringify:l,parseJSON:function(t){if(t&&"string"==typeof t){var i=n.JSON?n.JSON.parse:function(n){return new Function("return "+n)()};return i(t)}return null},trim:gt?function(n){return null==n?"":gt.call(n)}:function(n){return null==n?"":n.toString().replace(/^\s+/,"").replace(/\s+$/,"")},extend:function(n,t){if(n&&t)for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n},bind:function(n,t){return function(){n.apply(t,arguments)}}},v={},t=n._ty_rum=i.extend({st:u(),ra:[],c_ra:[],aa:[],snd_du:function(){return this.server.adu?1e3*this.server.adu:1e4},cc:function(){return this.server.ac?this.server.ac:10},config:function(n,t){var i,r;if("object"==typeof n)i=n;else{if("string"!=typeof n||void 0===t)throw new Error("illegal arguments");i={};i[n]=t}for(r in i)v[r]=i[r];return this}},n._ty_rum||{}),si=t,ut,ni,e,k,o,ii;if(si.server={id:"yXJLl56uo0U",ignore_err:!0,beacon:"beacon.tingyun.com",beacon_err:"beacon-err.tingyun.com",key:"4RsLTv8sBkQ",trace_threshold:7e3,custom_urls:[],sr:1},t.server&&!(t.server.sr&&Math.random()>=t.server.sr)){var kt="ignore_err",dt=!(kt in t.server)||t.server[kt],gt=String.prototype.trim;String.prototype.startsWith||(String.prototype.startsWith=function(n,t){return t=t||0,this.indexOf(n,t)===t});ut=/^http/i;ni=function(){function n(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return n()+"-"+n()+n()}();try{yt&&yt(n,"define",{get:function(){return p},set:function(n){"function"==typeof n&&(n.amd||n.cmd)?(p=function(){var t=i.args.apply(this,arguments),r;return 3!==t.length?n.apply(this,t):(r="string"==typeof t[0]?t[0]:"anonymous",n.apply(this,ri(t,function(n,t,i){var r;try{h=i;ui(i);r=n.apply(this,t);ot()}catch(u){throw ot(),d(u,i);}return r},r)))},i.extend(p,n)):p=n},configurable:!0})}catch(hi){}e=n.performance?n.performance:n.Performance;e&&(i.sh(e,"resourcetimingbufferfull",function(){var n=e.getEntriesByType("resource");n&&(t.ra=t.ra.concat(n),e.clearResourceTimings())},!1),i.sh(e,"webkitresourcetimingbufferfull",function(){var n=e.getEntriesByType("resource");n&&(t.ra=t.ra.concat(n),e.webkitClearResourceTimings())},!1));for(var r=t.metric={ready:function(){return t.load_time},initend:function(){function n(){r.sa()}t.end_time||(t.end_time=u(),this._h=setInterval(n,2e3))},send:function(){function v(){function u(n){return f[n]>0?f[n]-o:0}var i={},f,c,l,h;if(e&&e.timing){f=e.timing;o=f.navigationStart;var v=u("domainLookupStart"),y=u("domainLookupEnd"),p=u("redirectStart"),a=u("redirectEnd"),w=u("connectStart"),b=u("connectEnd");i={f:u("fetchStart"),qs:u("requestStart"),rs:u("responseStart"),re:u("responseEnd"),os:u("domContentLoadedEventStart"),oe:u("domContentLoadedEventEnd"),oi:u("domInteractive"),oc:u("domComplete"),ls:u("loadEventStart"),le:u("loadEventEnd"),tus:u("unloadEventStart"),tue:u("unloadEventEnd")};b-w>0&&(i.cs=w,i.ce=b);y-v>0&&(i.ds=v,i.de=y);(a-p>0||a>0)&&(i.es=p,i.ee=a);0==i.le&&(i.ue=t.load_time-o);f.msFirstPaint?c=f.msFirstPaint:n.chrome&&chrome.loadTimes?(l=chrome.loadTimes(),l&&l.firstPaintTime&&(c=1e3*l.firstPaintTime)):t.firstPaint&&(c=t.firstPaint);c&&(i.fp=Math.round(c-o));f.secureConnectionStart&&(i.sl=u("secureConnectionStart"))}else i={t:o,os:t.end_time-o,ls:t.load_time-o};return i.je=r.errors.length,r.ct&&(i.ct=r.ct-o),r.touch&&(i.fi=r.touch-o),h=t.agent||n._ty_rum&&n._ty_rum.agent,h&&(i.id=s(h.id),i.a=h.a,i.q=h.q,i.tid=s(h.tid),i.n=s(h.n)),i.sh=n.screen&&n.screen.height,i.sw=n.screen&&n.screen.width,i}function y(t){var r=n._ty_rum.c_ra,i;if(t)for(i=r.length-1;i>=0;i--)if(t.indexOf(r[i].name)>-1)return r[i].xData;return null}function p(n){function u(n){return p[n]>0?p[n]:0}var c,i;if(n<t.server.trace_threshold)return null;if(c=e,c&&c.getEntriesByType){var v={tr:!0,tt:s(f.title),charset:f.characterSet},w=t.ra,b=c.getEntriesByType("resource");for(b&&(w=w.concat(b),c.webkitClearResourceTimings&&c.webkitClearResourceTimings(),c.clearResourceTimings&&c.clearResourceTimings()),v.res=[],i=0;i<w.length;i++){var p=w[i],a={o:u("startTime"),rt:p.initiatorType,n:p.name,f:u("fetchStart"),ds:u("domainLookupStart"),de:u("domainLookupEnd"),cs:u("connectStart"),ce:u("connectEnd"),sl:u("secureConnectionStart"),qs:u("requestStart"),rs:u("responseStart"),re:u("responseEnd")},l=y(p.name);l&&(a.aid=l.id,a.atd=l.trId,a.an=l.action,a.aq=l.time&&l.time.qu,a.as=l.time&&l.time.duration);v.res.push(a)}if(r.errors.length){v.err=[];for(var i=0,h=r.errors,k=h.length;i<k;i++)v.err.push({o:Math.round(h[i][0]-o),e:h[i][1]&&h[i][1].replace(/([\"\\])/g,"\\$1").replace(/\n/g,"\\n"),l:h[i][2],c:h[i][3],r:h[i][4],ec:k,s:h[i][5],m:h[i][6],ep:h[i][7]})}return v}return null}var o,h,c,l,a;if(this.sended||!this.ready())return!1;o=t.st;h={};try{c=v();h=p(c.ls>0?c.ls:t.load_time-o)}catch(w){}return h=h?i.stringify(h):"",l=i.mkurl(t.server.beacon,"pf",c),bt=u(),0!=h.length&&i.POST(l,h,{},st("POST"))||i.GET(l),a=i.bind(ht,this),a(),setInterval(a,1e4),this.sended=!0,this.sa(1),!0},sa:function(n){(this.ready()||n)&&(n||(n=!this._last_send||u()-this._last_send>t.snd_du()||t.aa.length>=t.cc()),t.aa.length>0&&n&&(this._last_send=u(),i.POST(i.mkurl(t.server.beacon,"xhr"),i.stringify({xhr:t.aa}),{},st("POST")),t.aa=[]))},errors:[]},ti=null,b={},ft=[["load",ct],["beforeunload",nt],["pagehide",nt],["unload",nt]],o=0;o<ft.length;o++)i.sh(n,ft[o][0],ft[o][1],!1);for(n.addEventListener?i.sh(n,"error",oi,!1):n.onerror=function(n,t,i,e,o){if(t||!dt){var s=[u(),n,i,e,t==f.URL?"#":t],h=it(n,i,e,o&&o.moduleName);s=s.concat([o&&o.stack,o&&o.moduleName,b[h]?0:1]);b[h]=!0;lt(s);r.errors.push(s)}},k=[["scroll",tt],["keypress",tt],["click",tt],["DOMContentLoaded",fi],["readystatechange",ei]],o=0;o<k.length;o++)i.sh(f,k[o][0],k[o][1],!1);(i.wrap(!1,n,"requestAnimationFrame",function(i){return function(){return t.firstPaint=u(),n.requestAnimationFrame=i,i.apply(this,arguments)}}),c)?c.prototype?(i.wrap(!1,c.prototype,"open",at),i.wrap(!1,c.prototype,"send",vt)):(i.ie=7,ii=c,n.XMLHttpRequest=function(){var n=new ii;return i.wrap(!1,n,"open",at),i.wrap(!1,n,"send",vt),n}):n.ActiveXObject&&(i.ie=6)}}(window)