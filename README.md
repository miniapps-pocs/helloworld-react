<p align="center">
    <img src="https://img.shields.io/badge/poc-v1.0.0-yellow" />
    <img src="https://img.shields.io/npm/types/@types/react?label=@react" />
    <img src="https://img.shields.io/npm/types/@types/react-dom?label=@react-dom" />
</p>

# poc helloworld-reac

    A ideia dessa POC é estudar a possibilidade do uso de um padrão de desenvolvimento com react js, mais precisamente com o padrão MVVM com modelo de navegação SPA.
    A Ideia da poc e criar um componente principal que faça navegação e trafegue valores entre dois componentes.
    Segundo ideia do uso de MVVM a estrutura inicial terá a seguinte estrutura.

- App
    - FirstView
        - FirstViewModel
        - FirstModel
    - SecondView
        - SecondViewModel
        - SecondModel

### Considerações
    O react para mim é um paradigma diferente, então, pode ter itens que poderão ser melhorados com o tempo.
    O typescript foi escolhido por ter um paradigma forte de tipagem possibilitando leva o JavaScript um passo adiante, permitindo a refatoração de código, recursos de navegação, verificação de tipo e etc.

# Objetivo

Pude percerber que o modelo proposto do react não é muito comum o uso do padrão MVVM pois o desafio é manter os dados de sessão e trafegar as informações necessários sem perfer a sessão do client.

O objeto é conseguir esse trafego de modo satisfatorio utilizando o padrão MVVM.

## Componentes usados
__React__ - Uma biblioteca JavaScript para criar interfaces de usuário.
__Flux__ - Arquitetura de aplicativos que o Facebook usa para criar aplicativos da Web do lado do cliente.
__Redux__ - ajuda a escrever aplicativos que se comportam de maneira consistente, executam em ambientes diferentes (cliente, servidor e nativo) e são fáceis de testar.
