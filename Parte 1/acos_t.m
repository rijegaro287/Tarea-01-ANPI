function y=acos_t(x)
  tol = 10^-8;
  iterMax = 2500;
  
  if x >= -1 && x <= 1
    y = pi_t()*div_t(2)-asin_t(x);
  else
    error("X debe estar entre -1 y 1\n");
  endif

end