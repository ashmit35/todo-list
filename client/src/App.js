import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Todos />
    </div>
  );
}

export default App;
