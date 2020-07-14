import React from 'react';
import styles from './Recipes.module.css';
import Table from './table/Table';

const Recipes = () => {
  return(
    <div className={styles.container}>
      <h1>Receitas</h1>
      <p>As receitas serão para o grupo de idosos que não conseguem ter fácil mastigação e 
        deglutição do alimento, por isso serão pastosas. Essa dieta consiste em alimentos 
        com forma de purê e cremes, mas que geralmente possuem uma dificuldade na sua variação. 
        Sendo assim, será disponibilizado três receitas com os nutrientes necessários para a 
        recuperação do estado nutricional e a cicatrização de feridas, e que poderão ser variadas 
        conforme o seu preparo.
      </p>
      <Table/>
    </div>    
  );

}

export default Recipes;