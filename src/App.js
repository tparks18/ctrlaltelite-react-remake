import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import rainbowTheme from './themes/rainbowTheme'
// import { getCategories } from './api/apiCategory';
// import { CancelToken } from 'apisauce';

// const handleClick = async () => {
//   const source = CancelToken.source()
//   const response_object = await getCategories(source.token);
//   console.log(response_object()
//     )
// }

function App() {
  return (
    <ThemeProvider theme={rainbowTheme}>
      <NavBar>
        {/* <Button onClick={handleClick}>Do Api Call</Button> */}
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
