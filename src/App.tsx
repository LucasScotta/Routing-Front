import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Pages'
import store from './redux/store'
import { Router } from './Router'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
