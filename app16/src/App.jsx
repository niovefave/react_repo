import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter02 from './components/Counter02';

function App() {
  return (
    <>
      <h1>React App16</h1>
      <Provider store={store}>
        {/* <Counter /> */}
        <Counter02 />
      </Provider>
    </>
  );
}

export default App;
