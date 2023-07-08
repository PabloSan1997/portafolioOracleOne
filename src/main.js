import './estilos/main.css';
import './estilos/header.css';
import './estilos/presentacion.css';
import './estilos/sobremi.css';
import './estilos/skills.css';
import './estilos/formacion.css';
import './estilos/formulario.css';
import './estilos/experiencia.css';
import './estilos/footer.css';
import { enviarInformacion } from './formulario/enviar';
import { effectoScroll } from './scroll/scroll';
import { colocarImagenes } from './datos/insertarimagenes';
import { generarScills } from './datos/insertarSkills';
import { agregarExperiencia } from './experiencia/agregar';

const headerLength = 90;
const steps = 40;

effectoScroll(headerLength, steps);
enviarInformacion();
colocarImagenes();
generarScills();
agregarExperiencia();