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
              return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="" / ></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{e.title}</a>
                  </h4>
                  <p className="card-text">{e.dis}</p>
                </div>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </>
}

export default App;
