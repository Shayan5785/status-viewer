import React, { useState } from 'react'

const useLinkedList = () => {
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }
  
    const [head, setHead] = useState(null);
    const [tail, setTail] = useState(null);
    const [length, setLength] = useState(0);
  
    const append = (data) => {
      const newNode = new Node(data);
      if (!head) {
        setHead(newNode);
        setTail(newNode);
      } else {
        tail.next = newNode;
        setTail(newNode);
      }
      setLength(length + 1);
    };

    const deletes = () => {
      if (!head) {
        // Empty list
        return;
      }
  
      if (!head.next) {
        // Only one node in the list
        setHead(null);
        setLength(0);
        return;
      }
  
      let current = head;
      let previous = null;
  
      while (current.next) {
        previous = current;
        current = current.next;
      }
  
      previous.next = null;
      setLength(prevLength => prevLength - 1);
  }

    const print = () => {
      let currenrt = head
      let str = ''
      while(currenrt){
          str += currenrt.data + " --> "
          currenrt = currenrt.next            
      }
      str += "NULL"
      console.log(str)
    }
  
    // Other linked list operations (e.g., delete, insert, etc.)
  
    return {
      head,
      tail,
      length,
      append,
      print,
      deletes,
      // Other linked list operations
    };
  };

export default useLinkedList