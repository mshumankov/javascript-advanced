function solve() {
   let total = 0;
   let productList = [];
   let textElement = document.getElementsByTagName('textarea')[0];

   let shoppingCart = document.getElementsByClassName('product');

   for (let item of shoppingCart) {
      item.getElementsByClassName('add-product')[0].addEventListener('click', e => {
         let name = item.getElementsByClassName('product-title')[0].textContent;
         let money = Number(item.getElementsByClassName('product-line-price')[0].textContent);
         textElement.value += `Added ${name} for ${money} to the cart.\n`;
         total += money;
         if (!productList.includes(name)) {
            productList.push(name);
         }

      })
   }

   document.getElementsByClassName('checkout')[0].addEventListener('click', e => {
      let list = productList.join(', ');
      textElement.value += `You bought ${list} for ${total}.`;
   })
}