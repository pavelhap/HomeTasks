class TodoList {
    constructor() {
        this.todo = []
    }
    addToList(text) {
        //подумать как сгенерировать уникальный id const obj = {text: text, date: Date.now(), id: 1} можно удалить текст и написать здесть text = prompt();
        text = prompt();
        this.todo.push({ text: text, date: Date.now(), id: Math.floor(Math.random() * 100) })
        this.render();
    }
    removeFromList(id) {
        id = Number(prompt());
        let index = this.todo.map(item => item.id).indexOf(id);
        if (index != -1) this.todo.splice(index, 1)
        this.render();
    }
    sort() {  //вернуть все тудушки отсортировать по дате от больше к меньшему 
        this.todo.sort(function (a, b) {
            return (b.date - a.date)
        })
        this.render();

    }
    clear() { //очистить тудушки сделать начальное значение удалить вообще все
        this.todo.splice(0, this.todo.length)
        this.render();

    }
    render() { //каждый раз будем вызывать когда делаем остальные, нужно сначала очистить заново перерирсовать очистим опять рисуем 

        const HTML = this.todo.map(item => `<li>${item.text}</li> `).join('');
        document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>'

    }
}

let test = new TodoList;


// document.getElementById("item-list").innerHTML = '<ul>' + test.todo.text + '</ul>' ;