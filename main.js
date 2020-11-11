class Hamburger {
	constructor (size, stuffing) {
		this.size = size;
		this.filling = stuffing;
		this.toppings = [];
	}
	
	addToppings(topping) {
		this.toppings.push(topping);
	}

	getCalories() {
		let calloriesArray = this.toppings.map(function (x) {
			return Hamburger.TOPPINGS[x].calories;
		 });
		calloriesArray.push(Hamburger.SIZES[this.size].calories, Hamburger.ALL_STUFFING[this.filling].calories);
			let calories = calloriesArray.reduce(function(accumulator, cal) {
				return accumulator + cal;
			},0)
			return calories;
		}
		
	getPrice() {
		let priceArray = this.toppings.map(function (x) {
			return Hamburger.TOPPINGS[x].price;
		});
		priceArray.push(Hamburger.SIZES[this.size].price, Hamburger.ALL_STUFFING[this.filling].price);
		let priceTag = priceArray.reduce(function(accumulator, priceTags) {
			return accumulator + priceTags;
		}, 0)
		return priceTag;
	}
}

Hamburger.SIZE_SMALL = "Маленький бургер";
Hamburger.SIZE_LARGE = "Большой бургер";

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 20,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 40,
        calories: 100,
    },
};

Hamburger.STUFFING_CHEESE = "Начинка с сыром";
Hamburger.STUFFING_SALAD = "Начинка с салатом";
Hamburger.STUFFING_POTATO = "Начинка с картошкой";

Hamburger.ALL_STUFFING = {
	[Hamburger.STUFFING_CHEESE]: {
		price: 10,
		calories: 20
	},
	[Hamburger.STUFFING_SALAD]: {
		price: 20,
		calories: 5
	},
	[Hamburger.STUFFING_POTATO]: {
		price: 15,
		calories: 10
	}
}

Hamburger.TOPPING_SAUCE = 'Посыпать приправой';
Hamburger.TOPPING_MAYO = "Полить майонезом";

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 0,
    },
    [Hamburger.TOPPING_MAYO]: {
        price: 20,
        calories: 5,
    },
};
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
hamburger.addToppings(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SAUCE);
console.log(`Калории: ${hamburger.getCalories()} калорий`);
console.log(`Цена: ${hamburger.getPrice()} тугриков`);
console.log(`Цена: ${hamburger.getPrice()} тугриков`);
