/*
*
* @ezuikit/utils-service v1.0.0-alpha.10
* Copyright (c) 2024-5-22 Ezviz-OpenBiz
* Released under MIT the License.
*
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Service=e()}(this,(function(){"use strict";
/*
  *
  * @ezuikit/utils-tools v1.0.0-alpha.6
  * Copyright (c) 2024-3-1 Ezviz-OpenBiz
  * Released under MIT the License.
  *
  */function t(t,e){return Object.entries(t).reduce((function(t,n){var r=n[0],i=n[1];return e.includes(r)&&(t[r]=i),t}),{})}var e="https://open.ys7.com";function n(t,e){return new Promise((function(n,r){fetch(t,e).then((function(t){return t.json()})).then((function(t){var e,i;if(200==+t.code||0==+(null==(e=t.meta)?void 0:e.code)||200==+(null==(i=t.meta)?void 0:i.code))n(t);else{if(t.meta)return t.meta.msg=t.meta.message,void r(t.meta);r(t)}})).catch((function(t){if(t.meta)return t.meta.msg=t.meta.message,void r(t.meta);r(t)}))}))}function r(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}function i(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function a(t,a){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var o,s=new FormData;Object.entries(t).forEach((function(t){var e=t[0],n=t[1];s.append(e,n)})),s.append("version",null!=(o=t.version)?o:"2.0"),t=s}return new Promise((function(o,s){var u=function(){return l.apply(this,arguments)},c=[];function l(){var d;return d=function(){var r,l,d,f;return i(this,(function(i){switch(i.label){case 0:return[4,n((null!=a?a:e)+"/api/lapp/video/by/time",{method:"POST",body:t})];case 1:return(l=i.sent()).data&&Array.isArray(l.data)?(c=c.concat(l.data),o({code:200,data:c,msg:""}),[2]):(!Array.isArray(l.data)&&(null==(r=l.data)?void 0:r.files)&&(c=c.concat(l.data.files),(null==(d=l.data)?void 0:d.isAll)?o({code:200,data:c,msg:""}):(null==(f=l.data)?void 0:f.nextFileTime)&&(t.append("startTime",l.data.nextFileTime),u().catch(s))),o({code:200,data:[],msg:""}),[2])}}))},l=function(){var t=this,e=arguments;return new Promise((function(n,i){var a=d.apply(t,e);function o(t){r(a,n,i,o,s,"next",t)}function s(t){r(a,n,i,o,s,"throw",t)}o(void 0)}))},l.apply(this,arguments)}u().catch(s)}))}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var s={exports:{}};!function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",u="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:u,d:s,D:f,h:o,m:a,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",b={};b[g]=v;var w="$isDayjsObject",D=function(t){return t instanceof O||!(!t||!t[w])},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;b[s]=e,i=s}return!r&&i&&(g=i),i||!r&&g},T=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},M=$;M.l=S,M.i=D,M.w=function(t,e){return T(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[w]=!0}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return M},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var n=T(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return T(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<T(t)},y.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!M.u(e)||e,l=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case c:return r?h(1,v):h(0,v+1);case u:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return h(r?y-b:y+(6-b),v);case s:case f:return p($+"Hours",0);case o:return p($+"Minutes",1);case a:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,u=M.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[s]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[o]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],p=u===s?this.$D+(e-this.$W):e;if(u===c||u===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[M.p(t)]()},y.add=function(r,l){var f,h=this;r=Number(r);var p=M.p(l),m=function(t){var e=T(h);return M.w(e.date(e.date()+Math.round(t*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===u)return m(7);var v=(f={},f[a]=e,f[o]=n,f[i]=t,f)[p]||1,y=this.$d.getTime()+r*v;return M.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),a=this.$H,o=this.$m,s=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},f=function(t){return M.s(a%12||12,t,"0")},p=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return M.s(e.$y,4,"0");case"M":return s+1;case"MM":return M.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return e.$D;case"DD":return M.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,u,2);case"ddd":return d(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return M.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return M.s(o,2,"0");case"s":return String(e.$s);case"ss":return M.s(e.$s,2,"0");case"SSS":return M.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,v=M.p(f),y=T(r),$=(y.utcOffset()-this.utcOffset())*e,g=this-y,b=function(){return M.m(m,y)};switch(v){case d:p=b()/12;break;case c:p=b();break;case l:p=b()/3;break;case u:p=(g-$)/6048e5;break;case s:p=(g-$)/864e5;break;case o:p=g/n;break;case a:p=g/e;break;case i:p=g/t;break;default:p=g}return h?p:M.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return M.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),_=O.prototype;return T.prototype=_,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),T.extend=function(t,e){return t.$i||(t(e,O,T),t.$i=!0),T},T.locale=S,T.isDayjs=D,T.unix=function(t){return T(1e3*t)},T.en=b[g],T.Ls=b,T.p={},T}()}(s);var u=o(s.exports);function c(t){var e=t.slice(0,4),n=t.slice(4,6),r=t.slice(6,8),i=t.slice(8,10),a=t.slice(10,12),o=t.slice(12,14);return new Date(e+"/"+n+"/"+r+" "+i+":"+a+":"+o)}return function(){function r(t){if(!t)throw new Error("options is required");var n;this._options=t,/^http[s]?:\/\//.test(null!=(n=null==t?void 0:t.domain)?n:"")||(this._options.domain=e)}var i=r.prototype;return i.getDeviceCapacity=function(){return function(t,r){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var i=new FormData;Object.entries(t).forEach((function(t){var e=t[0],n=t[1];i.append(e,n)})),t=i}return n((null!=r?r:e)+"/api/lapp/device/capacity",{method:"POST",body:t})}(t(this._options,["accessToken","deviceSerial"]),this._options.domain)},i.getDeviceInfo=function(){return function(t,r){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var i=new FormData;Object.entries(t).forEach((function(t){var e=t[0],n=t[1];i.append(e,n)})),t=i}return n((null!=r?r:e)+"/api/lapp/device/info",{method:"POST",body:t})}(t(this._options,["accessToken","deviceSerial"]),this._options.domain)},i.getRealPlayUrl=function(r){var i,a,o=this,s=null==(a=this._options)||null==(i=a.extraParams)?void 0:i.ezopenParams;return function(t,r){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var i,a,o=new FormData;o.append("isFlv","false"),o.append("userAgent",null==(a=window)||null==(i=a.navigator)?void 0:i.userAgent),o.append("isHttp","false"),Object.entries(t).forEach((function(t){var e=t[0],n=t[1];o.append(e,n)})),t=o}return n((null!=r?r:e)+"/api/lapp/live/url/ezopen",{method:"POST",body:t})}(r=Object.assign({},t(this._options,["accessToken"]),r,"object"==typeof s?s:{}),this._options.domain).then((function(t){var e,n,r,i,a,s,u,c,l,d,f="",h="",p="";if((null==t||null==(e=t.ext)?void 0:e.token)?(h+=t.data,p=t.ext.token,f=t.data):(null==(n=t.data)?void 0:n.token)&&(h+=t.data.url,p=t.data.token,f=t.data.url),h=h.includes("live")?h+"&ssn="+p+"&auth=1&biz=4&cln=100":h+"&ssn="+p+"&auth=1&cln=100",null==(i=o._options)||null==(r=i.extraParams)?void 0:r.wsParams)if("string"==typeof(null==(s=o._options)||null==(a=s.extraParams)?void 0:a.wsParams))h+="&"+(null==(d=o._options)||null==(l=d.extraParams)?void 0:l.wsParams);else if("object"==typeof(null==(c=o._options)||null==(u=c.extraParams)?void 0:u.wsParams)){var m,v;for(var y in null==(v=o._options)||null==(m=v.extraParams)?void 0:m.wsParams){var $,g;h+="&"+y+"="+(null==(g=o._options)||null==($=g.extraParams)?void 0:$.wsParams[y])}}return{playUrl:f,stream:p,realUrl:h}}))},i.getVideoByTime=function(e){return a(e=Object.assign({},t(this._options,["accessToken","deviceSerial"]),e),this._options.domain)},i.getRecordCloudVideoByTime=function(r){return function(t,r){var i,a,o={startTime:t.startTime?null==(i=u(t.startTime))?void 0:i.format("YYYY-MM-DD HH:mm:ss"):void 0,endTime:t.startTime?null==(a=u(t.endTime))?void 0:a.format("YYYY-MM-DD HH:mm:ss"):void 0,spaceId:t.spaceId},s=Object.keys(o).reduce((function(t,e){return null==o[e]?t:t+="&"+e+"="+encodeURIComponent(o[e])}),"").replace("&","");return n((null!=r?r:e)+"/api/service/cloudrecord/video/info/list?"+s,{method:"GET",headers:{accessToken:t.accessToken,deviceSerial:t.deviceSerial,localIndex:t.channelNo}}).then((function(t){return t.data=(t.data||[]).map((function(t){return t.endTime=c(t.stopTime).getTime(),t.startTime=c(t.startTime).getTime(),t.iStorageVersion=t.istorageVersion,t.busType=7,delete t.istorageVersion,t})),t}))}(r=Object.assign({},t(this._options,["accessToken","deviceSerial"]),r),this._options.domain)},i.getThemeDetailById=function(t){return r={accessToken:this._options.accessToken,id:t},n((null!=(i=this._options.domain)?i:e)+"/api/service/media/template/getDetail?accessToken="+r.accessToken+"&id="+r.id,{method:"GET"});var r,i},i.setMirrorFlip=function(r){return function(t,r){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var i=new FormData;Object.entries(t).forEach((function(t){var e=t[0],n=t[1];i.append(e,n)})),t=i}return n((null!=r?r:e)+"/api/lapp/device/ptz/mirror",{method:"POST",body:t})}(r=Object.assign({},t(this._options,["accessToken","deviceSerial"]),r),this._options.domain)},i.getVideoByID=function(t){return function(t,r){if(t&&"[object FormData]"!==Object.prototype.toString.call(t)){var i=new FormData;Object.entries(t).forEach((function(t){var e=t[0],n=t[1];i.append(e,n)})),t=i}return n((null!=r?r:e)+"/api/lapp/video/by/id",{method:"POST",body:t})}(t,this._options.domain)},i.getVersion=function(){return this.version},r}()}));
