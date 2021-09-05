import React from 'react'
import marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import './Previewer.scss'

function Previewer(props) {
    marked.setOptions({
        gfm: true,
        breaks: true
    });
    return (
        <section className="previewer">
        <label className="previewer__title">Preview</label>
        <div id="preview" className="previewer__content" dangerouslySetInnerHTML={{
            __html: sanitizeHtml(marked(props.convert), {allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])})
        }}
        />
        </section>        
    )
}

export default Previewer
