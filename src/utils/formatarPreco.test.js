import { formatarPreco } from "./formatarPreco";

// describe
describe("formatarPreco", () => {

  test("formata um valor comum no padrão brasileiro", () => {
    const resultado = formatarPreco(99.9); // Act
    expect(resultado).toBe("R$ 99,90"); // Assert
  });

  test("sempre mostra duas casas decimais", () => {
    expect(formatarPreco(19)).toBe("R$ 19,00");
    expect(formatarPreco(1234.5)).toBe("R$ 1234,50");
  });

  test("usa vírgula, e não ponto, como separador", () => {
    expect(formatarPreco(10.25)).not.toContain(".");
    expect(formatarPreco(10.25)).toContain(",");
  });

  test("arredonda a terceira casa decimal", () => {
    expect(formatarPreco(9.999)).toBe("R$ 10,00");
  });

  test("aceita zero sem quebrar", () => {
    expect(formatarPreco(0)).toBe("R$ 0,00");
  });

  test("não quebra quando o preço não veio do banco", () => {
    expect(formatarPreco(undefined)).toBe("R$ 0,00");
    expect(formatarPreco(null)).toBe("R$ 0,00");
    expect(formatarPreco("banana")).toBe("R$ 0,00");
  });
});
