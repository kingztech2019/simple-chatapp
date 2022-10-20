 
import './App.css';
import Chat from './components/Chat';
import RoutesFile from './RouteFiles';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <RoutesFile />
  </Router>
  );
}

export default App;
