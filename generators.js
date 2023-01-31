import {makeApiRequest} from './eden.js';

export const getGenerators = async function() {
  const result = await makeApiRequest(
    'get', 
    this.API_URL + '/generators',
  );
  return result.generators;
}

export const getGenerator = async function(generatorName) {
  const generators = await this.getGenerators();
  const generator = generators.filter(
    (obj) => {
      return obj.generatorName === generatorName
    });
  const latestGeneratorVersion = generator[0].versions[0];
  return latestGeneratorVersion;
};
