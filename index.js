var isGeneratorFunctionName = require('is-generator-function-name');
var co = require('co');

module.exports = function vueCo(component, depth) {
	depth = depth||4;

	Object.keys(component).forEach(function(key) {
		if (isGeneratorFunctionName(component[key])) {
			component[key] = co.wrap(component[key]);
		}else if (typeof component[key] == 'object' && depth>1) {
			component[key] = vueCo(component[key], depth - 1);
		}
	});
	return component;
}
