# Rick and Morty Explorer 🚀

Bem-vindo ao **Rick and Morty Explorer**!

Este projeto foi desenvolvido como parte de um desafio técnico, com o objetivo de consumir uma API pública, exibir dados de forma organizada e aplicar boas práticas de UX/UI para web e mobile.

---

## 📚 Descrição do Projeto

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/), buscando dados de personagens e permitindo ao usuário:

- **Filtrar** personagens por ID, nome, espécie e status.
- **Ordenar** os resultados por qualquer coluna.
- **Controlar** quantos itens são exibidos por página.
- **Navegar** entre páginas (Paginação).
- **Visualizar responsivamente** em qualquer dispositivo (desktop e mobile).

---

## 🛠️ Tecnologias Utilizadas

- **React.js** + **Vite**
- **TailwindCSS** para estilização responsiva
- **Context API** para gerenciamento global de estado
- **Fetch API** para consumo da API Rick and Morty

---

## ⚙️ Como Rodar o Projeto Localmente

### 1. Clone este repositório

### 2. Acesse a pasta do projeto

### 3. Instale as dependências
```bash
npm install
```
> Certifique-se de estar usando Node.js versão 18 ou superior.

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

O projeto ficará disponível em:
```plaintext
http://localhost:5173
```

---

## 📱 Responsividade e Design

Pensado **mobile-first**, garantindo que a experiência em dispositivos móveis seja otimizada:

| Dispositivo | Visual |
|:------------|:--------|
| Desktop     | Tabela tradicional com filtros |
| Mobile      | Cards em grid, filtros verticais, botões grandes |

### Ajustes Mobile:
- Filtros empilhados verticalmente.
- Resultados exibidos em **cards** com sombra e espaçamento.
- Botões otimizados para toque.

---

## 📃 Estrutura de Pastas Principal

```plaintext
src/
 ├── components/
 │   ├── Table/
 │   |   ├──Table.jsx
 |   │   ├── TableHeader.jsx
 |   │   ├── TableRow.jsx
 │   ├── FilterBar/
 │   │   ├── FilterBar.jsx
 └── context/
     └── DataContext.jsx
```
---

## 💬 Contato

- **Desenvolvedor**: Lucas Felinto
- **E-mail**: [lucas.felinto.office@gmail.com]
- **LinkedIn**: [[Linkedin](https://www.linkedin.com/in/lucasvfelinto/)]

---


