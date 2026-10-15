export function calculateTax(price: number, category: string):number {
    let rate = 0.0475; //"let" makes a box named rate with a taxrate of 4.75% which will be applied to each product
    if (category === "groceries") {
        rate = 0.03; // the taxrate for groceries would be 3% 
    }

    return price * rate; //hand's the box's contents back
}

