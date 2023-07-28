import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-between align-items-baseline">
        <div className="w-50 d-flex justify-content-start pe-5 ps-5">
          <h1>Start Bootstrap</h1>
          <nav className="d-lg-inline-block d-md-none d-sm-none d-xs-none">
            <a className="pe-2">Home</a>
            <a className="pe-2">About</a>
            <a>Shop</a>
          </nav>
        </div>
        <button className="btn btn-outline-secondary menu d-lg-none d-md-inline d-sm-inline d-xs-inline">
          <div className="mb-1"></div>
          <div className="mb-1"></div>
          <div></div>
        </button>
        <button className="btn btn-outline-dark d-lg-inline-block d-md-none d-sm-none d-xs-none">
          Cart <span>0</span>
        </button>
      </header>
      <div class="p-5  bg-dark box1">
        <h1 class="text-light bg-dark mt-5  font-weight-bold">Shop in style</h1>
        <p class=" mb-5 ">With this shop hompeage template</p>
      </div>
      <div className="d-flex flex-wrap p-5 box2 m-lg-5 justify-content-center">
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h5 className="m-3">Fancy Product</h5>
          <p className="m-3">$40.00 - $80.00</p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">View options</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h6>Sale</h6>
          <h5 className="m-3">Special Item</h5>
          <p className="m-3">
            <span>$20.00</span> $18.00
          </p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h6>Sale</h6>
          <h5 className="m-3">Sale Item</h5>
          <p className="m-3">
            <span>$50.00</span> $25.00
          </p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h5 className="m-3">Popular Item</h5>
          <p className="m-3">$40.00</p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h6>Sale</h6>
          <h5 className="m-3">Sale Item</h5>
          <p className="m-3">
            <span>$50.00</span> $25.00
          </p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h5 className="m-3">Fancy Product</h5>
          <p className="m-3">$120.00 - $280.00</p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">View options</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h6>Sale</h6>
          <h5 className="m-3">Special Item</h5>
          <p className="m-3">
            <span>$20.00</span> $18.00
          </p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 m-4 border">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"></img>
          <h5 className="m-3">Popular Item</h5>
          <p className="m-3">$40.00</p>
          <p className="m-3"></p>
          <button className="btn btn-outline-dark m-3">Add to cart</button>
        </div>
      </div>
      <footer className="bg-dark p-5">
        <p className="text-white">Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;
