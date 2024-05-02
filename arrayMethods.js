/* length: Method yox property-dir, verilmiş array-in neçə elementdən
 ibarət olduğunu qaytarır
 */
const arrLengthTest = ["item1", "item2", "item3"];
// console.log(arrLengthTest.length)

// reverse(): Verilən array-i sondan başlanğıca doğru çevirir
// console.log(arrLengthTest.reverse())

// pop(): Array-in sonuncu elementini silir və həmin elementi bizə qaytarır
const poppedItem = arrLengthTest.pop();
// console.log(newArr)

/* shift(): Array-in birinci elementini silir və həmin elementi bizə qaytarır
digər bütün elementlərin indeksi 1 azalıb birinci elementin yerinə keçir.
*/
const shiftedItem = arrLengthTest.shift();
// console.log(newArr2)

// unshift(newItem): newItem-i verilmiş array-in əvvəlinə əlavə edir
const itemAddedToStart = arrLengthTest.unshift("item0");
// console.log(itemAddedToStart)

// push(newItem): newItem-i verilmiş array-in sonuna əlavə edir
const itemAdded = arrLengthTest.push("item4");
// console.log(arrLengthTest)

/* toString(): Verilmiş array-i sözləri vergüllə ayrılmış string-ə çevirir,
string method-larında olan split-in tərsi kimi düşünə bilərsiniz
*/
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.toString())

// includes("searchString"): Array-da searchString-ə uyğun value varsa true, yoxdursa false qaytarır
// console.log(fruits.includes('Mango'))

// join('character'): Verilmiş array-i sözləri method-a ötürdüyümüz character-lə ayrılmış string-ə çevirir
// console.log(fruits.join(" * "))

// at(index): Verilmiş index-də olan item-i qaytarır
// console.log(fruits.at(0));
// console.log(fruits[0]);

/* delete: Verilən index-dəki item-i silir, yerində undefined hole-lar buraxdığı üçün
 delete yerinə splice-dan istifadə olunur
 */
delete fruits[0];
// console.log(fruits);

/* splice(startIndex, endIndex (optional)): Splice method-u verilən array-da startIndex-dən 
başlayaraq arrayın sonuna qədər olan bütün elementlərdən ibarət yeni array qaytarır.
Əgər optional olan endIndex parametri ötürülərsə bu proses həmin indeksdəki elementə qədər davam edir.
*/
const citrus = fruits.slice(1, 3);
// console.log(citrus)
