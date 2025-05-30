import { useState, useEffect } from "react";
import './styles.css';

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledButton,setDisableButtoh]=useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts(prev => [...prev, ...result.products]); 
            }

            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(()=>{
        if(products&&products.length===100)setDisableButtoh(true)
    },[products])

    return (
        <div className="container">
            <div className="product-container">
                {
                    products.length ?
                        products.map(item => (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )) : <p>No products found.</p>
                }
            </div>
            <div className="button-container">
                <button disabled={disabledButton} onClick={() => setCount(count+1)} >
                    {loading ? "Loading..." : "Load more Products"}
                </button>
                {
                    disabledButton ? <p>You have reached to 100 Products</p>:null
                }
            </div>
        </div>
    );
}


