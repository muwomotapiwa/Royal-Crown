document.addEventListener("DOMContentLoaded", () => {
  const devotionals = [

              {
                id: 17,
                week: "Monday 14 July – Saturday 20 July 2025",
                title: "Faith That Moves Mountains",
                scripture: `Matthew 17:20 – "Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, ‘Move from here to there,’ and it will move. Nothing will be impossible for you."`,
                reflection: `Have you ever faced a situation so overwhelming that it felt like a mountain standing in your way? Jesus tells us that even the smallest amount of genuine faith can produce miraculous results. Mountains represent challenges, fears, doubts, or impossible circumstances—but God’s Word reminds us that faith activates heaven’s power.\n\nA mustard seed may be tiny, but it carries the potential for exponential growth when nurtured. The same goes for our faith. It doesn’t have to be huge—it just needs to be real, rooted in trust, and connected to God’s promise.\n\nWhat matters most is not the size of your faith, but the greatness of the One you place it in. With God, even the immovable can shift.`,
                prayer: `Lord Jesus,\nThank You for the reminder that faith—even as small as a mustard seed—is powerful when placed in You. Strengthen my heart to believe in the impossible, to trust You even when I don’t see the outcome, and to speak life over every obstacle I face. Teach me to grow in confidence and expectation, knowing You are faithful. In Your mighty name I pray, Amen.`,
                contemplation: `- What mountain are you currently facing that feels immovable?\n- Have you been trying to conquer it alone, or are you trusting God with it?\n- How can you water and grow your mustard-seed faith this week?`,
                action: `Write down one "mountain" you’re believing God to move. Each day this week, pray over it, speak the Word of God concerning it, and declare in faith that it will be moved. Don’t wait to see the outcome—thank God in advance.`,
                closing: `Your faith may be small, but your God is mighty. Keep believing, keep praying, and keep speaking to those mountains. They will move.`,
                audio: "assets/audio/FaithThatMovesMountains.mp3",
                isCurrent: true
              },

              {
                id: 16,
                week: "Monday 7 July – Saturday 12 July 2025",
                title: "Call on the Name of Jesus",
                scripture: `Romans 10:13 – "Everyone who calls on the name of the Lord will be saved."`,
                reflection: `In our busy, often overwhelming lives, it can be easy to forget the power and comfort found in simply calling on the name of Jesus. When we face trials, uncertainties, or moments of weakness, turning to Jesus in prayer is our greatest hope and strength. His name carries authority, love and grace that can transform any situation.\n\nThe act of calling on Jesus is more than just uttering His name; it’s a heartfelt cry of faith, trust and surrender. It acknowledges that we need Him and that His power is greater than any problem we face. When we call on His name, we invite His presence into our circumstances, allowing His peace to reign in our hearts.`,
                prayer: `Jesus, I call on Your name today. You are my refuge and strength, my Savior and friend. Help me to remember that in every moment of need, I can turn to You. Thank You for Your unfailing love and the promise of salvation. May I always find comfort in calling on Your name, knowing that You hear me and answer according to Your perfect will. Amen.`,
                contemplation: `- What situations are currently overwhelming you? Have you paused to call on Jesus in those moments?\n- What does it mean to you personally to trust in the power of His name?`,
                action: `Today, whenever you feel overwhelmed or in need, pause and call on Jesus by name. Trust that He hears you and is with you. Let His name be a source of hope and peace in your life.`,
                closing: `His name is power. His name is peace. Call on Jesus this week with confidence and let His presence strengthen you in every moment.`,
                audio: "assets/audio/CallOnTheNameOfJesus.mp3",
                isCurrent: false
                },

              {
                id: 15,
                week: "Monday 30 June – Saturday 5 July 2025",
                title: "Nurturing a Heart Willing to be Rebuked",
                scripture: `Proverbs 12:1 – "Whoever loves discipline loves knowledge, but whoever hates correction is foolish."`,
                reflection: `As we navigate our faith journey, embracing a spirit that is open to rebuke is crucial. This openness reflects a heart ready for correction and personal growth. God desires for us to deepen our wisdom and understanding, and part of that process is being receptive to guidance when we deviate from His will.\n\nHaving a rebukable spirit signifies humility and an eagerness to improve. Rather than reacting defensively when faced with criticism, we can choose to see such moments as valuable opportunities for growth. It requires bravery to acknowledge that we don’t have all the answers, and often, God’s direction comes through the insights of others—friends, family, or mentors.`,
                prayer: `Dear Lord, please help me develop a heart that welcomes correction. Teach me to embrace rebuke in love, understanding that it leads to my growth and a deeper comprehension of Your truths. Grant me the grace to respond humbly, letting Your wisdom steer my path. May I consistently seek to learn and evolve, transforming every rebuke into a stepping stone toward becoming more like Christ. Amen.`,
                contemplation: `- Reflect on your reactions to criticism. Are there specific areas where accepting correction is particularly challenging for you?\n- Think about reaching out to a trusted individual to request sincere feedback on an aspect of your life where you wish to grow.`,
                action: `This week, make a conscious effort to receive feedback with an open mind. When someone offers you constructive criticism, take a moment to pause before responding. Reflect on how this feedback might contribute to your growth, and remember to express gratitude for their forthrightness.`,
                closing: `A heart willing to be rebuked is not a symbol of weakness but rather a powerful indication of our strength and commitment to personal growth. Let us adopt this attitude as we draw nearer to God's heart.`,
                audio: "assets/audio/NurturingAHeartRebuked.mp3",
                isCurrent: false
              },
              {
              id: 14,
              week: "Monday 23 June – Saturday 28 June 2025",
              title: "Keep Believing in Yourself",
              scripture: `Philippians 4:13 – "I can do all things through Christ who strengthens me."`,
              reflection: `At times, life’s challenges can shake our confidence and make us doubt ourselves. In those moments, it’s vital to remember that you are intentionally created by God with purpose and strength. No matter how tough the circumstances, your faith and perseverance can see you through. Don’t give up on believing in yourself because God’s power is sufficient to strengthen you in every weakness.\n\nBelieving in yourself is also a way of trusting the divine plan God has for your life. Your talents, dreams, and purpose are not accidental—they are part of His perfect design. Lean on Him, who empowers you to face obstacles and grow stronger with each step forward.`,
              prayer: `Dear Heavenly Father, I thank You for the gift of life and the purpose You have placed within me. Help me to hold on to faith and confidence, especially when doubts try to creep in. Remind me that with You, all things are possible. Strengthen my belief in myself and in Your plan. Guide me to walk confidently in Your grace. In Jesus’ name, I pray. Amen.`,
              action: `**Encouragement:**\nAlways remember, your confidence is rooted in God’s belief in you. Keep trusting, keep believing, and keep moving ahead—because with Christ, nothing is impossible.`,
              isCurrent: false,
              audio: "assets/audio/KeepBelievingInYourself.mp3"
            }
             ,
            {
              id: 13,
              week: "Monday 16 June – Saturday 21 June 2025",
              title: "Believing in Yourself Against the Odds",
              scripture: `Philippians 4:13 (NIV) – "I can do all this through him who gives me strength."`,
              reflection: `Life often presents us with challenges that feel insurmountable. We may find ourselves facing situations where the odds seem stacked against us—be it in our personal lives, careers, or spiritual journeys. In these moments of despair, we must remind ourselves of the incredible power of belief. Believing in ourselves is not about being arrogant or overconfident; it is about recognizing our potential and infusing our hearts with the knowledge that we are capable of overcoming whatever comes our way.\n\nWhen we lean on God and trust in His strength, we find the courage to face obstacles head-on. Every challenge becomes an opportunity for growth, and every setback can be a stepping stone toward our goals. It's essential to cultivate self-belief rooted in faith, remembering that we are never alone in our struggles. God equips us with the strength we need to persevere, even when the path seems daunting.`,
              prayer: `Heavenly Father, help me to strengthen my belief in myself, even when faced with overwhelming odds. Remind me that through You, I have the strength to overcome any challenge. Instill in me the confidence to take bold steps forward, knowing that I am equipped with Your love and guidance. May I always turn to You for support and encouragement, trusting that I can achieve my dreams and fulfill my purpose. Amen.`,
              contemplation: `- Take a moment to reflect on areas in your life where you feel uncertain or challenged. What specific odds are you facing right now?\n- Consider how faith in God can transform your perspective on these challenges and empower you to move forward.`,
              action: `This week, identify one area of your life where you want to build more self-belief. Set a small, achievable goal related to this area. Each day, affirm your capability by reminding yourself of Philippians 4:13 and take one step toward accomplishing that goal.`,
              closing: `Believing in yourself against the odds is an act of faith. As you nurture this belief, remember that with God’s strength, there is no obstacle too great to overcome. Trust in His power, and embrace the journey ahead with confidence and hope.`,
              audio: "assets/audio/BelievingInYourself.mp3",
              isCurrent: false
            },
            {
              id: 12,
              week: "Monday 9 June – Saturday 14 June 2025",
              title: "Be Heavenly Conscious",
              scripture: `"But seek first his kingdom and his righteousness, and all these things will be given to you as well." — Matthew 6:33 (NIV)`,
              reflection: `In our daily lives, it's easy to become consumed with the temporary concerns of this world—our responsibilities, worries, ambitions, and distractions. While these are part of life, Jesus reminds us in Matthew 6:33 to prioritize seeking God's kingdom above all else. Being heavenly conscious means aligning our thoughts, desires, and actions with eternal values rather than just earthly pursuits.\n\nWhen we focus on heavenly things, our perspective shifts. We begin to see beyond the immediate, understanding that our true home and purpose are found in God's eternal kingdom. This consciousness influences how we handle challenges, relationships, and opportunities—knowing that our lives are part of a larger divine plan.`,
              prayer: `Heavenly Father, help me to be conscious of Your kingdom in every aspect of my life. Open my eyes to see beyond the temporary and focus on what truly matters—living according to Your will. May my thoughts be aligned with heavenly values, and may my actions reflect Your love and righteousness. Keep me rooted in Your eternal perspective, so I can walk confidently knowing I am part of Your divine plan. In Jesus' name, I pray. Amen.`,
              action: `**Application:**\n- What are my thoughts most centered on—earthly concerns or heavenly realities?\n- How can I intentionally bring my focus back to God's kingdom throughout my day?\n- In what ways can I reflect heavenly consciousness in my interactions and decisions?`,
              closing: `Remember, being heavenly conscious is a daily choice—an ongoing commitment to keep our hearts and minds fixed on God's eternal truths. Let this awareness guide you and fill your life with purpose and peace.`,
              audio: "assets/audio/BeHeavenlyConscious.mp3",
              isCurrent: false
            },
            {
              id: 11,
              week: "Monday 02 June – Saturday 07 June 2025",
              title: "You Are Not Created to Suffer",
              scripture: `"For I consider that the sufferings of this present time are not worth comparing with the glory that will be revealed in us." — Romans 8:18 (NIV)`,
              reflection: `Many of us face trials, pain, and hardships that can feel overwhelming and unending. It’s natural to wonder why we must experience suffering or to question if there’s a purpose behind our pain. However, as followers of Christ, we are reminded in Scripture that our suffering is temporary and does not define our destiny.\n\nGod created us with purpose and intention. His plan for each of us includes hope, healing, and victory—not lifelong suffering. The pain we endure can be a part of our growth, refining us and drawing us closer to Him. But ultimately, God's promise is that glory, peace, and eternal joy await us—far outweighing any difficulty we face now.\n\nRemember, you are not created to suffer forever. Your Heavenly Father sees your pain, understands your struggles, and has prepared a future filled with hope and restoration. Trust in His love and His promise that better days are ahead.`,
              prayer: `Heavenly Father, thank You for creating me with purpose and for the hope I have in You. I acknowledge the pain and struggles I face, but I choose to trust Your promise that I am not created to suffer forever. Please strengthen me in my times of difficulty and remind me of the glory that awaits me in You. Fill my heart with peace, hope, and assurance of Your loving plan for my life. Help me to keep my eyes fixed on You, knowing that You are working all things together for good. In Jesus’ name, I pray. Amen.`,
              action: `**Application:**\n- Remind yourself of God's promise of future glory and eternal joy.\n- Speak words of faith over your situation, declaring that this moment is temporary.\n- Trust that God's love is greater than any pain, and He is working behind the scenes for your good.`,
              closing: `Remember, you were created to live in victory—not suffering. Hold onto hope, and let God's truth uplift you today.`,
              audio: "assets/audio/YouAreNotCreatedToSuffer.mp3",
              isCurrent: false
            },
            {
              id: 10,
              week: "Monday 26 May – Saturday 30 May 2025",
              title: "Take Charge of Your Destiny",
              scripture: `Proverbs 16:3 – "Commit your works to the Lord, and your thoughts will be established."\nJeremiah 29:11 – "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."`,
              reflection: `The phrase “Take charge of your destiny” is a powerful reminder that your life is not merely happening to you; you are called to be an active participant in shaping your future. God has given you authority, wisdom, and responsibility to make choices that align with His divine purpose for your life.\n\nTaking charge doesn’t mean trying to control everything on your own, but rather partnering with God—trusting His plans, seeking His guidance, and intentionally moving forward in faith. Your destiny is a journey that God has already designed with hope, purpose, and promise. Your role is to align your actions with His will and step into the path He has prepared.`,
              contemplation: `**How to Take Charge of Your Destiny:**\n- Seek God's Guidance: Regularly pray and ask for His direction in your decisions.\n- Believe in God’s Promises: Trust that His plans for you are good and full of hope.\n- Make Intentional Choices: Be deliberate about your actions, attitudes, and priorities.\n- Declare Your Faith: Speak life and purpose over your future, knowing God is with you.\n- Act with Courage: Step out in faith even when the way seems uncertain.`,
              action: `Today is an opportunity to take responsibility for your life’s direction. Commit your plans to God, trust in His promises, and move forward with confidence. Remember, you are not alone—God is with you, guiding your steps and empowering you to fulfill your divine destiny.`,
              prayer: `Father, I thank You for the incredible plans You have for my life. Today, I choose to take charge of my destiny by trusting You completely. Help me to seek Your guidance, make wise decisions, and walk in faith. Give me courage to pursue the purpose You have set before me. I surrender my plans to You, knowing You will establish my steps and lead me into a future filled with hope and promises. In Jesus’ name, I pray. Amen.`,
              closing: `Your destiny is in your hands, but it is empowered and guided by God. Take charge today, trusting in His divine purpose for your life.`,
              audio: "assets/audio/TakeChargeOfYourDestiny.mp3",
              isCurrent: false
            },    
          {
          id: 9,
          week: "Monday 19 May – Saturday 24 May 2025",
          title: "You Are Created to Dominate",
          scripture: `Genesis 1:28 – "God blessed them, and God said to them, ‘Be fruitful and multiply; fill the earth and subdue it, and have dominion over the fish of the sea, over the birds of the air, and over every living thing that moves on the earth.’"`,
          reflection: `The words “You are created to dominate” may stand out because of their strong tone, but in the biblical context, they reveal a divine purpose rooted in authority, responsibility, and stewardship. The word “dominate” here is closely related to “subdue” and “have dominion,” which signifies exercising God-given authority over creation, not exploiting or oppressing it.\n\nGod’s original design for humanity was to partner with Him—to rule and steward the earth with wisdom, love, and integrity. This divine mandate empowers us to shape our environments positively, to bring order out of chaos, and to fulfill our purpose in God's grand design.`,
          contemplation: `**Understanding “Dominate”:**\nTo dominate, in God's intention, is to exercise authority on His behalf, reflecting His sovereignty. It is about taking responsibility, using our gifts, and influencing our surroundings for good. It’s about being a force for righteousness, justice, and love in every area of life.`,
          action: `**Application:**\n- Embrace your God-given authority to influence your world positively.\n- Recognize that your dominion is rooted in God's power working through you.\n- Use your influence to bring about good, to protect, nurture, and uplift others.\n- Remember, true dominance is exercised with humility and a heart aligned with God's purposes.`,
          prayer: `Lord God, thank You for creating me with authority and purpose. Help me to understand what it means to dominate in a way that honors You. Fill me with wisdom and strength to govern my life and surroundings responsibly. May I exercise my authority to bring blessing, order, and righteousness wherever I go. Teach me to lead with love and humility, reflecting Your sovereignty in all I do. In Jesus’ name, I pray, Amen.`,
          closing: `You are created to dominate—not in control for selfish gain, but to influence and steward God's creation according to His divine plan. Walk confidently in your God-given authority today.`,
          audio: "assets/audio/YouAreCreatedToDominate.mp3",
          isCurrent: false
        },
        {
        id: 8,
        week: "Monday 12 May – Saturday 17 May 2025",
        title: "Cultivating a Thirst for Change",
        scripture: `“Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!” - 2 Corinthians 5:17 (NIV)`,
        reflection: `In our ever-evolving world, the Christian life often invites us to welcome transformation. The idea of cultivating a thirst for change resonates powerfully with our aspiration for spiritual growth and character development. Just as our physical bodies require sustenance, our souls yearn for renewal, growth, and the chance to become more aligned with Christ.

      Having a thirst for change means identifying the areas in our lives that need God’s healing touch. It involves facing our shortcomings, struggles, and our need for divine help. While the prospect of change can feel overwhelming, it is precisely through such transformations that we come to experience the depth of God’s power and love.`,
        action: `**Take Action:** This week, focus on one specific area in your life where you desire change. Write it down, pray over it consistently, and seek small steps you can take towards this transformation.

      **Seek Support:** Share your goal for change with a trusted friend or mentor. Invite them to encourage you and hold you accountable as you pursue your growth.`,
        prayer: `Heavenly Father,  
      I approach You with a heart open to transformation. Help me to see the areas in my life where I require Your renewing touch. Instill in me a deep hunger for growth that drives me to seek You every day. Let me accept the newness of life that You offer and release anything that holds me back. Cleanse my heart and renew my spirit that I may manifest Your love and grace. Lead me on this journey, and nurture my trust in the wonderful changes You are bringing into my life. In Jesus’ name, I pray. Amen.`,
        contemplation: `- What aspects of your life are you feeling prompted to transform? Are there certain habits, mindsets, or relationships you could reexamine?
      - What does it mean to you to be a new creation in Christ? Each day provides a new opportunity to release the past and embrace the fresh beginnings that Christ offers us.`,
        isCurrent: false,
        audio: "assets/audio/12MayTo17May2025.mp3"
      },    
      {
      id: 7,
      week: "Monday 5 May – Saturday 10 May 2025",
      title: "You Will Testify",
      scripture: `“And they overcame him by the blood of the Lamb and by the word of their testimony, and they loved not their lives unto the death.” — Revelation 12:11 (NKJV)`,
      reflection: `God has promised that you will testify of His goodness, His faithfulness, and His mighty works in your life. Your testimony is a powerful tool that not only brings glory to God but also encourages others to trust in His divine power. No matter what you are going through right now, hold on to the assurance that your breakthrough and your story of victory are on the way. Your season of testimony is near.`,
      action: `**Key Points:**\n\n1. **Trust in God’s Timing:**\nSometimes, the waiting period is tough, but remember that God’s timing is perfect. Your testimony is being crafted behind the scenes, and soon, you will share it with joy. Habakkuk 2:3 reminds us that “the vision is yet for an appointed time.”\n\n2. **Stand Firm in Faith:**\nEven before you see the evidence, declare that you will testify. Faith is the evidence of things hoped for (Hebrews 11:1). Speak words of victory and gratitude, knowing that God is working things out for your good.\n\n3. **Share Your Testimony:**\nYour story can inspire others. When God delivers you, be quick to testify and give Him all the glory. Revelation 19:10 says that the testimony of Jesus is the spirit of prophecy—your testimony can also declare what God is about to do in others’ lives.\n\n4. **Celebrate the Testimony Ahead of Time:**\nPraise God in advance for what He is about to do. Your faith-filled praise sets the stage for your testimony to manifest.`,
      prayer: `Father, I thank You because I know I will testify of Your goodness. Help me to trust in Your perfect timing and to stand firm in faith. Strengthen my heart to declare victory, even before I see it. May my life be a living testimony of Your grace, power, and love. Use my story to inspire others to believe in You. I give You all the glory in advance, for I know You are working all things together for my good. In Jesus’ name, I pray. Amen.`,
      contemplation: `Begin to declare today: “I will testify of the goodness of the Lord!” Write down your testimonies, big or small, and share them when the time comes. Trust in God's promise that your story of victory is on its way.`,
      isCurrent: false,
      audio: "assets/audio/YouWillTestify.mp3"
    },
    
    {
      id: 6,
      week: "Monday 28 April – Saturday 3 May 2025",
      title: "Cultivating a Winner’s Mindset",
      scripture: `“I press toward the goal for the prize of the upward call of God in Christ Jesus.” — Philippians 3:14 (NKJV)`,
      reflection: `Adopting a winner’s mindset starts with believing that we are more than conquerors through Christ who loves us (Romans 8:37). It involves viewing every obstacle as an opportunity for growth, learning, and moving closer to God's purpose for our lives. True winners do not dwell on failures or setbacks; instead, they keep their focus on the goal, remain persistent, and rely on God's strength to see them through.`,
      action: `**Key Points:**\n\n1. **Renew Your Mind:**\nTransform your thought patterns by meditating on God's promises and affirming victory over fears and doubts. Romans 12:2 teaches us not to conform to this world but to be changed by renewing our minds.\n\n2. **Cultivate Resilience:**\nA winner’s spirit is resilient. When challenges arise, see them as chances to demonstrate faith and perseverance. Philippians 4:13 affirms, “I can do all things through Christ who strengthens me.”\n\n3. **Maintain Focus on Your God-Given Goal:**\nKeep your eyes fixed on your divine calling. Hebrews 12:1-2 encourages us to run with endurance, looking unto Jesus, the author and finisher of our faith.\n\n4. **Rejoice in Small Victories:**\nEvery progress is a reason to celebrate and build momentum. Acknowledge God’s faithfulness in each small win as part of your journey.`,
      prayer: `Heavenly Father, thank You for the victory we have through Jesus Christ. Help us develop a winner’s mentality—one grounded in faith, resilience, and unwavering focus on Your promises. Empower us to move forward confidently, knowing that with You, we are more than conquerors. Remind us that our success ultimately rests in Your hands. In Jesus’ name, we pray. Amen.`,
      contemplation: `Today, renew your mind with the truth of God's Word. Declare aloud, “I am a winner because I am in Christ!” and step out in faith toward your goals. Trust that God's presence and strength are with you every step of the way.`,
      isCurrent: false,
      audio: "assets/audio/WinnersMindset.mp3"
    },    
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
      isCurrent: false
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
  const memoryVerse = document.getElementById("memory-verse");
  const searchBar = document.getElementById("searchBar");

  // Display memory verse from the current devotional
  const currentDevotional = devotionals.find(d => d.isCurrent);
  if (currentDevotional) {
    memoryVerse.innerHTML = `<div class="memory-verse"><strong>Memory Verse:</strong> ${currentDevotional.scripture}</div>`;
  }

  // Sort and render devotionals
  devotionals.sort((a, b) => b.id - a.id).forEach((devotional, index) => {
    const entry = document.createElement("div");
    entry.classList.add("devotional-entry");
    entry.style.setProperty('--i', index);

    const content = `
      <h3>${devotional.title}</h3>
      <p><strong>Week:</strong> ${devotional.week}</p>
      <blockquote>${devotional.scripture}</blockquote>
      <p><strong>Reflection:</strong> ${devotional.reflection}</p>
      ${devotional.prayer ? `<p><strong>Prayer:</strong> ${devotional.prayer}</p>` : ""}
      ${devotional.contemplation ? `<p><strong>Contemplation:</strong> ${devotional.contemplation}</p>` : ""}
      <p><strong>Action Step:</strong> ${devotional.action}</p>
      ${devotional.audio ? `<audio controls ${devotional.isCurrent ? 'preload="auto"' : ''}><source src="${devotional.audio}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ""}
      <div class="share-btn"><button onclick="navigator.share({ title: 'Weekly Devotional: ${devotional.title}', url: location.href })">📤 Share</button></div>
    `;

    if (devotional.isCurrent) {
      entry.innerHTML = content;
    } else {
      const toggle = document.createElement("button");
      toggle.innerHTML = `<span class="plus-icon">+</span> ${devotional.title} (${devotional.week})`;
      toggle.className = "accordion-button";

      const details = document.createElement("div");
      details.className = "accordion-content";
      details.innerHTML = content;

      toggle.addEventListener("click", () => {
        const open = details.classList.toggle("open");
        toggle.classList.toggle("active");
        toggle.querySelector(".plus-icon").textContent = open ? "–" : "+";
        if (open) details.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      entry.appendChild(toggle);
      entry.appendChild(details);
    }

    devotionalList.appendChild(entry);
  });

  // Search functionality
  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll(".devotional-entry").forEach((entry) => {
        entry.style.display = entry.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
      });
    });
  }

  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});