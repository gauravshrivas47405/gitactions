const core = require("@actions/core");
const github = require("@actions/github");

const getIncrementedTagValue = () => {
  try {
    const currentTag = core.getInput("currentTag");
    let nextTag = 1;
    if (currentTag.includes("_rc")) {
      let previousIndex = currentTag.split("_rc")[1];
      nextTag = parseInt(previousIndex) + 1;
    }
    core.setOutput("nextTag", nextTag);
  } catch (error) {
    core.setFailed(error.message);
  }
};

getIncrementedTagValue();
