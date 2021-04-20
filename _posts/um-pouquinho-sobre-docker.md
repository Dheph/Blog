---
title: 'Um pouquinho sobre docker'
excerpt: 'Docker é uma ferramenta que se apoia em recursos existentes no kernel (inicialmente Linux), para isolar a execução de processos.'
coverImage: '/assets/blog/dockers/docker-img.jpg'
date: '2021-03-16T05:35:07.322Z'
author:
  name: Dheph
  picture: '/assets/blog/authors/dheph.jpeg'
ogImage:
  url: '/assets/blog/dockers/docker-img.jpg'
---


### O que é

Docker é uma ferramenta que se apoia em recursos existentes no kernel (inicialmente Linux), para isolar a execução de processos.

As ferramentas que o docker traz são basicamente uma camada de administração de containers, baseado originalmente no LXC.

### LXC

O LXC é um projeto criado por engenheiros da IBM e atualmente mantido pela canonical. Ele é uma interface para gerenciamento de containers que tem como base o mesmo kernel linux.

### O que é um container ?

Container é uma virtualização a nível de sistema operacional, ou seja, o sistema operacional permite que múltiplos processos executem isoladamente na mesma máquina.

Um container pode ser criado a partir de uma imagem, cada um possuindo suas características próprias.

### O que são imagens Docker ?

Uma imagem pode ser considerada como um modelo de sistema de arquivo somente-leitura para criar containers.

As imagens são compostas por camadas(layers), podendo ser uma camada ou mais. Uma camada pode ser chamada de imagem intermediária, a junção delas formam a imagem, sendo que a ultima camada pode ser alterada quando o container é iniciado.

Você pode encontrar alguns modelos de imagens no Docker Hub.

**Como as imagens são criadas ?**

As imagens são criadas através de um processo chamado build.

**Onde as imagens são armazenadas ?**

Elas são armazenadas em repositórios no Registry.

### Virtualização

É uma técnica que permite que uma aplicação ou mesmo um sistema operacional inteiro rode dentro de outro sistema.

### Virtualização em nível de Sistema Operacional

Ou conteinerização, se refere a um recurso de sistema operacional no qual o núcleo permite a existência de várias instâncias isoladas de espaços de usuário.

### Espaços de usuário

Se refere ao conjunto de programas que rodam com o processador em modo usuário.

### Processos

Um processo é nada mais nada menos que um programa em execução.

