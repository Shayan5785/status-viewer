import React, { useState } from 'react'

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const useLinkedList = () => {

  const [head, setHead] = useState(null);
  const [tail, setTail] = useState(null);
  const [current, setCurrent] = useState(null)
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
    if (!head) return

    if (!head.next) {
      alert('Only Node')
      return;
    }

    if (current == tail) setCurrent(head)

    let currentDel = head;
    let previous = null;

    while (currentDel.next) {
      previous = currentDel;
      currentDel = currentDel.next;
    }

    previous.next = null;
    setTail(previous)
    setLength(length - 1);
  }

  const print = () => {
    let currenrt = head
    while (currenrt) {
      console.log(currenrt.data + " --> ")
      currenrt = currenrt.next
    }
    console.log("NULL")
  }

  const currentNext = () => {
    if (current == tail) {
      alert("Last Node")
      return
    }

    setCurrent(prev => prev.next)
  }

  return {
    head,
    current,
    length,
    append,
    deletes,
    print,
    currentNext,
  };
};
export default useLinkedList