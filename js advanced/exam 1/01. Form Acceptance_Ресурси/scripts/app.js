function acceptance() {
	const warehouse = document.getElementById('warehouse');
	const company = document.querySelector('input[name="shippingCompany"]');
	const product = document.querySelector('input[name="productName"]');
	const quantity = document.querySelector('input[name="productQuantity"]');
	const scrape = document.querySelector('input[name="productScrape"]');
	const button = document.getElementById('acceptance');

	button.addEventListener('click', newProduct);

	function newProduct() {


		if (company.value && product.value && !(isNaN(Number(quantity.value))) && !(isNaN(Number(scrape.value)))) {
			const productFinal = quantity.value - scrape.value;


			if (productFinal > 0) {
				const div = document.createElement('div');
				const p = document.createElement('p');
				const btn = document.createElement('button');

				p.textContent = `[${company.value}] ${product.value} - ${productFinal} pieces`;
				btn.textContent = 'Out of stock';

				div.appendChild(p);
				div.appendChild(btn);
				warehouse.appendChild(div);

				btn.addEventListener('click', removeStock);
			}
		}
		company.value = '';
		product.value = '';
		quantity.value = '';
		scrape.value = '';
	}

	function removeStock(e) {
		const divElement = e.target;
		divElement.parentNode.remove();
	}
}