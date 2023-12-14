package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: температуры
 */
@Entity(name = "IISKursovaya_10температуры")
@Table(schema = "public", name = "температуры")
public class temperatury {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Температура")
    private Integer температура;


    public temperatury() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТемпература() {
      return температура;
    }

    public void setТемпература(Integer температура) {
      this.температура = температура;
    }


}