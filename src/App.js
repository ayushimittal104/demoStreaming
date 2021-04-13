import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/home';
import Movies from './Page/movies';
import Series from './Page/series';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/movies" exact component={Movies} />
        <Route path="/series" exact component={Series} />
      </BrowserRouter>
    </>
  );
}

export default App;
