import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кондицион: DS.attr('number')
});

export let ValidationRules = {
  кондицион: {
    descriptionKey: 'models.i-i-s-kursovaya-10-кондер.validations.кондицион.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КондерE', 'i-i-s-kursovaya-10-кондер', {
    кондицион: attr('Кондицион', { index: 0 })
  });

  modelClass.defineProjection('КондерL', 'i-i-s-kursovaya-10-кондер', {
    кондицион: attr('Кондицион', { index: 0 })
  });
};
