import { Serializer as ВремяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-время';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВремяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
