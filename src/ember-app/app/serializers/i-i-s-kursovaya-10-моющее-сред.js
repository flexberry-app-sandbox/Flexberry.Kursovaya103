import { Serializer as МоющееСредSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-моющее-сред';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МоющееСредSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
