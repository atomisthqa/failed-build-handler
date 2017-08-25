# failed-build-handler

Welcome to your first Atomist event handler!  This event receives and
responds to failed build events.  This README will walk you through
running this handler as is and extending it to send a Slack DM to the
person who broke the build.

## Download

Clone this project repository locally and change into the project
directory.

```
$ git clone git@github.com:atomisthqa/failed-build-handler.git
$ cd failed-build-handler
```

## Dependencies

You must have Node and NPM installed.  Installing the latest version
of [Node][node] is the easiest way to do this.

[node]: https://nodejs.org (Node.js)

Once Node and NPM are available on your system, you can install your
handler's dependencies with the following command.

```
$ npm install
```

## Running

Before running your event handler application, you need
to [create an Atomist API token][token].  After creating the token,
Your handler, a [TypeScript][ts] Node app, can be run with the
following command.

```
$ npm run serve -- ATOMIST_TOKEN
```

replacing `ATOMIST_TOKEN` with your [Atomist API token][token].

[token]: https://www.atomist.com/settings/token (Atomist API Token)

When the application starts running, you will see the following
output.

```
Handler starting, type Ctrl-C to exit.
Connected and listening for events of type: BuildFailed
```

When you want to exit the app, type Control-C.

[ts]: https://www.typescriptlang.org/ (TypeScript)

## Test

Once you have your app running and it is listening for events, you
can [send a test event][event] to see it in action.

[event]: https://www.atomist.com/events/build/failed?test=true

## Customize

Now that you have everything working, let's change the handler to send
a Slack DM to the committer who broke the build.  The first thing we
need is a Slack API token so Slack will accept and display the
message.  Please [create a Slack API token][slack-token].

[slack-token]: https://api.slack.com/tokens (Slack API Token)

Change the contents of the `Handle.ts` file in [Handler.ts][handler]
to be the following:

```typescript
import { send } from "@atomist/slack-messages/Slack";

interface Result {
    data: {};
}

export function handle(result: Result) {
    send(result);
}
```

[handler]: https://github.com/atomisthqa/failed-build-handler/edit/master/Handler.ts

Once you have saved those changes, exit an currently running instance
of this app (Ctrl-C) and restart it, providing the Slack API token
after your Atomist token on the command line.

```
$ npm run serve -- ATOMIST_TOKEN SLACK_TOKEN
```

Once the app is listening for events, send another [event][] to test
it.
