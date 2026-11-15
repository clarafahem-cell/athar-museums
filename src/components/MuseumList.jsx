import "../styles/MuseumList.css";
import MuseumCard from "./MuseumCard";

function MuseumList({ museums }) {
  if (museums.length === 0) {
    return <p className="museum-list__empty">No museums found.</p>;
  }

  return (
    <div className="museum-list">
      {museums.map((museum) => (
        <MuseumCard key={museum.id} museum={museum} />
      ))}
    </div>
  );
}

export default MuseumList;