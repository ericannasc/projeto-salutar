import estilos from './estatuto.module.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Estatuto() {
    return (
        <>
            <div className={estilos.container}>
                <h1>ESTATUTO DA ASSOCIAÇÃO CLUBE SALUTAR</h1>
                <div className={estilos.estatuto}>
                    <h2>TÍTULO I</h2>
                    <h3>DA DENOMINAÇÃO, SEDE, DURAÇÃO, FINS E PRINCÍPIOS</h3>
                    <h4>CAPÍTULO I</h4>
                    <p><strong>Art. 1º</strong> – A ASSOCIAÇÃO CLUBE SALUTAR, doravante denominada apenas ASSOCIAÇÃO, é uma pessoa jurídica de direito privado, constituída sob a forma de associação, com finalidades: educacional, cultural e assistencial, inspirada nos princípios éticos e filosóficos que informam e fundamentam o bem-estar social e contribuem para a realização do bem comum.</p>
                    <p><strong>Parágrafo Único</strong> – A ASSOCIAÇÃO tem personalidade jurídica distinta dos seus Associados, que não respondem solidária, recíproca ou subsidiariamente pelas obrigações contraídas pela associação.</p>
                    <p><strong>Art. 2º</strong> – A ASSOCIAÇÃO tem sede no Estado do Rio de Janeiro, na Av. Marechal Floriano, 19, 2º andar, 201 – parte, Centro, na Cidade do Rio de Janeiro, CEP: 20080-003, e sua duração é prevista por tempo indeterminado. A ASSOCIAÇÃO pode manter representações fora de sua sede, as quais serão constituídas sob qualquer forma permitida pela legislação brasileira.</p>
                    <p><strong>Art.3º</strong> – A ASSOCIAÇÃO tem por Finalidade: Patrocinar a educação profissionalizante em estabelecimentos próprios ou de terceiros, mediante convênio com outras entidades, dando preferência nesses convênios às de caráter assistencial e filantrópico; apoiar manifestações culturais e artísticas e as promover, com especial atenção para os aspectos de valorização moral e social da vida humana.</p>
                    <p><strong>Art. 4º</strong> – Para a realização de sua Finalidade, poderá a ASSOCIAÇÃO:</p>
                    <ul>
                        <li>I – Contratar produtos ou serviços com seguradoras, entidades de previdência complementar, operadoras ou seguradoras de saúde, instituições financeiras e outras, para seus Associados, familiares e/ou dependentes, cuja adesão e consequente pagamento da contribuição ou prêmio devidos, se dê pelos seus próprios Associados, atuando como estipulante, subestipulante ou instituidor, conforme o caso, nos termos e limites previstos na legislação própria; e</li>
                        <li>II – Participar, em caráter eventual ou permanente, de outras associações ou sociedades de qualquer natureza, sempre com o propósito de que os benefícios auferidos revertam em favor da Finalidade da ASSOCIAÇÃO, conforme definida nos artigos 1º e 3º do presente Estatuto.</li>
                    </ul>
                    <p><strong>Art. 5º</strong> – A fim de preservar o compromisso básico com a sua Finalidade, a ASSOCIAÇÃO se organizará e funcionará de acordo com os seguintes princípios:</p>
                    <ul>
                        <li>I – Acolhimento e incentivo à colaboração técnica de voluntários, ao lado do seu corpo técnico profissional remunerado;</li>
                        <li>II – Vedação da distribuição de parcela do seu patrimônio, ou rendas, a título de vantagem, benefício, bonificação ou participação nos resultados aos seus associados e ao seu pessoal, neste último compreendidos dirigentes, administradores, conselheiros, técnicos, e empregados administrativos;</li>
                        <li>III – Vedação da prestação de serviços remunerados a ASSOCIAÇÃO por membros da Diretoria, que também não podem usufruir, direta ou indiretamente, de vantagem ou benefício econômico, a qualquer título;</li>
                        <li>IV – Aplicação integral no País, para a obtenção de sua Finalidade, dos recursos disponíveis;</li>
                        <li>V – Aplicação das subvenções e dos auxílios recebidos estritamente nos objetivos previstos no ato ou instrumento de concessão;</li>
                        <li>VI - Utilização dos seus bens e direitos somente para realizar a sua Finalidade, sendo permitida à alienação, a cessão, ou a substituição de qualquer bem ou direito para a consecução dos mesmos fins, respeitados os limites das competências estabelecidos no Regulamento Interno.</li>
                    </ul>
                    <h4>CAPÍTULO II<br/>DAS FONTES DE RECURSOS PARA SUA MANUTENÇÃO</h4>
                    <p><strong>Art. 6º</strong> – As fontes de recursos para a manutenção da ASSOCIAÇÃO são:</p>
                    <ul>
                        <li>a) As mensalidades pagas pelos Associados;</li>
                        <li>b) Doações; e</li>
                        <li>c) Participações e ou remunerações obtidas pelos contratos e/ou convênios que firmar no desenvolvimento de seus fins estatutários.</li>
                    </ul>
                    <h2>TÍTULO II<br/>DOS ASSOCIADOS</h2>
                    <h4>CAPÍTULO I<br/>DOS ASSOCIADOS, SEUS DIREITOS E DEVERES</h4>
                    <p><strong>Art. 7º</strong> – A ASSOCIAÇÃO terá três categorias de Associados, a saber:</p>
                    <ul>
                        <li>a) ASSOCIADO FUNDADOR – considera-se Associado Fundador a pessoa natural ou jurídica que constar na Ata de Criação da ASSOCIAÇÃO;</li>
                        <li>b) ASSOCIADO PROPRIETÁRIO – considera-se Associado Proprietário a pessoa natural ou jurídica que detiver título de Associado Proprietário devidamente quitado; e</li>
                        <li>c) ASSOCIADO CONTRIBUINTE – considera-se Associado Contribuinte a pessoa, natural ou jurídica, regularmente inscrita que esteja em dia com o pagamento da mensalidade.</li>
                    </ul>
                    <p><strong>Art. 8º</strong> – Nenhum dos associados terá direito à participação no patrimônio da ASSOCIAÇÃO.</p>
                    <p><strong>Parágrafo Único</strong> – Cada Associado Fundador ou Proprietário terá o direito a um voto nas reuniões da Assembleia Geral.</p>
                    <p><strong>Art. 9º</strong> – A admissão do Associado se dará:</p>
                    <ul>
                        <li>I – Quanto ao Associado Fundador, no momento em que foi criada a ASSOCIAÇÃO;</li>
                        <li>II – Quanto ao Associado Proprietário, a partir do momento que adquirir e efetuar o integral pagamento do título de Associado proprietário;</li>
                        <li>III – Quanto ao Associado Contribuinte no momento em que tiver sua proposta de inscrição aceita pela Diretoria da ASSOCIAÇÃO.</li>
                    </ul>
                    <p><strong>Art. 10º</strong> – São direitos de todos os Associados:</p>
                    <ul>
                        <li>I – Participar das atividades educacionais, sociais, recreativas e culturais da ASSOCIAÇÃO;</li>
                        <li>II – Utilizar dos serviços e produtos contratados pela ASSOCIAÇÃO, mediante o pagamento da contribuição específica e desde que atendidas às normas técnicas e condições previstas em cada caso para a sua aceitação;</li>
                        <li>III – O Associado somente terá direito a usar os serviços e produtos não-gratuitos para os quais tenha contribuído previamente, ou ainda aqueles em que o pagamento da contribuição tenha sido feita por terceiro em seu favor;</li>
                        <li>IV – O Associado exigirá diretamente das empresas que se obrigaram, mediante contrato de serviços e produtos oferecidos, o cumprimento das obrigações contratadas, não respondendo à ASSOCIAÇÃO direta nem subsidiariamente pelo inadimplemento dos Associados ou das empresas contratadas.</li>
                    </ul>
                    <p><strong>Parágrafo Único</strong> – Se, contrariamente ao disposto no inciso IV deste artigo, a ASSOCIAÇÃO vier a sofrer, por alguma eventualidade, prejuízo em decorrência do inadimplemento do Associado, este ressarcirá imediatamente a ASSOCIAÇÃO, sem embargo das sanções aplicáveis.</p>
                    <p><strong>Art. 11</strong> – Além daqueles previstos no Art. 10 deste Estatuto, são direitos dos Associados Proprietários:</p>
                    <ul>
                        <li>I – Desde que em dia com suas obrigações sociais, participar e votar nas Assembleias Gerais;</li>
                        <li>II – Ser elegível para os cargos de Diretoria.</li>
                        <li>III – Transferir seu(s) Título(s) à Associação, que o(s) reembolsará integralmente no valor atribuído a este(s) título(s).</li>
                    </ul>
                    <p><strong>Parágrafo Primeiro</strong> – Somente serão admitidas transferências do(s) Título(s) de Associados Proprietários para a Associação Clube Salutar, sendo expressamente vedada a transferência a outros associados ou a terceiros.</p>
                    <p><strong>Parágrafo Segundo</strong> – A transferência do(s) Título(s) de Associado Proprietário à Associação não importará na perda ou transmissão dos direitos relativos à prestação de serviços ou produtos contratados pela Associação, dos quais seja titular o Associado, desde que este permaneça na qualidade de Associado Contribuinte.</p>
                    <p><strong>Parágrafo Terceiro</strong> – No caso de óbito do Associado Proprietário, seu(s) Título(s) será(ão) transferido(s) à Associação Clube Salutar que o(s) reembolsará(ão) ao espólio ou aos respectivos herdeiros legais, em valor atribuído a este(s) títulos.</p>
                    <p><strong>Parágrafo Quarto</strong> – Em caso de óbito do Associado Proprietário, o direito ao voto correspondente ao(s) seu(s) Título(s) ficará(ão) suspenso(s) até que a ASSOCIAÇÃO destine o(s) respectivo(s) Título(s) a outra pessoa física que tornar-se-á Associado Proprietário.</p>
                    <p><strong>Art. 12</strong> – Além daqueles previstos no Art. 10 deste Estatuto, são direitos dos Associados Fundadores, desde que em dia com suas obrigações sociais, participar e votar nas Assembleias Gerais.</p>
                    <p><strong>Art. 13</strong> – São deveres de todos os Associados:</p>
                    <ul>
                        <li>I – Pagar, previamente ao período de uso do produto ou serviço, à entidade responsável pelo cumprimento da obrigação, ou a quem for indicado no contrato, nos termos ali previstos, a contribuição do produto ou serviço a que aderiu;</li>
                        <li>II – Cumprir integralmente as obrigações assumidas perante a ASSOCIAÇÃO e perante terceiros fornecedores de produto ou serviço contratado pela ASSOCIAÇÃO;</li>
                        <li>III – Cumprir as normas estabelecidas neste Estatuto e o que for deliberado pela Diretoria;</li>
                        <li>IV – Agir com a mais estrita boa-fé em suas ações, principalmente quando prestar declarações ou informações a ASSOCIAÇÃO ou a terceiros que tenham contratado com aquela, não omitindo a ocorrência de fatos ou circunstâncias que interfiram ou possam interferir na aceitação ou dimensionamento dos produtos ou serviços contratados, bem como onerar de qualquer forma a ASSOCIAÇÃO.</li>
                    </ul>
                    <p><strong>Art. 14</strong> – São nulas de pleno direito quaisquer obrigações e responsabilidades assumidas pelos Associados em nome da ASSOCIAÇÃO, respondendo ainda o culpado pelas perdas e danos cabíveis na espécie.</p>
                    <h4>CAPÍTULO II<br/>DA EXCLUSÃO DOS ASSOCIADOS</h4>
                    <p><strong>Art. 15</strong> – Os Associados serão excluídos do quadro social nos seguintes casos:</p>
                    <ul>
                        <li>I – A pedido do próprio Associado;</li>
                        <li>II – Automaticamente, por falta de pagamento de três mensalidades consecutivas;</li>
                        <li>III – Mediante ato da Diretoria, por infração de qualquer dever previsto nesse Estatuto ou, ainda, na ocorrência de qualquer outra situação que configure justa causa, definida no Regulamento Interno e nos termos da legislação em vigor, assegurado ao Associado o direito de apresentar defesa prévia, bem como interpor recurso à Assembleia Geral.</li>
                    </ul>
                    <p><strong>Parágrafo Primeiro</strong> – Também será motivo de exclusão de Associado(s) Proprietário(s) a falta, sem justificativa razoável, conforme definida no Regulamento Interno, a (3) três Assembleias consecutivas ou a 5(cinco) alternadas.</p>
                    <p><strong>Parágrafo Segundo</strong> – Na hipótese de exclusão do Associado proprietário, seu(s) título(s) será(ão), transferido(s) à Associação, que o(s) reembolsará ao Associado excluído no valor atribuído a este(s) título(s).</p>
                    <p><strong>Parágrafo Terceiro</strong> – As regras previstas neste capítulo não se aplicam aos Associados Fundadores.</p>
                    <h2>TÍTULO III<br/>CONSTITUIÇÃO E FUNCIONAMENTO DOS ÓRGÃOS DELIBERATIVOS E ADMINISTRATIVOS</h2>
                    <h4>CAPÍTULO I<br/>DOS ÓRGÃOS DA ASSOCIAÇÃO</h4>
                    <p><strong>Art. 16</strong> – São órgãos da ASSOCIAÇÃO:</p>
                    <ul>
                        <li>I – ASSEMBLEIA GERAL;</li>
                        <li>II – DIRETORIA.</li>
                    </ul>
                    <p><strong>Parágrafo Primeiro</strong> – Os integrantes da Diretoria exercerão os seus cargos e funções gratuitamente e estão dispensados de caução.</p>
                    <p><strong>Parágrafo Segundo</strong> – Ao ocupante de cargo de Direção é vedado manter, como subordinado direto, cônjuge ou parente, natural ou afim.</p>
                    <h4>SEÇÃO I<br/>DA ASSEMBLEIA GERAL</h4>
                    <p><strong>Art. 17</strong> – Os Associados Fundadores e Proprietários, que estiverem em dia com suas obrigações sociais, reunir-se-ão, em Assembleia Geral Ordinária, até o dia 31 de março de cada ano, e em Assembleia Geral Extraordinária quando convier aos interesses sociais.</p>
                    <p><strong>Parágrafo Primeiro</strong> – As Assembleias Gerais serão convocadas por iniciativa de quaisquer dos Diretores ou a requerimento subscrito por, no mínimo, 1/5 (um quinto) de todos os Associados Fundadores e Proprietários.</p>
                    <p><strong>Parágrafo Segundo</strong> – As Assembleias Gerais se instalarão, em primeira convocação, com a representação mínima de 3/5 (três quintos) de todos os Associados Fundadores e Proprietários e, em segunda convocação, representação mínima de 1/3 (um terço) de todos os Associados Fundadores e Proprietários.</p>
                    <p><strong>Parágrafo Terceiro</strong> – A Assembleia Geral poderá ser realizada por meio eletrônico/digital, respeitados os direitos legalmente previstos de participação e de manifestação, assegurados a identificação dos participantes, o voto e os demais requisitos regulamentares.</p>
                    <p><strong>Art. 18º</strong> – O Associado poderá representar-se nas Assembleias Gerais por procurador legalmente constituído, desde que este tenha também a qualidade de Associado Proprietário ou Fundador.</p>
                    <p><strong>Art. 19</strong> – As Assembleias Gerais serão convocadas por edital publicado, por carta ou mediante qualquer meio físico ou eletrônico que permita comprovar o seu recebimento pelo destinatário, com antecedência mínima de 5 (cinco) dias.</p>
                    <p><strong>Parágrafo Único</strong> – A convocação, independente do meio utilizado deverá conter, obrigatoriamente, o sumário da “Ordem do Dia”.</p>
                    <p><strong>Art. 20</strong> – Na hora marcada para a reunião, depois de assinarem o livro competente, quando presencial, ou confirmada a presença por chamada, quando por meio eletrônico/digital, os Associados presentes nas Assembleias Gerais escolherão, por eleição ou por aclamação, um Presidente e um Secretário, que constituirão a mesa, cabendo a esta abrir, orientar e encerrar os trabalhos de acordo com a “Ordem do Dia”.</p>
                    <p><strong>Art. 21</strong> – Compete privativamente à Assembleia Geral Ordinária:</p>
                    <ul>
                        <li>I – Eleger os membros da Diretoria, em conjunto;</li>
                        <li>II – Aprovar o balanço patrimonial e as contas da ASSOCIAÇÃO.</li>
                    </ul>
                    <p><strong>Art. 22</strong> – Compete à Assembleia Geral Extraordinária:</p>
                    <ul>
                        <li>I – Destituir os membros da Diretoria;</li>
                        <li>II – Eleger, para completar o mandato, o substituto de qualquer membro da Diretoria no caso de falecimento, renúncia, destituição, impedimento ou licença que impeça o exercício régular de seu cargo;</li>
                        <li>III – Exercer:
                            <ul>
                                <li>a) A fiscalização e o controle dos atos da Diretoria;</li>
                                <li>b) O poder disciplinar, julgando os recursos interpostos de decisões da Diretoria.</li>
                            </ul>
                        </li>
                        <li>IV – Promover revisão, alteração ou reforma estatutária;</li>
                        <li>V – Autorizar a cessão, substituição ou alienação de bens ou direitos acima dos limites de alçada estabelecidos no Regulamento Interno;</li>
                        <li>VI – Deliberar sobre a constituição de reservas não estatutárias ou legais;</li>
                        <li>VII – Examithar, debater e deliberar sobre quaisquer outros assuntos de interesse Social.</li>
                    </ul>
                    <p><strong>Art. 23</strong> – As deliberações da Assembleia Geral serão tomadas pelos votos de 3/5 (três quintos) de todos os Associados Fundadores e Proprietários, nos casos em que o Estatuto ou a lei não dispuserem em contrário.</p>
                    <p><strong>Parágrafo Único</strong> – Para deliberação da dissolução da ASSOCIAÇÃO é exigido voto concorde de 4/5 (quatro quintos) da totalidade dos Associados Proprietários e Fundadores, em Assembleia especialmente convocada para esse fim.</p>
                    <p><strong>Art. 24</strong> – Das Assembleias Gerais, e do que nelas for tratado, se lavrarão atas, podendo-se adotar a forma resumida, em livro próprio, cujas páginas serão numeradas na ordem crescente dos números inteiros.</p>
                    <h4>SEÇÃO II<br/>DA DIRETORIA</h4>
                    <p><strong>Art. 25</strong> – A ASSOCIAÇÃO será dirigida pela Diretoria, composta de 3 (três) membros, obrigatoriamente escolhidos entre os Associados Proprietários pessoas naturais, sem 1 (um) Diretor-Presidente e dois Diretores, eleitos em conjunto, em Assembleia Geral Ordinária.</p>
                    <p><strong>Parágrafo Primeiro</strong> – As atribuições específicas dos dois Diretores previstos neste artigo serão definidas pelo Diretor-Presidente em Reunião de Diretoria.</p>
                    <p><strong>Parágrafo Segundo</strong> – É de três anos o mandato dos membros da Diretoria, sendo permitida a reeleição.</p>
                    <p><strong>Art. 26</strong> – Além do dever primordial de administrar a ASSOCIAÇÃO, compete à Diretoria:</p>
                    <ul>
                        <li>I – Estabelecer a estrutura interna de funcionamento da Associação e as atribuições dos seus órgãos operacionais;</li>
                        <li>II – Exercer o controle interno das atividades da ASSOCIAÇÃO, nos termos do Estatuto;</li>
                        <li>III – Promover a prestação de contas, bem como elaborar e apresentar a proposta orçamentária e o plano de atividades para o exercício seguinte;</li>
                        <li>IV – Baixar normas e estabelecer procedimentos para o adequado funcionamento da ASSOCIAÇÃO, no tocante aos assuntos administrativos, financeiros, de pessoal e serviços gerais, culturais e promocionais;</li>
                        <li>V- Gerir o Património da ASSOCIAÇÃO;</li>
                        <li>VI – Criar assessorias especiais, de natureza permanente ou temporária;</li>
                        <li>VII- Exercer o poder disciplinar, subordinado, porém, à Assembleia Geral, que receberá e apreciará recursos que visem a impugnação de atos praticados pela Diretoria.</li>
                    </ul>
                    <p><strong>Parágrafo Único</strong> – São reservadas à Diretoria outras atribuições que não lhe sejam vedadas por este Estatuto e se compreendam no âmbito natural de sua competência de administração e direção da ASSOCIAÇÃO.</p>
                    <p><strong>Art. 27</strong> – A Diretoria decide por consenso dos seus membros. Não havendo consenso, a matéria será submetida à deliberação da Assembleia Geral.</p>
                    <h4>SUBSEÇÃO I<br/>DO DIRETOR-PRESIDENTE</h4>
                    <p><strong>Art. 28</strong> – Ao Diretor-Presidente compete dirigir a ASSOCIAÇÃO de acordo com o disposto neste Estatuto e com as deliberações da Assembleia Geral e da própria Diretoria.</p>
                    <p><strong>Parágrafo Primeiro</strong> – O Diretor-Presidente representa a ASSOCIAÇÃO ativa e passivamente, judicial e extrajudicialmente, cabendo-lhe ainda:</p>
                    <ul>
                        <li>I – Assinar ato, documento ou correspondência em nome da ASSOCIAÇÃO, ou que implique obrigação ou responsabilidade institucional, podendo delegar a outro Diretor ou a funcionário, quando for o caso, ressalvada a necessidade de obtenção de prévia autorização da Assembleia Geral nas hipóteses contempladas no art. 22, inciso V, deste Estatuto;</li>
                        <li>II – Movimentar as contas bancárias e outras, bem como assinar cheques juntamente com outro membro da Diretoria ou funcionário, neste caso com procuração específica;</li>
                        <li>III – Assinar, em nome da ASSOCIAÇÃO, comprovantes de recebimento de auxílios, subvenções, contribuições diversas e doações.</li>
                        <li>IV – Aprovar:
                            <ul>
                                <li>a) A aquisição de bens móveis, de produtos e contratação de serviços, de acordo com o orçamento;</li>
                                <li>b) A tabela de mensalidades para ingresso de Associados Contribuintes;</li>
                                <li>c) Os critérios para a fixação e reajustes de mensalidade;</li>
                                <li>d) Os convênios, contratos, programas e projetos em geral, principalmente para a execução de programas promocionais, tudo em consonância com os critérios determinados pela Assembleia Geral;</li>
                                <li>e) A admissão e a dispensa do pessoal empregado;</li>
                                <li>f) As publicações e comunicações externas.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><strong>Parágrafo Segundo</strong> – O Diretor-Presidente deverá indicar por escrito o Diretor que o substituirá em suas faltas e impedimentos legais, ocasionais e temporários, podendo ainda delegar a outro membro da Diretoria atribuição específica de sua competência.</p>
                    <h4>CAPÍTULO Il<br/>DO PATRIMÓNIO E SUA DESTINAÇÃO</h4>
                    <p><strong>Art. 29</strong> – O patrimônio da ASSOCIAÇÃO é constituído de todos os direitos, bens, créditos e débitos de que for titular, somente podendo ser utilizado para os fins estatutários.</p>
                    <p><strong>Art. 30</strong> – No caso de extinguir-se a ASSOCIAÇÃO, o patrimônio remanescente, depois de atendidas as obrigações existentes, inclusive as doações condicionadas, se as houver, e reembolsadas as quotas sociais pertencentes aos Associados Proprietários, será incorporado ao patrimônio de entidade filantrópica, devidamente habilitada junto aos Órgãos Públicos, que for indicada na deliberação ou ato de extinção, pela Assembleia.</p>
                    <p>Se tal não couber, o patrimônio será destinado pela Assembleia a instituição congênere, pública ou privada, devidamente constituída, que seja capaz de manter atividades da ASSOCIAÇÃO e que possua sede preferencialmente na cidade do Rio de Janeiro.</p>
                    <h4>CAPÍTULO II<br/>DO REGIME FINANCEIRO</h4>
                    <p><strong>Art. 31</strong> – O exercício social da Associação Clube Salutar coincidirá com o ano civil, iniciando-se em 1º de janeiro e findando em 31 de dezembro de cada ano e o orçamento, uno e anual, será elaborado de acordo com as normas usuais.</p>
                    <p><strong>Art. 32</strong> – A prestação de contas anual abrange, entre outros, os seguintes elementos:</p>
                    <ul>
                        <li>I – Balanço patrimonial, elaborado de acordo com os princípios e as convenções contábeis vigentes no País, demonstrando as posições ativas, passivas e de resultado da ASSOCIAÇÃO, com os seguintes anexos:
                            <ul>
                                <li>a) demonstração da evolução do património líquido da ASSOCIAÇÃO, no período; e</li>
                                <li>b) demonstração das receitas e despesas apuradas no período.</li>
                            </ul>
                        </li>
                        <li>II – Relatório de atividades da Diretoria, acompanhado de notas explicativas, contendo informações sobre fatos relevantes relacionados com atividades e programas assistenciais e culturais em andamento.</li>
                    </ul>
                    <h4>CAPÍTULO IV<br/>DAS DISPOSIÇÕES GERAIS</h4>
                    <p><strong>Art. 33</strong> – Os casos omissos nesse Estatuto e os que venham a ser objeto de dúvidas Sara resolvidos pela Assembleia Geral, de forma soberana.</p>
                    <p><strong>Art. 34</strong> – Esse Estatuto entra em vigor a partir da data de sua aprovação pela Assembleia Geral.</p>
                    <p>Rio de Janeiro, 18 de outubro de 2022<br/>
                    Laerte Lacerda Tavares – Presidente<br/>
                    Rodrigo Costa Rampini – Secretário</p>
                </div>
                <p> O estatuto da Associação Clube Salutar também está disponível para Download em PDF!</p>
                <Link href="https://www.clubesalutar.org.br/wp-content/uploads/2023/01/estatuto-da-associacao-clube-salutar-181022-com-Registro.pdf" target='_blank'><FaCloudDownloadAlt size={32}/> Estatuto Clube Salutar </Link>
            </div>
        </>
    );
}