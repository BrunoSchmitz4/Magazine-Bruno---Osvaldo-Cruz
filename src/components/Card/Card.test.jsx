import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("<Card />", () => {
  test("mostra o nome do produto", () => {
    render(<Card title="Mouse Gamer" price={99.9} />);

    expect(screen.getByText("Mouse Gamer")).toBeInTheDocument();
  });

  test("mostra o preço formatado em real", () => {
    render(<Card title="Mouse Gamer" price={99.9} />);

    expect(screen.getByText("R$ 99,90")).toBeInTheDocument();
  });

  test("mostra a descrição quando ela existe", () => {
    render(
      <Card title="Headset" desc="Com microfone removível" price={199} />,
    );

    expect(screen.getByText("Com microfone removível")).toBeInTheDocument();
  });

  test("a imagem usa o nome do produto como texto alternativo", () => {
    render(<Card title="Webcam" price={150} img="/webcam.png" />);

    const imagem = screen.getByAltText("Webcam");
    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute("src", "/webcam.png");
  });

  test("não quebra quando o produto vem sem preço", () => {
    render(<Card title="Produto Sem Preço" />);

    expect(screen.getByText("Produto Sem Preço")).toBeInTheDocument();
    expect(screen.getByText("R$ 0,00")).toBeInTheDocument();
  });
});
