import "../styles/FilterSidebar.css";


function FilterSidebar({
  search,
  setSearch,
  location,
  setLocation,
  types,
  toggleType,
  sortBy,
  setSortBy,
}) {
  return (
    <aside className="filter">
      <input
        className="filter__search"
        type="text"
        placeholder="Search for a museum..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h4 className="filter__heading">Location</h4>
      <select
        className="filter__select"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option>All Locations</option>
        <option>Cairo</option>
        <option>Giza</option>
        <option>Aswan</option>
        <option>Luxor</option>
      </select>

    
    </aside>
  );
}

export default FilterSidebar;