//@js-check
//1.Definire en node
const node1 = {
    prev: null,
    next: null,
    data: "A"
}


//2.Lav en klasse med constructor til din liste
//Inde i constructor, indsæt den enlig node
class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

//5. Indsæt dumplist
    dumpList() {
        let a_node = this.first;
        while (a_node != null) {
            console.log
            (`
            node: ${a_node.data}
            -----------
            prev: ${a_node.prev?.data}
            next: ${a_node.next?.data}
            `);
            a_node = a_node.next;
        }
    }
}

//3.Lav en instans LinkedList, til test-kode
//Skriv det i slutning af koden

const ll = new LinkedList ();
console.log(ll);
//Tjek konsollen for at se ændringer ved at skrive "ll.dumpList()" og tryk enter

//4.Lav to nodes mere, og kæd alle nodes hardcoded sammen
const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "E"
}

//Hardcoded sammen
node1.next = node2;
node2.prev = node1;
node2.next = node3; 
node3.prev = node2;

//Tjek konsollen for at se ændringer

//5.Lav en .dumpList() metode i LinkedList klassen som udskriver nodes
//Dumplist er skrevet inde i det ovenstående ll klasse

