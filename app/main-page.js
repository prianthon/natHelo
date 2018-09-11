exports.pageLoaded = function(args) {
  let data = {
    firstname : "Kang",
    lastname : "Anton"
  };

  let page = args.object;
  page.bindingContext = data;
};
