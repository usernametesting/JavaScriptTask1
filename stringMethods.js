// String method-ları

// at(index): Verilmiş index-də olan character-i qaytarır
const str1 = "Hello";
// console.log(str1.at(0));
// console.log(str1[0]);

/* indexOf(substring): Verilmiş substring-in hansı index-də yerləşdiyini qaytarır,
case sensitive-dir. Verilmiş substring tapılmadıqda -1 qaytarır
*/
const testString = "Hello World";
// console.log(testString.indexOf("W"));

// Concat: String-ləri birləşdirmək üçün istifadə olunur
const concatStr1 = "Hello";
const concatStr2 = "World";
// console.log(concatStr1.concat(" ", concatStr2));
// concat method-u olmadan da bu formada yazıla bilər
// console.log(concatStr1 + concatStr2);

/* slice(startIndex, endIndex): startIndex-dən başlayıb, endIndex-ə qədər olan
 hissəni kəsib string kimi qaytarır
 */
const sliceTest = "Hello World";
// console.log(sliceTest.slice(0, 5));

/* substring(startIndex, endIndex): İşləmə məntiqi slice method-u ilə eynidir,
 amma negative index-lərlə işləmir
 */
const substringTest = "Hello World";
//  console.log(substringTest.substring(0, 5));

// toUpperCase(): Verilmiş string-in bütün hərflərini böyük hərfə çevirir
const lowercase = "Hello";
// console.log(lowercase.toUpperCase());

// toLowerCase(): Verilmiş string-in bütün hərflərini kiçik hərfə çevirir
const uppercase = "HELLO";
// console.log(lowercase.toLowerCase());

/* trim(): Verilmiş string-in əvvəlində və sonunda ola biləcək boşluqları silir,
adətən form validation-da istifadə olunur
*/
const stringWithWhitespaces = "     email@example.com      ";
// console.log(stringWithWhitespaces.trim());

/* replace(searchValue, replaceValue): Verilmiş string-də searchValue-da yazılmış string-i tapıb
replaceValue ilə əvəzləyir
 */
const str = "Hello World";
// console.log(str.replace("World", "Universe"));

// includes(searchValue): Verilmiş string-də searchValue varsa true, yoxdursa false qaytarır
// console.log(str.includes("World"));

// split(character): Verilmiş string-i character yerləşən hissələrdən ayırıb array halına gətirir
const names = "Rəsul,Hidayət,Xəyal";
const namesArray = names.split(",");
// console.log(namesArray);
// Əgər split method-una boş string ötürülərsə value-nu character-lərdən ibarət arraya çevirir
// console.log(names.split(""))

// length: Method yox property-dir, verilmiş string-in uzunluğunu qaytarır
const lengthTest = "Javascript"
// console.log(lengthTest.length)