import { Provider } from 'react-redux';
import Home from './Components/Home/Home';
import store from './Components/redux/store';

function App() {
  return (
    <div >
      <Provider store={store}>
       <Home/>
      </Provider>
    </div>
  );
}

export default App;
