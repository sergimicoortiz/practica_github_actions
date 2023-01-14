const core = require('@actions/core');

try {
    const linter_job = core.getInput('linter_job');
    const cypress_job = core.getInput('cypress_job');
    const add_badge_job = core.getInput('add_badge_job');
    const deploy_job = core.getInput('deploy_job');
    const DESTINATARIO = core.getInput('email');

    const ASUNTO = 'Resultado del workflow ejecutado';
    const BODY = `
    Se ha realizado un push en la rama main que ha provocado la ejecución del
    workflow nombre_repositorio_workflow con los siguientes resultados:

        - linter_job: ${linter_job}
        - cypress_job: ${cypress_job}
        - add_badge_job: ${add_badge_job}
        - deploy_job: ${deploy_job}`;

    console.log(BODY);
    
    process.exit(0);

} catch (error) {
    core.setFailed(error);
}