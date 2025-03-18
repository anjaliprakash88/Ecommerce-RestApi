import logo from '../logo.svg';
import {Link} from 'react-router-dom';
function Categories(){
return(
     <section className="container mt-4">
     {/* Popular Categories */}
      <h3 className="mb-4">All CategoriesView all categories</h3>
      <div className="row mb-2">
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
      {/* end category box */}

     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
    {/* end category box */}
     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      </div>

      <div className="row mb-2">
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
      {/* end category box */}

     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
    {/* end category box */}
     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to="/">Category title</Link></h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      </div>

       {/* END LATEST CATEGORY */}
     </section>
        )
}

export default Categories;