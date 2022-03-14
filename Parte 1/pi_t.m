function y=pi_t()
  tol = 10^-8;
  iterMax = 2500;
  suma = 0;
  
  for n=0:iterMax
    xdiv = div_t(2*n+1);
    sumak = suma+4*(((-1)^(n))*xdiv);
    err = abs(sumak-suma);
    suma = sumak;
    if err<tol
      y = sumak;
      break
    endif
    if n == iterMax-1
      y = sumak;
    endif
  endfor
  
end