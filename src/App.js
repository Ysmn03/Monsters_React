import MonstersList from './components/MonsterListComponent/MonsterList';
import MonsterDetails from './components/MonsterDetailsComponent/MonsterDetails';
import Layout from './components/Layout';
import './components/MonsterListComponent/MonsterList.css';
import './components/MonsterDetailsComponent/MonsterDetails.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="monsters/:id" element={<MonsterDetails/>} />
            <Route path="monsters" element={<MonstersList/>} />
          </Route>
        </Routes>
    </Router>
  );
}