import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
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
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Provider>
  );
}

export default App;
