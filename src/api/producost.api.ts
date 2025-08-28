export default async function getProdcust() {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  const result = await response.json();

  return result.data; 
}
