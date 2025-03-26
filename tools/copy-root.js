const fse = require("fs-extra");

module.exports = async (inputPath,outPath) => {
  if (!outPath) {
    return console.error("No output path provided");
  }
  try {
    await Promise.all([
      fse.copy(`${inputPath}/pages`, `${outPath}/pages`),
      fse.copy(`${inputPath}/public`, `${outPath}/public`),
      fse.copy(`${inputPath}/.gitignore`, `${outPath}/.gitignore`),
      fse.copy(`${inputPath}/next-env.d.ts`, `${outPath}/next-env.d.ts`),
      fse.copy(`${inputPath}/next.config.mjs`, `${outPath}/next.config.mjs`),
      fse.copy(`${inputPath}/package.json`, `${outPath}/package.json`),
      fse.copy(`${inputPath}/theme.config.tsx`, `${outPath}/theme.config.tsx`),
      fse.copy(`${inputPath}/tsconfig.json`, `${outPath}/tsconfig.json`),
    ]);
    console.log("Files copied successfully");
  } catch (err) {
    console.error("An error occurred while copying files:", err);
  }
};
