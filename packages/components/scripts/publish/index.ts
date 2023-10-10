import { series } from "gulp";
import run from "../utils/run";
import { pkgPath } from "../utils/paths";

export const publishComponent = async () => {
  run("pnpm run release", `${pkgPath}/dist/`);
};
export default series(async () => publishComponent());
