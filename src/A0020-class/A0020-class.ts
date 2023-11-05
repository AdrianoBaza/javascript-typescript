// modificadores de acesso public e private
// public: atributos e métodos públicos podem ser acessado dentro e fora da classe e por todas as subclasses da classe mãe
// quando não especificado o modificador de acesso, o atributo ou método recebe o modificador public
// private: somente acessível dentro da classe 

export class Empresa {
  readonly nome: string;
  readonly cnpj: string;
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

// em classes geradas apenas pelo constructor torna-se obrigatório especificar a visibilidade public em atributos públicos
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
