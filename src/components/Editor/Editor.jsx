import React, { useState } from "react";
import Previewer from "../Previewer/Previewer";
import "./Editor.scss";

function Editor() {
  let initial = `    
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`;
  const [content, setContent] = useState(initial);
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleClick = () => setClick(!click);

  return (
    <main>
      <section className='editor'>
        <label className='editor__title' htmlFor='editor'>
          Editor
          <i
            onClick={handleClick}
            className={click ? "fas fa-compress-alt" : "fas fa-expand-alt"}></i>
        </label>
        <form id='editor-text-area' className='editor__text'>
          <textarea
            type='text'
            id='editor'
            className='editor__area'
            onInput={handleChange}>
            {content}
          </textarea>
        </form>
      </section>
      <Previewer convert={content} />
    </main>
  );
}

export default Editor;
