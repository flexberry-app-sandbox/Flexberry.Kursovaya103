package Kursovaya_10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТчПрограм
 */
@Entity(name = "IISKursovaya_10ТчПрограм")
@Table(schema = "public", name = "ТчПрограм")
public class TchProgram {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Rezhim")
    @Convert("Rezhim")
    @Column(name = "Режим", length = 16, unique = true, nullable = false)
    private UUID _rezhimid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Rezhim", insertable = false, updatable = false)
    private Rezhim rezhim;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otchet")
    @Convert("Otchet")
    @Column(name = "Отчет", length = 16, unique = true, nullable = false)
    private UUID _otchetid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otchet", insertable = false, updatable = false)
    private Otchet otchet;


    public TchProgram() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}