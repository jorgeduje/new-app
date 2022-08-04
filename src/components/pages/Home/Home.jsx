import * as React from "react"
import { Container, Row, Button } from "reactstrap"

const Home = (props) => {
  const { products  } = props

  return (
    <Container fluid>
     {
      products?.map(product => (
        <h2 key={product.name}>{product.name}</h2>
      ))
     }
    </Container>
  )
}

export default Home