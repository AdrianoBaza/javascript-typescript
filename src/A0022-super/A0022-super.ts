export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
    ) {}

    getIdade(): number {
      return this.idade;
    }

    getCpf(): string {
      return this.cpf;
    }

    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf)
  }

  getNomeCompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Adriano', 'Baza', 49, '000.000.000-00');
const aluno = new Aluno('Vitor', 'Ferreira', 12, '111.111.111-11', '0001');
const cliente = new Cliente('Ana', 'Catarina', 46, '222.222.222-22');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
