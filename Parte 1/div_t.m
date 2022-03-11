function y=div_t(x)
  tol = 10^-8;
  iterMax = 2500;
  xk = 0;
  xksig = 0;

  if x>factorial(80) && x<=factorial(100)
    xk = eps^15;
    
  elseif x>factorial(60) && x<=factorial(80)
    xk = eps^11;
  
  elseif x>factorial(40) && x<=factorial(60)
    xk = eps^8;
   
  elseif x>factorial(20) && x<=factorial(40)
    xk = eps^4;
  
  elseif x>=factorial(0) && x<=factorial(20)
    xk = eps^2;
  
  else
    error("x no se encunetra entre 1 y 100!\n");
    printf("x no se encunetra entre 1 y 100!\n");

  endif

  for n=0:iterMax
    xksig = xk*(2-x*xk);
    
    
    if abs(xksig-xk)<tol*abs(xksig)
      y = xksig;
      break
    endif
    if n = iterMax
      y = xksig;
    endif
    xk = xksig;
  endfor

end
