import Home from "./pages/Home";
import CatalogoProdutos from "./pages/CatalogoProdutos";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Produto from "./pages/Produto";

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
            </Routes>
    )
}
export default AppRoutes;