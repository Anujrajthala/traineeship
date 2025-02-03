import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BookForm from './BookForm.jsx';
import BookList from './BookList.jsx';
import BookDetail from './BookDetail.jsx'

function App() {
  

  return (
    <>
    <Router>
      <h2>Books Library</h2>
      <Routes>
        <Route path= '/' element={<BookList/>}/>
        <Route path='/add/*' element={<BookForm/>}/>
        <Route path='/detail' element = {<BookDetail/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

