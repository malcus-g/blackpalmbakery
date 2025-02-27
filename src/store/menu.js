// temporary data until I can get a database set up for dynamic menu changes

const menu = [
  {
    categoryName: "Cookies",
    groups:
      [
        {
          groupName: "Classics",
          items:
            [
              {
                itemName: "Salted Brown Butter Chocolate Chip",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Oatmeal Craisin",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Oatmeal Butterscotch",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Peanut Butter",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Red Velvet",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Snickerdoodle",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Sprinkle Sugar",
                description: "",
                ingredients: ""
              },
            ],
          dozenPrice: 32,
          color: "red"
        },
        {
          groupName: "Island Pack",
          items:
            [
              {
                itemName: "Ube & White Chocolate Chip",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Paniolo \"Cowboy\"",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Tropical Deluxe",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Dark Chocolate Mac & Mango",
                description: "",
                ingredients: ""

              },
              {
                itemName: "Oats & White Chocolate",
                description: "",
                ingredients: ""

              },
            ],
          dozenPrice: 38,
          color: "#2261c5"
        },
        {
          groupName: "Royal Iced Sugar",
          items:
            [
              {
                itemName: "Assorted decorated royal icing sugar cookies.\n Custom orders? Inquire via email!",
                description: "",
                ingredients: ""

              },
            ],
          dozenPrice: 38,
          color: "#ecec00"
        },
      ],
    canMix: false
  },
  {
    categoryName: "Cupcakes",
    groups:
      [
        {
          groupName: "Classics",
          items:
            [
              {
                itemName: "Plain Jane",
                description: "White velvet buttermilk cake with vanilla bean buttercream frosting and candy pearls",
                ingredients: ""

              },
              {
                itemName: "Very Berry Strawberry",
                description: "A luscious stawberry cupcake topped with strawberry cream cheese forsting and a fresh berry slice",
                ingredients: ""

              },
              {
                itemName: "Chocolate Thunda",
                description: "Dark chocolate cake with chocolate buttercream frosting topped with chocolate ganache and mini chocolate chips",
                ingredients: ""

              },
              {
                itemName: "Red Sonia",
                description: "A delicious and moist classic red velvet cak with cream cheese frosting",
                ingredients: ""

              },
              {
                itemName: "Funicorn",
                description: "Our take on the OG confetti cupcake. Vanilla cake overloaded with sprinkles, topped with a rainbow buttercream swirl",
                ingredients: ""

              },
              {
                itemName: "Ol' Gal",
                description: "Miniature sized southern staple! Yellow butter cake topped with homemade whipped caramel frosting",
                ingredients: ""

              },
            ],
          dozenPrice: 32,
          color: "#7e7eca"
        },
        {
          groupName: "Specialty",
          items:
            [
              {
                itemName: "Kawaiamau's Favorite",
                description: "Mom's SECRET carrot cake recipe topped with cream cheese frosting and a candied pecan",
                ingredients: ""
              },
              {
                itemName: "Mr. Peanutbutta Cups",
                description: "Dark chocolate and peanut butter marble cake with peanut butter buttercream and ganache drizzele, topped with a mini Reese's cup",
                ingredients: ""
              },
              {
                itemName: "Lemon Squeeze",
                description: "Fluffy lemon cake filled with blueberry jam and lemon buttercream, topped with candied lemon wedge and a fresh blueberry",
                ingredients: ""
              },
              {
                itemName: "Monkey Bizz",
                description: "Banana cake filled with salted caramel, topped with a luscious cream cheese buttercream",
                ingredients: ""
              },
              {
                itemName: "Distinctly Beau",
                description: "Chocolate cake made with Kaluha, a KONA coffee buttercream, and topped with a chocolate-covered coffee bean",
                ingredients: ""
              },
              {
                itemName: "Liliko'i Breeze",
                description: "Hawaiian inspired passion fruit cupcake. White cake filled with a passion fruit ganache, topped with a passion fruit buttercream and drizzle",
                ingredients: ""
              },
            ],
          dozenPrice: 36,
          color: "green"
        },
      ],
    canMix: true
  },
  {
    categoryName: "Brownies & Bars",
    groups:
      [
        {
          groupName: "Cookie Bars",
          items:
            [
              {
                itemName: "Bourban Pecan Pie Cookie Bars",
                description: "Chocolate chip cookie layer, bourbon infused pecan pie layer, drizzled with salted bourbon butter glaze",
                ingredients: ""
              },
            ],
          dozenPrice: 50,
          color: "purple"
        },
        {
          groupName: "Brownies & Blondies",
          items:
            [
              {
                itemName: "White Chocolate Macademia Nut",
                description: "",
                ingredients: ""
              },
              {
                itemName: "Maple Apple",
                description: "",
                ingredients: ""
              },
              {
                itemName: "Gooey Chocolate Chip",
                description: "",
                ingredients: ""
              },
              {
                itemName: "Caramel Turtle",
                description: "",
                ingredients: ""
              },
            ],
          dozenPrice: 38,
          color: "pink"
        },
      ],
    canMix: false
  },
]

export { menu };
