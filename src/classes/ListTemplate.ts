import { Contact } from "./Contact.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}
    render(contact: string) {
        const li = document.createElement('li');

        const p = document.createElement('p');
        const btn = document.createElement('button');
        btn.className = ('remove-btn');
        btn.innerText = 'x';

        p.innerHTML = contact;
        li.append(p);
        p.append(btn);

        this.container.append(li);
    }
}