(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{112:function(e,t){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(62),s=n.n(r),c=(n(67),n(68),n(8)),i=n(32),o=n.n(i),l=n(33),d=n.n(l),u=(n(69),n(0));var f=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(!1),l=Object(c.a)(i,2),f=l[0],b=l[1];return o.a.setOptions({gfm:!0,breaks:!0}),Object(u.jsxs)("section",{className:f?"previewer maxed":"previewer",children:[Object(u.jsxs)("label",{className:"previewer__title",children:["Preview",Object(u.jsx)("i",{onClick:function(){s(!r),e.handler(),b(!f)},className:r?"fas fa-compress-alt":"fas fa-expand-alt"})]}),Object(u.jsx)("div",{id:"preview",className:"previewer__content",dangerouslySetInnerHTML:{__html:d()(o()(e.convert),{allowedTags:d.a.defaults.allowedTags.concat(["img"])})}})]})};n(117);var b=function(){var e=Object(a.useState)("    \n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n    }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n    - Some are bulleted.\n        - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n\n"),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(c.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(!1),b=Object(c.a)(d,2),j=b[0],m=b[1],h=Object(a.useState)(!1),O=Object(c.a)(h,2),p=O[0],w=O[1],v="editor",x="editor hide",g="editor maxed";return Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{className:j?x:p?g:v,children:[Object(u.jsxs)("label",{className:"editor__title",htmlFor:"editor",children:["Editor",Object(u.jsx)("i",{onClick:function(){l(!o),w(!p)},className:o?"fas fa-compress-alt":"fas fa-expand-alt"})]}),Object(u.jsx)("form",{id:"editor-text-area",className:"editor__text",children:Object(u.jsx)("textarea",{type:"text",id:"editor",className:"editor__area",onInput:function(e){r(e.target.value)},children:n})})]}),!p&&Object(u.jsx)(f,{convert:n,handler:function(){return m(!j)},clickValue:o})]})};var j=function(){return Object(u.jsx)("div",{className:"app-wrapper",children:Object(u.jsx)(b,{})})};s.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))},25:function(e,t){},26:function(e,t){},50:function(e,t){},56:function(e,t){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},91:function(e,t){}},[[118,1,2]]]);
//# sourceMappingURL=main.ed46dc8b.chunk.js.map