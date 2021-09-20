import { FFCJsClient } from "ffc-js-client-sdk";

const FfcPlugin = {
  install: (app) => {
    app.prototype.$FfcPlugin = FFCJsClient;
  },
  initialize(options) {
    FFCJsClient.initialize(options.environmentSecret);
  },
  initUserInfo(user) {
    FFCJsClient.initUserInfo(user);
  },
};
export default FfcPlugin;
