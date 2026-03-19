import {readFile, writeFile, mkdir} from 'node:fs/promises'
import { join } from 'node:path';
const content = await readFile('archivo.txt', 'utf-8');
console.log(content)

const outputDir = join('output','files','documents')
await mkdir(outputDir, {recursive: true})

const upperCaseContent = content.toUpperCase();
const outputPath = join(outputDir, 'archivo-uppercase.txt');
await writeFile(outputPath, upperCaseContent);
console.log("archivo creado")