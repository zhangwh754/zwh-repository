import delPath from "../utils/delPath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除组件库
export const removeDist = () => {
  return delPath(`${pkgPath}/dist`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/*.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dist/lib/src`))
    .pipe(dest(`${pkgPath}/dist/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
