function b=exp_t(x)
  tol = 10^-8;
  iterMax = 2500;
  suma = 0;
  
  for n=0:iterMax
    xdiv = div_t(factorial(n));
    sumak = suma+((x^n)*xdiv);
    err = abs(sumak-suma);
    suma = sumak;
    if err<tol
      b = sumak;
      break
    endif
    b = sumak;
  endfor

end