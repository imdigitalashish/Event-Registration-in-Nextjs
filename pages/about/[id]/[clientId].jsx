import React from 'react'


import { useRouter } from "next/router";

function ClientIdJSX() {

    let router = useRouter();

    console.log(router.query);
    

    return (
        <div>ClientIdJSX</div>
    )
}

export default ClientIdJSX