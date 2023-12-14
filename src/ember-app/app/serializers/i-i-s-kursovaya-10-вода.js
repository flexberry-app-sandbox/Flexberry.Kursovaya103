import { Serializer as ВодаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-вода';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВодаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
