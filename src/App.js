import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BarangPage from './pages/BarangPage';
import HomePage from './pages/HomePage';
import TokoPage from './pages/TokoPage';

const App = () => {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/toko' element={<TokoPage/>} />
        <Route path='/barang' element={<BarangPage/>} />
      </Routes>
     </BrowserRouter>
   );
}
 
export default App;