import Greeter from './greeter';

class JavaScriptGreeter extends Greeter {
    greet(name: string): string {
        return `console.log('${this.greeting}, ${name}!')`;
    }
}

export default JavaScriptGreeter;