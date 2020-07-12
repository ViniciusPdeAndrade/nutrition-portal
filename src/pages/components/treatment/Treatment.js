import React from 'react';

import styles from './Treatment.module.css';

const Treatment = () => {
  return(
    <div className={styles.container}>
      <h1>Tratamento</h1>
      <h2>Cuidados Físicos</h2>
      <p>O cuidado físico e nutricional contribui para o tratamento, 
          sendo o conjunto dos dois o ideal. 
          No físico temos o cuidado da ferida com remédios e curativos, 
          e para que não haja atrito constante com tecidos, é importante 
          trocar sempre a posição do paciente.
      </p>
      
      <h2>Cuidados Nutricionais</h2>
      <p>Já os cuidados nutricionais incluem uma boa alimentação, 
         pois ela ajudará na reparação dos tecidos, na cicatrização das 
         feridas e melhora da desnutrição.  Uma dieta rica em proteína e 
         arginina ajudará na fase inflamatória das feridas, auxiliando na 
         redução da perda muscular e melhora na desnutrição. É muito 
         importante também que haja o consumo das vitaminas E, A e C, 
         que irão estimular e acelerar a cicatrização por meio da produção 
         de colágeno. Os minerais zinco e selênio também devem fazer parte 
         da alimentação, pois auxiliam na síntese de proteínas.
      </p>
      <p>
         Uma dieta completa deve conter todos esses nutrientes, e em 
         quantidades adequadas para a idade. Porém, muitas vezes os 
         alimentos não são facilmente consumidos, e por isso devemos 
         variar a alimentação com receitas nutricionalmente completas.
       </p>
    </div>
  );
}
export default Treatment;