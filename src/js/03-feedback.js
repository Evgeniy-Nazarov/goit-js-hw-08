import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input");
const message = document.querySelector("textarea");


const formData = { email: "", message: "" };


form.addEventListener('input', throttle(onFormData, 500));
function onFormData(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
  if (email.value === '' || message.value === '') {
    alert('Заполните все поля формы!');
    return;
  }
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
  localStorage.clear();
  email.value = '';
  message.value = '';
  
}
  


const dataObject = localStorage.getItem('feedback-form-state');
function onFormLoad(object) {  
  if (object && email.name === "email") {
    email.value = JSON.parse(object).email;
  } if (object && message.name === "message") {
    message.value = JSON.parse(object).message;
  }
}

onFormLoad(dataObject);