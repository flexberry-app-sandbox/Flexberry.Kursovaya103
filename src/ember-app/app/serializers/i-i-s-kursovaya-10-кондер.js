import { Serializer as КондерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-кондер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КондерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
