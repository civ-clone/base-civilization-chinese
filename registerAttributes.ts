import Chinese from './Chinese';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Chinese',
  nation: 'China',
  colors: ['#ee1c25', '#ff0'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Chinese, name, value))
);
