import { Contact } from "./classes/Contact.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.contact-form') as HTMLFormElement;
const firstName = document.querySelector('#fname') as HTMLInputElement;
const lastName = document.querySelector('#lname') as HTMLInputElement;
const phoneNo = document.querySelector('#phone-no') as HTMLInputElement;
const removeBtn = document.querySelector('.remove-btn') as HTMLButtonElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const contactList: Contact[] = []; 
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let contact; 

    contact = new Contact(firstName.value, lastName.value, phoneNo.valueAsNumber);
    console.log(contact);
    contactList.push(contact);
    // list.render(contact.format());
    console.log(contactList);
    ul.innerHTML = ''; //emptying the element before rendering the list again
    contactList.map((contact)=> {
        list.render(contact.format());
    })
    console.log(removeBtn);
    emptyFields();
})

function removeFromList() {
    removeBtn.addEventListener('click', (e: Event) => {
        console.log(contactList);
    })
}


function emptyFields() {
    firstName.value = '';
    lastName.value = '';
    phoneNo.value = '';
}



