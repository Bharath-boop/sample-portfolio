import React from 'react'
import Card from './assets/components/card';
function App() {
  let data = [
    {
      title: "one",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. aut eius enim eligendi?",
    },
    {
      title: "two",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta iste velit tempore aliquam architecto natus rem labore illum perspiciatis ?",
    },
    {
      title: "three",
      dis: "Lorem ipsum dolor sluptatibus dicta iste velit tempore aliquam arre illum perspiciatis magni ipsa quae porro nesciunt sapiente, aut eius enim eligendi?",
    },
    {
      title: "four",
      dis: "Lorit. Voluptatibus dicta iste velit tempore aliquam architecto natus rem labore illum perspiciatis magni ipsa quae porndi?",
    },
  ]; 
  return <>
      <div className="container">
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>
        <div className="row">
          {
            data.map((e,i)=>{
              return <Card cardData={e} key={i}/>
            })
          }
        </div>
      </div>
    </>
}

export default App;
