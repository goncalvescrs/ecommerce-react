import React, { useContext, useState } from "react";
// import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Buscar = () => {
  const [query, setQuery] = useState("");
  // const { setTermoDeBusca, termoDeBusca } = useContext(AppContext);
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const navigate = useNavigate();
  // console.log(termoDeBusca);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // onSearch(value);
    setTermoDeBusca(value);
  };

  function handleEnter(e) {
    if (e.key === "Enter") {
      console.log("Enter: ", query);

      // navigate("/busca");
      // setTermoDeBusca(query);
      navigate(`/busca?q=${encodeURIComponent(termoDeBusca)}`);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
        placeholder="Buscar produtos..."
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default Buscar;
