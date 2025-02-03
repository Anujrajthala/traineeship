import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactMarkdown from 'react-markdown'

function App() {
 const [markdownText, setMarkdownText] = useState('# Hello World')
 const handleChange = function(e){
  setMarkdownText(e.target.value)
 }

  return (
    <>
     <input type="text" value={markdownText} onChange={handleChange} />
     <h3>Preview</h3>
     <ReactMarkdown>{markdownText}</ReactMarkdown>
    </>
  )
}

export default App
