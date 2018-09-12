var frameModule = require("ui/frame");
exports.movePage = function() {
  var myname = {
        firstname : "Kang",
        lastname : "Anton"
  };

  var topmost = frameModule.topmost();
  var navigationEntry = {
    moduleName: "main-page2",
          context: {
                    datanama : myname
          }
  };
  topmost.navigate(navigationEntry);
}
