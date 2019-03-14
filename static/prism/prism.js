/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+json */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):"Array"===C.util.type(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function a(e,n){var r,t,i=C.util.type(e);switch(n=n||{},i){case"Object":if(t=C.util.objId(e),n[t])return n[t];for(var l in r={},n[t]=r,e)e.hasOwnProperty(l)&&(r[l]=a(e[l],n));return r;case"Array":return t=C.util.objId(e),n[t]?n[t]:(r=[],n[t]=r,e.forEach(function(e,t){r[t]=a(e,n)}),r);default:return e}}},languages:{extend:function(e,t){var a=C.util.clone(C.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||C.languages)[a],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);t.hasOwnProperty(l)||(i[l]=r[l])}var s=n[a];return n[a]=i,C.languages.DFS(C.languages,function(e,t){t===s&&e!=a&&(this[e]=i)}),i},DFS:function e(t,a,n,r){r=r||{};var i=C.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],s=C.util.type(o);"Object"!==s||r[i(o)]?"Array"!==s||r[i(o)]||(r[i(o)]=!0,e(o,a,l,r)):(r[i(o)]=!0,e(o,a,null,r))}}},plugins:{},highlightAll:function(e,t){C.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",n);for(var r,i=n.elements||e.querySelectorAll(n.selector),l=0;r=i[l++];)C.highlightElement(r,!0===t,n.callback)},highlightElement:function(e,t,a){for(var n,r,i=e;i&&!u.test(i.className);)i=i.parentNode;i&&(n=(i.className.match(u)||[,""])[1].toLowerCase(),r=C.languages[n]),e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+n,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(u,"").replace(/\s+/g," ")+" language-"+n));var l={element:e,language:n,grammar:r,code:e.textContent},o=function(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),a&&a.call(l.element)};if(C.hooks.run("before-sanity-check",l),l.code)if(C.hooks.run("before-highlight",l),l.grammar)if(t&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(C.highlight(l.code,l.grammar,l.language));else o(C.util.encode(l.code));else C.hooks.run("complete",l)},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return C.hooks.run("before-tokenize",n),n.tokens=C.tokenize(n.code,n.grammar),C.hooks.run("after-tokenize",n),M.stringify(C.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,r,i,l){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){if(o==l)return;var s=a[o];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var u=s[g],c=u.inside,h=!!u.lookbehind,f=!!u.greedy,d=0,p=u.alias;if(f&&!u.pattern.global){var m=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,m+"g")}u=u.pattern||u;for(var y=n,v=r;y<t.length;v+=t[y].length,++y){var k=t[y];if(t.length>e.length)return;if(!(k instanceof M)){if(f&&y!=t.length-1){if(u.lastIndex=v,!(x=u.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=t.length;A<O&&(P<w||!t[A].type&&!t[A-1].greedy);++A)(P+=t[A].length)<=b&&(++y,v=P);if(t[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{u.lastIndex=0;var x=u.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(o,c?C.tokenize(x,c):x,p,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(t,E),1!=N&&C.matchGrammar(e,t,a,y,v,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}return C.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=C.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=C.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}},Token:M};function M(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(t,a,e){if("string"==typeof t)return t;if("Array"===C.util.type(t))return t.map(function(e){return M.stringify(e,a,t)}).join("");var n={type:t.type,content:M.stringify(t.content,a,e),tag:"span",classes:["token",t.type],attributes:{},language:a,parent:e};if(t.alias){var r="Array"===C.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(n.classes,r)}C.hooks.run("wrap",n);var i=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;g.postMessage(C.highlight(n,C.languages[a],a)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+e.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var a=s.languages.markup;a&&(a.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},a.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},/\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
Prism.languages.json={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};
