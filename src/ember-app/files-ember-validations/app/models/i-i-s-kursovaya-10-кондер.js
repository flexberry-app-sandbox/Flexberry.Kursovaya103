import {
  defineNamespace,
  defineProjections,
  Model as КондерMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-кондер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КондерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
