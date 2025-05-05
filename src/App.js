import './App.css';
import MonstersList from './components/MonsterListComponent/MonsterList';
import MonsterDetails from './components/MonsterDetailsComponent/MonsterDetails';
import './components/MonsterListComponent/MonsterList.css';
import './components/MonsterDetailsComponent/MonsterDetails.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="monsters/:id" element={<MonsterDetails/>} />
          <Route path="" element={<MonstersList/>} />
        </Routes>
      </div>
    </Router>
  );
}