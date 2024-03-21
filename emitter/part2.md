I will now improve the previous implementation of the event emitter, and add an option to remove an attached event.

I will change the on function. It should return a function that recieves no arguments, and returns nothing, that removes the listener that was added by on.

### on

    .on(eventName, handler)


- `eventName` string specifying the event name.
- `handler` a function to be called whenever the event is triggered. Accepts a single `data` parameter.
- returns: a function that receives no arguments, and returns nothing, that removes the listener that was added by on.
  Calling it twice should have the same effect as calling it once.

### running tests

Name the file `emitter.js` and export class/constructor as `EventEmitter`. After running `npm i`, run `npm run test2`.

**We **encourage** you to run the tests**.
