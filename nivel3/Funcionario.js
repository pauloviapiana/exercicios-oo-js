class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase.toFixed(2);
    }

    exibirDados(){
        console.log(`Nome do funcionário: ${this.nome} | Sálario Base: ${this.salarioBase}`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, salarioBase, departamento){
        super(nome, salarioBase);
        this.departamento = departamento;
    }

    exibirDados(){
        console.log(`Nome do gerente: ${this.nome} | Departamento: ${this.departamento} | Salário Base: ${this.salarioBase}`);
    }
}

const funcionario = new Funcionario('José', 2900);
const gerente = new Gerente('Bagriel', 4800, "Tecnologia");

funcionario.exibirDados()
gerente.exibirDados()
