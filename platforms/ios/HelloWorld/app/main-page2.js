var frameModule = require("ui/frame");
exports.loaded = function(args) {
  let page = args.object;
  let dataContext = page.navigationContext.datanama;
  page.bindingContext = dataContext;
};
