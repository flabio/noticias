import React, { Fragment } from "react";
const Resultado = ({ noticias }) => {
    
  if (Object.keys(noticias).length === 0) return null;

  return (
    <Fragment>
      <div className="card-columns">
        {noticias.map((option) => (
          <div className="card" key={option.url}>
            <img
              className="card-img-top"
              src={option.urlToImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{option.title}</h5>
              <p className="card-text">{option.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <a
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="waves-effect waves-light btn"
                >
                  Ver Noticia Completa
                </a>
              </small>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Resultado;
