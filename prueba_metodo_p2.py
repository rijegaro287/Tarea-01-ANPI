from metodos_p2 import *

f = "cos(x) - x"
tol = 10**-5
iterMax = 500
#print("\n")
print(f"Función selecionada (f1) : {f}")
print("Método Newton:")
newton_H_m1("(x - 1)**3 - 1", 2.1, tol, iterMax)
print("Método Kanwar-Tomar:")
newton_H_m2("(x - 1)**3 - 1", 2.1, tol, iterMax)
print("Metodo Halley:")
newton_G_m1("(x - 1)**3 - 1", 2.1, tol, iterMax)
print("Metodo Chebyshev:")
newton_G_m2("(x - 1)**3 - 1", 2.1, tol, iterMax)

