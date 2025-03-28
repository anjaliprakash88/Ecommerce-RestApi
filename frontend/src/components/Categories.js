import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + '/categories');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.results); // Ensure it's an array
        setTotalResults(data.count);
      });
  }
var links = [];
var limit = 1;
var totalLinks = totalResult / limit;
    for(let i=1;i<=totalLinks;i++){
        links.push(<li class="page-item"><Link onClick={() =>changeUrl(baseUrl+`/products/?page=${i}`)} class="page-link" to={`/products/?page=${i}`}>{i}</Link></li>)
    }
  return (
    <section className="container mt-4">
      <h3 className="mb-4">All Categories</h3>
      <div className="row mb-2">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div className="col-12 col-md-3 mb-4" key={category.id}>
              <div className="card">
                <img src={logo} className="card-img-top" alt={category.title} />
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to={`/category/${category.title}/${category.id}`}>
                      {category.title}
                    </Link>
                  </h4>
                </div>
                <div className="card-footer">Product downloads: 2356</div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </section>
  );
}

export default Categories;
