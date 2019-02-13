import { SubModule } from './subModule'

export class MainModule {

    /**
     * Hold sub module.
     * for example here is the print module
     */
    private printsSubModule: SubModule = new SubModule();

    /**
     * Messages in module system.
     */
    private messagesInSystem: string[] = [];

    constructor() {

        /** Set pull method to allow sub module get all message any time he wants. */
        this.printsSubModule.retriveAllMessages.setPullMethod(async (): Promise<string[]> => {
            return this.messagesInSystem;
        });

        /** For example, each 10 seconds generate new message, and print it via print module */
        setInterval(() => {
            const newMessage = `Generated at: ${new Date().toLocaleTimeString()}`;
            this.messagesInSystem.push(newMessage);
            this.printsSubModule.printMessageManualy(newMessage);
        }, 10000);
    }
}

const mainModule = new MainModule();