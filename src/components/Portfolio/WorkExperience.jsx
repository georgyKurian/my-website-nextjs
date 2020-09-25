import PropTypes from 'prop-types';
import BriefCaseSVG from '../../assets/images/icons/briefcase.svg';

const WorkExperience = ({
  companyName, position, timeline, companyUrl,
}) => (
  <div className="flex my-2 bg-blue-800 shadow transform ease-in-out hover:scale-105 hover:shadow-lg lg:my-4" style={{ borderRadius: '10rem 1.5rem 1.5rem 10rem' }}>
    <div className="flex flex-col items-center">
      <div className="my-auto border-4 border-transparent rounded-full">
        <div className="h-20 p-5 bg-white rounded-full">
          <BriefCaseSVG className="h-full text-blue-800 fill-current" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="flex w-full">
      <div className="flex-1 p-4 pl-6">
        <div className="text-gray-100">
          <a href={companyUrl} target="_blank" rel="noreferrer external">
            <h4 className="m-0 text-base text-white">{companyName}</h4>
          </a>
          <span className="text-xs">{timeline}</span>
          <p className="m-0 text-xs">{position}</p>
        </div>
      </div>
    </div>
  </div>
);

WorkExperience.propTypes = {
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  companyUrl: PropTypes.string,
};

WorkExperience.defaultProps = {
  companyUrl: null,
};

export default WorkExperience;
