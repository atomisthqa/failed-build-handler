# failed-build-handler

Welcome to your first Atomist event handler!  This handler is
a [TypeScript][ts] Node app that receives and responds to failed build
events.

[ts]: https://www.typescriptlang.org/ (TypeScript)

This README walks you through:

-   running the handler
-   extending the handler so that it sends a Slack DM to the person
    who broke the build

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

Next, <a href="https://invis.io/TQD7HZ5YP#/250436833_Prototype-10--2px-pdf-png--2px-png" alt="Atomist API Token" target="_blank">create an Atomist API token</a>. Note your API token!

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
can <a href="https://invis.io/G2D7I2A78#/250436834_Prototype-11--2px-pdf-png--2px-png" alt="event" target="_blank">send a test event</a> to see it in action.

## Customize

Now that you have everything working, let's change the handler to send
a Slack DM to the committer who broke the build.

First, <a href="https://invis.io/3MD7I4Q92#/250436835_Prototype-12--2px-pdf-png--2px-png" alt="Slack API Token" target="_blank">create a Slack API token</a> that Slack needs to accept
and display your message.

Change the `handle` function in <a href="https://github.com/atomisthqa/failed-build-handler/edit/master/src/Handler.ts" alt="handler" target="_blank">src/Handler.ts</a> to be the following:

```typescript
export function handle(results: Result[]) {
    send(results);
}
```

Ctrl-C to exit any currently running instances
of this app.

Start the app. Provide the Slack API token
after your Atomist token on the command line.

```
$ npm run serve -- ATOMIST_TOKEN SLACK_TOKEN
```

Once the app is listening, send another <a href="https://invis.io/G2D7I2A78#/250436834_Prototype-11--2px-pdf-png--2px-png" alt="event" target="_blank">event</a> to test it.

If that worked, congratulations! Your first event handler is now live.
