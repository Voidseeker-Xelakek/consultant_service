import React, { useState } from "react";
import "./Invest_Calc.css";

export default function Invest_Calc() {
  const [propertyCost, setPropertyCost] = useState("");
  const [mortgageInitialPayment, setMortgageInitialPayment] = useState("");
  const [mortgageLoanTerm, setMortgageLoanTerm] = useState("");
  const [mortgageTotal, setMortgageTotal] = useState(0);
  const [mortgageMonthlyInterestRate, setMortgageMonthlyInterestRate] = useState("");

  const [installmentInitialPayment, setInstallmentInitialPayment] = useState("");
  const [installmentLoanTerm, setInstallmentLoanTerm] = useState("");
  const [installmentTotal, setInstallmentTotal] = useState(0);
  const [installmentMonthlyInterestRate, setInstallmentMonthlyInterestRate] = useState("");

  const [calculationMessage, setCalculationMessage] = useState("");

  const calculateMortgage = () => {
    const totalCost = parseFloat(propertyCost);
    const downPayment = parseFloat(mortgageInitialPayment);
    const years = parseFloat(mortgageLoanTerm);
    const interestRate = parseFloat(mortgageMonthlyInterestRate) / 100; // Преобразуем годовую ставку в десятичную форму
    const mortgageAmount = totalCost - downPayment;
    const monthlyInterestRate = interestRate / 12; // Преобразуем годовую ставку в ежемесячную
    const months = years * 12;

    const monthlyPayment =
      (mortgageAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    const mortgageTotalAmount = monthlyPayment * months;

    if (
      isNaN(totalCost) ||
      isNaN(downPayment) ||
      isNaN(years) ||
      propertyCost === "" ||
      mortgageInitialPayment === "" ||
      mortgageLoanTerm === "" ||
      totalCost < 0 ||
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
    const totalCost = parseFloat(propertyCost);
    const downPayment = parseFloat(installmentInitialPayment);
    const years = parseFloat(installmentLoanTerm);
    const interestRate = parseFloat(installmentMonthlyInterestRate) / 100; // Преобразуем годовую ставку в десятичную форму
    const installmentAmount = totalCost - downPayment;
    const monthlyInterestRate = interestRate / 12; // Преобразуем годовую ставку в ежемесячную
    const months = years * 12;

    const monthlyPayment =
      (installmentAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    const installmentTotalAmount = monthlyPayment * months;

    if (
      isNaN(totalCost) ||
      isNaN(downPayment) ||
      isNaN(years) ||
      propertyCost === "" ||
      installmentInitialPayment === "" ||
      installmentLoanTerm === "" ||
      totalCost < 0 ||
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

  const handleCalculateInstallment = () => {
    calculateInstallment();
  };
  */

  const handleCalculate = () => {
    const isValidInputs =
      isValidNumber(propertyCost) &&
      isValidNumber(mortgageInitialPayment) &&
      isValidNumber(mortgageLoanTerm) &&
      isValidNumber(installmentInitialPayment) &&
      isValidNumber(installmentLoanTerm) &&
      isValidNumber(mortgageMonthlyInterestRate) &&
      isValidNumber(installmentMonthlyInterestRate);
  
    if (!isValidInputs) {
      alert("Неверные вводные данные");
      return;
    } else if (mortgageMonthlyInterestRate > 100 || installmentMonthlyInterestRate > 100) {
      alert("Неверные вводные данные. Пожалуйста, убедитесь, что процентная ставка не превышает 100%.");
      return;
    }
  
    const totalCost = parseFloat(propertyCost);
    const downPaymentMortgage = parseFloat(mortgageInitialPayment);
    const yearsMortgage = parseFloat(mortgageLoanTerm);
    const interestRateMortgage = parseFloat(mortgageMonthlyInterestRate) / 100;
    const mortgageAmount = totalCost - downPaymentMortgage;
    const monthlyInterestRateMortgage = interestRateMortgage / 12;
    const monthsMortgage = yearsMortgage * 12;
    const monthlyPaymentMortgage =
      (mortgageAmount * monthlyInterestRateMortgage * Math.pow(1 + monthlyInterestRateMortgage, monthsMortgage)) /
      (Math.pow(1 + monthlyInterestRateMortgage, monthsMortgage) - 1);
    const mortgageTotalAmount = monthlyPaymentMortgage * monthsMortgage;
  
    const downPaymentInstallment = parseFloat(installmentInitialPayment);
    const yearsInstallment = parseFloat(installmentLoanTerm);
    const interestRateInstallment = parseFloat(installmentMonthlyInterestRate) / 100;
    const installmentAmount = totalCost - downPaymentInstallment;
    const monthlyInterestRateInstallment = interestRateInstallment / 12;
    const monthsInstallment = yearsInstallment * 12;
    const monthlyPaymentInstallment =
      (installmentAmount * monthlyInterestRateInstallment * Math.pow(1 + monthlyInterestRateInstallment, monthsInstallment)) /
      (Math.pow(1 + monthlyInterestRateInstallment, monthsInstallment) - 1);
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
    <div className="calculator">
      <div className="Credit">
        <h2>По рассрочке</h2>
        <div className="input-group">
          <label className="calculator-label">Стоимость недвижимости (₽)</label>
          <input
            className="calculator-input"
            type="number"
            value={propertyCost}
            onChange={(e) => setPropertyCost(e.target.value)}
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
          <label className="calculator-label">Срок кредита (лет)</label>
          <input
            className="calculator-input"
            type="number"
            value={installmentLoanTerm}
            onChange={(e) => setInstallmentLoanTerm(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="calculator-label">Ежемесячная процентная ставка (%)</label>
          <input
            className="calculator-input"
            type="number"
            value={installmentMonthlyInterestRate}
            onChange={(e) => setInstallmentMonthlyInterestRate(e.target.value)}
          />
        </div>
        {/*<button className="calculator-button" onClick={handleCalculateInstallment}>
          Рассчитать
        </button>*/}
        <div className="result">
          <h3>Расчеты:</h3>
          <p>
            Итого по рассрочке:{" "}
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
            value={propertyCost}
            onChange={(e) => setPropertyCost(e.target.value)}
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
            Итого по ипотеке:{" "}
            {isNaN(mortgageTotal) ? "Неверные вводные данные" : `${mortgageTotal >= 0 ? mortgageTotal : 0} ₽`}
          </p>
        </div>
      </div>
    </div>
  );
  
}


