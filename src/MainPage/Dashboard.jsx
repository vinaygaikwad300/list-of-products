import { useEffect, useState } from 'react';
import ProductInfo from "../Products/ProductInfo";

const Dashboard = () => {
    const [mainData, setMainData] = useState({});
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((data) => data.json())
            .then((result) => {
                setMainData(result);
                setProducts(result.products);
            });
    }, []);
    return (<div>
        <div><center><h1>Product Details</h1></center></div>
        <ProductInfo products={products}/>
    </div>);
};


export default Dashboard;