import "../style/Shop.css";

export const Shop = () => {
  return (
    <>
      <div className="shop-container">
        <div className="xbox-microsoft">
          <div className="microsoft-one">
            <span>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Soft-CP-OneDriveCampaignRefresh-2?wid=406&hei=230&fit=crop" alt="" />
              <h1>Microsoft OneDrive</h1>
              <p>
                Guarda tus archivos y fotos en OneDrive y accede a ellos desde
                cualquier dispositivo y en cualquier lugar.
              </p>
              <button> Más información</button>
            </span>
          </div>
          <div className="xbox-series-x">
            <span>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=406&hei=230&fit=crop" alt="" />
              <h1>Xbox series X</h1>
              <p>La Xbox más rápida y más potente de la historia.</p>
              <button>Comprar Xbox Series X</button>
            </span>
          </div>
          <div className="xbox-game-pass">
            <span>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-AEM-PC-Game-Pass-Expansion-No-Logo?wid=406&hei=230&fit=crop" alt="" />
              <h1>Xbox Game Pass</h1>
              <p>Disfruta de cientos de juegos de excelente calidad en tu consola y PC, además de juegos nuevos desde el primer día, multijugador en línea y EA Play</p>
              <button>Suscribite ahora</button>
            </span>
          </div>
          <div className="microsoft-365">
            <span>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=406&hei=230&fit=crop" alt="" />
              <h1>Maximiza el día a día con Microsoft 365</h1>
              <p>Recibe protección en línea, almacenamiento seguro en la nube y aplicaciones innovadoras diseñadas para adaptarse a tus necesidades, todo en un mismo plan.</p>
              <button>Para 1 sola persona</button>
              <button id="six-person">Hasta 6 perosonas <i id="six" class="bi bi-chevron-right"></i></button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
