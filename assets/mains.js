document.addEventListener("DOMContentLoaded", function () {
  const nettozubrutto = document.getElementById("nettozubrutto");
  const mwst = document.getElementById("mwst");
  const betrag = document.getElementById("betrag");
  const outputMwSt = document.getElementById("outputMwSt");
  const outputBetrag = document.getElementById("outputBetrag");

  document.getElementById("berechnen").addEventListener("click", function () {
    const netto = parseFloat(betrag.value);
    const mwstValue = parseFloat(mwst.value);
    const isNettoToBrutto = nettozubrutto.checked;

    const mwstAmount = isNettoToBrutto
      ? netto * mwstValue
      : netto / (1 + mwstValue);
    const endPrice = isNettoToBrutto ? netto + mwstAmount : netto;

    outputMwSt.textContent = `MwSt: ${mwstAmount.toFixed(2)} €`;
    outputBetrag.textContent = `${
      isNettoToBrutto ? "Brutto" : "Netto"
    }betrag: ${endPrice.toFixed(2)} €`;
  });

  nettozubrutto.addEventListener("change", function () {
    const labelText = nettozubrutto.checked ? "Nettobetrag" : "Bruttobetrag";
    outputBetrag.textContent = `${labelText} (Endpreis)`;
  });
});
