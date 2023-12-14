import {
  defineNamespace,
  defineProjections,
  Model as ТчПрограмMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-тч-програм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчПрограмMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
