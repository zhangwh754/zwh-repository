import * as components from "./packages";
export * from "./packages";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use((components as any)[c]);
    }
  },
};
