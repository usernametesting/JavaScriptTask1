// Exercise 1: String Length 
// Write a function that takes a string and returns its length.

function task1(str) {
    return str.length;
}

// Exercise 2: Character at Index
// Write a function that takes a string and an index. Return the character at that index.
function task2(str, index) {
    return str[index];
}

// Exercise 3: Extract Substring
// Write a function that takes a string and two indices (start and end). Return the substring between the given indices.
function task3(str, start, end) {
    return str.substring(start, end);
}
// Exercise 4: Split and Count Words
// Write a function that takes a sentence and returns the number of words in the sentence.
function task4(str) {
    return str.split(" ").length;
}

// Exercise 5: Search and Replace
// Write a function that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase.
function task5(sentence, searchWord, replaceWord) {
    return sentence.replace(searchWord, replaceWord);
}

// Exercise 6: Find Index of Character
// Write a function that takes a string and a character and returns the index of the first occurrence of that character in the string.
function task6(str, char) {
    return str.indexOf(char);
}

// Exercise 7: Reverse a String
// Write a function that reverses and returns a given string.
function task7(str) {
    return str.split('').reverse().join('');
}
// Exercise 8: Remove Whitespace
// Write a function that takes a sentence with extra whitespace, removes the extra spaces and returns the sentence.
function task8(str) {
    return str.trim();
}

// Exercise 9: Concat
// Write a function that concatenates two given strings and returns the resulting string.
function task9(str1, str2) {
    return str1.concat(str2);
}

// Exercise 10: Uppercase Conversion
// Write a function that takes a sentence and converts the first letter of each word to uppercase.
function task10(sentence) {
    var words = sentence.split(' ');
    words.forEach((word,index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1)
    });
    return words.join(' ');
}
