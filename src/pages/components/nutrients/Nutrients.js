import React from 'react';

import styles from './Nutrients.module.css';

const Nutrients = () => {
  return(
    <div className={styles.container}>
      <h1>Nutrientes</h1>
      <p>Os nutrientes encontrados nas receitas são importantes, pois auxiliam 
        na regeneração da pele e na cicatrização das feridas.
      </p>

      <div className={styles.container2}>
        <h2>Proteína</h2>
        <p>Auxilia o sistema imunológico, e participa da cicatrização das feridas.</p>

        <h2>Vitamina E</h2>
        <p>Nutriente importante que atua reduzindo as lesões.</p>

        <h2>Vitamina A</h2>
        <p>Vitamina que desempenha papel na ferida e reduz a infecção.</p>

        <h2>Vitamina C</h2>
        <p>Atua na síntese de proteínas e é antioxidante.</p>

        <h2>Zinco</h2>
        <p>É um mineral importante na síntese das proteínas e no sistema imunológico.</p>

        <h2>Selênio</h2>
        <p>Mineral antioxidante e componente essencial para as proteínas.</p>
      </div>
    </div>
  );
}


export default Nutrients;