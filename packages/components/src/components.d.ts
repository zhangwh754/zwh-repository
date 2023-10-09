import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WhButton: typeof components.Button;
  }
}
export {};
