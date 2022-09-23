// Parte 1:

class Funcionario{
    Nome
    Salario

    constructor(nome, salario){
    this.Nome = nome
    this.Salario = salario
    }
}

class Gerente extends Funcionario{
    Departamento

    constructor(nome,salario,departamento){
        super(nome, salario)
        this.Departamento = departamento
    }
    ExibirInformacoes(){
        console.log("Nome: " +this.Nome+ "\nSalário: R$" +this.Salario.toFixed(2)+ "\nDepartamento: " +this.Departamento)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao
    
    constructor(nome,salario,percentualComissao){
        super(nome,salario)
        this.PercentualComissao = percentualComissao
    }
    calcularSalario(){
        let salarioCalculado = this.Salario * (this.PercentualComissao + 1)
        return salarioCalculado
    }

    ExibirInformacoes(){
        console.log("Nome: " +this.Nome+ "\nSalário: R$" +this.Salario+ "\nSalário com comissão: R$" +this.calcularSalario().toFixed(2)+ "\nPercentual de Comissão: " +this.PercentualComissao)
    }
}
let gerente1 = new Gerente("Anderson", 7500, "Cozinha");
// gerente1.Nome = "Anderson"
// gerente1.Salario = 7500
// gerente1.Departamento = "Cozinha"
gerente1.ExibirInformacoes()

let vendedor1 = new Vendedor("Luiz", 10000, 0.2);
// vendedor1.Nome = "Luiz"
// vendedor1.Salario = 10000
// vendedor1.PercentualComissao = 0.2
vendedor1.calcularSalario()
vendedor1.ExibirInformacoes()

// Parte 2:

class Produto{
    Nome
    Valor

    constructor(nome,valor){
        this.Nome = nome
        this.Valor = valor
    }
}

class Venda{
    Vendedor
    ListaDeProdutos = []
    ValorTotal

    constructor(vendedor){
        this.Vendedor = vendedor
    }
    
    AdicionarProduto(){
        let produtoNovo = new Produto(prompt("Insira o nome do produto:"),prompt("Insira o valor do produto:"));
        // produtoNovo.Nome = prompt("Insira o nome do produto:")
        // produtoNovo.Valor = prompt("Insira o valor do produto:")
        this.ListaDeProdutos.push(produtoNovo)
    }

    CalcularTotal(){
        let valorTotal = 0
        this.ListaDeProdutos.forEach((x,index) => {
            valorTotal = parseFloat(x.Valor) + parseFloat(valorTotal)
        })
        this.ValorTotal = valorTotal
    }

    FinalizarVenda(){
        console.log("Vendedor: " +this.Vendedor.Nome+ "\nValor total dos produtos: R$" +parseFloat(this.ValorTotal).toFixed(2))
    }
}

let venda1 = new Venda(vendedor1);
// venda1.Vendedor = vendedor1
venda1.AdicionarProduto()
venda1.AdicionarProduto()
venda1.AdicionarProduto()
venda1.CalcularTotal()
venda1.FinalizarVenda()