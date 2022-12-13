import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/pages/Navbar';
import store from './Components/redux/store';
import Home from './Components/pages/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import AllContent from './Components/Dashboard/AllContent'
import AddContent from './Components/Dashboard/AddContent'
import UpdateContent from './Components/Dashboard/UpdateContent'

function App() {
  return (
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} >
              <Route index element={<AllContent/>} />
              <Route path='addContent' element={<AddContent/>} />
              <Route path='UpdateContent/:id' element={<UpdateContent/>} />
          </Route>
        </Routes>
      </Provider>
  );
}

export default App;
