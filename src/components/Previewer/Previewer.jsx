import React, { useState } from "react";
import marked from "marked";
import sanitizeHtml from "sanitize-html";
import "./Previewer.scss";

function Previewer(props) {
  const [click, setClick] = useState(false);
  const [maxed, setMaxed] = useState(false);

  const handleClick = () => {
    setClick(!click);
    props.handler();
    setMaxed(!maxed);
  };

  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  return (
    <section className={maxed ? "previewer maxed" : "previewer"}>
      <label className='previewer__title'>
        Preview
        <i
          onClick={handleClick}
          className={click ? "fas fa-compress-alt" : "fas fa-expand-alt"}></i>
      </label>
      <div
        id='preview'
        className='previewer__content'
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(marked(props.convert), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
        }}
      />
    </section>
  );
}

export default Previewer;
