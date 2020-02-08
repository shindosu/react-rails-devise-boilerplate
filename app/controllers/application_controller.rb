class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  #rails has set of rules when we communicate with route. CSRF token -> token generated  by system; secret key value. checksif person typing in the form is the current user. but with API, all of that logic happens in a different app so need to skip. 

end
