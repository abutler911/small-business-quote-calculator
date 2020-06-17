function update() {
    // Get values from input boxes and assign to variables
    var footage =       parseFloat(document.getElementById("footage").value);
    var sodPrice =      parseFloat(document.getElementById("sodPsfPrice").value);
    var installPrice =  parseFloat(document.getElementById("installPsfPrice").value);
    var taxRate =       parseFloat(document.getElementById("taxRate").value);

    var sod =           (parseFloat(footage) * parseFloat(sodPrice)).toFixed(2);
    var tax =           (parseFloat(sod) * parseFloat(taxRate)).toFixed(2);
    var sodTax =        (parseFloat(sod) + parseFloat(tax)).toFixed(2);
    var install =       (parseFloat(footage) * parseFloat(installPrice)).toFixed(2); 
    var sodInstall =    (parseFloat(sod) + parseFloat(install)).toFixed(2);
    var totalOrder =    (parseFloat(sod) + parseFloat(install)).toFixed(2);

    document.getElementById('totalSod').innerHTML = "$" + sod;
    document.getElementById('totalTax').innerHTML = "$" + tax;
    document.getElementById('totalSodTax').innerHTML = "$" + sodTax;
    document.getElementById('totalInstall').innerHTML = "$" + install;
    document.getElementById('totalSodInstall').innerHTML = "$" + sodInstall;
    document.getElementById('totalOrder').innerHTML = "$" + totalOrder;
    
}

function showMulch() {
    var chkMulch = document.getElementById("chkMulch");
    if(chkMulch.checked) {
        document.getElementById('productLabel').innerHTML = "Mulch";
        document.getElementById('productTax').innerHTML = "Mulch Tax"
        document.getElementById('totalProduct').innerHTML = 'Mulch&Tax'
    }

}