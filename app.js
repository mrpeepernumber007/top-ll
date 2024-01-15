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
    traverse(counter = 0, current = this.pointer, givenIndex, givenValue) {
        if((current.value === givenValue) && givenValue != undefined) {
            return { counter, current }
        }
        
        if((givenIndex === counter) && givenIndex != undefined) {
            return current
        }
        
        if(current.next === null) {
            return { counter, current }
        }

        let forward = current.next
        current = forward
        counter++
        
        return this.traverse(counter, current, givenIndex, givenValue)
    }
    append(value) {
        const newNode = new Node(value, null)
        const previousNode = this.tail()
        previousNode.next = newNode
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
        const listSize = this.size() + 1 //test with -3 in the next line
        const selected = this.at(listSize - 2)
        selected.next = null
    }
    contains(query, toFind = false) {
        const returnedQuery = this.traverse(0, this.pointer, undefined, query)
        const searchResult = returnedQuery.current.value === query
        if(toFind) {
            return returnedQuery.counter
        }
        return searchResult
    }
    find(query) {
        return this.contains(query, true)
    }
}

const firstNode = new Node('Peperino')
const listOne = new LinkedList(firstNode)
listOne.prepend('Bananin')
listOne.prepend('Cacoso')
listOne.append('Linguo')

// listOne.pop()
console.log(
    listOne.find('Linguo')
);