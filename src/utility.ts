// utility type

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string
}

// create a new type for product summary
type ProductSummary = Pick<Product, 'id' | 'name' | 'price'> // Pick is an utility type it takes a type and its key.

// create a new type for product that reduce some type
type ProductWithoutPrice = Omit<Product, 'price'>

// create a new type by required all types
type ProductWithColor = Required<Product>

// create a new type that make all type optional
type OptionalProduct = Partial<Product>

// create a new type that make all the type readonly, none can change any type
type ReadonlyProduct = Readonly<Product>

// when have to declare an empty object
const emptyObj: Record<string, unknown> = {}