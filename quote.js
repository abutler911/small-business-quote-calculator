const footage =       parseFloat(document.querySelector("#footage").value);
const productPsfPrice =  parseFloat(document.querySelector("#productPsfPrice").value);
const installPsfPrice =  parseFloat(document.querySelector("#installPsfPrice").value);
const taxRate =       parseFloat(document.querySelector("#taxRate").value);
const updateBtn = document.querySelector('#updateBtn');

const installPriceCont = document.querySelector('#install-price-cont');

let total = footage * productPsfPrice;
let tax = total * taxRate;
let totalProduct = total + tax;

console.log(installPriceCont);
// console.log(installChecked);
console.log(footage, productPsfPrice, installPsfPrice, taxRate);

console.log(total, tax, totalProduct);


updateBtn.addEventListener('click', () => {
    total = (footage * productPsfPrice).toFixed(2);
    document.querySelector('#product-price').innerText = '$' + total;

    tax = (total * taxRate).toFixed(2);
    document.querySelector('#total-tax').innerText = '$' + tax;

    totalProduct = (parseFloat(total) + parseFloat(tax)).toFixed(2);
    document.querySelector('#total-product-with-tax').innerText = '$' + totalProduct;
    
});












// updateBtn.addEventListener('click', function update(footage, productPsfPrice, installPsfPrice, taxRate, installPrice) {
//     console.log(footage);

//     let total = parseFloat(footage) * parseFloat(productPsfPrice);
//     let tax = parseFloat(total) * parseFloat(taxRate); 
//     let totalProduct = parseFloat(total) + parseFloat(tax); 
//     document.querySelector('#product-price').innerText = '$' + total;
//     document.querySelector('#total-tax').innerText = '$' + tax;
//     document.querySelector('#total-product-with-tax').innerText = '$' + totalProduct;
// })




// function showInstall() {
//     installPrice.classList.toggle("display");
// }


