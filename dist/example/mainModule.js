"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subModule_1 = require("./subModule");
class MainModule {
    constructor() {
        /**
         * Hold sub module.
         * for example here is the print module
         */
        this.printsSubModule = new subModule_1.SubModule();
        /**
         * Messages in module system.
         */
        this.messagesInSystem = [];
        /** Set pull method to allow sub module get all message any time he wants. */
        this.printsSubModule.retriveAllMessages.setPullMethod(async () => {
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
exports.MainModule = MainModule;
const mainModule = new MainModule();
//# sourceMappingURL=mainModule.js.map