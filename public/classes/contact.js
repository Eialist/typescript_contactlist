export class Contact {
    constructor(firstname, lastname, number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.number = number;
    }
    ;
    format() {
        return `${this.firstname} ${this.lastname} 0${this.number}`;
    }
}
;
