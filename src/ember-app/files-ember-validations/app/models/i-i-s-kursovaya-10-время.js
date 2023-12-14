import {
  defineNamespace,
  defineProjections,
  Model as ВремяMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-время';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВремяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
