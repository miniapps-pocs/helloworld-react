<p align="center">
    <img src="https://img.shields.io/badge/poc-v0.1.0-yellow" />
    <img src="https://img.shields.io/npm/types/@types/react?label=@react" />
    <img src="https://img.shields.io/npm/types/@types/react-dom?label=@react-dom" />
    <img src="https://img.shields.io/librariesio/release/npm/mobx?label=mobx" />
</p>

# poc helloworld-react
A ideia dessa POC é estudar a possibilidade do uso de um padrão de desenvolvimento com react js, mais precisamente com o padrão MVVM com modelo de navegação SPA.

A Ideia da poc e criar um componente principal que faça navegação e trafegue valores  entre dois componentes.

Segundo ideia do uso de MVVM a estrutura inicial terá a seguinte estrutura.


- App
    - FirstView
        - FirstViewModel    
    - SecondView
        - SecondViewModel
- Model
    - FirstModel
    - SecondModel

### Considerações
Embora eu tenha experiência em desenvolvimento web o react para mim é um paradigma diferente, então, pode ter itens que poderão ser melhorados com o tempo.
O typescript foi escolhido por ter um paradigma forte de tipagem possibilitando leva o JavaScript um passo adiante, permitindo a refatoração de código, recursos de navegação, verificação de tipo e etc.

## Typescript

#### Pros
- Tipagem
- Herança
- Generics
- classes

#### Contras
- Etapa de criação de adição necessária
- Inviabiliza o uso de algumas libs

fontes:
[Rocktseat](https://medium.com/rocketseat/do-javascript-ao-typescript-why-916d0a5587de#:~:text=Tipos,leg%C3%ADvel%2C%20e%20livre%20de%20erros.)
[TypeScript vs. JavaScript (Pros / cons)](https://khalilstemmler.com/articles/javascript-vs-typescript/)

### Premissas
A Poc inicialmente abrangerá o conceito arquitetural da solução.


# Objetivo
Pude perceber que o modelo proposto do react não é muito comum o uso do padrão MVVM pois o desafio é manter os dados de sessão e trafegar as informações necessários sem perder a sessão do client.

O objeto é conseguir esse trafego de modo satisfatorio utilizando o padrão MVVM.


# __[React](https://github.com/facebook/create-react-app)__

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
