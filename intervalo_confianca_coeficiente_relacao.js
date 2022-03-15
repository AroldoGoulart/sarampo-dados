const infectados_meses_2018 = [
  29, 202, 225, 617, 2098, 3953, 2385, 569, 199, 59, 10,
];
const infectados_meses_2019 = [
  25, 49, 30, 36, 120, 667, 2868, 6499, 4407, 3601, 1560, 1039,
];
const infectados_meses_2020 = [
  2192, 2298, 2475, 941, 87, 46, 79, 93, 97, 83, 46, 11,
];

const infectados_meses_2021 = [199, 128, 73, 62, 59, 22, 26, 30, 18, 27, 23, 1];

// site nettab sus
const imunizados_2018 = 4837858;
const imunizados_2019 = 5106270;
const imunizados_2020 = 4161884;
const imunizados_2021 = 3458574;

const infectados_total_2018 = infectados_meses_2018.reduce((a, b) => a + b, 0);
const infectados_total_2019 = infectados_meses_2019.reduce((a, b) => a + b, 0);
const infectados_total_2020 = infectados_meses_2020.reduce((a, b) => a + b, 0);
const infectados_total_2021 = infectados_meses_2021.reduce((a, b) => a + b, 0);

console.log(
  `totais`,
  infectados_total_2018,
  infectados_total_2019,
  infectados_total_2020,
  infectados_total_2021
);

const infectados_total_infectados_geral =
  infectados_total_2018 +
  infectados_total_2019 +
  infectados_total_2020 +
  infectados_total_2021;

const total_imunizados_geral =
  imunizados_2018 + imunizados_2019 + imunizados_2020 + imunizados_2021;

// variavel P
const proporcao_geral =
  infectados_total_infectados_geral / total_imunizados_geral;

// variavel z critico (95% de confiança)
const significancia = 1.96;
const delta =
  significancia *
  Math.sqrt((proporcao_geral * (1 - proporcao_geral)) / total_imunizados_geral);

// intervalo de confianca
const ic1 = proporcao_geral - delta;
const ic2 = proporcao_geral + delta;

console.log(
  `Intervalo de confiança total (TODOS OS ANOS)`,
  `${(ic1 * 100).toFixed(4)} - ${(ic2 * 100).toFixed(4)}`
);

// coeficiente de correlação
const media_infectados_2018 =
  infectados_meses_2018.reduce((a, b) => a + b, 0) / 12;
const media_infectados_2019 =
  infectados_meses_2019.reduce((a, b) => a + b, 0) / 12;
const media_infectados_2020 =
  infectados_meses_2020.reduce((a, b) => a + b, 0) / 12;
const media_infectados_2021 =
  infectados_meses_2021.reduce((a, b) => a + b, 0) / 12;

const media_imunitarios_2018 = imunizados_2018 / 12;
const media_imunitarios_2019 = imunizados_2019 / 12;
const media_imunitarios_2020 = imunizados_2020 / 12;
const media_imunitarios_2021 = imunizados_2021 / 12;

const media_infectados_todos_anos =
  (infectados_total_2018 +
    infectados_total_2019 +
    infectados_total_2020 +
    infectados_total_2021) /
  (12 * 4);

const media_imunitarios_todos_anos =
  (imunizados_2018 + imunizados_2019 + imunizados_2020 + imunizados_2021) /
  (12 * 4);

// coeficiente de correlação
const rif_2018 = infectados_total_2018 - media_infectados_2018;
const rim_2018 = imunizados_2018 - media_imunitarios_2018;

const cc_infectados_2018 =
  (rif_2018 * rim_2018) / (rif_2018 ** 2 * rim_2018 ** 2);

const rif_2019 = infectados_total_2019 - media_infectados_2019;
const rim_2019 = imunizados_2019 - media_imunitarios_2019;

const cc_infectados_2019 =
  (rif_2019 * rim_2019) / (rif_2019 ** 2 * rim_2019 ** 2);

const rif_2020 = infectados_total_2020 - media_infectados_2020;
const rim_2020 = imunizados_2020 - media_imunitarios_2020;

const cc_infectados_2020 =
  (rif_2020 * rim_2020) / (rif_2020 ** 2 * rim_2020 ** 2);

const rif_2021 = infectados_total_2021 - media_infectados_2021;
const rim_2021 = imunizados_2021 - media_imunitarios_2021;

const cc_infectados_2021 =
  (rif_2021 * rim_2021) / (rif_2021 ** 2 * rim_2021 ** 2);

const rif_total =
  infectados_total_infectados_geral - media_infectados_todos_anos;
const rim_total = total_imunizados_geral - media_imunitarios_todos_anos;

const cc_infectados_total =
  (rif_total * rim_total) / (rif_total ** 2 * rim_total ** 2);

console.log(`Coeficiente de correlação 2018`, cc_infectados_2018);
console.log(`Coeficiente de correlação 2019`, cc_infectados_2019);
console.log(`Coeficiente de correlação 2020`, cc_infectados_2020);
console.log(`Coeficiente de correlação 2021`, cc_infectados_2021);

console.log(
  `Coeficiente de correlação total (TODOS OS ANOS)`,
  cc_infectados_total
);

console.log(`infectados total`, infectados_total_infectados_geral);
console.log(`imunizados total`, total_imunizados_geral);
