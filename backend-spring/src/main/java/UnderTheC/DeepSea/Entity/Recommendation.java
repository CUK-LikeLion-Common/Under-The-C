package UnderTheC.DeepSea.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "recommendation")
@Getter
@Setter
public class Recommendation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    int recID;
    @Column(length = 20)
    String userID ;
    @Column(length = 20)
    String evaluationID;
    String created_at;
    String updated_at;
}
