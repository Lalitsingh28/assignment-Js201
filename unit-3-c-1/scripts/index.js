//store the products array in localstorage as "products"

function details(type,description,price,image){
    this.type = type;
    this.description = description;
    this.price = price;
    this.image = image;
}


function productData(event){
    event.preventDefault();
    // let data = JSON.parse(localStorage.getItem("productsData"))||[]
    data.forEach(function(elem){
        
        let form = document.querySelector("#products")
        let type = form.type.value;
        let description = form.desc.value;
        let price = form.price.value;
        let image = form.image.value;
        
        let detail = new details(type,description,price,image)
       
        let data = JSON.parse(localStorage.getItem("productsData"))||[]
        data.push(detail)
        localStorage.setItem("productsData",JSON.stringify(data))
    console.log(data)
    })
}