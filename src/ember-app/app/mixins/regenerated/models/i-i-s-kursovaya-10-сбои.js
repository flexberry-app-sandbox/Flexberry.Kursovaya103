import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date', { defaultValue() { return new Date(); } }),
  ошибка: DS.attr('i-i-s-kursovaya-10-код-ошибки')
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kursovaya-10-сбои.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  ошибка: {
    descriptionKey: 'models.i-i-s-kursovaya-10-сбои.validations.ошибка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СбоиE', 'i-i-s-kursovaya-10-сбои', {
    время: attr('Время', { index: 0 }),
    ошибка: attr('Ошибка', { index: 1 })
  });

  modelClass.defineProjection('СбоиL', 'i-i-s-kursovaya-10-сбои', {
    время: attr('Время', { index: 0 }),
    ошибка: attr('Ошибка', { index: 1 })
  });
};
