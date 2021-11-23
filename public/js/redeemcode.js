function randomString() {
    //define a variable consisting alphabets in small and capital letter
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";

    //specify the length for the new string
    var lenString = 7;
    var randomstring = "";

    //loop to select a new character in each iteration
    for (var i = 0; i < lenString; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(rnum, rnum + 1);
    }

    //display the generated string
    document.getElementById("randomfield").innerHTML = randomstring;

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
        /* 
        the default value for minimumFractionDigits depends on the currency
        and is usually already 2
        */
      });
    
    const n = document.getElementById("n");
              const btn_ = document.getElementById("btn_");
              let totalbalance = 50000;
              const rd = [];
              const saldo = document.getElementById("saldo")
            
              btn_.addEventListener('click', () => {
                if (n.length == 0){
                  alert("Masukkan kodenya!");
                  return n.value = '';
                }
                else {
                    if (totalbalance > 50000){
                        alert("Kode terbatas!")
                        return n.value = '';
                    }
                    else {
                        if (n.value == randomstring){
                            rd.push(10000);
                            totalbalance += 10000;
    
                            let totalBalanceFormatted = formatter.format(totalbalance);
    
                            document.getElementById("saldo").innerHTML = totalBalanceFormatted;
    
                            console.log("Rp. 10000");
                            return n.value = '';
                        } 
                    }                            
                }
              });
  }