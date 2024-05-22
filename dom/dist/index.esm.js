/*
*
* @ezuikit/utils-dom v1.0.0-alpha.3
* Copyright (c) 2024-5-22 Ezviz-OpenBiz
* Released under MIT the License.
*
*/
var r="ezui";function t(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var c;t&&(n=n.filter((function(r){return r&&!!r.replace(/ /g,"")})),"development"===process.env.NODE_ENV&&(n=n.filter((function(t){return!!t.startsWith(r)}))),(c=t.classList).add.apply(c,[].concat(n)))}function e(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];var a;r&&(a=r.classList).remove.apply(a,[].concat(e))}function n(r,t){Object.assign(r.style,t)}export{r as PREFIX_CLASS_NAME,t as addClass,e as removeClass,n as style};
