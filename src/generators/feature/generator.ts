import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { LibraryWithReadmeGeneratorSchema } from './schema';

export async function featureGenerator(
  tree: Tree,
  options: LibraryWithReadmeGeneratorSchema
) {


  const resolveOption = {
    ...options,
    name: names(options.name).fileName,
    classname: names(options.name).className,
    filename: names(options.name).fileName,
    tpl: ''
  }


  let projectRoot = `${options.path}`;

  if(!options.flat){
    projectRoot = `${options.path}/${options.name}`
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, resolveOption);
  await formatFiles(tree);
}

export default featureGenerator;
