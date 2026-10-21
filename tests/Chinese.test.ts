import { MaoZedong } from '../Leaders';
import Chinese from '../Chinese';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Chinese', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Chinese)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Chinese');
    expect(attributes.nation).to.equal('China');
    // The first fills a unit's shield and a city's square; the second is the shield's edge and the city.
    expect(attributes.colors).to.eql(['#00695C', '#FFFFFF']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Chinese);

    expect(cityNames.length).to.be.at.least(20);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Beijing']);
  });

  it('has its leaders', (): void => {
    ([[MaoZedong, 'Mao Zedong']] as [typeof Leader, string][]).forEach(
      ([LeaderType, name]) => {
        expect(LeaderType.civilization()).to.equal(Chinese);
        expect(new LeaderType().name()).to.equal(name);
      }
    );
  });
});
