function y=cosh_t(x)
  tol = 10^-8;
  iterMax = 2500;
  suma = 0;
  
  for n=0:iterMax
    xdiv = div_t(factorial(2*n));
    sumak = suma+((x^(2*n))*xdiv);
    err = abs(sumak-suma);
    suma = sumak;
    
    if err<tol
      y = sumak;
      break
    elseif n == iterMax-1
      y = sumak;
      break
    endif
    
  endfor

end