import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import SingleInventory from './Pages/SingleInventory/SingleInventory';
import AddItem from './Pages/AddItem/AddItem';

function App() {
  return (
    <div className="App">
     <Header></Header>

     
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/inventory/:id' element={<SingleInventory></SingleInventory>}></Route>
       <Route path='/additem' element={<AddItem></AddItem>}></Route>
     </Routes>

    </div>
  );
}

export default App;
