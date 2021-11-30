
export default  new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve({
      id: 2,
      title: "Promo Suiza",
      image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
      desc: "Balde de 3 litros + 6 bombones suizos",
      price : 900,
      stock:50,
      
    },);
    reject('Algo Fallo');
  }, 10000);
});
