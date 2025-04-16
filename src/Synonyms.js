export default function Synonyms({ synonyms, onSearch, setKeyword }) {
  if (!synonyms || synonyms.length === 0) return null;

  function handleClick(word) {
    setKeyword(word);
    onSearch(word);
  }

  return (
    <div className="SynAnto-container">
      <strong className="highlight">Synonyms:</strong>
      <div className="syn-ant-list">
        {synonyms.map((synonym, index) => (
          <div
            className="syn-ant-item"
            key={index}
            onClick={() => handleClick(synonym)}
          >
            {synonym}
          </div>
        ))}
      </div>
    </div>
  );
}
