import './App.css';
import Button from './components/Button';
import Error from './components/Error';

function App() {
  return (
    <>
      <h1>My react app</h1>
      <Error className="my_class">
        Some rando - error
      </Error>
      <Button variant="text">Click me</Button>
    </>
  );
}

export default App;
