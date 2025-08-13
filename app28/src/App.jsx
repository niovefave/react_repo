// import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>React App28</h1>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
