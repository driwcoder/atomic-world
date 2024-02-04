'use client'

import Image from 'next/image'
import { Courgette } from 'next/font/google'
import {
  GraduationCap,
  LibraryBig,
  Mail,
  ServerIcon,
  Terminal,
  ThumbsUp,
  User2,
} from 'lucide-react'
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import { BiLogoInstagram } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TfiTwitter } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'

import TypingEffect from '@/components/sobre'

const fontCourgette = Courgette({
  subsets: ['latin'],
  weight: ['400'],
})
const hoverCard = 'flex items-center gap-2 hover:text-green-500 cursor-pointer'

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center min-h-[calc(100vh-80px)] justify-between`}
    >
      <div id='homeContent' className='w-full flex flex-col'>
        <div className='flex items-center justify-center'>
          <Image
            width={200}
            height={200}
            src={'/IMG_2.jpg'}
            alt='foto perfil'
            className='rounded-full shadow-external dark:shadow-white shadow-black'
          />
        </div>
        <p className='text-center mt-8'>
          Olá, Sou o Adriano!
          <span className={`block text-2xl ${fontCourgette.className}`}>
            Desenvolvedor React.js
          </span>
        </p>
        <div className='text-start'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem id='sobre_mim' value='sobre_mim'>
              <AccordionTrigger>
                <h3 className='text-lg flex items-center bg-secondary w-fit rounded-sm px-2 gap-2'>
                  <User2 /> Sobre mim
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <TypingEffect />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='tecnologias' value='tecnologias'>
              <AccordionTrigger>
                <h3 className='text-lg flex items-center bg-secondary w-fit rounded-sm px-2 gap-2'>
                  <Terminal /> Tecnologias
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <ul className='flex justify-center gap-5'>
                  <div className='w-[50%] flex flex-col gap-2'>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiReact className='w-8 h-8 point' /> React.js
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          React.js é uma biblioteca JavaScript de código aberto,
                          desenvolvida e mantida pelo Facebook, que permite aos
                          desenvolvedores construir interfaces de usuário para
                          aplicativos de página única. Ele é conhecido por sua
                          eficiência e flexibilidade, permitindo a alteração de
                          dados em tempo real sem a necessidade de recarregar a
                          página. React opera principalmente na camada de
                          visualização de uma aplicação e é frequentemente usado
                          com outras bibliotecas para gerenciar o estado do
                          aplicativo.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiNextdotjs className='w-8 h-8' /> Next.js
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          Next.js 13 é uma estrutura React que introduz uma
                          abordagem redesenhada para roteamento, busca de dados
                          e renderização no servidor. Ele promete enviar menos
                          JavaScript do lado do cliente, ao mesmo tempo que
                          oferece melhorias substanciais na experiência do
                          desenvolvedor ele apresenta uma nova estrutura de
                          diretório de aplicativos que usa Componentes de
                          Servidor por padrão, além disso, o Next.js 13 também
                          abstrai e configura automaticamente as ferramentas
                          necessárias para o React, como agrupamento, compilação
                          e muito mais.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiNodedotjs className='w-8 h-8' /> Node.js
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          Node.js é um ambiente de execução de código aberto e
                          multiplataforma para o desenvolvimento de aplicações
                          de servidor e de rede, as aplicações Node.js são
                          escritas em JavaScript e podem ser executadas no
                          ambiente de execução Node.js em OS X, Microsoft
                          Windows e Linux. Node.js é bem adequado para a
                          fundação de uma biblioteca ou estrutura web. Ele é
                          projetado com streaming e baixa latência em mente,
                          tornando-o eficiente e perfeito para aplicações de
                          tempo real intensivas em dados que são executadas em
                          dispositivos distribuídos. Além disso, quase nenhuma
                          função em Node.js realiza diretamente I/O, então o
                          processo nunca bloqueia, tornando os sistemas
                          escaláveis muito razoáveis para desenvolver em
                          Node.js2.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <ServerIcon className='w-8 h-8' /> Express.js
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          Express.js é um pequeno framework que funciona em cima
                          da funcionalidade do servidor web Node.js para
                          simplificar suas APIs e adicionar novos recursos
                          úteis. Ele facilita a organização da funcionalidade do
                          seu aplicativo com middleware e roteamento, adiciona
                          utilitários úteis aos objetos HTTP do Node.js e
                          facilita a renderização de objetos HTTP dinâmicos.
                          Express.js é muito rápido, essencial, assertivo e
                          moderado, fornece um conjunto robusto de recursos para
                          desenvolver aplicações web e móveis por ser flexível,
                          pois existem inúmeros módulos disponíveis no
                          gerenciador de pacotes do node (npm), que podem ser
                          diretamente conectados ao Express
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  </div>
                  <div className='w-[50%] flex flex-col gap-2'>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiMysql className='w-8 h-8' /> MySQL
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          MySQL é um sistema de gerenciamento de banco de dados
                          relacional (RDBMS) amplamente utilizado. É gratuito e
                          de código aberto, o MySQL é ideal para aplicações
                          pequenas e grandes pois permite implementar um banco
                          de dados com tabelas, colunas e índices garantindo a
                          integridade referencial entre linhas de várias tabelas
                          além de atualizar os índices automaticamente ele
                          também interpreta uma consulta SQL e combina
                          informações de várias tabela
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiMongodb className='w-8 h-8' /> MongoDB
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          MongoDB é um banco de dados orientado a documentos de
                          código aberto que é projetado para armazenar uma
                          grande quantidade de dados e também permite trabalhar
                          com esses dados de maneira muito eficiente pois é um
                          banco de dados NoSQL que usa coleções e documentos em
                          vez de tabelas e linhas como nos bancos de dados
                          relacionais tradicionais. Os documentos consistem em
                          pares de chave-valor que são a unidade básica de dados
                          no MongoDB por ser construído em uma arquitetura de
                          expansão horizontal que usa um esquema flexível para
                          armazenar dados, fornecendo alto desempenho. O suporte
                          para modelos de dados incorporados reduz a atividade
                          de I/O no sistema de banco de dados, assim, os índices
                          suportam consultas mais rápidas e podem incluir chaves
                          de documentos incorporados e arrays.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiGit className='w-8 h-8' /> Git
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          Git é um sistema de controle de versão distribuído que
                          permite rastrear mudanças no código fonte durante o
                          desenvolvimento de um software. Ele é projetado para
                          lidar com tudo, desde pequenos até grandes projetos
                          com velocidade e eficiência. Você pode fazer todas as
                          operações básicas locais, como criar ou clonar um
                          repositório, fazer alterações, colocar essas
                          alterações em estágio e confirmar essas alterações, e
                          visualizar o histórico de todas as alterações pelas
                          quais o repositório passou, além da sua característica
                          matadora que é o seu modelo de ramificação.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                    <li>
                      <HoverCard>
                        <HoverCardTrigger>
                          <div className={hoverCard}>
                            <SiTailwindcss className='w-8 h-8' /> Tailwind.css
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-96'>
                          Tailwind CSS é uma estrutura CSS de código aberto e a
                          principal característica desta biblioteca é que, ao
                          contrário de outras estruturas CSS como o Bootstrap,
                          ela não fornece uma série de classes predefinidas para
                          elementos como botões ou tabelas. Em vez disso, cria
                          uma lista de classes CSS “utilitárias” que podem ser
                          usadas para estilizar cada elemento por meio de
                          combinações. O Tailwind CSS permite construir
                          rapidamente sites modernos sem nunca sair do seu HTML.
                          É uma estrutura CSS utility-first repleta de classes
                          como flex, pt-4, text-center e rotate-90 que podem ser
                          compostas para construir qualquer design, diretamente
                          em seu markup, além de sair na vantagem no que diz
                          respeito a componentes server side, que convenhamos,
                          tomarão em breve o mercado.
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  </div>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='formacao' value='formacao'>
              <AccordionTrigger>
                <h3 className='text-lg flex items-center bg-secondary w-fit rounded-sm px-2 gap-2'>
                  <LibraryBig /> Formação
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div id='educacao formacao'>
                  <div className='flex gap-2 items-center'>
                    <GraduationCap className='w-8 h-8' />
                    <p>DevMedia - Fullstack JavaScript</p>
                  </div>
                  <ul className='list-disc list-inside'>
                    <h4 className='text-lg font-bold'>JavaScript</h4>
                    <li>
                      Uso de bibliotecas e estruturas populares como Express.js,
                      Node.js e React.js.
                    </li>
                    <li>
                      Manipulação e transformação de dados utilizando
                      funcionalidades ES6+ (arrow function, desestruturação,
                      operador de propagação, etc.).
                    </li>
                    <li>
                      Uso de Promises, async/await e tratamento de solicitações
                      assíncronas.
                    </li>
                    <li>
                      Manipulação avançada do DOM (Document Object Model) com
                      JavaScript puro.
                    </li>
                  </ul>
                  <ul className='list-disc list-inside'>
                    <h4 className='text-lg font-bold'>React</h4>
                    <li>Página com multicomponente reutilizáveis.</li>

                    <li>
                      Conhecimento de React Hooks (useState, useEffect,
                      useContext, etc.).
                    </li>
                    <li>Implementação de rotas com React Router.</li>
                    <li>
                      Capacidade de criar e gerenciar rotas usando Express.js ou
                      similar.
                    </li>
                    <li>
                      Experiência na criação e uso de middleware para funções
                      como autenticação, validação de dados, manipulação de
                      erros, etc.
                    </li>
                    <li>
                      Conhecimento em roteamento dinâmico para lidar com
                      parâmetros variáveis na URL.
                    </li>
                  </ul>
                  <ul className='list-disc list-inside'>
                    <h4 className='text-lg font-bold'>API</h4>
                    <li>
                      Conexão com APIs RESTful usando a API Fetch ou bibliotecas
                      como Express, Sequelize, Prisma, ou nativo do Nextjs13.
                    </li>
                    <li>
                      Autenticação e Autorização: Implementação de autenticação
                      e autorização usando JWT (JSON Web Tokens) ou OAuth.
                    </li>
                    <li>
                      Teste de API: Experiência com ferramentas de teste de API
                      como Postman ou Insomnia.
                    </li>
                    <li>
                      Criação de Endpoints: Habilidade para criar endpoints para
                      diferentes operações CRUD (Criar, Ler, Atualizar,
                      Deletar).
                    </li>
                    <li>
                      Manipulação de Erros: Capacidade para lidar adequadamente
                      com erros e retornar respostas apropriadas.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='contato' value='contato'>
              <AccordionTrigger>
                <h3 className='text-lg flex items-center bg-secondary w-fit rounded-sm px-2 gap-2'>
                  <Mail /> Contato
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div id='contato' className='contact'>
                  <p>
                    Tel/Whatsapp:
                    <a
                      href={'https://wa.me/5521965313297'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600'
                    >
                      {' '}
                      +55 (021) 96531-3297
                    </a>
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href='mailto:driwcoder@gmail.com'
                      className='text-blue-600'
                    >
                      driwcoder@gmail.com
                    </a>
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='social' value='social'>
              <AccordionTrigger>
                <h3 className='text-lg flex items-center bg-secondary w-fit rounded-sm px-2 gap-2'>
                  <ThumbsUp /> Redes Sociais
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <div id='medias' className='flex justify-around mt-5 '>
                  <a
                    href='https://www.instagram.com/driwcoder/'
                    target='_blank'
                    className='hover:-translate-y-2 transition-all ease-in hover:text-green-500'
                  >
                    <BiLogoInstagram className='w-8 h-8' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/driwcoder/'
                    target='_blank'
                    className='hover:-translate-y-2 transition-all ease-in hover:text-green-500'
                  >
                    <AiOutlineLinkedin className='w-8 h-8' />
                  </a>
                  <a
                    href='https://twitter.com/driwcoder'
                    target='_blank'
                    className='hover:-translate-y-2 transition-all ease-in hover:text-green-500'
                  >
                    <TfiTwitter className='w-8 h-8' target='_blank' />
                  </a>
                  <a
                    href='https://www.github.com/driwcoder'
                    className='hover:-translate-y-2 transition-all ease-in hover:text-green-500'
                    target='_blank'
                  >
                    <FiGithub className='w-8 h-8' />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}
