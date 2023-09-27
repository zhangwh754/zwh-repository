import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(com: T) => {
  (com as SFCWithInstall<T>).install = (app: App) => {
    const name = (com as any).name;

    app.component(name, com as SFCWithInstall<T>);
  };

  return com as SFCWithInstall<T>;
};
