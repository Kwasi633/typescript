import { HasFormatter } from '../interfaces/HasFormatter.js'

//Access modifiers
export class Invoice implements HasFormatter {

    constructor(
    readonly client: string,
    private details: string,
    public amount: number,
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
