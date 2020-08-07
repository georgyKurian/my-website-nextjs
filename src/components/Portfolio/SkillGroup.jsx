import PropTypes from "prop-types";

const SkillGroup = ({groupName, skillList}) => {
  return (
    <div class="w-full flex">
      <div class="w-full rounded-lg px-8 py-10 bg-gray-800 border-gray-300 border h-100 overflow-hidden shadow-xl">
        <div class="flex bg-gray-800 text-center overflow-hidden text-white">
          <span class="my-auto uppercase font-medium">{groupName}</span>
        </div>
        <div class="pt-3 text-gray-300 h-full rounded-t-lg flex flex-col justify-between leading-normal">
          <ul class="w-full">
            {skillList.map((skill)=>(
              <li key={skill.name} class="mb-2">
                <div class="py-1 text-xs font-semibold">{skill.name}<span className="sr-only"> - {skill.percent}</span></div>
                <div class="w-full bg-gray-700 h-1 rounded">
                  <div class="w-full bg-blue-500 h-1" style={{width: `${skill.percent}` }}></div>
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

SkillGroup.propTypes
export default SkillGroup;
