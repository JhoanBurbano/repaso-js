const { Linkedlist } = require('../linkedkist.js')

require('../linkedkist.js')

//implementar la funcion doblar valor de cada nodo de una lista enlazada

Linkedlist.prototype.doblarValor = function(){
    let current = this.head;
    while(current !== null){
        current.value = current.value * 2;
        current = current.next;
    }
      
    
}