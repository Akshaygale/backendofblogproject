const get = (req, res) => {
    console.log("REq Params:", req.parms);
    const category = [
      {
        id: "1",
        category: "TollyWood",
        img: "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2020/8/29/ala-vaikunthapurramuloo.jpg",
        det: "Ala Vaikunthapurramuloo Box Office Day 23 (Early Trends): Picks Up Terrifically On 4th Saturday",
        date: "By Koimoi.com Team -Feb 25, 2022",
        description:"In the film, a man named Bantu grows up with hate and neglection from his father Valmiki, until he discovers the latter swapped him as an infant, and his biological father is an affluent businessman, Ramachandra. Bantu enters Ramachandra's house, Vaikuntapuram, to protect his biological family when it is threatened by an influential man. The idea of swapping infants was earlier attempted in Vedantam Raghavaiah's Inti Guttu.Production of the film began in April 2019, and wrapped up within December 2019. It was filmed across Hyderabad, with songs being shot in overseas."
      },
      {
        id: "2",
        category: "TollyWood",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxNOquKLKqlbK6h34qPwimqCy0sGz0obKbA&usqp=CAU",
        det: "Pushpa Box Office Day 23 (Early Trends): Picks Up Terrifically On 4th Saturday",
        date: "By IANS -January 3, 2022",
        description:
          "Allu Arjun's Pushpa: The Rise is roaring ahead at the box office, 25 days on. Reportedly, the film has grossed Rs 100 crore in the Hindi belt alone. Pushpa Hindi will start streaming on Amazon Prime Video on January 14.Pushpa: The Rise has become a phenomenon, and Allu Arjun, a force to reckon with. The film's meteoric success at the box office despite competition from films 83 and Spider-Man: No Way Home, is simply outstanding. Reportedly, the film has crossed the Rs 325 crore-mark, but doesn't look like it is in any mood to slow down. For those who still failed to catch the film in theatres, Pushpa: The Rise is now streaming on Amazon Prime Video in four languages - Tamil, Telugu, Malayalam and Kannada. Now, we hear that the OTT giants will release the Hindi version of Pushpa on January 14.",
      },
      {
        id: "3",
        category: "TollyWood",
        img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/10/rrr-1601963942.jpg",
        det: "Delay In 'RRR' Release, A Blessing In Disguise For Other Tollywood Films",
        date: "Release: 05 Jan 2022",
        description:
          "Filmmaker S.S Rajamouli announced on January 1, that his much-awaited Pan India project 'RRR' will not be hitting theatres on January 7 due to the rise of Covid-19 cases and theatres being shut in major markets of Mumbai and Delhi. Within the next 48 hours, as many as five Telugu films announced their release dates around January 14, making it a Makar Sankranthi release. Experts reveal that with a major player like Jr NTR and Ram Charan's 'RRR' off the grid, it is a favourable situation for Telugu films that target mostly Telangana and Andhra Pradesh film market.",
      },
      {
        id: "4",
        category: "TollyWood",
        img: "https://www.teahub.io/photos/full/300-3003328_allu-arjun-duvvada-jagannadham-movie-first-look-hd.jpg",
        det: "Stylish Allu Arjun in and as DJ , action-drama movie",
        date: "Release: 28nd January 2019",
        description:"DJ: Duvvada Jagannadham is a 2017 Indian Telugu-language action comedy film written and directed by Harish Shankar and produced by Dil Raju under his banner Sri Venkateswara Creations. The film stars Allu Arjun and Pooja Hegde, while Rao Ramesh, Subbaraju, Chandra Mohan, and Murali Sharma play supporting roles. The plot follows Duvvada Jagannadham, a Brahmin priest who fights crime with his alter-ego DJ."
      },
      {
        id: "5",
        category: "Technology",
        img: "https://store.hp.com/app/assets/images/uploads/prod/what-is-internet-of-things-hero1560199116089.jpg",
        det: "The Internet of things describes physical objects with sensors, processing ability, software, and other technologies that connect.",
        date: "by Carrasco, 12 March 2019",
        description:
        "The Internet of things (IoT) describes physical objects (or groups of such objects) with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. Internet of things has been considered a misnomer because devices do not need to be connected to the public internet, they only need to be connected to a network and be individually addressable."
      },
      {
        id: "6",
        category: "Technology",
        img: "https://thumbor.forbes.com/thumbor/711x355/https://specials-images.forbesimg.com/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?fit=scale",
        det: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
        date: "by  Ted Simpson, 10 March 2015",
        description: "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.Large clouds often have functions distributed over multiple locations, each location being a data center. Cloud computing relies on sharing of resources to achieve coherence and typically using a pay-as-you-go model which can help in reducing capital expenses but may also lead to unexpected operating expenses for unaware users"
      },
      {
        id: "7",
        category: "Technology",
        img: "https://i.gadgets360cdn.com/large/intel_core_i9_12900ks_intel_youtube_1641564934678.jpg?downsize=950:*",
        det: "Intel Core i9-12900KS Announced at CES With Massive 5.5GHz Clock Speed on a Single Core",
        date: "by David Delima, 9 March 2022",
        description:
          "Intel Core i9-12900KS was announced by the company at CES 2022. The 12th Gen Intel Core ‘Alder Lake' CPU offers a 5.5GHz boost clock speed on a single core. The new Intel Core i9-12900KS is also capable of functioning at 5.2GHz on all cores while performing heavy multi-core tasks, according to the company. This is the first Special Edition processor for desktops from Intel since the Core i9-9900KS in 2019 and will be available to manufacturers in Q1 2022, according to the company.The new processor unveiled by Intel is similar to the Core i9-12900K CPU and sports eight performance cores and eight efficiency cores. The new 12th Gen Alder Lake Intel Core i9-12900KS offers up to 40 percent higher performance generation-on-generation, according to the company. The company also ran a live demo of the CPU running Hitman 3 at CES 2022, where the CPU was shown to maintain a clock speed of 5.2GHz on all eight performance cores. Intel is yet to reveal details of exactly how much power the new Intel Core i9-12900KS will draw, or how much the CPU will cost.",
      },
      {
        id: "8",
        category: "Technology",
        img: "https://i.gadgets360cdn.com/large/fire_boltt_ninja_2_smartwatch_website_1641540469956.jpg?downsize=950:*",
        det: "Fire-Boltt Ninja 2 Budget Smartwatch With 30 Sports Modes, SpO2 Tracking Launched in India: Price, Specifications",
        date: "by Nithya P Nair, 7 March 2022",
        description:
          "Fire-Boltt Ninja 2, the newest smartwatch from the popular wearables brand is now official in India. The budget smartwatch features a 1.3-inch touch screen display and a blood oxygen saturation (SpO2) monitor. It also comes with inbuilt arcade-style games. Fire-Boltt Ninja 2 offers 30 sports modes and is claimed to have a battery life of up to 7 days when in use and a standby time of up to 25 days. Fire-Boltt Ninja 2 is certified to be dust- and water-resistant with an IP68 rating.Fire-Boltt Ninja 2 price in India, availability The new Fire-Boltt Ninja 2 is available in India at an introductory price of Rs. 1,899 and will be available to purchase exclusively via Amazon. The latest Fire-Boltt smartwatch is offered in three colour options — Black, Blue, and Pink.Fire-Boltt Ninja 2 specifications, features The Fire-Boltt Ninja 2 smartwatch has a rectangular dial and comes with a 1.3-inch HD (240x240 pixels) touchscreen display. The new Fire-Boltt wearable sports a side-mounted button for navigation and support for multiple watch faces that can be customised via the Da Fit app in the paired Android or iOS smartphone.HTC Launches Wrist Tracker Companion for Its Vive Focus 3 VR Headset Fire-Boltt Ninja 2 supports 30 sports modes including walking, cycling, hiking, aerobics, badminton, football, running, and skipping among others. It sports SpO2 monitoring alongside inbuild features such as alarm, menstrual reminders, stopwatch, smart notifications, and weather updates.The new smartwatch also packs a heart-rate tracker, a sleep tracker, and a steps counter. Users can also control music and the camera running on the smartphone using the watch.As mentioned, Fire-Boltt Ninja 2 smartwatch has an IP68 build. The wearable has an inbuilt gaming option, that allows users to play games like 2048 and Young Bird.",
      },
      {
        id: "9",
        category: "Bollywood",
        img: "https://www.meinstyn.com/wp-content/uploads/2020/05/Don-2-Movie-Dialogues-Shahrukh-Khan-Full-HD-Poster.jpg",
        det: "After dominating the Asian underworld, Don sets his eyes on the European criminal market. Caught between the Berlin mafia and law enforcement, Don tries to escape treachery and betrayal.",
        date: "Release: 23 Dec 2011",
        description:"Don 2: The King Is Back, better known as Don 2, is a 2011 Indian Hindi-language action thriller film written, co-produced and directed by Farhan Akhtar. It is the second and final installment in the Don series. Jointly produced by Excel Entertainment and Red Chillies Entertainment, the film stars Shah Rukh Khan, Priyanka Chopra, Lara Dutta, Om Puri, Boman Irani and Kunal Kapoor. A sequel to the 2006 film Don (2006), Khan appears as the titular character. The film's story takes place five years after the previous film when Don (Shah Rukh Khan), a powerful and ruthless crime boss, plans to take over the European drug cartel. Meanwhile, Roma (Priyanka Chopra) has joined the Interpol to hunt him down."
      },
      {
        id: "10",
        category: "Bollywood",
        img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/03/rustom-movie-posters.jpg",
        det: "Rustom, a naval officer, shares a happy relationship with his wife Cynthia. Soon, he discovers her affair with Vikram, a close friend, and is accused of murdering him.",
        date: "Release: 12 Oct 2016",
        description:"Rustom is a 2016 Indian Hindi-language crime thriller film written by Vipul K Rawal and directed by Tinu Suresh Desai. The film stars Akshay Kumar, Ileana D'Cruz, Arjan Bajwa and Esha Gupta in lead roles. The film is loosely based on the K. M. Nanavati v. State of Maharashtra court case,and narrates the story of a naval officer whose wife has an extramarital affair with a businessman. Made on a budget of ₹500 million (US$6.6 million), the film began principal photography in February 2016,and was theatrically released on 12 August 2016 in Indian cinemas. The film was a hit at the box office in india. It is one of the highest grossing hindi film of 2016."
      },
      {
        id: "11",
        category: "Bollywood",
        img: "https://wallpaperaccess.com/full/1494464.jpg",
        det: "Raj and Meera fall in love, but are forced to stay away from each other as they belong to rival mafia families. Years later, they get a second chance when their siblings fall for each other.",
        date: "Release: 18 Dec 2016",
        description:"Dilwale (transl. Braveheart) is an Indian Hindi 2015 action romantic comedy film directed by Rohit Shetty and Gauri Khan[4] Distributed by Red Chillies Entertainment, it stars Shah Rukh Khan, Kajol, Varun Dhawan, and Kriti Sanon in the lead roles,[5] while marking the last film appearance of actor Vinod Khanna, who played the role of Khan and Dhawan's father, before his death on 27 April 2017. Varun Sharma, Johnny Lever, Boman Irani, Pankaj Tripathi, Mukesh Tiwari, Chetna Pande and Kabir Bedi appear in supporting roles."
      },
      {
        id: "12",
        category: "Bollywood",
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/3697/1000013697/1000013697-h",
        det: "When Abbas breaks open the lock of an ancestral Hindu temple to save a child trapped inside, he faces trouble. He tries to hide his true identity with a fake Hindu name, which leads to lies.",
        date: "Release: 6 July 2012",
        description:"Bol Bachchan is a 2012 Indian Hindi-language action comedy film directed by Rohit Shetty and produced by Ajay Devgn & Dhillin Mehta under Ajay Devgn FFilms and Shree Ashtavinayak Cine Vision Limited respectively, with Fox Star Studios serving as distributor and presenter. Based on a script by writers Yunus Sajwal and Farhad-Sajid and a story by Shetty, it stars Abhishek Bachchan as the titular character, with Ajay Devgn, Asin Thotumkal, Prachi Desai, Krushna Abhishek, Neeraj Vora and Archana Puran Singh"
      },
      {
        id: "13",
        category: "Nature",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XVdLTvsPviTvhnPunsjRriRm26OOZNcc8w&usqp=CAU",
        det: "These Malayalis make Christmas clean and green It's time to celebrate our festivals in an eco-friendly manner showing the way towards the same! ",
        date: "TNN / Feb 26, 2021, 09:53 (IST)",
        description:
          "nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. “Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,” says Priya.",
      },
      {
        id: "14",
        category: "Nature",
        img: "https://static.toiimg.com/thumb/msid-88744684,imgsize-116232,width-400,resizemode-4/88744684.jpg",
        det: "Fire accident 'act of God' only if caused by natural force:..",
        date: "TNN / Updated: March 7, 2022, 05:15 IST ",
        description:
          "NEW DELHI: The  has held that only those fire accidents could be termed acts of God which is inevitable and caused by external natural force and not due to active or passive negligence of human being. A force majeure clause or act of God is one exception that releases the party of its contractual obligations to an extent when events beyond their control take place and leave them unable to perform their part of the contract. It has also not been the case that the fire was a result of any mischief by any person. The fire that started around 12:55pm on April 10, 2003, could be brought under control only by 5am on April 11. When all the relevant factors are cumulatively taken into account, we find it difficult to accept that the fire and the resultant loss had been beyond the control of human agency,it said. ",
      },
      {
        id: "22",
        category: "Nature",
        img: "https://static.toiimg.com/thumb/msid-88218300,imgsize-165476,width-400,resizemode-4/88218300.jpg",
        det: "Natural, eco-friendly fibre weaves its way into Surats poly ..",
        date: "Yagnesh Bharat Mehta / TNN / Updated: March 11, 2021, 09 .",
        description:
          "SURAT: With the world consciously trying to leave at least one carbon footprint less in the sands of time, Suras textile hub, known for its polyester products, too is making efforts into weaving a greener thinking by adopting After introducing plant-based cupro fibre and viscose rayon, the city is now experimenting with fibre and yarn sourced from pineapple, birch wood, banana and bamboo. Few of the products are researched and developed locally, while some innovations made abroad are also trying to find its footing in the man-made fabric hub. Besides fabrics like nylon, cotton, cuprammonium, viscos,inen and a few others, almost 80 percent of fabric products at present are polyester based. “Plantain stems weighing around 45kg each were earlier considered waste and would actually incur the farmer an additional Rs 15,000 per hectare cost for removal of the eco-trash. But now, with the innovation of plant-based fibre, farmers can earn from that waste, said ",
      },
      {
        id: "15",
        category: "Nature",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLft0QYhp6YeBFJpadhB8w8qVmKVEBmhB62Q&usqp=CAU",
        det: "These Malayalis make Christmas clean and green It's time to celebrate our festivals in an eco-friendly manner showing the way towards the same! ",
        date: "TNN / Feb 26, 2021, 09:53 (IST)",
        description:
          "nGreen is the way to celebrate festivals in these days of climate emergency, but not everyone takes the effort for it. However, these Malayalis found ways to make Christmas eco-friendly and also help others do the same. Wonder how they make merry without hurting nature? Read on! Muhamma in Alappuzha district is known for coir making and a handful of youngsters there, belonging to St George Churchs Yuvadeepthi group, made an eco-friendly star that suits the spirit of their place. Made of 40 kg coir, the star is 22 feet tall and was made in about 10 days. Binu K Joseph, who was part of the group, tells us, We decided to make an eco-friendly star revering Pope Francis's message to lead an eco-friendly life. The star also houses our church's crib in the middle. The team will be giving away the coir for erosion control efforts, after the Christmas season Priya Ann Varghese has been making Christmas decors for long, but this year, she decided to make her collection as eco-friendly as possible. The former techies online profile @annzcreations, filled with the green tree ornaments, berries, pine cones and more is quite popular among Keralas young nature lovers too. “Sourcing the raw materials for green decors isnt easy in Kerala. But, today environmentally-aware youngsters are seriously into recycling and eco-friendly decors, so I wanted to cater to them. The products, made of raw materials like bamboo, also last for a long time,” says Priya.",
      },
    ];
    if (req.params.category) {
      const newCategory = category.filter(
        (val) => val.category.toLowerCase() == req.params.category.toLowerCase()
      );
      res.send(newCategory);
    } else if (req.query.id) {
      const newCategory = category.filter((val) => val.id == req.query.id);
      res.send(newCategory);
    } else {
      res.send(category);
    }
  };
  
  module.exports.categoryGet = get;