// 删除打包后的文件夹的冗余文件

import fs from "fs";
import { resolve } from "path";

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      let curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // 递归
        if (file != "node_modules") await delPath(curPath);
      } else {
        // 删除文件
        fs.unlinkSync(curPath);
      }
    });

    // 删除空目录
    fs.rmdirSync(path);
  }
};
export default delPath;
