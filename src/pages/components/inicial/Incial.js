import React from 'react';

import styles from './Inicial.module.css';

const Inicial = () => {

  return(    
    <div className={styles.container}>
      <h1>Você sabe o que é Lesão por pressão?</h1>
      <p>Lesão por pressão são feridas na pele que ocorrem devido ao atrito constante, e geralmente são encontradas em pacientes que estão acamados e desnutridos.</p>
    
      <h1>Por que isso ocorre?</h1>
      <p>As feridas ocorrem devido a combinação do envelhecimento natural da pele, e a desnutrição de pacientes debilitados. A nossa pele passa por transformações conforme a idade, uma delas é a redução das glândulas que produzem a umidade. Isso ocorre muito com os idosos, pois além do envelhecimento natural, há uma redução na alimentação conforme a idade. Muitas vezes por falta de dentição, dificuldade de deglutição e falta de apetite, e com isso o paciente pode ficar desnutrido. Um paciente idoso, desnutrido e acamado tem muita propensão a ter as feridas.</p>
    
      <h1>Como podemos evitá-las?</h1>
      <p>As feridas podem ser evitadas com alguns cuidados físicos e nutricionais, onde o conjunto dos dois resultará num melhor tratamento.</p>

    </div>    
  );

}

export default Inicial;