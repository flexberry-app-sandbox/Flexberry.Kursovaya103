import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вода: DS.attr('number')
});

export let ValidationRules = {
  вода: {
    descriptionKey: 'models.i-i-s-kursovaya-10-вода.validations.вода.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВодаE', 'i-i-s-kursovaya-10-вода', {
    вода: attr('Вода', { index: 0 })
  });

  modelClass.defineProjection('ВодаL', 'i-i-s-kursovaya-10-вода', {
    вода: attr('Вода', { index: 0 })
  });
};
