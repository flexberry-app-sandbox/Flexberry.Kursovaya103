import {
  defineNamespace,
  defineProjections,
  Model as СбоиMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-сбои';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СбоиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
