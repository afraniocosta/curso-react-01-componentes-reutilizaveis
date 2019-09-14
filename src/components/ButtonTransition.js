/**
 * Um botao, centralizado, será criado.
 * Quando o botao for clicado, este deverá fazer uma transicao de 30% da metade da largura da tela
 * Ex.: se a tela for 480px de largura, entao o botao tera um transition do ponto 240px até 30% desse valor
 */
import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash'
import '../css/cor-btn.css';

function ButtonTransition () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const setWindowResize = throttle(() => {
      setWindowWidth(window.innerWidth)
    }, 200)

    window.addEventListener('resize', setWindowResize)
    return () => { window.removeEventListener('resize', setWindowResize) }
  }, [])



  return(
    <div style={{height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a
        className='btnPosition'
        href='qualquer/coisa'
        onClick={evt => { console.log('hah') }}
      >
        Click
      </a>
    </div>
  )
}

export default ButtonTransition
