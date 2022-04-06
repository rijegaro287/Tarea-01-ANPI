from metodos_p2 import *

f = "cos(x) - x"
tol = 10**-10
iterMax = 500
x0 = 2.1


print(f"Función selecionada (f1) : {f}")
print("Método Newton:")
newton_H_m1(f, x0, tol, iterMax)
print("Método Kanwar-Tomar:")
newton_H_m2(f, x0, tol, iterMax)
print("Metodo Halley:")
newton_G_m1(f, x0, tol, iterMax)
print("Metodo Chebyshev:")
newton_G_m2(f, x0, tol, iterMax)

