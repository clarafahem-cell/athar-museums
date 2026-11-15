import { useState } from "react";
import "../styles/MuseumsPage.css";
import Hero from "../components/Hero";
import FilterSidebar from "../components/FilterSidebar";
import MuseumList from "../components/MuseumList";
import museums from "../data/museums";

function MuseumsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [types, setTypes] = useState([]);
  const [sortBy, setSortBy] = useState("Most Popular");

  const toggleType = (type) => {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredMuseums = museums
    .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
    .filter((m) => location === "All Locations" || m.city === location)
    .filter((m) => types.length === 0 || types.includes(m.type))
    .sort((a, b) =>
      sortBy === "Most Popular"
        ? b.popularity - a.popularity
        : a.name.localeCompare(b.name)
    );

  return (
    <main className="museums-page">
      <Hero />
      <section className="museums-page__body">
        <FilterSidebar
          search={search}
          setSearch={setSearch}
          location={location}
          setLocation={setLocation}
          types={types}
          toggleType={toggleType}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <MuseumList museums={filteredMuseums} />
      </section>
    </main>
  );
}

export default MuseumsPage;