import { Serializer as температурыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-температуры';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(температурыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
