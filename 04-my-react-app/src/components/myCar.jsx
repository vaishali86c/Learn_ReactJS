function MyCar() {
    const car = ['ford', 'bmw', 'audi', 'mercedes']

    return (
        <>
            <h1>My Cars</h1>
            <ul>
                {car.map((car) => (<li>I am a {car}</li>))}
            </ul>
        </>
    )
}

function MyCars() {
    const cars = [
        { id:1, name: 'ford', price:2000},
        { id:2, name: 'bmw', price:3000},
        { id:3, name: 'audi', price:4000},
        { id:4, name: 'mercedes', price:5000}
    ]
    return (
        <>
            <h1>My Cars</h1>
            <ul>
                {cars.map((car) => (<li key={car.id}>I am a {car.name} and I cost ${car.price}</li>))}
            </ul>
        </>
    )
}

export { MyCar, MyCars }