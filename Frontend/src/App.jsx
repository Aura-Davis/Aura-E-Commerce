import './static/styles/App.css'
import Navbar from './Components/Navbar/Navbar'
import sale from './static/images/sale.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Categories from './Pages/Categories'

function App() {

    return (
        <div>
        <BrowserRouter>
            <Navbar />
            <div id="home">
                <img className="header" src={sale} />
                </div>
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Categories' element={<Categories />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/Pantry' element={<ShopCategory category="Pantry" />} />
                    <Route path='/Dairy' element={<ShopCategory category="Dairy" />} />
                    <Route path='/Meat' element={<ShopCategory category="Meat" />} />
                    <Route path='/Produce' element={<ShopCategory category="Produce" />} />
                    <Route path='/Beverage' element={<ShopCategory category="Beverage" />} />
                    <Route path='/Bread' element={<ShopCategory category="Bread" />} />
                    <Route path='/Frozen Food' element={<ShopCategory category="Frozen Food" />} />
                    <Route path='/Product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>

                </Routes>
            </BrowserRouter>    
        </div>
    );
}

export default App
