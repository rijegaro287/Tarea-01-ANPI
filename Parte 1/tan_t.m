function y=tan_t(x)
  if mod(x, pi*(div_t(2)))==0
    error("x no puede ser múltiplo de pi medios\n");
    printf("x no puede ser múltiplo de pi medios\n");
  else
    y = sin_t(x)*div_t(cos_t(x));
  endif
  
end