import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { UserId } from './pages/UserId'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:userName' element={<UserId />} />
    </Routes>
  )
}

export default App;
