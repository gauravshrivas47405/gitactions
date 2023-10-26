

const core = require('@actions/core');
const github = require('@actions/github');
let incrementedValue = 1;

const getIncrementedTag =() => {
try {
    const gitTag = core.getInput('gitTag');
    if(gitTag.includes('_rc')){
      let previousTag = gitTag.split('_rc')[1];
      incrementedValue = parseInt(previousTag)+1;
    }
    core.setOutput("incrementedValue", incrementedValue);
  } catch (error) {
    core.setFailed(error.message);
  }
}

getIncrementedTag();