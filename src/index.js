import { initMap } from "./app/map";
import { buildAllDreams } from "./app/dream";

import "./style.scss";
import "./assets/marker_done.png";
import "./assets/marker.png";

const init = () => {
  initMap();
  buildAllDreams();
};
window.init = init();
