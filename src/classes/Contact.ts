export class Contact{
    constructor(
    readonly firstname: string,
    readonly lastname: string,
    public number: number, 
    ){};
    format() {
        return `${this.firstname} ${this.lastname} 0${this.number}`;
    }
};