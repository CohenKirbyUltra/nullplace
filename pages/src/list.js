// this script makes the lists used in the htmls. like archives, clopedia, etc.

var characters = [
  {
    id: 1,
    name: 'Alice',
    image: 'https://via.placeholder.com/150',
    description: 'Alice is a brave adventurer from Nullplace.',
  },
  {
    id: 2,
    name: 'Bob',
    image: 'https://via.placeholder.com/150',
    description: 'Bob is a skilled engineer with a mysterious past.',
  },
  {
    id: 3,
    name: 'Cleo',
    image: 'https://via.placeholder.com/150',
    description: 'Cleo is a wise sage who guides the group.',
  },

];

function CharacterInfoSheet({ character, onClose }) {
  if (!character) return null;
  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      background: '#fff',
      border: '1px solid #ccc',
      padding: '20px',
      zIndex: 1000,
      width: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      <img src={character.image} alt={character.name} style={{ width: '100%', marginBottom: '10px' }} />
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default function Knowledge() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Character List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {characters.map(char => (
          <button
            key={char.id}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid #888',
              background: '#eee',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedCharacter(char)}
          >
            {char.name}
          </button>
        ))}
      </div>
      {selectedCharacter && (
        <CharacterInfoSheet
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

const buttonsDiv = document.getElementById("characterButtons");
const infoSheet = document.getElementById("infoSheet");
const charImg = document.getElementById("charImg");
const charName = document.getElementById("charName");
const charDesc = document.getElementById("charDesc");

characters.forEach((char, idx) => {
  const btn = document.createElement("button");
  const img = document.createElement("img");

  img.src = char.image;
  img.style.width = "100%";
  img.style.height = "100%";

  btn.appendChild(img);

  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.onclick = () => {
    charImg.src = char.image;
    charImg.alt = char.name;
    charName.textContent = char.name;
    charDesc.textContent = char.description;
    infoSheet.classList.add("visible");
  };

  buttonsDiv.appendChild(btn);
});

function closeSheet() {
  infoSheet.classList.remove("visible");
}