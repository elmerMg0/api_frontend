import React from "react";

const Paginator = ({ pageInfo }) => {
  let { page, count, next, previus, start, totalPages} = pageInfo
  return <div>
        <p>Items por pagina</p>
  </div>
};

export default Paginator;
