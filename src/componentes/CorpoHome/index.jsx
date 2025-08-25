import estilos from "./CorpoHome.module.css";
import Image from "next/image";
import capacitacao from "../../../public/capacitacao.jpg";
import gastronomia from "../../../public/imgCursos/gastronomia.jpg";
import costura from "../../../public/imgCursos/costura.jpg";
import tecnologia from "../../../public/imgCursos/tecnologia.jpg";
import cuidador from "../../../public/imgCursos/cuidador.jpeg";
import eletrica from "../../../public/imgCursos/eletrica.jpg";
import estetica from "../../../public/imgCursos/cabelereiro.jpeg";
import familia from "../../../public/salutarFamilia.png";
import plus from "../../../public/salutarPlus.png";
import prev from "../../../public/salutarPrev.png";
import serv from "../../../public/salutarServ.png";

export default function CorpoHome() {
  return (
    <>
    <div className={estilos.container}>
        <div className={estilos.boasVindas}>
            <h1> Seja bem-vindo(a) à <span className={estilos.destaqueLaranja}>Associação Clube Salutar!</span></h1>
            <p> Somos uma associação dedicada a transformar vidas por meio da educação. Acreditamos que o conhecimento é a ferramenta mais poderosa para romper o ciclo da pobreza e construir um futuro mais justo e promissor.</p>
            <p> Nosso principal objetivo é promover projetos sociais focados na educação para pessoas em situação de vulnerabilidade social. Através de programas cuidadosamente planejados, buscamos oferecer acesso a oportunidades de aprendizado, desenvolvimento de habilidades e, acima de tudo, esperança.</p>
            <p> No Clube Salutar, cada recurso é investido diretamente na criação e manutenção de iniciativas que impactam positivamente a vida de crianças, jovens e adultos. Seja apoiando o acesso a materiais didáticos de qualidade, financiando cursos ou proporcionando atividades extracurriculares enriquecedoras, nosso compromisso é com a inclusão e a dignidade humana. </p>
            <div className={estilos.destaque}>
                <em> Junte-se a nós nessa jornada! Com seu apoio, podemos expandir nosso alcance e levar educação de qualidade a quem mais precisa. Vamos construir um futuro salutar, juntos! </em>
            </div>
        </div>
        <div className={estilos.projetos}>
            <div className={estilos.containerTexto}>
                <h2> Capacitação para o Futuro: <span className={estilos.destaqueLaranja}>A Chave para a Inclusão no Mercado de Trabalho</span> </h2>
                <p> Acreditamos no poder transformador da educação. Em um mercado de trabalho cada vez mais competitivo, as habilidades certas são a porta de entrada para oportunidades, dignidade e independência financeira.</p>
                <p>Nosso propósito é impulsionar a inserção de pessoas em situação de vulnerabilidade social no mercado de trabalho, oferecendo cursos de desenvolvimento de habilidades práticos e focados nas demandas atuais. Mais do que apenas ensinar, nós capacitamos, fortalecemos a autoconfiança e conectamos talentos a empresas que valorizam o potencial humano. </p>
            </div>
            <div className={estilos.containerImagem}>
                <figure>
                    <Image src={capacitacao} alt="Capacitação Profissional" title="Capacitação Profissional"/>
                    <figcaption> Aprendendo Planilhas Eletrônicas - Curso de Informática Essencial </figcaption>
                </figure>
            </div>
        </div>
        <div className={estilos.segmentos}>
            <p> Para atender às necessidades do mercado e aos talentos de nossos alunos, oferecemos cursos em áreas de grande demanda: </p>
            <table>
                <caption> SEGMENTOS DE ATUAÇÃO </caption>
                <thead>
                    <tr>
                        <th>Segmento</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Tecnologia </td>
                        <td>Para dominar as ferramentas digitais essenciais e as competências do futuro.</td>
                    </tr>
                    <tr>
                        <td> Têxtil </td>
                        <td> Qualificando profissionais para a indústria da moda, confecção e empreendedorismo.</td> 
                    </tr>
                    <tr>
                        <td> Instalações Prediais </td> 
                        <td> Formando técnicos em uma área de alta empregabilidade e necessidade constante.</td>  
                    </tr>
                    <tr>
                        <td> Gastronomia </td>   
                        <td> Desenvolvendo habilidades culinárias para atuar na indústria alimentícia.</td>
                    </tr>
                    <tr>
                        <td> Beleza e Estética </td>
                        <td> Capacitando profissionais para o crescente setor de serviços pessoais.</td>
                    </tr>
                    <tr>
                        <td> Cuidador de Pessoa Idosa </td>
                        <td> Preparando para uma área com demanda social e profissional em constante crescimento.</td>
                    </tr>
                </tbody>
            </table>
            <p> Junte-se a nós e seja parte dessa mudança! </p>
        </div>

        <div className={estilos.projetosSociais}>
            <h2> Projetos Sociais </h2>
            <p> Conheça nossos projetos sociais que fazem a diferença na vida de muitas pessoas. Cada iniciativa é um passo em direção a um futuro mais justo e igualitário! </p>
            <div className={estilos.containerFotos}>
                <figure>
                    <Image src={gastronomia} alt="Gastronomia" title="Gastronomia"/>
                    <figcaption> Projeto Salutar - CDH Gastronomia - Casa de Irmão Palminha </figcaption>
                </figure>
                <figure>
                    <Image src={tecnologia} alt="Tecnologia" title="Tecnologia"/>
                    <figcaption> Projeto Salutar - CDH Tecnologia - Casa de Francisco de Assis </figcaption>
                </figure>
                <figure>
                    <Image src={cuidador} alt="Cuidador de Idosos" title="Cuidador de Idosos"/>
                    <figcaption> Projeto Salutar - CDH Cuidador de Pessoa Idosa - Casa de Francisco de Assis </figcaption>
                </figure>
                <figure>
                    <Image src={eletrica} alt="Instalações Elétricas" title="Instalações Elétricas"/>
                    <figcaption> Projeto Salutar - CHD Instalações Prediais - Casa de Francisco de Assis </figcaption>
                </figure>
                <figure>
                    <Image src={estetica} alt="Beleza e Estética" title="Beleza e Estética"/>
                    <figcaption> Projeto Salutar - CHD Beleza e Estética - Casa de Renato </figcaption>
                </figure>
                 <figure>
                    <Image src={costura} alt="Costura" title="Costura"/>
                    <figcaption> Projeto Salutar - CHD Textil - Casa de Cirilo </figcaption>
                </figure>
            </div> 
        </div>

        <div className={estilos.produtos}>
            <h2> Conheça nossos produtos </h2>
            <p> Como associado do Clube Salutar, você tem acesso a diversos produtos exclusivos e ainda contribui para o bem-estar e promoção social de diversas famílias que são beneficiadas com nossos projetos de formação profissional. Veja, abaixo, alguns de nossos produtos e associe-se hoje mesmo! </p>
            <div className={estilos.containerCards}>
                <div className={estilos.card}>
                    <Image src={familia} alt="Salutar Família" title="Salutar Família"/>
                    <p> Seguro de vida, assistência flex e sorteio mensal. </p>
                </div>
                <div className={estilos.card}>
                    <Image src={plus} alt="Salutar Plus" title="Salutar Plus"/>
                    <p> Seguro de Vida e Assistência Funeral.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={prev} alt="Salutar Prev" title="Salutar Prev"/>
                    <p> Seguro de vida que garante o pagamento da indenização correspondente ao capital segurado. </p>
                </div>
                <div className={estilos.card}>
                    <Image src={serv} alt="Salutar Serv" title="Salutar Serv"/>
                    <p> O plano de previdência da Associação Clube Salutar. </p>
                </div>
            </div>
        </div>
      
    </div>
    </>
  );
}