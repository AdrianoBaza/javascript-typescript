export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '123.456.789.00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string
  ) {}

  static criaPessoa(nome: string, sobrenome: string) {
    return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrao);
  }

  metodoNormal():void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);    
  }
}

const pessoa1 = new Pessoa('Adriano', 'Baza', 49, '000.000.000-00');
console.log(pessoa1);

const pessoa2 = Pessoa.criaPessoa('Ana', 'Catarina');
console.log(pessoa2);
