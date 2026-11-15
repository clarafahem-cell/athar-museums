import "../styles/FilterSidebar.css";

const typeOptions = [
  "National Museum",
  "Specialized Museum",
  "Archeological Site",
  "Art Museum",
];

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
        <option>Alexandria</option>
        <option>Aswan</option>
        <option>Faiyum</option>
      </select>

      <h4 className="filter__heading">Museum Type</h4>
      {typeOptions.map((type) => (
        <label className="filter__check" key={type}>
          <input
            type="checkbox"
            checked={types.includes(type)}
            onChange={() => toggleType(type)}
          />
          {type}
        </label>
      ))}

      <h4 className="filter__heading">Sort By</h4>
      <select
        className="filter__select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>Most Popular</option>
        <option>Name (A-Z)</option>
      </select>
    </aside>
  );
}

export default FilterSidebar;