import './App.css';
import { BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { useContext } from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact/Contact';
import Form from './Pages/Form/Form';
import Admin from './Pages/Admin/Admin';
import { AuthContext } from './context/authContext';
import { AuthContextProvider } from './context/authContext';





function App() {
  function ProtectedRoute({ element: Element, ...props }) {
    const { currentUser } = useContext(AuthContext);
    return currentUser ? <Element {...props} /> : <Navigate to="/login" />;
  }

  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={<ProtectedRoute element={Admin} />} 
            />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;