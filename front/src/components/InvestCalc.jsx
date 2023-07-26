import React, { useState } from "react";
import "./Invest_Calc.css";

export default function Invest_Calc() {
  const [mortgagePropertyCost, setMortgagePropertyCost] = useState("");
  const [mortgageInitialPayment, setMortgageInitialPayment] = useState("");
  const [mortgageLoanTerm, setMortgageLoanTerm] = useState("");
  const [mortgageTotal, setMortgageTotal] = useState(0);
  const [mortgageMonthlyInterestRate, setMortgageMonthlyInterestRate] = useState("");

  const [installmentPropertyCost, setInstallmentPropertyCost] = useState("");
  const [installmentInitialPayment, setInstallmentInitialPayment] = useState("");
  const [installmentLoanTerm, setInstallmentLoanTerm] = useState("");
  const [installmentTotal, setInstallmentTotal] = useState(0);
  const [installmentMonthlyInterestRate, setInstallmentMonthlyInterestRate] = useState("");

  const [calculationMessage, setCalculationMessage] = useState("");

  const calculateMortgage = () => {
    const totalMortgageCost = parseFloat(mortgagePropertyCost);
    const downPayment = parseFloat(mortgageInitialPayment);
    const years = parseFloat(mortgageLoanTerm);
    const interestRate = parseFloat(mortgageMonthlyInterestRate) / 100; // Преобразуем годовую ставку в десятичную форму
    const mortgageAmount = totalMortgageCost - downPayment;
    const monthlyInterestRate = interestRate / 12; // Преобразуем годовую ставку в ежемесячную
    const months = years * 12;

    const monthlyPayment =
      (mortgageAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    const mortgageTotalAmount = monthlyPayment * months;

    if (
      isNaN(totalMortgageCost) ||
      isNaN(downPayment) ||
      isNaN(years) ||
      totalMortgageCost === "" ||
      mortgageInitialPayment === "" ||
      mortgageLoanTerm === "" ||
      totalMortgageCost < 0 ||
      downPayment < 0 ||
      years < 0
    ) {
      setMortgageTotal("Неверные вводные данные");
      setTimeout(() => {
        setMortgageTotal(0);
      }, 1500);
      return;
    }
    setMortgageTotal(mortgageTotalAmount >= 0 ? mortgageTotalAmount.toFixed(2) : 0);
  };

  const calculateInstallment = () => {
    const totalInstallmentCost = parseFloat(installmentPropertyCost);
    const downPayment = parseFloat(installmentInitialPayment);
    const years = parseFloat(installmentLoanTerm);
    const interestRate = parseFloat(installmentMonthlyInterestRate) / 100; // Преобразуем годовую ставку в десятичную форму
    const installmentAmount = totalInstallmentCost - downPayment;
    /*const monthlyInterestRate = interestRate / 12;*/ // Преобразуем годовую ставку в ежемесячную
    const monthlyInterestRate = 0;
    const months = years * 12;

    const monthlyPayment =
      (installmentAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    const installmentTotalAmount = monthlyPayment * months;

    if (
      isNaN(totalInstallmentCost) ||
      isNaN(downPayment) ||
      isNaN(years) ||
      totalInstallmentCost === "" ||
      installmentInitialPayment === "" ||
      installmentLoanTerm === "" ||
      totalInstallmentCost < 0 ||
      downPayment < 0 ||
      years < 0
    ) {
      setInstallmentTotal("Неверные вводные данные");
      setTimeout(() => {
        setInstallmentTotal(0);
      }, 1500);
      return;
    }

    setInstallmentTotal(installmentTotalAmount >= 0 ? installmentTotalAmount.toFixed(2) : 0);
  };
  /*
  const handleCalculateMortage = () => {
    calculateMortgage();
  };
  */
  /*
  const handleCalculateInstallment = () => {
    calculateInstallment();
  };
  */

  const handleCalculate = () => {
    const isValidInputs =
      isValidNumber(installmentPropertyCost) &&
      isValidNumber(mortgagePropertyCost) &&
      isValidNumber(mortgageInitialPayment) &&
      isValidNumber(mortgageLoanTerm) &&
      isValidNumber(installmentInitialPayment) &&
      isValidNumber(installmentLoanTerm) &&
      isValidNumber(mortgageMonthlyInterestRate);
  
    if (!isValidInputs) {
      alert("Неверные вводные данные");
      return;
    } else if (mortgageMonthlyInterestRate > 100) {
      alert("Неверные вводные данные. Пожалуйста, убедитесь, что процентная ставка не превышает 100%.");
      return;
    }
  
    const totalMortgageCost = parseFloat(mortgagePropertyCost);
    const downPaymentMortgage = parseFloat(mortgageInitialPayment);
    const yearsMortgage = parseFloat(mortgageLoanTerm);
    const interestRateMortgage = parseFloat(mortgageMonthlyInterestRate) / 100;
    const mortgageAmount = totalMortgageCost - downPaymentMortgage;
    const monthlyInterestRateMortgage = interestRateMortgage / 12;
    const monthsMortgage = yearsMortgage * 12;
    const monthlyPaymentMortgage =
      (mortgageAmount * monthlyInterestRateMortgage * Math.pow(1 + monthlyInterestRateMortgage, monthsMortgage)) /
      (Math.pow(1 + monthlyInterestRateMortgage, monthsMortgage) - 1);
    const mortgageTotalAmount = monthlyPaymentMortgage * monthsMortgage;
  
    const totalInstallmentCost = parseFloat(installmentPropertyCost);
    const downPaymentInstallment = parseFloat(installmentInitialPayment);
    const yearsInstallment = parseFloat(installmentLoanTerm);
    const monthsInstallment = yearsInstallment * 12;
  
    // Calculate the monthly payment for the installment directly
    const monthlyPaymentInstallment = totalInstallmentCost / monthsInstallment;
    const installmentTotalAmount = monthlyPaymentInstallment * monthsInstallment;
  
    if (isNaN(mortgageTotalAmount) || isNaN(installmentTotalAmount) || mortgageTotalAmount < 0 || installmentTotalAmount < 0) {
      setCalculationMessage("Неверные вводные данные");
      return;
    }
  
    const difference = Math.abs(installmentTotalAmount - mortgageTotalAmount);
  
    if (mortgageTotalAmount > installmentTotalAmount) {
      setCalculationMessage(
        `Выгоднее взять по рассрочке с разницей ${difference.toFixed(2)} руб между выбором по рассрочке или по ипотеке.`
      );
    } else if (mortgageTotalAmount < installmentTotalAmount) {
      setCalculationMessage(
        `Выгоднее взять по ипотеке с разницей ${difference.toFixed(2)} руб между выбором по рассрочке или по ипотеке.`
      );
    } else {
      setCalculationMessage("Итоги по ипотеке и рассрочке равны.");
    }
  
    setMortgageTotal(mortgageTotalAmount >= 0 ? mortgageTotalAmount.toFixed(2) : 0);
    setInstallmentTotal(installmentTotalAmount >= 0 ? installmentTotalAmount.toFixed(2) : 0);
  };
  
  
  const isValidNumber = (value) => {
    if (value === "" || isNaN(value) || parseFloat(value) < 0) {
      return false;
    }
    return true;
  };

return (
  <div className="wrapper">
    <div className="calculator">
      <div className="Installment">
        <h2>По рассрочке</h2>
        <div className="input-group">
          <label className="calculator-label">Стоимость недвижимости (₽)</label>
          <input
            className="calculator-input"
            type="number"
            value={installmentPropertyCost}
            onChange={(e) => setInstallmentPropertyCost(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Первоначальный взнос (₽)</label>
          <input
            className="calculator-input"
            type="number"
            value={installmentInitialPayment}
            onChange={(e) => setInstallmentInitialPayment(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Срок рассрочки (лет)</label>
          <input
            className="calculator-input"
            type="number"
            value={installmentLoanTerm}
            onChange={(e) => setInstallmentLoanTerm(e.target.value)}
          />
        </div>
        {/*<button className="calculator-button" onClick={handleCalculateInstallment}>
          Рассчитать
</button>*/}
        <div className="result">
          <h3>Расчеты:</h3>
          <p>
          Рассрочка: общая сумма выплаты{" "}
            {isNaN(installmentTotal) ? "Неверные вводные данные" : `${installmentTotal >= 0 ? installmentTotal : 0} ₽`}
          </p>
        </div>
      </div>
      <div className="Name">
        <h2>Калькулятор покупки недвижимости</h2>
        <button className="calculator-button" onClick={handleCalculate}>
          Рассчитать
        </button>
        <div className="result-message">
          <h3>Результат:</h3>
          <p>{calculationMessage}</p>
        </div>
      </div>
      <div className="Mortgage">
        <h2>По ипотеке</h2>
        <div className="input-group">
          <label className="calculator-label">Стоимость недвижимости (₽)</label>
          <input
            className="calculator-input"
            type="number"
            value={mortgagePropertyCost}
            onChange={(e) => setMortgagePropertyCost(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Первоначальный взнос (₽)</label>
          <input
            className="calculator-input"
            type="number"
            value={mortgageInitialPayment}
            onChange={(e) => setMortgageInitialPayment(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Срок ипотеки (лет)</label>
          <input
            className="calculator-input"
            type="number"
            value={mortgageLoanTerm}
            onChange={(e) => setMortgageLoanTerm(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Ежемесячная процентная ставка (%)</label>
          <input
            className="calculator-input"
            type="number"
            value={mortgageMonthlyInterestRate}
            onChange={(e) => setMortgageMonthlyInterestRate(e.target.value)}
          />
        </div>
        {/*<button className="calculator-button" onClick={handleCalculateMortage}>
          Рассчитать
</button>*/}
        <div className="result">
          <h3>Расчеты:</h3>
          <p>
          Ипотека: общая сумма выплаты:{" "}
            {isNaN(mortgageTotal) ? "Неверные вводные данные" : `${mortgageTotal >= 0 ? mortgageTotal : 0} ₽`}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}


