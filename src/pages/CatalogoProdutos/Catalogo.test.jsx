import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CatalogoProdutos from "./index";
import { renderComApp } from "../../testes/utilsDeTeste";

beforeEach(() => {
  localStorage.clear();
});

describe("busca do catálogo", () => {
  test("a busca filtra os produtos", async () => {
    const usuario = userEvent.setup();
    renderComApp(<CatalogoProdutos />, {
      caminho: "/Catalogo",
      rota: "/Catalogo",
    });

    await usuario.type(
      screen.getByPlaceholderText("Buscar produto..."),
      "Webcam 5",
    );

    expect(screen.getByText("Webcam 5")).toBeInTheDocument();
    expect(screen.queryByText("Mouse Gamer 1")).not.toBeInTheDocument();
  });
});
