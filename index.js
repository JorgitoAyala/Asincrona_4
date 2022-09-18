//PREGUNTA 1:
function pregunta1() {
  let p1_tarifa = Number(document.getElementById("p1_tarifa").value);
  let p1_horas = Number(document.getElementById("p1_horas").value);

  let resultado1 = document.getElementById("resultado1");

  const trabajo = (horas1, tarifa1) => {
    let pago = horas1 * tarifa1;

    if (horas1 > 40) {
      let tarifa2 = tarifa1 + tarifa1 * 0.5;
      let horas2 = horas1 - 40;
      let nuevo_pago = pago + horas2 * tarifa2;
      return `incluyendo horas extras será de ${nuevo_pago}`;
    }

    return `normal será de ${pago}`;
  };

  resultado1.innerHTML = `Finalmente, su pago ${trabajo(
    p1_horas,
    p1_tarifa
  )} soles`;
}

//PREGUNTA 2:
function pregunta2() {
  let p2_radio = Number(document.getElementById("p2_radio").value);

  let resultado2_1 = document.getElementById("resultado2_1");
  let resultado2_2 = document.getElementById("resultado2_2");
  let resultado2_3 = document.getElementById("resultado2_3");

  const circunferencia = (radio) => {
    let perimetro1 = 2 * Math.PI * radio;
    let perimetro2 = 2 * Math.PI * (radio * 0.5);
    let perimetro3 = 2 * Math.PI * (radio * 0.5 * 0.25);

    return {
      perimetro1,
      perimetro2,
      perimetro3,
    };
  };

  let funcion = circunferencia(p2_radio);

  resultado2_1.innerHTML = `El perimetro al 100% del radio es ${funcion.perimetro1}`;
  resultado2_2.innerHTML = `El perimetro al 50% del radio es ${funcion.perimetro2}`;
  resultado2_3.innerHTML = `El perimetro al 50% del 25% del radio es ${funcion.perimetro3}`;
}

//PREGUNTA 3:
function pregunta3() {
  let p3_tarifa = Number(document.getElementById("p3_tarifa").value);
  let p3_horas = Number(document.getElementById("p3_horas").value);

  let resultado3_1 = document.getElementById("resultado3_1");
  let resultado3_2 = document.getElementById("resultado3_2");
  let resultado3_3 = document.getElementById("resultado3_3");
  let resultado3_4 = document.getElementById("resultado3_4");
  let resultado3_5 = document.getElementById("resultado3_5");

  const trabajo = (tarifa, horas) => {
    let pago = tarifa * horas;

    return {
      pago,
      res_1: pago * 0.1,
      res_2: pago * 0.3,
      res_3: pago * 0.6,
      res_4: pago * 0.8,
    };
  };

  let funcion = trabajo(p3_tarifa, p3_horas);

  resultado3_1.innerHTML = `Su pago total es de ${funcion.pago} soles.`;
  resultado3_2.innerHTML = `El 10% de su pago es de ${funcion.res_1} soles.`;
  resultado3_3.innerHTML = `El 30% de su pago es de ${funcion.res_2} soles.`;
  resultado3_4.innerHTML = `El 60% de su pago es de ${funcion.res_3} soles.`;
  resultado3_5.innerHTML = `El 80% de su pago es de ${funcion.res_4} soles.`;
}

//PREGUNTA 4:
function pregunta4() {
  let p4_monto = Number(document.getElementById("p4_monto").value);

  let resultado4 = document.getElementById("resultado4");
  let resultado4_1 = document.getElementById("resultado4_1");

  const conversion = (monto) => {
    const dinero = [50, 20, 10, 5, 1];

    resultado4_1.innerHTML = `El monto a convertir es: ${monto}`;

    for (const cash of dinero) {
      if (monto >= cash) {
        let queda = parseInt(monto / cash);

        let nuevoP = document.createElement("p");
        nuevoP.classList = "text-xl";
        nuevoP.textContent = `${
          cash >= 10 ? "Billetes" : "Monedas"
        } de ${cash} soles: ${queda}`;

        monto = monto % cash;

        resultado4.append(nuevoP);
      }
    }
  };

  resultado4.innerHTML = "";
  conversion(p4_monto);
}

//PREGUNTA 5:
function pregunta5() {
  let p5_p1 = Number(document.getElementById("p5_p1").value);
  let p5_p2 = Number(document.getElementById("p5_p2").value);
  let p5_p3 = Number(document.getElementById("p5_p3").value);
  let p5_trabajo = Number(document.getElementById("p5_trabajo").value);
  let p5_examen = Number(document.getElementById("p5_examen").value);

  let resultado5 = document.getElementById("resultado5");

  const notas = (p1, p2, p3, ef, tf) => {
    let promedio, final;
    let menor20 = p1 <= 20 && p2 <= 20 && p3 <= 20 && ef <= 20 && tf <= 20;
    let mayor0 = p1 >= 0 && p2 >= 0 && p3 >= 0 && ef >= 0 && tf >= 0;

    if (mayor0 && menor20) {
      promedio = (p1 + p2 + p3) / 3;
      final = promedio * 0.55 + ef * 0.3 + tf * 0.15;
    } else {
      final = `Te equivocaste al escribir!`;
    }

    return final;
  };

  resultado5.innerHTML = `Tu calificación final es: ${notas(
    p5_p1,
    p5_p2,
    p5_p3,
    p5_trabajo,
    p5_examen
  )}`;
}

//PREGUNTA 6:
function pregunta6() {
  let p6_presupuesto = Number(document.getElementById("p6_presupuesto").value);

  let resultado6_1 = document.getElementById("resultado6_1");
  let resultado6_2 = document.getElementById("resultado6_2");
  let resultado6_3 = document.getElementById("resultado6_3");

  const salud = (presu) => {
    return {
      area_1: presu * 0.4,
      area_2: presu * 0.3,
      area_3: presu * 0.3,
    };
  };

  let funcion = salud(p6_presupuesto);

  resultado6_1.innerHTML = `El presupuesto destinado a Ginecología es de: ${funcion.area_1} soles.`;
  resultado6_2.innerHTML = `El presupuesto destinado a Pediatría es de: ${funcion.area_2} soles.`;
  resultado6_3.innerHTML = `El presupuesto destinado a Traumatología es de: ${funcion.area_3} soles.`;
}

//PREGUNTA 7:
function pregunta7() {
  let p7_velocidad = Number(document.getElementById("p7_velocidad").value);

  let resultado7 = document.getElementById("resultado7");

  const conversion = (velocidad) => {
    return velocidad * (18 / 5);
  };

  let funcion = conversion(p7_velocidad);

  resultado7.innerHTML = `La velocidad convertida es de: ${funcion} km/h.`;
}

//PREGUNTA 8:
function pregunta8() {
  let p8_elementos = document.getElementById("p8_elementos").value;

  let resultado8_1 = document.getElementById("resultado8_1");
  let resultado8_2 = document.getElementById("resultado8_2");
  let resultado8_3 = document.getElementById("resultado8_3");
  let resultado8_4 = document.getElementById("resultado8_4");

  const calArray = (arr) => {
    let arrEnteros = JSON.parse(`[${arr}]`);

    let mayor = Math.max(...arrEnteros);
    let menor = Math.min(...arrEnteros);
    let media =
      arrEnteros.reduce((previous, current) => (current += previous)) /
      arrEnteros.length;

    return {
      arrEnteros,
      mayor,
      menor,
      media,
    };
  };

  let funcion = calArray(p8_elementos);

  resultado8_1.innerHTML = `El array es: [${funcion.arrEnteros.toString()}]`;
  resultado8_2.innerHTML = `El número mayor del array es: ${funcion.mayor}`;
  resultado8_3.innerHTML = `El número menor del array es: ${funcion.menor}`;
  resultado8_4.innerHTML = `La media del array es: ${funcion.media}`;
}

//PREGUNTA 9:
function pregunta9() {
  let p9_elementos = document.getElementById("p9_elementos").value;

  let resultado9_1 = document.getElementById("resultado9_1");
  let resultado9_2 = document.getElementById("resultado9_2");

  const orderArray = (arr) => {
    let arrEnteros = JSON.parse(`[${arr}]`);
    let arrOrdenado = arrEnteros.sort((a, b) => a - b);

    return arrOrdenado;
  };

  let funcion = orderArray(p9_elementos);

  resultado9_1.innerHTML = `El array original es: [${JSON.parse(
    `[${p9_elementos}]`
  ).toString()}]`;
  resultado9_2.innerHTML = `El array ordenado es: [${funcion.toString()}]`;
}

//PREGUNTA 10:
function pregunta10() {
  let p10_fibonacci = Number(document.getElementById("p10_fibonacci").value);

  let resultado10 = document.getElementById("resultado10");

  const funcFibonacci = (numero) => {
    var fibonacci = [];
    //constantes de fibonacci
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    //Bucle partiendo del 2
    for (var i = 2; i < numero; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
  };

  let funcion = funcFibonacci(p10_fibonacci);

  resultado10.innerHTML = `La serie de fibonacci para ${p10_fibonacci} numeros es de: [${funcion.toString()}]`;
}
