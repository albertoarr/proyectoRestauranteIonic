import React from "react";
import { IonList, IonItem, IonButton } from "@ionic/react";
import './FoodAdd.css'
const FoodAdd = ({ foods, handleIncrease, handleDecrease }) => {
  return (
    <div>
      <IonList>
        {foods.map((food) => (
          <IonItem key={food.id}>
            <div>
              {" "}
              {/* Botón de sumar */}
              <IonButton fill="solid" onClick={() => handleIncrease(food.id)}>
                <span className="button-text">+</span> {/* Texto de sumar */}
              </IonButton>
            </div>
            <div className="food-item">
              <span>{food.quantity > 0 ? 'x'+food.quantity : ''}</span>
              <img src={food.image} alt={food.name} />
            </div>
            <div>
              {" "}
              {/* Botón de restar */}
              <IonButton fill="solid" onClick={() => handleDecrease(food.id)}>
                <span className="button-text">-</span> {/* Texto de restar */}
              </IonButton>
            </div>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default FoodAdd;
