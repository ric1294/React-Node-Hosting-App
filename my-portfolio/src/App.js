import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage'
import AboutMePage from './Pages/AboutMePage'
import ArticlePage from './Pages/ArticlePage'
import ArticleList from './Pages/ArticleListPage'
import { Route , BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/about" component={AboutMePage} exact></Route>
      <Route path="/article-list" component={ArticleList} exact></Route>
      <Route path="/article/:name" component={ArticlePage} exact></Route>
      </div>
    </Router>
    
  );
}

export default App;
