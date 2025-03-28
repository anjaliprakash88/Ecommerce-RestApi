import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import {useState, useEffect} from 'react';

function AllProducts(){
    const baseUrl='http://127.0.0.1:8000/api';
    const [products, setProducts]=useState([]);
    const [totalResult,setTotalResults]=useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/products/')
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data.results));
    // });

    useEffect(() => {
        fetchData(`${baseUrl}/products/?page=${currentPage}`);
    }, [currentPage]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data.results);
            setTotalResults(data.count);
        });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);
    }

    var links = [];
    for(let i=1;i<=totalResult;i++){
        links.push(<li class="page-item"><Link onClick={() =>changeUrl(baseUrl+`/products/?page=${i}`)} class="page-link" to={`/products/?page=${i}`}>{i}</Link></li>)
    }

    return(
        <section className="container mt-4">
            <h3 className="mb-4">All products</h3>
              <div className="row">
                {
                    products.map((product)=><SingleProduct product={product} />)
                }
                
               
              </div>

              <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    {links}
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default AllProducts;