const news = [
  {
    id: 1,
    title:
      "Our academy graduate, Okoronkwo Chukwuebuka, signs for FC Rashvan in Tajikistan.",
    date: "Dec 20, 2025",
    src: "/images/testedSigns.webp",
    alt: "Okoronkwo Chukwuebuka signs for FC Rashvan in Tajikistan.",
    mediaType: "image",
    story:
      "Our towering, commanding centre-back and academy graduate — who joined Elite FC at just 17 — has signed for FC Rashvan in Tajikistan, marking his third professional contract following spells at FC Van and West Armenia. Ebuka's journey is a testament to hard work, perseverance, and discipline both on and off the pitch. We wish him nothing but the best as he continues to fly the Elite FC flag high on the international stage.",
  },
  {
    id: 2,
    title:
      "Our academy graduate, Alukwu Jonathan, signs for Asko Oedt in Austria.",
    date: "Jun 30, 2024",
    src: "/images/jonaSigns.webp",
    alt: "Alukwu Jonathan signs for Asko Oedt in Austria.",
    mediaType: "image",
    story:
      "Our pacy, skilful academy graduate has completed a permanent move to ASKÖ Oedt in Austria.Alukwu Jonathan began his professional career at Calabar Rovers after graduating from our academy, where his performances quickly drew attention. He then earned a move to Sporting Lagos, where he was named Player of the Season after scoring 12 goals and providing 6 assists in a standout campaign. His form also earned him a call-up to the Nigeria U-23 team.Jonathan has since spent two seasons with ASKÖ Oedt, tallying 19 goals and 11 assists across all competitions. In his debut season he registered 12 goals and 1 assist. He followed that with 7 goals and 10 assists in his second season.We are proud of his journey and wish him continued success in his career.",
  },
  {
    id: 3,
    title:
      "Academy graduate Okoronkwo Chukwuebuka rises highest! Powerful header makes it 2-2 vs FC Barqchi Hisor!",
    date: "Mar 15, 2026",
    videoId: "0vRM0OFywW8",
    mediaType: "video",
    thumbnail: "https://img.youtube.com/vi/0vRM0OFywW8/hqdefault.jpg",
    alt: "Academy graduate Okoronkwo Chukwuebuka scores ",
    story:
      "In the 83rd minute of a league clash against FC Barqchi Hisor on March 15, 2026, our very own Ebuka rose highest to power in a towering header, levelling the score at 2-2.",
  },
  {
    id: 4,
    title:
      "Our Academy Graduate Alukwu Jonathan Dazzling with Skill | ASKÖ Oedt Highlights",
    videoId: "NQ8HIOPfK_g",
    mediaType: "video",
    thumbnail: "https://img.youtube.com/vi/NQ8HIOPfK_g/hqdefault.jpg",
    alt: "Alukwu Jonathan dribbling past defenders and scoring goals for ASKÖ Oedt",
    date: "Jun 19, 2026",
    story:
      "A compilation of Alukwu Jonathan’s best moments for ASKÖ Oedt. Watch our academy graduate showcase his blistering pace, trickery, and eye for goal across two standout seasons in Austria, tallying 19 goals and 11 assists. From beating defenders 1v1 to scoring crucial goals, this is the winger that came through Calabar Rovers and Sporting Lagos now thriving in Europe.",
  },
  {
    id: 5,
    title: "Three players called up for the National Youth Team trials.",
    date: "Jan 22, 2026",
    src: "/images/callup.webp",
    alt: "Elite FC players in training ahead of national youth team trials.",
    mediaType: "image",
    story:
      "Three of our promising talents have earned call-ups to the Nigeria U-17 National Youth Team trials, a proud moment for the academy and a reflection of the standard we continue to build here at Elite FC All Stars. The trio have been putting in extra hours on the training pitch, sharpening their fitness and tactical awareness ahead of camp. We're immensely proud of their growth and wish them the very best as they take this next step in representing their country.",
  },
  {
    id: 6,
    title:
      "Elite FC All Stars announces new partnership to improve player development.",
    date: "Nov 5, 2025",
    src: "/images/signingEvent.webp",
    alt: "Elite FC officials shaking hands at a partnership signing event.",
    mediaType: "image",
    story:
      "Elite FC All Stars is excited to announce a new partnership aimed at strengthening player development across the academy. This collaboration will bring enhanced training resources, improved facilities access, and additional support for our coaching staff — all geared toward giving our players the tools they need to reach the next level. We remain committed to building not just better footballers, but better people, and this partnership marks another step forward in that mission.",
  },
  {
    id: 7,
    title: "Trial session announced for the October intake — apply now.",
    date: "Aug 29, 2026",
    src: "/images/intake.webp",
    alt: "Players training at Turf Arena ahead of the October trial intake.",
    mediaType: "image",
    story:
      "Elite FC All Stars is opening its doors for the October intake, and we're inviting talented young footballers across Nigeria to come show what they've got. Trials will run across our age categories, from U-13 through Senior, giving every player a genuine shot at earning a place in the academy. If you've got the passion, discipline, and drive to compete at the next level, this is your moment. Spots are limited — apply now and take the first step toward building your football future with us.",
  },
  {
    id: 8,
    title:
      "New assistant coach joins the Elite FC coaching staff ahead of the new season.",
    date: "Mar 2, 2026",
    src: "/images/assistant.webp",
    alt: "New assistant coach standing on the sidelines at Turf Arena.",
    mediaType: "image",
    story:
      "Elite FC All Stars is pleased to welcome a new assistant coach to the technical team ahead of the new season. Bringing a wealth of coaching experience and a sharp eye for developing young talent, the addition strengthens our staff as we continue raising the standard of training across every age group. We're confident this appointment will add real value to our players' growth both on and off the pitch, and we look forward to the impact this new chapter will bring.",
  },
  {
    id: 9,
    title: "Elite FC All Stars climbs to 2nd place in the U-17 League table.",
    date: "Oct 8, 2025",
    src: "/images/celebration.webp",
    alt: "Elite FC players celebrating on the pitch after a league win.",
    mediaType: "image",
    story:
      "Elite FC All Stars has climbed to 2nd place in the U-17 League table following a string of strong performances on the pitch. The boys have shown real character and consistency in recent fixtures, translating hard work in training into results that matter. With the season heating up, the squad remains fully focused on pushing further up the table and giving our supporters even more to cheer about.",
  },
  {
    id: 10,
    title:
      "Elite FC hosts community outreach visit at a local primary school in Garki.",
    date: "Sep 14, 2025",
    src: "/images/schoolVisit.webp",
    alt: "Elite FC coaches and players visiting a local primary school.",
    mediaType: "image",
    story:
      "Elite FC All Stars took time out from training to visit a local primary school in Garki, spreading the joy of football to the next generation of young talents. Players and coaches spent the day engaging with the pupils through fun drills, mini-games, and conversations about discipline, teamwork, and chasing their dreams. For us, giving back to the community isn't just an occasional gesture — it's part of who we are as an academy. We're grateful for the warm welcome and look forward to more moments like this.",
  },
];

export default news;
