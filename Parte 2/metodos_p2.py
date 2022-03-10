import sympy as sp

"""
PARA TODAS LAS FUNCIONES
Los parametros de entrada son:
    fun: string de una función
    x0: valor inicial
    tol: tolerancia
    iterMax: iteraciones máximas
Los parametros de salida son:
    xk: aproximación a la solución de la ecuación f(x) = 0
    i: iteraciones
    error: error del método
"""


"""
Método de Newton 
"""
def newton_H_m1(fun, x0, tol, iterMax):
    x = sp.Symbol("x")
    fun = sp.sympify(fun)
    d_fun = sp.diff(fun, x)
    xk = x0
    i = 0
    while i < iterMax:
        n = sp.N(fun.subs(x,xk))
        d = sp.N(d_fun.subs(x,xk))
        xk = xk - n/d

        i += 1
        error = abs(sp.N(fun.subs(x,xk)))
        if error < tol:
            break
    
    print(f"El cero de la función es {xk}, el error fue de {error}. Resultado obtenido en {i} iteraciones.\n")

"""
Método Kanwar-Tomar
"""
def newton_H_m2(fun, x0, tol, iterMax):
    x = sp.Symbol("x")
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

        i += 1
        error = abs(sp.N(fun.subs(x,xk)))
        if error < tol:
            break
        
    print(f"El cero de la función es {xk}, el error fue de {error}. Resultado obtenido en {i} iteraciones.\n")

"""
Metodo Halley
"""
def newton_G_m1(fun, x0, tol, iterMax):
    x = sp.Symbol("x")
    fun = sp.sympify(fun)
    d_fun = sp.diff(fun, x)
    d2_fun = sp.diff(d_fun, x)
    xk = x0

    i = 0
    while i < iterMax:
        n = sp.N(fun.subs(x,xk))
        d = sp.N(d_fun.subs(x,xk))
        u = n/d

        n_w = sp.N(fun.subs(x,xk)) * sp.N(d2_fun.subs(x,xk))
        d_w = sp.N(d_fun.subs(x,xk))**2
        w = n_w/d_w
        G = 2/(2-w)

        xk = xk - G*u
        
        i += 1
        error = abs(sp.N(fun.subs(x,xk)))
        if error < tol:
            break
        
    print(f"El cero de la función es {xk}, el error fue de {error}. Resultado obtenido en {i} iteraciones.\n")
    

""" 
Metodo Chebyshev
"""
def newton_G_m2(fun, x0, tol, iterMax):
    x = sp.Symbol("x")
    fun = sp.sympify(fun)
    d_fun = sp.diff(fun, x)
    d2_fun = sp.diff(d_fun, x)
    xk = x0

    i = 0
    while i < iterMax:
        n = sp.N(fun.subs(x,xk))
        d = sp.N(d_fun.subs(x,xk))
        u = n/d

        n_w = sp.N(fun.subs(x,xk)) * sp.N(d2_fun.subs(x,xk))
        d_w = sp.N(d_fun.subs(x,xk))**2
        w = n_w/d_w
        G = 1 + 0.5*w

        xk = xk - G*u
        i += 1
        error = abs(sp.N(fun.subs(x,xk)))
        if error < tol:
            break
        
    print(f"El cero de la función es {xk}, el error fue de {error}. Resultado obtenido en {i} iteraciones.\n")

