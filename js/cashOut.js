document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        
        const balanceAbove = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        const newBalance = balanceAbove - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! please try again later');
    }
});