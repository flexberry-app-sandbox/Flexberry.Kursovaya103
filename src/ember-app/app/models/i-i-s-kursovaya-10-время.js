import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВремяMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-время';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВремяMixin, Validations, {
});

defineProjections(Model);

export default Model;
