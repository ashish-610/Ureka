import { Button } from "./components/ui/button";
import { useAppStore, useCounterStore } from "./store";

const Home = () => {
  const count=useCounterStore((state)=>state.count);
   const increase = useCounterStore(
    (state) => state.increase
  );

  const decrease = useCounterStore(
    (state) => state.decrease
  );

  const companyName = useAppStore(
  (state) => state.companyName
);
  return (
    <div>
<h1 className="text-7xl">Home Page</h1>
<h1 className="text-3xl font-bold">{companyName}</h1>

<h2>Count :{count}</h2>
  <Button onClick={increase} className="cursor-pointer">
        Increase
      </Button>

      <Button onClick={decrease} className="cursor-pointer">
        Decrease
      </Button>
    </div>
  )

}

export default Home
