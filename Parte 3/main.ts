import {
    div_t,
    exp_t,
    sin_t,
    ln_t,
    sinh_t,
    sqrt_t,
    root_t,
    atan_t
} from "./parte_1"

const numerador = root_t(sin_t(3 * div_t(7)) + ln_t(2), 3);
const denominador = sinh_t(sqrt_t(2));
const funcion = numerador * div_t(denominador) + atan_t(exp_t(-1));
console.log(funcion);
