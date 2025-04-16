## Descrição da Aplicação

A aplicação **Lv-Studios** é uma loja virtual desenvolvida utilizando o framework **Next.js**. O objetivo principal é oferecer uma experiência de compra online para os usuários, permitindo que eles explorem produtos, visualizem detalhes e realizem compras.

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

## Deploy on Vercel
### [Acesse aqui](https://lv-studios.vercel.app/)
