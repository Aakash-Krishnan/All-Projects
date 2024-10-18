# Steps

- step1: add bin in package.json

          "bin": {
                "sky": "./index.js"
             },

- step 2: link it using

            npm link

- step 3: add this command in the index.js (root file)

            #!/usr/bin/env node

- step 4: use yargs to make your custom CLI.

- step 5: If your local scripts don't have permission to run. Then run this.

            Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

#

# Additional steps:

Is you want to change the CLI name:

- step 1: Change the name in the package.json file.

              "bin": {
                    "note": "./index.js"
                },

- step 2: Unlink the CLI tool

            npm unlink -g my-cli-tool

- step 3: Now link again. This will link the new CLI.

            npm link
