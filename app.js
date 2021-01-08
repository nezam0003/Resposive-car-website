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

// display all cars
const displayCars = ((createCars) => {
    const cars = createCars.cars;
    const inventory = document.querySelector('.inventory-container');
    document.addEventListener('DOMContentLoaded', () => {
        inventory.innerHTML = '';
        let output = '';
        cars.forEach(car => {
            output += `<!-- single car start -->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
                <div class="card car-card">
                    <img src="${car.img}" class="card-img-top car-img" alt="german">
                    <div class="card-body">
                        <div class="car-info d-flex justify-content-between">
                            <!-- first flex-child -->
                            <div class="car-text text-uppercase">
                                <h6 class="font-weight-bold">${car.make}</h6>
                                <h6>${car.model}</h6>
                            </div>
                            <!-- Second flex-child -->
                            <div class="car-value align-self-center py-2 px-3">
                                $<span class="car-price">${car.price}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-capitalize d-flex justify-content-between">
                        <p>
                            <span><i class="fas fa-car"></i> ${car.type}</span>
                        </p>
                        <p>
                            <span><i class="fas fa-cogs"></i> ${car.trans}</span>
                        </p>
                        <p>
                            <span><i class="fas fa-gas-pump"></i> ${car.gas}</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- single car end -->`;
        });
        inventory.innerHTML = output;
    });
})(createCars);

// Filter cars by category
const filterCars = (() => {
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const value = e.target.dataset.filter;
            const singleCar = document.querySelectorAll('.single-car');

            singleCar.forEach(car => {
                if (value === 'all') {
                    car.style.display = 'block';
                } else {
                    (!car.classList.contains(value)) ? car.style.display = 'none': car.style.display = 'block';
                }
            });
        });
    });
})();