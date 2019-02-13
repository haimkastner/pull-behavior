/**
 * Pull Behavior is a mechanism to retrieve data from a module that cannot be referenced directly.
 * The PullBehavior needs to be a member in a class, and the class holder should set the pull function by calling the 'setPullMethod'.
 * then the inner class can use 'pull' method to get the pulled data.
 * For example: when module 'A' reference module 'B' and 'B' can't reference back to 'A' because of recursive issue.
 * but some time the module 'B' needs data from module 'A', then PullBehavior help us. the PullBehavior is a member in 'B'
 * and when 'A' creates 'B' it also init 'setPullMethod' and now 'B' can retrieve data from 'A'.
 */
export declare class PullBehavior<T> {
    /**
     * The pull function.
     */
    private pullMethod;
    /**
     * Is the holder set the pull function or not?
     */
    readonly isPullingAvailble: boolean;
    /**
     * Set the pull function.
     * Used in the module that get pull *from* only.
     */
    setPullMethod(pullMethod: () => Promise<T>): void;
    /**
     * Pull the current data.
     * Used in the puller module only.
     */
    pull(): Promise<T>;
}
//# sourceMappingURL=pullBehavior.d.ts.map