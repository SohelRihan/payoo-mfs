// console.log("Button Clicking");

// document.getElementById('btn-login').addEventListener('click',function(){
//     console.log('login button clicked');
// })

// step-1: set event handler
// document.getElementById('button-login').addEventListener('click', function(event){

//     // step-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault();

//     // step-3:get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
    
//     console.log(phoneNumber, pinNumber);

//     // step-4: validate phone and pin
//     if(phoneNumber === '5' && pinNumber == '123'){
//         console.log('you are log in');
//     }
//     else{
//         alert('wrong phone number or pin');
//     }
//     // allow user to use the web site
// })

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
});