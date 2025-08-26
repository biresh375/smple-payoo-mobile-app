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
const trnsactionData =[];



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
     const historyCard= document.getElementById('historyCard');
    historyCard.innerText = ""
    for(const Data of trnsactionData){
        const div = document.createElement("div")
        div.innerHTML=`
         <div class="flex justify-between items-center mt-3 bg-white  py-[16px] px-3 rounded-xl">
                <div class="flex  justify-center items-center ">
                    <div class="w-[50px] h-[50px] bg-[#f4f5f7] m-3 p-2 rounded-full"><img class="w-full" src="assets/wallet1.png" alt=""></div>
                    <div>
                        <h3 class="font-semibold text-xl text-[#080808b2]">${Data.name}</h3>
                        <p class="text-[#080808b2]">${Data.Date}</p>
                    </div>
                </div>
        `

        historyCard.appendChild(div);
    }

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


    if(isNaN(inputAmount)||inputAmount<=0){
        alert("invalid credential");
        return;
    }
    if(accountNumber.length !== 11){
        alert("Enter valid account Number")
        return;
    }
    if(inputPin !==pin){
        alert('enter valid pin')
        return;
    }
   
    const addMoneyTotalAmount = totalBalance + inputAmount;
    
    setBalance(addMoneyTotalAmount);


 const data ={
    name:"Add Money",
    Date :new Date().toLocaleTimeString()
 }
 trnsactionData.push(data)

;



 
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
 if(cashoutAmount<99.99){
    alert('Cash out more then 100')
    return;
 }
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


      const data ={
    name:"Cash Out",
    Date :new Date().toLocaleTimeString()
 }
 trnsactionData.push(data)

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
   if(isNaN(amount) ||amount<=0 ){
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

 const data ={
    name:"Transfer Money",
    Date :new Date().toLocaleTimeString()
 }
 trnsactionData.push(data);
 

  removeINpurValue('sentMoneyAmount');
  removeINpurValue('sentMoneyPin');
  removeINpurValue('transfarNumber');
    
})



// get bonus section feater
const cupon="BIRESH"// bonus $5000
document.getElementById("getBonusButton").addEventListener('click',function(e){
    e.preventDefault();
const inputCupon =  getValue('inputCupon');
let totalBalance =  Number(geetInnertext('totalBalance'));
if(inputCupon.includes(cupon)){
    totalBalance = totalBalance + 5000
    alert("You Got Bonus 5000$");
}else{
    alert('Enter valid cupon code');
    return;
}

setBalance(totalBalance);

const data ={
    name:"Get Bonus",
    Date :new Date().toLocaleTimeString()
 }
 trnsactionData.push(data);




removeINpurValue('inputCupon')
})



// pay bil section feater
document.getElementById('payNowButton').addEventListener('click',function(e){
    e.preventDefault();
  const billerAccount = getValue('billerAccount')
  const payBilAmount = Number(getValue('payBilAmount'))
  const BilpayPin =getValue('BilpayPin')
  const avlaibleBalance = Number(geetInnertext('totalBalance'))
if(isNaN(payBilAmount) ||payBilAmount<=0){
        alert("invalid credential");
        return;
    }
    if(billerAccount.length !== 11){
        alert("Enter valid account Number")
        return;
    }
    if(BilpayPin!==pin){
        alert('enter valid pin')
        return;
    }
    if(avlaibleBalance < payBilAmount){
        alert('your balance is low');
        return;
    }
  
    const newAmount = avlaibleBalance -payBilAmount;
    setBalance(newAmount);

const data ={
    name:"Pay Bill",
    Date :new Date().toLocaleTimeString()
 }
 trnsactionData.push(data);


 removeINpurValue('billerAccount');
 removeINpurValue('payBilAmount');
 removeINpurValue('BilpayPin');

})


