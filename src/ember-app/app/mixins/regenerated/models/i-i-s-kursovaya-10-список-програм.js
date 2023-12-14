import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-10-список-програм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-kursovaya-10-отчет'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокПрограмE', 'i-i-s-kursovaya-10-список-програм', {
    дата: attr('Дата', { index: 0 }),
    тчПрограм: hasMany('i-i-s-kursovaya-10-тч-програм', 'Тч програм', {
      режим: belongsTo('i-i-s-kursovaya-10-режим', 'Режим', {
        название: attr('Название', { index: 1, hidden: true }),
        вода: belongsTo('i-i-s-kursovaya-10-вода', '', {
          вода: attr('Вода', { index: 2 })
        }, { index: -1, hidden: true }),
        время: belongsTo('i-i-s-kursovaya-10-время', '', {
          время: attr('Время', { index: 3 })
        }, { index: -1, hidden: true }),
        кондер: belongsTo('i-i-s-kursovaya-10-кондер', '', {
          кондицион: attr('Кондицион', { index: 4 })
        }, { index: -1, hidden: true }),
        моющееСред: belongsTo('i-i-s-kursovaya-10-моющее-сред', '', {
          моющее: attr('Моющее', { index: 5 })
        }, { index: -1, hidden: true }),
        температуры: belongsTo('i-i-s-kursovaya-10-температуры', '', {
          температура: attr('Температура', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('СписокПрограмL', 'i-i-s-kursovaya-10-список-програм', {
    дата: attr('Дата', { index: 0 })
  });
};
