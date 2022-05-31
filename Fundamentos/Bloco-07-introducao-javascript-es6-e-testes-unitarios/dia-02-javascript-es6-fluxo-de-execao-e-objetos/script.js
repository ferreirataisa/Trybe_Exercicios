const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
const customerInfo = (order) => {
    const fazerPedido = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R. ${order.address.street}, N° ${order.address.number}, AP: ${order.address.apartment}`;

    console.log(fazerPedido);
}

  customerInfo(order);
  

  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment = '50'; 

    const retornoPedido = `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é de R$ ${order.payment},00.`;

    console.log(retornoPedido);
  
  }
  
  orderModifier(order);