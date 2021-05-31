const amount = document.getElementById('amount');
const tip = document.getElementById('tip');
const total_tip = document.getElementById('total_tip');
const total_bill = document.getElementById('total_bill');
const cross = document.getElementById('spans');
const cross1 = document.getElementById('spans1');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){

// alert("submitted")
tipCalculator();
})

function tipCalculator()
{
let amountCalc = amount.value;
if(!amountCalc)
{
    alert("Please enter amount");
    return;
}

if(isNaN(amountCalc))
{

    amount.style.border=  "5px solid red";
    amount.value =" enter suitable  number";
    cross.style.display ="inline";
 
  
    // alert("please enter correct data");
    return;
}
else
{
    amount.style.border=  "5px solid green";
    


}



let  tipCalc = tip.value;
if(!tipCalc)
{
    alert("Please enter tip")
    return;
}
if(isNaN(tipCalc))
{
    // alert("please enter correct tip");
    tip.style.border=  "5px solid red";
    tip.value =" enter suitable tip";
    cross1.style.display ="inline";
    return;
}
else
{
    tip.style.border = "5px solid green";
 
}

let perc = amountCalc * (tipCalc  / 100);
let total = perc + Number(amountCalc);


total_tip.value =perc;
total_tip.style.color = "#7b113a";
total_tip.style.border = " 5px solid #4a503d"
total_bill.value = total;


total_bill.style.color = "#e1701a";
total_bill.style.border = " 5px solid #4a503d"


}