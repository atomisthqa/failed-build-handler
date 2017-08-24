interface Result {
    data: any;
}

export function handle(result: Result) {
    setTimeout(() => {
        console.log("sent email to you@company.com");
    }, 3000);
}
