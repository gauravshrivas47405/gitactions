

const core = require('@actions/core');
const github = require('@actions/github');
let incrementedValue = 1;

const getIncrementedTag =() => {
try {
    const previoustag = core.getInput('previousTag');
    if(previoustag.includes('_rc')){
      let previousTag = previoustag.split('_rc')[1];
      incrementedValue = parseInt(previousTag)+1;
    }
    core.setOutput("incrementedValue", incrementedValue);
  } catch (error) {
    core.setFailed(error.message);
  }
}

getIncrementedTag();