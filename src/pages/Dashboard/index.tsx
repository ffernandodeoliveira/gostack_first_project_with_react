import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
          src="https://avatars3.githubusercontent.com/u/1480602?s=460&u=faf1bd53b38d9a7c7f5059ec33fc841db2c99ff6&v=4"
          alt="Fernando de Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
          src="https://avatars3.githubusercontent.com/u/1480602?s=460&u=faf1bd53b38d9a7c7f5059ec33fc841db2c99ff6&v=4"
          alt="Fernando de Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
          src="https://avatars3.githubusercontent.com/u/1480602?s=460&u=faf1bd53b38d9a7c7f5059ec33fc841db2c99ff6&v=4"
          alt="Fernando de Oliveira"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
