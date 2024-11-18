export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  MONEY = 'MONEY',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
}

interface PaymentProps {  
  id: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
}

export class Payment {  
  id: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus

  constructor ({ id, amount, method, status }: PaymentProps) {
    this.id = id
    this.amount = amount
    this.method = method
    this.status = status
  }

  updateStatus (status: PaymentStatus): void {
    this.status = status
  }
}
