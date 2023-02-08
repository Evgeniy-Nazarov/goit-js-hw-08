import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input");
const message = document.querySelector("textarea");


let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};


form.addEventListener('input', throttle(onFormData, 500));
function onFormData(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Заполните все поля формы!');
    return;
  }
  
  e.target.reset();
  localStorage.removeItem('feedback-form-state'); 
  formData = {};
}
  



function onFormLoad() {  
  const dataObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (dataObject) {
    email.value = dataObject.email || '';  
    message.value = dataObject.message || '';
  }
}

onFormLoad();