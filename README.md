# Sistema de cadastro WEB utilizando React e FastAPI

Projeto desenvolvido como desafio técnico para o processo seletivo para Estagiário de Desenvolvimento na Pontotel

Para executar essa aplicação é necessário ter instalado os seguintes softwares:

- PostgreSQL
- Python
- NPM

## Como executar o projeto:

- Caso ainda não possua, faça o download do [PostgreSQL](https://www.postgresql.org/) e siga a instalação normalmente
- Execute o software `pgAdmin 4` e crie um database de nome `users_db`

- Clone este repositório
- Abra a pasta `./back-end` e crie um arquivo `.env` com o seguinte parâmetro

  ```
  DB_URL="postgresql://<SEU USUÁRIO NO PostgreSQL>:<SUA SENHA>@<ENDEREÇO DO PostgreSQL>:<PORTA>/users_db"
  ```

- Ainda no mesmo diretório, abra o terminal e instale as dependências do backend com o `pip`
  ```
  pip install -r requirements.txt
  ```
- Execute o seguinte comando para criar definir o banco de dados para a aplicação, e em seguida executar a aplicação do backend

  ```
  python create_db.py

  uvicorn main:app
  ```

  Sua aplicação provavelmente estará rodando no endereço: `http://localhost:8000`

- Abra a pasta `./front-end` e crie um arquivo `.env` com o seguinte parâmetro

  ```
  VITE_API_URL="<ENDEREÇO DA APLICAÇÃO BACKEND>"
  ```

- Em uma outra janela do terminal execute os comandos

  ```
  npm install
  npm run dev
  ```

- Acesse o endereço `http://localhost:3000` no navegador e execute a aplicação

## Correções e Melhorias

Algumas das funcionalidades requeridas não foram possíveis de ser implementadas dentro do prazo solicitado. A seguir estão algumas correções que pode-se implementar visando a melhoria do sistema.

- [ ] Adcionar validação dos campos dos formulários (ex.: formato do e-mail, CPF, NIS, etc. )
- [ ] Fazer tratamento para retorno de erros da API
- [ ] Verificar envio de formulários com campos vazios

## Autor

Criado por Lokisley Oliveira
