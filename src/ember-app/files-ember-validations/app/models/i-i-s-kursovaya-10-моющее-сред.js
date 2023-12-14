import {
  defineNamespace,
  defineProjections,
  Model as МоющееСредMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-моющее-сред';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МоющееСредMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
