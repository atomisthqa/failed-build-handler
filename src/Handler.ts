import { email } from "@atomist/email/Email";
import { send } from "@atomist/slack-messages/Slack";

export interface Result {
    data: {
        build: {
            push: {
                head: {
                    sha: string,
                    author: {
                        email: string,
                    },
                    repo: string,
                },
            },
        },
    };
}

export function handle(results: Result[]) {
    email(results);
}
