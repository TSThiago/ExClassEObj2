// Parte 1:

class Funcionario{
    Nome
    Salario
}

class Gerente extends Funcionario{
    Departamento

    ExibirInformacoes(){
        console.log("Nome: " +this.Nome+ "\nSalário: R$" +this.Salario.toFixed(2)+ "\nDepartamento: " +this.Departamento)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao

    calcularSalario(){
        let salarioCalculado = this.Salario * (this.PercentualComissao + 1)
        return salarioCalculado
    }

    ExibirInformacoes(){
        console.log("Nome: " +this.Nome+ "\nSalário: R$" +this.Salario+ "\nSalário com comissão: R$" +this.calcularSalario().toFixed(2)+ "\nPercentual de Comissão: " +this.PercentualComissao)
    }
}
let gerente1 = new Gerente;
gerente1.Nome = "Anderson"
gerente1.Salario = 7500
gerente1.Departamento = "Cozinha"
gerente1.ExibirInformacoes()

let vendedor1 = new Vendedor;
vendedor1.Nome = "Luiz"
vendedor1.Salario = 10000
vendedor1.PercentualComissao = 0.2
vendedor1.calcularSalario()
vendedor1.ExibirInformacoes()