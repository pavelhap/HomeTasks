// Домашка №3(до 23.06. 00-00)

// Написать функцию которая убирает отрицательные значения(которые вы все должны помнить null undefined и тд)
// из массива и вернуть новый массив

// [1,2, null, '', false, 4] - > [1,2,4]

// Прислать в личку в телеграм архив с заданием



function filterArray(array) {
    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i]) {
            arrayResult.push(array[i]);
        }
    } return arrayResult
}


let arrayTest = ['1', '2', null, '', false, '4', '6'];
alert(filterArray(arrayTest));



