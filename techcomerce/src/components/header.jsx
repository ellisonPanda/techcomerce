import React from 'react';
import './Header.css';
function Header (){
    return (
        <header className="header">
            <div className="header-top"> </div>
            <div className='logo'>
                <img src="/image5.jpeg" alt="Logo"/>
            </div>
            <div className='search-bar'>
                <input type="text" placeholder='Pesquisar produtos'/>
            <button>Buscar</button>
            </div>
            <div className='user-options'>
                <a href="#login">olá,faça seu login</a>
                <a href="#carrinho">carrinho</a>

            </div>
        <nav className='navigation'>
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#produtos">produtos</a></li>
                <li><a href="#ofertas">ofertas do dia</a></li>
                <li><a href="#mais-vendidos">Mais vendidos</a></li>
                <li><a href="#contato">contato</a></li>


            </ul>
        </nav>
        </header>


    )
}
export default Header;