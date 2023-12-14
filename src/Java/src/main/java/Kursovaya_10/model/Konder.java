package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Кондер
 */
@Entity(name = "IISKursovaya_10Кондер")
@Table(schema = "public", name = "Кондер")
public class Konder {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Кондицион")
    private Integer кондицион;


    public Konder() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКондицион() {
      return кондицион;
    }

    public void setКондицион(Integer кондицион) {
      this.кондицион = кондицион;
    }


}