# Parte 1
1. Criar uma classe Funcionário que possui as propriedades Nome e Salário;
2. Criar a classe Gerente que herda da classe Funcionário e possui a propriedade
Departamento;
3. Criar a classe Vendedor que também herda de Funcionário e possui a propriedade
PercentualComissao;
4. Na classe Gerente implementar um método ExibirInformacoes() que deve exibir no
console todas as propriedades de um gerente: Nome, Salário e Departamento;
5. Na classe Vendedor implementar um método CalcularSalario() que deve retornar o
valor do Salário acrescido do PercentualComissao;
6. Na classe Vendedor implementar o método ExibirInformacoes() que deve exibir no
console as seguintes informações do Vendedor: Nome, Salario, Salario com
comissão e o PercentualComissao.

## Parte 1.1

 Crie um método construtor para cada classe que receba como parâmetro as
informações que serão atribuídas as propriedades.

# Parte 2
1. Criar uma classe Produto com as propriedades Nome e Valor;
2. Criar a classe Venda com as propriedades Vendedor que deve ser um objeto da
classe Vendedor criada anteriormente, ListaDeProdutos que deve ser um array e
ValorTotal;
3. Na classe Venda implementar um método AdicionarProduto(), esse método deve
criar um novo Produto e adicionar ele na propriedade ListaDeProdutos;
4. Na classe Venda implementar um método CalcularTotal() que deve somar os valores
de todos os Produtos na ListaDeProdutos e salvar na propriedade ValorTotal o
resultado dessa soma;
5. Na classe Venda implementar um método FinalizarVenda() que deve exibir no
console no nome do Vendedor e o ValorTotal da venda.

## Parte 2.1

Crie um método construtor para cada classe que receba como parâmetro as
informações que serão atribuídas as propriedades, com exceção da ListaDe
Produtos e ValorTotal da classe Venda.