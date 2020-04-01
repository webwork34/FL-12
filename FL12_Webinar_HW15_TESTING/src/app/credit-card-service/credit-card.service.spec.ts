import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });


  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

   it('card type should be Unknown ', () => {
    expect(service.testCreditCard('3400 0000 0000 009', 'American Express')).
    toEqual({isValid: false, message: 'Unknown card type'});
  })

  it('Credit card number should be invalid', () => {
    expect(service.testCreditCard('6334 0000 0000 0004', 'MasterCard')).
    toEqual({isValid: false, message: 'Credit card number is invalid'});
  })

  it('Credit card number should be in invalid format', () => {
    expect(service.testCreditCard('4111 1111 1111 1111a', 'visa')).
    toEqual({isValid: false, message: 'Credit card number is in invalid format'});
  })

  it('card number should be associated with a scam attempt', () => {
    expect(service.testCreditCard('5490997771092064', 'MasterCard')).
    toEqual({isValid: false, message: 'Warning! This credit card number is associated with a scam attempt'});
  })


  it('Credit card should be in valid format', () => {
    expect(service.testCreditCard('	3852 0000 0232 37', 'DinersClub')).
    toEqual({isValid: true, message: 'Credit card has a valid format'});
  })

});
