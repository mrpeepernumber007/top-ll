class Node {
    constructor (value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor (pointer) {
        this.pointer = pointer
    }
    traverse(counter = 0, current = this.pointer, givenIndex) {
        
        if(current.next === null) {
            return { counter, current }
        }

        if(givenIndex === counter) {
            return current
        }

        let forward = current.next
        current = forward
        counter++
        
        return this.traverse(counter, current, givenIndex)
    }
    append(value) {
        const newNode = new Node(value, null)
        
    }
    prepend(value) {
        const newNode = new Node(value, this.pointer)
        this.pointer = newNode
    }
    size() {
        const listSize = this.traverse().counter
        return listSize
    }
    head(){
        return this.pointer
    }
    tail() {
        return this.traverse().current
    }
    at(index) {
        const returned = this.traverse(0, this.pointer, index)
        return returned
    }
    pop() {
        const listSize = this.size()
        const selected = this.at(listSize - 1)
        console.log(selected);
        selected.next = 'null'
    }
}

const firstNode = new Node('Peperino')
const listOne = new LinkedList(firstNode)
listOne.prepend('Bananin')
listOne.prepend('Cacoso')

const result = listOne.traverse()
console.log(
    result
);