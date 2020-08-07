import fs from 'fs'
import path from 'path'
import { getJSONDataFromFile } from './jsonFileRead';

export function getSkillsData() {
  const skillsData = getJSONDataFromFile('my_skills.json');
  return skillsData;
}

export function getProjectsData() {
  const projectsData = getJSONDataFromFile('my_projects.json');
  return projectsData;
}

export function getWorkExperienceData() {
  const workExperienceData = getJSONDataFromFile('my_work_experience.json');
  return workExperienceData;
}
