import React, { useContext, useState } from "react";
// import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./buscar.css";

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
    <div className="buscar_container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
        placeholder="Buscar produto..."
        className="buscar_input"
      />
    </div>
  );
};

export default Buscar;
