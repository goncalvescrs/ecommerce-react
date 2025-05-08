const paginacao = (props) => {
  const { totalPaginas, paginaAtual, setPaginaAtual } = props;

  const handlePageChange = (page) => {
    setPaginaAtual(page);
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>

      {/* <div className="paginacao">
      <button
        onClick={() => handlePageChange(paginaAtual - 1)}
        disabled={paginaAtual === 1}
      >
        Anterior
      </button>
      {Array.from({ length: totalPaginas }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={paginaAtual === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
      >
        Próxima
      </button>
    </div> */}
    </>
  );
};

export default paginacao;
