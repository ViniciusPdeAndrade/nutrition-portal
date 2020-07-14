import React from 'react';
let data = require('../Recipes.json');

const Table = () => {
  return (
    <div>
      {
        data.recipes.map(recipe => 
          <div>
            <img src={require('./images/' + recipe.img_name)} alt={recipe.recipeName}/>
            <table key={recipe.id}>
              <thead>
                <tr>
                  <th>{recipe.recipeName}</th>                  
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>INGREDIENTE</th>
                  <th>QUANTIDADE</th>
                  <th>MEDIDA CASEIRA</th>
                </tr>
              </thead> 
              <tbody>
                {recipe.ingredients.map(ingredient => 
                  <tr key={ingredient.id}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.measure}</td>
                    <td>{ingredient.homeMeasure}</td>
                  </tr>
                )}
              </tbody>            
            </table>

            <table key={recipe.id}>
              <thead>
                <tr>
                  <th>RENDIMENTO: {recipe.revenue}</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>MODO DE PREPARO</th>
                </tr>
              </thead>
              <tbody>
                {recipe.preparationMode.map(preparation =>               
                  <tr key={preparation.id}>
                    <td>{preparation.id + '. ' + preparation.content}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <table key={recipe.id}>
              <thead>
                <tr>
                  <th>Nutrientes</th>
                </tr>
                <tr>
                  {recipe.nutrients.map( nutrient =>
                    <th key={nutrient.id}>{nutrient.measureDescription}</th>
                  )}
                </tr>                
              </thead>
              <tbody>
                {recipe.nutrients.map(nutrient => 
                  <th key={nutrient.id}>{nutrient.measure}</th>
                )}
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )
};

export default Table;