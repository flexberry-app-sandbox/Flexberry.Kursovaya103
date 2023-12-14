import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-10-тч-програм', 'Unit | Serializer | i-i-s-kursovaya-10-тч-програм', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-10-тч-програм',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-10-код-ошибки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
