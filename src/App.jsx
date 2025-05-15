import { useState } from 'react'
import './App.css';
import { marked } from 'marked'

function App() {

  marked.setOptions({
    breaks: true
  })

  const [markdown, setMarkdown] = useState(`
# Hello world

## This is my markdown

\`<div>project</div>\`

- I'm gonna 
  - show
    - you

**A bit** of *things* 

\`\`\`
function showThings(){
    return things
}
\`\`\`

> Joking

Take [monkeys](https://www.istockphoto.com/es/fotos/mono) for the problems

![monkey](https://imgs.search.brave.com/PcEZvaxWu4Dpr-2kFJN3Kh1GoUnf4eIZ9MxBuIe-mhg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI5/NjI4OTUyL2VzL2Zv/dG8vbW9uby1jYXAl/QzMlQjMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTM2SjE4/V2JnQkdzNkxpNDVQ/R3g3VzlMNENKeFB5/MXdfYXY3MWxGckR6/czg9)
`)


const handleInput = e => setMarkdown(e.target.value)

  const html = marked(markdown)
  return (
    <main className="container" id="main">
      <h1 id="title">My markdown previewer</h1>
      <div className="d-flex flex-column flex-md-row justify-content-between" id="titles">
        <h1 className="col-12 col-md-5 order-1 order-md-1" id="editor-title">Editor</h1>
        <h1 className="d-none d-md-block col-12 col-md-5 order-2 order-md-2" id="preview-title">Preview</h1>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <textarea className="col-12 col-md-5 order-1 order-md-1" id="editor" value={markdown} onChange={handleInput}></textarea>
        <h1 className="d-block d-md-none col-12-md col-md-5 order-2 order-md-2 mt-5" id="preview-title">Preview</h1>
        <article className="col-12 col-md-5 order-2 order-md-2"  id="preview" dangerouslySetInnerHTML={{__html:html}}></article>
      </div>
    </main>
  )
}

export default App
