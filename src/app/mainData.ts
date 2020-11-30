import {Data} from './data';
import {Worker} from './worker';

export const secondary: Data[] = [];

export const important: Worker[] = [
  {
    appNumber: 'IIДР - 65',
    name: 'Чечин И.И.,\nИванов А. А.',
    company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
    analysis: 'II ДР',
    registrationDate: new Date('2019-01-10'),
    completionDate: new Date('2019-10-30'),
    laboratory: 'ЛИПФ',
    status: 'Новая',
    bin: 21331232,
    numberOfContract: '№ 208-112-34',
    numberOfSample: 2
  },
  {
    appNumber: 'НТ - 30',
    name: 'Ню В. П.',
    company: 'АО ЭМГ\nНГДУ "Кайнармунайгаз"',
    analysis: 'Неполный физическо-химический анализ',
    registrationDate: new Date('2019-01-10'),
    completionDate: new Date('2019-10-30'),
    laboratory: 'ЛИНГиВ',
    status: 'Идет исследование',
    bin: 21331232,
    numberOfContract: '№ 208-112-34',
    numberOfSample: 2
  },
  {
    appNumber: 'IОР - 66\nНТ - 30',
    name: 'Распределить',
    company: 'АО ЭМГ\nНГДУ "Жайык М"',
    analysis: 'I ОР',
    registrationDate: new Date('2019-01-10'),
    completionDate: new Date('2019-10-30'),
    laboratory: 'ЛИПФ -> ЛИНГиВ',
    status: 'Новая',
    bin: 21331232,
    numberOfContract: '№ 208-112-34',
    numberOfSample: 2
  },
  {
    appNumber: 'IОР - 66\nНТ - 30',
    name: 'Распределить',
    company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
    analysis: 'II ДР',
    registrationDate: new Date('2019-01-10'),
    completionDate: new Date('2019-10-30'),
    laboratory: 'ЛИПФ -> ЛИНГиВ',
    status: 'Новая',
    bin: 21331232,
    numberOfContract: '№ 208-112-34',
    numberOfSample: 2
  },
  {
    appNumber: 'НТ - 30',
    name: 'Иванова В. В.',
    company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
    analysis: 'Полный физическо-химический анализ',
    registrationDate: new Date('2019-01-10'),
    completionDate: new Date('2019-10-30'),
    laboratory: 'ЛИНГиВ',
    status: 'На доработке',
    bin: 21331232,
    numberOfContract: '№ 208-112-34',
    numberOfSample: 2
  }
];
