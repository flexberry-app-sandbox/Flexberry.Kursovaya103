import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  вода: DS.belongsTo('i-i-s-kursovaya-10-вода', { inverse: null, async: false }),
  время: DS.belongsTo('i-i-s-kursovaya-10-время', { inverse: null, async: false }),
  кондер: DS.belongsTo('i-i-s-kursovaya-10-кондер', { inverse: null, async: false }),
  моющееСред: DS.belongsTo('i-i-s-kursovaya-10-моющее-сред', { inverse: null, async: false }),
  температуры: DS.belongsTo('i-i-s-kursovaya-10-температуры', { inverse: null, async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  вода: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.вода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  кондер: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.кондер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  моющееСред: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.моющееСред.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  температуры: {
    descriptionKey: 'models.i-i-s-kursovaya-10-режим.validations.температуры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РежимE', 'i-i-s-kursovaya-10-режим', {
    название: attr('Название', { index: 0 }),
    моющееСред: belongsTo('i-i-s-kursovaya-10-моющее-сред', 'Моющее сред', {
      моющее: attr('Моющее', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'моющее' }),
    температуры: belongsTo('i-i-s-kursovaya-10-температуры', 'Температуры', {
      температура: attr('Температура', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'температура' }),
    кондер: belongsTo('i-i-s-kursovaya-10-кондер', 'Кондер', {
      кондицион: attr('Кондицион', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'кондицион' }),
    вода: belongsTo('i-i-s-kursovaya-10-вода', 'Вода', {
      вода: attr('Вода', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'вода' }),
    время: belongsTo('i-i-s-kursovaya-10-время', 'Время', {
      время: attr('Время', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('РежимL', 'i-i-s-kursovaya-10-режим', {
    название: attr('Название', { index: 0 }),
    моющееСред: belongsTo('i-i-s-kursovaya-10-моющее-сред', 'Моющее', {
      моющее: attr('Моющее', { index: 1 })
    }, { index: -1, hidden: true }),
    температуры: belongsTo('i-i-s-kursovaya-10-температуры', 'Температура', {
      температура: attr('Температура', { index: 2 })
    }, { index: -1, hidden: true }),
    кондер: belongsTo('i-i-s-kursovaya-10-кондер', 'Кондицион', {
      кондицион: attr('Кондицион', { index: 3 })
    }, { index: -1, hidden: true }),
    вода: belongsTo('i-i-s-kursovaya-10-вода', 'Вода', {
      вода: attr('Вода', { index: 4 })
    }, { index: -1, hidden: true }),
    время: belongsTo('i-i-s-kursovaya-10-время', 'Время', {
      время: attr('Время', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
