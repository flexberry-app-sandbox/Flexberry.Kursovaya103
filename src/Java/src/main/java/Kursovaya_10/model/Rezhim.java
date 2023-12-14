package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Режим
 */
@Entity(name = "IISKursovaya_10Режим")
@Table(schema = "public", name = "Режим")
public class Rezhim {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "MoyushheeSred")
    @Convert("MoyushheeSred")
    @Column(name = "МоющееСред", length = 16, unique = true, nullable = false)
    private UUID _moyushheesredid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "MoyushheeSred", insertable = false, updatable = false)
    private MoyushheeSred moyushheesred;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "temperatury")
    @Convert("temperatury")
    @Column(name = "температуры", length = 16, unique = true, nullable = false)
    private UUID _temperaturyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "temperatury", insertable = false, updatable = false)
    private temperatury temperatury;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Konder")
    @Convert("Konder")
    @Column(name = "Кондер", length = 16, unique = true, nullable = false)
    private UUID _konderid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Konder", insertable = false, updatable = false)
    private Konder konder;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Voda")
    @Convert("Voda")
    @Column(name = "Вода", length = 16, unique = true, nullable = false)
    private UUID _vodaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Voda", insertable = false, updatable = false)
    private Voda voda;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vremya")
    @Convert("Vremya")
    @Column(name = "Время", length = 16, unique = true, nullable = false)
    private UUID _vremyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vremya", insertable = false, updatable = false)
    private Vremya vremya;


    public Rezhim() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}