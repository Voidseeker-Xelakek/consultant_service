import React, { useState } from "react";
// import "./Invest_Calc.css";

export default function Invest_Calc() {
  const [propertyCost, setPropertyCost] = useState("");
  const [initialPayment, setInitialPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [mortgageTotal, setMortgageTotal] = useState(0);
  const [installmentTotal, setInstallmentTotal] = useState(0);

  const calculateMortgage = () => {
    const totalCost = parseFloat(propertyCost);
    const downPayment = parseFloat(initialPayment);
    const years = parseFloat(loanTerm);
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
      initialPayment === "" ||
      loanTerm === ""
    ) {
      setMortgageTotal("Неверный формат ввода");
      setTimeout(() => {
        setMortgageTotal(0);
      }, 1500);
      return;
    }
    setMortgageTotal(mortgageTotalAmount.toFixed(2));
  };

  const calculateInstallment = () => {
    const totalCost = parseFloat(propertyCost);
    const downPayment = parseFloat(initialPayment);
    const years = parseFloat(loanTerm);
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
      initialPayment === "" ||
      loanTerm === ""
    ) {
      setInstallmentTotal("Неверный формат ввода");
      setTimeout(() => {
        setInstallmentTotal(0);
      }, 1500);
      return;
    }

    setInstallmentTotal(installmentTotalAmount.toFixed(2));
  };

  const handleCalculate = () => {
    calculateMortgage();
    calculateInstallment();
  };

  return (
    <div className="calculator">
      <h2>Калькулятор покупки недвижимости</h2>
      <div className="input-group">
        <label>Стоимость недвижимости (₽)</label>
        <input
          type="number"
          value={propertyCost}
          onChange={(e) => setPropertyCost(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Первоначальный взнос (₽)</label>
        <input
          type="number"
          value={initialPayment}
          onChange={(e) => setInitialPayment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Срок кредита (лет)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Рассчитать</button>
      <div className="result">
        <h3>Расчеты:</h3>
        <p>
          Итого по ипотеке:{" "}
          {isNaN(mortgageTotal)
            ? "Неверный формат ввода"
            : `${mortgageTotal} ₽`}
        </p>
        <p>
          Итого по рассрочке:{" "}
          {isNaN(installmentTotal)
            ? "Неверный формат ввода"
            : `${installmentTotal} ₽`}
        </p>
      </div>
    </div>
  );
}
