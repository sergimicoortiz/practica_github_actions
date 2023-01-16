"use strict";
const nodemailer = require("nodemailer");
const core = require('@actions/core');
require('dotenv').config();
async function main() {

    try {
        const linter_job = core.getInput('linter_job') || 'skipped';
        const cypress_job = core.getInput('cypress_job') || 'skipped';
        const add_badge_job = core.getInput('add_badge_job') || 'skipped';
        const deploy_job = core.getInput('deploy_job') || 'skipped';
        const mailtrap_user = core.getInput('mailtrap_user');
        const mailtrap_pass = core.getInput('mailtrap_pass');
        const DESTINATARIO = core.getInput('email');

        const ASUNTO = 'Resultado del workflow ejecutado';
        const BODY = `
        <div>
        <p>Se ha realizado un push en la rama master que ha provocado la ejecución del
            workflow practica_github_actions_workflow con los siguientes resultados:</p>
    
        <ul>
            <li>
                linter_job: ${linter_job}
            </li>
            <li>
                cypress_job: ${cypress_job}
            </li>
            <li>
                add_badge_job: ${add_badge_job}
            </li>
            <li>
                deploy_job: ${deploy_job}
            </li>
        </ul>
    </div>`;

        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: mailtrap_user,
                pass: mailtrap_pass
            }
        });

        const email = {
            from: '"Sergi Micó" <sergimicoortiz@gmail>',
            to: DESTINATARIO,
            subject: ASUNTO,
            html: BODY,
        }

        const send_email = await transporter.sendMail(email);
        console.log("Message sent: %s", send_email.messageId);
        process.exit(0);

    } catch (error) {
        console.log(error);
        core.setFailed(error);
    }


}

main();