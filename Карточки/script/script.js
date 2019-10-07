const cards = document.querySelectorAll('.card');
let i = 80;
let shift = -10;
let levels = [];
let col1 = [];
let col2 = [];

for (let card of cards){
  card.style.backgroundColor = `rgb(180, ${i}, 10)`;
  card.style.transform = `translateZ(${shift}px)`;
  levels.push(shift);
  col1.push(card);
  shift -= 50;
  i += 10;
}
col1.reverse();
levels.reverse();

for (let card of cards){
  card.addEventListener('click', swipe);
}
console.log(levels);

async function swipe() {
  item = event.target
  if (validateItem(item, col1)) { // Элемент в первом столбце
    if (col1.length > col2.length){
      col2.push(col1.pop(item));
      item.style.transform += ` translateX(350px)`;
      await setTimeout(() => item.style.transform = ` translateZ(${levels[col2.indexOf(item)]}px)  translateX(350px)`, 1000);
    }else{
      console.log('Как ты сука оказался тут')
      col2.push(col1.pop(item));
      item.style.transform = ` translateZ(${levels[col2.indexOf(item)]}px)`;
      await setTimeout(() => item.style.transform = ` translateZ(${levels[col2.indexOf(item)]}px)  translateX(350px)`, 500);
    }
  }
  else{
    if (validateItem(item, col2)){
      if (col2.length > col1.length){
        col1.push(col2.pop(item));
        item.style.transform += `translateX(-350px)`;
        await setTimeout(() => item.style.transform = ` translateZ(${levels[col1.indexOf(item)]}px)`, 500);
      }else{
        col1.push(col2.pop(item));
        console.log(item.style.transform);
        console.log(levels[col1.indexOf(item)]);

        item.style.transform = `translateX(350px) translateZ(${levels[col1.indexOf(item)]}px)`;

        console.log(item.style.transform);

        await setTimeout(() => item.style.transform = ` translateZ(${levels[col1.indexOf(item)]}px)`, 500);
      }
    }
  }




}

function validateItem(item, col){
  //console.log('ITEM', item)
  //console.log(`Элемент есть в массиве?`)
  let check1 = (col.indexOf(item) == -1)? false : true;
  //console.log('CHECK1', check1)

  //console.log('Элемент является верхним?');
  let check2 = (col.indexOf(item) == col.length -1)? true : false;
  //console.log('CHECK2', check2)

  return check1 && check2
}
