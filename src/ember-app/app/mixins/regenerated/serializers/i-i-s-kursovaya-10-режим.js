import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      вода: { serialize: 'odata-id', deserialize: 'records' },
      время: { serialize: 'odata-id', deserialize: 'records' },
      кондер: { serialize: 'odata-id', deserialize: 'records' },
      моющееСред: { serialize: 'odata-id', deserialize: 'records' },
      температуры: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
