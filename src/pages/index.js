import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import DefaultLayout from '../components/Layout/DefaultLayout';
import {
  getSkillsData, getProjectsData, getWorkExperienceData, getAwardData,
} from '../api/DataAPI';
import SkillGroup from '../components/Portfolio/SkillGroup';
import Project from '../components/Portfolio/Project';
import WorkExperience from '../components/Portfolio/WorkExperience';
import useIntersect from '../components/Layout/useIntersect';
import Award from '../components/Portfolio/Awards';

const HomePage = ({
  skillData, projectDataList, workExperienceDataList, awardDataList,
}) => {
  const skillsSectionRef = useRef(null);
  const [setNode, entry] = useIntersect({ rootMargin: '-20%' });

  useEffect(() => {
    if (skillsSectionRef.current) {
      setNode(skillsSectionRef.current);
    }
  }, [skillsSectionRef]);

  return (
    <DefaultLayout title="Home" description="Georgi Varghese Kurian Skills, Portfolio Projects and contact">
      <section className="flex items-center w-full overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="container flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center justify-around md:items-start md:w-1/2">
            <h1 className="mb-0">
              Hi, I’m Georgi Kurian
              <span className="sr-only"> and this is my website</span>
            </h1>
            <p className="mt-4 text-2xl text-center uppercase">I am a full-stack web developer</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/Programming-amico.svg" alt="" role="presentation" className="w-full mx-auto sm:w-2/3 md:w-8/12" />
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

      <section className="section">
        <div id="award-section" className="flex flex-col inner-wrap">
          <h2 className="text-center">Awards</h2>
          <div className="w-10/12 mx-auto sm:w-full lg:lg:w-2/3">
            <div className="lg:mx-auto lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {awardDataList && awardDataList.map((awardData) => (
                <Award
                  key={awardData.title}
                  title={awardData.title}
                  description={awardData.description}
                  awardedBy={awardData.awardedBy}
                  date={awardData.date}
                  image={awardData.image}
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
  awardDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;

export async function getStaticProps() {
  const skillData = getSkillsData();
  const projectDataList = getProjectsData();
  const workExperienceDataList = getWorkExperienceData();
  const awardDataList = getAwardData();
  return {
    props: {
      skillData,
      projectDataList,
      workExperienceDataList,
      awardDataList,
    },
  };
}
