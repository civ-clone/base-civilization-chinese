"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chinese_1 = require("./Chinese");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'Beijing',
    'Shanghai',
    'Chongqing',
    'Tianjin',
    'Guangzhou',
    'Shenzhen†',
    'Chengdu',
    'Nanjing',
    'Wuhan',
    "Xi'an",
    'Hangzhou',
    'Dongguan',
    'Foshan',
    'Shenyang',
    'Harbin',
    'Qingdao',
    'Dalian',
    'Jinan',
    'Zhengzhou',
    'Changsha',
    'Kunming',
    'Changchun',
    'Ürümqi',
    'Shantou',
    'Hefei',
    'Shijiazhuang',
    'Ningbo',
    'Taiyuan',
    'Nanning',
    'Xiamen',
    'Fuzhou',
    'Changzhou',
    'Wenzhou',
    'Nanchang',
    'Tangshan',
    'Guiyang',
    'Wuxi',
    'Lanzhou',
    'Zhongshan',
    'Handan',
    "Huai'an",
    'Weifang',
    'Zibo',
    'Shaoxing',
    'Yantai',
    'Huizhou',
    'Luoyang',
    'Nantong',
    'Baotou',
    'Liuzhou',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Chinese_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map