import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '../../../assets/state/state';

const tastingMenu = 'tastingMenu';

const tips = {
  ten: { text: '10%', value: 0.1, selected: false },
  fifteen: { text: '15%', value: 0.15, selected: true },
  twenty: { text: '20%', value: 0.2, selected: false },
  custom: {
    text: 'Custom',
    value: undefined as number | undefined,
    selected: false,
  },
};

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css'],
})
export class SummaryPageComponent implements OnInit {
  hasTastingData: boolean = true;
  hasCarteData: boolean = true;
  tip: number;

  constructor(private router: Router) {
    this.tip = this.getTip();
  }

  getTastingData(): { name: string; quantity: number; amount: number } {
    return state[tastingMenu];
  }

  getCarteData(): { name: string; amount: number; quantity: number }[] {
    return Object.entries(state).reduce(
      (
        accumulated: { name: string; amount: number; quantity: number }[],
        [key, value]
      ) => {
        if (key !== tastingMenu) {
          accumulated.push(value);
        }

        return accumulated;
      },
      [] as { name: string; amount: number; quantity: number }[]
    );
  }

  getTotal(): number {
    return this.getTotalBeforeTip() + this.getTip();
  }

  getTotalBeforeTip(): number {
    return Object.values(state).reduce(
      (total, current) => total + current.quantity * current.amount,
      0
    );
  }

  getTips(): { text: string; value: number | undefined; selected: boolean }[] {
    return Object.values(tips);
  }

  tipTypeChosen(tip: {
    text: string;
    value: number | undefined;
    selected: boolean;
  }) {
    Object.values(tips).forEach((value) => (value.selected = value === tip));
  }

  isCustomTip() {
    return tips.custom.selected;
  }

  getTip(): number {
    const selectedTip = Object.values(tips).find((value) => value.selected);
    const value = selectedTip?.value || 0;

    return selectedTip === tips.custom
      ? value
      : value * this.getTotalBeforeTip();
  }

  setCustomTip(value: string) {
    tips.custom.value = Math.min(
      Math.max(parseInt(value), 0),
      this.getTotalBeforeTip()
    );
  }

  payClicked() {
    this.router.navigate(['conclusion']);
  }

  ngOnInit(): void {}
}
