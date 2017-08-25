# failed-build-handler

Welcome to your first Atomist event handler!  This handler is a [TypeScript][ts] Node app 
that receives and responds to failed build events. 

[ts]: https://www.typescriptlang.org/ (TypeScript)

This README walks you through:
- running the handler 
- extending the handler so that it sends a Slack DM to the person who broke the build

## Download

Clone this project repository locally and change into the project
directory.

```
$ git clone git@github.com:atomisthqa/failed-build-handler.git
$ cd failed-build-handler
```

## Dependencies

You must have [Node][node] and [NPM][npm] to install your handler's dependencies: 

[node]: https://nodejs.org (Node.js)

[npm]: https://www.npmjs.com/get-npm (NPM)

```
$ npm install
```


## Running

Next, [create an Atomist API token][token]. Note your API token!

[token]: https://www.atomist.com/settings/token (Atomist API Token)

Run your event handler app, replacing ATOMIST_TOKEN with your API token: 

```
$ npm run serve -- ATOMIST_TOKEN
```

You'll see this output:

```
Handler starting, type Ctrl-C to exit.
Connected and listening for events of type: BuildFailed
```

When you're ready to exit the app, type Ctrl-C.

## Test

Once your app is running and listening for events, you
can [send a test event][event] to see it in action.

[event]: https://www.atomist.com/events/build/failed?test=true

## Customize

Now that you have everything working, let's change the handler to send
a Slack DM to the committer who broke the build.  

First, [create a Slack API token][slack-token] that Slack needs to accept
and display your message. 

[slack-token]: https://api.slack.com/tokens (Slack API Token)

Change the contents of the file [Handler.ts][handler] to be the following:

```typescript
import { send } from "@atomist/slack-messages/Slack";

interface Result {
    data: {};
}

export function handle(result: Result) {
    send(result);
}
```

[handler]: https://github.com/atomisthqa/failed-build-handler/edit/master/src/Handler.ts

Ctrl-C to exit any currently running instances
of this app. 

Start the app. Provide the Slack API token
after your Atomist token on the command line.

```
$ npm run serve -- ATOMIST_TOKEN SLACK_TOKEN
```

Once the app is listening, send another [event][] to test
it.

If that worked, congratulations! Your first event handler is now live.
