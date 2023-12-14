import { Serializer as ТчПрограмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-тч-програм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТчПрограмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
