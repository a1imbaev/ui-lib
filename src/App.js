import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Button variant = "primary" size = "sm"> Confirm </Button>
      <Button variant = "bordered" size = "md"> Cancel </Button>
      <Button size = "lg"> Cancel </Button>
    </div>
  );
}

export default App;
