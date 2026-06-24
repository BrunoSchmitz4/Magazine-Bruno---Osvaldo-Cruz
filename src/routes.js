import Home from "./pages/Home";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import Pedidos from "./pages/Pedidos";

function AppRoutes() {
    return (
            <Routes>
                <Route 
                    path="/"
                    element={<Home />}
                    />
                <Route 
                    path="/Catalogo" 
                    element={<CatalogoProdutos />}
                    />
                <Route
                    path="*"
                    element={<NotFound />}
                />
                <Route 
                    path="/Catalogo/:id"
                    element={<Produto />}
                />
                <Route
                    path="/Carrinho"
                    element={<Carrinho />}
                />
                <Route
                    path="/Pedidos"
                    element={<Pedidos />}
                />
            </Routes>
    )
}
export default AppRoutes;