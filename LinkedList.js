//1. Definer antal nodes
const node1 = {
    prev: null,
    next: null,
    data: "B"
  };
  
  const node2 = {
    prev: null,
    next: null,
    data: "C"
  };
  
  const node3 = {
    prev: null,
    next: null,
    data: "D"
  };
  
  //2.Hardcode nodes så de henviser til den næste node
  node1.next = node2;
  node2.prev = node1;
  node2.next = node3;
  node3.prev = node2;
  
  //3. Opret LinkedList class ved brug af properties som i første node og sidste node
  class LinkedList {
    constructor() {
      this.first = node1; 
      this.last = node3; 
    }
  
    //4. Opret metode til at tilføje sidste node i listen
    addLast(data) {
      const newNode = {
        prev: this.last,
        next: null,
        data: data
      };
  
      if (this.last) {
        this.last.next = newNode;
      } else {
        this.first = newNode;
      }
      this.last = newNode;
    }
  
    //5. Opret metode til at tilføje første node i listen

    addFirst(data) {
      const newNode = {
        prev: null,
        next: this.first,
        data: data
      };
  
      //Opret if- and else statement
      if (this.first) { //If (condition) {true}: Print first node
        this.first.prev = newNode;
      } else { //Else (condition) {false}: Print last node
        this.last = newNode;
      }
      this.first = newNode;
    }

    removeLast() {
      if(!this.last) 
      return null;

      const removedData = this.last.data;
      if (this.first === this.last) {
        this.first = null;
        this.last = null;
      } else {
        this.last = this.last.prev;
        this.last.next = null;
      }
      return removedData;
    }

    removeFirst() {
      if (!this.first) return null; // List is empty
  
      const removedData = this.first.data;
      if (this.first === this.last) {
        // There is only one node in the list
        this.first = null;
        this.last = null;
      } else {
        // There are multiple nodes in the list
        this.first = this.first.next;
        this.first.prev = null;
      }
      return removedData;
    }
  
    removeNode(data) {
      let current = this.first;
  
      while (current) {
        if (current.data === data) {
          if (current === this.first) {
            return this.removeFirst();
          } else if (current === this.last) {
            return this.removeLast();
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            return data;
          }
        }
        current = current.next;
      }
      return null; // Data not found
    }
  
    insertBeforeNode(data, newData) {
      let current = this.first;
  
      while (current) {
        if (current.data === data) {
          const newNode = { data: newData, prev: current.prev, next: current };
          if (current.prev) {
            current.prev.next = newNode;
          } else {
            this.first = newNode;
          }
          current.prev = newNode;
          return; // Insertion complete
        }
        current = current.next;
      }
    }
  
    insertAfterNode(data, newData) {
      let current = this.first;
  
      while (current) {
        if (current.data === data) {
          const newNode = { data: newData, prev: current, next: current.next };
          if (current.next) {
            current.next.prev = newNode;
          } else {
            this.last = newNode;
          }
          current.next = newNode;
          return; // Insertion complete
        }
        current = current.next;
      }
    }
  
    swapNodes(nodeA, nodeB) {
      if (!nodeA || !nodeB || nodeA === nodeB) {
        return;
      }
    
      // Swap nodes if they are adjacent
      if (nodeA.next === nodeB) { // If A is directly before B
        nodeA.next = nodeB.next;
        nodeB.prev = nodeA.prev;
    
        if (nodeA.next) {
          nodeA.next.prev = nodeA;
        }
        if (nodeB.prev) {
          nodeB.prev.next = nodeB;
        }
    
        nodeB.next = nodeA;
        nodeA.prev = nodeB;
      } else if (nodeB.next === nodeA) { // If B is directly before A
        // The logic is similar to the above, with roles of nodeA and nodeB reversed
        this.swapNodes(nodeB, nodeA); // Just call swapNodes with reversed parameters
        return;
      } else { // For non-adjacent nodes
        const nextA = nodeA.next;
        const prevA = nodeA.prev;
        const nextB = nodeB.next;
        const prevB = nodeB.prev;
    
        if (nextA) nextA.prev = nodeB;
        if (prevA) prevA.next = nodeB;
        if (nextB) nextB.prev = nodeA;
        if (prevB) prevB.next = nodeA;
    
        nodeA.next = nextB;
        nodeA.prev = prevB;
        nodeB.next = nextA;
        nodeB.prev = prevA;
      }
    
      // Update first and last if necessary
      if (this.first === nodeA) {
        this.first = nodeB;
      } else if (this.first === nodeB) {
        this.first = nodeA;
      }
      if (this.last === nodeA) {
        this.last = nodeB;
      } else if (this.last === nodeB) {
        this.last = nodeA;
      }
    }
    

    nodeAt(index) {
      let current = this.first;
      let currentIndex = 0;
  
      while (current) {
        if (currentIndex === index) {
          return current;
        }
        currentIndex++;
        current = current.next;
      }
      return null; // Index out of bounds
    }
    

    // 6. Metode til at illustere listen i konsollen
    dumpList() {
      let currentNode = this.first;

      //while (condition = no value) {Print (`...`)}
      while (currentNode != null) {
        console.log(`
        Node data: ${currentNode.data}
        -----------
        Prev: ${currentNode.prev?.data}
        Next: ${currentNode.next?.data}
        `);
        currentNode = currentNode.next;
      }
    }
  }
  
  //7. Opret ny instans med forskellige tests
  const ll = new LinkedList();
  console.log ("Initialising Linked List");

  ll.addLast('E'); 
  console.log("'E' has been applied as last node" );

  ll.addFirst('A'); 
  console.log("'A' has been applied as first node" );

  //ll.removeLast(); // Slet node der indeholder den sidste element
  //console.log("Last node has been deleted");

  //ll.removeFirst(); // Slet node der indeholder den første element
  //console.log("First node has been deleted");

  //ll.removeNode('B'); // Slet node der indeholder data "B"
  //console.log("The chosen node has been deleted");

  //ll.insertBeforeNode('A', 'NewData'); // Indsæt ny data før node med indhold "C"
  //console.log("Newdata has been applied before node $`{}`")

  //ll.insertAfterNode('E', 'NewData'); // Indsæt ny data efter node med indhold "A"
  //console.log("Newdata has been applied after node $`{}`")

  //ll.swapNodes(ll.first, ll.last);
  //console.log("Swapping first node with last node:");

  const middleNode = ll.nodeAt(1);
  ll.swapNodes(ll.first, middleNode);
  console.log("First and middle node has been swapped");

  //ll.swapNodes(ll.last, middleNode);
  //console.log("Last and middle node has been swapped");

  ll.dumpList();

 // const node = ll.nodeAt(2);

  //ll.dumpList(); // Printer den nye liste efter den nye 'first' til den nye 'last'
  //console.log(ll)