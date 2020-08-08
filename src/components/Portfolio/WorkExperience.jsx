import PropTypes from 'prop-types';
import BriefcaseSVG from '../../assets/images/icons/briefcase.svg';

const WorkExperience = ({
  companyName, position, timeline, companyUrl,
}) => (
  <div className="flex justify-center w-full">
    <div className="md:w-1/3" />
    <div className="flex flex-col items-center">
      <div className="w-1 h-3">&nbsp;</div>
      <div className="w-8 h-8 p-1 bg-blue-500 border-4 border-blue-500 rounded-full">
        <img src="/briefcase.svg" aria-hidden="true" alt="" />
      </div>
      <div className="flex-1 w-1 bg-blue-500">&nbsp;</div>
    </div>
    <div className="flex w-2/3 pb-10 pl-3">
      <div>
        <div className="text-gray-700">
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
