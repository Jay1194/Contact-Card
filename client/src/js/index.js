// import modules
import "./form";
import "./submit";

// import css files
import "../css/index.css";

//import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Logo from '../images/reddit.png';

window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });