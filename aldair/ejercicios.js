const { thisExpression } = require('@babel/types');
const { Linkedlist } = require('../linkedkist.js')

require('../linkedkist.js')

//implementar la funcion doblar valor de cada nodo de una lista enlazada

Linkedlist.prototype.doblarValor = function(){
    if(this.head === null){
        return 0
    }
    if(this.head.next === null){
        this.head.value = this.head.value * 2
        return
    }
    let current = this.head;
    while(current !== null){
        current.value = current.value * 2;
        current = current.next;
    }
      
    
}