import React, { useEffect } from 'react'
import fs from "fs/promises";
import path from "path";
export default function ProductDetail(props) {

    const { loadedProducts } = props;


    if (!loadedProducts) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>{loadedProducts.title}</h1>
            <h1>{loadedProducts.description}</h1>
        </>
    )
}



async function getData() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}
export async function getStaticProps(context) {

    const { params } = context;

    const data = await getData();

    const productId = params.pid
    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            loadedProducts: product,
        }
    }
}




export async function getStaticPaths() {

    const data = await getData();

    const ids = data.products.map(product => product.id);
    const paramsWithParams = ids.map((id) => ({ params: { pid: id } }))

    return {
        paths: paramsWithParams,
        fallback: true, // true se Jo paths me define nhi uske liye bhi kaam krega pr wo page pre-render nhi hoga   
    };
}