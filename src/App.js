import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import { useSelector } from 'react-redux';
import { selectMode } from './Redux/Features/darkModeSlice';

function App() {
  const mode = useSelector( selectMode );
  return (
    <div className={ mode ? 'App color' : 'App' }>
      <div className={ mode ? 'dark' : 'bg' }></div>
      <div className="container">
        <Header />
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
