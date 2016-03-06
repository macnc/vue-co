# vue-co
add co support for vue components. 

Usage:
import vueCo from 'vue-co';
export default vueCo({
  methods: {
    methodx: function*(param1,param2) {
      var resolved = yield somePromise;
    }
  }
  asyncData: function*() {
    //do it in generator way
  }
  //any generator function will be transformed by co.wrap
})
