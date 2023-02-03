export async function getGenerators() {
  const result = await this.get('/generators');
  return result.generators;
}

export async function getGenerator(generatorName, generatorVersion=null) {
  const generators = await this.getGenerators();
  const generator = generators.filter(
    (obj) => {
      return obj.generatorName === generatorName
    });

  if (generator.length === 0) {
    throw new Error(`Generator ${generatorName} not found`);
  }

  if (generatorVersion) {
    const version = generator[0].versions.filter(
      (obj) => {
        return obj.version === generatorVersion
      });
      throw new Error(`Generator ${generatorName} version ${generatorVersion} not found`);
  }
  else{
    return generator[0].versions[0];
  }
};
