import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  температура: DS.attr('number')
});

export let ValidationRules = {
  температура: {
    descriptionKey: 'models.i-i-s-kursovaya-10-температуры.validations.температура.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('температурыE', 'i-i-s-kursovaya-10-температуры', {
    температура: attr('Температура', { index: 0 })
  });

  modelClass.defineProjection('температурыL', 'i-i-s-kursovaya-10-температуры', {
    температура: attr('Температура', { index: 0 })
  });
};
