import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../../assets/images/projectImg.png';
import sfccproject from '../../assets/images/sfccproject.png'
import alphanoise from '../../assets/images/alphanoise.png'
const projects = [
  {
    id: uuidv4(),
    name: 'King Cobra Hobby SFCC E-Commerce Store',
    desc:
      "King Cobra Hobby E-Commerce Store sells the top RC & Hobby brands on Salesforce Commerce Cloud",
    img: require('../../assets/images/kingcobrahobby.png'),
    href: 'https://www.kingcobrahobby.com'
  },
  // {
  //   id: uuidv4(),
  //   name: 'Waring Commercial SFCC E-Commerce Store',
  //   desc:
  //     "A Conair llc Brand King Cobra Hobby E-Commerce Store sells the top RC & Hobby brands on Salesforce Commerce Cloud",
  //   img: require('../../assets/images/kingcobrahobby.png'),
  //   href: 'https://www.kingcobrahobby.com'
  // },
  {
    id: uuidv4(),
    name: 'SFCC SFRA Webpack Builder',
    desc:
      "Tool's and scripts for Salesforce Commerce Cloud SFRA Standardized Compilation Setup aka sfra-webpack-builder",
    img: sfccproject,
    href: 'https://github.com/SalesforceCommerceCloud/sfra-webpack-builder'
  },
  {
    id: uuidv4(),
    name: 'SFCC FTP Products Images',
    desc:
      "This Salesforce Commerce Cloud cartridge provides Job For Importing Product Images from the FTP server",
    img: sfccproject,
    href: 'https://github.com/dharmeshgurnani/SFCC-job_ImportProductsImagesFromFTP'
  },
  {
    id: uuidv4(),
    name: 'AlphaNoise',
    desc:
      "Open source white noise PWA build using React.js and Chakra UI",
    img: alphanoise,
    href: 'https://dharmeshgurnani.github.io/AlphaNoise/'
  },
  {
    id: uuidv4(),
    name: 'Movie Search Engine',
    desc:
      "An website made using html and css used for searching movies and it's information using Omdb API",
    img: ProjectImg,
    href: 'https://dharmeshgurnani.github.io/MovieSearchEngine/'
  },
];

export default projects;
