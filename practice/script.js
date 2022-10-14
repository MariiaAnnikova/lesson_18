//fetch('https://jsonplaceholder.typicode.com/users')// отправили запрос
//.then(resp => resp.json())//получили ответ  и преобразовали в джейсон
//.then(json => console.log(json)) // получили джейсон и вывели данные в консоль

//fetch('https://jsonplaceholder.typicode.com/users/1')
//.then(resp => resp.json())
//.then(json => console.log(json))

//fetch('https://reqres.in/api/users?page=1')
//.then(res => res.json())
//.then(json => console.log(json.data))

const CardContainer = document.querySelector('.CardContainer');
console.log(CardContainer);
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(resp => resp.json())
.then(json => render(json))

const render = (json) => {
    const card= document.createElement('div')
    const nameElem= document.createElement('p')
    const userNameelem= document.createElement('p')
    const phoneElem= document.createElement('p')

    nameElem.innerText = `Name ${json.name}`;
    userNameelem.innerText = `Name ${json.username}`;
    phoneElem.innerText = `Name ${json.phone}`;


    card.append(nameElem, userNameelem, phoneElem);
    CardContainer.append(card);
}