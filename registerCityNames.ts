import Chinese from './Chinese';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

(
  [
    'Beijing',
    'Shanghai',
    'Chongqing',
    'Tianjin',
    'Guangzhou',
    'Shenzhen',
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Chinese, i === 0))
);
