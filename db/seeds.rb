# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



first_users = User.create([
    {email: 'Kyle Ginzburg', password: 'demodemo'},
    {email: 'Amin Babar', password: 'demodemo'},
    {email: "Ben 'The Hosk' Hosking", password: 'demodemo'},
    {email: 'Michael Shen', password: 'demodemo'},
    {email: 'Louis Lane', password: 'demodemo'},
    {email: 'Deborah Wei', password: 'demodemo'},
    {email: 'Charles Mason', password: 'demodemo'},
    {email: 'Louis Gordon', password: 'demodemo'},
    {email: 'Jeremy Hodge', password: 'demodemo'},
    {email: 'Jane Doe', password: 'demodemo'},
    {email: 'Demi Lovato', password: 'demodemo'},
    {email: 'Tyler Spruce', password: 'demodemo'},
    {email: 'Andre Marshall', password: 'demodemo'},
    {email: 'Karen White', password: 'demodemo'},
    {email: 'Huge Dickman', password: 'demodemo'},
    {email: 'Robbie Hall', password: 'demodemo'},
    {email: 'Martin Whales', password: 'demodemo'},
    {email: 'Jenny Happen', password: 'demodemo'},    
])


first_seed = Post.create([
    {
        user_id: 34,
        title: "How not to kill your cohort",
        body: "lorem ipsum whatever I don't remember",
        tag: "self-control",
        length: "125 min read"
    },
    {
        user_id: 35,
        title: "How to encourage students that suck",
        body: "lorem ipsum whatever I don't remember",
        tag: "happiness",
        length: "35 min read"
    },
    {
        user_id: 36,
        title: "Agile Projects Have Become Waterfall Projects With Sprints",
        body: "lorem ipsum whatever I don't remember",
        tag: "water",
        length: "4 min read"
    },
    {
        user_id: 37,
        title: "Radiation is cool",
        body: "lorem ipsum whatever I don't remember",
        tag: "random",
        length: "64 min read"
    },
    {
        user_id: 38,
        title: "Supes ain't it",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "superhero",
        length: "5 min read"
    },
    {
        user_id: 39,
        title: "When your instructor hates you for no reason",
        body: "lorem ipsum whatever I don't remember",
        tag: "Oblivious",
        length: "4 min read"
    },
    {
        user_id: 40,
        title: "Best cuts you can get",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "food",
        length: "10 min read"
    },
    {
        user_id: 41,
        title: "How to become successful in two years",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "independence",
        length: "32 min read"
    },
    {
        user_id: 42,
        title: "I made a mistake and now I have 7 kids",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "abstinence",
        length: "14 min read"
    },
    {
        user_id: 43,
        title: "Discovering who you truly are",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "unknown",
        length: "4 min read"
    },
    {
        user_id: 44,
        title: "I am a ghost now",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "desperate",
        length: "5 min read"
    },
    {
        user_id: 45,
        title: "Farming is fun",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam id quidem aliquid sunt dolor neque, expedita unde repellat omnis asperiores alias consectetur quod illo ipsum fugit, in eveniet! Cumque ratione veniam delectus voluptatum minima facere praesentium fuga nulla corrupti beatae reiciendis ut laboriosam, nostrum repudiandae id ab sapiente impedit ad explicabo vitae quia aperiam! Veritatis, enim blanditiis. Sapiente, laudantium in a tenetur recusandae ratione laboriosam quia, dicta aliquam suscipit aspernatur dignissimos unde quo quas similique dolorem nulla consequuntur alias numquam culpa assumenda. Mollitia quidem necessitatibus modi libero eaque sed cumque, animi, veniam unde aliquam expedita, fuga voluptatibus laudantium odit obcaecati?",
        tag: "loneliness",
        length: "18 min read"
    },
    {
        user_id: 46,
        title: "Renewable life",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus. ",
        tag: "productivity",
        length: "25 min read"
    },
    { 
        user_id: 47,
        title: "How Essential oils saved my life",
        body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.r",
        tag: "happiness",
        length: "35 min read"
    },
    {
        user_id: 48,
        title: "Units of measurement",
        body: "lorem ipsum whatever I don't rememberLorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "self-esteem",
        length: "13 min read"
    },
    {
        user_id: 49,
        title: "Radiation is cool",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "random",
        length: "30 min read"
    },
    {
        user_id: 50,
        title: "Crystals rock",
        body: "lorem ipsum whatever I don't remember Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae velit sunt a recusandae similique debitis ratione excepturi? Qui quae laudantium, deserunt inventore nostrum commodi, pariatur ut voluptas nam accusamus consequuntur dignissimos ipsum culpa voluptatum ratione ex praesentium hic odit rem deleniti dolores veniam! Ea maiores porro eos, at sequi labore consectetur, maxime non minima impedit assumenda fuga. Id, nostrum a? Temporibus repellendus sapiente veritatis, quos molestiae porro facere harum adipisci minima cupiditate laborum eius, labore tempora rerum! Repellat amet, dolores cum sit accusantium iusto exercitationem perspiciatis, sapiente necessitatibus libero quam, quibusdam nobis officia aliquam commodi qui vero unde corrupti tenetur aut sed quasi. Nulla dolorum aperiam molestiae officiis quam ratione maiores iusto! Sapiente soluta labore ad voluptatibus ipsam repellendus.",
        tag: "rocks",
        length: "15 min read"
    },
    {
        user_id: 51,
        title: "I finally got my happy ending",
        body: "lorem ipsum whatever I don't remember",
        tag: "loneliness",
        length: "4 min read"
    }
])