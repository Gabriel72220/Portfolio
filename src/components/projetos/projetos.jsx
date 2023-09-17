import React, { useState } from 'react';
import './projetos.scss';
import img from '../img/img.png';
import landingpage from '../img/ladingpage.png';
import automacao from '../img/automacao.png';
import site from '../img/site.png';
import sistema from '../img/sistema.png';
import fasipe from '../img/fasipe.png';
import thermas from '../img/thermas.png';
import sejaevoluir from '../img/sejaevoluir.png';
import ReactModal from 'react-modal';

function Projetos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const categoryToImage = {
    'Landing page': landingpage,
    'Automação': automacao,
    'Site': site,
    'Sistema': sistema,
  };

  const openModal = (category) => {
    setModalIsOpen(true);
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCategory('');
  };

  return (
    <section className="projetos">
      <div className="div-texto-projetos">
        <h1 className="texto-projetos" id="Projetos">
          Projetos
        </h1>
      </div>
      <div className="div-proj">
        {/* Quatro ícones clicáveis com a mesma imagem */}
        <div className="projetos_conteudo">
          <p>Landing pages</p>
          <img
            src={landingpage}
            width="200px"
            height="200px"
            alt="landingpage"
            onClick={() => openModal('Landing page')}
          />
        </div>
        <div className="projetos_conteudo">
          <p>Automações</p>
          <img
            src={automacao}
            width="200px"
            height="200px"
            alt="Automação"
            onClick={() => openModal('Automação')}
          />
        </div>
        <div className="projetos_conteudo">
          <p>Sites</p>
          <img
            src={site}
            width="200px"
            height="200px"
            alt="Site"
            onClick={() => openModal('Site')}
          />
        </div>
        <div className="projetos_conteudo">
          <p>Sistemas</p>
          <img
            src={sistema}
            width="200px"
            height="200px"
            alt="Sistema"
            onClick={() => openModal('Sistema')}
          />
        </div>
      </div>
      <div className="repositorio">
        <a
          href="https://github.com/Gabriel72220?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Repositório GitHub</p>
        </a>
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem Modal"
      >
        <button onClick={closeModal}>X</button>
        {selectedCategory && (
          <div>
            {selectedCategory === 'Landing page' && (
              <div className="elemento_pai">
                
              <div className='projetos_feitos'>
              <img src={fasipe} alt="Fasipe https://fasipe.info" />
              <div className='text'>
                <p>Este é um projeto que desenvolvi para calcular as notas dos alunos na Faculdade FASIPE, utilizando a tecnologia React.js. O projeto apresenta um design simples e segue as diretrizes estabelecidas pelo contratante para o cálculo das notas dos estudantes.</p>
                <p> https://fasipe.info</p>
                </div>
              </div>
              </div>
            )}
            {selectedCategory === 'Automação' && (
              <div className="elemento_pai">
              <div className='projetos_feitos'>
                <img src={img} alt="Automação" />
                <div className='text'>

                </div>
              </div>
              </div>
            )}
            {selectedCategory === 'Site' && (
              <div className="elemento_pai">
                <div className='projetos_feitos'>
                  <img src={img} alt="Site" />
                  <div className='text'>
                  
                  </div>
                </div>
              </div>
            )}
            {selectedCategory === 'Sistema' && (
              <div className="elemento_pai">
                <div className='projetos_feitos'>
                  <img src={thermas} alt="thermas https://lojaingressotermas.com.br" />
                  <div className='text'>
                  
                  
                  <p>Sistema de venda de ingressos desenvolvido a partir das tecnologias React.js e Node.js. Neste projeto, foi priorizada uma abordagem divertida. A funcionalidade de pagamento foi implementada através das APIs da SumUp para cartões de crédito e do PagSeguro para transações via PIX. Além disso, utilizei o Nodemailer para manter os clientes informados sobre o status de suas compras, proporcionando uma experiência completa e conveniente durante o processo de aquisição de ingressos.</p>
                  <p>https://lojaingressotermas.com.br</p>
                  </div>
                </div>

                <div className='projetos_feitos'>

                  <img src={sejaevoluir} alt="Sejaevoluir https://reforcoescolarevoluir.com.br" />
                  <div className='text'>

                  <p>O sistema foi desenvolvido utilizando tecnologias,React para o front-end, Node.js para o back-end e Firebase como banco de dados. Foi utilizado o Asaas como API de pagamento.</p>
                  <br />
                  <h4>Funcionalidades:</h4>
                  <ul>
                    <li>Cadastro de Alunos: Permite registrar informações detalhadas sobre os alunos.</li>
                    <li>Acompanhamento de Pagamentos: Oferece uma visão abrangente dos status de pagamento, identificando quem já pagou e quem ainda precisa efetuar o pagamento.</li>
                    <li>Gerenciamento de Usuários: Possibilita a desativação de alunos ou responsáveis, bem como a edição de informações relevantes.</li>
                    <li>Visualização de Faturas: Apresenta de forma clara as faturas pagas e pendentes para cada aluno.</li>
                    <li>Opção de Pagamento: Para os responsáveis, proporciona a comodidade de pagar as faturas por cartão de crédito ou Pix.</li>
                  </ul>
                  <p>https://www.reforcoescolarevoluir.com.br</p>
                  </div>
                </div>
              </div>


            )}
          </div>
        )}
      </ReactModal>

    </section>
  );
}

export default Projetos;
