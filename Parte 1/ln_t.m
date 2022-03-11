function y=ln_t(x)
  tol = 10^-15;
  iterMax = 2500;
  suma = 0;
  
  if x<0
    error("x no puede ser negativo\n");
    printf("x no puede ser negativo\n");
  else
    for n=0:iterMax
    
    sumak = suma+((2*(x-1)*div_t(x+1))*((div_t(2*n+1))*((x-1)*div_t(x+1))^(2*n)));
    err = abs(sumak-suma);
    suma = sumak;
    if err<tol
      printf("Salida por tolerancia\n");
      y = sumak;
      break
    endif
    y = sumak;
  endfor
  
  endif
  

end