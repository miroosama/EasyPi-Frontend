import * as React from 'react';
import CurrencyInput from 'react-currency-input-field';

export default function Modal({ handleAmountChange, amount }) {
  return (
      <CurrencyInput
        id="input-contribution"
        name="contribution"
        autoComplete="off"
        allowNegativeValue={false}
        // className={styles.input}
        placeholder="Enter Contribution"
        decimalsLimit={18}
        value={amount}
        onValueChange={(value) => handleAmountChange(value)}
    />
  );
}