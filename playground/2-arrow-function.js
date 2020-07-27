// const square = function (number) {
//     return number * number
// }

// const square = (number) => {
//     return number * number
// }

// const square = (number) => number *number


// console.log(square(3));

// const event =  {
//     name: 'Birthday party',
//     printGuestLis: function () {
//         console.log('Guest list for ' + this.name);
        
        
//     }
// }

const event =  {
    name: 'Birthday party',
    guestList: ['Pedro', 'Lucas', 'Gui', 'Joao'],
    printGuestLis() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
            
        })
    }
}

event.printGuestLis()

