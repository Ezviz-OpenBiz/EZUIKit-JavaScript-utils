/*
*
* @ezuikit/utils-dom v1.0.0-alpha.3
* Copyright (c) 2024-5-22 Ezviz-OpenBiz
* Released under MIT the License.
*
*/
"use strict";var e="ezui";exports.PREFIX_CLASS_NAME=e,exports.addClass=function(t){for(var r=arguments.length,s=new Array(r>1?r-1:0),n=1;n<r;n++)s[n-1]=arguments[n];var a;t&&(s=s.filter((function(e){return e&&!!e.replace(/ /g,"")})),"development"===process.env.NODE_ENV&&(s=s.filter((function(t){return!!t.startsWith(e)}))),(a=t.classList).add.apply(a,[].concat(s)))},exports.removeClass=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];var n;e&&(n=e.classList).remove.apply(n,[].concat(r))},exports.style=function(e,t){Object.assign(e.style,t)};
