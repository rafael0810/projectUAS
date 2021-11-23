const inputsaldo = document.getElementById("inputsaldo");
const saldo = document.getElementById("saldo");
let totalbalance = 0;
const tp = [];
const send = document.getElementById("send");

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

send.addEventListener('click', () => {

    //check input from user 
    if (isNaN(inputsaldo.value)){
        alert("Please enter a number");
        return inputsaldo.value = '';
    } else {
        if (inputsaldo.value < 1000 || inputsaldo.value > 10000000){
            alert("You can only top-up beetween Rp.1000 and Rp 1000000")
            return inputsaldo.value = '';
        } else {
            tp.push(Number(inputsaldo.value));
            totalbalance += (Number(inputsaldo.value));

        let totalBalanceFormatted = formatter.format(totalbalance);

        document.getElementById("saldo").innerHTML = totalBalanceFormatted;

        console.log("Rp." + inputsaldo.value);
        return inputsaldo.value = '';
    }
}
});