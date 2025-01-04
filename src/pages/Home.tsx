import { IonContent, IonPage, IonToolbar, IonButton, IonText } from "@ionic/react";
import RestaurantContainer from "../components/RestaurantContainer";
import "./Home.css";
import React, { useState } from 'react';

const Home: React.FC = () => {
  // State para cambiar a modo oscuro o claro
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Función flecha que mediante un atributo personalizado que llamo 
   * "data-theme" para cambiar al tema de color claro u oscuro.
   * (Estos cambios se ven reflejados en "variables.css")
   */
  const toggleDarkMode = () => {
    const root = document.documentElement; // Obtiene el elemento <html>
    
    // Verifica si el modo oscuro está activado
    if (isDarkMode) {
        root.removeAttribute('data-theme'); // Elimina el atributo 'data-theme'
    } else {
        root.setAttribute('data-theme', 'dark'); // Agrega el atributo 'data-theme="dark"'
    }
    
    setIsDarkMode(!isDarkMode); // Cambia el booleano del tema de color
};

  return (
    <IonPage>
      <IonToolbar>
        <IonButton onClick={toggleDarkMode}>
           <IonText>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</IonText>
        </IonButton>
      </IonToolbar>

      <IonContent>
        <RestaurantContainer />
      </IonContent>

    </IonPage>
  );
};

export default Home;
