import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import rootStore from './redux/store';
function App() {
  return (
    <>
      <h1>React App15</h1>
      <Provider store={rootStore}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
