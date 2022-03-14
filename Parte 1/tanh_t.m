function y=tanh_t(x)
  if x>50
    y = 1;
  elseif x<-50
    y = -1;
  else
     y = sinh_t(x)*div_t(cosh_t(x));
  endif 
   
end