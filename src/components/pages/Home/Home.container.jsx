import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../redux/products"

import Home from "./Home"

const HomeContainer = () => {

  const dispatch = useDispatch()

  const {products} = useSelector(store => store.products)

  useEffect(() => {

    dispatch(getProducts())

  }, [])
  
  console.log(products)

  const childProps = {

    products
    
  }

  return <Home {...childProps} />
}

export default HomeContainer
  