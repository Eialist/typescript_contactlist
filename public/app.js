import { Contact } from "./classes/Contact.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.contact-form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const phoneNo = document.querySelector('#phone-no');
const removeBtn = document.querySelector('.remove-btn');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const contactList = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let contact;
    contact = new Contact(firstName.value, lastName.value, phoneNo.valueAsNumber);
    console.log(contact);
    contactList.push(contact);
    // list.render(contact.format());
    console.log(contactList);
    ul.innerHTML = ''; //emptying the element before rendering the list again
    contactList.map((contact) => {
        list.render(contact.format());
    });
    console.log(removeBtn);
    emptyFields();
});
function removeFromList() {
    removeBtn.addEventListener('click', (e) => {
        console.log(contactList);
    });
}
function emptyFields() {
    firstName.value = '';
    lastName.value = '';
    phoneNo.value = '';
}
