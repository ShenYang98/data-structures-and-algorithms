function Node() {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

function insert(newElement,item){
  let newNode =new Node(newElement);
  let current = this.find(newNode);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item){
  let current = this.find(item);
  while(current.next != null){
    current.previous.next = current.next;
    current.next.previous = current.previous;
    current.previous = null;
    current.next = null;
  }
}

function findLast(){
  let current = this.head;
  while(!current.next === null){
    current = current.next;
  }
  return current;
}

function dispReverse(){
  let current = this.head;
  current =this.findLast();
  while(!current.previous === null){
    console.log(current.element);
    current = current.previous;
  }
}