// import { Product, ProductData } from '../models/Product';
// import { ApiError } from '../utils/errorHandler';

// const BASE_URL = 'https://dummyjson.com/products';

// /**
//  * Fetches a single product from the DummyJSON API.
//   @param id - the product's id number
//   @returns a Product object built from the API data
//   @throws ApiError when the server answers with an error status (e.g. 404)
//  */
// export async function fetchProduct(id: number): Promise<Product> {
//     try {
//         const response = await fetch(`${BASE_URL}/${id}`);

//         // fetch does NOT throw on 404/500, so we check response.ok ourselves
//         if (!response.ok) {
//             throw new ApiError(`Could not load product ${id}`, response.status);
//         }

//         // reading the body is also async, so we await it
//         const data = (await response.json()) as ProductData;
//         return new Product(data);
//     } catch (error) {
//         // pass the error up so main.ts decides how to report it
//         throw error;
//     }
// }

// /**
//  * Fetches several products in one request.
//   @param limit - how many products to ask for
//   @returns a list of Product objects
//   @throws ApiError when the server answers with an error status
//  */
// export async function fetchProducts(limit: number): Promise<Product[]> {
//     try {
//         const response = await fetch(`${BASE_URL}?limit=${limit}`);

//         if (!response.ok) {
//             throw new ApiError('Could not load the product list', response.status);
//         }

//         // this endpoint wraps the list in an object: { products: [...] }
//         const data = (await response.json()) as { products: ProductData[] };
//         return data.products.map((item) => new Product(item));
//     } catch (error) {
//         throw error;
//     }
// }
