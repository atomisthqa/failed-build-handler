import { handle } from "./Handler";

function listen(argv: string[]) {
    setTimeout(() => {
        console.log("Received event BuildFailed");
        handle({ data: {} });
    }, 10000);
}

console.log("Handler starting, type Ctrl-C to exit.");
setTimeout(() => {
    console.log("Connected and listening for events of type: BuildFailed");
}, 1000);
listen(process.argv);
setTimeout(() => {
    console.log("Caught Ctrl-C, exiting");
}, 60000);
