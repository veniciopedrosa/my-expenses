import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense/expense.service';
import { ModalService } from '../../services/modal/modal.service';
declare var require: any;
const data = require('../../../../data/modal/modal.json')

@Component({
  selector: 'add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  @Output()
  public expensesChanged = new EventEmitter();
  public expenseForm;
  public categories: Array<object>;
  public data: any = data;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.setDefaulDate();
    this.fillCategories();
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
    const currentDate = new Date().toISOString().substring(0, 10);
    this.expenseForm.controls['date'].setValue(currentDate);
  }

  private fillCategories() {
    this.categories = data.listCategories
                      .sort((a, b) => a.label.localeCompare(b.label));
  }

  public onSubmit() {
    const form = this.expenseForm.value;
    this.expenseService
        .addExpense(form)
        .subscribe(() => {
          this.closeModal();
          this.expensesChanged.emit();
      });
  }

  public closeModal() {
    this.modalService.toggleModal(true);
  }

}
