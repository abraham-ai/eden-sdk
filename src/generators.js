export async function getGenerators() {
  const result = await this.get('/generators');
  return result;
};

export async function getGenerator(generatorName, generatorVersion=null) {
  const result = await this.get(`/generator/${generatorName}`);

  if (result.error) {
    throw new Error(result.error);
  }

  const generator = result.generator;

  if (!generator) {
    throw new Error(`Generator ${generatorName} not found`);
  }

  if (generatorVersion) {
    const version = generator.versions.filter(
      (obj) => {return obj.versionId === generatorVersion}
    );      
    if (version.length > 0) {
      return version[0];
    } else {
      throw new Error(`Generator ${generatorName} version ${generatorVersion} not found`);
    }
  } else {
    let latestVersion = generator.versions.pop();
    latestVersion.output = generator.output;
    latestVersion.generatorName = generator.generatorName;
    latestVersion.description = generator.description;
    return latestVersion;
  }
};
