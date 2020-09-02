import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import { getSkillsData, getProjectsData, getWorkExperienceData } from '../api/DataAPI';
import SkillGroup from '../components/Portfolio/SkillGroup';
import Project from '../components/Portfolio/Project';
import WorkExperience from '../components/Portfolio/WorkExperience';
import useIntersect from '../components/Layout/useIntersect';

const HomePage = ({ skillData, projectDataList, workExperienceDataList }) => {
  const skillsSectionRef = useRef(null);
  const [setNode, entry] = useIntersect({ rootMargin: '-20%' });

  useEffect(() => {
    if (skillsSectionRef.current) {
      setNode(skillsSectionRef.current);
    }
  }, [skillsSectionRef]);

  return (
    <DefaultLayout title="Home" description="Georgi Varghese Kurian Skills, Portfolio Projects and contact">
      <section className="flex items-center w-full overflow-hidden lightBlueGradient" style={{ minHeight: '80vh' }}>
        <div className="flex items-center w-full">
          <div className="container flex flex-col items-center justify-around mx-auto -mt-16">
            <h1 className="mb-0 text-white">
              Hi, I’m Georgi Kurian
              <span className="sr-only"> and this is my website</span>
            </h1>
            <p className="mt-4 text-2xl text-center text-white uppercase">I am a full-stack web developer</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div id="experience-section" className="flex flex-col inner-wrap">
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
          <div className="mx-auto sm:w-full lg:lg:w-2/3">
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
          <div className={`w-10/12 mx-auto sm:w-full lg:lg:w-2/3 ${entry ? 'loaded' : ''}`} ref={skillsSectionRef}>
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
