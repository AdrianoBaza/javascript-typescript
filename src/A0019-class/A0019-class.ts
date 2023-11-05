export class Empresa {
  public readonly nome: string;
  public readonly cnpj: string;
  private readonly colaboradores: Colaborador[] = [];

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);      
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, 
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa('TechTi', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Adriano', 'Baza');
const colaborador2 = new Colaborador('Ana', 'Catarina');
const colaborador3 = new Colaborador('Vitor', 'Vasconcelos');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
