const core = require("@actions/core");
const github = require("@actions/github");

const main = () => {
  try {
    // `who-to-greet` input defined in action metadata file
    const currentTag = core.getInput("currentTag");
    console.log(`gittags========>>> ${currentTag}`);
    let newTag = 1;

    if (currentTag.includes("_rc")) {
      let previousIndex = currentTag.split("_rc")[1];
      console.log("previousIndex=======>>", previousIndex);
      newTag = parseInt(previousIndex) + 1;
    }
    console.log(`newTag========>>> ${newTag}`);
    core.setOutput("newTag", newTag);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
