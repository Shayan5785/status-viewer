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
    const [current,setCurrent] = useState(null)
    const [length, setLength] = useState(0);


    const append = (data) => {
      const newNode = new Node(data);
      if (!head) {
        setHead(newNode);
        setTail(newNode);
        setCurrent(newNode)
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
        alert('Only Node')
        return;
      }

      if(current == tail) setCurrent(head)
  
      let currentDel = head;
      let previous = null;
  
      while (currentDel.next) {
        previous = currentDel;
        currentDel = currentDel.next;
      }
  
      previous.next = null;
      setTail(previous)
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

    const printSingle = () => {
      if(current == tail)  {
        alert("Last Node")
        return
      }
      setCurrent(prev => prev.next)
    }
  
    return {
      head,
      tail,
      length,
      append,
      print,
      deletes,
      printSingle,
      current,
    };
  };

export default useLinkedList