var frameModule = require("ui/frame");

exports.movePage = function() {
  var topmost = frameModule.topmost();
  topmost.navigate("main-page");
}
