interface queueInterface<Type> {
    ENQUEUE(dataItem: Type): void;
    DEQUEUE(): Type | undefined;
    ISEMPTY(): boolean;
    COUNT(): number;
    PRINTQUEUE(): void;
    PEEK(): Type | undefined;
    CONTAINS(dataItem: Type): boolean;
    CLEAR(): void;
 }
 
 export class Queue<Type> implements queueInterface<Type> {
 
    private QueueData: Array<Type> = [];
 
    constructor() { }
 
    ISEMPTY(): boolean {
       let result = this.QueueData.length <= 0;
       return result;
    }
 
    ENQUEUE(dataItem: Type): void {
       this.QueueData.push(dataItem);
    }
 
    DEQUEUE(): Type | undefined {
       if (this.ISEMPTY()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.QueueData.shift();
          return element;
       }
    }
 
    COUNT(): number {
       let len = this.QueueData.length;
       return len;
    }
 
    PRINTQUEUE(): void {
       for (let i = 0; i < this.QueueData.length; i++) {
          console.log(this.QueueData[i]);
       }
    }
 
    PEEK(): Type | undefined {
       if (this.ISEMPTY()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.QueueData[0];
          return element;
       }
    }
 
    CONTAINS(dataItem: Type): boolean {
       if (this.QueueData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 
    CLEAR(): void {
       this.QueueData.length = 0;
    }
 
 }