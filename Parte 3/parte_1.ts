import { factorial, abs, pi } from 'mathjs';

const tolerancia = 1e-8;
const iteraciones_maximas = 2500;
const eps = Number.EPSILON;

function div_t(x: number): number {
    let es_negativo = false;

    if (x === 0) {
        throw new Error("División por cero");
    } else if (x < 0) {
        es_negativo = true;
        x = abs(x);
    }

    let x_k: number;
    let x_k_siguiente: number;

    if (factorial(80) < x && x <= factorial(100)) { x_k = power_t(eps, 15) }
    else if (factorial(60) < x && x <= factorial(80)) { x_k = power_t(eps, 11) }
    else if (factorial(40) < x && x <= factorial(60)) { x_k = power_t(eps, 8) }
    else if (factorial(20) < x && x <= factorial(40)) { x_k = power_t(eps, 4) }
    else if (0 < x && x <= factorial(20)) { x_k = power_t(eps, 2) }
    else { return 0 }

    for (let iteracion = 0; iteracion < iteraciones_maximas; iteracion++) {
        x_k_siguiente = x_k * (2 - x * x_k);
        const error = abs(x_k_siguiente - x_k);

        if (error < tolerancia * abs(x_k_siguiente)) {
            x_k = x_k_siguiente;
            break;
        } else {
            x_k = x_k_siguiente;
        }
    }

    if (es_negativo) { x_k = -1 * x_k }

    return x_k;
}

function power_t(a: number, x: number): number {
    if (!Number.isInteger(x)) {
        throw new Error("El exponente debe ser entero");
    }

    let result = 1;

    if (x > 0) {
        for (let iteracion = 0; iteracion < x; iteracion++) {
            result *= a;
        }
    } else if (x < 0) {
        for (let iteracion = 0; iteracion < abs(x); iteracion++) {
            result *= div_t(a);
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

        s_k_siguiente = s_k + numerador * div_t(denominador);
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
    while (x > 2 * pi) { x -= 2 * pi }

    let s_k = x;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const signo_alternado = power_t(-1, n);
        const numerador = power_t(x, 2 * n + 1);
        const denominador = factorial(2 * n + 1);

        s_k_siguiente = s_k + signo_alternado * numerador * div_t(denominador);
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
    while (x > 2 * pi) { x -= 2 * pi }

    let s_k = 1;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const signo_alternado = power_t(-1, n);
        const numerador = power_t(x, 2 * n);
        const denominador = factorial(2 * n);

        s_k_siguiente = s_k + signo_alternado * numerador * div_t(denominador);
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
    if (abs(cos_t(x)) < eps) {
        throw new Error("Valor fuera del dominio de la función");
    } else {
        return sin_t(x) * div_t(cos_t(x));
    }
}

function ln_t(x: number): number {
    if (x <= 0) {
        throw new Error("Valor fuera del dominio de la función");
    }

    const constante = 2 * (x - 1) * div_t(x + 1);
    let s_k = constante;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const primer_factor = div_t(2 * n + 1);
        const segundo_factor = power_t((x - 1) * div_t(x + 1), 2 * n);

        s_k_siguiente = s_k + constante * primer_factor * segundo_factor;

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

function log_t(x: number, a: number) {
    if (x === 0 || a === 0) {
        throw new Error("La base y el argumento deben ser distintos de cero");
    }

    return ln_t(x) * div_t(ln_t(a));
}

function sinh_t(x: number): number {
    let s_k = x;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const numerador = power_t(x, 2 * n + 1);
        const denominador = factorial(2 * n + 1);

        s_k_siguiente = s_k + numerador * div_t(denominador);
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

function cosh_t(x: number): number {
    let s_k = 1;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const numerador = power_t(x, 2 * n);
        const denominador = factorial(2 * n);

        s_k_siguiente = s_k + numerador * div_t(denominador);
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

function tanh_t(x: number): number {
    if (abs(cosh_t(x)) < eps) {
        throw new Error("Valor fuera del dominio de la función");
    } else {
        return sinh_t(x) * div_t(cosh_t(x));
    }
}

function sqrt_t(x: number): number {
    if (x < 0) {
        throw new Error("El radicando debe ser positivo");
    } else if (x === 0) {
        return 0;
    }

    let x_k = x / 2;
    let x_k_siguiente;

    for (let iteracion = 0; iteracion < iteraciones_maximas; iteracion++) {
        const numerador = x_k + x * div_t(x_k);
        x_k_siguiente = numerador * div_t(2);

        if (abs(x_k_siguiente - x_k) < tolerancia) {
            x_k = x_k_siguiente;
            break;
        } else {
            x_k = x_k_siguiente;
        }
    }

    return x_k;
}

function root_t(x: number, a: number) {
    if (x < 0 || a <= 0) {
        throw new Error("El índice y el radicando deben ser positivos");
    } else if (x === 0) {
        return 0;
    }

    let x_k = x / 2;
    let x_k_siguiente;

    for (let iteracion = 0; iteracion < iteraciones_maximas; iteracion++) {
        const numerador = power_t(x_k, a) - x;
        const denominador = a * power_t(x_k, a - 1);
        x_k_siguiente = x_k - numerador * div_t(denominador);

        if (abs(x_k_siguiente - x_k) < tolerancia) {
            x_k = x_k_siguiente;
            break;
        } else {
            x_k = x_k_siguiente;
        }
    }

    return x_k;
}

function asin_t(x: number): number {
    if (abs(x) > 1) {
        throw new Error("Valor fuera del dominio de la función");
    }

    let s_k = x;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const numerador = factorial(2 * n) * power_t(x, 2 * n + 1);
        const denominador = power_t(4, n) * power_t(factorial(n), 2) * (2 * n + 1);

        s_k_siguiente = s_k + numerador * div_t(denominador);
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

function atan_t(x: number): number {
    if (abs(x) > 1) {
        throw new Error("El valor está fuera de la región de convergencia de la serie");

    }

    let s_k = x;
    let s_k_siguiente;

    for (let n = 1; n < iteraciones_maximas; n++) {
        const signo_alternado = power_t(-1, n);
        const numerador = power_t(x, 2 * n + 1);
        const denominador = (2 * n + 1);

        s_k_siguiente = s_k + signo_alternado * numerador * div_t(denominador);
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

export {
    div_t,
    power_t,
    exp_t,
    sin_t,
    cos_t,
    tan_t,
    ln_t,
    log_t,
    sinh_t,
    cosh_t,
    tanh_t,
    sqrt_t,
    root_t,
    asin_t,
    atan_t
}