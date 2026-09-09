import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "../context/CarrinhoContext";
import Header from "../components/Header";

// Monta os "embrulhos" que o app de verdade monta no src/index.js:
// as rotas (MemoryRouter) e o estado do carrinho (CarrinhoProvider).
// O Header entra junto porque é nele que conferimos o contador.
export function renderComApp(elemento, { caminho, rota = "/" } = {}) {
  return render(
    <MemoryRouter initialEntries={[rota]}>
      <CarrinhoProvider>
        <Header />
        <Routes>
          <Route path={caminho} element={elemento} />
        </Routes>
      </CarrinhoProvider>
    </MemoryRouter>,
  );
}
