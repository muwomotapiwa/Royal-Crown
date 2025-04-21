document.addEventListener("DOMContentLoaded", () => {
  const devotionals = [
    {
      id: 5,
      week: "Monday 21 April – Saturday 26 April 2025",
      title: "The Finished Work of the Cross",
      scripture: `“It is finished.” - John 19:30`,
      reflection: `As we emerge from the profound season of Easter, we are reminded of the most pivotal moment in all of history — the crucifixion and resurrection of Jesus Christ. The words “It is finished” (John 19:30) were not a cry of defeat, but a declaration of total victory. In that moment, Jesus completed the work required for our salvation. Every sin, every shame, every chain — broken. Paid in full.\n\nThe cross is not just a symbol; it is a statement of love, power, and freedom. It represents the place where judgment met mercy, where death was swallowed up in victory, and where humanity’s greatest need was fully satisfied. Because of the finished work of the cross, we no longer strive for approval — we live from a place of being accepted, redeemed, and made new in Christ.\n\n2 Corinthians 5:21 reminds us, “God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.” This is the power of the Gospel: Christ took our place so that we could take His — sons and daughters of the Most High, fully forgiven, deeply loved, and eternally secure.`,
      prayer: `Lord Jesus,\nThank You for the cross. Thank You for enduring the pain, the shame, and the weight of sin so that I might be free. Help me to live each day in the light of Your finished work — not striving, but abiding; not fearing, but resting in Your love. Let the truth of Your sacrifice transform my heart, renew my mind, and redirect my steps. I surrender every guilt, every fear, every doubt to You. Let Your resurrection power live in me and draw others through me. I declare that It is finished, and because of You, I am made new. In Your mighty name I pray, Amen.`,
      contemplation: `Do you believe that Jesus’ sacrifice on the cross was truly enough for you? Are there areas of your life where you still feel the need to earn God's love or approval?\n\nWhat burdens are you still carrying that Christ has already nailed to the cross? What would it look like to fully trust in His finished work today?\n\nHow can your life reflect the freedom and joy of someone who has been redeemed?`,
      action: `Daily Declaration: Each morning this week, declare aloud: “It is finished. I am free, I am forgiven, and I am loved because of Jesus.”\n\nShare the Good News: Look for an opportunity this week to share the message of the cross with someone — a friend, a co-worker, a family member. Invite them to experience the freedom Christ offers.\n\nRelease the Burden: Write down anything you’re still carrying (guilt, shame, regret) and prayerfully surrender it to Jesus. Tear up the paper as a symbolic act of freedom.`,
      closing: `The cross was not the end — it was the beginning of new life. Because of Jesus, sin no longer has the final say. Death has lost its sting. The grave has been defeated. And you — yes, you — have been given a fresh start, a clean slate, and an eternal hope. Walk boldly in the finished work of the cross, and let your life be a living testimony to the saving grace of Jesus Christ.\n\nThis Easter season, may you not only remember what Christ has done, but fully receive it — and in doing so, lead others to the same life-changing truth.`,
      audio: "assets/audio/It_is_finished.mp3",
      isCurrent: true
    },    
    {
      id: 4,
      week: "Monday 14 April – Saturday 19 April 2025",
      title: "Refuse to Isolate Yourself from Others",
      scripture: `Ecclesiastes 4:9-10 - “Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow, but woe to him who is alone when he falls and has not another to lift him up.”`,
      reflection: `In a world that often values individualism, it’s easy to retreat into isolation, especially during times of trouble, sadness, or uncertainty. We may convince ourselves that withdrawing from others is a form of protection—saving others from our burdens and ourselves from vulnerability. However, God designed us for community, and His Word reminds us that we are stronger together.\n\nIsolation can lead us down a path of despair. When we distance ourselves from friends, family, and our faith community, we miss out on the support, encouragement, and love that others can provide. Just as a single candle’s light is only but a flicker, our strength shines brightest when combined with the light of others.\n\nDuring the struggles of life, remember that you are not alone. God has placed people around you, not just for your sake but for their own too. Your story, your experiences, and your presence can encourage others as much as theirs can uplift you.`,
      prayer: `Gracious Father, thank You for the gift of community. Forgive me for the times I have isolated myself, believing that I needed to carry my burdens alone. Help me to reach out to others, to share my struggles, and to welcome their support. Remind me that vulnerability is not a weakness but a pathway to deeper connection. Guide me in being a source of encouragement and light to those around me. May I refuse to isolate myself and instead embrace the gift of community that You have provided.`,
      contemplation: `Think about someone in your life who you haven’t connected with recently, whether due to busy schedules or personal struggles. Consider reaching out to them this week. Share your thoughts and invite them into your journey, allowing your relationship to be a mutual source of strength.`,
      action: `Reach out to a friend or loved one you haven’t spoken to in a while. Ask how they’re doing and share something from your own life. Create a moment of connection that reminds both of you of the strength found in togetherness.`,
      closing: `Refusing to isolate ourselves is a step of faith, reminding us that we are all part of the body of Christ. Each one of us has a role, a purpose, and unique strengths to contribute. Let’s commit to staying connected, lifting each other up, and embracing the beauty of community together. Remember, together we can face anything that comes our way, for we are indeed stronger together, anchored in the love of Christ.`,
      audio: "assets/audio/14AprilTo19April2025.mp3",
      isCurrent: false
    }, 
    {
      id: 3,
      week: "Monday 7 April – Saturday 12 April 2025",
      title: "Weekly Devotional",
      scripture: `Philippians 4:13 - \"I can do all things through Christ who strengthens me.\"`,
      reflection: `Life can often feel like a rollercoaster, with unexpected twists and turns that leave us questioning our abilities. We face challenges that seem insurmountable, and doubts can creep in, whispering lies that we are not enough. It’s during these times when everything appears to be working against us that we must dig deep and remind ourselves of the strength and potential that lies within us.

The world may cast shadows of negativity and self-doubt upon us, suggesting we are unworthy or incapable. Yet, as believers, we are called to rise above these circumstances. The enemy wants us to feel defeated, but God’s Word reminds us that we are equipped for greater things. Philippians 4:13 tells us that we can do all things through Christ who strengthens us. His strength does not depend on our circumstances; it flows from our faith in Him.`,
      prayer: `Heavenly Father, today I come before You with my doubts and fears. I acknowledge that when I see the obstacles around me, it’s easy to feel inadequate. Help me to remember that my worth is not defined by my situation, but by the love and grace You have poured into my life. Fill me with Your strength and courage. Remind me that in moments of uncertainty, I can lean on You and trust in Your plan. Lord, I choose to believe in the talents and gifts You have given me. Teach me to recognize my potential, even when the world tells me otherwise. In Jesus' name, Amen.`,
      contemplation: `1. What are some areas of your life where you have struggled to believe in yourself?\n2. Can you recall a time when you overcame self-doubt with faith? What did that experience teach you?\n3. How can you remind yourself of your inner strength and worth when negativity surrounds you?`,
      action: `Take a moment to write down a list of affirmations rooted in God’s truth. For example:\n- I am fearfully and wonderfully made (Psalm 139:14).\n- I am equipped with everything I need to fulfill my purpose (2 Timothy 3:17).\n- I have not been given a spirit of fear, but of power, love, and a sound mind (2 Timothy 1:7).\n\nPost these affirmations somewhere visible, perhaps on your mirror or refrigerator, and read them daily. Let them serve as a reminder that no matter what the world says, you are uniquely created and empowered by God to shine in your own life.`,
      closing: `Believing in yourself doesn't mean you won't face challenges or that you will never feel afraid. It means that you acknowledge the fear, but choose to stand firm in your faith, knowing that God’s presence is with you, giving you the strength to move forward. Trust in His promises, and you will find the courage to act, even when everything seems to be working against you.`,
      audio: "assets/audio/7AprilTo12April2025.mp3",
      isCurrent: false,
    },
    {
      id: 2,
      week: "Monday 31 March – Saturday 5 April 2025",
      title: "Creating a Path",
      scripture: `"This is what the Lord says— he who made a way through the sea, a path through the mighty waters, who drew out the chariots and horses, the army and reinforcements together, and they lay there, never to rise again, extinguished, snuffed out like a wick: 'Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.'" — Isaiah 43:16-19`,
      reflection: `In the busyness of our daily lives, it can be all too easy to feel overwhelmed and ensnared by our situations. We may encounter obstacles that appear impossible to overcome, leaving us with feelings of confusion or despair. However, the Word of God assures us that He is continually forging new paths for us. Just as He parted the sea for the Israelites, He is equally capable of guiding us through our difficulties.\n\nThe promise in Isaiah 43 speaks not only of our movement from one place to another but also of a profound change in our circumstances. In times of struggle, we should remember that God is not limited by our past mistakes or current hurdles. Instead, He calls us to open our hearts to the new beginnings He is orchestrating in our lives.`,
      prayer: `Gracious Father, thank You for being the God who makes a way in seemingly impossible situations. Help me to trust in Your plans and stay receptive to the new journeys You are crafting in my life. When I am faced with challenges, remind me that You are by my side and capable of transforming my dry places into rivers of hope. Grant me the faith to look beyond my current struggles and embrace the promise of a fresh start. In Jesus' name, I pray. Amen.`,
      action: `This week, take time to meditate on an area in your life where you seek divine guidance. Jot down any fears or uncertainties regarding that situation, and bring them before God in prayer, asking Him to unveil the new path He is preparing for you.`,
      audio: "assets/audio/31MarchTo5April2025.mp3",
      isCurrent: false,
    },
    {
      id: 1,
      week: "Monday 24 March – Saturday 29 March 2025",
      title: "Embracing God's Promises",
      scripture: `"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11`,
      reflection: `Today, take a moment to pause and reflect on the promises that God has made to us. In a world full of uncertainties and challenges, it can be easy to feel lost or anxious about the future. However, Jeremiah 29:11 reminds us that God has a divine plan for each of us. His plans are not meant to bring harm but to lead us toward a future filled with hope. Consider the context of the scripture: it was given to the Israelites during a time when they were in exile, longing for their homeland. Yet, even in their difficult circumstances, God assured them of His unwavering love and intentions for restoration. This is a powerful reminder that, no matter our current situation, God is always at work behind the scenes, orchestrating our lives for our good.`,
      prayer: `Dear Heavenly Father, thank You for the hope and future that You promise us. Help me to trust in Your plans even when I cannot see the way ahead. Teach me to surrender my anxieties and embrace the peace that comes from knowing You are in control. May I walk with faith and courage, assured that You are leading me towards Your beautiful purpose. In Jesus' name, I pray, Amen.`,
      contemplation: `Spend a few minutes in silence, allowing God's words to sink into your heart. What promises has He made to you? How can you embrace them today? Look for ways to carry hope and encouragement to others in your life, reminding them of God's faithfulness as well.`,
      action: `Consider writing down one area of your life where you need to embrace God's promise today. Share it with a trusted friend or family member and ask for their prayers or support as you navigate this journey together.`,
      audio: "assets/audio/EmbracingGod'sPromises.mp3",
      isCurrent: false,
    }
  ];

  const devotionalList = document.getElementById("devotional-list");

  devotionals.sort((a, b) => b.id - a.id).forEach((devotional) => {
    const entry = document.createElement("div");
    entry.classList.add("devotional-entry");

    const content = `
      <h3>${devotional.title}</h3>
      <p><strong>Week:</strong> ${devotional.week}</p>
      <blockquote>${devotional.scripture}</blockquote>
      <p><strong>Reflection:</strong> ${devotional.reflection}</p>
      ${devotional.prayer ? `<p><strong>Prayer:</strong> ${devotional.prayer}</p>` : ""}
      ${devotional.contemplation ? `<p><strong>Contemplation:</strong> ${devotional.contemplation}</p>` : ""}
      <p><strong>Action Step:</strong> ${devotional.action}</p>
      ${devotional.audio ? `<audio controls style="margin-top:20px;"><source src="${devotional.audio}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ""}
    `;

    if (devotional.isCurrent) {
      entry.innerHTML = content;
    } else {
      const toggle = document.createElement("button");
      toggle.textContent = `Past Week: ${devotional.title} (${devotional.week})`;
      toggle.className = "past-toggle";
      const details = document.createElement("div");
      details.className = "collapsed";
      details.innerHTML = content;

      toggle.addEventListener("click", () => {
        details.classList.toggle("collapsed");
      });

      entry.innerHTML = "";
      entry.appendChild(toggle);
      entry.appendChild(details);
    }

    devotionalList.appendChild(entry);
  });

  // Hamburger Menu for mobile
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});