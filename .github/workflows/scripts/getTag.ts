

const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
try {
    // `who-to-greet` input defined in action metadata file
    const gitTags = core.getInput('gitTags');
    console.log(`gittags========>>> ${gitTags}`);
    let newTag = 1;
    
    if(gitTags.includes('_rc')){
      let previousIndex = gitTags.split('_rc')[1];
       newTag = await parseInt(previousIndex)+1;
    }
    console.log(`newTag========>>> ${newTag}`);
    core.setOutput("newTag", newTag);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();