export class Empresa {
  readonly nome: string;
  private cnpj: string;
  protected readonly colaboradores: Colaborador[] = [];

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

export class TechTi extends Empresa {
  constructor() {
    super('TechTi', '11.111.111/0001-11')
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;

  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, 
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new TechTi();
const colaborador1 = new Colaborador('Adriano', 'Baza');
const colaborador2 = new Colaborador('Ana', 'Catarina');
const colaborador3 = new Colaborador('Vitor', 'Vasconcelos');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
empresa1.mostrarColaboradores();
