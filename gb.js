var targetNumber; //внешняя переменная числа
function setNumber() { //загадываем число
  targetNumber=parseInt(Math.random()*100); //генерация случайного числа от 0 до 100
  if (targetNumber==0) { //если число загаданно 0
    targetNumber=1; //то присваиваем ему значение 1
  }
}

function tryToGuess() { //функция попытайся угадать что за число
  var message='Угадайте число от 1 до 100 за 10 попыток';
  var attempts=10; //колличество попыток
  setNumber(); //название функции см. строку 2
  while (attempts>0) { //условие провекри если попыток > 0
    var entered=prompt(message);//считываем то, что вводим в строке
    if (entered==null) { //если значение нулевое или пустое
      break; // прерываем конкатенацию 
    }
    else {  
      if (isNaN(entered) || entered.indexOf(' ')>=0 || entered=="") { // если ничего не введено или 0 
        message='Введи число! (осталось '+attempts+' попыток)'; //выводит оставшиеся попытки
      }
      else if (Number(entered)>targetNumber) { // введенное значение БОЛЬШЕ загаданного
        attempts--; // уменьшает число попыток на 1
        message='Меньше! (осталось '+attempts+' попыток)'; //выводит оставшиеся попытки
      }
      else if (Number(entered)<targetNumber) { // введенное значение МЕНЬШЕ загаданного
        attempts--;
        message='Больше! (осталось '+attempts+' попыток)'; //выводит оставшиеся попытки
      }
      else if (Number(entered)==targetNumber) { //если угодали то 
      var con=confirm("Правильно! Сыграем ещё раз?") // выбор при true
        if (con) { //при нажатии на OK продалжаем играть
          setNumber(); //название функции
          attempts=10; //колличество попыток
          message='Угадайте число от 1 до 100 за 10 попыток';
        }
        else { //если прерываем
          break; 
        }
      }
    }
    if (attempts==0) {  // колличество попыток равно 0 
      var con=confirm('Вы не угадали :( Загаданное число: '+targetNumber+'. Сыграем ещё раз?'); //какое число было
      if (con) {  // если хотим играть
        setNumber();  // название функции
        attempts=10; // колличество попыток
        message='Угадайте число от 1 до 100 за 10 попыток'; //сообщение
      }
      else {
        break;
      }
    }
  }
}


