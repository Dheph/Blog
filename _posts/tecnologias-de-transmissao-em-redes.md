---
title: 'Tecnologias de transmissão em redes'

excerpt: 'Como é o funcionamento físico da rede? O que são as tecnologias de transmissão?Escala, broadcasting, multicasting e unicasting.'

coverImage: '/assets/blog/Redes/network-transmission.jpg'
date: '2021-03-16T05:35:07.322Z'
author:
  name: Dheph
  picture: '/assets/blog/authors/dheph.jpeg'
ogImage:
  url: '/assets/blog/Redes/network-transmission.jpg'
---

## **Para Começar**

Existem alguns tipos de classificações para redes de computadores, por não haver uma concordância ou aceitação geral nesse tema, eu trouxe aqui duas dimensões das que mais se destacam das demais, sendo elas a Tecnologia de transmissão e a Escala.

### **Tecnologia de Transmissão**

Em geral, existem dois tipos de tecnologias de transmissão em usos disseminados(espalhados) atualmente, sendo eles :

   *- Links de difusão.*

   *- Links ponto a ponto.*



### **Difusão**

Nas redes de difusão existe apenas um canal de comunicação, compartilhado por todas as máquinas da rede. Pacotes ou pequenas mensagens são enviadas por qualquer máquina, e são recebidas por todas as outras. Esses pacotes possuem um campo chamado endereço, que especifica o destinatário pretendido(pessoa na qual ele deseja enviar a mensagem). Ao receber o pacote a máquina verifica se o endereço de envio é o mesmo que o seu próprio endereço como receptor, caso seja, o pacote é processado, caso não seja ignorado.

Imagine uma pessoa gritando seu nome em uma caverna cheia de estudantes " GENIVAALDOO JOZIEL PEREIRA CHERCHES!!! "(envio do pacote), todos os estudantes vão ouvir (receber o pacote) , se o nome(endereço) de algum estudante for genivaldo joziel pereira cherches, ele vai responder (processar), se não ele vai simplesmente ignorar.

Para finalizar, o sistema de difusão, saiba que eles oferecem a possibilidade de endereçamento de um pacote a todos os destinos utilizando um código especial no campo de endereço. Quando um certo pacote com esse código é enviado, todas as máquinas da rede o processam, este tipo de operação é chamado de difusão ( broadcasting ).  Alguns dos sistemas de difusão possibilitam a transmissão para um subconjunto das máquinas, tendo por nome multidifusão (multicasting)  


### **Ponto a Ponto**

 Contrastando com o sistema de difusão, as redes ponto a ponto consistem em muitas conexões entre pares de máquinas individuais. Para ir da origem até seu destino, um pacote talvez precise visitar primeiro uma ou mais máquinas intermediárias. Como há normalmente uma variação de tamanho nas rotas, o uso de boas rotas é algo extremamente importante em redes ponto a ponto.

Como regra geral (existem exceções ), redes menores utilizam difusão, enquanto redes maiores tendem a usar Ponto a Ponto com um transmissor e um receptor tendo por nome Unicasting. 

### **Escala**

Um outro método de classificação de redes é a sua escala. Como exemplo, uma classificação de sistemas de vários processadores organizada por seu tamanho físico. Onde podemos dividir redes pessoais, destinadas a uma única pessoa (como a rede sem fio, conectando um mouse ao computador),além das redes pessoais podemos encontrar redes de maior abrangência, sendo divididas em, redes: 

  **- locais**

   **- metropolitanas** 

   **- geograficamente distribuídas(remotas)**

Não foi fornecido texto alternativo para esta imagem
 E por fim a conexão de duas ou mais redes é chamada de Inter-rede, como exemplo de inter-rede temos a Internet mundial. Sendo a distância algo muito importante, pois são empregadas diferentes técnicas de acordo com escalas distintas.

