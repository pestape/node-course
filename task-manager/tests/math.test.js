const { calculateTip } = require('../src/math');
const { fahrenheitToCelsius } = require('../src/math');
const { celsiusToFahrenheit } = require('../src/math');
const { add } = require('../src/math');


test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})


test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})


test('Should conver 32 fahrenheit into 0 celsius', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should conver 0 celsius into 32 fahrenheit', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1.).toBe(2)
//         done()
//     }, 2000);

// })

test('Should add 2 numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add 2 numbers async/await', async () => {
    const sum = await add(2, 3)
    expect(sum).toBe(5)
})
