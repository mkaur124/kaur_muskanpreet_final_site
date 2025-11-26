import React from 'react';

function DeveloperSetup() {
  return (
    <div>
      <div data-testid="code-editor">
        <h3>Code Editor</h3>
        <p>VS Code – my preferred code editor for all projects.</p>
      </div>

      <div data-testid="terminal">
        <h3>Terminal</h3>
        <p>
          VS Code integrated terminal – used for running npm scripts, Git
          commands, and Docker.
        </p>
      </div>

      <div data-testid="editor-font">
        <h3>Preferred Editor Font</h3>
        <p>
          Fira Code – monospaced font with ligatures for clear and readable
          code.
        </p>
      </div>
    </div>
  );
}

export default DeveloperSetup;
