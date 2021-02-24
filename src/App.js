import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <p> It's react</p>
      <Count></Count>
      <Todo></Todo>
      <Dynamic name="Name"></Dynamic>
      <Dynamic name="Name"></Dynamic>
      <Dynamic name="Name"></Dynamic>
      <Dynamic name="Name"></Dynamic>
      <Dynamic name="Name"></Dynamic>
      <Dynamic name="Name"></Dynamic>
      <Product product={products[0]}></Product>
      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
}
function Todo() {
  const [todo, setTodo]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data))
  },[])
  return(
    <div>
      <h3>Todo : {todo.length}</h3>
      {
        todo.map(todo=><li>{todo.title}</li>)
      }
    </div>
  )
}
function Count() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
const products = [
  { name: "Photo Shop", price: "90.99" },
  { name: "Illustrator", price: "90.99" },
  { name: "Dream Weaver", price: "90.99" },
];

function Dynamic(props) {
  const dynamicStyle = {
    border: "2px solid red",
    margin: "10px",
  };
  return (
    <div style={dynamicStyle}>
      <h3>hi {props.name}</h3>
      <p>Lorem ipsum dolor sit veniam.</p>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    background: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "5px",
  };
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>${props.product.price}</h1>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
