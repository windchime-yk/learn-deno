// @deno-types="https://servestjs.org/@/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://servestjs.org/@/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "./utils/deps.ts";
import { APP_PORT } from "./utils/config.ts";

const app = createApp();

app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>servest</title>
        </head>
        <body>Hello Servest!</body>
      </html>,
    ),
  });
});

app.listen({ port: APP_PORT });

console.log(`http://localhost:${APP_PORT}`);
