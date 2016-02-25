(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['test'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "/**\r\n * Created by Snake on 24.02.2016.\r\n */\r\n<div class=\"gift-list-item\">\r\n    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.gift : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n</div>";
},"useData":true});
})();