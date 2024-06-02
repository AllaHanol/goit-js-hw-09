'use strict';
import { saveToLS, loadFromLS } from './helper.js';

const formData = {
  email: '',
  message: '',
};

const logInForm = document.querySelector('.feedback-form');
logInForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    
    if (email === '' || message === '') {
        alert('Fill please all fields');
    } else {
        console.log({ email, message });
        form.reset();
    }
}

saveToLS();
loadFromLS();

// шаблон з ДЗ09
// {/* <form class="feedback-form" autocomplete="off">
//             <label>
//               Email
//               <input type="email" name="email" autofocus />
//             </label>
//             <label>
//               Message
//               <textarea name="message" rows="8"></textarea>
//             </label>
//             <button type="submit">Submit</button>
//           </form> */}
