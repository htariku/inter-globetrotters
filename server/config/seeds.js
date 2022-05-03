const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'North America' },
    { name: 'South America' },
    { name: 'Europe' },
    { name: 'Africa' },
    { name: 'Asia' },
    { name: 'Antarctica' },
    { name: 'Australia' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tour Of Washington DC',
      description:
        'Includes a flight to DCA, a doubledecker bus tour, a Segway tour of the Monuments, and dinner at The Wharf. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'DC.jpg',
      category: categories[0]._id,
      price: 12999.99,
      quantity: 50
    },
    {
      name: 'South Beach Miami, Florida',
      description:
        'Come spend the weekend at the beautiful beaches of Miami. Enjoy the drinks, the food, and the nightlife. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'sb.jpg',
      category: categories[0]._id,
      price: 145999.99,
      quantity: 74
    },
    {
      name: 'Camden, New Jersey',
      description:
        'Safe, and clean! Camden is a thrill ride for the entire family. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'camd.jpg',
      category: categories[0]._id,
      price: 65000,
      quantity: 1200
    },
    {
      name: 'LA - Skid Row',
      description:
        'Ever seen the movie Judgement Night? Thats what this trip will be like for you. It will be worth every penny. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'skid.jpg',
      category: categories[0]._id,
      price: 21000,
      quantity: 1993
    },
    {
      name: 'Tour of New York City',
      description:
        'Fly into LaGuardia airport. Airport ride in Gypsy cab. Free Subway pass. Central Park tour at night. Statue of Liberty. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'NYC.jpg',
      category: categories[0]._id,
      price: 12278.99,
      quantity: 50
    },
    {
      name: 'Jacksonville, Florida',
      description:
        'Dont do it. It is not worth it. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'jack.jpg',
      category: categories[0]._id,
      price: 7253.99,
      quantity: 91
    },
    {
      name: 'Old San Juan, Puerto Rico',
      description:
        'Old San Juan is a historic district located at the "northwest triangle" of the islet of San Juan. Its area roughly correlates to the Ballajá, Catedral, Marina, Mercado, San Cristóbal, and San Francisco sub-barrios of barrio San Juan Antiguo in the municipality of San Juan, Puerto Rico. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'old.jpg',
      category: categories[0]._id,
      price: 14999.99,
      quantity: 129
    },
    {
      name: 'Journey to Medellin, Columbia',
      category: categories[1]._id,
      description:
        'Includes round trip flight, rental car, hotel for 5 nights, and free breakfast. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'medellin.jpg',
      price: 17723.99,
      quantity: 420
    },
    {
      name: 'Rio De Janeiro, Brazil',
      category: categories[1]._id,
      description:
        'An Urban metropolis with a Samba sway. See the beaches, the mountains, and the largest Art Deco statue in the world. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'Rio.jpg',
      price: 22299.99,
      quantity: 500
    },
    {
      name: 'Ruins of Machu Picchu, Peru',
      category: categories[1]._id,
      description:
        'Machu Picchu is the worlds most visited site. Dating back to the 1400s, a marvel of limestone architecture on a high plateau deep in the Amazonian jungle. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings, Hotel reservations, FREE Continental breakfast, A map of the area.',
      image: 'machu.jpg',
      price: 30000,
      quantity: 300
    },
    {
      name: 'Caracas, Venezuela',
      category: categories[1]._id,
      description:
        'Caracas, officially Santiago de León de Caracas, abbreviated as CCS, is the capital and largest city of Venezuela, and the center of the Metropolitan Region of Caracas. Caracas is located along the Guaire River in the northern part of the country, within the Caracas Valley of the Venezuelan coastal mountain range. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'cara.jpg',
      price: 20000,
      quantity: 100
    },
    {
      name: 'London, England Full Tour',
      category: categories[2]._id,
      description:
        'Includes round trip airfare, four nights in a hotel, guided tour of The Tower of London, Tower Bridge, Windsor Castle, Trafalgar Square. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'london.jpg',
      price: 330000,
      quantity: 350
    },
    {
      name: 'Monaco during Grand Prix',
      category: categories[2]._id,
      description:
        'Monaco Grand Prix, which takes place over 78 laps of the 3.337-kilometre Circuit de Monaco in Monte Carlo on Sunday, May 23. View the race from your hotel balcony. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'Monaco.jpg',
      price: 250000,
      quantity: 20
    },
    {
      name: 'Capital of Greenland, Nuuk!',
      category: categories[2]._id,
      description:
        'Greenland is an island nation located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. Greenland is the worlds largest island, and one of the three constituent countries that form the Kingdom of Denmark, along with Denmark and the Faroe Islands; the citizens of these countries are all Danish nationals. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'nuuk.jpg',
      price: 425000,
      quantity: 8
    },
    {
      name: 'Minsk, Belarus',
      category: categories[2]._id,
      description:
        'Minsk is the capital and the largest city of Belarus, located on the Svislach and the now subterranean Niamiha rivers. As the capital, Minsk has a special administrative status in Belarus and is the administrative centre of Minsk Region and Minsk District. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'minsk.jpg',
      price: 110000,
      quantity: 211
    },
    {
      name: 'Cardiff City, Wales',
      category: categories[2]._id,
      description:
        'Cardiff is the capital and largest city of Wales. It forms a principal area, officially known as the City and County of Cardiff, and the city is the eleventh-largest in the United Kingdom. Located in the south-east of Wales and in the Cardiff Capital Region, Cardiff is the county town of the historic county of Glamorgan and in 1974–1996 of South Glamorgan. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'card.jpg',
      price: 105000,
      quantity: 11
    },
    {
      name: 'Madagascar',
      category: categories[3]._id,
      description:
        'Madagascar, island country lying off the southeastern coast of Africa. Madagascar is the fourth largest island in the world, after Greenland, New Guinea, and Borneo. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'mada.jpg',
      price: 31199.99,
      quantity: 21
    },
    {
      name: 'Mogadishu, Somalia',
      category: categories[3]._id,
      description:
        'A rich history and totally SAFE, as we will provide you with 24/7 security. You will like it. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'moga.jpg',
      price: 130250,
      quantity: 3212
    },
    {
      name: 'Zanzibar',
      category: categories[3]._id,
      description:
        'Zanzibar is one of Africa’s island paradises. You’ll enjoy crystal clear waters and great food on the island. There are tons of other islands around the archipelago that you can explore. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'zanz.jpg',
      price: 150500,
      quantity: 3
    },
    {
      name: 'Giza, Egypt Great Pyramid Tour',
      category: categories[3]._id,
      description:
        'Come for an all inclusive guided tour of one of the worlds Great wonders. The Great Pyramids. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'giza.jpg',
      price: 200250,
      quantity: 212
    },
    {
      name: 'Accra, Ghana',
      category: categories[3]._id,
      description:
        'Accra is the capital and largest city of Ghana, located on the southern coast at the Gulf of Guinea, which is part of the Atlantic Ocean. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'accr.jpg',
      price: 12500,
      quantity: 27
    },
    {
      name: 'Tokyo, Japan',
      category: categories[4]._id,
      description: 'The Tokyo Metropolis, is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'tokyo.jpg',
      price: 40000.50,
      quantity: 100
    },
    {
      name: 'Phuket, Thailand',
      category: categories[4]._id,
      description:
        'Phuket province is located in southern Thailand.It is the biggest Island of Thailand and sits on the Andaman sea.The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'phuket.jpg',
      price: 50000,
      quantity: 225
    },
    {
      name: 'Ulaanbaatar, Mongolia',
      category: categories[4]._id,
      description:
        'Ulaanbaatar, previously anglicized as Ulan Bator, is the capital and most populous city of Mongolia. The municipality is located in north central Mongolia at an elevation of about 1,300 metres in a valley on the Tuul River. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'mongo.jpg',
      price: 20000,
      quantity: 125
    },
    {
      name: 'Kabul, Afghanistan',
      category: categories[4]._id,
      description:
        'Kabul is the capital and largest city of Afghanistan, located in the eastern section of the country. It is also a municipality, forming part of the greater Kabul Province, and it is divided into 22 districts. According to estimates in 2021, the population of Kabul was 4.6 million and it serves as Afghanistans political, cultural and economical center. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'kabul.jpg',
      price: 28000,
      quantity: 22
    },
    {
      name: 'Dhaka, Bangladesh',
      category: categories[4]._id,
      description:
        'Dhaka, formerly known as Dacca, is the capital and largest city of Bangladesh, as well as the worlds largest Bengali speaking city. It is the eighth largest and sixth most densely populated city in the world with a population of 8.9 million residents as of 2011, and a population of over 21.7 million residents in the Greater Dhaka Area. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'dhaka.jpg',
      price: 11500,
      quantity: 2
    },
    {
      name: 'Fallujah, Iraq',
      category: categories[4]._id,
      description:
        'It will be like that one Call Of Duty game. Always check your corners. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'fall.jpg',
      price: 1000,
      quantity: 2003
    },
    {
      name: 'Bangkok, Thailand',
      category: categories[4]._id,
      description:
        'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand. The city occupies 1,568.7 square kilometres in the Chao Phraya River delta in central Thailand and has an estimated population of 10.539 million as of 2020. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'bang.jpg',
      price: 25000,
      quantity: 267
    },
    {
      name: 'Shanghai, China',
      category: categories[4]._id,
      description:
        'Shanghai is one of the four direct-administered municipalities of the Peoples Republic of China. The city is located on the southern estuary of the Yangtze River, with the Huangpu River flowing through it. With a population of 24.89 million as of 2021. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'shan.jpg',
      price: 70000,
      quantity: 215
    },
    {
      name: 'New Delhi, India',
      category: categories[4]._id,
      description:
        'New Delhi is the capital of India and a part of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'newd.jpg',
      price: 30000,
      quantity: 5
    },
    {
      name: 'Antarctica Glacier Tour',
      category: categories[5]._id,
      description:
        'See lots of ice, feel the freezing cold, and pet the penguins. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'anta.jpg',
      price: 32587.99,
      quantity: 12
    },
    {
      name: 'The South Pole',
      category: categories[5]._id,
      description:
        'Cold and remote, youll LOVE it! Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'pole.jpg',
      price: 8199.99,
      quantity: 2
    },
    {
      name: 'Sydney, Australia',
      category: categories[6]._id,
      description:
        'Sydney is the capital city of the state of New South Wales, and the most populous city in Australia and Oceania. Go down under and tour the formunda. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'syd.jpg',
      price: 16687.49,
      quantity: 19
    },
    {
      name: 'Kangaroo Island Safari, Australia',
      category: categories[6]._id,
      description:
        'Kangaroo Island, also known as Karta Pintingga, is Australias third-largest island, after Tasmania and Melville Island. It lies in the state of South Australia, 112 km southwest of Adelaide. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'kang.jpg',
      price: 311250,
      quantity: 6
    },
    {
      name: 'Tasmania, Australia',
      category: categories[6]._id,
      description:
        'Tasmania is an island state of Australia. It is located 240 km to the south of the Australian mainland, separated from it by Bass Strait. The state encompasses the main island of Tasmania, the 26th-largest island in the world, and the surrounding 1000 islands. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'tas.jpg',
      price: 50000,
      quantity: 8
    },
    {
      name: 'Melbourne, Australia',
      category: categories[6]._id,
      description:
        'Melbourne is the capital and most-populous city of the Australian state of Victoria, and the second-most populous city in both Australia and Oceania. Package includes 7 nights in a 5 star hotel. Package includes: -Free Wi-fi -Shuttle to and from airport -Flight bookings -Hotel reservations -FREE Continental breakfast -A map of the area.',
      image: 'melb.jpg',
      price: 60015,
      quantity: 48
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'HaminaHamina',
    lastName: 'Euphremistad',
    email: 'o.lopez92084@gmail.com',
    password: '123456',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elway',
    lastName: 'Jenkins',
    email: 'elj@fakemail.com',
    password: '123456'
  });

  console.log('users seeded');

  process.exit();
});
