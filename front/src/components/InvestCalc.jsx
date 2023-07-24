import React, { useState } from "react";
import "./Invest_Calc.css";

export default function Invest_Calc() {
  const [propertyCost, setPropertyCost] = useState("");
  const [mortgageInitialPayment, setMortgageInitialPayment] = useState("");
  const [mortgageLoanTerm, setMortgageLoanTerm] = useState("");
  const [mortgageTotal, setMortgageTotal] = useState(0);

  const [installmentInitialPayment, setInstallmentInitialPayment] = useState("");
  const [installmentLoanTerm, setInstallmentLoanTerm] = useState("");
  const [installmentTotal, setInstallmentTotal] = useState(0);

  const calculateMortgage = () => {
    const totalCost = parseFloat(propertyCost);
    const downPayment = parseFloat(mortgageInitialPayment);
    const years = parseFloat(mortgageLoanTerm);
    const mortgageAmount = totalCost - downPayment;
    const monthlyInterestRate = 0.005; // Assuming 6% annual interest rate (0.06 / 12)
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
    const installmentAmount = totalCost - downPayment;
    const monthlyInterestRate = 0.004; // Assuming 5% annual interest rate (0.05 / 12)
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

  const handleCalculateMortage = () => {
    calculateMortgage();
  };

  const handleCalculateInstallment = () => {
    calculateInstallment();
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
        <button className="calculator-button" onClick={handleCalculateInstallment}>
          Рассчитать
        </button>
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
        <button className="calculator-button" onClick={handleCalculateMortage}>
          Рассчитать
        </button>
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


