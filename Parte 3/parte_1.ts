import { factorial, abs, pi, round } from 'mathjs';

const tolerancia = 1e-8;
const iteraciones_maximas = 2500;

function div_t(x: number): number {
    if (x === 0) {
        throw new Error("Error: división por cero");
    }

    let x_k: number = tolerancia * 10;
    let x_k_siguiente: number;

    // if (factorial(80) < x && x <= factorial(100)) { x_k = power_t(eps, 15) }
    // else if (factorial(60) < x && x <= factorial(80)) { x_k = power_t(eps, 11) }
    // else if (factorial(40) < x && x <= factorial(60)) { x_k = power_t(eps, 8) }
    // else if (factorial(20) < x && x <= factorial(40)) { x_k = power_t(eps, 4) }
    // else if (factorial(0) < x && x <= factorial(20)) { x_k = power_t(eps, 2) }

    for (let iteracion = 0; iteracion < iteraciones_maximas; iteracion++) {
        x_k_siguiente = x_k * (2 - x * x_k);

        const error = abs(x_k_siguiente - x_k);
        if (error < tolerancia) {
            x_k = x_k_siguiente;
            break;
        } else {
            x_k = x_k_siguiente;
        }
    }

    return x_k;
}

function power_t(x: number, a: number): number {
    let result = 1;

    if (a > 0) {
        for (let iteracion = 0; iteracion < a; iteracion++) {
            result *= x;
        }
    } else if (a < 0) {
        for (let iteracion = 0; iteracion < abs(a); iteracion++) {
            //Cambiar division
            result *= 1 / x;
        }
    }

    return result;
}

function exp_t(x: number): number {
    let s_k = 1;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const numerador = power_t(x, n);
        const denominador = factorial(n);

        //Cambiar division
        s_k_siguiente = s_k + numerador / denominador;

        const error = abs(s_k_siguiente - s_k);

        if (error < tolerancia) {
            s_k = s_k_siguiente;
            break;
        } else {
            s_k = s_k_siguiente;
        }
    }

    return s_k;
}

function sin_t(x: number): number {
    while (x > 2 * pi) {
        x -= 2 * pi;
    }

    let s_k = x;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const signo_alternado = power_t(-1, n);
        const numerador = power_t(x, 2 * n + 1);
        const denominador = factorial(2 * n + 1);

        //Cambiar division
        s_k_siguiente = s_k + signo_alternado * numerador / denominador;

        const error = abs(s_k_siguiente - s_k);

        if (error < tolerancia) {
            s_k = s_k_siguiente;
            break;
        } else {
            s_k = s_k_siguiente;
        }
    }

    return s_k;
}

function cos_t(x: number): number {
    while (x > 2 * pi) {
        x -= 2 * pi;
    }

    let s_k = 1;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const signo_alternado = power_t(-1, n);
        const numerador = power_t(x, 2 * n);
        const denominador = factorial(2 * n);

        //Cambiar division
        s_k_siguiente = s_k + signo_alternado * numerador / denominador;

        const error = abs(s_k_siguiente - s_k);

        if (error < tolerancia) {
            s_k = s_k_siguiente;
            break;
        } else {
            s_k = s_k_siguiente;
        }
    }

    return s_k;
}

function tan_t(x: number): number {
    if (cos_t(x) < tolerancia) {
        throw new Error("Error: valor fuera del dominio de la función");
    } else {
        //Cambiar division
        return sin_t(x) / cos_t(x);
    }
}


export {
    div_t,
    power_t,
    exp_t,
    sin_t,
    cos_t,
    tan_t
}