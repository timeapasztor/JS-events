In this exercise I will explore some design patterns in JavaScript.

In the first exercise I will be implementing an EventEmitter object with two methods.

### on

     .on(eventName, handler);


- `eventName` string specifying the event name.
- `handler` a function to be called whenever the event is triggered. Accepts a single `data` parameter.

### trigger

    .trigger(eventName, data);

- `eventName` a string specifying the name of the event sent.
- `data` the data to pass to receivers of the event.

For example:

    var f = new EventEmitter();
    f.on("Hello", function(data){
      alert(data);
    });
    // the handler will be called and an `alert` prompt will be shown with `world`
    f.trigger("Hello", "World");

For convenience, here are some unit tests for our `EventEmitter` in order to clarify its behavior.

### running tests

Name the file `emitter.js` and export class/constructor as `EventEmitter`. After running `npm i`, run `npm run test`.

**we **encourage** to run the tests**
