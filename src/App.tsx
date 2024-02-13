import React from "react";
import UseEffectHook from "./components/useeffecthook";
//import Navbar from './components/Navbar';
// import "./components/Navbar.css";
// import "./components/Product.css";
// import Addproduct from "./expense-tracker/components/Addproduct";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
//import styled from 'styled-components';
//import Product from './components/Product';
//import Expandable from './components/Expandable';
//import Update from './components/Update';
//import Form from './components/Form';
//import Reactformhook from './components/reactformhook';
//import FormValidationwwithzod from './components/formvalidationwithzod';

// const Nav = styled.nav`
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     background-color: orange;
//     padding: 10px;
//     border-radius: 50%;
//     cursor: pointer;
// `

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  // ]);
  // const [productCount , setProductCount] = useState<number>(0);
  // const text = `Paris (French pronunciation: ⓘ) is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023
  //               [2] in an area of more than 105 km2 (41 sq mi),[5] Paris is the fourth-most populated city in the European Union and the 30th most densely populated city in the world in
  //               2022.[6] Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, and gastronomy. For its leading role
  //               in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.[7]`;

  // const addProduct = () => {
  //     setProductCount(productCount+1)
  // }

  // const removeProduct = () => {
  //   if (productCount > 0){
  //       setProductCount(productCount-1)
  //   }

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter(e => e.category === selectedCategory)
  //   : expenses;

  return (
    <React.Fragment>
      {/* <Nav>
        <Navbar productCount={productCount}/>
      </Nav> */}
      {/* <Product addProduct={addProduct} removeProduct={removeProduct}/> */}
      {/* <Expandable Children={text} maxChar={100}>
      </Expandable> */}
      {/* <Update/> */}
      {/* <Form/> */}
      {/* <Reactformhook/> */}
      {/* <FormValidationwwithzod/> */}
      {/* <Addproduct  onSubmit={expense => setExpenses([...expenses ,{...expense , id: expenses.length + 1}])}/>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}
      <UseEffectHook/>
    </React.Fragment>
  );
}

export default App;
