import { send } from "@atomist/slack-messages/Slack";

interface Result {
    data: {};
}

export function handle(result: Result) {
    setTimeout(() => {
        console.log("sent email to you@company.com");
    }, 3000);
}
