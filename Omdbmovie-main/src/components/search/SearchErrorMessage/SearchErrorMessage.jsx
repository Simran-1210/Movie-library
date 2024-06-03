import React from "react";
import "./searchErrorMessage.scss";

const SearchErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return (
    <div className="search-error">
      {/* console.log({props}) */}
      <p>
        <strong>{error}</strong>
      </p>
      <p>Please adjust your search.</p>
    </div>
  );
};

export default SearchErrorMessage;
