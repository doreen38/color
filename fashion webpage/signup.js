// Register form
const Form = document.getElementById("myform");
let myName= document.getElementById("name");
let Email = document.getElementById("email");
let Password = document.getElementById("password")
 

Form.addEventListener("submit", function(e){
  e.preventDefault();
  console.log('super');
  checkInput();
 

});

function checkInput() {
    
    let myNameValue = myName.value;
    let EmailValue = Email.value;
    let PasswordValue = Password.value;
     

      if (myNameValue === '') {
        setErrorFor(myName, 'Name cannot be blank');
      }else{
        setSuccessFor(myName);

         console.log('greate')

      }if (EmailValue ==='') {
        setErrorFor(Email, 'Email cannot be blank');
      }else{
        setSuccessFor(Email);

      }if (PasswordValue ==='') {
        setErrorFor(PasswordValue, 'password cannot be blank');
      }else{
        setSuccessFor(password)
      }
}
 
 checkInput();
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error'
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}