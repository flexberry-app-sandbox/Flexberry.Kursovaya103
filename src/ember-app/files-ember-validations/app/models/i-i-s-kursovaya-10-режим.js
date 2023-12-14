import {
  defineNamespace,
  defineProjections,
  Model as РежимMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-режим';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РежимMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
