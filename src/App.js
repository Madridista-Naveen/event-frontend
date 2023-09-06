import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}
export default App;
