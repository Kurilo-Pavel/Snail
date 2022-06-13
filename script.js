let body = document.querySelector('body');
let input = document.createElement('input');
let p = document.createElement('p');
let p2 = document.createElement('p');
let button = document.createElement('button');
let text = document.createTextNode('Введите целое число)');
let matrix = document.createElement('p');
let div = document.createElement('div');

p.appendChild(text);
button.textContent = 'Ввод';
button.style.marginInline = '1rem';
body.appendChild(p);
body.appendChild(input);
body.appendChild(button);
body.appendChild(p2);
body.appendChild(div);
div.style.marginInline = '2rem';
button.addEventListener('click', num);

function num() {
  if (input.value === '0' || parseInt(Math.abs(input.value))) {
    input.style.border = '2px solid black';
    p2.textContent = 'Принято!';
    snail(input.value * 1);
    console.log(input.value);

  } else {
    input.style.border = '2px solid red';
    p2.textContent = 'Попробуй еще разок)';
  }
}

snail = function (array) {
  let newArray = [];
  for (let l = 1; l <= array; l++) {
    newArray.push([]);
  }

  let number = 0;
  let midle = 0;
  let lengthArray = array;

  function repeat(num) {
    if (array - midle > 0) {
      for (let i = 0; i < array; i++) {
        for (let k = 1; k <= array; k++) {
          if (i === midle / 2) {
            if (k > midle / 2 && k <= array - midle / 2) {
              newArray[i][k - 1] = k + num - midle / 2;
            }
          }
          if (i === array - 2 - midle / 2) {
            if (k >= midle / 2 && k <= array - 1 - midle / 2) {
              newArray[k][array - 1 - midle / 2] = array + k - midle / 2 + num - midle;
            }
          }
          if (i === 1) {
            if (k < array - 1 - midle / 2 && k >= midle / 2) {
              newArray[array - 1 - k][midle / 2] = array * 2 + k + array - 2 + num - 3 * midle - midle / 2;
            }
          }
          if (i === array - 1 - midle / 2) {
            if (k > midle / 2 && k <= array - midle / 2) {
              newArray[i][array - k] = k + array * 2 - 2 + num - midle * 2 - midle / 2;
            }
          }
        }
      }
    }
    number = number + (array - midle) * 4 - 4;
    midle += 2;
    lengthArray = lengthArray - 2;
    if (lengthArray >= 0) {
      return repeat(number);
    }
  }

  repeat(number);
  renderingMatrix(newArray);
}

function renderingMatrix(arr) {
  let table = document.createElement('table');
  table.style.textAlignLast = 'center';
  div.appendChild(table);
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let k = 0; k < arr[i].length; k++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      let number = document.createTextNode(arr[i][k]);
      td.appendChild(number);
      td.style.width = '2rem';
      td.style.height = '2rem';
      td.style.border = '1px solid gray';
    }
  }
}

