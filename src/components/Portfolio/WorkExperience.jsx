import PropTypes from 'prop-types';
import BriefCaseSVG from '../../assets/images/icons/briefcase.svg';

const WorkExperience = ({
  companyName, position, timeline, companyUrl,
}) => (
  <div className="flex my-2 overflow-hidden bg-blue-800 rounded rounded-l-full">
    <div className="flex flex-col items-center">
      <div className="my-auto border-4 border-transparent rounded-full">
        <div className="w-10 h-10 p-2 bg-white rounded-full">
          <BriefCaseSVG className="w-full h-full text-blue-800 fill-current" aria-hidden="true" />
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
