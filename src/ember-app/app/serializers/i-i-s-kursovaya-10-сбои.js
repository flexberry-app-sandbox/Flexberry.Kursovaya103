import { Serializer as СбоиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-сбои';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СбоиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
