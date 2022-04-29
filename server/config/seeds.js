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
        'Includes a flight to DCA, a doubledecker bus tour, a Segway tour of the Monuments, and dinner at The Wharf.',
      image: 'DC.jpg',
      category: categories[0]._id,
      price: 2999.99,
      quantity: 50
    },
    {
      name: 'South Beach Miami, Florida',
      description:
        'Come spend the weekend at the beautiful beaches of Miami. Enjoy the drinks, the food, and the nightlife.',
      image: 'sb.jpg',
      category: categories[0]._id,
      price: 4999.99,
      quantity: 74
    },
    {
      name: 'Camden, New Jersey - Heaven on Earth',
      description:
        'Be safe, and avoid dark alleys. If someone starts walking behind you.....RUN! Camden is a thrill ride for the entire family.',
      image: 'camd.jpg',
      category: categories[0]._id,
      price: 6500,
      quantity: 1200
    },
    {
      name: 'LA - Skid Row - Up Close and Personal for one Week',
      description:
        'Ever seen the movie Judgement Night? Thats what this trip will be like for you. It will be worth every penny.',
      image: 'skid.jpg',
      category: categories[0]._id,
      price: 21000,
      quantity: 1993
    },
    {
      name: 'Tour of New York City',
      description:
        'Fly into LaGuardia airport. Airport ride in Gypsy cab. Free Subway pass. Central Park tour at night. Statue of Liberty.',
      image: 'NYC.jpg',
      category: categories[0]._id,
      price: 1278.99,
      quantity: 50
    },
    {
      name: 'Jacksonville, Florida',
      description:
        'Dont do it. It is not worth it.',
      image: 'jack.jpg',
      category: categories[0]._id,
      price: 253.99,
      quantity: 91
    },
    {
      name: 'All Inclusive Journey to Medellin, Columbia',
      category: categories[1]._id,
      description:
        'Includes round trip flight, rental car, hotel for 5 nights, and free breakfast.',
      image: 'medellin.jpg',
      price: 1723.99,
      quantity: 420
    },
    {
      name: 'Rio De Janeiro, Brazil',
      category: categories[1]._id,
      description:
        'An Urban metropolis with a Samba sway. See the beaches, the mountains, and the largest Art Deco statue in the world.',
      image: 'Rio.jpg',
      price: 2299.99,
      quantity: 500
    },
    {
      name: 'Ancient Ruins of Machu Picchu, Peru',
      category: categories[1]._id,
      description:
        'Machu Picchu is the worlds most visited site. Dating back to the 1400s, a marvel of limestone architecture on a high plateau deep in the Amazonian jungle.',
      image: 'machu.jpg',
      price: 3000,
      quantity: 300
    },
    {
      name: 'London, England Full Guided Tour',
      category: categories[2]._id,
      description:
        'Includes round trip airfare, four nights in a hotel, guided tour of The Tower of London, Tower Bridge, Windsor Castle, Trafalgar Square.',
      image: 'london.jpg',
      price: 3300,
      quantity: 350
    },
    {
      name: 'Monaco during the Grand Prix',
      category: categories[2]._id,
      description:
        'Monaco Grand Prix, which takes place over 78 laps of the 3.337-kilometre Circuit de Monaco in Monte Carlo on Sunday, May 23. View the race from your hotel balcony.',
      image: 'Monaco.jpg',
      price: 25000,
      quantity: 20
    },
    {
      name: 'Tour the Capital of Greenland, Nuuk!',
      category: categories[2]._id,
      description:
        'Greenland is an island nation located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. Greenland is the worlds largest island, and one of the three constituent countries that form the Kingdom of Denmark, along with Denmark and the Faroe Islands; the citizens of these countries are all Danish nationals.',
      image: 'nuuk.jpg',
      price: 4250,
      quantity: 8
    },
    {
      name: 'Minsk, Belarus',
      category: categories[2]._id,
      description:
        'Minsk is the capital and the largest city of Belarus, located on the Svislach and the now subterranean Niamiha rivers. As the capital, Minsk has a special administrative status in Belarus and is the administrative centre of Minsk Region and Minsk District.',
      image: 'minsk.jpg',
      price: 11000,
      quantity: 211
    },
    {
      name: 'Madagascar',
      category: categories[3]._id,
      description:
        'Madagascar, island country lying off the southeastern coast of Africa. Madagascar is the fourth largest island in the world, after Greenland, New Guinea, and Borneo.',
      image: 'mada.jpg',
      price: 3119.99,
      quantity: 21
    },
    {
      name: 'Mogadishu, Somalia',
      category: categories[3]._id,
      description:
        'A rich history and totally SAFE. You will like it.',
      image: 'moga.jpg',
      price: 13250,
      quantity: 3212
    },
    {
      name: 'Giza, Egypt Great Pyramid Tour',
      category: categories[3]._id,
      description:
        'Come for an all inclusive guided tour of one of the worlds Great wonders. The Great Pyramids.',
      image: 'giza.jpg',
      price: 15250,
      quantity: 212
    },
    {
      name: 'Accra, Ghana',
      category: categories[3]._id,
      description:
        'Accra is the capital and largest city of Ghana, located on the southern coast at the Gulf of Guinea, which is part of the Atlantic Ocean.',
      image: 'accr.jpg',
      price: 1250,
      quantity: 27
    },
    {
      name: 'Tokyo, Japan',
      category: categories[4]._id,
      description: 'The Tokyo Metropolis, is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018.',
      image: 'tokyo.jpg',
      price: 4000.50,
      quantity: 100
    },
    {
      name: 'Phuket, Thailand',
      category: categories[4]._id,
      description:
        'Phuket province is located in southern Thailand.It is the biggest Island of Thailand and sits on the Andaman sea.The nearest province to the north is Phang-nga and the nearest provinces to the east are Phang-nga and Krabi.',
      image: 'phuket.jpg',
      price: 5000,
      quantity: 225
    },
    {
      name: 'Ulaanbaatar, Mongolia',
      category: categories[4]._id,
      description:
        'Ulaanbaatar, previously anglicized as Ulan Bator, is the capital and most populous city of Mongolia. The municipality is located in north central Mongolia at an elevation of about 1,300 metres in a valley on the Tuul River.',
      image: 'mongo.jpg',
      price: 2000,
      quantity: 125
    },
    {
      name: 'Kabul, Afghanistan',
      category: categories[4]._id,
      description:
        'Kabul is the capital and largest city of Afghanistan, located in the eastern section of the country. It is also a municipality, forming part of the greater Kabul Province, and it is divided into 22 districts. According to estimates in 2021, the population of Kabul was 4.6 million and it serves as Afghanistans political, cultural and economical center.',
      image: 'kabul.jpg',
      price: 28000,
      quantity: 22
    },
    {
      name: 'Dhaka, Bangladesh',
      category: categories[4]._id,
      description:
        'Dhaka, formerly known as Dacca, is the capital and largest city of Bangladesh, as well as the worlds largest Bengali speaking city. It is the eighth largest and sixth most densely populated city in the world with a population of 8.9 million residents as of 2011, and a population of over 21.7 million residents in the Greater Dhaka Area.',
      image: 'dhaka.jpg',
      price: 110500,
      quantity: 2
    },
    {
      name: 'Fallujah, Iraq',
      category: categories[4]._id,
      description:
        'It will be like that one Call Of Duty game. We pay YOU to go here.',
      image: 'fall.jpg',
      price: 10,
      quantity: 2003
    },
    {
      name: 'Antarctica Glacier and Penguin Tour',
      category: categories[5]._id,
      description:
        'See lots of ice, feel the freezing cold, and pet the penguins.',
      image: 'anta.jpg',
      price: 587.99,
      quantity: 12
    },
    {
      name: 'The South Pole',
      category: categories[5]._id,
      description:
        'Cold and remote, youll LOVE it!',
      image: 'pole.jpg',
      price: 199.99,
      quantity: 2
    },
    {
      name: 'Sydney, Australia Outback Tour',
      category: categories[6]._id,
      description:
        'Sydney is the capital city of the state of New South Wales, and the most populous city in Australia and Oceania. Go down under and tour the formunda.',
      image: 'syd.jpg',
      price: 1687.49,
      quantity: 19
    },
    {
      name: 'Kangaroo Island Safari, Australia',
      category: categories[6]._id,
      description:
        'Kangaroo Island, also known as Karta Pintingga, is Australias third-largest island, after Tasmania and Melville Island. It lies in the state of South Australia, 112 km southwest of Adelaide.',
      image: 'kang.jpg',
      price: 311250,
      quantity: 6
    },
    {
      name: 'Melbourne, Australia',
      category: categories[6]._id,
      description:
        'Melbourne is the capital and most-populous city of the Australian state of Victoria, and the second-most populous city in both Australia and Oceania. Package includes 7 nights in a 5 star hotel.',
      image: 'melb.jpg',
      price: 6015,
      quantity: 48
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
