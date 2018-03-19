

user = User.create!(
  user_name: "Chesnowitz",
  email: 'steve@chesnowitz.com',
  password: 'password',
  password_confirmation: 'password'
)

puts user.inspect

user = User.create!(
  user_name: "Steve",
  email: 'mike@chesnowitz.com',
  password: 'password',
  password_confirmation: 'password'
)

puts user.inspect 