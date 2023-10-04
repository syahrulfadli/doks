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
      mediaRoot: "assets",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "docs",
        label: "Docs",
        path: "content/docs",
        defaultItem: () => ({
          date: new Date().toISOString(),
          lastmod: new Date().toISOString(),
        }),
        fields: [
          {
            type: "number",
            name: "weight",
            label: "Urutan panduan",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Judul",
            isTitle: true,
            required: true,
          },
          {
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
          },
          {
            label: 'Tanggal',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            }
          },
          {
            label: 'Terakhir diperbarui',
            name: 'lastmod',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Konten",
            isBody: true,
            templates: [
              {
                name: 'callout',
                label: 'Catatan',
                match: {
                  name: 'callout',
                  start: '{{<',
                  end: '>}}',
                },
                fields: [    

                  {
                    name: 'context',
                    label: 'Konteks',
                    type: 'string',
                    required: true,
                    options: [
                      {
                        value: 'note',
                        label: 'Catatan'
                      },
                      {
                        value: 'tip',
                        label: 'Tips'
                      },
                      {
                        value: 'caution',
                        label: 'Himbauan'
                      },
                      {
                        value: 'danger',
                        label: 'Peringatan'
                      }
                    ]
                  },
                  {
                    name: 'title',
                    label: 'Judul',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'icon',
                    label: 'Nama Table Icons',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: "children",
                    label: "Konten",
                    type: "rich-text"
                  }              
                ],
              }
            ],
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content",
        defaultItem: () => ({
          date: new Date().toISOString(),
          lastmod: new Date().toISOString(),
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
          },
          {
            label: 'Tanggal',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            }
          },
          {
            label: 'Terakhir diperbarui',
            name: 'lastmod',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Konten",
            isBody: true,
            templates: [
              {
                name: 'callout',
                label: 'Catatan',
                match: {
                  name: 'callout',
                  start: '{{<',
                  end: '>}}',
                },
                fields: [    

                  {
                    name: 'context',
                    label: 'Konteks',
                    type: 'string',
                    required: true,
                    options: [
                      {
                        value: 'note',
                        label: 'Catatan'
                      },
                      {
                        value: 'tip',
                        label: 'Tips'
                      },
                      {
                        value: 'caution',
                        label: 'Himbauan'
                      },
                      {
                        value: 'danger',
                        label: 'Peringatan'
                      }
                    ]
                  },
                  {
                    name: 'title',
                    label: 'Judul',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'icon',
                    label: 'Nama Table Icons',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: "children",
                    label: "Konten",
                    type: "rich-text"
                  }              
                ],
              }
            ],
          },
        ],
      },

      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        defaultItem: () => ({
          date: new Date().toISOString(),
          lastmod: new Date().toISOString(),
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
          },
          {
            label: 'Tanggal',
            name: 'date',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            },
          },
          {
            label: 'Terakhir diperbarui',
            name: 'lastmod',
            type: 'datetime',
            ui: {
              dateFormat: 'd MMMM YYYY',
              timeFormat: "HH:mm",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Konten",
            isBody: true,
            templates: [
              {
                name: 'callout',
                label: 'Catatan',
                match: {
                  name: 'callout',
                  start: '{{<',
                  end: '>}}',
                },
                fields: [    

                  {
                    name: 'context',
                    label: 'Konteks',
                    type: 'string',
                    required: true,
                    options: [
                      {
                        value: 'note',
                        label: 'Catatan'
                      },
                      {
                        value: 'tip',
                        label: 'Tips'
                      },
                      {
                        value: 'caution',
                        label: 'Himbauan'
                      },
                      {
                        value: 'danger',
                        label: 'Peringatan'
                      }
                    ]
                  },
                  {
                    name: 'title',
                    label: 'Judul',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: 'icon',
                    label: 'Nama Table Icons',
                    type: 'string',
                    required: true,
                  },
                  {
                    name: "children",
                    label: "Konten",
                    type: "rich-text"
                  }              
                ],
              }
            ],
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

