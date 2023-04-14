import stripe from "stripe";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const order = stripe(process.env.STRIPE_SECRET_KEY);

export const getCheckoutPayment = async (req, res, next) => {
    const amount = req.body.amount;
  try {
    const paymentIntent = await order.paymentIntents.create({
      amount: amount * 100,
      currency: "brl",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      paymentIntent,
    });
  } catch (error) {
    next(error);
  }
};

// metodo pix stripe

// export const getPaymentPixCheckout = async (req, res, next) => {
//     const dadosPagamento = {
//       valor: 1000 * 100, // valor em centavos
//       descricao: "Pagamento de teste",
//       cliente: {
//         nome: "Fulano de Tal",
//         email: "fulano@teste.com",
//         cpf: "123.456.789-10",
//       },
//     };
//     try {
//       const pagamento = await order.paymentIntents.create({
//         payment_method_types: ["pix"],
//         amount: dadosPagamento.valor,
//         currency: "brl",
//         description: dadosPagamento.descricao,
//         metadata: {
//           nome_cliente: dadosPagamento.cliente.nome,
//           email_cliente: dadosPagamento.cliente.email,
//           cpf_cliente: dadosPagamento.cliente.cpf,
//         },
//       });
  
//       // Gere o QR code a partir dos dados do objeto de pagamento
//       const urlPagamento =
//         pagamento.charges.data[0].payment_method[
//           pagamento.charges.data[0].payment_method.type
//         ].qr_code_url;
//       const qrCode = await QRCode.toDataURL(urlPagamento);
  
//       // Exiba o QR code na página do usuário ou envie como resposta da requisição
//       res.send(`<img src="${qrCode}" alt="QR code do pagamento">`);
//     } catch (error) {
//       next(error);
//     }
//   };
  