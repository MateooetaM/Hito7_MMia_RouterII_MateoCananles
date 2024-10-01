import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";
import { TokenProvider } from "./context/TokenProvider";
import Auth from "./pages/Auth";
import { useContext } from "react";
import { TokenContext } from "./context/TokenContext";

function App() {
  const { user } = useContext(TokenContext);
  const token = user.token;
  return (
    <div className="wrapper">
      <ProductosProvider>
        <CarritoProvider>
          <TokenProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={token ? <RegisterPage /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<Auth />} />
              <Route path="/logout" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
            <Footer />
          </TokenProvider>
        </CarritoProvider>
      </ProductosProvider>
    </div>
  );
}

export default App;
