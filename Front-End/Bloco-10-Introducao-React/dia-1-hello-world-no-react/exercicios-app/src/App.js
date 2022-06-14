import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Estudar', 'Almoçar'];

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
