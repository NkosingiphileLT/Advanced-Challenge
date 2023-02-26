// Question 1 - Show rating

function Showrating(ratings) {
    let rating = "";
    for (let i = 0; i < Math.floor(ratings); ++i) {
        rating = rating + '*'
        if (i !== Math.floor(ratings) - 1) {
            rating = rating + ' '
        }
    }
    if (!Number.isInteger(ratings)) {
        rating = rating + ' .';
    }
    return rating;
}
console.log(Showrating(3.5))

//Question 2 - Sort from Highest to lowest

function SortLowToHigh(number) {
    return number.sort((a, b) => a - b)
}
console.log(SortLowToHigh([1, 5, 867, 35, 32, 1000]))


//Question3

function SortObjects(Objects) {
    return Objects.sort((a, b) => b.price - a.price);
}
console.log(SortObjects([
    { id: 1, price: 500 },
    { id: 2, price: 200 },
    { id: 3, price: 5400 },
]));



//Question 4 - Promises
// Homework - Understang Promises/API


//Question 5- Find post by single user

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}
postsByUser(4);


//Question 6 - Incomplete Todos

async function TodoByUser(completed){

    const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const incomplete = await todos.json()
    const incoomtodos = incomplete.filter(elem => !elem.completed).slice(0,5)
    console.log(incoomtodos)
}
TodoByUser(6);
