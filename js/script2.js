'use strict'

// 1. Собрать данные с формы при ее сабмите
// 2. Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// 3. Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
// 4. Если данных нет, то показать соответствующее сообщение


let odj = JSON.parse(localStorage.getItem('#form'))

if(odj) {
    let ul = document.createElement('ul');

    for( let key in odj) {
        if(odj[key]) {
            let li = document.createElement('li');
            li.innerHTML = `${key}: ${odj[key]}`;
            ul.append(li);
        }
    }
    document.body.append(ul);
}