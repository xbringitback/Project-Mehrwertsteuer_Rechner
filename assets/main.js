function calculate() {

    const steuer1 = document.querySelector(".steuer1").checked;
    const steuer2 = document.querySelector(".steuer2").checked;
    const steuerpro1 = document.querySelector(".steuerpro1").checked;
    const steuerpro2 = document.querySelector(".steuerpro2").checked;

    const inputFeld = document.querySelector("#input");
    const inputFeldvalue = inputFeld.value;
    const netto = Number(inputFeldvalue.replaceAll(",", "."));
    console.log(netto);
  
    if(steuer1 && steuerpro1) {
        mwst = netto * 0.19;
        bruttoBetrag = netto + mwst;
        nettoBetrag = 0.00;
        document.getElementById("output1").innerHTML = mwst.toFixed(2) + " €";
        document.getElementById("output2").innerHTML = bruttoBetrag.toFixed(2) + " €";
        document.getElementById("output3").innerHTML = nettoBetrag.toFixed(2) + " €";
    } else if (steuer1 && steuerpro2) {
        mwst = netto * 0.07;
        bruttoBetrag = netto + mwst;
        nettoBetrag = 0.00;
        document.getElementById("output1").innerHTML = mwst.toFixed(2) + " €";
        document.getElementById("output2").innerHTML = bruttoBetrag.toFixed(2) + " €";
        document.getElementById("output3").innerHTML = nettoBetrag.toFixed(2) + " €";
    } else if (steuer2 && steuerpro1) {
        mwst = netto / 1.19;
        nettoBetrag = netto - mwst;
        bruttoBetrag = 0.00;
        document.getElementById("output1").innerHTML = nettoBetrag.toFixed(2) + " €";
        document.getElementById("output2").innerHTML = bruttoBetrag.toFixed(2) + " €";
        document.getElementById("output3").innerHTML = mwst.toFixed(2) + " €";
    } else if (steuer2 && steuerpro2) {
        mwst = netto / 1.07;
        nettoBetrag = netto - mwst;
        bruttoBetrag = 0.00;
        document.getElementById("output1").innerHTML = nettoBetrag.toFixed(2) + " €";
        document.getElementById("output2").innerHTML = bruttoBetrag.toFixed(2) + " €";
        document.getElementById("output3").innerHTML = mwst.toFixed(2) + " €";
    }
}