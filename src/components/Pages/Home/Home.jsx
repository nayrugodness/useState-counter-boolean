import React, {useState, useEffect} from 'react'
import { Foto } from '../../UI/Foto/Foto'
import foto from '../../../assets/Images/imagen.jpg'
import foto1 from '../../../assets/Images/imagen1.jpg'

export const Home = () => {

    const [counter, setCounter] = useState(0)
    const [boolean, setBoolean] = useState(false)

    const handleClick1 = () => {
        setCounter(counter +1)
      }
    const handleClick2 = () => {
        setBoolean(!boolean)
    }


    useEffect(()=>{
        
        const foto = document.getElementById('foto')
        const foto1 = document.getElementById('foto1')
        const foto2 = document.getElementById('foto2')
        const foto3 = document.getElementById('foto3')
        const boton = document.getElementById('boton')
        const showState = document.getElementById('boolean')
        
        if (boolean===true){
            foto2.classList.add('boolean-true')
            foto3.classList.add('boolean-true')
            foto2.classList.remove('boolean-false')
            foto3.classList.remove('boolean-false')
            showState.textContent = 'True'
        }else{
            foto2.classList.add('boolean-false')
            foto3.classList.add('boolean-false')
            foto2.classList.remove('boolean-true')
            foto3.classList.remove('boolean-true')
            showState.textContent = 'False'
        }

        if(counter %2 === 0){
            foto.classList.add('par1')
            foto1.classList.add('par1')
            console.log('par', counter) 
            boton.textContent = 'Par'
            
        }else{
            console.log('impar', counter)
            foto.classList.remove('par1')
            foto1.classList.remove('par1')
            boton.textContent = 'Impar'
        }
    },[counter, boolean])

    return (
        <div className='home'>
            <div className='contador'>
                <h1 id='counter'>{counter}</h1>
                <Foto id="foto" clase="foto" url={foto} alt={"Imagen prueba"}></Foto>
                <Foto id="foto1" clase="foto" url={foto1} alt={"Imagen prueba"}></Foto>
                <button id="boton" className="btn" onClick={handleClick1} nombre="cambiar">Botón</button>
            </div>
            <div className='boolean'>
                <h1 id='boolean'></h1>
                <Foto id="foto2" clase="foto" url={foto} alt={"Imagen prueba"}></Foto>
                <Foto id="foto3" clase="foto" url={foto1} alt={"Imagen prueba"}></Foto>
                <button id="boton-boolean" className="btn" onClick={handleClick2} nombre="cambiar">Botón</button>
            </div>
        </div>
      )
    
  };