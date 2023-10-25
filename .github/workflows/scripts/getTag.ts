

import core from '@actions/core';
import github from '@actions/github';

try {
    // `who-to-greet` input defined in action metadata file
    const gitTags = core.getInput('gitTags');
    console.log(`gittags========>>> ${gitTags}!`);
    let previousIndex = gitTags.split('_rc')[1];
    let newTag = parseInt(previousIndex)+1;
    core.setOutput("newTag", newTag);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }