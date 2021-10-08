import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Movie Search Engine',
    desc:
      "An website made using html and css used for searching movies and it's information using Omdb API",
    img: ProjectImg,
  }
];

export default projects;
