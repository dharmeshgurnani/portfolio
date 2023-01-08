import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import Particles from "react-tsparticles";
import particlesOptions from "../particlesProjects";
import ProjectItem from '../components/ProjectItem';
import '../client/scss/Pages/projects.scss';

console.log(particlesOptions());
export default function Projects() {

  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  // pageConfigs
  var config = {
    enableParticles: true
  }

  return (
    <div className="projects">
      {config.enableParticles && <Particles options={particlesOptions()}/>}
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input type="text" value={searchText} onChange={handleChange} placeholder="Project Name" />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {
            projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                href={item.href}
              />
            )
            )
          }
        </div>
      </div>
    </div>
  );
}