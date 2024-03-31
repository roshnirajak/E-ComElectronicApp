import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar'
import ProductsPage from './components/ProductsPage';
import ProductDetailPage from './components/Product/ProductDetailPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar />
              <Outlet />
            </div>
          }
          >

            <Route index element={<ProductsPage />} />
            <Route path='/product/1' element={<ProductDetailPage/>}/>
            {/* <Route path="/update/:id" element={<UpdateForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/student/:studentId"  element={<StudentDetails/>} /> */}

          </Route>
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        
        </Routes>
      </Router>
    </>
  )
}

export default App
