# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do
    User.create(username: Faker::Name.name, email: Faker::Internet.email, password: Faker::Internet.password )
end

3.times do
    user = User.first.blerbs.build(content: Faker::Quote.robin)
    user.save
end

3.times do
    user = User.second.blerbs.build(content: Faker::Quote.singular_siegler)
    user.save
end

3.times do
    user = User.last.blerbs.build(content: Faker::Quote.famous_last_words)
    user.save
end