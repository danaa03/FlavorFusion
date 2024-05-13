import React from 'react'


function App() {

  return (
    <div><nav className="navbar2 navbar-dark">
    <div className="container-fluid d-flex justify-content-between ">
    <a className="navbar-brand" href="/">Recipe Generator</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="offcanvas offcanvas-end text-bg-dark " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">DASHBOARD</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Profile</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/Page3">Update Payment Plan</a>
            {/* <Link to="/Page3">Update Payment Plan</Link> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Leave Review</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</nav>
{/* <div>
      <h1>Items:</h1>
      <ul>
      {recipes.slice(0, 100).map(recipe => (
        <li key={recipe._id}>{recipe.Title} - {recipe.Ingredients}</li>
      ))}
      </ul>
    </div> */}
    </div>
    
  );
}

export default App;
