import React from "react";

const Paginator = ({ pageInfo }) => {
  let { page, count, next, previus, start, totalPages} = pageInfo
  return <div className="paginator">
        <p>Items por pagina {count}</p>
        <h5>{ `${start + 1}-${(start + count)} of ${page}` }</h5>
        <button className=" ">{`<`}</button>
        <button className=" ">{`>`}</button>
  </div>
};

export default Paginator;
