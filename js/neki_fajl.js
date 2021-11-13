const number_01 = 10;

for (i=0;i<10;i++)
  console.log(i);


var neki_drugi_string="tomzi"
var neki_string="ila"
// console.log(neki_string)

// duzina_sringa=neki_string.length;
// console.log(duzina_sringa)

// for(i=0;i<10;i++){
//     console.log(neki_string[i])
// }
i++
i+=1
console.log(neki_string[0]);
console.log(neki_string[1]);
console.log(neki_string[2]);
console.log(neki_string[3]);
console.log(neki_string[4]);
counter=0;
for(i=0;i<1066;i++){
    if (neki_string[i] == undefined || neki_string == null){
        break;
    }
    counter+=1;
    console.log(neki_string[i]);
}
console.log(counter-1);


var lista=["mortal kombat", "tekken"];

console.log(lista[1]);

var slovo=lista[1];
console.log(slovo);
console.log(slovo[0]);

var lista2=[neki_drugi_string,  neki_string, 12312, "dqwdqw", false];
console.log(lista2);