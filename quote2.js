let sod = 0;
let tax = 0;
let sodTax = 0;
let install = 0;
let sodInstall = 0;
let total = 0;
let sodPrice = parseFloat(document.getElementById('sodPrice').value);
let installPrice = 0.17;
let taxRate = 0.0725;


function update() {
    alert(sodPrice);
    footage = parseFloat(document.getElementById("footage").value);

    // sod = numeral((parseFloat(footage) * parseFloat(sodPrice))).format('$0,0.00');
    sod = numeral(footage * parseFloat(sodPrice)).format('$0,0.00');

    tax = numeral(parseFloat(sod) * parseFloat(taxRate)).format('$0,0.00');

    sodTax = numeral((parseFloat(sod) + parseFloat(tax))).format('$0,0.00');
    install = (parseFloat(footage) * parseFloat(installPrice)).toPrecision(5)
    sodInstall = (parseFloat(sod) + parseFloat(install)).toPrecision(6)
    total = (parseFloat(sod) + parseFloat(install) + parseFloat(tax)).toPrecision(6)
    
    document.getElementById('totalSod').innerHTML = sod;
    document.getElementById('totalTax').innerHTML = tax;
    document.getElementById('totalSodTax').innerHTML = sodTax;
    document.getElementById('totalInstall').innerHTML = "$" + install;
    document.getElementById('totalSodInstall').innerHTML = "$" + sodInstall;
    document.getElementById('totalOrder').innerHTML = "$" + total;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', 
    minimumFractionDigits: 2
})

