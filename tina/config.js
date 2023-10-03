import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "main",
  clientId: process.env.CLIENT_ID || '', // Get this from tina.io
  token: process.env.TOKEN || '', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "docs",
        label: "Docs",
        path: "content/docs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.INDEX_TOKEN || '',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  }
});

// inject CSP
window.addEventListener('load', function(){
  console.log('injecting');
  const head = document.head;
  let csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://content.tinajs.io https://identity.tinajs.io; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; report-uri https://651b9ffb0fcafd85d341e570.endpoint.csper.io/?v=2; worker-src 'none';">`;
  head.insertAdjacentHTML('afterbegin', csp);
  console.log('injected');
});
