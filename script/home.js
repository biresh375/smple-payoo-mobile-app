document.getElementById('logOutButton').addEventListener('click',function(){
    if(confirm("Are your sure for log Out?")){
        window.location.href='index.html'
    }
});
// toggle function
function toggle (id){
     const allForm = document.getElementsByClassName('form');
  for(form of allForm){
    form.style.display="none"
  }
  document.getElementById(id).style.display="block";
  return;
}
// active toggle function
function activeStyle(id){
     const allActivebtns= document.getElementsByClassName('active');
  for( const activebtn of allActivebtns ){
    activebtn.classList.remove("border-[#0874f2]", "bg-[#0874f20c]","font-bold","text-blue-500")
    activebtn.classList.add("border-[#08080819]")    
  };
  document.getElementById(id).classList.remove("border-[#08080819]")
  document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20c]","font-bold","text-blue-500");
  return
}






//get value 
function getValue(id){
 const idvalue = document.getElementById(id).value;
    return idvalue;
}
// get innertext
function geetInnertext(id){
    const text = document.getElementById(id).innerText;
    return text
}
// set innerText
function setBalance(money){
    document.getElementById("totalBalance").innerText = money;
    return
}



// remove input value function
function removeINpurValue(id){
document.getElementById(id).value ="";
   return ;
}




// togglet feature
document.getElementById('addMoney').addEventListener('click',function(){
 toggle("addMoneySection");


 activeStyle('addMoney');
 
})

document.getElementById('cashOut').addEventListener('click',function(){
 toggle("cashOutSection") 
  activeStyle('cashOut');
 

})
document.getElementById('transferMoney').addEventListener('click',function(){
   toggle("transfarMonehSection")
  activeStyle('transferMoney');
 
})
document.getElementById('getBonus').addEventListener('click',function(){
 toggle("getBonusSection")
  activeStyle('getBonus');
});
document.getElementById('payBill').addEventListener('click',function(){
  toggle("payBilSection")
  activeStyle('payBill');
});
document.getElementById('transactions').addEventListener('click',function(){
   toggle("transactionsHistorySection")
    activeStyle('transactions');

})


// AddMOney feature added
const pin = '1234';
const validccountNumber = "12345678901";
document.getElementById('addMoneyButton').addEventListener('click',function(e){
    e.preventDefault();
    const inputAmount= parseInt(getValue("addAmount"));
    
    const totalBalance =Number(geetInnertext("totalBalance"))

    const accountNumber =getValue('bankAccount');

    const inputPin = getValue('AddMoneyPin');
    // console.log(unputPin);


    if(isNaN(inputAmount)){
        alert("invalid credential");
        return;
    }
    if(accountNumber.length !== 11 && accountNumber === validccountNumber){
        alert("Enter valid account Number")
        return;
    }
    if(inputPin !==pin){
        alert('enter valid pin')
        return;
    }
   
    const addMoneyTotalAmount = totalBalance + inputAmount;
    
    setBalance(addMoneyTotalAmount);
 
 removeINpurValue('bankAccount');
 removeINpurValue('addAmount');
 removeINpurValue('AddMoneyPin');
  

 
})




// cashouat feature added
document.getElementById('cashOutButton').addEventListener("click",function(e){
    e.preventDefault();
 const cashoutAmount = Number(getValue('cashoutAmount'));
 const cashOutPin = getValue('cashOutPin');
 
 const agentNumber =getValue('agentNumber');
 const totalBalance = Number(geetInnertext('totalBalance'));
 
if(isNaN(cashoutAmount)){
        alert("invalid credential");
        return;
    }
    if(agentNumber.length !== 11){
        alert("Enter valid account Number")
        return;
    }
    if(cashOutPin !==pin){
        alert('enter valid pin')
        return;
    }
    if(totalBalance < cashoutAmount){
        alert('your balance is low');
        return;
    }
 
    const cashoutTotalAmount = totalBalance - cashoutAmount;
     setBalance(cashoutTotalAmount);


removeINpurValue('cashoutAmount');
removeINpurValue('cashOutPin');
removeINpurValue('agentNumber');
 
});
// transfar money feature section
document.getElementById('sentMoneyButton').addEventListener('click',function(e){
    e.preventDefault();
    const amount = Number(getValue('sentMoneyAmount'))
    const avlaibleBalance = Number(geetInnertext('totalBalance'))
    const sentMoneyPin= getValue('sentMoneyPin');
    const transfarNumber = getValue('transfarNumber');
   if(isNaN(amount)){
        alert("invalid credential");
        return;
    }
    if(transfarNumber.length !== 11){
        alert("Enter valid account Number")
        return;
    }
    if(sentMoneyPin!==pin){
        alert('enter valid pin')
        return;
    }
    if(avlaibleBalance < amount){
        alert('your balance is low');
        return;
    }

    const sentMoneyTotalBalance = avlaibleBalance - amount;
    setBalance(sentMoneyTotalBalance);



  removeINpurValue('sentMoneyAmount');
  removeINpurValue('sentMoneyPin');
  removeINpurValue('transfarNumber');
    
})



