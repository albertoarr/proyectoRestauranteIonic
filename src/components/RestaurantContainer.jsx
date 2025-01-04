import { IonContent } from '@ionic/react'
import React, { useState } from 'react'
import './RestaurantContainer.css'
import FoodAdd from './FoodAdd'

function RestaurantContainer() {
  // Estado con la lista de comidas, cada comida tiene nombre, imagen, precio y cantidad
  const [foods, setFoods] = useState([
    { id: 1, name: 'Hamburguesa', image: 'hamburguesa.png', price: 2.5, quantity: 0 },
    { id: 2, name: 'Cerveza', image: 'cerveza.png', price: 3, quantity: 0 },
    { id: 3, name: 'Gaseosa', image: 'gaseosa.png', price: 3, quantity: 0 },
    { id: 4, name: 'Ensalada', image: 'ensalada.png', price: 1.5, quantity: 0 },
    { id: 5, name: 'Salchicha', image: 'salchicha.png', price: 2, quantity: 0 },
    { id: 6, name: 'Sopa', image: 'sopa.png', price: 1, quantity: 0 },    
    { id: 7, name: 'Postre', image: 'postre.png', price: 1.5, quantity: 0 }
  ]);

  // Función para incrementar la cantidad de un alimento
  const handleIncrease = (id) => {
    setFoods(foods.map(food => 
      food.id === id ? { ...food, quantity: food.quantity + 1 } : food
    ));
  };

  // Función para decrementar la cantidad de un alimento
  const handleDecrease = (id) => {
    setFoods(foods.map(food => 
      food.id === id && food.quantity > 0 ? { ...food, quantity: food.quantity - 1 } : food
    ));
  };

  return (
    <IonContent className='container0'>
      <div className='container1'>
        <IonContent className='containerFood'>
          {/* Pasamos el estado y las funciones como props al componente hijo */}
          <FoodAdd 
            foods={foods} 
            handleIncrease={handleIncrease} 
            handleDecrease={handleDecrease} 
          />
        </IonContent>
        <div className='containerTable'></div>
        <div className='containerButtons'></div>
      </div>
    </IonContent>
  );
}

export default RestaurantContainer;
