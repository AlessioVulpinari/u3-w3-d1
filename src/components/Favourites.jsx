import { Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content)

  return (
    <Row>
      {favourites.map((companyName) => (
        <Link to={`/${companyName}`} as='Col' key={companyName} className='col-12'>
          {companyName}
        </Link>
      ))}
    </Row>
  )
}

export default Favourites
