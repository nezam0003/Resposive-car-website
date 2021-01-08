// hide preloader
window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));

const createCars = (() => {
    // car data
    const cars = [];
    // car class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }
    // car creation function
    function makeCar(make, country, img = 'images/featured-img.jpg', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', gas = '50') {
        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        cars.push(car);
    }

    // produce cars
    function produceCars() {
        makeCar('maercedes', 'german');
        makeCar('maercedes', 'german', 'images/car-german-1.jpg', true);
        makeCar('BMW', 'german', 'images/car-german-2.jpg');
        makeCar('chevy', 'german', 'images/car-german-3.jpg');
        makeCar('BMW', 'german', 'images/car-german-4.jpg', false);
        makeCar('maercedes', 'american', 'images/car-american-1.jpg');
        makeCar('chevy', 'american', 'images/car-american-2.jpg', false);
        makeCar('maercedes', 'american', 'images/car-american-3.jpg', false);
        makeCar('chevy', 'american', 'images/car-american-4.jpg');
    }
    produceCars();
    // special cars
    const specialCars = cars.filter(car => car.special === true);
    // console.log(specialCars);
    return {
        cars,
        specialCars
    }
})();

// display special cars
const displaySpecialCars = ((createCars) => {
    const specialCars = createCars.specialCars;
    const info = document.querySelector('.featured-info');

    document.addEventListener('DOMContentLoaded', () => {
        info.innerHTML = '';
        let data = '';
        specialCars.forEach(item => {
            data += `<!-- single item start -->
            <div class="featured-item p-2 my-3 d-flex flex-wrap text-capitalize align-items-baseline">
                <span data-img = "${item.img}" class="featured-icon mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!-- single item end -->`;
        });
        info.innerHTML = data;
    });

    // change images on click
    info.addEventListener('click', (e) => {
        if (e.target.parentElement.classList.contains('featured-icon')) {
            const img = e.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
        }
    });

})(createCars);