import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components'
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
