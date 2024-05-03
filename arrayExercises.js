// Write a function that takes an array and returns a new array with the last item removed.
function task1(arr) {
    arr.pop();
    return arr;
}
// Write a function that takes an array and returns the length of items it has.
function task2(arr){
    return arr.length;
}
// Write a function that takes an array and an item, returns the array with the item added to the end of array.
function task3(arr,item){
    arr.push(item);
    return arr;
}

// Write a function that takes an array and an item, returns the array with the item added to the beginning of array.
function task4(arr,item){
    arr.unshift(item);
    return arr;
}
// Write a function that takes an array of words and returns a string of the words seperated by ,
function task5(arr){
    return arr.join(', ');
}
// Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.
function task6(arr, start, end) {
    return arr.slice(start, end + 1);
}
// Write a function that takes an array and an index, returns the item at given index.
function task7(arr, index) {
    return arr[index];
}
// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.
function task8(arr, item) {
    return arr.filter(element => element !== item);
}

