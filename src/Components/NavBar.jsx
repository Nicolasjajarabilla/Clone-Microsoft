import { useState } from "react";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="logo de microsoft"
            />
          </div>
          <div className="content-navbar">
            <ul>
              <li>Microsoft 365</li>
              <li>Teams</li>
              <li>Copilot</li>
              <li>Windows</li>
              <li>Xbox</li>
              <li>Soporte</li>
            </ul>
          </div>
          <div className="btn-navbar">
            <div className="dropdwon">

            </div>
            <button onClick={handleClick}>
              Todo Microsoft <i className="bi bi-chevron-down"></i>
              {click && (
                <div className="dropdwon-content">
                  <ul className="software">
                    <li>
                      <b>Software</b>
                    </li>
                    <li>Aplicacion para Windows</li>
                    <li>Inteligencias Artificial</li>
                    <li>OneDrive</li>
                    <li>Outlook</li>
                    <li>Skype</li>
                    <li>OneNote</li>
                    <li>Microsoft Teams</li>
                  </ul>
                  <ul className="pcs-devs">
                    <li>
                      <b>PCs & Devs</b>
                    </li>
                    <li>Comprar Xbox</li>
                    <li>Accesorios</li>
                  </ul>
                  <ul className="Enterteinment">
                    <li>
                      <b>Enterteinment</b>
                    </li>
                    <li>Xbox Game Pass</li>
                    <li>Xbox Live Gold</li>
                    <li>Xbox y juegos</li>
                    <li>Juegos para PC</li>
                    <li>Juegos para Windows</li>
                  </ul>
                  <ul className="empresas">
                    <li>
                      <b>Empresas</b>
                    </li>
                    <li>Microsoft Cloud</li>
                    <li>Seguridad de Microsoft</li>
                    <li>Azure</li>
                    <li>Dynamics 365</li>
                    <li>Microsoft 365 para empresas</li>
                    <li>Microsoft Manufactura</li>
                    <li>Microsoft Power Plataform</li>
                    <li>Windwos 365</li>
                  </ul>
                  <ul className="ti">
                    <li>
                        <b>Desarrollo y TI</b>
                    </li>
                    <li>Centro de desarrollo</li>
                    <li>Documentacion</li>
                    <li>Microsoft Learn</li>
                    <li>Comunidad de Microsoft Tech</li>
                    <li>Markeplace de Azure</li>
                    <li>AppSoure</li>
                    <li>Visual Studio</li>
                  </ul>
                  <ul className="Otros">
                    <li>
                        <b>Otros</b>
                    </li>
                    <li>Seguridad y descargas gratuitas</li>
                    <li>Educacion</li>
                  </ul>
                </div>
              )}
            </button>
            <button>
              Buscar <i id="search" className="bi bi-search"></i>
            </button>
            <button>
              Carro <i id="cart" className="bi bi-cart"></i>
            </button>
            <button>
              Iniciar sesión <i id="login" className="bi bi-person-circle"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
