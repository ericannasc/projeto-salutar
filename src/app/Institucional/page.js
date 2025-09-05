import estilos from './page.module.css';
import LinksUteis from './componentes/links/linksUteis';
import Estatuto from './componentes/estatuto/estatuto';

export default function Page() {
    return (
        <>
        <div className={estilos.container}>
            <h1>QUEM SOMOS</h1>
            <div className={estilos.quemSomos}>
                <div className={estilos.texto}>
                    <p> Fundada em 16 de novembro de 1995, a <span className={estilos.laranja}>Associação Clube Salutar</span> tem como propósito promover a qualificação profissional em seus próprios estabelecimentos ou em parceria com terceiros, por meio de convênios firmados com outras entidades — priorizando aquelas de caráter assistencial e filantrópico.</p>
                    <p> Nossa missão também abrange o incentivo e a promoção de manifestações culturais e artísticas, sempre com atenção especial à <span className={estilos.laranja}>valorização moral e social </span>da vida humana. </p>
                    <p> A manutenção da Associação Clube Salutar é viabilizada por diferentes fontes de recursos: </p>
                    <ul>
                        <li> Mensalidades pagas pelos associados;</li>
                        <li> Doações; </li>
                        <li> Participações ou remunerações obtidas a partir de contratos e convênios celebrados no desenvolvimento de seus objetivos estatutários. </li>
                    </ul>
                </div>
                <div className={estilos.video}>
                    <iframe width="100%" height="60%"  src="https://www.youtube.com/embed/FCYSvE_FlN8?si=0ZidXlEiAM1C1YCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h2> DIRETORIA </h2>
                    <ul>
                        <li type="square"> Laerte Tavares Lacerda - <strong> Diretor Presidente </strong></li>
                        <li type="square"> Renato Maia Rodrigues - <strong> Diretor </strong></li>
                        <li type="square"> Fabio dos Santos Meziat Lessa - <strong>Diretor </strong></li>
                    </ul>
                </div>
            </div>
        </div>
        <LinksUteis/>
        <Estatuto/>
        </>
        
    );
}