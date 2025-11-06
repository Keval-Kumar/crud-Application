import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Dummy from './Dummy'

//import './Dummy.css'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

/*export default function App () {
  return (
    <div>
      <Dummy />
    </div>
  )
}*/

import { Routes, Route } from 'react-router';
import Get from './get'
import Post from './Post'
import Home from './Home';
import EditUser from './EditUser';
import About from './About';
import Terms from './Terms';
import Privacy from './Privacy';
import Faq from './Faq';
import './Home.css'
import './Get.css'
import './Update.css'
import './Post.css'
import './About.css'
export default function App() {
  return (
    <div>
      <div>
        <h1></h1>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Get' element={< Get />} />
          <Route path='/Edit/:id' element={< EditUser />} />
          <Route path='/Post' element={< Post />} />
          <Route path='/About' element={< About />} />
          <Route path='/About/Terms' element={<Terms />} />
          <Route path='/About/Privacy' element={<Privacy />} />
          <Route path='/About/Faq' element={<Faq />} />
        </Routes>
      </div>
    </div>
  )
}