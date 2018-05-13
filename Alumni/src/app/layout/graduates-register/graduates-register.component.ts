import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ViewChild, Input} from "@angular/core";
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";

@Component({
  selector: 'app-graduates-register',
  templateUrl: './graduates-register.component.html',
  styleUrls: ['./graduates-register.component.scss'],
  animations: [routerTransition()] 
})
export class GraduatesRegisterComponent implements OnInit {

  levelNum: number;
  levels: Array<Object> = [
      {num: 0, name: "Facultatea de Biologie"},
      {num: 1, name: "Facultatea de Chimie"},
      {num: 2, name: "Facultatea de Drept"},
      {num: 3, name: "Facultatea de Economie si Administrarea Afacerilor"},
      {num: 4, name: "Facultatea de Educatie Fizica si Sport"},
      {num: 5, name: "Facultatea de Filosofie si Stiinte Social-Politice"},
      {num: 6, name: "Facultatea de Fizica"},
      {num: 7, name: "Facultatea de Geografie si Geologie"},
      {num: 8, name: "Facultatea de Informatica"},
      {num: 9, name: "Facultatea de Istorie"},
      {num: 10, name: "Facultatea de Litere"},
      {num: 11, name: "Facultatea de Matematica"},
      {num: 12, name: "Facultatea de Psihologie si Stiinte ale Educatiei"},
      {num: 13, name: "Facultatea de Teologie Ortodoxa"},
      {num: 14, name: "Facultatea de Teologie Romano-Catolica"},
      {num: 15, name: "Centrul de Studii Europene"}
  ];

  learningtypes: Array<Object> = [
    {num: 0, name: "Licenta"},
    {num: 1, name: "Master"},
    {num: 2, name: "Doctorat"},
    {num: 3, name: "Studii postdoctorale"}
  ]

  domains: Array<Object> = [
    {num: 0, name: "Administrație"},
    {num: 1, name: "Agricultură"},
    {num: 2, name: "Auto"},
    {num: 3, name: "Birotică și mobilier"},
    {num: 4, name: "Construcții"},
    {num: 5, name: "Consultanță"},
    {num: 6, name: "Divertisment"},
    {num: 7, name: "Finanțe - Asigurări"},
    {num: 8, name: "Imobiliare"},
    {num: 9, name: "Industrie"},
    {num: 10, name: "IT, telecomunicații"},
    {num: 11, name: "Îngrijire personală"},
    {num: 12, name: "Media"},
    {num: 13, name: "Modă"},
    {num: 14, name: "Publicitate"},
    {num: 15, name: "Sănătate și medicină"},
    {num: 16, name: "Securitate și protecție"},
    {num: 17, name: "Servicii persoane"},
    {num: 18, name: "Servicii profesionale"},
    {num: 19, name: "Transport"},
    {num: 20, name: "Turism"},
    {num: 21, name: "Altele"}
  ]

  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }

  selectedLevel = this.levels[0];

  selectedLevelCustomCompare = {num: 0, name: "Facultatea de Biolgie"}

  compareFn(a, b) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }

  yearValidator(event: any) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }

  phoneValidator(event: any) {
    if (event.charCode !== 0) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
