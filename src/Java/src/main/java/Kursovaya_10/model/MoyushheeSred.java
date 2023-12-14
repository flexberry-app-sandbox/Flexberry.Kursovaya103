package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: МоющееСред
 */
@Entity(name = "IISKursovaya_10МоющееСред")
@Table(schema = "public", name = "МоющееСред")
public class MoyushheeSred {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Моющее")
    private Integer моющее;


    public MoyushheeSred() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getМоющее() {
      return моющее;
    }

    public void setМоющее(Integer моющее) {
      this.моющее = моющее;
    }


}