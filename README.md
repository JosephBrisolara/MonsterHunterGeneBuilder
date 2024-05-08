# MonsterHunterGeneBuilder
This is my monster hunter stories 2 gene builder website created in senior capstone.

## Purpose
This is a loadout builder for monster hunter stories 2. Multiple loadouts can be made and are stored in session storage to see later. It can also function as a search feature for genes.

## Getting Started
To get started using this loadout builder, first clone the repository. Then, open home.html using a browser such as firefox or google chrome. The loadout builder should now be open in your browser and available for use.

For using the jest testing, npm will be required. To check if you already have it installed, run ```npm -v``` in a terminal in the repository and run. If you don't have it installed, run ```npm install -g npm``` in the terminal. After npm is installed, in the terminal run ```npm install --save-dev jest``` to install jest and ```npm i jsdom``` to install the jsdom environment. You can now run the command ```npm run test``` to run both tests, or ```jest bingoBuffs.test.js``` or ```jest data.test.js``` if you just want that test file to run.

## How to Use
When you first open home.html, there will be a list of genes on the right and a 3x3 grid on the left. You can drag any combination of 9 genes from the list to the grid. Then, enter a loadout name and hit the save loadout button to register a loadout. That loadout will now appear in the loadouts page. For the random loadout, enter a name for the loadout in the input box and then hit the random loadout button to register the loadout. There can only be one loadout per name.

For using the search feature for gene name or skill name uses the includes() function to see if the trimmed passed in paramter is included in the name. For the check boxes, if box is checked then only genes of that box will appear on the right. For example, if Fire is checked, then only Fire element genes will appear on the right. However, if both Fire and Water boxes are checked, then both Fire and Water genes will appear on the right. If Fire, Water, and Power Type are all checked then only genes that are Fire or Water element AND power type will appear on the right.

The Genes page simply lists all of the genes.

The Loadouts page looks at session storage and displays all loadouts created, so it will be empty at the start before any loadouts are created.