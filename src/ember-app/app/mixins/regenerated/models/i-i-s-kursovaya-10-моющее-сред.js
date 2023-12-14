import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  моющее: DS.attr('number')
});

export let ValidationRules = {
  моющее: {
    descriptionKey: 'models.i-i-s-kursovaya-10-моющее-сред.validations.моющее.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МоющееСредE', 'i-i-s-kursovaya-10-моющее-сред', {
    моющее: attr('Моющее', { index: 0 })
  });

  modelClass.defineProjection('МоющееСредL', 'i-i-s-kursovaya-10-моющее-сред', {
    моющее: attr('Моющее', { index: 0 })
  });
};
