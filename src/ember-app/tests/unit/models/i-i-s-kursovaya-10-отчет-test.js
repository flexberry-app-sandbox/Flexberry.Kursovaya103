import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-10-отчет', 'Unit | Model | i-i-s-kursovaya-10-отчет', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-10-вода',
    'model:i-i-s-kursovaya-10-время',
    'model:i-i-s-kursovaya-10-кондер',
    'model:i-i-s-kursovaya-10-моющее-сред',
    'model:i-i-s-kursovaya-10-отчет',
    'model:i-i-s-kursovaya-10-режим',
    'model:i-i-s-kursovaya-10-сбои',
    'model:i-i-s-kursovaya-10-список-програм',
    'model:i-i-s-kursovaya-10-температуры',
    'model:i-i-s-kursovaya-10-тч-програм',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
