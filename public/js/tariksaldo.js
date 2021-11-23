const tariksaldo = document.getElementById("tariksaldo");
const saldo = document.getElementById("saldo");
let totalbalance = 250000;
const ts = [];
const btn_w = document.getElementById("btn_w");

const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

btn_w.addEventListener('click', () => {
    if (isNaN(tariksaldo.value)){
        alert("Please enter a number.");
        return tariksaldo.value = '';
    }
    else {
        if (tariksaldo.value > totalbalance - 10000) {
            alert("Your total balance cannot drop below rp.10000");
            return tariksaldo.value = '';
        }
        else {
            ts.push(Number(tariksaldo.value));
            totalbalance -= (Number(tariksaldo.value));

            let totalBalanceFormatted = formatter.format(totalbalance);

            document.getElementById("saldo").innerHTML = totalBalanceFormatted;

            console.log("Rp." + tariksaldo.value);
            return tariksaldo.value = '';
        }
    }
});