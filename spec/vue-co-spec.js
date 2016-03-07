'use strict';
var vueCo = require('../index');
describe("Vue Co", function() {
  it("doesn't change string or numbers", function() {
      var transformed = vueCo({prop:'string', num: 2});
      expect(transformed.prop).toBe('string');
      expect(transformed.num).toBe(2);
  });
  it("change 1st level generator", function(done) {
      var transformed = vueCo({asyncData:function*(param){return yield Promise.resolve(param);}});
	transformed.asyncData('string').then(function(result){
		expect(result).toBe('string');
		done();
	});
  });
  it("change 2nd level generator", function(done) {
      var transformed = vueCo({level2:{asyncData:function*(param){return yield Promise.resolve(param);}}});
	transformed.level2.asyncData('string').then(function(result){
		expect(result).toBe('string');
		done();
	});
  });
  it("allows recursive obejct references", function(done) {
	var component = {p1:'v1'};
	component.data = component;
	var transformed = vueCo(component);
	expect(component.data.p1).toBe('v1');
	done();
  });
});

