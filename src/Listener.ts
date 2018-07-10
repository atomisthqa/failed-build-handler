/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
