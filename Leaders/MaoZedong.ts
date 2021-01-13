import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Chinese from '../Chinese';

export class MaoZedong extends Leader {
  static civilization(): typeof Civilization {
    return Chinese;
  }

  name(): string {
    return 'Mao Zedong';
  }
}

export default MaoZedong;
