let products = JSON.parse(localStorage.getItem("products"))||[];
document.querySelector("form").addEventListener("submit",myfun)

function Product(name,category,url,price,gender,sold) {
      this.name = name;
      this.category = category;
      this.url = url;
      this.price = price;
      this.gender = gender;
      this.sold = sold;
    }
function myfun() {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let category = document.querySelector("#category").value;
  let url = document.querySelector("#image").value;
  let price = document.querySelector("#price").value;
  let gender = document.querySelector("#gender").value;
  let sold = document.querySelector("#sold").value;
  let p = new Product(name,category,url,price,gender,sold);
  products.push(p);

  localStorage.setItem("products",JSON.stringify(products));
}