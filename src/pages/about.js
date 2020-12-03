import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import DefaultLayout from '../components/Layout/DefaultLayout';
import {
  getSkillsData, getProjectsData, getWorkExperienceData, getAwardData,
} from '../api/DataAPI';
import SkillGroup from '../components/Portfolio/SkillGroup';
import Project from '../components/Portfolio/Project';
import WorkExperience from '../components/Portfolio/WorkExperience';
import useIntersect from '../components/Layout/useIntersect';
import Award from '../components/Portfolio/Awards';
import CurvedBorderSvg from '../assets/images/curved-vector.svg?sprite';

const AboutPage = ({
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
      <div className="hero-gradient" />

      <section className="section">
        <div id="experience-section" className="container flex flex-col">
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

      <section className="bg-gray-100 section">
        <div id="projects-section" className="container flex flex-col">
          <h2 className="text-center">Projects</h2>
          <div className="w-10/12 mx-auto my-2 sm:w-full lg:lg:w-2/3">
            <div className="bg-gray-100 lg:mx-auto lg:w-2/3 grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
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
        <div id="skills-section" className="container flex flex-col">
          <h2 className="text-center">Skills</h2>
          <div className={`w-full my-2 mx-auto sm:w-full lg:lg:w-2/3 ${entry ? 'loaded' : ''}`} ref={skillsSectionRef}>
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

      <section className="bg-gray-100 section">
        <div id="award-section" className="container flex flex-col">
          <h2 className="text-center">Awards</h2>
          <div className="mx-auto my-2 sm:w-full lg:lg:w-2/3">
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

AboutPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skillData: PropTypes.object.isRequired,
  projectDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
  workExperienceDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
  awardDataList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutPage;

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
