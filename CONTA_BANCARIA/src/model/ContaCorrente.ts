import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    
  private _limite: number;
    saldo: any;


	constructor(numero: number, agencia: number, tipo:  number,
         titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._limite = limite;
	}

    /**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

    /**
     * Setter limite
     * @param {number} value
     */
	public set limite(value: number) {
		this._limite = value;
	}
    // Metodo Sacar    
public sacar(valor: number): boolean{

    if((this.saldo + this.limite) >= valor){
       this.saldo = this.saldo - valor // Mudar
        return true;
 
    }

  console.log("\nSaldo Insuficiente!"); // Mudar
  return false;
 
 }
 
public visualizar(): void {
    super.visualizar();
    console.log("Limite da Conta Corrente: " + this._limite);
}

}








