class Node<Type = any> {
  private _next: Node<Type>;
  private _value: Type;

  constructor(value: Type) {
    this._value = value
  }


  set next(node: Node){
    this._next = node
  }

  get next(){
    return this._next
  }

  get value(){
    return this._value
  }

  set value(value: Type){
    this._value = value
  }

}

class LinkedList<Type> {
  private _head: Node<Type>
  private _last: Node<Type>

  push(value: Type){
    if (!this._head){
      this._head = new Node<Type>(value)
      this._last = this._head
      return this._last.value
    }
    const node = new Node<Type>(value)
    this._last.next = node
    this._last = node

    return this._last.value
  }

  remove(value: Type): Type {
    let prev = null
    let current = this._head
    let next = current.next

    if (this._head.value === value){
      const headValue = this._head.value
      if (this._head.next){
        // re-attach
        this._head = this._head.next
        return headValue
      }
      this._head = null
      return headValue
    }

    while (!!current){
      const currentValue = current.value
      if (current.value === value){
        if (!next){
          // current is last element. delete
          prev.next = null
          this._last = prev
          return currentValue
        } else {
          // delete current, re-hook
          prev.next = next
          return currentValue
        }
      }
      prev = current
      current = current.next
      if (!!current){
        next = current.next
      }
    }
  }

  includes(value: Type){
    let tempNode = this._head
    while (!!tempNode){
      if (tempNode.value === value){
        return true
      }
      tempNode = tempNode.next
    }
    return false
  }



  get last(){
    return this._last
  }
}

export { LinkedList }
