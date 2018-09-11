var observableModule = require("data/observable");

exports.loaded = function(args) {
  var page = args.object;
  var context = new observableModule.Observable();
  context.set("fullName", "Kang Anton");
  page.bindingContext = context;
}
