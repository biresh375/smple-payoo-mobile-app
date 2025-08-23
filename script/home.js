document.getElementById('logOutButton').addEventListener('click',function(){
    if(confirm("Are your sure for log Out?")){
        window.location.href='index.html'
    }
});
const latestPaymentSection = document.getElementById('latestPaymentSection');
const addMoneySection = document.getElementById('addMoneySection');
const cashOutSection = document.getElementById('cashOutSection');
const transfarMonehSection = document.getElementById('transfarMonehSection');
const getBonusSection = document.getElementById('getBonusSection');
const payBilSection = document.getElementById('payBilSection');
const transactionsHistorySection = document.getElementById('transactionsHistorySection');

document.getElementById('addMoney').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='block'
    cashOutSection.style.display ='none'
    transfarMonehSection.style.display ='none'
    getBonusSection.style.display ='none'
    payBilSection.style.display ='none'
    transactionsHistorySection.style.display ='none'
})
document.getElementById('cashOut').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='none'
    cashOutSection.style.display ='block'
    transfarMonehSection.style.display ='none'
    getBonusSection.style.display ='none'
    payBilSection.style.display ='none'
    transactionsHistorySection.style.display ='none'
})
document.getElementById('transferMoney').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='none'
    cashOutSection.style.display ='none'
    transfarMonehSection.style.display ='block'
    getBonusSection.style.display ='none'
    payBilSection.style.display ='none'
    transactionsHistorySection.style.display ='none'
})
document.getElementById('getBonus').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='none'
    cashOutSection.style.display ='none'
    transfarMonehSection.style.display ='none'
    getBonusSection.style.display ='block'
    payBilSection.style.display ='none'
    transactionsHistorySection.style.display ='none'
});
document.getElementById('payBill').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='none'
    cashOutSection.style.display ='none'
    transfarMonehSection.style.display ='none'
    getBonusSection.style.display ='none'
    payBilSection.style.display = 'block'
    transactionsHistorySection.style.display ='none'
});
document.getElementById('transactions').addEventListener('click',function(){
    latestPaymentSection.style.display ='none'
    addMoneySection.style.display='none'
    cashOutSection.style.display ='none'
    transfarMonehSection.style.display ='none'
    getBonusSection.style.display ='none'
    payBilSection.style.display ='none'
    transactionsHistorySection.style.display ='block'
});






document.getElementById('addMoneyButton').addEventListener('click',function(e){
    e.preventDefault();
    const inputAmount= parseInt(document.getElementById('addAmount').value);
    
    const totalBalance =Number(document.getElementById('totalBalance').innerText)

    const accountNumber = document.getElementById('bankAccount').value;
    console.log(accountNumber);
    const unputPin = document.getElementById('AddMoneyPin').value;
    // console.log(unputPin);

    const pin = '1234';

    if(isNaN(inputAmount)){
        alert("invalid credential");
        return;
    }
    if(accountNumber.length !== 11){
        alert("Enter valid account Number")
        return;
    }
    if(unputPin !==pin){
        alert('enter valid pin')
        return
    }
   
    const addMoneyTotalAmount = totalBalance + inputAmount;
    
    document.getElementById('totalBalance').innerText= addMoneyTotalAmount;
 document.getElementById('bankAccount').value=''
  document.getElementById('addAmount').value= '';
  document.getElementById('AddMoneyPin').value='';
})