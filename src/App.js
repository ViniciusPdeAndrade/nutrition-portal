import React from 'react';
import ShowProvider from './states/showMenu/Provider';
import NutritionApp from './pages/nutrition/NutritionApp'
function App() {
  return (
    <ShowProvider>
      <NutritionApp/>
    </ShowProvider>

  );
}

export default App;
