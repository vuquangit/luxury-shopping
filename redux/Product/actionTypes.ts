export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_CLEAR = 'PRODUCT_CLEAR'

interface IProductSizes {
  size: number
  availability: boolean
}

interface IProductFeature {
  title: string
  detail: string[]
}

export interface IProductDataState {
  id: number
  productName: string
  productCode: string
  productType: string
  productCategories: string
  productColor: string
  productMaterial: string[]
  productFor: string[]
  priceValue: string
  productSizes: IProductSizes[]
  productDescription: string
  productFeatures: IProductFeature
  productImages: string[]
}

export interface IProductState {
  readonly isFetching: boolean
  readonly data: IProductDataState | null
  readonly error?: string | null
}

interface ProductUpdateAction {
  type: typeof PRODUCT_REQUEST | typeof PRODUCT_FAILURE | typeof PRODUCT_SUCCESS
  payload?: IProductState
  error?: any
}

interface ProductClearAction {
  type: typeof PRODUCT_CLEAR
}

export type ProductActionTypes = ProductUpdateAction | ProductClearAction
