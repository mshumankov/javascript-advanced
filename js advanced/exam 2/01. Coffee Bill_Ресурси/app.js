function addProduct() {
    const product = document.getElementsByTagName('input')[0].value;
    const price = document.getElementsByTagName('input')[1].value;
    const total = document.querySelectorAll('tfoot tr td')[1];
    const table = document.getElementById('product-list');

    if (product && Number(price) > 0) {
        const tr = document.createElement('tr');
        const tdProduct = document.createElement('td');
        const tdPrice = document.createElement('td');

        tdProduct.textContent = product;
        tdPrice.textContent = price;

        tr.appendChild(tdProduct);
        tr.appendChild(tdPrice);
        table.appendChild(tr);

        total.textContent = Number(total.textContent) + Number(price);
    }

    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';

}