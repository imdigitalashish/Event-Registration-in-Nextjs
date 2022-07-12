import React from 'react'

export default function UserIdPage(props) {
    return (
        <div>{props.id}</div>
    )
}


export async function getServerSideProps(context) {

    const { params } = context;

    const userId = params.uid;
    console.log(userId);
    return {
        props: {
            id: `userid-${userId}`,
        },
    }

}