import React from 'react';
import imgProfile from '../../../images/imgProfile.jpg';
import styles from './Profile.module.css';

const Profile = () => {
  return(
    <div className={styles.container}>
      <img SRC={imgProfile}/>
      <h1>Mariani da Silva Flores</h1>
      <p>Eu me chamo Mariani da Silva Flores, sou estudante de Nutrição 
        na faculdade Unisinos.
      </p>
      <p>O site que você está visitando faz parte do meu Trabalho de Conclusão 
        de Curso, e meu objetivo é poder ajudar profissionais da área e 
        familiares a entenderem melhor como ocorre o processo de cicatrização 
        de Lesões por pressão em idosos.
      </p>
      <p>Você também encontrará receitas diversificadas, para que o paciente 
        receba todo o aporte nutricional necessário para o seu tratamento, 
        sem que a sua dieta seja sem gosto e sem graça.
      </p>
      <p>Espero que goste do nosso conteúdo!</p>
      </div>
    );

}


export default Profile;