export interface ProductType {
  _id: string
  title: string
  description: string
  price: number
  imageCover: string
  ratingsAverage: number
  category?: {
    _id: string
    name: string
    slug: string
  }
  createdAt: string
  updatedAt: string
}
