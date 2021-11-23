const inputSaldo = document.getElementById("inputSaldo");
const Saldo = document.getElementById("Saldo");
const norek = document.getElementById("norek");
let totalBalance = 100000;
const trfBank = [];
const btnTrf = document.getElementById("btnTrf");


const formatter= new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,

  });

  btnTrf.addEventListener('click', () => {

    //check input from user 
    if (isNaN(inputSaldo.value)){
        alert("Please enter a number");
        return inputSaldo.value = '';
    } else {
        if (totalBalance < inputSaldo.value){
            alert("Saldo anda tidak mencukupi")
            return inputSaldo.value = '';
        } else {
            trfBank.push(Number(inputSaldo.value));
            totalBalance -= (Number(inputSaldo.value));

        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("Saldo").innerHTML = totalBalanceFormatted;

        console.log("Rp." + inputSaldo.value);
        return inputSaldo.value = '';
    }
}
}); 
