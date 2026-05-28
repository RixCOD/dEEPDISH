import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RestaurantList from './pages/RestaurantList';
import Unauthorized from './pages/Unauthorized';
import Home from './pages/Home';
// import 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}