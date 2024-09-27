const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const small=document.querySelector('small');

form.addEventListener("submit",(e) => {
    e.preventDefault();
    ValidateInputs();
});
function setError(input, message) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerText = message;
    formcontrol.className = "formcontrol error";
  }
  function setSuccess(input) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerText = "";
    formcontrol.className = "formcontrol success";
  }

function ValidateInputs() {
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const confirmpasswordvalue=confirmpassword.value.trim();

    var usernameValid = false;
    var emailValid = false;
    var passwordValid = false;

    if(usernamevalue===''){
    setError(username,'username is required');
    }else{
        setSuccess(username);
        usernameValid = true;
    }
    if(emailvalue===''){
    setError(email,'email is required');
    }else{
        setSuccess(email);
        emailValid = true;
    }
    if(passwordvalue===''){
        setError(password,'password is required');
    }else if(password.length<6){
        setError(password,'password must be at least 6 charater')
    }else{
        setSuccess(password);
        passwordValid = true;
    }
    if(confirmpasswordvalue===''){
        setError(confirmpassword,'please enter the confirmpassword first');
    }else if(confirmpasswordvalue!=passwordvalue){
        setError(confirmpassword,'password doesnt match');
    }else{
        setSuccess(confirmpassword);
    }

    if(usernameValid && emailValid && passwordValid){
        document.getElementById("contain").style.display = "none";
        document.getElementById("onSubmit").style.display = "block";
    }
};

