var data="";
var money=['dollar','dinar','nis'];
for(var i =0;i<money.length;i++){
    data+=`<option> ${money[i]}</option>` ; 
}
document.querySelector("select").innerHTML=data;

var registerForm = document.querySelector(".registerForm");
var para =document.querySelector("p");
registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    var price={
        moneyType:elements['amount'].value,
        seltype:elements['exchange'].value,
    };
    var exchangeRate;
    if(price.seltype=='dollar'){
        exchangeRate=.27;
    }
    else if(price.seltype=='dinar'){
        exchangeRate=.19;
    }
    else{
        exchangeRate=1;
    }
    var result = price.moneyType * exchangeRate;
    para.textContent = `Converted amount: ${result} `;
  }
   


