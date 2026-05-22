import { useNavigate } from "react-router";
import { Button } from "./components/ui/button"


const PageNotFound = () => {
   const navigate = useNavigate();
const handleNavigate=()=>{
    navigate(-1);
}

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
       <h2 className=" text-4xl font-bold">404 Page Not Found</h2>
       <Button className="px-8 py-6 text-xl rounded-xl cursor-pointer" onClick={handleNavigate} >Back</Button>
    </div>
  )
}

export default PageNotFound
