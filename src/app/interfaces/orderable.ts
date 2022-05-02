import { state } from '../../assets/state/state';

export class Orderable {
  addToOrder(
    order: { title: string; description: string; price: number },
    quantity: number
  ): void {
    state[order.title] = {
      name: order.title,
      quantity: quantity,
      amount: order.price,
    };
  }

  itemAddedToOrder(title: string): boolean {
    return title in state;
  }
}
