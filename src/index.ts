#!/usr/bin/env node

/**
 * IntentSpec CLI
 * The Open Standard for Spec-Driven Development
 */


import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const program = new Command();

program
    .name('intentspec')
    .description('One-stop tool for Spec-Driven Development')
    .version('0.0.1');

program
    .command('validate')
    .description('Validate an intent.md file against the IntentSpec schema')
    .argument('[file]', 'Path to the intent file', 'intent.md')
    .action(async (file) => {
        const filePath = path.resolve(process.cwd(), file);
        if (!fs.existsSync(filePath)) {
            console.error(chalk.red(`Error: File not found: ${filePath}`));
            process.exit(1);
        }

        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(content);

            // Load Schema
            const schema = JSON.parse(fs.readFileSync(path.join(__dirname, 'schema.json'), 'utf-8'));

            // Initialize AJV
            const ajv = new Ajv({
                allErrors: true,
                strict: false
            });
            addFormats(ajv);

            const validate = ajv.compile(schema);
            const valid = validate(data);

            if (valid) {
                console.log(chalk.green(`✅ ${file} is a valid IntentSpec!`));
                process.exit(0);
            } else {
                console.error(chalk.red(`❌ Invalid IntentSpec: ${file}`));
                validate.errors?.forEach(err => {
                    console.error(chalk.yellow(`- ${err.instancePath || 'Root'} ${err.message}`));
                });
                process.exit(1);
            }
        } catch (error) {
            console.error(chalk.red(`An error occurred: ${(error as Error).message}`));
            process.exit(1);
        }
    });

program.parse();
