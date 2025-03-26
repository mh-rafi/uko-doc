const utils = require("./utils");
const fse = require("fs-extra");
const copyRoot = require('./copy-root')

const convert = async () => {
  await copyRoot("output/ts", "output/js");

  utils.createJsConfig("output/js/jsconfig.json");
  const srcFiles = utils.buildTree("output/js/src");
  utils.transformTsToJs(srcFiles);
}
convert();
