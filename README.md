
# MovieIonic

App Mobile-Híbrida implementada em Ionic 4

Esta app apresenta um catálogo de filmes

** Este repositório faz parte dos conteúdos da disciplina de Sistemas Embebidos da [Universidade Lusófona](https://www.ulusofona.pt).**

---

## Instruções

A funcionalidade da App não está completa.

[Deverá fazer fork](https://confluence.atlassian.com/bitbucket/forking-a-repository-221449527.html) deste repositório para um repositório com o nome: *username*.bitbucket.org e depois fazer checkout para o repositório local na máquina.
Após o Checkout para a máquina local necessita correr o comando **npm install** para instalar todas as dependências localmente.

Nesse repositório, deverá fazer as seguintes alterações:

* Corrigir erro na tab bar, que para a opção Watchlist abre a tab Watchlist correspondente e não a Wishlist.
* Adicionar o filme [Interstellar](https://www.imdb.com/title/tt0816692/) ou outro à lista de filmes.
* Adicionar à lista de pesquisa de filmes um [floating action button](https://ionicframework.com/docs/api/fab-button) que permita abrir o ecrã com o form para adição de um filme. Deve ser utilizado o novo [Angular Routing do Ionic 4](https://www.joshmorony.com/using-angular-routing-with-ionic-4/), nomeadamente através do atributo *routerLink*.
* Completar o form de criação de um novo filme para recolher os campos 'Director', 'Stars' e 'Genre'
* Implementar função que permite filtrar os filmes para apresentar apenas os marcados como vistos 'watched'
* Terminar a implementação das opções de adicionar à wishlist e marcar como watched a partir do slide de um elemento da lista no ecrã de pesquisa.
* Adicionar a invocação da notificação de alteração do modelo de dados na atualização das flags watched / wished a partir do ecrã de detalhe, de form a atualizar automaticamente as listas de filmes watched e na wishlist.
* Implementar validação no form para garantir que o campo title com o título do filme é obrigatório, e que o campo runtime é numérico e tem obrigatoriamente 2 ou 3 digitos.
* Utilizar o componente [Ionic Slides](https://ionicframework.com/docs/api/slides) para adicionar uma galeria com fotos de um filme, acessível através do ecrã de detalhe do filme.

