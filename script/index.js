document.getElementById('loginButton').addEventListener('click',function(e){
    e.preventDefault();
    const inputNumber = document.getElementById('userNumber').value;
    const convertINputNumber = parseInt(inputNumber)
    
    const inputPin = document.getElementById('userPin').value;
     const convertINputPin = parseInt(inputPin);

    
    const Number = 12345678901;
    const pin = 1234;
    if(Number===convertINputNumber && pin===convertINputPin){
        window.location.href= 'home.html';
    }else{
        alert('user or pin not valid');
    };




})