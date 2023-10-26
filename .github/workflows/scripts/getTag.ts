

const core = require('@actions/core');
const github = require('@actions/github');

const getIncrementedTag =() => {
try {
    // `who-to-greet` input defined in action metadata file
    const currentTag = core.getInput('currentTag');
    console.log(`currentTag========>>> ${currentTag}`);
    let nextTag = 1;
    
    if(currentTag.includes('_rc')){
      let previousTag = currentTag.split('_rc')[1];
      console.log(`previousTag==========>>>${previousTag}`);
      nextTag = parseInt(previousTag)+1;
    }
    console.log(`nextTag========>>> ${nextTag}`);
    core.setOutput("nextTag", nextTag);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

getIncrementedTag();