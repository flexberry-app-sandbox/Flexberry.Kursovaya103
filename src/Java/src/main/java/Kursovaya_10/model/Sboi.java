package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Сбои
 */
@Entity(name = "IISKursovaya_10Сбои")
@Table(schema = "public", name = "Сбои")
public class Sboi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Время")
    private Date время;

    @Column(name = "Ошибка")
    private String ошибка;


    public Sboi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getВремя() {
      return время;
    }

    public void setВремя(Date время) {
      this.время = время;
    }

    public String getОшибка() {
      return ошибка;
    }

    public void setОшибка(String ошибка) {
      this.ошибка = ошибка;
    }


}