import { calculateDiscount } from '../utils/discountCalculator';
//importing calculateDiscount so it can work with this.price and this.discountPercentage.



/*Product.ts is the picture of what we're building showcasing the details (interface)
  export allows other files to use this file's information. Essentially it sends something out of this file.
/*The interface lists what a product must have. Essentially it's like a menu that shows what's avaliable.


/* () parenthaeses are for functions while {} curly brackets hold group of things that belongs together: function's
instructions, and if, or, here, an interface's fields
 [] brackets are for lists. */


//Describes the shape of the raw API data.

export interface ProductData {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[], //'string[]' lists an array of strings.
    brand?: string,
    thumbnail: string,
    returnPolicy: string,

}

//The factory that makes real product objects
//properties ends with ;

export class Product {
    readonly id: number;
    public title: string;
    public description: string;
    public category: string;
    readonly price: number;
    readonly discountPercentage: number;
    public rating: number;
    public stock: number;
    public tags: string[]; //'string[]' lists an array of strings.
    public brand?: string | undefined;
    public thumbnail: string;
    public returnPolicy: string;

    //a special piece inside of the class that runs when you make a product
    constructor(data: ProductData) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.tags = data.tags; //'string[]' lists an array of strings.
        this.brand = data.brand;
        this.thumbnail = data.thumbnail;
        this.returnPolicy = data.returnPolicy;
    }
    getPriceWithDiscount(): number {
        const dollarsOff = calculateDiscount(this.price, this.discountPercentage);
        return this.price - dollarsOff;
    }
    displayDetails(): void {
        console.log(`Title: ${this.title} | Price: $${this.price.toFixed(2)}| Sale Price: ${this.getPriceWithDiscount().toFixed(2)} |Brand: ${this.brand?? "Unknown"} |Stock: ${this.stock} `);
    }
}






