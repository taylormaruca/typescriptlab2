import Greeter from './greeter';

export class HTMLGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, tagName: string = 'h1') {
        super(greeting);
        this.tagName = tagName;
    }

    greet(greeting: string) {
        return `<${this.tagName}>${super.greet(greeting)}</${this.tagName}>`;
    }
}