# 📊 Calculadora de IMC - Índice de Massa Corporal

Uma aplicação web full-stack para cálculo de Índice de Massa Corporal (IMC) com classificação automática de saúde.

## 🎯 Objetivo

Fornecer uma ferramenta simples e intuitiva para calcular o IMC de um indivíduo com base em seu peso e altura, exibindo a classificação de saúde com feedback visual por cores.

## 🏗️ Arquitetura do Projeto

```
imc/
├── back/                 # API Backend (JSON Server)
│   ├── package.json
│   └── db.json          # Base de dados JSON
│
├── front/               # Aplicação Frontend (React + Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Components/  # Componentes React
│   │   ├── services/    # Requisições HTTP
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **json-server** - API REST baseada em JSON
- **Port**: 5001

### Frontend
- **React 19** - Biblioteca UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Axios** - Cliente HTTP
- **ESLint** - Linter de código

## 📋 Escalas de IMC

O aplicativo classifica o IMC conforme a tabela abaixo:

| Classificação | IMC | Cor |
|---|---|---|
| Magreza | < 18,5 kg/m² | 🔵 Azul |
| Eutrofia (Normal) | 18,5 - 24,9 kg/m² | 🟢 Verde |
| Sobrepeso | 25 - 29,9 kg/m² | 🟡 Âmbar |
| Obesidade Grau I | 30 - 34,9 kg/m² | 🟠 Laranja |
| Obesidade Grau II | 35 - 40 kg/m² | 🔴 Vermelho |
| Obesidade Grau III | > 40 kg/m² | 🟣 Vermelho Escuro |

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd imc
   ```

2. **Instale as dependências do Backend**
   ```bash
   cd back
   npm install
   ```

3. **Instale as dependências do Frontend**
   ```bash
   cd ../front
   npm install
   ```

### Executar a Aplicação

**Terminal 1 - Backend (JSON Server)**
```bash
cd back
npm start
```
A API estará disponível em `http://localhost:5001`

**Terminal 2 - Frontend (Vite Dev Server)**
```bash
cd front
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

**Frontend**
```bash
cd front
npm run build
```
A build será salva em `front/dist/`

## 📝 Funcionalidades

✅ Cálculo automático de IMC  
✅ Classificação de saúde com cores  
✅ Histórico de cálculos  
✅ Interface responsiva  
✅ Validação de entrada  
✅ Persistência de dados  

## 🎨 Interface

- **Seção de Cálculo**: Entrada de nome, peso e altura
- **Resultados**: Exibição de IMC com classificação colorida
- **Histórico**: Lista de cálculos anteriores

## 🔧 Desenvolvimento

### Lint de Código
```bash
cd front
npm run lint
```

### Preview de Build
```bash
cd front
npm run preview
```

## 📌 Notas Importantes

- O campo de altura aceita tanto ponto (.) quanto vírgula (,) como separador decimal
- Todos os campos são obrigatórios para calcular o IMC
- O botão "Calcular" é desabilitado até que todos os campos sejam preenchidos
- Os dados são salvos na base JSON do backend

## 👨‍💻 Autor

Renato Di Giacomo

## 📄 Licença

ISC

---

**Última atualização**: Novembro de 2025
