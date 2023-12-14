import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as СписокПрограмMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-10-список-програм';

import ОтчетModel from './i-i-s-kursovaya-10-отчет';

let Model = ОтчетModel.extend(СписокПрограмMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
