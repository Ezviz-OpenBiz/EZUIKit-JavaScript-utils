/*
*
* @ezuikit/utils-dom v1.0.0-alpha.3
* Copyright (c) 2024-5-22 Ezviz-OpenBiz
* Released under MIT the License.
*
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Dom={})}(this,(function(e){"use strict";var t="ezui";e.PREFIX_CLASS_NAME=t,e.addClass=function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];var r;e&&(o=o.filter((function(e){return e&&!!e.replace(/ /g,"")})),"development"===process.env.NODE_ENV&&(o=o.filter((function(e){return!!e.startsWith(t)}))),(r=e.classList).add.apply(r,[].concat(o)))},e.removeClass=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s;e&&(s=e.classList).remove.apply(s,[].concat(n))},e.style=function(e,t){Object.assign(e.style,t)}}));
