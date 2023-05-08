let num1 = parseInt(prompt("Birinci ededi daxil edin: "));
let num2 = parseInt(prompt("Ikinci ededi daxil edin: "));

let hasil = 1;
let cem = 0;

let i = num1 + 1;
while (i < num2) {
  hasil *= i;
  cem += i;
  i++;
}

alert(`Aradakı ədədlərin hasil: ${hasil} ve cəmi: ${cem} -dir.`);