// Add the coffee to local storage with key "coffee"

let url = ` https://masai-mock-api.herokuapp.com/coffee/menu`

async function getData(){
    let res = await fetch(url)
    // console.log(res)
    let data = await res.json()
    // console.log(data.menu.data)
    append(data.menu.data)
}
getData()

function append(data){
    let container = document.getElementById('menu')
    container.innerHTML = null;
    data.forEach(function(elem){
        let div = document.createElement('div')

        let image = document.createElement('img')
        image.src = elem.image;
        let desc = document.createElement('h5')
        desc.innerText = elem.description;
        let price = document.createElement('p')
        price.innerText = elem.price;
        let btn = document.createElement('button')
        btn.innerText = 'Add To Bucket'
         btn.setAttribute("onclick", add_to_bucket(elem))
        
        div.append(image,desc,price,btn)
        container.append(div)
    })
}
let counter = 0;
document.getElementById('coffee_count').append(counter)
let coffee = JSON.parse(localStorage.getItem("coffee"))|| [];
function add_to_bucket(data){
  
    //  coffee.append(data)
    //  console.log(data)

    localStorage.setItem("coffee",JSON.stringify(coffee))


}