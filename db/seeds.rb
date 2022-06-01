# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Starting seeds'
u1 = User.create(first_name: 'Justin', last_name: 'Chazen', email: 'jc@gmail.com', username: 'JC9396', password_digest: '111111')
u2 = User.create(first_name: 'Throsby', last_name: 'Wells', email: 'thros@gmail.com', username: 'ThrosbyW', password_digest: '111111')
u3 = User.create(first_name: 'Max', last_name: 'Ogle', email: 'maxog@gmail.com', username: 'MaxOg', password_digest: '111111')


i1 = Item.create(name: 'Hat', stock: 1, price: 14.85, description: 'This hat is sick', user_id: 1)
i2 = Item.create(name: 'Shirt', stock: 1, price: 24.11, description: 'This shirt is sick', user_id: 1)
i3 = Item.create(name: 'Shoes', stock: 2, price: 50, description: 'These shoes are sick', user_id: 1)
i4 = Item.create(name: 'Pants', stock: 1, price: 21, description: 'These pants are sick', user_id: 2)
i5 = Item.create(name: 'Comptuer', stock: 1, price: 200.11, description: 'This computer is sick', user_id: 2)
i6 = Item.create(name: 'Monitor', stock: 1, price: 105.20, description: 'This monitor is sick', user_id: 2)
i7 = Item.create(name: 'Pogo-Stick', stock: 1, price: 30.12, description: 'This Pogo-Stick is sick', user_id: 3)
i8 = Item.create(name: 'Bowl', stock: 1, price: 14.85, description: 'This bowl is sick', user_id: 3)
i9 = Item.create(name: 'Spatual', stock: 1, price: 7.50, description: 'This spatuala is sick', user_id: 3)
i10 = Item.create(name: 'Gloves', stock: 1, price: 17.75, description: 'These gloves are sick', user_id: 3)

t1 = Tag.create(name: 'Clothes')
t2 = Tag.create(name: 'Transportation')
t3 = Tag.create(name: 'Electronics')
t4 = Tag.create(name: 'Appliances')

ItemTag.create(item_id: i1.id, tag_id: t1.id)
ItemTag.create(item_id: i2.id, tag_id: t1.id)
ItemTag.create(item_id: i3.id, tag_id: t1.id)
ItemTag.create(item_id: i4.id, tag_id: t1.id)
ItemTag.create(item_id: i5.id, tag_id: t3.id)
ItemTag.create(item_id: i6.id, tag_id: t3.id)
ItemTag.create(item_id: i7.id, tag_id: t2.id)
ItemTag.create(item_id: i8.id, tag_id: t4.id)
ItemTag.create(item_id: i9.id, tag_id: t4.id)
ItemTag.create(item_id: i10.id, tag_id: t1.id)

puts 'Seeding done'