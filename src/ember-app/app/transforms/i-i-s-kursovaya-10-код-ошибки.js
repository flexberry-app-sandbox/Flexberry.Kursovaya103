import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КодОшибкиEnum from '../enums/i-i-s-kursovaya-10-код-ошибки';

export default FlexberryEnum.extend({
  enum: КодОшибкиEnum,
  sourceType: 'IIS.Kursovaya_10.КодОшибки'
});
