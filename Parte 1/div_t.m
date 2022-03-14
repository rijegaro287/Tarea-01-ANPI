function y=div_t(x)
  tol = 10^-8;
  iterMax = 2500;
  xk = 0;
  xksig = 0;

  if abs(x)>factorial(100)
    y = 0;
  else
    if abs(x)>factorial(80) && abs(x)<=factorial(100)
      xk = eps^15;
      
    elseif abs(x)>factorial(60) && abs(x)<=factorial(80)
      xk = eps^11;
    
    elseif abs(x)>factorial(40) && abs(x)<=factorial(60)
      xk = eps^8;
     
    elseif abs(x)>factorial(20) && abs(x)<=factorial(40)
      xk = eps^4;
    
    elseif abs(x)>0 && abs(x)<=factorial(20)
      xk = eps^2;
    
    else
      
      error("x no puede ser 0\n");
      printf("x no puede ser 0\n");

  endif
  
    for n=0:iterMax
      xksig = xk*(2-abs(x)*xk);   
      
      if abs(xksig-xk)<tol*abs(xksig)
        if x < 0
          y = -1*xksig;
        else
          y = xksig;
        endif
        
        break
      endif
      if n == iterMax-1
        y = xksig;
        break
      endif
      xk = xksig;
    endfor
  
  endif

end
