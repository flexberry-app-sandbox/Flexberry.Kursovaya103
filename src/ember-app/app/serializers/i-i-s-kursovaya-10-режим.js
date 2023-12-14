import { Serializer as РежимSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-режим';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РежимSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
