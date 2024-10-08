const Destroyable = require('sools-core/mixins/Destroyable')
const mixer = require('sools-core/mixer')
const Equalable = require('sools-core/mixins/Equalable');
//const Transformable = require('./Transformable')

const SingleInstance = mixer.mixin([Destroyable, Equalable], (base) => {
  return class SingleInstance extends base {
    static parse(object, options = {}, context) {
      if(object == null){
        return object
      }
      if (!options.singleInstance) {
        return super.parse(object, options, context)
      }

      const instance = this.instances.getInstance(object)
      instance.set(object, options)
      return instance
    }
  }
})

module.exports = SingleInstance