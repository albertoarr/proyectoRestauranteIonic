import React from 'react'
import './ButtonComponent.css'
import { IonButton, IonText } from "@ionic/react";


function ButtonComponent( {generatePDF, clearState} ) {
  return (
    <div className='containerButtons'>
        <IonButton onClick={generatePDF}>
            <IonText>Pagar</IonText>
        </IonButton>
        <IonButton onClick={clearState}>
            <IonText>Limpiar</IonText>
        </IonButton>
        
    </div>
  )
}

export default ButtonComponent