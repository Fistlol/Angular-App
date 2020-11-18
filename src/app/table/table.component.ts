import { InformationComponent } from './../information/information.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  // headers = ["№ заявки", "Исполнители", "Компания и номер договора", "Вид анализа", "Дата регистрации", "Дата планового завершения", "Лаборатория", "Статус", "Отчет/Протокол"];
  
  rows: Worker[] = [
    {
      appnumber: "IIДР - 65",
      name: "Чечин И.И.,\nИванов А. А.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "II ДР",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИПФ",
      status: "Новая",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Ню В. П.",
      company: 'АО ЭМГ\nНГДУ "Кайнармунайгаз"',
      analysis: "Неполный физическо-химический анализ",
      registrationdate: "9 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Идет исследование",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "IОР - 66\nНТ - 30",
      name: "Распределить",
      company: 'АО ЭМГ\nНГДУ "Жайык М"',
      analysis: "I ОР",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИПФ -> ЛИНГиВ",
      status: "Новая",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "IОР - 66\nНТ - 30",
      name: "Распределить",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "II ДР",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИПФ -> ЛИНГиВ",
      status: "Новая",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Иванова В. В.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "На доработке",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Ню В. П.,\nКим А. А.",
      company: 'АО ЭМГ\nНГДУ "Кайнармунайгаз"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "9 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "На доработке",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Власова А. А.,\nИванов Д. Д.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Завершен/отчет\nНе согласовано",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Ким А. А.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Идет исследование",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Иванов П. П.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "В лаборатории",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Власова В. В.",
      company: 'АО ЭМГ\nНГДУ "Кайнармунайгаз"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "9 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "В лаборатории",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Иванов А. А.,\nСтепанова П. П.,\nКим А. А.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Завершен/отчет\nСогласовано",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Чечин И. И.,\nКим А. А.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Идет исследование",
      report: "Отчет\nПротокол\nИсследования"
    },
    {
      appnumber: "НТ - 30",
      name: "Иванов В. В.,\nЧехов В. В.",
      company: 'АО ЭМГ\nНГДУ "Жайык МГ"',
      analysis: "Полный физическо-химический анализ",
      registrationdate: "3 МАР 2019",
      completiondate: "30 ОКТ 2019",
      laboratory: "ЛИНГиВ",
      status: "Идет исследование",
      report: "Отчет\nПротокол\nИсследования"
    }
  ];

  dataSource = this.rows;
  displayedColumns: string[] = ['appnumber', 'name', 'company', 'analysis', 'registrationdate', 'completiondate', 'laboratory', 'status', 'report'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InformationComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}