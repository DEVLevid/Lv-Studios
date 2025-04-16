## Descrição da Aplicação

A aplicação **Loja-PW** é uma loja virtual desenvolvida utilizando o framework **Next.js**. O objetivo principal é oferecer uma experiência de compra online para os usuários, permitindo que eles explorem produtos, visualizem detalhes e realizem compras.

## Estrutura do Projeto

A estrutura do projeto segue o padrão de organização do Next.js, com pastas e arquivos bem definidos para facilitar o desenvolvimento e manutenção.

### Principais Diretórios
- **`src/app`**: Contém os arquivos principais da aplicação, como layout, páginas e estilos globais.
- **`src/components`**: Componentes reutilizáveis, como cabeçalho, rodapé, lista de produtos, etc.
- **`src/data`**: Dados estáticos ou mockados utilizados na aplicação.
- **`.next`**: Diretório gerado automaticamente pelo Next.js durante o build ou desenvolvimento.

## Principais Funcionalidades

1. **Página Inicial**
   - Apresenta uma visão geral da loja com uma mensagem de boas-vindas.
   - Exibe produtos em destaque.

2. **Lista de Produtos**
   - Mostra todos os produtos disponíveis na loja.
   - Cada produto é exibido com nome, imagem e preço.

3. **Detalhes do Produto**
   - Ao clicar em um produto, o usuário é redirecionado para uma página com mais informações sobre o item.

4. **Erro Personalizado**
   - Páginas de erro personalizadas para melhorar a experiência do usuário em caso de problemas.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de páginas estáticas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **SCSS**: Pré-processador CSS para estilização.
- **Google Fonts**: Integração com fontes personalizadas (ex.: Roboto).

## Principais Arquivos

1. **`src/app/layout.tsx`**
   - Define o layout principal da aplicação.
   - Inclui o cabeçalho, rodapé e estilos globais.

2. **`src/app/page.tsx`**
   - Página inicial da aplicação.

3. **`src/components/header/header.tsx`**
   - Componente do cabeçalho da aplicação.

4. **`src/components/product/list/productList.tsx`**
   - Componente responsável por exibir a lista de produtos.

5. **`src/data/products.ts`**
   - Dados mockados dos produtos.

## Estilização

Os estilos são organizados em arquivos `.scss` modulares para cada componente. Isso garante isolamento de estilos e evita conflitos.

## Como Executar o Projeto

1. **Pré-requisitos**
   - Node.js instalado na máquina.
   - Gerenciador de pacotes (npm ou yarn).

2. **Passos**
   - Clone o repositório.
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```
   - Acesse a aplicação no navegador em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera o build de produção.
- **`npm start`**: Inicia o servidor em modo de produção.

## Melhorias Futuras

- Implementação de um sistema de carrinho de compras.
- Integração com uma API para dados dinâmicos.
- Adição de autenticação para usuários.

## Contato

Para dúvidas ou sugestões, entre em contato com o desenvolvedor:
- **Nome**: Levid
- **E-mail**: [seu-email@example.com](mailto:seu-email@example.com)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
