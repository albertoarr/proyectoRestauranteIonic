import React from "react";
import { IonText } from "@ionic/react";
import "./FoodTable.css";

const FoodTable = ({ foods, price }) => {
  return (
    <div>
      <table>

        <thead>
          <tr>
            <th><IonText>Menú</IonText></th>
            <th><IonText>Precio</IonText></th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => ( // Recorriendo el array para generar la tabla
            <tr key={food.id}>
              <td><IonText>{food.name}</IonText></td>
              <td><IonText>{`$${food.price.toFixed(2)}`}</IonText></td>
            </tr>
          ))}
        </tbody>

      </table>
      {/* Segunda tabla con la clase no-border */}
      <table className="no-border">

        <tbody>
          <tr>
            <td>Precio de Venta</td>
            <td>{price.toFixed(2)}€</td>
          </tr>
          <tr>
            <td>Impuesto a pagar</td>
            <td>{(price * 0.07).toFixed(2)}€</td> 
          </tr>
        </tbody>
        
      </table>
    </div>
  );
};

export default FoodTable;
