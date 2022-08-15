import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import rainbowTheme from './themes/rainbowTheme'

function App() {
  return (
    <ThemeProvider theme={rainbowTheme}>
      <NavBar>
      <h1>My react app</h1>
      <Error className="my_class">
        Some rando - error
      </Error>
      <Button variant="text">Click me</Button>
    </NavBar>
    </ThemeProvider>
  );
}

export default App;
