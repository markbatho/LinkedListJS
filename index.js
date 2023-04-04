const LinkedList = require('./lib/LinkedList');

const list = new LinkedList();

list.append('0000');
list.append('0001');
list.append('0002');
list.append('0003');
list.append('0004');
console.log(list.head());
console.log(list.size());
console.log(list.toString());
console.log(list.tail());
console.log(list.at(3));

list.prepend('Prep01');
list.prepend('Prep02');
console.log(list.head());
console.log(list.size());
console.log(list.toString());
console.log(list.tail());
console.log(list.at(5));

list.pop();
list.pop();
console.log(list.size());
console.log(list.toString());
console.log(list.tail());

console.log(list.contains('Prep01'));
console.log(list.find('Prep01'));

list.insertAt('Inserted At', 4);
console.log(list.size());
console.log(list.toString());

list.removeAt(4);
console.log(list.size());
console.log(list.toString());
