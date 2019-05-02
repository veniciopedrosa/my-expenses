import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense/expense.service';
import { ModalService } from '../../services/modal/modal.service';
declare var require: any;
const data = require('../../../../data/home/home.json');

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  isOpen = false;
  expenses;
  total;
  noExpenseTitle = data['no-expense-title'];
  totalLabel = data['total-label'];
  buttonLabel = data['new-expense-button'];



  constructor(
    private expenseService: ExpenseService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.currentModal.subscribe(isOpen => {
      this.isOpen = isOpen;
    })
    this.listExpenses();
  }

  public listExpenses() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
      this.total = data.reduce((a, b) => parseFloat(a) + parseFloat(b['value']), 0);
    })
  }

  public updateList() {
    this.listExpenses();
  }

  public openModal() {
    this.modalService.toggleModal(this.isOpen);
  }

  public deleteExpense(index) {
    this.expenseService.deleteExpense(index)
      .subscribe(data => {
        this.listExpenses();
      })
  }

  public getColor(category: string): string {
    switch (category) {
      case 'alimentacao':
        return '#65a029'
      case 'moradia':
        return '#c13861'
      case 'educacao':
        return '#853cc1'
      case 'transporte':
        return '#1f1d8c'
      case 'mercado':
        return '#2282a5'
      case 'alimentacao':
        return '#930707'
      case 'lazer':
        return '#775715'
      case 'compras':
        return '#77156e'
      case 'trabalho':
        return '#007a4d'
      case 'saude':
        return '#ff0050'
      default:
        break;
    }
  }

}
