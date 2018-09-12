var frameModule = require("ui/frame");

exports.kliktap = function() {
  console.log("Tap berhasil");
};
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
          },
animated: true,
              transition: {
                name: "flip",
                duration: 300,
                curve: "easeOut"
              }
  };
  topmost.navigate(navigationEntry);
}
