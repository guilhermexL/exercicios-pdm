# 📦 Lista de Compras - React Native

Aplicativo simples de gerenciamento de **lista de compras de supermercado**, feito com **React Native + Context API + AsyncStorage**.

## ✨ Funcionalidades

- [x] Criar uma lista ideal de produtos (Dispensa)
- [x] Definir o que precisa ser comprado (Lista)
- [x] Marcar produtos como comprados (Compra)
- [x] Visualizar os produtos já comprados (Comprados)
- [x] Dados salvos localmente entre sessões (persistência com AsyncStorage)
- [x] Navegação por abas (Bottom Tabs)

## 🧱 Estrutura do Projeto

```
projeto/
├── App.js                     # Navegação e inicialização do app
├── context/
│   └── AppContext.js         # Estado global com Context API
├── screens/
│   ├── DispensaScreen.js     # Tela de produtos ideais
│   ├── ListaScreen.js        # Tela de definir o que comprar
│   ├── CompraScreen.js       # Tela de marcar produtos comprados
│   └── CompradosScreen.js    # Tela de itens já comprados
├── package.json              # Dependências do projeto

````
## 🚀 Como rodar o projeto

### 1. Clonar o projeto

```bash
git clone https://github.com/GuilhermexL/lista-compras.git
cd lista-compras
````

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o projeto com Expo

```bash
npx expo start
```

Abra com:

* QR Code no celular com **Expo Go**
* Emulador Android/iOS
* Navegador (interface limitada)

## 📚 Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Context API](https://reactjs.org/docs/context.html)
* [@react-navigation/bottom-tabs](https://reactnavigation.org/)
* [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 🧠 Aprendizados

* Gerenciar estado global com Context
* Persistir dados localmente com AsyncStorage
* Navegar entre telas com Bottom Tabs
* Criar telas responsivas e organizadas

## 🔖 Licença

Projeto acadêmico para fins de aprendizado. Uso livre com créditos.