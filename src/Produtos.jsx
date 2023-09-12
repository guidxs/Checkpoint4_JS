import {} from 'react'
import './Produtos.css'

function Produtos(){
    return(
        <div className='produto-container'>

        <div className='produto-item'>
            <p>Cortador de Grama</p>
            <img src='./src/assets/grama.png' alt='produto-1'/>
            <p className='price'>R$ 239,90</p>
        </div>

        <div className='produto-item'>
            <p>Aspirador de Pó</p>
            <img src='./src/assets/aspirador.png' alt='produto-2'/>
            <p className='price'>R$ 174,99</p>
        </div>

        <div className='produto-item'>
            <p>Cama Elástica</p>
            <img src='./src/assets/cama.png' alt='produto-3'/>
            <p className='price'>R$ 1.499,00</p>
        </div>

        <div className='produto-item'>
            <p>Jetski</p>
            <img src='./src/assets/jetski.png' alt='produto-4'/>
            <p className='price'>R$ 72.500,00</p>
        </div>
        </div>
    )
}

export default Produtos