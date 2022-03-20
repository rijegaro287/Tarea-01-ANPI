function y=log_t(x,a)
  
  if x<0
    error("x tiene que ser positivo\n");
    printf("x tiene que ser positivo\n");
  else
    y = ln_t(x)*div_t(ln_t(a));
  
  endif
  

end