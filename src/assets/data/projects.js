import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import sfccproject from '../images/sfccproject.png'

const projects = [
  {
    id: uuidv4(),
    name: 'Movie Search Engine',
    desc:
      "An website made using html and css used for searching movies and it's information using Omdb API",
    img: ProjectImg,
    href: 'https://dharmeshgurnani.github.io/MovieSearchEngine/'
  },
  {
    id: uuidv4(),
    name: 'SFCC FTP Products Images',
    desc:
      "This Salesforce Commerce Cloud cartridge provides Job For Importing Product Images from the FTP server",
    img: sfccproject,
    href: 'https://github.com/dharmeshgurnani/SFCC-job_ImportProductsImagesFromFTP'
  }
];

export default projects;
