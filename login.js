// Step-1 : add click even handaler with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step-2 : get the email address from the email input field.
    // alawys remember to use .value to get the text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3 : get password
    // 3(a) get id on password input field
    // 3(b) get the element
    // 3(c) get the value from the element
    const passwordField = document.getElementById('user-password');
    const password= passwordField.value;
    
    // Danger: Don't verify Email & password from the clint side.
    // don't do this . it's not idel. we do that to teach.Only for teach.
    // step-4 : verify clint email and password.

    if(email ==="demo@gmail.com" && password==="demo123"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Get out. You Are not Allowed')
    }
})