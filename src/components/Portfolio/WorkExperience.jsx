import PropTypes from 'prop-types';
import BriefcaseSVG from '../../assets/images/icons/briefcase.svg';

const WorkExperience = ({
  companyName, position, timeline, companyUrl,
}) => (
  <div className="relative flex">
    <div className="absolute inset-y-0 flex flex-col items-center -ml-4">
      <div className="w-8 h-8 p-1 my-auto bg-blue-800 border-4 border-blue-800 rounded-full">
        <img src="/briefcase.svg" aria-hidden="true" alt="" />
      </div>
    </div>
    <div className="flex w-full my-2">
      <div className="flex-1 p-4 bg-blue-800 rounded">
        <div className="text-gray-100">
          <a href={companyUrl} target="_blank" rel="noreferrer external">
            <h4 className="m-0 text-base">{companyName}</h4>
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
