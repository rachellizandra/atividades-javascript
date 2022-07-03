# JAVASCRIPT #

**História**

- É uma linguagem interpretada, ou seja, a linguagem está sendo rodada em tempo real e o código está sendo disponibilizado instantaneamente;
- É uma linguagem baseada em protótipos, que são bases para grande maioria dos dados ou estrutura de dados, ou seja, são um conjunto de funções em comum a essa estrutura de dados;
- É uma linguagem multiparadigma, podendo ser escolhido qual paradigma irá se trabalhar, seja orientação a objetos, programação funcional ou programação estruturada;
- Comumente utilizada em aplicações web client-side (parte da estrutura que interage com o usuário);
- Segue o padrão ECMAScript, um padrão para várias linguagens. 



**Aplicações**

- Web;

- Mobile;

- Smartwatches;

- Games;

- IoT (Internet of Things);

- APIs.

  

**Recursos básicos**

1- Se familiarizar com a sintaxe da linguagem;

2- Entender a diferença entre variável e constante; 

3- Ser capaz de comentar seu código.



**Manipulando um arquivo**

Utilizando o VSC: 

* Para comentar dentro do código, adicionar // 

ex: // var y = 0;

* Para comentar em várias linhas, adicionar /* na primeira linha e */ na última

ex:   1  /* var y = 0;

​        2  var x = 1; */

* Variáveis, geralmente, são escritas em letra minúscula e constantes em letra minúscula

  ex: 1 var desconto = 0.2;

  ​       2 const PRECO = 2;

* Funções: 

  ex: 1 function soma(a, b) {

  ​      2     console.log(a + b) //opção de função soma para console

  ​      3     return a + b; // retorna o valor do resultado e/ou manipula o resultado dessa função em outra função  

  }

  ***OBS*: sempre quando for declarar uma função, lembrar de executá-la/chamá-la para que haja algum resultado. **

  

  **Executando um arquivo .js**

  *Objetivos*: 1- Aprender a utilizar o console em uma página web; 2- Aprender a utilizar o console no terminal.

  Como verificar o output do código pelo console no terminal: 
  
  1. Digitar: console.log("Hello World!");
  2. Ir no terminal do VSC e digitar: node "nome do arquivo.js" e dar enter;

Como verificar o output do código pelo console em uma página web: 

1. Clicar com o botão direito do mouse na janela da web que se quer acessar, clicar em Inspecionar;

2. Ir na aba "Console" ao lado da aba Elements;

3. Digitar código e este roda o output automaticamente

   

   **JavaScript em uma página web**

   1. Criar uma pasta em algum diretório do pc; abrir esta no VSC; 

   2. Adicionar 3 arquivos: um para html (index.html); um para css (styles.css) e outro para js (script.js); obs: o css e js devem estar dentro de outra pasta separada chamada "assets", como mostra a figura abaixo: .![print javascript](C:\Users\rache\Downloads\print javascript.PNG)

      

   **Interagindo com elementos do DOM**

   DOM são os elementos que existem em uma página web. 

   DOM - Document Object Model (estrutura dos elementos dentro da janela)

   1. Dentro do arquivo index.html, digitar a estrutura básica do html no VSC e fazer as seguintes alterações: (abrir a janela completa no botão direito escrito HTML ao lado)

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="./assets/css/styles.css" />
       <script src="./assets/js/scripts.js"></script>
       <title>Projeto teste em JS para página web</title>
   </head>
   <body>
       <h1>Olá, mundo!</h1>
   </body>
   </html>
   
   

   2. Com o botão direito do mouse em cima do arquivo index.html, clicar em 'Reveal in File Explorer' e acessar diretamente do Chrome; 

   3. Teclar CTRL + SHIF + I para inspecionar o código no console; 

   4. Digitar para verificar as modificações básicas que podemos fazer diretamente na página da web, como por ex: mudar a cor da letras em "Olá, mundo!", como mostra abaixo: 

      ![image-20220622104432397](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622104432397.png)



**Introdução a eventos:**

**1. Criando um contador:**

Verificar no VSC o código feito para o contador na pasta: workspace/JavaScript/teste-js-web/

**2. Criar um To-Do List em JavaScript para praticar:**



**Frameworks e bibliotecas: **

Framework trata-se de uma série de bibliotecas e classes — ou seja, códigos prontos — que oferecem alguma funcionalidade específica. Em outras palavras, é um padrão que pode ser incorporado a sistemas para agilizar a codificação de certas partes.

*Frameworks voltados para o desenvolvimento web:*

1. **[Angular](https://angular.io/)**: Framework para criação de aplicações web
2. **[Vue.js](https://vuejs.org/)**: Framework também para criação de aplicações web
3. **[Ionic](https://ionicframework.com/)**: Framework para criar aplicativos mobile com Angular, React ou Vue
4. **[Express](https://expressjs.com/)**: Framework para criar aplicações com Node.js
5. **[LoopBack](https://loopback.io/)**: Framework para criar APIs e microserviços com Node.js

Existe o **Angular**, um **framework para JavaScript,** que ajuda a desenvolver a interação entre a parte visual do site, dos botões e menus, com a parte mais complexa e técnica referente ao lado do servidor. Atualmente, é um dos grandes protagonistas em projetos de Single-Page Applications, que são sites com uma única página que é reescrita pelo JavaScript apresentando as informações solicitadas, ao invés de receber uma nova página do servidor.

No lado do servidor, em específico, existe o famoso **Laravel, framework para PHP.** É uma opção um pouco mais complexa e pesada, por isso, requer bastante conhecimento e cuidado na hora de usar. 

O **Bootstrap é um ferramenta para CSS** que ajuda na criação de telas responsivas para estruturar informações em páginas web. Ou seja, ele permite criar layouts adaptados para diferentes tamanhos de dispositivos. Já o Vue é outra ferramenta para JavaScript que vem conquistando diversos adeptos por ser bastante flexível em diferentes projetos.

*Bibliotecas:*

1. **[Moment.js](https://momentjs.com/)**: Biblioteca para converter, validar, manipular e exibir datas e horários
2. **[Chart.js](https://www.chartjs.org/)**: Biblioteca para a criação de gráficos
3. **[Voca](https://vocajs.com/)**: Biblioteca para trabalhar com Strings
4. **[mo.js](https://mojs.github.io/)**: Biblioteca para criar animações incríveis com SVG. Já fizemos um post sobre [como começar com o mo.js](https://www.treinaweb.com.br/blog/comecando-com-svg-no-front-end-parte-3-animacoes-com-mo-js-motion-graphics/)
5. **[React](https://reactjs.org/)**: Biblioteca para criar interfaces de usuário

Uma `biblioteca` (do inglês `library`, não confundir com livraria que em inglês é `book store`) é uma coleção de códigos voltados a resolver um determinado tipo de problema.



**SINTAXE E OPERADORES**

**Operadores**:

Operadores em Javascript são símbolos especiais que envolvem um ou mais operandos com a finalidade de produzir um determinado resultado.

1. Aritmética;

   ![image-20220622224148763](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622224148763.png)

2. Atribuição;

   ![image-20220622223815663](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622223815663.png)

3. Comparação;

   ![image-20220622224359924](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622224359924.png)

4. Lógica;

   ![image-20220622224523973](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622224523973.png)

5. Condicional

   ![image-20220622224803812](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220622224803812.png)

Estudar mais sobre estes operadores em: https://kenzie.com.br/blog/operadores-javascript/

**Atividade prática: **

## Atividade 1: 

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```

Possibilidades de como fazer: 

1. No VSC: criar uma pasta e um arquivo chamado "funcoes" em js;

2. Digitar os possíveis códigos: 

   ![image-20220624103258210](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624103258210.png)



ou: Verificar no VSC o código feito para o esta atividade sobre sintaxe e operadores na pasta: workspace/JavaScript/atividade1.js/



# Variáveis #

**Objetivos: **Explicar as principais estruturas de dados do JavaScript, como usá-las e suas possibilidades. 

**Atribuição de valores: **

*Regras importantes:*

![image-20220624121739423](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624121739423.png)

**Var, let:**

Var e let são duas variáveis de escopos diferentes;

Na maioria das **linguagens de programação**, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas. 

Estudar mais em: https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/#:~:text=As%20declara%C3%A7%C3%B5es%20de%20var%20tem,n%C3%A3o%20podem%20ser%20declaradas%20novamente

- Escopos diferentes;
- Hoisting;
- Redeclaração;
- Reatribuição;
- camelCase.

**Escopo**, essencialmente, significa onde essas variáveis poderão ser utilizadas. Declarações com `var` tem escopo global ou escopo de função/local.

O escopo é global quando uma variável `var` é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com `var` fora de um bloco de função pode ser utilizada na janela inteira.

`var` tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

Exemplo para entender o conceito de var, let e hoisting: 

1 numberOne = 1;

2 console.log(numberOne + 2);

3 var numberOne;

NÃO DARÁ ERRO, POIS O HOISTING AUTOMATICAMENTE JÁ SOBE var PARA CIMA. 

1 numberOne = 1;

2 console.log(numberOne + 2);

3 let numberOne;

IRÁ DAR ERRO, POIS O HOISTING NÃO SOBE AUTOMATICAMENTE let PARA CIMA.

Para corrigir, devemos colocar o let sempre no início: 

1 let numberOne;

2 numberOne = 1;

3 console.log(numberOne + 2);



***Exemplo prático* de redeclaração:**

![image-20220624145229966](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624145229966.png)

Nesse caso, o output irá mostrar o nome Pedro Souza pois houve a redeclaração do firstName de João para Pedro dentro do bloco da função, e como o console.log está fora do bloco if, a var irá mostrar o valor lastName como Souza. 

A mesma situação aconteceria se em vez de var lastName fora do bloco fosse let lastName, o output mostraria o resultado Pedro Souza. 

***Exemplo prático* de reatribuição:**

![image-20220624145928504](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624145928504.png)



**Constantes:**

- Declarada em SNAKE_UPPER_CASE;

- Escopo de bloco;

- Não faz hoisting, não redeclara e nem faz reatribuição.

  exemplo: const DAYS_IN_A_WEEK = 7;

    				const MY_NAME = "Kieran";

  **Resumo:**

  ![image-20220624163427719](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624163427719.png)

# Tipos #

**Estrutura de dados:**

JavaScript é uma linguagem de tipagem dinâmica, ou seja, antes de declarar um valor, você não especifica o tipo dele. Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. Exemplos: no console da página web: 

var foo = 42;    // foo é um Number agora
foo     = "bar"; // foo é um String agora
foo     = true;  // foo é um Boolean agora

![image-20220624185035881](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624185035881.png)

![image-20220624193850721](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220624193850721.png)

Tipos primitivos não possuem métodos dentro deles, e são escritos com letra minúscula. Já os tipos não-primitivos (objects e arrays).

**Tipos de dados:**

Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar). Por exemplo e diferentemente da linguagem C, Strings são imutáveis. Nós nos referimos a valores desse tipo como "valores primitivos".

### [Tipo "Boolean"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipo_boolean)

Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro`(true)` ou falso`(false)`.

### [Tipo "Null"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipo_null)

O tipo Null tem exatamente um valor: `null`(nulo). Veja [`null`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/null) e [Null](https://developer.mozilla.org/pt-BR/docs/Glossary/Null) para mais detalhes.

### [Tipo "Undefined"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipo_undefined)

Uma variável que não foi atribuída a um valor específico, assume o valor `*undefined*`(indefinido). Veja [`undefined`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined) e [Undefined](https://developer.mozilla.org/pt-BR/docs/Glossary/undefined) para mais detalhes.

### [Tipo "Number"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipo_number)

De acordo com os padrões ECMAScript, existe somente um tipo numérico*.*

Algumas operações para se familiarizar com o tipo number: 

![image-20220625154745542](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625154745542.png)

Math: entre numa gama de operações matemáticas que se pode utilizar; 

Math.floor() : arredonda o resultado para baixo

Math.ceil() : arredonda o resultado para cima

### [Tipo "String"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipo_string)

- Comumente utilizada para textos;

- Valores declarados entre aspas ou crases.

  exemplo: const DIO = 'Digital Innovation One'

  ​				  let firstName = 'João'

   				 let lastName = 'Luiz'

  ​				  let fullName = `Nome completo: ${firstName} ${lastName}`

O tipo [`String`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) em JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits *unsigned integer*. Cada elemento na *string* ocupa uma posição na *string*. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma *string* é o número de elementos nela. Exemplo no console da página web:

![image-20220625104842981](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625104842981.png)

Outras formas de concatenar: 

1- Digitar no console: concatenado = nome + " " + sobrenome 

(isso irá separar as palavras);

2- Digitar no console: concatenado = (crase)${nome} ${sobrenome}(crase)

Outros atalhos para strings: 

![image-20220625153224051](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625153224051.png)

Métodos importantes das strings: 

- Concatenação;
- Propriedade length;
- Iterabilidade;
- Formatação;
- Index de letras.

***Resumo sobre tipos de dados:***

- **Tipos Primitivos**: valores tratados diretamente pelo JavaScript, essas variáveis guardam **valores**. Exemplo: números.

- **Tipos Não primitivos**: a aplicação guarda o **endereço em memória** e não o valor em si. Importantes casos são as arrays e os objetos.

  Estudar mais em: https://cursos.alura.com.br/forum/topico-quanto-a-tipos-primitivos-e-nao-primitivos-164010#:~:text=Primitivos%3A%20valores%20tratados%20diretamente%20pelo,as%20arrays%20e%20os%20objetos 

  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures

  

  **TIPOS NÃO PRIMITIVOS: **

  Array: O objeto `Array` do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas, ou seja, uma lista iterável de elementos.

  ![image-20220625160204617](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625160204617.png)

  Alguns exemplos de aplicação do array: 

  ![image-20220625180904293](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625180904293.png)

  Objetos:  

  *Estrutura tipo chave-valor*: 

  ![image-20220625180712067](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625180712067.png)

  Alguns exemplos de aplicação desta estrutura: 

![image-20220625181209185](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625181209185.png)

![image-20220625182358527](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625182358527.png)

*Empty, null e undefined:*

![image-20220625182756351](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220625182756351.png)



# Função #

Definição: variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

ex: function nome(parametros) {

// instruções acerca da função

}

Quando invocamos o "return", a função para de ser executada. 

ex: function nome(parametros) {

// instruções acerca da função

return; //valor de retorno

}

1- Função anônima: funções que representam expressões. Uma variável pode armazenar uma função. 

ex: **const soma = function (a, b) {**

**return a + b**

**}**

**soma(1, 2)    // 3**

**soma(5, 4)   // 9**

2- Função autoinvocável - IIFE (Immediately Invoked Function Expression): uma função anônima entre parênteses, que representa sua chamada. Também pode ser utilizada com parâmetros ou armazenada em uma variável.

ex: **(**

**function () {**

   **let name = "Digital Innovation One"**

   **return name;**

**}**

**)();**

**// Digital Innovation One**

exemplos: 

![image-20220626231731017](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220626231731017.png)

3- Callbacks:  É uma função passada como argumento para outra. Utilizando callbacks, você tem maior controle da ordem de chamadas.

ex: **const calc = function(operacao, num1, num2) {**

​			**return operacao(num1, num2);**

**}**

**const soma = function(num1, num2) {**

​	**return num1 + num2;**

**}**

**const sub = function(num1, num2) {**

​		**return num1 - num2;**

**}**

**const resultSoma = calc(soma, 1, 2);**

**const resultSub = calc(sub, 1, 2);**

**console.log(resultSoma);   // 3**

**console.log(resultSub);   // -1**

**Valores padrão:**

![image-20220626233809454](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220626233809454.png)

**Objeto "arguments":**

Um array ou coleção com todos os parâmetros passados quando a função foi invocada. 

![image-20220626234104861](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220626234104861.png)

![image-20220626234250103](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220626234250103.png)

**Arrays**:

1- Spread: uma forma de lidar separadamente com elementos. Ou seja, o que era parte de um array, se torna um elemento independente. É utilizado quando se está chamando a função. 

ex: **function sum(x, y, z) {**

**return x + y + z;**

**}**

**const numbers = [1 , 2, 3];**

**console.log(sum(...numbers));**

2- Rest: combina os argumentos em um array. Ou seja, o que era elemento independente se torna parte de um array. É utilizado quando se está declarando a função. 

ex: **function confereTamanho(...args) {**

**console.log(args.length)**

**}**

**confereTamanho( )   // 0**

**confereTamanho(1, 2)   // 2**

**confereTamanho(3, 4, 5)  // 3**

**Objetos:**

Object Destructuring (Desestruturação de objetos): Entre as chaves{}, podemos filtrar apenas os dados que nos interessam em um objeto.

![image-20220626235658101](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220626235658101.png)

**Loops:**

*If/else*:

ex: if(num <0) {   --> **o que está dentro do argumento é uma condição**

​		  resultado = false;    --> **Declaração 1** (dentro de if)

}     else {

​		  resultado = true;   --> **Declaração 2 **(dentro de else)

}



**Declaração 1** (dentro de if): ocorre caso a condição seja verdadeira;

**Declaração 2 **(dentro de else): ocorre caso a condição seja falsa. 

ex: 

![image-20220628175436992](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628175436992.png)

Outras formas de declarar a mesma função usando if/else: 

![image-20220628175805760](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628175805760.png)

​      **OBSERVAÇÃO: **No Javascript não existe elseif, as palavras sempre estão espaçadas!

exemplo: 

![image-20220628180836209](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628180836209.png)



**Switch/case: **

- Equivale a uma comparação de tipo de valor (===);

- Sempre precisa de um valor "default";

- Ideal para quando se precisa comparar muitos valores. 

  exemplo:

![image-20220628181203374](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628181203374.png)

**For:**

Loop dentro de elementos iteráveis (arrays, strings).

exemplo 1:

![image-20220628182359273](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628182359273.png)

*Variações do for:*

- for... in: loop entre propriedades enumeráveis de um objeto.

  exemplo:

  ![image-20220628182701473](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628182701473.png)

- for...of: loop entre estruturas iteráveis (arrays, strings).

  exemplo: 

  ![image-20220628182759129](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628182759129.png)

**While e do...while:**

**While(enquanto):** executa instruções até que a condição se torne falsa. 

![image-20220628183152050](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628183152050.png)

**Do...while:** executa instruções até que a condição se torne falsa, porém a primeira execução sempre ocorre. 

![image-20220628183502372](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628183502372.png) 

**This:** essa palavra é uma referência de contexto. No exemplo abaixo, this refere-se ao objeto pessoa.

![image-20220628183722870](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628183722870.png)

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

![image-20220628194817249](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628194817249.png)

exemplos:

<img src="C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628194902818.png" alt="image-20220628194902818" style="zoom: 200%;" />

![image-20220628194947191](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628194947191.png)

![image-20220628195013083](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628195013083.png)

*Manipulando o valor do This:*

1- Call: 

ex: **const pessoa = {**

​			**nome: 'Miguel' ,**

**};**

**const animal = {**

​		**nome: 'Murphy' ,**

**};**

**function getSomething() {**

​		**console.log(this.nome);**

**}**

**getSomething.call(pessoa);**

Se rodar esse código no console do node.js irá ter como output o nome Miguel. Da mesma forma se mudarmos getSomething.call(animal), irá ter como output o nome Murphy. 

É possível passar parâmetros para essa função separando-os por vírgulas. 

exemplo: 

**const myObj = {**

​		**num1: 2,**

​		**num2: 4,**

**};**

**function soma(a, b) {**

​		**console.log(this.num1 + this.num2 + a + b);**

**}**

**soma.call(myObj, 1, 5);    //12**

2- Apply: 

exemplo:

**const pessoa = {**

​			**nome: 'Miguel' ,**

**};**

**const animal = {**

​		**nome: 'Godi' ,**

**};**

**function getSomething() {**

​		**console.log(this.nome);**

**}**

**getSomething.apply(pessoa);**

Se rodar esse código no console do node.js irá ter como output o nome Miguel. Da mesma forma se mudarmos getSomething.apply(animal), irá ter como output o nome Godi. 

É possível passar parâmetros para essa função dentro de um array.

exemplo: 

**const myObj = {**

​		**num1: 2,**

​		**num2: 4,**

**};**

**function soma(a, b) {**

​		**console.log(this.num1 + this.num2 + a + b);**

**}**

**soma.apply(myObj, [1, 5]);    //12**

3- Bind: clona a estrutura da função onde é chamada e aplica e valor do objeto passado como parâmetro. 

exemplo:

**const retornaNomes = function ( ) {**

​		**return this.nome;**

**};**

**let bruno = retornaNomes.bind({ nome: 'Bruno' });**

**bruno( )** 

**//Bruno**



**Sintaxe e outras restrições**:

Arrow function é representada por este símbolo =>

Formas de se utilizar esta arrow function: 

![image-20220628204834364](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220628204834364.png)

Possibilidades de utilização da arrow function:

- Caso exista apenas uma linha, pode dispensar as chaves e o return;
- Caso exista apenas um parâmetro, pode dispensar os parênteses. 

exemplo 1: 

**const soma = (a, b) => a + b;**

**soma(4, 6);     // 10**

exemplo 2: 

**const soma = a => a;** 

**soma(4);    // 4**

OBS: Arrow function NÃO faz hoisting!

*Outras restrições:*

- "this" será sempre o objeto global. Métodos para modificar seu valor não irão funcionar; 
- Não existe o objeto "arguments";
- O construtur (ex: new MeuObjeto()) também não pode ser utilizado.





# Coleções chaveadas #

**Coleção Map:**

Características: 

- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for...of;

exemplo: const myMap = new Map( )

**Métodos do Map:** adicionar, ler e deletar

exemplo: **const myMap = new Map( )**;

**myMap.set( 'apple', 'fruit' );      // Map(1) {"apple" => "fruit"}**

**myMap.get(apple);        // "fruit"**

**myMap.delete("apple");    // true**

**myMap.get("apple");    //undefined**



*Diferença entre Map e Objeto:*

- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chave é desconhecido;
- Os valores têm o mesmo tipo.



**Coleção Set:**

Setes são estruturas que armazenam apenas valores únicos. 

exemplo: const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];

​				  const mySet = new Set(myArray);

**Métodos do Set**: adicionar, consultar e deletar.

exemplo: 

const mySet = new Set ( );

mySet.add(1);

mySet.add(5);

mySet.has(1);     // true

mySet.has(3);     // false

mySet.delete(5);



*Diferença entre Set e Array:*

- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.

# Sintaxe, Map vs forEach #

**Map, filter e reduce: **

*Map:*

![image-20220630165221374](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220630165221374.png)

- O Map não modifica o array original, apenas cria um novo array;
- Realiza as operações em ordem.

*Sintaxe:*

**array.map(callback, thisArg)**

**callback(item, index, array)**

Callback: função a ser executada em cada elemento;

thisArg (opcional): valor de 'this' dentro da função de callback.

*Map vs forEach*: 

- A diferença entre os dois é o valor de retorno;
- Deve-se considerar se é necessário o array auxiliar para continuar as operações.

exemplo: 

**// usando map**

**const array = [1, 2, 3, 4, 5];**

**array.map((item) => * 2);      // retorno: [2, 4, 6, 8, 10]**



**//usando forEach**

**const array = [1, 2, 3, 4, 5];**

**array.forEach((item) => * 2);      // retorno: undefined**



**Filter e Sintaxe:**

*Filter*:

- Assim como o Map, o filter não modifica o array original, apenas cria em novo array;
- Como o próprio nome já diz, o filter filtra elementos do array quando as condições são dadas;

Sintaxe: **array.filter(callback, thisArg)**

Callback: função a ser executada em cada elemento;

thisArg (opcional): valor de 'this' dentro da função de callback.

exemplo: 

**const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];**

**frutas.filter((fruta) => fruta.includes('maçã'))**

**// retorno: ['maçã fuji', 'maçã verde'];**

Callback: função a ser executada em cada elemento;

thisArg (opcional): valor de 'this' dentro da função de callback.



**Reduce e Sintaxe:**

*Reduce*:

- Método que não retorna um novo array, este executa uma função em todos os elementos do array, retornando um valor único;![image-20220630172738120](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220630172738120.png)

Sintaxe: **array.reduce(callbackFn, initialValue)**

Callback: função a ser executada a partir do acumulador;

initialValue (opcional): valor sobre o qual o retorno final irá atuar.

exemplo:

**const callbackFn = function(accumulator, currentValue, index, array) {**

​		**// do something**

**}**

**array.reduce(callbackFn, initialValue)**

Accumulator/prevValue: acumulador de todas as chamadas de callbackFn.

currentValue: elemento atual sendo acessado pela função.





# Debugging e Error Handling #

**Tipos de erros:**

*ECMAScript Error:* Erros que ocorrem em tempo de execução.

Composto por: mensagem; nome; linha; call stack

![image-20220630233756013](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220630233756013.png)



*DOMException*: Erro relacionados ao Document Object Model (DOM)

![image-20220630234231558](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220630234231558.png)



*Throw e return*: o throw é parecido com o return pois retorna alguma coisa, que é um erro e o return retorna o que for declarar em aspas (string). 

exemplo: 

![image-20220702091906672](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702091906672.png)

*Try... catch*: é uma declaração, que dentro do bloco try, verifica-se um pedaço de código, e, se esse código tiver algum tipo de erro, ele será capturado pela função catch e pode manipulá-lo da maneira que se preferir. 

primeira opção de utilização do try...catch:

![image-20220702092325386](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702092325386.png)

segunda opção de utilização do try...catch:

![image-20220702092533489](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702092533489.png)



*Finally*: o bloco try...catch pode ser composto também pela palavra finally, que é uma instrução que será chamada se o código tiver um erro ou não. 

exemplo 1:

![image-20220702092844882](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702092844882.png)

exemplo 2: 

![image-20220702092946296](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702092946296.png)

***Criando erros personalizados:***

*Objeto Error:* é um objeto que está no javascript e que se pode colocar uma série de propriedades e executar uma série de métodos dentro. 

exemplo 1:

![image-20220702094934376](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702094934376.png)

message, fileName e lineNumber são parâmetros que não são padrões.

Pode-se também dar nome personalizado ao erro, como no exemplo abaixo: 

![image-20220702095237849](C:\Users\rache\AppData\Roaming\Typora\typora-user-images\image-20220702095237849.png)
