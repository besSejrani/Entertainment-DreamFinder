import {

    initMap,
} from './app/map'
import {
    buildAllDreams
} from './app/dream'

import './style.scss'

const init = () => {
    initMap();
    buildAllDreams();
}
window.init = init()