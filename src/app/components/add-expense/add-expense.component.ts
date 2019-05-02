import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ExpenseService } from '../../services/expense/expense.service';
import { ModalService } from '../../services/modal/modal.service';
declare var require: any;
const data = require('../../../../data/modal/categories.json')

@Component({
  selector: 'add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  @Output()
  expensesChanged = new EventEmitter();
  expenseForm;
  categories;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.setDefaulDate();
    this.categories = data.list.sort((a, b) => a.label.localeCompare(b.label));
  }

  private buildForm() {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      value: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  private setDefaulDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const currentDate = date.toISOString().substring(0, 10);
    this.expenseForm.controls['date'].setValue(currentDate);
  }

  public onSubmit() {
    this.expenseService.addExpense(this.expenseForm.value).subscribe(data => {
      this.closeModal();
      this.expensesChanged.emit();
    });
  }

  public closeModal() {
    this.modalService.toggleModal(true);
  }

}
