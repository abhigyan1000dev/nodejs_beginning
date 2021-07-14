//Os module functioning

const os = require("os");


const osModuleDetails = {
  userinfo: os.userInfo(),
  hostName: os.hostname(),
  type: os.type(),
  runnningtime: os.uptime(),
};
console.log(osModuleDetails);
