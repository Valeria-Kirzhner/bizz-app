import React from "react";

const Search = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-4 center-block">
          <div class="input-group rounded mt-3">
            <input
              type="search"
              class="form-control rounded "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
