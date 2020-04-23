import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/34420396?s=460&u=fa84ff8f80828b9c5620ce8c14db704e64244d78&v=4"
            alt="Evandro Pinheiro"
          />
          <div>
            <strong>ev4ndro/postaltrack</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/34420396?s=460&u=fa84ff8f80828b9c5620ce8c14db704e64244d78&v=4"
            alt="Evandro Pinheiro"
          />
          <div>
            <strong>ev4ndro/postaltrack</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/34420396?s=460&u=fa84ff8f80828b9c5620ce8c14db704e64244d78&v=4"
            alt="Evandro Pinheiro"
          />
          <div>
            <strong>ev4ndro/postaltrack</strong>
            <p>No description, website, or topics provided.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
