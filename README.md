# pull-behavior

Pull Behavior is a lightweight and very simple mechanism to retrieve data from a module that cannot be referenced directly.
The PullBehavior needs to be a member in a class, and the class holder should set the pull function by calling the 'setPullMethod'.
then the inner class can use 'pull' method to get the pulled data.
For example: when module 'A' reference module 'B' and 'B' can't reference back to 'A' because of recursive issue.
but some time the module 'B' needs data from module 'A', then PullBehavior help us. the PullBehavior is a member in 'B'
and when 'A' creates 'B' it also init 'setPullMethod' and now 'B' can retrieve data from 'A'.

## Install via NPM:

```bash 

npm install pull-behavior

```

## In main module
```typescript

class MainModule {

    /** Hold sub module */
    private subModule: SubModule = new SubModule();

    constructor() {

        /** Set pull method to allow sub module get data any time he wants. */
        this.subModule.retriveData.setPullMethod(async (): Promise<any> => {
            return {};
        });

        this.subModule.someNormalMethod();
    }
}

```

## In sub module
```typescript

import { PullBehavior } from 'pull-behavior';

export class SubModule {

    /** Pull behavior member. */
    public retriveData: PullBehavior<any> = new PullBehavior<any>();

    constructor() {
        /** Print current data each 5 seconds */
        setInterval(async () => {
            if (!this.retriveData.isPullingAvailble) {
                console.log('SubModule instance holder not set pull method yet, so the pulling not avalible.')
                return;
            }

            const pulledData = await this.retriveData.pull();
            console.log(`Current data: ${pulledData}`);

        }, 5000);
    }

    /** Example or noraml methos */
    public someNormalMethod() {
    }
}

```

To pulling in synchronous, use same API with sync in name.
```typescript
this.retriveData.isPullingSyncAvailble === false
```

For real example see `example` folder.
And to watch it in live, press `node dist\example\mainModule.js`.
