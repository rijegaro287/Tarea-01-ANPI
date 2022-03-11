function y=log_t(x,a)
  
  if x<0
    error("x no puede ser negativo\n");
    printf("x no puede ser negativo\n");
  else
    y = ln_t(x)*div_t(ln_t(a));
  
  endif
  

end