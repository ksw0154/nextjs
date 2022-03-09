import React from "react";

const Store = ({ stores }) => {
  return <div>{stores}</div>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:9000/stores");
  console.log(res);
}

export default Store;
