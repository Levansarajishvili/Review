const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web developer",
        
        img: "./Images/download.jpg",
        text: "I am web-developer since 2018. I am web-developer since 2018. I am web-developer since 2018."
    },

    {
        id: 2,
        name: "Sarah Jones",
        job: "Web designer",
        img: "./Images/download%20(3).jpg",
        text: "I am web-designer since 2018. I am web-designer since 2018. I am web-designer since 2018."
    },

    {
        id: 3,
        name: "Peter Pen",
        job: "Psychologist",
        img: "./Images/download%20(1).jpg",
        text: "I am Psychologist since 2018. I am Psychologist since 2018. I am Psychologist since 2018."
    },

    {
        id: 4,
        name: "Jilly Anderson",
        job: "The boss",
        img: "./Images/download%20(4).jpg",
        text: "I am Psychologist since 2018. I am Psychologist since 2018. I am Psychologist since 2018."
    },
]


// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
const numberBtn = document.querySelector("#number")


//set starting item
let currentItem = 1;

//load initial items
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
    createBtn();

});

//show person based on items
function showPerson (params){
    currentItem = params
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

function createBtn() {
    let itemLength = reviews.length
    console.log('item',itemLength)
    for(const element of reviews){
        const newBtn = document.createElement('button')
        newBtn.classList.add('btn-number')
        newBtn.innerText = element.id
        numberBtn.appendChild(newBtn)
    }
    console.log("number",numberBtn.children)
    const itemArray = numberBtn.children

    for(const element of itemArray){
        console.log('ele',element)
        element.addEventListener('click', (event) => {
            console.log('click event', event.target)
            let numberText = event.target.innerText
            numberText--
            console.log('number', numberText)
            showPerson(numberText)
        })
    }
}

//show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

//show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

//show rendom person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
})