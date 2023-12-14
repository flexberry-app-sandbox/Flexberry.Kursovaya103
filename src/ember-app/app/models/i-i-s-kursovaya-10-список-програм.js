import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СписокПрограмMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-список-програм';

import ОтчетModel from './i-i-s-kursovaya-10-отчет';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-kursovaya-10-отчет';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОтчетModel.extend(СписокПрограмMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
