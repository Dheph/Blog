---
title: 'Arquitetura em camadas, uma abordagem simplificada'

excerpt: 'Na sua opinião o que seria mais fácil na hora de desenvolver um sistema?'

coverImage: '/assets/blog/arc/arquitetura.jpg'
date: '2020-04-14T02:35:07.322Z'
author:
  name: Dheph
  picture: '/assets/blog/authors/dheph.jpeg'
ogImage:
  url: '/assets/blog/arc/arquitetura.jpg'
---

Bem antes de começar a falar sobre a tal “Arquitetura em camadas” considere a seguinte pergunta.

Na sua opinião o que seria mais fácil na hora de desenvolver um sistema?

individualmente ou em grupo ?

Provavelmente sua resposta tenha sido parecida com, depende do tamanho e complexidade do projeto, sendo assim mais pessoas deveriam participar do mesmo. 

Entretanto, como poderíamos separar de uma forma bacana a divisão de tarefas? quem deveria fazer o quê? Bem, seria legal se dividíssemos o sistema de forma que cada um fizesse uma parte, aqui entra outra questão, como podemos definir então o papel de cada parte do sistema? e aqui começamos com simplesmente “Definindo uma arquitetura”

### Alguns conceitos básicos 

Podemos começar com a definição de arquitetura. O que significa Arquitetura em si?

Caso pesquise na web provavelmente terá um resultado parecido com "arte ou técnica de projetar e edificar o ambiente habitado pelo ser humano". Não se preocupe, é óbvio que essa definição de arquitetura está fazendo referência a área de Engenharia(civil) se referindo a Arquitetura de moradias.

Mas voltando ao mundo dos computadores, a idéia básica é que cada camada forneça serviços a outra imediatamente superior e consuma serviços na camada inferior, sendo a parte de fornecimento de serviços um "provedor de serviços ou servidor", e a camada que consome os mesmos como "cliente".

Essa comunicação pode ocorrer diretamente entre as classes(ou componentes) das camadas envolvidas ou mesmo por uma interface pré-definida.

### Exemplos de Arquiteturas 

Dois Exemplos que podem ser considerados clássicos, são os seguintes: 

#### Arquitetura utilizada em SO(Sistemas operacionais): 

Como o SO é um software como qualquer outro, a divisão em camadas se tornam bem comuns, ainda assim há algumas variações. Como por exemplo na arquitetura monolítica(utilizada nos primeiros sistemas), existem módulos compilados separadamente, mas que são ligados a um único programa executável. Já em microkernel existe a divisão das tarefas do SO em módulos servidores que fornecem os serviços ao núcleo central.


#### Arquitetura utilizada em Redes:

Outro bom exemplo de arquitetura em redes são os modelos OSI (Open systems Interconnect) e TCP/IP(Transmission Control Protocol/ Internet Protocol). A arquitetura OSI divide-se em 7 camadas: Aplicação, Apresentação,Sessão, Transporte, Rede, Enlace e Física, enquanto TCP/IP divide em apenas quatro: Aplicação,Transporte, Rede e Enlace. cada camada em cada arquitetura é responsável pela execução de tarefas distintas, consumindo ou fornecendo serviços a outras camadas.

Você deve ter observado que é bem comum a divisão do sistema em Sistema e Subsistemas, algumas vezes chamados de módulos. Como o sistema deve ter essa divisão em partes, existe a necessidade da definição de onde a classe estará armazenada, não apenas em cada subsistema(sendo a arquitetura lógica) como também na parte física, em servidores diferentes (sendo a arquitetura física). 

### Arquitetura lógica


Imagine a arquitetura lógica como um “desenho” ou uma “foto” dos principais elementos existentes no software. Como você sabe as pessoas sempre afirmam que os diagramas nos ajudam a compreender melhor qualquer sistema complexo, e isso é verdade, o melhor é que essa “regra” também se aplica a arquitetura lógica.

### Para simplificar

Pense na arquitetura lógica como um diagrama de blocos, ou um “fluxograma” que contém as principais partes que existem em um sistema e suas conexões ou relacionamentos.

Isso nos dá uma visão mais abrangente sobre o que é o sistema, o que ele demonstra, o tipo de organização e a integração dos principais elementos. Observe esta imagem:


A Partir de uma boa modelagem, você pode ser capaz de identificar novas necessidades além de uma melhor compreensão do sistema como um todo e a identificação de novas necessidades. Em outras palavras, esse tipo de arquitetura demonstra os principais pacotes, interfaces, classes, subsistemas entre muitos outros elementos. 

Observe que na imagem demonstrada um sistema “maior” foi dividido ou “quebrado” em pequenas partes, chamadas de subsistemas que possuem suas funções próprias, ou seja por serem partes “separadas” elas devem funcionar como partes totalmente independentes como se estivessem sozinhas.

Como você provavelmente sabe, se não sabe irá saber agora (rsrs), em softwares orientados a objetos ocorre a troca de mensagens entre os inúmeros objetos do sistema ou elementos(como preferir) para que alguma determinada tarefa seja executada.

Para que exista esse tipo de comunicação nessas partes ou áreas, são definidas interfaces e esse é um importantíssimo aspecto dos subsistemas. Se você definir bem as interfaces, se elas foram conhecidas por assim dizer, a substituição de subsistemas por outros ficará absurdamente mais simples, já que os serviços oferecidos pelos subsistemas serão consequentemente compatíveis.

### Arquitetura física

Você vai compreender bem mais rápido a parte de arquitetura física, basicamente o próprio nome diz ela tem relação com a parte física ou seja tudo que envolve a parte da infraestrutura que vai hospedar seu projeto. Parecida com a arquitetura lógica a arquitetura física através de “desenhos” ou diagramas para facilitar a compreensão.

A parte física determina o local onde determinadas partes do seu sistema ficarão alocadas, a grosso modo em que máquinas as coisas serão guardadas ou “instaladas”. É bem comum em arquiteturas em camadas que partes do projeto estejam alocadas em diferentes partes de um sistema, em locais distintos, um grande exemplo está na parte de armazenamento em nuvem.

Um outro conceito bem legal sobre a arquitetura física são os servidores que abrigam uma ou mais camadas da aplicação tendo um nome de tier. Dessa forma podemos encontrar algumas camadas com esse “termo” associado, como por exemplo:

  **- presentation Tier** : *Servidor que abriga a camada lógica de apresentação.*

  **- Midde Tier:** *Camada lógica da aplicação, isto é, armazena o próprio sistema(lembrando partes dessa aplicação podem se encontrar em servidores distintos).*

  **- Data Tier:** *aqui se encontra o servidor que hospeda os dados da aplicação, gerenciado por algum SGBD normalmente.*


A divisão de um sistema maior em partes, além de ajudar na definição de papéis, auxilia a ter um controle e organização melhor sobre tudo, dando uma visão mais abrangente além de uma compreensão melhor sobre o software, nos trazendo inúmeros benefícios.