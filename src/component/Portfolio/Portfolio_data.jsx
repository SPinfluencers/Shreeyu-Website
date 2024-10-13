const Portfolio_data = [
  {
    id: 1,
    category: "Shreeyu Engineering is the worlds leading structural steel Detailing and Estimation services provider. ",
    title: "Structural Steel Detailing & Estimation",
    image: "https://images.pexels.com/photos/258166/pexels-photo-258166.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:'Jiomart - Choose and Buy Online Grocery from a wide range of fruits, vegetables, baby care products, personal care products and much more.',
    description_1: 'Real Time functionality project in which Landing page, Login & Signup Pages, Product pages, header, Footer with navgation, Routing is used to change location of pages',
    github: "https://github.com/SPinfluencers/maniacal-furniture-1461",
    view: "https://rococo-bublanina-66b2bf.netlify.app/"
  },
  {
    id: 2,
    category: "We have vast experience and expertise in designing buildings and other structures made of any material.",
    title: "Structural Engineering, Design and Analysis",
    image: "https://spaninfeetengineeringservices.com/uploads/frontend/services/1663767379_gallery_1663419191_gallery_serv(2).jpg",
    description:'Myntra website clone is An online e-commerce shopping website, Real time functionality.',
    description_1:'Real time functionality with good UI, Landing page with all other product Information with header and Footer, Product Pages, Login Signup page.',
    github: "https://github.com/Md-sahil-a/myntra",
    view: "https://rad-manatee-0e439b.netlify.app/"
  },
  {
    id: 3,
    category: "Our impeccable track record has made us the one-stop destination for Rebar Detailing services.",
    title: "Reinforced Concrete Detailing and Estimation",
    image: "https://www.shutterstock.com/image-illustration/reinforced-concrete-columns-steel-bars-600nw-2017110704.jpg",
    description:'An online e-commerce shopping website.',
    description_1:'Landing Pages with header and footer, Product pages Create object for product data, Cart page , Login Signup page etc.',
    github: "https://github.com/SPinfluencers/BlueFly",
    view: "https://inspiring-cactus-1f1348.netlify.app/"
  },
  
  {
    id: 4,
    category: "At Shreeyu Engineering, we believe in achieving nothing short of excellence. Our exemplary track record has helped us being a preferred solution provider in the Precast Detailing Industry,",
    title: "Precast Concrete Modeling & Detailing",
    image: "https://www.bft-international.com/imgs/1/5/4/4/7/4/8/tok_ee12b3fb2aeea8c8ea208ac31133fbf8/w380_h254_x255_y170_95cf1e9beaf2b806.jpeg",
    description:'This is Youtube Application.',
    description_1:'I used youtube api to make this application fetching data from api and append on DOM Onclick on video its load video and show on next page, Its shows seperate video another things are DUMMY in this application.',
    github: "https://github.com/SPinfluencers/YouTube-Application",
    view: "https://preeminent-rugelach-135977.netlify.app/"
  },
  {
    id: 5,
    category: "The connection alternatives provided by us will help you with the safest, most economical, and structurally efficient connections.",
    title: "Structural Steel Connection Design",
    image: "data:image/jpeg;base64,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",
    description:'This is Weather Application.',
    description_1:'Showing the your city location weather, whenever you enter your city name its shows your city location and wheather.',
    github: "https://github.com/SPinfluencers/Weather-Application",
    view: "https://dreamy-blini-68a416.netlify.app/"
  },
  
  // {
  //   id: 6,
  //   category: "WEB DESIGN",
  //   totalLike: "690",
  //   title: "App for tecnology & services",
  //   image: "./image/portfolio-06.jpg",
  // },
]
export default Portfolio_data
