const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password= document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})


function validateInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
       
      if (usernameValue === ''){
        sucess=false;
        setError(username,'Username is required');
      }
      else{
        setsuccess(username)
      }

      
      if (emailValue=== ''){
        sucess=false;
        setError(email,'email is required');
      }
      else{
        setsuccess(username)
      }
      
      if(passwordValue===''){
        sucess=false;
        setError(password,'password is required')
      }
     else if(passwordValue.length<8){
        setError(password,'password must be atleast 8 characters')
     }
else{
    setsuccess(password)
}

if(cpasswordValue === ''){
    setError(cpassword,'confirm password is required')
}

else if (cpasswordValue!==passwordValue){
    setError(cpassword,'passwords do not match')
}

else {
    setsuccess(cpassword)
}

return sucess;





}

function  setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement =inputGroup.querySelector('.error')


    errorElement.innerText = message;
    inputGroup.classList.add = ('error')
    inputGroup.classList.remove = ('success')
}

function setsuccess(element, message){
    const inputGroup = element.parentElement;
    const errorElement =inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add = ('success')
    inputGroup.classList.remove = ('error')

}

const validateEmail =(email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};















