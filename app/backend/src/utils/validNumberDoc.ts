export default class validNumberDoc {
  static validCPF(cpf: string): boolean {
    if (cpf.length !== 11) {
      return false;
    }
    return true;
  }

  static validCNPJ(cnpj: string): boolean {
    if (cnpj.length !== 14) {
      return false;
    }
    return true;
  }
}
