# E-commerce Product Manager in TypeScript using the DummyJSON API

A TypeScript project that fetches products from the [DummyJSON Products API](https://dummyjson.com/docs/products), turns them into `Product` objects, calculates tax and discounts, and handles errors with a custom error class.

## Project Plan

**API requests**
- `GET https://dummyjson.com/products/{id}` fetches one product.
- `GET https://dummyjson.com/products?limit={n}` fetches a list of products. The list comes back inside a `products` array.
- Requests use `async/await` so the program waits for the network without freezing.

**Error handling**
- `fetch` does not throw on a 404 or 500, so the code checks `response.ok` and throws a custom `ApiError` that carries the HTTP status code.
- Each API function uses `try/catch` and rethrows, so `main.ts` decides what to do.
- `handleError()` checks what kind of error it received (`ApiError`, a regular `Error`, or something unknown) and prints a clear message.

**Product display**
- Raw API data is described by the `ProductData` interface and turned into a `Product` class instance.
- `displayDetails()` prints the title, price, sale price, brand and stock.
- `getPriceWithDiscount()` returns the price after the discount.

## Business Rules
- Discount: `calculateDiscount()` returns the **dollar amount** off, not the new price.
- Tax: `calculateTax()` returns the **dollar amount** of tax. The default rate is 4.75%, and the `groceries` category uses 3%.

## How to Run
```bash
npm install
npx tsc
node dist/main.js
```

Note: the assignment mentions both `main.ts` and `dist/index.js`. This project uses `main.ts` as the entry point, so the compiled file is `dist/main.js`.

## File Structure
```
src/
├── models/Product.ts            ProductData interface and Product class
├── services/apiService.ts       fetchProduct() and fetchProducts()
├── utils/discountCalculator.ts  calculateDiscount()
├── utils/taxCalculator.ts       calculateTax()
├── utils/errorHandler.ts        ApiError class and handleError()
└── main.ts                      entry point that ties everything together
```


## AI and Resources Disclosure
I used Claude as a tutor to guide me through this project, along with my own notes in Notion and Google. Claude explained concepts and reviewed my code as I wrote it. I wrote `taxCalculator.ts`, `discountCalculator.ts` and `Product.ts` myself with that guidance, and I wrote the `if / else if / else` structure of `handleError()`. Because I was running short on time, Claude wrote `src/services/apiService.ts` and this README, and helped me the the `ApiError` skeleton template class and the messages inside `handleError()` to study.
# E-commerce-Product-Manager
