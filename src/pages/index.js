import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import GitHubLogo from '../assets/images/icons/github.svg';
import EmailLogo from '../assets/images/icons/email.svg';
import LinkedinLogo from '../assets/images/icons/linkedin.svg';
import StackOverFlowLogo from '../assets/images/icons/stackoverflow.svg';
import { getSkillsData, getProjectsData, getWorkExperienceData } from '../api/DataAPI';
import SkillGroup from '../components/Portfolio/SkillGroup';
import Project from '../components/Portfolio/Project';
import WorkExperience from '../components/Portfolio/WorkExperience';
import { useIntersect } from '../components/Layout/useIntersect';

const HomePage = ({ skillData, projectDataList, workExperienceDataList }) => {
  const cssClasses = 'w-1/5 md:w-16 p-2 hover:p-1 focus:p-1 opacity-75 hover:opacity-100 focus:opacity-100 m-1';
  const skillsSectionRef = useRef(null);
  const [setNode, entry] = useIntersect({ rootMargin: '-20%' });

  useEffect(() => {
    if (skillsSectionRef.current) {
      setNode(skillsSectionRef.current);
    }
  }, [skillsSectionRef]);

  return (
    <DefaultLayout title="Home">
      <section className="w-full overflow-hidden lightBlueGradient">
        <div className="flex items-center w-full">
          <div className="container flex flex-col items-center justify-around mx-auto mt-40 mb-16">
            <h1 className="mb-0 text-white">Hi, I’m Georgi Kurian</h1>
            <p className="mt-4 text-2xl text-center text-white uppercase">I am a full-stack web developer</p>
          </div>
        </div>
        <div id="contact" className="flex flex-wrap justify-center w-full py-16 md:flex-row">
          <a href="https://github.com/georgyKurian" title="GitHub profile link" className={cssClasses}>
            <GitHubLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/georgi-kurian/" title="Linkedin profile link" className={cssClasses}>
            <LinkedinLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
            <span className="sr-only">Linkedin</span>
          </a>
          <a href="mailto:georgyvk@gmail.com" title="Email to georgyvk@gmail.com" className={cssClasses}>
            <EmailLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://stackoverflow.com/users/10349395/georgy-varghese-kurian" title="Stackoverflow profile link" className={cssClasses}>
            <StackOverFlowLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
            <span className="sr-only">Stackoverflow</span>
          </a>
        </div>
      </section>

      <section className="section">
        <div id="skills-section" className="flex flex-col inner-wrap">
          <h2 className="text-center">Experience</h2>
          <div className="w-auto mx-auto">
            {workExperienceDataList.map((workExperienceData) => (
              <WorkExperience
                key={workExperienceData.index}
                companyName={workExperienceData.companyName}
                position={workExperienceData.position}
                timeline={workExperienceData.timeline}
                companyUrl={workExperienceData.companyUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div id="projects-section" className="flex flex-col inner-wrap">
          <h2 className="text-center">Projects</h2>
          <div className="w-2/3 mx-auto sm:w-full lg:lg:w-2/3">
            <div className="lg:mx-auto lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projectDataList && projectDataList.map((projectData) => (
                <Project
                  key={projectData.title}
                  title={projectData.title}
                  description={projectData.description}
                  tags={projectData.tags}
                  git={projectData.git}
                  link={projectData.link}
                  image={projectData.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div id="skills-section" className="flex flex-col inner-wrap">
          <h2 className="text-center">Skills</h2>
          <div className={`w-2/3 mx-auto sm:w-full lg:lg:w-2/3 ${entry ? 'loaded' : ''}`} ref={skillsSectionRef}>
            <div className="lg:mx-auto lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(skillData).map((skillGroupName) => (
                <SkillGroup
                  key={skillGroupName}
                  groupName={skillGroupName}
                  skillList={skillData[skillGroupName]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </DefaultLayout>
  );
};

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skillData: PropTypes.object.isRequired,
  projectDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
  workExperienceDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;

export async function getStaticProps() {
  const skillData = getSkillsData();
  const projectDataList = getProjectsData();
  const workExperienceDataList = getWorkExperienceData();

  return {
    props: {
      skillData,
      projectDataList,
      workExperienceDataList,
    },
  };
}
