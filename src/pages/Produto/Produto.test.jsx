import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Produto from "./index";
import { renderComApp } from "../../testes/utilsDeTeste";

// Sem isto, o carrinho de um teste vaza para o próximo:
// o CarrinhoContext lê o localStorage, e o jsdom não o limpa sozinho.
beforeEach(() => {
  localStorage.clear();
});

describe("página de Produto", () => {
  test("mostra o produto da rota", () => {
    renderComApp(<Produto />, {
      caminho: "/Catalogo/:id",
      rota: "/Catalogo/2",
    });

    expect(screen.getByText("Teclado Mecânico 2")).toBeInTheDocument();
  });

  test("adicionar ao carrinho atualiza o Header", async () => {
    const usuario = userEvent.setup();
    renderComApp(<Produto />, {
      caminho: "/Catalogo/:id",
      rota: "/Catalogo/2",
    });

    expect(screen.getByText("Carrinho (0)")).toBeInTheDocument();

    await usuario.click(
      screen.getByRole("button", { name: /adicionar ao carrinho/i }),
    );

    expect(screen.getByText("Carrinho (1)")).toBeInTheDocument();
  });

  test("produto fora de estoque não mostra o botão", () => {
    renderComApp(<Produto />, {
      caminho: "/Catalogo/:id",
      rota: "/Catalogo/1",
    });

    expect(
      screen.queryByRole("button", { name: /adicionar/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Produto indisponível")).toBeInTheDocument();
  });

  test("produto inexistente mostra mensagem", () => {
    renderComApp(<Produto />, {
      caminho: "/Catalogo/:id",
      rota: "/Catalogo/9999",
    });

    expect(screen.getByText(/inexistente/i)).toBeInTheDocument();
  });
});
