// <!-- Домашка 11(до 22.07. 00-00)

// Дописываем дату вниз страницы ((с) - 2022 год), также текущую дату и время и методы.
// 1. Метод средней оценки ревью (по всем ревью)
// 2. 2 Метода сортировки от большего к меньшему и наоборот

// Прислать в личку в телеграм архив с заданием -->

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataEntries = formData.entries();
    const data = Object.fromEntries(formDataEntries);
    const validated = Review.validate(data);
    if (validated) {
        reviews.addToList(data);
    }
    else {
        alert('вы ввели неправильные данные')
    }
})

const sortMintoMax = document.getElementById('sortMintoMax');
sortMintoMax.addEventListener('click', (event) => {
    event.preventDefault();
    reviews.sortReviewMinToMax();
})


const sortMaxtoMin = document.getElementById('sortMaxtoMin');
sortMaxtoMin.addEventListener('click', (event) => {
    event.preventDefault();
    reviews.sortReviewMaxToMin();
})

class Review {
    constructor() {
        this.reviewList = []
    }
    addToList(data) {
        this.reviewList.push(data)
        this.render()
        this.averageReview();
    }
    static validate(data) {
        if (data.text && data.from && (data.review <= 5 && data.review >= 1)) {
            return true
        }
        return false
    }
    averageReview() {
        const AVERAGE = (this.reviewList.reduce((r, c) => (r + c.review * 1), 0) / this.reviewList.length).toFixed(2);
        document.getElementById("review-mark").innerHTML = '<p>' + 'Average Review: ' + AVERAGE + '</p>';
    }
    render() {
        const HTML = this.reviewList.map(item => `<li>Review: ${item.text} From: ${item.from} Stars: ${item.review} </li> `).join(' ');
        document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>';
    }
    sortReviewMinToMax() {
        this.reviewList.sort((a, b) => {
            return a.review - b.review;
        })
        this.render();
    }
    sortReviewMaxToMin() {
        this.reviewList.sort((a, b) => {
            return b.review - a.review;
        })
        this.render();
    }
}
const reviews = new Review();




