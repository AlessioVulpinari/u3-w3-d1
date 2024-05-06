import { Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content)

  return (
    <Container>
      <Row>
        {favourites.map((companyName) => (
          <Link to={`/${companyName}`} as='Col' key={companyName} className='col-12 border border-primary my-1 py-1'>
            {companyName}
          </Link>
        ))}
      </Row>
    </Container>
  )
}

export default Favourites
