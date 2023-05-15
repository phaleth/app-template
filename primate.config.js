import svelte from "@primate/svelte";
import htmx from "@primate/htmx";
import esbuild from "@primate/esbuild";
import react from "@primate/react";
import vue from "@primate/vue";
import session from "@primate/session";
import ws from "@primate/ws";
import {default as store, json} from "@primate/store";
import {Logger} from "primate";

export default {
  // comment in this section and run `npm run generate-ssl` for https
  /*
  http: {
    ssl: {
      key: "./ssl/default.key",
      cert: "./ssl/default.crt",
    },
  },
  */
  logger: {
    level: Logger.Info,
  },
  modules: [
    svelte({entryPoints: ["PostIndex.svelte"]}),
    htmx(),
    react(),
    vue(),
    esbuild(),
    store({driver: json({path: "/tmp/db.json"})}),
    session(),
    ws(),
  ],
};
