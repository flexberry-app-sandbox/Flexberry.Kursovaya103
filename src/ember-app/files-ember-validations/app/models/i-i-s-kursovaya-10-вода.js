import {
  defineNamespace,
  defineProjections,
  Model as ВодаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-вода';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВодаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
