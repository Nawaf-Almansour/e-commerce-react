import React, {useCallback, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import {fetchProducts} from "../services/api";


const Home = () => {
    const [query, setQuery] = useState('populate=*');
    const [products, setProducts] = useState([]);

    const fetchUser = useCallback(async () => {
        try {
            const data = await fetchProducts(query);
            setProducts(data.data);
        } catch (e) {
            console.error(e);
        }
    }, [query]);

    useEffect(() => {
        setQuery('populate=*')
        fetchUser().then(r => console.log(r));

    }, [fetchUser]);

    if (!products) {
        return <p>loading...</p>;
    } else {
        return (
            <Grid container spacing={2}>
                {products.map((product, index) => (
                    <Grid key={product.id} xs={12} md={4} item>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        );
    }
};

Home.propTypes = {};

export default Home;
