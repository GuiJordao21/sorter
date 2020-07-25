import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const letters = new CharactersCollection("akbneiuybda");
const linkedList = new LinkedList();
linkedList.add(5400);
linkedList.add(540);
linkedList.add(540);
linkedList.add(-3);
const numbers = new NumbersCollection([1, 5, 2, -1, 0]);
numbers.sort();
letters.sort();
linkedList.sort();
console.log(numbers.data);
console.log(letters.data);
linkedList.print();
