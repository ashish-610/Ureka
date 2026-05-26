import { useState } from "react";
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { useAppStore } from './store'

const ChangeCompanyName = () => {
  const [name, setName] = useState("");

  const setCompanyName = useAppStore(
    (state) => state.setCompanyName
  );

  const handleSubmit = () => {
    setCompanyName(name);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Enter new company name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <Button onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
};

export default ChangeCompanyName;