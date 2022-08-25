# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

user1 = User.create!({email: 'Kyle Ginzburg', password: 'demodemo'})
user2 = User.create!({email: 'Amin Babar', password: 'demodemo'})
user3 = User.create!({email: "Ben 'The Hosk' Hosking", password: 'demodemo'})
user4 = User.create!({email: 'Michael Shen', password: 'demodemo'})
user5 = User.create!({email: 'Louis Lane', password: 'demodemo'})
user6 = User.create!({email: 'Deborah Wei', password: 'demodemo'})
user7 = User.create!({email: 'Charles Mason', password: 'demodemo'})
user8 = User.create!({email: 'Louis Gordon', password: 'demodemo'})
user9 = User.create!({email: 'Jeremy Hodge', password: 'demodemo'})
user10 = User.create!({email: 'Jane Doe', password: 'demodemo'})
user11 = User.create!({email: 'Demi Lovato', password: 'demodemo'})
user12 = User.create!({email: 'Tyler Spruce', password: 'demodemo'})
user13 = User.create!({email: 'Andre Marshall', password: 'demodemo'})
user14 = User.create!({email: 'Karen White', password: 'demodemo'})
user15 = User.create!({email: 'Huge Dickman', password: 'demodemo'})
user16 = User.create!({email: 'Robbie Hall', password: 'demodemo'})
user17 = User.create!({email: 'Martin Whales', password: 'demodemo'})
user18 = User.create!({email: 'Jenny Happen', password: 'demodemo'})


first_seed = Post.create!([
    {
        user_id: user1.id,
        title: "How not to kill your cohort",
        body: "lorem ipsum whatever I don't remember",
        tag: "self-control",
        length: "125 min read"
    },
    {
        user_id: user2.id,
        title: "How to encourage students that suck",
        body: "lorem ipsum whatever I don't remember",
        tag: "happiness",
        length: "35 min read"
    },
    {
        user_id: user3.id,
        title: "Agile Projects Have Become Waterfall Projects With Sprints",
        body: "lorem ipsum whatever I don't remember",
        tag: "water",
        length: "4 min read"
    },
    {
        user_id: user4.id,
        title: "Radiation is cool",
        body: "lorem ipsum whatever I don't remember",
        tag: "random",
        length: "64 min read"
    },
    {
        user_id: user5.id,
        title: "Supes ain't it",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "superhero",
        length: "5 min read"
    },
    {
        user_id: user6.id,
        title: "When your instructor hates you for no reason",
        body: "lorem ipsum whatever I don't remember",
        tag: "Oblivious",
        length: "4 min read"
    },
    {
        user_id: user7.id,
        title: "Best cuts you can get",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "food",
        length: "10 min read"
    },
    {
        user_id: user8.id,
        title: "How to become successful in two years",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "independence",
        length: "32 min read"
    },
    {
        user_id: user9.id,
        title: "I made a mistake and now I have 7 kids",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "abstinence",
        length: "14 min read"
    },
    {
        user_id: user10.id,
        title: "Discovering who you truly are",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "unknown",
        length: "4 min read"
    },
    {
        user_id: user11.id,
        title: "I am a ghost now",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "desperate",
        length: "5 min read"
    },
    {
        user_id: user12.id,
        title: "Farming is fun",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "loneliness",
        length: "18 min read"
    },
    {
        user_id: user13.id,
        title: "Renewable life",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus. ",
        tag: "productivity",
        length: "25 min read"
    },
    { 
        user_id: user14.id,
        title: "How Essential oils saved my life",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.r",
        tag: "happiness",
        length: "35 min read"
    },
    {
        user_id: user15.id,
        title: "Units of measurement",
        body: "lorem ipsum whatever I don't rememberLorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "self-esteem",
        length: "13 min read"
    },
    {
        user_id: user16.id,
        title: "Radiation is cool",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "random",
        length: "30 min read"
    },
    {
        user_id: user17.id,
        title: "Crystals rock",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "rocks",
        length: "15 min read"
    },
    {
        user_id: user18.id,
        title: "I finally got my happy ending",
        body: "lorem ipsum whatever I don't remember",
        tag: "loneliness",
        length: "4 min read"
    }
])