// bookList('Эволюция', 'Звук и ярость', 'На маяк', 'Унесенные ветром', 'Дети полуночи', 'Родной сын')
function bookList(...list){
  let a=[]
  let b=[]
  for(let i of list){
    i.toLowerCase().includes('у') ? a.push(i) : b.push(i)
  } 
  const result = a.concat(b).join('\n')
  return result
}
console.log(bookList('Эволюция', 'Звук и ярость', 'На маяк', 'Унесенные ветром', 'Дети полуночи', 'Родной сын'));

var a, s=0;
for (i=1; i<4; ++i) {
a=prompt("Введи число №"+i, "");
s=s+Number(a);
}
{alert("Среднее арифметическое введенных вами чисел равно "+s/3);}
