import React from "react";

<<<<<<< HEAD
const Paginator = ({ page, getItems }) => {
  let { currentPage, totalCount, nextPage, previousPage, start, totalPages } = page;
  
  const handlePrevius = () => getItems(previousPage);

  const handleNext = () => getItems(nextPage);
=======
const Paginator = ({ pageInfo, getData }) => {
  let { page, count, next, previus, start, totalPages } = pageInfo;

  const handlePrevius = () => getData(previus);

  const handleNext = () => getData(next);
>>>>>>> origin/elmer

  return (
    <div className="paginator">
      <p>Items por pagina {totalCount}</p>
      <h5>{`${start + 1}-${start + totalCount} of ${currentPage}`}</h5>
      {currentPage === 1 ? 
          <button disabled onClick={handlePrevius} className=" ">{`<`}</button>
          :
          <button onClick={handlePrevius} className=" ">{`<`}</button>
      }
      {
        currentPage === totalPages ? 
        <button disabled onClick={handleNext} className=" ">{`>`}</button>
        :
        <button onClick={handleNext} className=" ">{`>`}</button>
      }
    </div>
  );
};

export default Paginator;
