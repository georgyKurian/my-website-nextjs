import fs from 'fs'
import path from 'path'

const directoryPath = './src/data/';

export function getJSONDataFromFile(fileName) {
  try{
    const filePath = path.join(process.cwd(), directoryPath , fileName);
    const rawdata = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawdata);
    return jsonData;
  }catch(err){
    console.log(err);
  }
  return null;
}
