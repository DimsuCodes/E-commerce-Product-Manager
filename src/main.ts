import { fetchProduct, fetchProducts } from './services/apiService';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';

/*
  Entry point: fetches products, shows their details and tax,
 then deliberately requests a missing product to show error handling.
 */
async function main(): Promise<void> {
    try {
        // 1. fetch one product and show it (OOP: a Product object with its own methods)
        const product = await fetchProduct(1);
        product.displayDetails();
        console.log(`Tax: $${calculateTax(product.price, product.category).toFixed(2)}`);

        // 2. fetch a list of products; groceries use the lower 3% tax rate
        const products = await fetchProducts(5);
        console.log(`\nFetched ${products.length} products:`);
        for (const item of products) {
            item.displayDetails();
            console.log(`  Tax: $${calculateTax(item.price, item.category).toFixed(2)}`);
        }

        // 3. error handling demo: product 99999 does not exist, so this throws an ApiError
        console.log('\nRequesting a product that does not exist...');
        await fetchProduct(99999);
    } catch (error) {
        handleError(error);
    }
}

main();
