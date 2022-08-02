// ; Домашка №5(до 01.07. 00-00)

// ; Напишите функцию, которая принимает массив строк и  возвращает  строку, заменяя null на ваше имя.

// ; ['hello', 'i', 'am', null] -> 'hello i am henadzi'

// ; Прислать в личку в телеграм архив с заданием


let newArray = ['hello', 'i', 'am', null];

let editArray = (array, name) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == null) {
            array.splice(i, 1, name);
        }

    } return array

}

console.log(editArray(newArray, 'Pavel'));