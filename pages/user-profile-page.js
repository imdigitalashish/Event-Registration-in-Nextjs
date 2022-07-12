import React from 'react'

export default function UserProfilePage(props) {


  


  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}


export async function getServerSideProps(context) {

  const { params, req, res } = context;


  console.log(req);
  console.log(res);

  return {
    props: {
      data: 'Ashish'
    }
  }
}