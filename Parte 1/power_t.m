function y=power_t(x,a)
    if a < 0
     y = -1*exp_t(x*ln_t(abs(a)));
    
    else
      y = exp_t(x*ln_t(a));
    endif
    
end