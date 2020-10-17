import React from 'react'
import renderer from 'react-test-renderer'
import ProductItem from '../index'
import productData from './mockData.json'

it('renders product item', () => {
  const tree = renderer.create(<ProductItem {...productData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
