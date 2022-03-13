import math
import sympy as sp
"""
variable con valor
"""
r=10
alpha=4
sigma_db=4
lambda_var=1
x_1=7
x_2=6

"""
Funciones auxiliares
"""
d=sp.Symbol('d')
sigma_r=sigma_db**2/(10*alpha)**2
S=math.pi*r
k=(10*alpha)/math.log(10)

g= (2*S/sp.pi)*sp.acos(d/(2*r))-d*sp.sqrt(r**2-(d**2/4))
sigma_c= g**2/(2*lambda_var*k**2)*(1/g+1/S)
"""
Funcion final
"""
f=(sp.log(x_1/d,10)/sigma_r*sp.log(10))+d*(x_2-d)/sigma_c

"""
Método Kanwar-Tomar
"""

def newton_H_m2(fun, x0, tol, iterMax):
    x = sp.Symbol("d")
    fun = sp.sympify(fun)
    d_fun = sp.diff(fun, x)
    xk = x0
    i = 0
    b = 3

    while i < iterMax:
        n = sp.N(fun.subs(x,xk))
        d = sp.N(d_fun.subs(x,xk))
        u = n/d

        D = 1 + b*u
        xk = xk - 1/D *u
        print("xk es",xk)
        i += 1
        error = abs(sp.N(fun.subs(x,xk)))
        if error < tol:
            break
        
    print(f"El cero de la función es {xk}, el error fue de {error}. Resultado obtenido en {i} iteraciones.\n")



newton_H_m2(f, 10, 10**-5, 100)
