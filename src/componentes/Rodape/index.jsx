import estilos from './Rodape.module.css';
import Image from 'next/image';
import logoSalutar from '../../../public/logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"; 
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

export default function Rodape(){ 
    return (
        <div className={estilos.container}>
            <div className={estilos.rodape}>
                <div className={estilos.sobre}>
                    <div className={estilos.logo}>
                        <Image src={logoSalutar} alt="Logo Salutar" title="Logo Salutar"/>
                    </div>
                    <div>
                        <p> Avenida Marechal Floriano, nº 19 – 2º andar </p>
                        <p> Centro – Rio de Janeiro/RJ – CEP 20080-003</p>
                        <p> <strong>CNPJ/MF:</strong> 01.007.362/0001-77</p>
                        <p> <strong>Inscrição Municipal:</strong> 198.429-2</p>
                    </div>
                </div>
                <div className={estilos.contato}>
                    <h3> CONTATOS </h3>
                    <p> <strong>Telefone:</strong> (21) 3550-1350 </p>
                    <p> <strong>E-mail:</strong> atendimento@clubesalutar.org.br </p>
                </div>
                <div className={estilos.redesSociais}>
                    <h3> MÍDIAS SOCIAIS </h3>
                    <Link href="https://www.facebook.com/clubesalutar" target='_blanc'><FaFacebookSquare style={{fontSize: "30px"}}/></Link>
                    <Link href="https://www.instagram.com/clubesalutar" target='_blanc'><FaInstagramSquare style={{fontSize: "30px"}}/></Link>
                    <Link href="https://www.youtube.com/channel/UClGkD5f8NwUu5Pxi48O1_mw" target='_blanc'><FaYoutubeSquare style={{fontSize: "30px"}}/></Link>
                    <Link href="https://www.linkedin.com/company/clube-salutar/" target='_blank'><FaLinkedin style={{fontSize: "30px"}}/></Link>
                </div>
            </div>
            <div className={estilos.linksUteis}>
                <h3> Links Úteis:</h3>
                <Link href="https://lfc.org.br/" target='_blank'> LAR FABIANO DE CRISTO </Link>
                <Link href="https://www.capemisa.com.br/" target='_blank'> CAPEMISA </Link>
                <Link href="https://www.fucap.org.br/" target='_blank'> FUCAP </Link>
                <Link href="https://www.gov.br/susep/pt-br" target='_blank'> SUSEP </Link>
                <Link href="https://www.gov.br/ans/pt-br" target='_blank'> ANS </Link>
                <Link href="https://www.gov.br/previc/pt-br" target='_blank'> PREVIC </Link>
            </div>
            <div className={estilos.desenvolvedor}>
                <span> &copy; 2025 - Associação Clube Salutar | Desenvolvido por: Érica Nascimento </span>
            </div>
        </div>
    ) 
} 