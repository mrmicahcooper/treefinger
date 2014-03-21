def find_or_create(model, finder)
  klass = model.capitalize.to_s.constantize
  klass.find_by(finder) || Fabricate(model, finder)
end
