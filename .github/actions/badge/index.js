const core = require('@actions/core');
const fs = require('fs').promises;

async function main() {
    try {
        const RESULTS = core.getInput('cypress_results');
        const README_PATH = './README.md';

        // const RESULTS = 'success';
        // const README_PATH = '../../../README.md';

        const OK_URL = 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg';
        const BAD_URL = 'https://img.shields.io/badge/test-failure-red';
        const URL = RESULTS === 'success' ? OK_URL : BAD_URL;
        const README_DATA = await fs.readFile(README_PATH, 'utf-8');
        const NEW_READE = README_DATA.search(OK_URL) !== -1 ? README_DATA.replace(OK_URL, URL) : README_DATA.replace(BAD_URL, URL);
        // await fs.writeFile(README_PATH, NEW_READE);
        console.log(RESULTS);
        console.log('-------------------------');
        console.log(README_DATA);
        process.exit(0);
    } catch (error) {
        core.setFailed(error);
    }
}

main()