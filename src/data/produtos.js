// Lista de produtos da loja.
// Em vez de digitar 200 produtos na mão, geramos com um laço (for).
// Tudo é PREVISÍVEL (sem Math.random) para o preço e o estoque
// não mudarem a cada vez que a página carrega.

// Nomes-base que vamos reaproveitar. O número no final do nome
// deixa cada produto único (ex: "Mouse Gamer 1", "Mouse Gamer 21"...).
const nomesBase = [
  "Mouse Gamer",
  "Teclado Mecânico",
  "Monitor Full HD",
  "Headset",
  "Webcam",
  "Notebook",
  "Smartphone",
  "Tablet",
  "Cadeira Gamer",
  "Mousepad",
  "Caixa de Som",
  "Fone Bluetooth",
  "Carregador Turbo",
  "SSD 1TB",
  "Pen Drive 64GB",
  "Roteador Wi-Fi",
  "Impressora",
  "Smart TV",
  "Controle Sem Fio",
  "Câmera de Segurança",
];

export const produtos = [];

for (let i = 0; i < 200; i++) {
  const base = nomesBase[i % nomesBase.length];

  produtos.push({
    id: i + 1,
    nome: `${base} ${i + 1}`,
    preco: 19.9 + (i % 50) * 10,
    em_estoque: i % 4 !== 0,
    img: `https://picsum.photos/seed/${i + 1}/400/300`,
  });
}
