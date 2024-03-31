import { Conta } from "./Conta";

export class ContaPoupança extends Conta{

   private taxadesaque: number;
   private mesdoaniversario: number;
    saldo: any;


	constructor(numero: number, agencia: number, tipo:  number,
        titular: string, saldo: number) {
       super(numero, agencia, tipo, titular, saldo )

        this.taxadesaque = 0.10;
        this.mesdoaniversario = 2;
}

    /**
     * Getter $taxadesaque
     * @return {number}
     */
	public get $taxadesaque(): number {
		return this.taxadesaque;
	}

    /**
     * Getter $mesdoaniversario
     * @return {number}
     */
	public get $mesdoaniversario(): number {
		return this.mesdoaniversario;
	}

    /**
     * Setter $taxadesaque
     * @param {number} value
     */
	public set $taxadesaque(value: number) {
		this.taxadesaque = value;
	}

    /**
     * Setter $mesdoaniversario
     * @param {number} value
     */
	public set $mesdoaniversario(value: number) {
		this.mesdoaniversario = value;
	}
    // Metodo Sacar

     saque (valor: number) {
        let TaxaDeSaqueDovalor = valor * this.taxadesaque;
        let ValorDeSaqueComATaxa = valor + TaxaDeSaqueDovalor;

     if  (this.saldo = (this.saldo - ValorDeSaqueComATaxa))
     super.visualizar();
     console.log(`O saldo atual após o saque é de: ${this.saldo}`)
   
     while
     (ValorDeSaqueComATaxa > this.saldo) 
        throw new Error('Saldo insuficiente')
   
    }


    
    public visualizar(): void {
        super.visualizar();
        console.log("Mês do aniversário: " + this.mesdoaniversario);
        
    }
    
}