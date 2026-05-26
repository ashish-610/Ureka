import { useSearchParams } from "react-router"


const Query = () => {
    const [searchParams] =useSearchParams();

    const category=searchParams.get("category");
    const productId=searchParams.get("id");
  return (
    <div>
   

      <p>{category} Page</p>
      <p>{productId}</p>
    </div>
  )
}

export default Query
