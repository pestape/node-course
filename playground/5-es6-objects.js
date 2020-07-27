const name = 'Pedro'
const userAge = 30

const user = {
    name,
    age: userAge,
    location: 'Campinas'
}

console.log(user);

const product ={
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined, 
    rating: 4.2,
}


// const {label: productLabel, price, stock, salePrice, rating=2} = product

// console.log(productLabel)
// console.log(price)
// console.log(rating)

const transaction = (type, {label, stock = 0}={}) =>{
    console.log(type);
    console.log(label);
    console.log(stock);
}

transaction('order', product)