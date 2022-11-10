
let koren1, koren2;

let a = 1;
let b = 6;
let c = 5;

let discr = b * b - 4 * a * c;

if (discr > 0) {
    koren1 = (-b + Math.sqrt(discr)) / (2 * a);
    koren2 = (-b - Math.sqrt(discr)) / (2 * a);

    console.log(`The roots of quadratic equation are ${koren1} and ${koren2}`);
}

else if (discrt == 0) {
    koren1 = koren2 = -b / (2 * a);

    console.log(`The roots of quadratic equation are ${koren1} and ${koren2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discr) / (2 * a)).toFixed(2);

    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}