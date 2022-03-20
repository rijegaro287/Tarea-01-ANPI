function y=root_t(x,a) #utilizando mod
  pkg load symbolic
  
  tol = 10^-8;
  iterMax = 2500;
  
  syms g(z);
  g(z) = (z^abs(a))-x;
  gd = diff(g, z);
  g_num = matlabFunction(g(z));
  gd_num = matlabFunction(gd(z));
  
  if ((x >= 0 && mod(a,2)==0)||(mod(a,2)!=0))
    if a != 0
      
      xk = abs(a)*div_t(2);

      for n=0:iterMax
        
        if gd_num(xk) == 0
          error("Derivada cuando x = %f es igual a 0 en iteracion %d \n", xk,n);
          break
        endif
        xksig = xk - (g_num(xk)*div_t(gd_num(xk)));
        
        if abs(xksig-xk)<tol*abs(xksig)
          if a>0
            y = (xksig);
            break
          else
            y = div_t((xksig));
            break
          endif

          break
        endif
        
        if n == iterMax-1
          y = abs(xksig); # o poner error que se supera iterMax
          break
        endif
        xk = xksig;
      endfor
    else
      error("El indice a no puede ser cero \n");
    endif  
  else
    error("x no puede ser negativo cuando el indice es par\n");
  endif
     
end