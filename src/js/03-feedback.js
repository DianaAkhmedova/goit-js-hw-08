import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const formData = {};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const populateForm = () => {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    refs.email.value = savedMessage.email;
    refs.message.value = savedMessage.message;
  }
};

populateForm();

const onFormSubmit = event => {
  event.preventDefault();

  console.log(formData);

  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
