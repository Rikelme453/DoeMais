import React, { useState } from 'react';
import './MenuSub.css'

function Menu() {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleItem = (item) => {
        if (expandedItem === item) {
            setExpandedItem(null);
        } else {
            setExpandedItem(item);
        }
    };

    const isItemExpanded = (item) => {
        return expandedItem === item;
    };

    return (
        <div className="menu">
            <ul>
                <li onClick={() => toggleItem('caixinhas')}>Caixinhas</li>
                {isItemExpanded('caixinhas') && (
                    <ul>
                        <li>Caixinhas portáteis</li>
                        <li>Radio retrô</li>
                    </ul>
                )}
                <hr />
            </ul>
            <ul>
                <li onClick={() => toggleItem('calculadoras')}>Calculadoras</li>
                {isItemExpanded('calculadoras') && (
                    <ul>
                        <li>Calculadoras</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('casa')}>Casa decoração e beleza</li>
                {isItemExpanded('casa') && (
                    <ul>
                        <li>abajur</li>
                        <li>beleza</li>
                        <li>cozinha</li>
                        <li>decorarção</li>
                        <li>relógios</li>
                        <li>saúde</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('celulares')}>celulares e acessorios</li>
                {isItemExpanded('celulares') && (
                    <ul>
                        <li>adaptadores</li>
                        <li>cabos</li>
                        <li>capinhas</li>
                        <li>carregadores</li>
                        <li>carregadores portateis</li>
                        <li>smartwatches</li>
                        <li>suporte veicular</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('ferramentas')}>ferramentas</li>
                {isItemExpanded('ferramentas') && (
                    <ul>
                        <li>ferramentas</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('fones')}>fones de ouvido</li>
                {isItemExpanded('fones') && (
                    <ul>
                        <li>fone bluetooth</li>
                        <li>fone com fio</li>
                        <li>headplhone</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('gamers')}>gamers e brinquedo</li>
                {isItemExpanded('gamers') && (
                    <ul>
                        <li>gamers e brinquedo</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('informatica')}>informatica</li>
                {isItemExpanded('informatica') && (
                    <ul>
                        <li>adaptadores</li>
                        <li>cabos</li>
                        <li>gamer</li>
                        <li>mouse</li>
                        <li>teclado</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('lanternas')}>lanternas</li>
                {isItemExpanded('lanternas') && (
                    <ul>
                        <li>lanternas</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('pendrive')}>pendrive e cartao</li>
                {isItemExpanded('pendrive') && (
                    <ul>
                        <li>pendrive e cartao</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('tech')}>+ tech</li>
                {isItemExpanded('tech') && (
                    <ul>
                        <li>tech</li>
                    </ul>
                )}
            </ul>
            <hr />
            <ul>
                <li onClick={() => toggleItem('som')}>TV e som</li>
                {isItemExpanded('som') && (
                    <ul>
                        <li>adaptadores</li>
                        <li>cabos</li>
                    </ul>
                )}
            </ul>
            <hr />
        </div>
    );
}

export default Menu;
