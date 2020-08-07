import fs from 'fs'
import path from 'path'

const skillFile = path.join(process.cwd(), './src/data/my_skills.json');

export function getSkillData() {
  const rawdata = fs.readFileSync(skillFile, 'utf8');
  let skillData = JSON.parse(rawdata);
  return skillData;
}
