import './App.css';
import Card from './components/userCard';


function App(props) {
  return (
    <main>
      <h1 className='titleApp'>{props.title}</h1>
      <Card />
    </main>
  );
}

export default App;
