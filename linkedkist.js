function Linkedlist(){
    this.head = null;
    this.length = 0
  } 
  function Node(valor){
    this.value = valor
    this.next = null
  }
  
  Linkedlist.prototype.add = function (x) {
    this.length ++
    let nodo = new Node(x)
    if(this.head === null){
      this.head = nodo
      return nodo
    }
    let actual = this.head
    while(actual.next !== null){
      actual = actual.next
      }
    actual.next = nodo
    return nodo
  }
  Linkedlist.prototype.search=function(x){
    if(this.length === 0){
      return false
    }
    if(this.head.next === null){
      return x===this.head.next.value
    }
    let current = this.head;
    while(current !== null){
      if(current.value === x){
        return true
      }
      current = current.next
    }
    return false
  }
  Linkedlist.prototype.extract=function(){
    if(this.length === 0){
      return null
    }
    
    if(this.length===1){
      this.length--
      return this.head
    }
    this.length--
    let middle = this.length / 2;
    console.log('------->',middle)
    let current = this.head
    let i = 1
    while(i < middle-1){
      current = current.next
      i+=1
    }
    let valorsacado = current.next
    let recovery = current.next.next
    current.next = recovery
    valorsacado.next = null
    return valorsacado
  }
  Linkedlist.prototype.removeHead = function(){
    if(this.length === 0){
          return null
    }
    this.length--
    this.head = this.head.next
  }
  Linkedlist.prototype.remove= function(){
    if(this.head === null){
      return null
    }
    if(this.length === 1){
      return this.removeHead()
      this.head = this.head.next
      this.length--
    }
    let current = this.head
    let i = 1;
    while(i<this.length-1){
      current = current.next
      i++
    }
      current.next = null
    this.length--
    
    return
    while(current.next.next !== null){
      current = current.next
    }
    current.next = null
    this.length--
  }
  
  
  
  
  
  let lnk = new Linkedlist()
  
  lnk.add(1);
  lnk.add(2);
  lnk.add(3);
  lnk.add(4);
  lnk.add(5);
  lnk.add(6);
  lnk.add(7);
  lnk.add(8);
  lnk.add(9);
  lnk.add(10);
  lnk.search(4)
  lnk.remove()
  lnk.remove()
  lnk.remove()
  lnk.remove()
  console.log('----------->', lnk)
  