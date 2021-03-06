import { handle, Result } from "./Handler";

export function listen(argv: string[]) {
    setTimeout(() => {
        console.log("Connected and listening for events of type: BuildFailed");
    }, 1000);

    const sampleResult: Result = {
        data: {
            build: {
                push: {
                    head: {
                        sha: "faa0c31",
                        author: {
                            email: "madskillz@gmail.com",
                        },
                        repo: "atomisthqa/broken-repo",
                    },
                },
            },
        },
    };
    setTimeout(() => {
        console.log("Received event BuildFailed");
        handle([sampleResult]);
    }, 20000);

    setTimeout(() => {
        console.log("Caught Ctrl-C, exiting");
    }, 600000);
}
