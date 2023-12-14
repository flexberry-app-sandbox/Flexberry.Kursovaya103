import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КондерMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-кондер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КондерMixin, Validations, {
});

defineProjections(Model);

export default Model;
