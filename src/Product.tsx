import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div>
      <h2>Products :</h2>

      <h3>
        <ul>
          <li>
            <Link to={"/product/shoes"}>Shoes</Link>
          </li>
          <li>
            <Link to={"/product/laptops"}>Laptops</Link>
          </li>
          <li>
            <Link to={"/product/drinks"}>Drinks</Link>
          </li>
          <li>
            <Link to={"/product/monitors"}>Monitors</Link>
          </li>
        </ul>
      </h3>
    </div>
  )
}

export default Product
