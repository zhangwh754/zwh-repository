import * as components from "../packages/index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WhButton: typeof components.Button;
  }
}
export {};
