
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return knex('blogs').insert({
          title: 'Fruita',
          text:"Fruita was the first stop of the trip. I met up with my Cousin Joy and her Husband Chris. We had pizza and then watched the election. I honestly felt like somenoe had died. The entire next day I just had this recurring statement running through my head.'Donal Trump is going to be the president of the United State',breath, 'Donald Trump is going to be the president of the United States.' I wrote some code and then luckily Joy took me mountain biking on 17 mile road. It was fantastic! Like a cheaper version of snowboarding which is a better work out. I should definitly get into mountain biking at some point in my life",
          location_id:2
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title: 'Utah',
          text:"The election was definitly still on my mind so a solo contemplative dessert excursion probably wasn't the best choice but that's how it worked out. I spent the first day driving through beautiful dessert. It's easy to forget how crazy Utah is but driving through the canyony part is something I would definitly recomend. I ended up driving up steep switchbacks on the Burr trail, and then across a sawtouth with cliffs on eitherside between boulder and Escalante. I eventually slept under the stars in the dessert outside Escalante",
          location_id:3
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title: 'Utah 2',
          text:"I woke up in the dessert and then drove to a slot canyon area I had read about.(I told my family where I was. I don't want to live out 127 hours!) Climbing through slot canyons was a blast. Definitely something I have been wanting to do for a bit. and check.",
          location_id:4
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Phoenix",
          text:"I woke up in a national forest and drove to Phoenix early. I ended up driving by an overturned semi. I must have missed the accident b about 5 minutes because there weren't any emergency vehicles, just the driver standing around in shock while cars took turns driving around it. \n I got into Phoenix in the afternoon and went out to the bars with some of my Galvanize friends, each of whom had a different impression of Phoenix. One was ok with it, the other loved the party scene(he's 22) and the other treated it as some sort of exile he had to endure for the sake of his career. All three liked their jobs. I definitely was on side of Phoenix being a spralling suburban hell hole baking in the dessert heat, but that's just me. \n"
          +" I woke up early on that Monday and had an interview with Amex in New York. I thought it went well. There were only a few questions I couldn't answer and they were things like 'how does Angulars dependecy injection work under the hood.' Which is a hard ass question. I then packed up and got the hell out of Phoenix, which felt nice",
          location_id:5
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"San Diego",
          text:"Got into San Diego in the afternoon and checked into my hostel. It was the first hostel of the trip and I didn't know how it would compare to hostels abroad. It's the same, just costs more. I wandered around the hilcrest area of San Diego and then met my room mate, Jorje, a neuroscientist from Chile. We then spent about 2 hours talking about advances in neuroscience. Our poor roommates. \n"+
          "I spent the next day in a coffee shop learning React, which is slowly growing on me. I can now bull shit most people into thinking I know React. After my all day study sesh I had tacos and beer with hostel people(it was a Tuesday).\n"+
          "The next day I wandered areound downtown San Diego and debated taking a tour of a aircraft carier in the harbour. I'm glad I didn't because I ended up eating lunch with Jorge and some other Chillean neuroscientists there for a convention. Naturally we talked about the impending Trump presidency. He reminded me that 'Its not the end of the world.' I then said goodbyes and switched to a hostel in Ocean Beach",
          location_id:6
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Ocean Beach",
          text:"Ocean Beach is a kind of run down little beach area with decaying cement peer, a main drag of bars and restaurant and aparently a requirement to ride a skateboard. I loved it. I did some work but spent most of my time exploring nearby beaches(Mission, Pacific, La Jolla) and getting drunk with Hostel People. Naturally I ran into more neuroscientists and had more conversations about the global impact of a Trump Presidency. I have now accepted that it 'is not the end of the world'",
          location_id:6
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Hollywood",
          text:"I woke up said goodbye to hostel friends and drove up to LA. I tried to time it to miss as much traffic as possible (hit LA at 2 on a Saturday). it wasn't the worst driving experience I have ever had but it did cement some of my stereotypes about LA. you can drive in one direction for 70 miles and be somewhere in LA the whole time \n"+
          "I arrived at my hostel in Hollywood and eventually found a place to park. Turns out the hostel is right on Hollywood Blvd across from the Mann Chinese Theater. I quickly made friends by making fun of a bad mural and had a solid night out. We ended up getting into the whiskeyagogo for free to watch a bad Guns N' Roses cover band and then finished the night at a club in Hollywood. Apparently some actors from 'the L word' were there. There were a lot of Lesbians \n"
          +"The next day I went to Venice to meet a friend. She kinda slacked so I spent time walking around Venice in the rain and eventually wound up watching tv at her house. A ton lot of people came in and out and I struggled to keep up with conversations about venice restaurants. Some guy brought a Bermese Mountain dog puppy in a red bandana. He had dozens of snapchat videos of him and the dog doing adorable things. Normally I get annoyed when a dude hits on girls I'm hanging out with, but I can't argue with that level of game",
          location_id:7
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Venice",
          text:"I had another code day and went to a meetup in downtown LA. I couldn't quite find the place and for the first time in a while felt a little sketched about by my suroundings. I eventually found the coffee shop in a Japanese mall. I hit on nerdy girls and had a good time. \n"+
          "When I got to my hostel the road was blocked off by police. Turns out someone was stabbed to death like 15 minutes earlier. This is something I didn't tell my mom until after I moved out of the hostel.",
          location_id:7
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Getty",
          text:"I drove up to the Getty Museum the next morning. My goal was to get high, wander around and have deep thoughts. After about 45 minutes I was high, lost and getting kind of bored of looking Renaissance. I split my time between mocking art in my head, mocking people in my head, looking at the view and catching the museum staff checkout girls. I was walking through the furniture section pointed at an old bed and whispered to a 20 yearold staff member 'a long time ago, somebody fucked on that' and then walked away. All in all, I had a good time.",
          location_id:7
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Thanksgiving",
          text:"I was going to spend Thanksgiving in Big Sur but my friend Brittny invited me to have it with her family in Covina, one of the many LA suburbs. She warned me about the mental status of some of the people coming but in the end they were all pretty tame. I think everyones meds were in order. I drank wine, played cards, bullshitted and then left for Big Sur the next morning",
          location_id:7
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Big Sur",
          text:"On Friday I drove up highway 1 to see Big Sur on my way to San Francisco. I made two critical mistakes. One: I went up on the Friday after Thanksgiving and it was packed. I pretty much sat in Traffic for 3 hours. Every pull out had 50 people in it and I honestly couldn't even park at most of the scenic parts \n Two: I had planned on camping in the national forest near by. I had read that there is dispersed camping and its pretty sweet. Well it turns out there was a forest fire in the are over the summer and they just closed the national forest as a result. Because of this I found myself in a very crowded area with nowhere to sleep. Oh well Turns out walmart doesn't care if you spend the night in their parking lot",
          location_id:8
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"SF",
          text:"I made it to SF on a Saturday and wandered around the city. I can see why people spend absurd amounts of money to live here. I spent most of the week staying at a hostel just up hill from the tenderloin and walking into the SF Galvanize. I pretty much just treated it like a work week and still had a really good time. SF is just nice. I enjoyed the rhythm I fell into and the city in general. I had good nights out, had good food, and talked to cool people. I even had an in person interview by the end of the week.",
          location_id:9
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"RedWoods",
          text:"After my interview in San Fransisco I headed north to RedWoods National Park. I was still excited about possibly getting the job in SF so the ride went well. I stopped for gas in Eureka and looked at my email. I didn't get the job. \n  I was pretty bummed out for the rest of the drive. I ended up getting into Redwood national park about 5 mins before the ranger station closed and picked out a camping spot right on the ocean. I had stopped and gotten some firewood on the way in but it was wet and I couldn't start a fire. After about an hour of trying it turned into a metaphor for the trip. No matter how hard I try, it just won't light. ",
          location_id:10
        })
      })
      .then(function(){
        return knex('blogs').insert({
          title:"Portland",
          text:"Before the trip Portland was one of the places I was considering living in. I no longer feel that way. \n Portland sucked. For a long list of reasons Portland and I just didn't get along. Everyone I ran into seemed overly pretentious and libral. The kind of libral that truely beleives that the way I live my life, is killing whales. I also had more converations about conspiracy theories that I've had in the last 5 years combined and the weather was about 37 F and pouring rain. Finally my car was broken into. \nThe last thing I did in Portland was tape cardboard into my broken window and drive away. I will never live in Portland",
          location_id:11
        })
      })

};
