import PropTypes from 'prop-types';
import BriefcaseSVG from '../../assets/images/icons/briefcase.svg';

const WorkExperience = ({
  companyName, position, timeline, companyUrl,
}) => (
  <div className="relative flex">
    <div className="absolute inset-y-0 flex flex-col items-center -ml-4">
      <div className="border-4 border-transparent rounded-full my-auto ">
        <div className="w-6 h-6 p-1 lightBlueGradient rounded-full">
          <img src="/briefcase.svg" aria-hidden="true" alt="" />
        </div>
      </div>
    </div>
    <div className="flex w-full my-2">
      <div className="flex-1 pl-6 p-4 bg-blue-800 rounded">
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
