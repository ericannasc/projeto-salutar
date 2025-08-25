'use client';
import { useState } from 'react';
import estilos from './Topo.module.css';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Topo () {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className={estilos.container}>
            <div className={estilos.topo}>
                <Link href="/"><Image src={logo} alt='logo-Salutar' title='logo-Salutar'/></Link>
                <button className={estilos.menuSanduiche} onClick={() => setMenuAberto(!menuAberto)} title="Abrir menu">
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={`${estilos.links} ${menuAberto ? estilos.aberto : ''}`}>
                    <Link href="">Institucional</Link>
                    <Link href="">Atividade Social</Link>
                    <Link href="">Produtos</Link>
                    <Link href="">Convênios</Link>
                    <Link href="">Transparência</Link>
                    <Link href="">Fale Conosco</Link>
                </nav>
            </div>
        </div>
    );
} 