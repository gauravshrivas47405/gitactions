

const core = require('@actions/core');
const github = require('@actions/github');

const getIncrementedTag =() => {
try {
    // `who-to-greet` input defined in action metadata file
    const gitTag = core.getInput('gitTag');
    console.log(`gittags========>>> ${gitTag}`);
    let newTag = 1;
    
    if(gitTag.includes('_rc')){
      let previousTag = gitTag.split('_rc')[1];
      console.log(`previousTag==========>>>${previousTag}`);
       newTag = parseInt(previousTag)+1;
    }
    console.log(`newTag========>>> ${newTag}`);
    core.setOutput("incrementeValue", newTag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

getIncrementedTag();