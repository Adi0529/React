import { useState } from "react";
import logo from '../assets/logo.png'
export default function Vertical({ setSearchTerm, setFilters }) {

  // Local state for search bar
  const [localSearch, setLocalSearch] = useState("");

  // Local state for filters
  const [localFilters, setLocalFilters] = useState({
    category: "all",
    rating: 0,
    price: 0,
    inStock: false,
  });

  const handleFilterChange = (e) => {
    const { id, value, type, checked } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // 👇 Search button — only touches searchTerm
  const handleSearch = () => {
    setSearchTerm(localSearch);
  };

  // 👇 Filter button — only touches filters
  const handleFilter = () => {
    setFilters(localFilters);
  };

  return (
    <>
      <div className='object-fit-cover'>
        <img src={logo} className="mt-0 logo w-100 h-100" alt="" />

        {/* ── SEARCH BAR ── */}
        <nav className="navbar">
          <div className="container-fluid">
            <div className="d-flex" role="search">
              <input
                className="form-control p-2 pe-5 me-2"
                type="search"
                placeholder="Search"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
              {/* 👇 Only triggers name search */}
              <button className="btn btn-outline-success" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </nav>

        {/* ── FILTERS ── */}
        <div className='ms-1 mt-5 container'>
          <p className='fs-4'>Filter by</p>

          <div className="input-group mb-2">
            <select className="form-select" id="category" value={localFilters.category} onChange={handleFilterChange}>
              <option value="all">Category</option>
              <option value="beauty">beauty</option>
              <option value="fragrances">fragrances</option>
              <option value="furniture">furniture</option>
              <option value="groceries">groceries</option>
            </select>
          </div>

          <div className="input-group mb-2">
            <select className="form-select" id="rating" value={localFilters.rating} onChange={handleFilterChange}>
              <option value="0">Rating</option>
              <option value="1">&gt; 1</option>
              <option value="2">&gt; 2</option>
              <option value="3">&gt; 3</option>
              <option value="4">&gt; 4</option>
            </select>
          </div>

          <div className="input-group mb-2">
            <select className="form-select" id="price" value={localFilters.price} onChange={handleFilterChange}>
              <option value="0">Price</option>
              <option value="50">&gt; 50</option>
              <option value="500">&gt; 500</option>
              <option value="1000">&gt; 1000</option>
              <option value="2600">&gt; 2600</option>
            </select>
          </div>

          <div className="form-check form-switch m-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="inStock"
              checked={localFilters.inStock}
              onChange={handleFilterChange}
            />
            <label className="form-check-label" htmlFor="inStock">In Stock</label>
          </div>

          <div className='d-flex justify-content-center'>
            {/* 👇 Only triggers filters */}
            <button type="button" className="btn btn-info fs-6 p-2 mt-3" onClick={handleFilter}>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}