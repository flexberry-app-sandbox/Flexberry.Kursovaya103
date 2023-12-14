import { Serializer as СписокПрограмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-10-список-програм';
import ОтчетSerializer from './i-i-s-kursovaya-10-отчет';

export default ОтчетSerializer.extend(СписокПрограмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
