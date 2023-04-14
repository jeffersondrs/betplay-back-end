import mercadopago from "mercadopago";
import qrcode from "qrcode-terminal";

export const getCheckoutMPPayment = async (req, res) => {
  const dadosPagamento = {
    valor: 1000,
    descricao: "Pagamento de teste",
    cliente: {
      nome: "Fulano de Tal",
      email: "fulano@teste.com",
      cpf: "123.456.789-10",
    },
  };

  const pagamento = await mercadopago.preferences.create({
    items: [
      {
        title: dadosPagamento.descricao,
        quantity: 1,
        unit_price: dadosPagamento.valor / 100,
      },
    ],
    payer: {
      name: dadosPagamento.cliente.nome,
      email: dadosPagamento.cliente.email,
      identification: {
        type: "CPF",
        number: dadosPagamento.cliente.cpf,
      },
    },
  });

  const urlPagamento = pagamento.body.init_point;

  qrcode.generate(urlPagamento, { small: true }, (qrcodeASCII) => {
    res.send(`<pre>${qrcodeASCII}</pre>`);
  });
};
