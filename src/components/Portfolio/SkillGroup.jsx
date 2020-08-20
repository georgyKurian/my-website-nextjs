import PropTypes from "prop-types";

const SkillGroup = ({groupName, skillList}) => {
  return (
    <div className="w-full flex">
      <div className="w-full rounded-lg px-8 py-10 bg-gray-800 border-gray-300 border h-100 overflow-hidden shadow-xl">
        <div className="flex bg-gray-800 text-center overflow-hidden text-white">
          <span className="my-auto uppercase font-medium">{groupName}</span>
        </div>
        <div className="pt-3 text-gray-300 h-full rounded-t-lg flex flex-col justify-between leading-normal">
          <ul className="w-full">
            {skillList.map((skill)=>(
              <li key={skill.name} className="mb-2" title={`${skill.percent}`}>
                <div className="py-1 text-xs font-semibold">{skill.name}<span className="sr-only">{` - ${skill.percent}`}</span></div>
                <div className="w-full bg-gray-700 h-1 rounded">
                  <div className="w-full h-1" style={{width: `${skill.percent}` }}>
                    <div className={'bg-blue-500 skill-bar h-full'}></div>
                  </div>
                </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SkillGroup.propTypes= {
  groupName: PropTypes.string,
  skillList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    percent: PropTypes.string,
  })),
}

export default SkillGroup;
