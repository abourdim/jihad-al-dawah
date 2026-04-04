/* جهاد الدعوة بين عجز الداخل وكيد الخارج — JIHAD OF DAWAH — app.js v2.0 */
/* Based on "Jihad al-Dawah bayna Ajz al-Dakhil wa Kayd al-Kharij" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'جهاد الدعوة',
    splashSub: 'بين عجز الداخل وكيد الخارج',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النحل ١٦: ١٢٥',
    tabHome: 'الرئيسية', tabTraits: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'بطاقات جهاد الدعوة',
    traitsDesc: '٢٠ بطاقة عن تحديات الدعوة الداخلية والخارجية — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن جهاد الدعوة — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي في جهاد الدعوة',
    progressDesc: 'تقدمك وإنجازاتك في رحلة فهم تحديات الدعوة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية المجاهد بالكلمة',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة عن تحديات الدعوة الداخلية والخارجية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Jihad of Dawah',
    splashSub: 'Between internal weakness and external plots',
    splashHint: 'tap to skip',
    sacredRef: 'Surah An-Nahl 16:125',
    tabHome: 'Home', tabTraits: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Dawah Jihad Cards',
    traitsDesc: '20 cards on internal and external dawah challenges — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of dawah jihad — 4 choices per question',
    progressTitle: 'My Dawah Jihad Journey',
    progressDesc: 'Your progress and achievements in understanding dawah challenges',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas of the Word Warrior',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards on internal and external dawah challenges',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Le Jihad de la Prédication',
    splashSub: "Entre la faiblesse interne et les complots externes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nahl 16:125',
    tabHome: 'Accueil', tabTraits: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: "Cartes du Jihad de la Da'wa",
    traitsDesc: "20 cartes sur les défis internes et externes de la da'wa — chacune avec un verset, un hadith et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: "Testez vos connaissances sur le jihad de la da'wa — 4 choix par question",
    progressTitle: "Mon Parcours du Jihad de la Da'wa",
    progressDesc: "Vos progrès et réalisations dans la compréhension des défis de la da'wa",
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Combattant par la Parole',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      "20 cartes sur les défis internes et externes de la da'wa",
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 DAWAH JIHAD CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🔗',
    ar:{title:'العجز الداخلي',desc:'أخطر ما يواجه الأمة هو العجز الداخلي الناتج عن الجهل والتفرق والكسل. قبل أن نلوم الأعداء يجب أن نصلح أنفسنا. الضعف الداخلي هو البوابة التي يدخل منها العدو.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'كيف أنتم إذا وقعت فيكم خمس: ما من قوم ظهرت فيهم الفاحشة إلا سُلِّط عليهم الطاعون — رواه ابن ماجه',action:'حدد نقطة ضعف في حياتك اليوم وابدأ في إصلاحها بدل أن تلوم الظروف',young:'ابدأ بنفسك! أصلح أخطاءك قبل أن تلوم غيرك 🔗'},
    en:{title:'Internal Weakness',desc:'The most dangerous thing facing the ummah is internal weakness stemming from ignorance, division, and laziness. Before blaming enemies, we must fix ourselves. Internal weakness is the gate through which enemies enter.',verse:'Indeed, Allah will not change the condition of a people until they change what is in themselves',verseRef:'Ar-Ra\'d 11',hadith:'How will you be when five things befall you: no people in whom immorality spreads except that plague is sent upon them — Ibn Majah',action:'Identify a weakness in your life today and begin fixing it instead of blaming circumstances',young:'Start with yourself! Fix your own mistakes before blaming others 🔗'},
    fr:{title:'La Faiblesse Interne',desc:"Le plus grand danger pour la oumma est la faiblesse interne résultant de l'ignorance, la division et la paresse. Avant de blâmer les ennemis, nous devons nous corriger. La faiblesse interne est la porte par laquelle l'ennemi entre.",verse:'Allah ne modifie pas l\'état d\'un peuple tant qu\'ils ne modifient pas ce qui est en eux-mêmes',verseRef:'Ar-Ra\'d 11',hadith:'Comment serez-vous lorsque cinq choses vous frapperont : aucun peuple où l\'immoralité se répand sans que la peste ne s\'abatte — Ibn Majah',action:"Identifiez une faiblesse dans votre vie aujourd'hui et commencez à la corriger au lieu de blâmer les circonstances",young:"Commence par toi-même ! Corrige tes erreurs avant de blâmer les autres 🔗"}
  },
  {
    id:2, emoji:'🕸️',
    ar:{title:'المؤامرات الخارجية',desc:'الأعداء يتآمرون على الإسلام بخطط محكمة تستهدف العقيدة والهوية والاقتصاد. الوعي بهذه المخططات ضروري لكن دون الوقوع في نظرية المؤامرة المشلّة.',verse:'وَلَا يَزَالُونَ يُقَاتِلُونَكُمْ حَتَّى يَرُدُّوكُمْ عَنْ دِينِكُمْ إِنِ اسْتَطَاعُوا',verseRef:'البقرة ٢١٧',hadith:'لتتبعن سنن من قبلكم شبراً بشبر وذراعاً بذراع — متفق عليه',action:'اقرأ عن التحديات التي تواجه الأمة اليوم وفكر في حلول عملية بدل الشكوى',young:'كن واعياً! تعرّف على التحديات التي تواجه المسلمين وفكر في حلول 🕸️'},
    en:{title:'External Plots',desc:'Enemies conspire against Islam with well-crafted plans targeting faith, identity, and economy. Awareness of these schemes is necessary but without falling into paralyzing conspiracy theories.',verse:'And they will continue to fight you until they turn you back from your religion, if they are able',verseRef:'Al-Baqarah 217',hadith:'You will follow the ways of those before you, span by span and cubit by cubit — Agreed upon',action:'Read about the challenges facing the ummah today and think of practical solutions instead of complaining',young:'Be aware! Learn about the challenges facing Muslims and think of solutions 🕸️'},
    fr:{title:'Les Complots Externes',desc:"Les ennemis conspirent contre l'Islam avec des plans bien élaborés ciblant la foi, l'identité et l'économie. La conscience de ces stratagèmes est nécessaire mais sans tomber dans la théorie du complot paralysante.",verse:'Et ils ne cesseront de vous combattre jusqu\'à vous détourner de votre religion, s\'ils le peuvent',verseRef:'Al-Baqarah 217',hadith:'Vous suivrez les voies de ceux avant vous, empan par empan et coudée par coudée — Unanimement reconnu',action:"Lisez sur les défis auxquels fait face la oumma aujourd'hui et pensez à des solutions pratiques au lieu de vous plaindre",young:"Sois conscient ! Apprends sur les défis des musulmans et pense à des solutions 🕸️"}
  },
  {
    id:3, emoji:'🧠',
    ar:{title:'الجهاد الفكري',desc:'الجهاد الفكري هو مواجهة الأفكار المنحرفة بالحجة والبرهان. العقل المسلم يجب أن يكون مسلحاً بالعلم والمنطق لمواجهة الشبهات والأفكار الهدامة.',verse:'وَجَاهِدْهُمْ بِهِ جِهَادًا كَبِيرًا',verseRef:'الفرقان ٥٢',hadith:'أفضل الجهاد كلمة حق عند سلطان جائر — رواه أبو داود',action:'اقرأ كتاباً فكرياً إسلامياً اليوم وتعلم كيف ترد على الشبهات بالعلم',young:'تعلم وفكّر! العلم هو أقوى سلاح ضد الأفكار الخاطئة 🧠'},
    en:{title:'Intellectual Jihad',desc:'Intellectual jihad means confronting deviant ideas with proof and evidence. The Muslim mind must be armed with knowledge and logic to face doubts and destructive ideologies.',verse:'And strive against them with it a great striving',verseRef:'Al-Furqan 52',hadith:'The best jihad is a word of truth before a tyrannical ruler — Abu Dawud',action:'Read an intellectual Islamic book today and learn how to respond to doubts with knowledge',young:'Learn and think! Knowledge is the strongest weapon against wrong ideas 🧠'},
    fr:{title:'Le Jihad Intellectuel',desc:"Le jihad intellectuel consiste à confronter les idées déviantes avec la preuve et l'évidence. L'esprit musulman doit être armé de savoir et de logique pour faire face aux doutes et aux idéologies destructrices.",verse:'Et lutte contre eux avec ceci d\'un grand jihad',verseRef:'Al-Furqan 52',hadith:'Le meilleur jihad est une parole de vérité devant un dirigeant tyrannique — Abu Dawud',action:"Lisez un livre intellectuel islamique aujourd'hui et apprenez comment répondre aux doutes par le savoir",young:"Apprends et réfléchis ! Le savoir est l'arme la plus forte contre les fausses idées 🧠"}
  },
  {
    id:4, emoji:'📚',
    ar:{title:'الجهاد التعليمي',desc:'التعليم هو الميدان الأول للجهاد الدعوي. بناء المناهج الصحيحة وتأهيل المعلمين وإنشاء المدارس الراقية هو استثمار في مستقبل الأمة.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'ساهم في تعليم شخص شيئاً مفيداً اليوم سواء في الدين أو الدنيا',young:'علّم صديقك شيئاً جديداً! التعليم من أعظم أعمال الخير 📚'},
    en:{title:'Educational Jihad',desc:'Education is the first field of dawah jihad. Building correct curricula, qualifying teachers, and establishing excellent schools is investing in the future of the ummah.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Contribute to teaching someone something beneficial today, whether in religion or worldly matters',young:'Teach your friend something new! Teaching is one of the greatest good deeds 📚'},
    fr:{title:'Le Jihad Éducatif',desc:"L'éducation est le premier champ du jihad de la da'wa. Construire des programmes corrects, qualifier les enseignants et établir d'excellentes écoles est un investissement dans l'avenir de la oumma.",verse:'Lis au nom de ton Seigneur qui a créé',verseRef:'Al-Alaq 1',hadith:'Quiconque emprunte un chemin cherchant le savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:"Contribuez à enseigner quelque chose de bénéfique à quelqu'un aujourd'hui, que ce soit en religion ou en matière mondaine",young:"Enseigne à ton ami quelque chose de nouveau ! Enseigner est l'un des plus grands bienfaits 📚"}
  },
  {
    id:5, emoji:'📡',
    ar:{title:'الجهاد الإعلامي',desc:'الإعلام ساحة معركة حقيقية. من يملك الإعلام يملك عقول الناس. المسلمون يحتاجون إعلاماً مهنياً قوياً يحمل رسالة الحق بأسلوب عصري جذاب.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'أنشئ محتوى إعلامياً إسلامياً مهنياً اليوم: مقال أو فيديو أو تصميم',young:'استخدم الإعلام لنشر الحق! اصنع فيديو أو رسمة عن الإسلام 📡'},
    en:{title:'Media Jihad',desc:'Media is a real battlefield. Whoever controls media controls people\'s minds. Muslims need strong professional media that carries the message of truth in an attractive modern style.',verse:'And prepare against them whatever you are able of strength',verseRef:'Al-Anfal 60',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Create professional Islamic media content today: an article, video, or design',young:'Use media to spread truth! Make a video or drawing about Islam 📡'},
    fr:{title:'Le Jihad Médiatique',desc:"Les médias sont un véritable champ de bataille. Celui qui contrôle les médias contrôle les esprits. Les musulmans ont besoin de médias professionnels forts portant le message de vérité dans un style moderne attrayant.",verse:'Et préparez contre eux tout ce que vous pouvez de force',verseRef:'Al-Anfal 60',hadith:'Transmettez de moi ne serait-ce qu\'un verset — Bukhari',action:"Créez du contenu médiatique islamique professionnel aujourd'hui : un article, une vidéo ou un design",young:"Utilise les médias pour répandre la vérité ! Fais une vidéo ou un dessin sur l'Islam 📡"}
  },
  {
    id:6, emoji:'💰',
    ar:{title:'الاستقلال الاقتصادي',desc:'الاستقلال الاقتصادي شرط أساسي لحرية الدعوة. الأمة التي تعتمد على غيرها اقتصادياً لا تستطيع أن تكون حرة في قراراتها ودعوتها.',verse:'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ',verseRef:'الملك ١٥',hadith:'اليد العليا خير من اليد السفلى — متفق عليه',action:'فكر في مشروع اقتصادي يخدم الأمة واتخذ خطوة عملية نحو تحقيقه اليوم',young:'تعلم كيف تكون مستقلاً! الاعتماد على النفس قوة 💰'},
    en:{title:'Economic Independence',desc:'Economic independence is a fundamental condition for the freedom of dawah. A nation that depends on others economically cannot be free in its decisions and its dawah.',verse:'It is He who made the earth subservient to you, so walk among its paths and eat of His provision',verseRef:'Al-Mulk 15',hadith:'The upper hand is better than the lower hand — Agreed upon',action:'Think of an economic project that serves the ummah and take a practical step toward achieving it today',young:'Learn how to be independent! Self-reliance is strength 💰'},
    fr:{title:"L'Indépendance Économique",desc:"L'indépendance économique est une condition fondamentale pour la liberté de la da'wa. Une nation qui dépend des autres économiquement ne peut être libre dans ses décisions et sa prédication.",verse:'C\'est Lui qui vous a soumis la terre, parcourez-en les sentiers et mangez de ce qu\'Il vous fournit',verseRef:'Al-Mulk 15',hadith:'La main qui donne est meilleure que la main qui reçoit — Unanimement reconnu',action:"Pensez à un projet économique qui sert la oumma et faites un pas pratique vers sa réalisation aujourd'hui",young:"Apprends à être indépendant ! L'autonomie est une force 💰"}
  },
  {
    id:7, emoji:'🛡️',
    ar:{title:'المقاومة الثقافية',desc:'الغزو الثقافي أخطر من الغزو العسكري لأنه يسلب الهوية دون مقاومة. الحفاظ على الهوية الإسلامية مع الانفتاح على العالم هو التوازن المطلوب.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'من تشبه بقوم فهو منهم — رواه أبو داود',action:'عزز هويتك الإسلامية اليوم: تعلم جانباً من تراثك وشاركه مع الآخرين',young:'كن فخوراً بهويتك! تعرّف على ثقافتك الإسلامية الجميلة 🛡️'},
    en:{title:'Cultural Resistance',desc:'Cultural invasion is more dangerous than military invasion because it strips identity without resistance. Preserving Islamic identity while being open to the world is the required balance.',verse:'And the Jews and Christians will never be pleased with you until you follow their way',verseRef:'Al-Baqarah 120',hadith:'Whoever imitates a people is one of them — Abu Dawud',action:'Strengthen your Islamic identity today: learn an aspect of your heritage and share it with others',young:'Be proud of your identity! Learn about your beautiful Islamic culture 🛡️'},
    fr:{title:'La Résistance Culturelle',desc:"L'invasion culturelle est plus dangereuse que l'invasion militaire car elle dépouille l'identité sans résistance. Préserver l'identité islamique tout en étant ouvert au monde est l'équilibre requis.",verse:'Et les juifs et les chrétiens ne seront jamais satisfaits de toi jusqu\'à ce que tu suives leur voie',verseRef:'Al-Baqarah 120',hadith:'Quiconque imite un peuple en fait partie — Abu Dawud',action:"Renforcez votre identité islamique aujourd'hui : apprenez un aspect de votre patrimoine et partagez-le avec les autres",young:"Sois fier de ton identité ! Apprends sur ta belle culture islamique 🛡️"}
  },
  {
    id:8, emoji:'👦',
    ar:{title:'الشباب والتحديات',desc:'الشباب المسلم يواجه تحديات ضخمة من الانحراف الفكري والأخلاقي. تحصين الشباب بالعلم والإيمان والقدوة الحسنة أولوية قصوى.',verse:'إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',verseRef:'الكهف ١٣',hadith:'سبعة يظلهم الله في ظله: شاب نشأ في عبادة الله — متفق عليه',action:'تواصل مع شاب مسلم اليوم وشجعه على التمسك بدينه وتطوير نفسه',young:'أنتَ المستقبل! تمسّك بدينك وطوّر نفسك كل يوم 👦'},
    en:{title:'Youth and Challenges',desc:'Muslim youth face enormous challenges from intellectual and moral deviation. Fortifying youth with knowledge, faith, and good examples is a top priority.',verse:'Indeed, they were youths who believed in their Lord, and We increased them in guidance',verseRef:'Al-Kahf 13',hadith:'Seven will be shaded by Allah: a youth who grew up in the worship of Allah — Agreed upon',action:'Reach out to a young Muslim today and encourage them to hold on to their religion and develop themselves',young:'You are the future! Hold on to your religion and develop yourself every day 👦'},
    fr:{title:'La Jeunesse et les Défis',desc:"La jeunesse musulmane fait face à d'énormes défis de déviation intellectuelle et morale. Fortifier la jeunesse avec le savoir, la foi et le bon exemple est une priorité absolue.",verse:'Ce sont des jeunes gens qui croyaient en leur Seigneur et Nous les avons guidés davantage',verseRef:'Al-Kahf 13',hadith:"Sept seront ombragés par Allah : un jeune qui a grandi dans l'adoration d'Allah — Unanimement reconnu",action:"Contactez un jeune musulman aujourd'hui et encouragez-le à s'accrocher à sa religion et à se développer",young:"Tu es l'avenir ! Accroche-toi à ta religion et développe-toi chaque jour 👦"}
  },
  {
    id:9, emoji:'👩',
    ar:{title:'المرأة في الدعوة',desc:'المرأة المسلمة شريكة في الدعوة لا تابعة. تاريخ الإسلام مليء بنساء عالمات وداعيات وقائدات. تهميش المرأة خسارة لنصف طاقة الأمة.',verse:'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ',verseRef:'التوبة ٧١',hadith:'النساء شقائق الرجال — رواه أبو داود',action:'ادعم مشروعاً دعوياً تقوده امرأة مسلمة اليوم أو شجع فتاة على التعلم',young:'البنات والأولاد متساوون في الخير! الجميع يمكنه المساهمة في الدعوة 👩'},
    en:{title:'Women in Dawah',desc:'The Muslim woman is a partner in dawah, not a follower. Islamic history is full of female scholars, callers, and leaders. Marginalizing women is a loss of half the ummah\'s energy.',verse:'The believing men and believing women are allies of one another',verseRef:'At-Tawbah 71',hadith:'Women are the twin halves of men — Abu Dawud',action:'Support a dawah project led by a Muslim woman today or encourage a girl to pursue learning',young:'Girls and boys are equal in good! Everyone can contribute to dawah 👩'},
    fr:{title:'La Femme dans la Prédication',desc:"La femme musulmane est une partenaire dans la da'wa, pas une subalterne. L'histoire de l'Islam est pleine de femmes savantes, prédicatrices et dirigeantes. Marginaliser les femmes est une perte de la moitié de l'énergie de la oumma.",verse:'Les croyants et les croyantes sont alliés les uns des autres',verseRef:'At-Tawbah 71',hadith:'Les femmes sont les moitiés jumelles des hommes — Abu Dawud',action:"Soutenez un projet de da'wa dirigé par une femme musulmane aujourd'hui ou encouragez une fille à apprendre",young:"Les filles et les garçons sont égaux dans le bien ! Tout le monde peut contribuer à la da'wa 👩"}
  },
  {
    id:10, emoji:'🎓',
    ar:{title:'دور العلماء',desc:'العلماء ورثة الأنبياء وهم قادة الأمة الحقيقيون. عندما يتخلى العلماء عن دورهم تضيع الأمة. العالم الحق يقول الحق ولا يخاف لومة لائم.',verse:'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',verseRef:'فاطر ٢٨',hadith:'العلماء ورثة الأنبياء — رواه أبو داود',action:'استمع لدرس عالم ربّاني اليوم وطبّق ما تعلمته في حياتك',young:'احترم العلماء وتعلم منهم! العلماء هم من ينير لنا الطريق 🎓'},
    en:{title:'The Role of Scholars',desc:'Scholars are the heirs of the prophets and the true leaders of the ummah. When scholars abandon their role, the ummah is lost. A true scholar speaks the truth without fearing blame.',verse:'Only those who have knowledge truly fear Allah among His servants',verseRef:'Fatir 28',hadith:'Scholars are the heirs of the prophets — Abu Dawud',action:'Listen to a lesson from a righteous scholar today and apply what you learned in your life',young:'Respect scholars and learn from them! Scholars light the way for us 🎓'},
    fr:{title:'Le Rôle des Savants',desc:"Les savants sont les héritiers des prophètes et les vrais leaders de la oumma. Quand les savants abandonnent leur rôle, la oumma est perdue. Le vrai savant dit la vérité sans craindre le blâme.",verse:'Seuls les savants craignent vraiment Allah parmi Ses serviteurs',verseRef:'Fatir 28',hadith:'Les savants sont les héritiers des prophètes — Abu Dawud',action:"Écoutez un cours d'un savant pieux aujourd'hui et appliquez ce que vous avez appris dans votre vie",young:"Respecte les savants et apprends d'eux ! Les savants éclairent notre chemin 🎓"}
  },
  {
    id:11, emoji:'🏛️',
    ar:{title:'بناء المؤسسات',desc:'العمل الفردي لا يكفي لمواجهة التحديات الكبرى. الأمة بحاجة لمؤسسات قوية في التعليم والإعلام والاقتصاد والبحث العلمي.',verse:'إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يُقَاتِلُونَ فِي سَبِيلِهِ صَفًّا كَأَنَّهُمْ بُنْيَانٌ مَرْصُوصٌ',verseRef:'الصف ٤',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'انضم لمؤسسة إسلامية أو ساهم في تأسيس واحدة في مجال تخصصك',young:'اعمل مع فريق! المؤسسات القوية تبني أمة قوية 🏛️'},
    en:{title:'Building Institutions',desc:'Individual work is not enough to face major challenges. The ummah needs strong institutions in education, media, economy, and scientific research.',verse:'Indeed, Allah loves those who fight in His cause in a row as though they are a solid cemented structure',verseRef:'As-Saff 4',hadith:'Allah\'s hand is with the community — Tirmidhi',action:'Join an Islamic institution or contribute to establishing one in your field of expertise',young:'Work with a team! Strong institutions build a strong ummah 🏛️'},
    fr:{title:'Construire des Institutions',desc:"Le travail individuel ne suffit pas pour faire face aux grands défis. La oumma a besoin d'institutions fortes dans l'éducation, les médias, l'économie et la recherche scientifique.",verse:'Allah aime ceux qui combattent dans Son sentier en rang comme s\'ils étaient un édifice renforcé',verseRef:'As-Saff 4',hadith:'La main d\'Allah est avec la communauté — Tirmidhi',action:"Rejoignez une institution islamique ou contribuez à en établir une dans votre domaine d'expertise",young:"Travaille en équipe ! Des institutions fortes construisent une oumma forte 🏛️"}
  },
  {
    id:12, emoji:'🌍',
    ar:{title:'التعاون الدولي',desc:'الدعوة تحتاج تعاوناً دولياً بين المسلمين في كل القارات. تبادل الخبرات والموارد يقوي الأمة ككل. العمل المنفرد يضعف الجميع.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'تواصل مع مسلم من بلد آخر اليوم وتبادل الأفكار والخبرات',young:'تعرّف على مسلمين من بلدان مختلفة! التعاون يجعلنا أقوى 🌍'},
    en:{title:'International Cooperation',desc:'Dawah needs international cooperation among Muslims across all continents. Exchanging expertise and resources strengthens the ummah as a whole. Working alone weakens everyone.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Connect with a Muslim from another country today and exchange ideas and experiences',young:'Get to know Muslims from different countries! Cooperation makes us stronger 🌍'},
    fr:{title:'La Coopération Internationale',desc:"La da'wa a besoin de coopération internationale entre les musulmans sur tous les continents. Échanger les expertises et les ressources renforce la oumma dans son ensemble. Travailler seul affaiblit tout le monde.",verse:'Et tenez fermement au lien d\'Allah tous ensemble et ne vous divisez pas',verseRef:'Al Imran 103',hadith:'Le croyant pour le croyant est comme un édifice dont les parties se soutiennent — Unanimement reconnu',action:"Connectez-vous avec un musulman d'un autre pays aujourd'hui et échangez idées et expériences",young:"Fais connaissance avec des musulmans de différents pays ! La coopération nous rend plus forts 🌍"}
  },
  {
    id:13, emoji:'🔍',
    ar:{title:'النقد الذاتي',desc:'النقد الذاتي الصادق هو أول خطوة نحو الإصلاح. الأمة التي لا تنتقد نفسها تكرر أخطاءها. النقد البنّاء ليس خيانة بل هو أعلى درجات الحب.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ',verseRef:'الحشر ١٨',hadith:'حاسبوا أنفسكم قبل أن تُحاسبوا — أثر عمر',action:'مارس النقد الذاتي اليوم: ما هي أخطاؤك وكيف يمكنك إصلاحها؟',young:'كن صادقاً مع نفسك! اعترف بأخطائك وحاول إصلاحها 🔍'},
    en:{title:'Self-Criticism',desc:'Honest self-criticism is the first step toward reform. A nation that does not critique itself repeats its mistakes. Constructive criticism is not betrayal but the highest form of love.',verse:'O you who believe, fear Allah and let every soul look to what it has put forth for tomorrow',verseRef:'Al-Hashr 18',hadith:'Hold yourselves accountable before you are held accountable — Umar\'s saying',action:'Practice self-criticism today: what are your mistakes and how can you fix them?',young:'Be honest with yourself! Admit your mistakes and try to fix them 🔍'},
    fr:{title:"L'Autocritique",desc:"L'autocritique honnête est le premier pas vers la réforme. Une nation qui ne se critique pas répète ses erreurs. La critique constructive n'est pas une trahison mais la plus haute forme d'amour.",verse:'Ô vous qui croyez, craignez Allah et que chaque âme regarde ce qu\'elle a avancé pour demain',verseRef:'Al-Hashr 18',hadith:'Demandez-vous des comptes avant qu\'on ne vous en demande — Parole d\'Umar',action:"Pratiquez l'autocritique aujourd'hui : quelles sont vos erreurs et comment pouvez-vous les corriger ?",young:"Sois honnête avec toi-même ! Admets tes erreurs et essaie de les corriger 🔍"}
  },
  {
    id:14, emoji:'🔄',
    ar:{title:'التجديد والإصلاح',desc:'التجديد في الدين ضرورة ولكنه يختلف عن التبديل. التجديد يعني فهم الثوابت وتطبيقها بأسلوب يناسب العصر. المجدد يحفظ الأصل ويطور الأسلوب.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'إن الله يبعث لهذه الأمة على رأس كل مائة سنة من يجدد لها دينها — رواه أبو داود',action:'فكر في طريقة مبتكرة لتقديم قيمة إسلامية بأسلوب عصري يناسب الشباب',young:'فكر بطريقة جديدة! الإسلام ثابت المبادئ متجدد الأساليب 🔄'},
    en:{title:'Renewal and Reform',desc:'Renewal in religion is necessary but differs from alteration. Renewal means understanding constants and applying them in a way that suits the era. A renewer preserves the essence and develops the method.',verse:'Invite to the way of your Lord with wisdom and good instruction',verseRef:'An-Nahl 125',hadith:'Allah sends to this ummah at the head of every century someone who renews its religion — Abu Dawud',action:'Think of an innovative way to present an Islamic value in a modern style that suits youth',young:'Think in new ways! Islam has firm principles with renewed methods 🔄'},
    fr:{title:'Le Renouvellement et la Réforme',desc:"Le renouvellement dans la religion est nécessaire mais diffère de l'altération. Le renouvellement signifie comprendre les constantes et les appliquer d'une manière qui convient à l'époque. Le rénovateur préserve l'essence et développe la méthode.",verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Allah envoie à cette oumma à la tête de chaque siècle quelqu\'un qui renouvelle sa religion — Abu Dawud',action:"Pensez à une manière innovante de présenter une valeur islamique dans un style moderne adapté aux jeunes",young:"Pense de nouvelles manières ! L'Islam a des principes fermes avec des méthodes renouvelées 🔄"}
  },
  {
    id:15, emoji:'💻',
    ar:{title:'الدعوة الرقمية',desc:'العالم الرقمي هو الميدان الأكبر للدعوة اليوم. ملايين الشباب يقضون ساعاتهم أمام الشاشات. المحتوى الرقمي الإسلامي الجذاب ضرورة عصرية.',verse:'بَلِّغْ مَا أُنْزِلَ إِلَيْكَ مِنْ رَبِّكَ',verseRef:'المائدة ٦٧',hadith:'الدال على الخير كفاعله — رواه مسلم',action:'أنشئ محتوى رقمياً إسلامياً جذاباً اليوم وانشره على منصات التواصل',young:'استخدم الإنترنت لنشر الخير! محتوى إسلامي ممتع يصل لملايين 💻'},
    en:{title:'Digital Dawah',desc:'The digital world is the largest field for dawah today. Millions of youth spend their hours in front of screens. Attractive Islamic digital content is a modern necessity.',verse:'Deliver what has been revealed to you from your Lord',verseRef:'Al-Maidah 67',hadith:'The one who guides to good is like the one who does it — Muslim',action:'Create attractive Islamic digital content today and share it on social media platforms',young:'Use the internet to spread good! Fun Islamic content reaches millions 💻'},
    fr:{title:'La Prédication Numérique',desc:"Le monde numérique est le plus grand champ de da'wa aujourd'hui. Des millions de jeunes passent leurs heures devant les écrans. Un contenu numérique islamique attrayant est une nécessité moderne.",verse:'Transmets ce qui t\'a été révélé de ton Seigneur',verseRef:'Al-Maidah 67',hadith:'Celui qui guide vers le bien est comme celui qui le fait — Muslim',action:"Créez du contenu numérique islamique attrayant aujourd'hui et partagez-le sur les plateformes sociales",young:"Utilise internet pour répandre le bien ! Du contenu islamique amusant atteint des millions 💻"}
  },
  {
    id:16, emoji:'✊',
    ar:{title:'المقاومة السلمية',desc:'المقاومة السلمية بالكلمة والعلم والعمل أقوى وأبقى من العنف. الحجة البالغة تهزم السيف. الدعوة بالحكمة والموعظة الحسنة هي منهج القرآن.',verse:'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ',verseRef:'فصلت ٣٤',hadith:'إن الله يؤيد هذا الدين بالرجل الفاجر — متفق عليه',action:'واجه التحديات اليوم بالحكمة والعلم والصبر بدل الغضب والعنف',young:'استخدم الكلمة الطيبة! الحوار أقوى من الصراخ ✊'},
    en:{title:'Peaceful Resistance',desc:'Peaceful resistance through word, knowledge, and action is stronger and more lasting than violence. A strong argument defeats the sword. Dawah with wisdom and good instruction is the Quranic method.',verse:'Repel evil with that which is better, and thereupon the one with whom you had enmity will become a devoted friend',verseRef:'Fussilat 34',hadith:'Allah supports this religion even through a sinful person — Agreed upon',action:'Face challenges today with wisdom, knowledge, and patience instead of anger and violence',young:'Use kind words! Dialogue is stronger than shouting ✊'},
    fr:{title:'La Résistance Pacifique',desc:"La résistance pacifique par la parole, le savoir et l'action est plus forte et plus durable que la violence. Un argument solide vainc l'épée. La da'wa par la sagesse et la bonne exhortation est la méthode coranique.",verse:'Repousse le mal par ce qui est meilleur, et voilà que celui avec qui tu avais une inimitié devient un ami dévoué',verseRef:'Fussilat 34',hadith:'Allah soutient cette religion même par une personne pécheresse — Unanimement reconnu',action:"Faites face aux défis aujourd'hui avec sagesse, savoir et patience au lieu de colère et violence",young:"Utilise les bonnes paroles ! Le dialogue est plus fort que les cris ✊"}
  },
  {
    id:17, emoji:'🗣️',
    ar:{title:'لغة العصر',desc:'الداعية يجب أن يتحدث بلغة يفهمها أهل العصر. الخطاب الديني التقليدي لا يصل لأجيال التكنولوجيا. تجديد الخطاب مع ثبات المضمون ضرورة.',verse:'وَمَا أَرْسَلْنَا مِنْ رَسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ',verseRef:'إبراهيم ٤',hadith:'حدثوا الناس بما يعرفون — رواه البخاري',action:'اشرح قيمة إسلامية اليوم بأسلوب عصري بسيط يفهمه الشباب',young:'تحدث بطريقة يفهمها الجميع! اشرح الإسلام بأسلوب بسيط وممتع 🗣️'},
    en:{title:'The Language of the Era',desc:'A caller must speak in a language that the people of the era understand. Traditional religious discourse does not reach the technology generation. Renewing discourse while maintaining content is a necessity.',verse:'And We did not send any messenger except in the language of his people to make it clear to them',verseRef:'Ibrahim 4',hadith:'Speak to people according to what they understand — Bukhari',action:'Explain an Islamic value today in a simple modern style that youth can understand',young:'Speak in a way everyone understands! Explain Islam simply and in a fun way 🗣️'},
    fr:{title:"Le Langage de l'Époque",desc:"Un prédicateur doit parler dans un langage que les gens de l'époque comprennent. Le discours religieux traditionnel n'atteint pas la génération technologique. Renouveler le discours tout en maintenant le contenu est une nécessité.",verse:"Et Nous n'avons envoyé de messager qu'avec la langue de son peuple pour leur expliquer clairement",verseRef:'Ibrahim 4',hadith:'Parlez aux gens selon ce qu\'ils comprennent — Bukhari',action:"Expliquez une valeur islamique aujourd'hui dans un style moderne et simple que les jeunes comprennent",young:"Parle d'une manière que tout le monde comprend ! Explique l'Islam simplement et de manière amusante 🗣️"}
  },
  {
    id:18, emoji:'📊',
    ar:{title:'قياس النجاح',desc:'الدعوة تحتاج معايير لقياس النجاح والفشل. التقييم المستمر والمراجعة الدورية يضمنان تطوير الأداء. النجاح ليس بالكثرة بل بالجودة والأثر.',verse:'كَمْ مِنْ فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ',verseRef:'البقرة ٢٤٩',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'قيّم أداءك الدعوي اليوم بصدق: ما الذي نجحت فيه وما الذي يحتاج تحسيناً؟',young:'راجع نفسك! ما الذي أنجزته وما الذي تحتاج تحسينه؟ 📊'},
    en:{title:'Measuring Success',desc:'Dawah needs criteria for measuring success and failure. Continuous evaluation and periodic review ensure performance improvement. Success is not in quantity but in quality and impact.',verse:'How many a small group overcame a large group by the permission of Allah',verseRef:'Al-Baqarah 249',hadith:'The best of you are those who learn the Quran and teach it — Bukhari',action:'Evaluate your dawah performance honestly today: what succeeded and what needs improvement?',young:'Review yourself! What have you accomplished and what needs improvement? 📊'},
    fr:{title:'Mesurer le Succès',desc:"La da'wa a besoin de critères pour mesurer le succès et l'échec. L'évaluation continue et la révision périodique assurent l'amélioration des performances. Le succès n'est pas dans la quantité mais dans la qualité et l'impact.",verse:'Combien de petits groupes ont vaincu de grands groupes par la permission d\'Allah',verseRef:'Al-Baqarah 249',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:"Évaluez honnêtement votre performance de da'wa aujourd'hui : qu'est-ce qui a réussi et qu'est-ce qui doit être amélioré ?",young:"Fais le point ! Qu'as-tu accompli et qu'est-ce qui doit être amélioré ? 📊"}
  },
  {
    id:19, emoji:'🌅',
    ar:{title:'الأمل والتفاؤل',desc:'رغم كل التحديات فإن الأمل في نصر الله واجب. اليأس حرام في الإسلام. مستقبل الأمة مشرق لمن يعمل بإخلاص وصبر وتوكل على الله.',verse:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',verseRef:'الشرح ٥',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'ابدأ يومك بالأمل والتفاؤل: قل الحمد لله واعمل لمستقبل أفضل',young:'كن متفائلاً دائماً! مع كل صعوبة يأتي فرج من الله 🌅'},
    en:{title:'Hope and Optimism',desc:'Despite all challenges, hope in Allah\'s victory is an obligation. Despair is forbidden in Islam. The ummah\'s future is bright for those who work with sincerity, patience, and trust in Allah.',verse:'Indeed, with hardship comes ease',verseRef:'Ash-Sharh 5',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'Start your day with hope and optimism: say Alhamdulillah and work for a better future',young:'Always be optimistic! With every difficulty comes relief from Allah 🌅'},
    fr:{title:"L'Espoir et l'Optimisme",desc:"Malgré tous les défis, l'espoir en la victoire d'Allah est une obligation. Le désespoir est interdit en Islam. L'avenir de la oumma est brillant pour ceux qui travaillent avec sincérité, patience et confiance en Allah.",verse:'Certes, avec la difficulté vient la facilité',verseRef:'Ash-Sharh 5',hadith:"Comme l'affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim",action:"Commencez votre journée avec espoir et optimisme : dites Alhamdulillah et travaillez pour un meilleur avenir",young:"Sois toujours optimiste ! Avec chaque difficulté vient un soulagement d'Allah 🌅"}
  },
  {
    id:20, emoji:'📋',
    ar:{title:'الاستراتيجية الشاملة',desc:'الدعوة تحتاج استراتيجية شاملة تجمع بين التعليم والإعلام والاقتصاد والسياسة والثقافة. العمل العشوائي يضيع الجهود. التخطيط المحكم مع التوكل على الله هو المنهج الصحيح.',verse:'هُوَ الَّذِي أَرْسَلَ رَسُولَهُ بِالْهُدَى وَدِينِ الْحَقِّ لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ',verseRef:'التوبة ٣٣',hadith:'ليبلغن هذا الأمر ما بلغ الليل والنهار — رواه أحمد',action:'ضع خطة استراتيجية لمشروع دعوي متكامل وابدأ بخطوة عملية اليوم',young:'خطط جيداً! التخطيط الذكي يجعل عملك أفضل وأقوى 📋'},
    en:{title:'Comprehensive Strategy',desc:'Dawah needs a comprehensive strategy that combines education, media, economy, politics, and culture. Random work wastes efforts. Careful planning with trust in Allah is the correct methodology.',verse:'It is He who sent His Messenger with guidance and the religion of truth to manifest it over all religion',verseRef:'At-Tawbah 33',hadith:'This matter will reach everywhere that night and day reach — Ahmad',action:'Create a strategic plan for a comprehensive dawah project and take a practical step today',young:'Plan well! Smart planning makes your work better and stronger 📋'},
    fr:{title:'La Stratégie Globale',desc:"La da'wa a besoin d'une stratégie globale combinant éducation, médias, économie, politique et culture. Le travail aléatoire gaspille les efforts. La planification soigneuse avec confiance en Allah est la bonne méthodologie.",verse:'C\'est Lui qui a envoyé Son Messager avec la guidée et la religion de vérité pour la faire prévaloir sur toute religion',verseRef:'At-Tawbah 33',hadith:'Cette affaire atteindra partout où atteignent la nuit et le jour — Ahmad',action:"Créez un plan stratégique pour un projet de da'wa global et faites un pas pratique aujourd'hui",young:"Planifie bien ! Une planification intelligente rend ton travail meilleur et plus fort 📋"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الآية التي تؤكد أن التغيير يبدأ من الداخل؟',opts:['البقرة ٢٨٦','الرعد ١١','الأنفال ٦٠','التوبة ٣٣'],correct:1,hint:'هذه الآية تتحدث عن تغيير الله لحال الأقوام',quran:'الرعد ١١'},
    en:{q:'Which verse confirms that change starts from within?',opts:['Al-Baqarah 286','Ar-Ra\'d 11','Al-Anfal 60','At-Tawbah 33'],correct:1,hint:'This verse talks about Allah changing the condition of peoples',quran:'Ar-Ra\'d 11'},
    fr:{q:'Quel verset confirme que le changement commence de l\'intérieur ?',opts:['Al-Baqarah 286','Ar-Ra\'d 11','Al-Anfal 60','At-Tawbah 33'],correct:1,hint:'Ce verset parle du changement par Allah de la condition des peuples',quran:'Ar-Ra\'d 11'}
  },
  {
    ar:{q:'أكمل الحديث: "أفضل الجهاد كلمة حق عند ..."',opts:['عالم فاسق','سلطان جائر','رجل غني','قاضٍ ظالم'],correct:1,hint:'هذا الحديث يتحدث عن أعلى درجات الشجاعة في قول الحق',quran:'الفرقان ٥٢'},
    en:{q:'Complete the hadith: "The best jihad is a word of truth before a..."',opts:['Corrupt scholar','Tyrannical ruler','Wealthy man','Unjust judge'],correct:1,hint:'This hadith talks about the highest degree of courage in speaking truth',quran:'Al-Furqan 52'},
    fr:{q:'Complétez le hadith : « Le meilleur jihad est une parole de vérité devant un... »',opts:['Savant corrompu','Dirigeant tyrannique','Homme riche','Juge injuste'],correct:1,hint:'Ce hadith parle du plus haut degré de courage dans la parole de vérité',quran:'Al-Furqan 52'}
  },
  {
    ar:{q:'ما عنوان كتاب الشيخ الغزالي الكامل؟',opts:['جهاد الدعوة والإصلاح','جهاد الدعوة بين عجز الداخل وكيد الخارج','جهاد الدعوة في العصر الحديث','جهاد الأمة المسلمة'],correct:1,hint:'العنوان يشير إلى تحديين: داخلي وخارجي',quran:'النحل ١٢٥'},
    en:{q:'What is the full title of Sheikh al-Ghazali\'s book?',opts:['Jihad of Dawah and Reform','Jihad of Dawah Between Internal Weakness and External Plots','Jihad of Dawah in the Modern Age','Jihad of the Muslim Ummah'],correct:1,hint:'The title refers to two challenges: internal and external',quran:'An-Nahl 125'},
    fr:{q:'Quel est le titre complet du livre du Sheikh al-Ghazali ?',opts:['Le Jihad de la Da\'wa et la Réforme','Le Jihad de la Da\'wa entre la Faiblesse Interne et les Complots Externes','Le Jihad de la Da\'wa à l\'Ère Moderne','Le Jihad de la Oumma Musulmane'],correct:1,hint:'Le titre fait référence à deux défis : interne et externe',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الأخطر على الأمة حسب الشيخ الغزالي؟',opts:['الهجوم العسكري','العجز الداخلي','ضعف الاقتصاد','قلة العلماء'],correct:1,hint:'الشيخ يؤكد أن الضعف الداخلي هو البوابة التي يدخل منها العدو',quran:'الرعد ١١'},
    en:{q:'What is most dangerous for the ummah according to Sheikh al-Ghazali?',opts:['Military attack','Internal weakness','Economic weakness','Lack of scholars'],correct:1,hint:'The Sheikh emphasizes that internal weakness is the gate through which enemies enter',quran:'Ar-Ra\'d 11'},
    fr:{q:'Qu\'est-ce qui est le plus dangereux pour la oumma selon Sheikh al-Ghazali ?',opts:['L\'attaque militaire','La faiblesse interne','La faiblesse économique','Le manque de savants'],correct:1,hint:'Le Sheikh souligne que la faiblesse interne est la porte par laquelle les ennemis entrent',quran:'Ar-Ra\'d 11'}
  },
  {
    ar:{q:'في أي سورة نجد "وَجَاهِدْهُمْ بِهِ جِهَادًا كَبِيرًا"؟',opts:['التوبة','الأنفال','الفرقان','محمد'],correct:2,hint:'الضمير "به" يعود على القرآن الكريم',quran:'الفرقان ٥٢'},
    en:{q:'In which surah do we find "And strive against them with it a great striving"?',opts:['At-Tawbah','Al-Anfal','Al-Furqan','Muhammad'],correct:2,hint:'The pronoun "it" refers to the Holy Quran',quran:'Al-Furqan 52'},
    fr:{q:'Dans quelle sourate trouvons-nous « Et lutte contre eux avec ceci d\'un grand jihad » ?',opts:['At-Tawbah','Al-Anfal','Al-Furqan','Muhammad'],correct:2,hint:'Le pronom « ceci » fait référence au Saint Coran',quran:'Al-Furqan 52'}
  },
  {
    ar:{q:'ما معنى "اليد العليا خير من اليد السفلى"؟',opts:['القوة أفضل من الضعف','المعطي أفضل من الآخذ','الغني أفضل من الفقير','الأول أفضل من الأخير'],correct:1,hint:'هذا الحديث يحث على العطاء والاستقلال',quran:'الملك ١٥'},
    en:{q:'What does "The upper hand is better than the lower hand" mean?',opts:['Strength is better than weakness','The giver is better than the taker','The rich is better than the poor','The first is better than the last'],correct:1,hint:'This hadith encourages giving and independence',quran:'Al-Mulk 15'},
    fr:{q:'Que signifie « La main qui donne est meilleure que la main qui reçoit » ?',opts:['La force est meilleure que la faiblesse','Celui qui donne est meilleur que celui qui reçoit','Le riche est meilleur que le pauvre','Le premier est meilleur que le dernier'],correct:1,hint:'Ce hadith encourage le don et l\'indépendance',quran:'Al-Mulk 15'}
  },
  {
    ar:{q:'ما الذي يصفه القرآن بأنه يحول العدو إلى صديق حميم؟',opts:['المال','القوة','الدفع بالتي هي أحسن','الصبر'],correct:2,hint:'هذا المبدأ في سورة فصلت',quran:'فصلت ٣٤'},
    en:{q:'What does the Quran describe as turning an enemy into a devoted friend?',opts:['Money','Force','Repelling with what is better','Patience'],correct:2,hint:'This principle is in Surah Fussilat',quran:'Fussilat 34'},
    fr:{q:'Que décrit le Coran comme transformant un ennemi en ami dévoué ?',opts:['L\'argent','La force','Repousser par ce qui est meilleur','La patience'],correct:2,hint:'Ce principe est dans la Sourate Fussilat',quran:'Fussilat 34'}
  },
  {
    ar:{q:'أكمل الحديث: "العلماء ورثة ..."',opts:['الملوك','الأنبياء','الخلفاء','الصحابة'],correct:1,hint:'هذا الحديث يبين مكانة العلماء في الأمة',quran:'فاطر ٢٨'},
    en:{q:'Complete the hadith: "Scholars are the heirs of the..."',opts:['Kings','Prophets','Caliphs','Companions'],correct:1,hint:'This hadith shows the status of scholars in the ummah',quran:'Fatir 28'},
    fr:{q:'Complétez le hadith : « Les savants sont les héritiers des... »',opts:['Rois','Prophètes','Califes','Compagnons'],correct:1,hint:'Ce hadith montre le statut des savants dans la oumma',quran:'Fatir 28'}
  },
  {
    ar:{q:'من القائل: "حاسبوا أنفسكم قبل أن تُحاسبوا"؟',opts:['أبو بكر الصديق','عمر بن الخطاب','علي بن أبي طالب','عثمان بن عفان'],correct:1,hint:'هذا الصحابي الجليل كان ثاني الخلفاء الراشدين',quran:'الحشر ١٨'},
    en:{q:'Who said: "Hold yourselves accountable before you are held accountable"?',opts:['Abu Bakr','Umar ibn al-Khattab','Ali ibn Abi Talib','Uthman ibn Affan'],correct:1,hint:'This great companion was the second of the Rightly-Guided Caliphs',quran:'Al-Hashr 18'},
    fr:{q:'Qui a dit : « Demandez-vous des comptes avant qu\'on ne vous en demande » ?',opts:['Abu Bakr','Umar ibn al-Khattab','Ali ibn Abi Talib','Uthman ibn Affan'],correct:1,hint:'Ce grand compagnon était le deuxième des Califes Bien-Guidés',quran:'Al-Hashr 18'}
  },
  {
    ar:{q:'ما الحديث الذي يبشر بانتشار الإسلام في كل مكان؟',opts:['بلغوا عني ولو آية','ليبلغن هذا الأمر ما بلغ الليل والنهار','الدال على الخير كفاعله','إنما الأعمال بالنيات'],correct:1,hint:'هذا الحديث يتحدث عن وصول الإسلام لكل بقعة',quran:'التوبة ٣٣'},
    en:{q:'Which hadith gives glad tidings of Islam spreading everywhere?',opts:['Convey from me even a verse','This matter will reach everywhere night and day reach','The one who guides to good','Actions are by intentions'],correct:1,hint:'This hadith talks about Islam reaching every spot on earth',quran:'At-Tawbah 33'},
    fr:{q:'Quel hadith annonce la bonne nouvelle de la propagation de l\'Islam partout ?',opts:['Transmettez de moi ne serait-ce qu\'un verset','Cette affaire atteindra partout où atteignent la nuit et le jour','Celui qui guide vers le bien','Les actes ne valent que par les intentions'],correct:1,hint:'Ce hadith parle de l\'Islam atteignant chaque endroit sur terre',quran:'At-Tawbah 33'}
  },
  {
    ar:{q:'كل كم سنة يبعث الله مجدداً للأمة حسب الحديث؟',opts:['كل ٥٠ سنة','كل ١٠٠ سنة','كل ٢٠٠ سنة','كل ١٠ سنوات'],correct:1,hint:'على رأس كل قرن',quran:'النحل ١٢٥'},
    en:{q:'How often does Allah send a renewer for the ummah according to the hadith?',opts:['Every 50 years','Every 100 years','Every 200 years','Every 10 years'],correct:1,hint:'At the head of every century',quran:'An-Nahl 125'},
    fr:{q:'À quelle fréquence Allah envoie-t-Il un rénovateur pour la oumma selon le hadith ?',opts:['Tous les 50 ans','Tous les 100 ans','Tous les 200 ans','Tous les 10 ans'],correct:1,hint:'À la tête de chaque siècle',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الآية التي تقول إن المؤمنين والمؤمنات بعضهم أولياء بعض؟',opts:['التوبة ٧١','الأحزاب ٣٥','النور ٣٠','البقرة ٢٢٨'],correct:0,hint:'هذه الآية في سورة التوبة وتتحدث عن الولاية المتبادلة',quran:'التوبة ٧١'},
    en:{q:'Which verse says believing men and women are allies of one another?',opts:['At-Tawbah 71','Al-Ahzab 35','An-Nur 30','Al-Baqarah 228'],correct:0,hint:'This verse is in Surah At-Tawbah and speaks of mutual alliance',quran:'At-Tawbah 71'},
    fr:{q:'Quel verset dit que les croyants et croyantes sont alliés les uns des autres ?',opts:['At-Tawbah 71','Al-Ahzab 35','An-Nur 30','Al-Baqarah 228'],correct:0,hint:'Ce verset est dans la Sourate At-Tawbah et parle d\'alliance mutuelle',quran:'At-Tawbah 71'}
  },
  {
    ar:{q:'ما الأخطر من الغزو العسكري حسب الشيخ الغزالي؟',opts:['الغزو الاقتصادي','الغزو الثقافي','الغزو التكنولوجي','الغزو السياسي'],correct:1,hint:'هذا النوع من الغزو يسلب الهوية دون مقاومة',quran:'البقرة ١٢٠'},
    en:{q:'What is more dangerous than military invasion according to Sheikh al-Ghazali?',opts:['Economic invasion','Cultural invasion','Technological invasion','Political invasion'],correct:1,hint:'This type of invasion strips identity without resistance',quran:'Al-Baqarah 120'},
    fr:{q:'Qu\'est-ce qui est plus dangereux que l\'invasion militaire selon Sheikh al-Ghazali ?',opts:['L\'invasion économique','L\'invasion culturelle','L\'invasion technologique','L\'invasion politique'],correct:1,hint:'Ce type d\'invasion dépouille l\'identité sans résistance',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'أكمل الحديث: "النساء شقائق ..."',opts:['المؤمنين','الرجال','الأنبياء','العلماء'],correct:1,hint:'هذا الحديث يؤكد تكامل الرجل والمرأة',quran:'التوبة ٧١'},
    en:{q:'Complete the hadith: "Women are the twin halves of..."',opts:['The believers','Men','The prophets','The scholars'],correct:1,hint:'This hadith affirms the complementarity of men and women',quran:'At-Tawbah 71'},
    fr:{q:'Complétez le hadith : « Les femmes sont les moitiés jumelles des... »',opts:['Des croyants','Des hommes','Des prophètes','Des savants'],correct:1,hint:'Ce hadith affirme la complémentarité des hommes et des femmes',quran:'At-Tawbah 71'}
  },
  {
    ar:{q:'ما معنى "كم من فئة قليلة غلبت فئة كثيرة بإذن الله"؟',opts:['العدد هو الأهم','الجودة أهم من الكثرة','المال يحقق النصر','القوة تغلب الحق'],correct:1,hint:'هذه الآية تبين أن النصر ليس بالعدد',quran:'البقرة ٢٤٩'},
    en:{q:'What does "How many a small group overcame a large group by Allah\'s permission" mean?',opts:['Numbers are most important','Quality is more important than quantity','Money achieves victory','Force overcomes truth'],correct:1,hint:'This verse shows that victory is not in numbers',quran:'Al-Baqarah 249'},
    fr:{q:'Que signifie « Combien de petits groupes ont vaincu de grands groupes par la permission d\'Allah » ?',opts:['Le nombre est le plus important','La qualité est plus importante que la quantité','L\'argent atteint la victoire','La force surpasse la vérité'],correct:1,hint:'Ce verset montre que la victoire n\'est pas dans le nombre',quran:'Al-Baqarah 249'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, déverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us — Al Imran 8'},
    fr:{label:'Dua pour la Constance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne laisse pas nos coeurs dévier après nous avoir guidés — Al Imran 8'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets à Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الفتح',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'الأعراف ٨٩'},
    en:{label:'Dua for Opening',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Our Lord, decide between us and our people in truth — Al-Araf 89'},
    fr:{label:'Dua pour l\'Ouverture',text:'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ',tr:'Notre Seigneur, tranche entre nous et notre peuple en toute vérité — Al-Araf 89'} },
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'من دعاء القنوت'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'O Allah, guide us among those You have guided — Qunoot dua'},
    fr:{label:'Dua pour la Guidée',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ',tr:'Ô Allah, guide-nous parmi ceux que Tu as guidés — Dua du Qunoot'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا',tr:'البقرة ٢٨٦'},
    en:{label:'Dua for Patience',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا',tr:'Our Lord, do not burden us beyond what we can bear, pardon us and forgive us — Al-Baqarah 286'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا',tr:'Notre Seigneur, ne nous charge pas au-delà de ce que nous pouvons supporter, pardonne-nous — Al-Baqarah 286'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'jihad-dawah-xp';
const BADGES_KEY = 'jihad-dawah-badges';
const READ_KEY = 'jihad-dawah-read';
const STREAK_KEY = 'jihad-dawah-streak';
const MODE_KEY = 'jihad-dawah-mode';
const QUIZ_BEST_KEY = 'jihad-dawah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«جهاد الدعوة بين عجز الداخل وكيد الخارج» يحلل تحديات الأمة الإسلامية الداخلية والخارجية. يبيّن الشيخ الغزالي أن العجز الداخلي أخطر من المؤامرات الخارجية، ويدعو إلى إصلاح شامل يبدأ من الذات قبل مواجهة الأعداء.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "جهاد الدعوة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن أبي داود والترمذي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Jihad of Dawah Between Internal Weakness and External Plots" analyzes the internal and external challenges of the Muslim ummah. Sheikh al-Ghazali shows that internal weakness is more dangerous than external conspiracies, calling for comprehensive reform starting from self-correction before confronting enemies.',
      sourcesTitle: 'Sources',
      sources: ['"Jihad of Dawah" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan Abu Dawud and at-Tirmidhi'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Le Jihad de la Da\'wa entre la Faiblesse Interne et les Complots Externes" analyse les defis internes et externes de la oumma. Le Sheikh al-Ghazali montre que la faiblesse interne est plus dangereuse que les complots externes, appelant a une reforme globale commencant par la correction de soi.',
      sourcesTitle: 'Sources',
      sources: ['"Le Jihad de la Da\'wa" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan Abu Dawud et at-Tirmidhi'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "جهاد الدعوة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/jihad-al-dawah'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Jihad of Dawah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/jihad-al-dawah'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Le Jihad de la Da\'wa" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/jihad-al-dawah'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ أدعية المجاهد بالكلمة','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget the word warrior\'s duas','⭐ Complete all 20 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas du combattant','⭐ Completez les 20 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
