import { PullBehavior } from '../pullBehavior'

export class SubModule {

    /**
     * Pull behavior member.
     * For example we want to retrive all module holder messages in random time and print them.
     * We can`t just call method baucuse we dont have instance to access his API.
     * So we allowing owr holder to answer owr request via *pullBehavior*. 
     */
    public retriveAllMessages: PullBehavior<string[]> = new PullBehavior<string[]>();

    constructor() {
        /** Print all message each 5 seconds */
        setInterval(async () => {
            if (!this.retriveAllMessages.isPullingAvailble) {
                console.log('SubModule instance holder not set pull method yet, so the pulling not avalible.')
                return;
            }

            const messages = await this.retriveAllMessages.pull();
            console.log(`Current messages amount: ${messages.length}`);

        }, 5000);
    }

    /**
     * Example of module API.
     * @param message 
     */
    public printMessageManualy(message: string) {
        console.log(`Message: ${message}`);
    }
}
