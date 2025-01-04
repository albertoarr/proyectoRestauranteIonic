import { IonContent } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./RestaurantContainer.css";
import FoodAdd from "./FoodAdd";
import FoodTable from "./FoodTable";
import ButtonComponent from "./ButtonComponent";
import jsPDF from "jspdf";

function RestaurantContainer() {
  // Estado con la lista de comidas, cada comida tiene nombre, imagen, precio y cantidad
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Hamburguesa",
      image: "hamburguesa.png",
      price: 2.5,
      quantity: 0,
    },
    { id: 2, name: "Cerveza", image: "cerveza.png", price: 3, quantity: 0 },
    { id: 3, name: "Gaseosa", image: "gaseosa.png", price: 3, quantity: 0 },
    { id: 4, name: "Ensalada", image: "ensalada.png", price: 1.5, quantity: 0 },
    { id: 5, name: "Salchicha", image: "salchicha.png", price: 2, quantity: 0 },
    { id: 6, name: "Sopa", image: "sopa.png", price: 1, quantity: 0 },
    { id: 7, name: "Postre", image: "postre.png", price: 1.5, quantity: 0 },
  ]);

  const [price, setPrice] = useState(0);

  // Función flecha para incrementar la cantidad de un alimento
  const handleIncrease = (id) => {
    setFoods(
      foods.map((food) =>
        food.id === id ? { ...food, quantity: food.quantity + 1 } : food
      )
    );
  };

  // Función flecha para decrementar la cantidad de un alimento
  const handleDecrease = (id) => {
    setFoods(
      foods.map((food) =>
        food.id === id && food.quantity > 0
          ? { ...food, quantity: food.quantity - 1 }
          : food
      )
    );
  };

  // Función flecha para reiniciar las cantidades a 0
  const clearFoodState = () => {
    setFoods(
      foods.map((food) => ({
        ...food,
        quantity: 0,
      }))
    );
  };

  // Función que actualiza el precio total
  const updateTotalPrice = () => {
    const total = foods.reduce(
      (acc, food) => acc + food.quantity * food.price,
      0
    );
    setPrice(total);
  };

  // Llamar a la función `updateTotalPrice` cada vez que se actualicen las cantidades
  useEffect(() => {
    updateTotalPrice();
  }, [foods]);

  // Función para generar el PDF con los alimentos que tienen quantity > 0
  const generatePayPDF = () => {
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text("Factura diaria", 10, 10);

    // Elementos
    let y = 30; // Posición inicial en Y
    foods
      .filter((food) => food.quantity > 0) // Filtrar por cantidad > 0
      .forEach((food, index) => {
        doc.text(
          `${index + 1}. ${food.name}: Cantidad: ${
            food.quantity
          } - Precio: €${(food.quantity * food.price).toFixed(2)}`,
          10,
          y //Posición en la que se escribe ".text(texto, pos)"
        );
        y += 10; // Movemos la posición de la siguiente línea (salto de línea)
      });

    // Agregar precio total
    doc.text(`Precio Total: €${price.toFixed(2)}`, 10, y + 10);

    // Guardar el archivo PDF
    doc.save("detalles_compra.pdf");
  };

  return (
    <IonContent className="container0">
      <div className="container1">
        <IonContent className="containerFood">
          {/* Pasamos el estado y las funciones como props al componente hijo */}
          <FoodAdd
            foods={foods}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </IonContent>
        <IonContent className="containerTable">
          <FoodTable foods={foods} price={price} />
          <ButtonComponent
            generatePDF={generatePayPDF}
            clearState={clearFoodState}
          />
        </IonContent>
      </div>
    </IonContent>
  );
}

export default RestaurantContainer;
