function y=sqrt_t(x)
    if x == 0
      y = 0;
    elseif x > 0
     y = power_t(div_t(2),x);
    else
      error("X no puede ser negativo \n");
    endif
    
end