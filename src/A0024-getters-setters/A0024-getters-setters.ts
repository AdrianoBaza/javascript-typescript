export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string
  ) {}

  // Getters
  public getCpf(): string {
    return this.cpf;
  }

  // Setters
  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }
}
const pessoa1 = new Pessoa('Adriano', 'Baza', 49, '111.111.111-11');
pessoa1.setCpf('123.456.789-00');
console.log(pessoa1.getCpf());


/*
// outra alternativa aceita pelo typescript

// renomear o atributo cpf para _cpf

  // Getters
  get cpf(): string {   
    return this._cpf;
  }

  // Setters
  set cpf(novoCpf: string) {   
    this._cpf = novoCpf;
  }
 
pessoa1.cpf = '123.456.789-00';
console.log(pessoa1.cpf);
*/
