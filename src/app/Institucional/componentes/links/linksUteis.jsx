import estilos from './linksUteis.module.css';
import Image from 'next/image'; 
import Link from 'next/link';
import LFC from '../../../../../public/logos/lfc.png';
import ANS from '../../../../../public/logos/ans.png';
import CAPEMISA from '@/../public/logos/capemisa.png';
import FUCAP from '../../../../../public/logos/fucap.png';
import PREVIC from '../../../../../public/logos/previc.png';
import SUSEP from '../../../../../public/logos/susep.png';

export default function linksUteis() {
    return (
        <>
         <div className={estilos.container}>
            <h1>Links Úteis</h1>
            <div className={estilos.imagens}>
                <Link href='https://lfc.org.br/' target='_blank'> <Image src={LFC} alt='Lar Fabiano de Cristo' title="Lar Fabiano de Cristo" /> </Link>
                <Link href='https://www.capemisa.com.br/' target='_blank'> <Image src={CAPEMISA} alt='Capemisa Seguradora' title="Capemisa Seguradora" /> </Link>
                <Link href='https://www.fucap.org.br/' target='_blank'> <Image src={FUCAP} alt='FUCAP Fundo de Pensão' title="FUCAP Fundo de Pensão" /> </Link>
                <Link href='https://www.gov.br/susep/pt-br' target='_blank'> <Image src={SUSEP} alt='Superintendencia de Seguros Privados' title="Superintendência de Seguros Privados" /> </Link>
                <Link href='https://www.gov.br/ans/pt-br' target='_blank'> <Image src={ANS} alt='Agencia Nacional de Saúde Suplementar' title="Agencia Nacional de Saúde Suplementar" /> </Link>
                <Link href='https://www.gov.br/previc/pt-br' target='_blank'> <Image src={PREVIC} alt='Superintendência Nacional de Previdência Complementar' title="Superintendência Nacional de Previdência Complementar" /> </Link>
            </div>
        </div>
        </>
       
    )
}