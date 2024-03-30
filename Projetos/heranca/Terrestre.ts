import {Transporte} from "./Transporte"

export class Terrestre extends Transporte{

    private _numeroRodas: number;
    private _velocidade: number

    constructor(capacidade: number, numeroRodas: number, velocidade: number){
        super(capacidade);
        this._numeroRodas = numeroRodas;
        this._velocidade = velocidade;

}
    /**
     * Getter numeroRodas
     * @return {number}
     */
	public get numeroRodas(): number {
		return this._numeroRodas;
	}

    /**
     * Setter numeroRodas
     * @param {number} value
     */
	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}
   
    protected



    }

public visualizar(): void {
    super.visualizar()
    console.log("Numero de rodas: " + this.numeroRodas)
    console.log("Velocidade: " + )


}