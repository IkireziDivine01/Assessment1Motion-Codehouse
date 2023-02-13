import Transhipment_entry from './assets/components/Transhipmentship_entry'
import AddNewGood from './assets/components/AddNewGood'
import AddNewHandlers from './assets/components/AddNewHandlers'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Transhipment_entry/>}/>
        <Route path='/TranshipmentEntry' element = {<Transhipment_entry/>}/>
        <Route path='/AddNewGood' element = {<AddNewGood/>}/>
        <Route path='/AddNewHandlers' element = {<AddNewHandlers/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
