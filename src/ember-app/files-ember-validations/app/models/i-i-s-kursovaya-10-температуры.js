import {
  defineNamespace,
  defineProjections,
  Model as температурыMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-температуры';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(температурыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
