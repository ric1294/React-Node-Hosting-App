import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage'
import AboutMePage from './Pages/AboutMePage'
import MyLearningListPage from './Pages/MyLearningListPage'
import TopicDetailPage from './Pages/TopicDetailPage'
import { Route , BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/about" component={AboutMePage}></Route>
      <Route path="/my-learning-list" component={MyLearningListPage}></Route>
      <Route path="/topic-detail/:name" component={TopicDetailPage}></Route>
      </div>
    </Router>
    
  );
}

export default App;
