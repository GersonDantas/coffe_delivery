import { Payment, PaymentMethod, PaymentStatus } from '.';

describe('Payment Entity', () => {
  test('Should create a payment with correct details', () => {
    const payment = new Payment({
      id: '1',
      amount: 22.4,
      method: PaymentMethod.CREDIT_CARD,
      status: PaymentStatus.PENDING,
    });

    expect(payment.id).toBe('1');
    expect(payment.amount).toBe(22.4);
    expect(payment.method).toBe(PaymentMethod.CREDIT_CARD);
    expect(payment.status).toBe(PaymentStatus.PENDING);
  });

  test('Should update payment status', () => {
    const payment = new Payment({
      id: '1',
      amount: 22.4,
      method: PaymentMethod.CREDIT_CARD,
      status: PaymentStatus.PENDING,
    });

    payment.updateStatus(PaymentStatus.PAID);
    expect(payment.status).toBe(PaymentStatus.PAID);
  });
});
