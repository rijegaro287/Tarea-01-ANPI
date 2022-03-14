function y=asin_t(x)
  tol = 10^-8;
  iterMax = 2500;
  suma = 0;
  if x >= -1 && x <= 1
    for n=0:iterMax
      n
      #xdiv = div_t((4^n)*(factorial(n))^2*((2*n)+1));
      xdiv = div_t(4^n)*div_t((factorial(n))^2)*div_t((2*n)+1);
      
      sumak = suma+((factorial(2*n))*(x^(2*n+1))*xdiv)
      
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
    
  else
    error("X debe estar entre -1 y 1\n");
  endif

end