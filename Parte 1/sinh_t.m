function y=sinh_t(x) 
  tol = 10^-8;
  iterMax = 2500;
  suma = 0;
 
  for n=0:iterMax
    xdiv = div_t(factorial((2*n)+1));
    sumak = suma+((x^(2*n+1))*xdiv);
    err = abs(sumak-suma);
    suma = sumak;
    if err<tol
      y = sumak;
      break
    endif
    y = sumak;
  endfor

end