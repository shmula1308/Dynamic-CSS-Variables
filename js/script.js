const form = document.querySelector('form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const alertMessage = document.querySelector('.login__alert');
const loginBtn = document.querySelector('.loginBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const root = document.documentElement;




loginBtn.addEventListener('click', validateInput)
cancelBtn.addEventListener('click', form.reset());

function validateInput(ev) {
    ev.preventDefault();
    if(username.value === "" && password.value === "") {
        alertUser('Both inputs are missing',"#f5f7b2",'bothInputsMissing')
        return;
    }
     if(username.value === "") {
         alertUser('Username is missing',"#f5f7b2",'usernameMissing')
         return;
     }
     if(password.value === "") {
        alertUser('Password is missing',"#f5f7b2",'passwordMissing')
        return;
     }
     if(username.value !== "shpend" && password.value !== "test123") {
        alertUser('Username and password are invalid',"#f55c47",'bothInvalid')
        return;
     }
     
     if(username.value !== "shpend") {
        alertUser('Username is invalid',"#f55c47",'usernameInvalid')
        return;
     }
     if(password.value !== "test123") {
        alertUser('Password is invalid',"#f55c47",'passwordInvalid')
        return;
     }
     
     alertUser('Succesuful login',"#9fe6a0",'allValid')
}


function alertUser(message,color,error) {
     
    root.style.setProperty('--input-bg-alert',color)
     
     if(error === 'bothInputsMissing') {
        
        username.style.backgroundColor = 'var(--input-bg-alert)';
        password.style.backgroundColor = 'var(--input-bg-alert)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'usernameMissing') {
        username.style.backgroundColor = 'var(--input-bg-alert)';
        password.style.backgroundColor = 'var(--input-bg-default)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'passwordMissing') {
        password.style.backgroundColor = 'var(--input-bg-alert)';
        username.style.backgroundColor = 'var(--input-bg-default)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'bothInvalid') {
        username.style.backgroundColor = 'var(--input-bg-alert)';
        password.style.backgroundColor = 'var(--input-bg-alert)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'usernameInvalid') {
        username.style.backgroundColor = 'var(--input-bg-alert)';
        password.style.backgroundColor = 'var(--input-bg-default)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'passwordInvalid') {
        username.style.backgroundColor = 'var(--input-bg-default)';
        password.style.backgroundColor = 'var(--input-bg-alert)';
        alertMessage.style.opacity = '1';
        alertMessage.textContent = message;
     }
     if(error === 'allValid') {
        username.style.backgroundColor = 'var(--input-bg-alert)';
        password.style.backgroundColor = 'var(--input-bg-alert)';
        alertMessage.style.opacity = '1';
        alertMessage.style.color = 'var(--input-bg-alert)';
        alertMessage.textContent = message;
        form.reset(); 
     }

     setTimeout(() => {
        alertMessage.style.opacity = '0';
     },2000)
}

