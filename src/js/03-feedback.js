import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}



function onSubmitForm(e) {
  if (email.value === '' || message.value === '') {
    alert('Заполните пожалуйста все поля формы');
    return;
  }
   e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
  



function dataFromLocalStorage() {
   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorage.length !== 0) {   
    formData.email = data.email;
    formData.message = data.message;
    form.value = data.email;
    form.value = data.message;
  
  }
}

dataFromLocalStorage();




