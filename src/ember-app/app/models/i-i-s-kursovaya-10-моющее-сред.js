import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МоющееСредMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-моющее-сред';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МоющееСредMixin, Validations, {
});

defineProjections(Model);

export default Model;
