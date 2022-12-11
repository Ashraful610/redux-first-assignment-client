import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AddContent from './Components/Dashboard/AddContent/AddContent';
import AllContent from './Components/Dashboard/AllContent';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import store from './Components/redux/store';

function App() {
  return (
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} >
              <Route index element={<AllContent/>} />
              <Route path='addContent' element={<AddContent/>} />
          </Route>
        </Routes>
      </Provider>
  );
}

export default App;
