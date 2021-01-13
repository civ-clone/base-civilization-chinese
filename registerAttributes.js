"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chinese_1 = require("./Chinese");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Chinese',
    nation: 'China',
    colors: ['#63e367', '#2f7b00', '#fff'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Chinese_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map