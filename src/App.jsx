import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Productos from "./pages/Productos";
import './App.css'; // Estilos globales
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

function App() {
  console.log("🧭 App cargando...");
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
