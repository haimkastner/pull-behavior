import { PullBehavior } from '../pullBehavior';
export declare class SubModule {
    /**
     * Pull behavior member.
     * For example we want to retrive all module holder messages in random time and print them.
     * We can`t just call method baucuse we dont have instance to access his API.
     * So we allowing owr holder to answer owr request via *pullBehavior*.
     */
    retriveAllMessages: PullBehavior<string[]>;
    constructor();
    /**
     * Example of module API.
     * @param message
     */
    printMessageManualy(message: string): void;
}
//# sourceMappingURL=subModule.d.ts.map