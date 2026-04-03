/* جهاد الدعوة بين عجز الداخل وكيد الخارج — JIHAD OF DAWAH — app.js v1.0 */
/* Based on "Jihad al-Dawah bayna Ajz al-Dakhil wa Kayd al-Kharij" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'جهاد الدعوة',
    splashSub: 'بين عجز الداخل وكيد الخارج',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة النحل ١٦: ١٢٥',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات جهاد الدعوة',
    cardsDesc: '١٥ بطاقة عن تحديات الدعوة الداخلية والخارجية — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالماً؟',
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
      '١٥ بطاقة عن تحديات الدعوة وحلولها',
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
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Dawah Struggle Cards',
    cardsDesc: '15 cards on internal and external challenges of dawah — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of the dawah struggle — 4 choices per question',
    progressTitle: 'My Dawah Struggle Journey',
    progressDesc: 'Your progress and achievements in understanding dawah challenges',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the Intellectual Struggler',
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
      '15 cards on dawah challenges and solutions',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Jihad de la Dawah',
    splashSub: 'Entre faiblesse interne et complots externes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate An-Nahl 16:125',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Cartes du Combat de la Dawah',
    cardsDesc: '15 cartes sur les defis internes et externes de la dawah — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur le combat de la dawah — 4 choix par question',
    progressTitle: 'Mon Parcours de Combat',
    progressDesc: 'Vos progres et realisations dans la comprehension des defis de la dawah',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Combattant Intellectuel',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes sur les defis de la dawah et leurs solutions',
      'Quiz "Qui Veut Devenir Savant ?" avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 JIHAD DAWAH CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🔍',
    ar:{title:'تشخيص الضعف الداخلي',desc:'أول خطوة في إصلاح الأمة هي الاعتراف بأمراضها الداخلية. الجهل والتخلف والفرقة والكسل أخطر من أي عدو خارجي. الشيخ الغزالي يؤكد أن الأمة لن تنهض إلا إذا شخّصت أمراضها بصدق وشجاعة ثم عملت على علاجها.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'كلكم راعٍ وكلكم مسؤول عن رعيته — متفق عليه',action:'اكتب قائمة بنقاط ضعفك الشخصية وابدأ بعلاج واحدة منها اليوم',young:'لكي تكون قوياً، اعرف نقاط ضعفك أولاً ثم اعمل على تحسينها! 🔍'},
    en:{title:'Diagnosing Internal Weakness',desc:'The first step in reforming the Ummah is acknowledging its internal diseases. Ignorance, backwardness, division, and laziness are more dangerous than any external enemy. Sheikh al-Ghazali emphasizes that the Ummah will not rise unless it honestly diagnoses its diseases and works to cure them.',verse:'Indeed, Allah will not change the condition of a people until they change what is in themselves',verseRef:'Ar-Ra\'d 11',hadith:'Each of you is a shepherd and each is responsible for their flock — Agreed upon',action:'Write a list of your personal weaknesses and start working on one today',young:'To be strong, know your weaknesses first then work on improving them! 🔍'},
    fr:{title:'Diagnostic de la Faiblesse Interne',desc:'La premiere etape pour reformer la Oumma est de reconnaitre ses maladies internes. L\'ignorance, le retard, la division et la paresse sont plus dangereux que tout ennemi exterieur. Sheikh al-Ghazali souligne que la Oumma ne se relevera que si elle diagnostique honnetement ses maladies.',verse:'Allah ne modifie pas l\'etat d\'un peuple tant qu\'ils ne modifient pas ce qui est en eux-memes',verseRef:'Ar-Ra\'d 11',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:'Ecrivez une liste de vos faiblesses personnelles et commencez a travailler sur une aujourd\'hui',young:'Pour etre fort, connais d\'abord tes faiblesses puis travaille a les ameliorer ! 🔍'}
  },
  {
    id:2, emoji:'🕸️',
    ar:{title:'المؤامرات الخارجية',desc:'الأعداء يخططون لإضعاف الأمة الإسلامية بوسائل متعددة: ثقافية واقتصادية وسياسية. الشيخ الغزالي لا ينكر وجود المؤامرات لكنه يرفض أن تكون ذريعة للتقاعس. المسلم الواعي يعرف المؤامرة ويواجهها بالعمل لا بالشكوى.',verse:'وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ وَاللَّهُ خَيْرُ الْمَاكِرِينَ',verseRef:'الأنفال ٣٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'بدلاً من الشكوى من المؤامرات، اعمل شيئاً إيجابياً اليوم لتقوية أمتك',young:'لا تخف من التحديات! كن قوياً وذكياً واعمل بجد لتتغلب عليها 🕸️'},
    en:{title:'External Conspiracies',desc:'Enemies plan to weaken the Muslim Ummah through multiple means: cultural, economic, and political. Sheikh al-Ghazali does not deny conspiracies but refuses to let them be an excuse for inaction. A conscious Muslim knows the conspiracy and confronts it with work, not complaints.',verse:'And they plan and Allah plans. And Allah is the best of planners',verseRef:'Al-Anfal 30',hadith:'The strong believer is better and more beloved to Allah than the weak believer — Muslim',action:'Instead of complaining about conspiracies, do something positive today to strengthen your Ummah',young:'Don\'t be afraid of challenges! Be strong and smart and work hard to overcome them 🕸️'},
    fr:{title:'Complots Externes',desc:'Les ennemis planifient d\'affaiblir la Oumma musulmane par divers moyens : culturels, economiques et politiques. Sheikh al-Ghazali ne nie pas les complots mais refuse qu\'ils soient une excuse pour l\'inaction. Le musulman conscient connait le complot et l\'affronte par le travail.',verse:'Et ils planifient et Allah planifie. Et Allah est le meilleur des planificateurs',verseRef:'Al-Anfal 30',hadith:'Le croyant fort est meilleur et plus aime d\'Allah que le croyant faible — Muslim',action:'Au lieu de vous plaindre des complots, faites quelque chose de positif aujourd\'hui pour renforcer votre Oumma',young:'N\'aie pas peur des defis ! Sois fort et intelligent et travaille dur pour les surmonter 🕸️'}
  },
  {
    id:3, emoji:'📚',
    ar:{title:'الجهاد الفكري',desc:'أعظم جهاد في العصر الحديث هو جهاد الفكر والكلمة. المعركة اليوم معركة أفكار لا سيوف. الشيخ الغزالي يدعو المسلمين إلى التسلح بالعلم والثقافة والمنطق لمواجهة التحديات الفكرية. القلم أقوى من السيف.',verse:'وَجَاهِدْهُمْ بِهِ جِهَادًا كَبِيرًا',verseRef:'الفرقان ٥٢',hadith:'أفضل الجهاد كلمة حق عند سلطان جائر — رواه أبو داود',action:'اقرأ كتاباً يقوي فكرك الإسلامي وشارك أفكاره مع أصدقائك',young:'العلم والقراءة هما أقوى أسلحتك! اقرأ كتاباً جديداً اليوم 📚'},
    en:{title:'Intellectual Jihad',desc:'The greatest jihad in the modern era is the jihad of thought and word. Today\'s battle is a battle of ideas, not swords. Sheikh al-Ghazali calls Muslims to arm themselves with knowledge, culture, and logic to face intellectual challenges. The pen is mightier than the sword.',verse:'And strive against them with it a great striving',verseRef:'Al-Furqan 52',hadith:'The best jihad is a word of truth before a tyrannical ruler — Abu Dawud',action:'Read a book that strengthens your Islamic thinking and share its ideas with friends',young:'Knowledge and reading are your strongest weapons! Read a new book today 📚'},
    fr:{title:'Jihad Intellectuel',desc:'Le plus grand jihad a l\'ere moderne est le jihad de la pensee et de la parole. La bataille d\'aujourd\'hui est une bataille d\'idees, pas d\'epees. Sheikh al-Ghazali appelle les musulmans a s\'armer de savoir, de culture et de logique.',verse:'Et lutte contre eux avec cela d\'une grande lutte',verseRef:'Al-Furqan 52',hadith:'Le meilleur jihad est une parole de verite devant un dirigeant tyrannique — Abu Dawud',action:'Lisez un livre qui renforce votre pensee islamique et partagez ses idees avec vos amis',young:'Le savoir et la lecture sont tes armes les plus fortes ! Lis un nouveau livre aujourd\'hui 📚'}
  },
  {
    id:4, emoji:'🎓',
    ar:{title:'الجهاد التعليمي',desc:'محاربة الجهل هي أولوية قصوى. الشيخ الغزالي يرى أن الأمية الدينية والعلمية تُضعف الأمة. إصلاح المناهج التعليمية والجمع بين العلوم الشرعية والحديثة ضرورة لبناء جيل قادر على مواجهة التحديات.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'علّم شخصاً شيئاً مفيداً اليوم — العلم الذي ينتفع به صدقة جارية',young:'تعلم شيئاً جديداً كل يوم وعلّمه لأصدقائك — هذا هو الجهاد الحقيقي! 🎓'},
    en:{title:'Educational Jihad',desc:'Fighting ignorance is a top priority. Sheikh al-Ghazali sees that religious and scientific illiteracy weakens the Ummah. Reforming educational curricula and combining religious and modern sciences is essential for building a generation capable of facing challenges.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Teach someone something useful today — shared knowledge is ongoing charity',young:'Learn something new every day and teach it to your friends — that is the real jihad! 🎓'},
    fr:{title:'Jihad Educatif',desc:'Combattre l\'ignorance est une priorite absolue. Sheikh al-Ghazali voit que l\'analphabetisme religieux et scientifique affaiblit la Oumma. Reformer les programmes et combiner sciences religieuses et modernes est essentiel.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:'Enseignez quelque chose d\'utile a quelqu\'un aujourd\'hui — le savoir partage est une charite continue',young:'Apprends quelque chose de nouveau chaque jour et enseigne-le a tes amis — c\'est le vrai jihad ! 🎓'}
  },
  {
    id:5, emoji:'📡',
    ar:{title:'جهاد الإعلام',desc:'الإعلام يشكّل عقول الناس. من يملك الإعلام يملك التأثير. الشيخ الغزالي يدعو المسلمين إلى امتلاك إعلام قوي ومهني لمواجهة التشويه والأكاذيب. الإعلام الإسلامي يجب أن يكون صادقاً ومحترفاً وجذاباً.',verse:'وَمَا أَرْسَلْنَا مِنْ رَسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ',verseRef:'إبراهيم ٤',hadith:'بلغوا عني ولو آية — رواه البخاري',action:'شارك محتوى إسلامي إيجابي ومهني على وسائل التواصل الاجتماعي',young:'شارك رسائل جميلة عن الإسلام على الإنترنت — كلمتك الطيبة تصل بعيداً! 📡'},
    en:{title:'Media Jihad',desc:'Media shapes people\'s minds. Whoever owns media owns influence. Sheikh al-Ghazali calls Muslims to own strong and professional media to counter distortion and lies. Islamic media must be truthful, professional, and attractive.',verse:'And We did not send any messenger except in the language of his people',verseRef:'Ibrahim 4',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Share positive and professional Islamic content on social media',young:'Share beautiful messages about Islam online — your kind word reaches far! 📡'},
    fr:{title:'Jihad Mediatique',desc:'Les medias faconnent les esprits. Quiconque possede les medias possede l\'influence. Sheikh al-Ghazali appelle les musulmans a posseder des medias forts et professionnels pour contrer la desinformation et les mensonges.',verse:'Et Nous n\'avons envoye de messager qu\'avec la langue de son peuple',verseRef:'Ibrahim 4',hadith:'Transmettez de moi, ne serait-ce qu\'un verset — Bukhari',action:'Partagez du contenu islamique positif et professionnel sur les reseaux sociaux',young:'Partage de beaux messages sur l\'Islam en ligne — ta bonne parole atteint loin ! 📡'}
  },
  {
    id:6, emoji:'💰',
    ar:{title:'الاستقلال الاقتصادي',desc:'الأمة التي تعتمد اقتصادياً على غيرها لا تستطيع أن تكون حرة. الشيخ الغزالي يدعو إلى الاستقلال الاقتصادي من خلال العمل والإنتاج والابتكار. الإسلام يحثّ على العمل والكسب الحلال وبناء اقتصاد قوي.',verse:'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ',verseRef:'الملك ١٥',hadith:'ما أكل أحد طعاماً قط خيراً من أن يأكل من عمل يده — رواه البخاري',action:'ابدأ مشروعاً صغيراً أو طوّر مهارة تدرّ عليك دخلاً حلالاً',young:'العمل والاجتهاد يجعلانك قوياً ومستقلاً! تعلم مهارة جديدة مفيدة 💰'},
    en:{title:'Economic Independence',desc:'A nation that depends economically on others cannot be free. Sheikh al-Ghazali calls for economic independence through work, production, and innovation. Islam encourages working, earning halal income, and building a strong economy.',verse:'It is He who made the earth manageable for you, so walk among its slopes and eat of His provision',verseRef:'Al-Mulk 15',hadith:'No one has ever eaten food better than that earned by working with their own hands — Bukhari',action:'Start a small project or develop a skill that earns you halal income',young:'Hard work and effort make you strong and independent! Learn a useful new skill 💰'},
    fr:{title:'Independance Economique',desc:'Une nation economiquement dependante des autres ne peut etre libre. Sheikh al-Ghazali appelle a l\'independance economique par le travail, la production et l\'innovation. L\'Islam encourage le travail, le revenu halal et une economie forte.',verse:'C\'est Lui qui vous a soumis la terre, parcourez-en les sentiers et mangez de Sa subsistance',verseRef:'Al-Mulk 15',hadith:'Personne n\'a jamais mange de meilleure nourriture que celle gagnee par le travail de ses mains — Bukhari',action:'Demarrez un petit projet ou developpez une competence qui vous rapporte un revenu halal',young:'Le travail et l\'effort te rendent fort et independant ! Apprends une nouvelle competence utile 💰'}
  },
  {
    id:7, emoji:'🛡️',
    ar:{title:'المقاومة الثقافية',desc:'الغزو الثقافي أخطر من الغزو العسكري لأنه يغيّر الهوية من الداخل. الشيخ الغزالي يدعو إلى مقاومة ثقافية واعية: نحافظ على هويتنا ونأخذ من الحضارات الأخرى ما ينفعنا دون أن نفقد أصالتنا.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'ليس منا من تشبه بغيرنا — رواه الترمذي',action:'تعرف على ثقافتك الإسلامية وكن فخوراً بها — وتعلم من الآخرين ما ينفعك',young:'كن فخوراً بثقافتك! تعلم من كل الناس لكن حافظ على هويتك 🛡️'},
    en:{title:'Cultural Resistance',desc:'Cultural invasion is more dangerous than military invasion because it changes identity from within. Sheikh al-Ghazali calls for conscious cultural resistance: preserving our identity while taking from other civilizations what benefits us without losing our authenticity.',verse:'And the Jews and Christians will never be satisfied with you until you follow their religion',verseRef:'Al-Baqarah 120',hadith:'Whoever imitates a people is one of them — Tirmidhi',action:'Learn about your Islamic culture and be proud of it — and learn from others what benefits you',young:'Be proud of your culture! Learn from everyone but keep your identity 🛡️'},
    fr:{title:'Resistance Culturelle',desc:'L\'invasion culturelle est plus dangereuse que l\'invasion militaire car elle change l\'identite de l\'interieur. Sheikh al-Ghazali appelle a une resistance culturelle consciente : preserver notre identite tout en prenant des autres civilisations ce qui nous est utile.',verse:'Et les juifs et les chretiens ne seront jamais satisfaits de toi tant que tu ne suivras pas leur religion',verseRef:'Al-Baqarah 120',hadith:'Quiconque imite un peuple en fait partie — Tirmidhi',action:'Decouvrez votre culture islamique et soyez-en fier — et apprenez des autres ce qui vous est utile',young:'Sois fier de ta culture ! Apprends de tout le monde mais garde ton identite 🛡️'}
  },
  {
    id:8, emoji:'🧑‍🤝‍🧑',
    ar:{title:'تمكين الشباب',desc:'الشباب هم طاقة الأمة ومستقبلها. الشيخ الغزالي يدعو إلى تمكينهم بالتعليم والتدريب والفرص. إهمال الشباب يعني خسارة المستقبل. الشباب المسلم يحتاج إلى قدوات حقيقية ومشاريع واقعية.',verse:'إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى',verseRef:'الكهف ١٣',hadith:'اغتنم خمساً قبل خمس: شبابك قبل هرمك — رواه الحاكم',action:'ادعم شاباً اليوم بنصيحة أو فرصة تعليمية أو مشروع مفيد',young:'أنت مهم جداً! الشباب هم القوة الحقيقية للأمة — استثمر في نفسك 🧑‍🤝‍🧑'},
    en:{title:'Youth Empowerment',desc:'Youth are the energy and future of the Ummah. Sheikh al-Ghazali calls for empowering them through education, training, and opportunities. Neglecting youth means losing the future. Muslim youth need real role models and practical projects.',verse:'Indeed, they were youths who believed in their Lord, and We increased them in guidance',verseRef:'Al-Kahf 13',hadith:'Take advantage of five before five: your youth before your old age — al-Hakim',action:'Support a young person today with advice, an educational opportunity, or a useful project',young:'You are very important! Youth are the real power of the Ummah — invest in yourself 🧑‍🤝‍🧑'},
    fr:{title:'Autonomisation des Jeunes',desc:'Les jeunes sont l\'energie et l\'avenir de la Oumma. Sheikh al-Ghazali appelle a les autonomiser par l\'education, la formation et les opportunites. Negliger les jeunes signifie perdre l\'avenir.',verse:'Ce sont des jeunes qui croyaient en leur Seigneur, et Nous les avons guides davantage',verseRef:'Al-Kahf 13',hadith:'Profite de cinq avant cinq : ta jeunesse avant ta vieillesse — al-Hakim',action:'Soutenez un jeune aujourd\'hui avec un conseil, une opportunite educative ou un projet utile',young:'Tu es tres important ! Les jeunes sont la vraie force de la Oumma — investis en toi-meme 🧑‍🤝‍🧑'}
  },
  {
    id:9, emoji:'👩‍🏫',
    ar:{title:'دور المرأة في الدعوة',desc:'المرأة المسلمة شريكة أساسية في الدعوة. أمهات المؤمنين كنّ عالمات ومعلمات وداعيات. الشيخ الغزالي يرفض تهميش المرأة ويدعو إلى تمكينها في التعليم والدعوة والعمل الاجتماعي. نصف المجتمع لا يمكن تجاهله.',verse:'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ يَأْمُرُونَ بِالْمَعْرُوفِ',verseRef:'التوبة ٧١',hadith:'النساء شقائق الرجال — رواه أبو داود',action:'ادعم امرأة في مجتمعك للمشاركة في العلم والدعوة والعمل الخيري',young:'البنات والأولاد متساوون في الأهمية! كلنا نستطيع أن نصنع الخير 👩‍🏫'},
    en:{title:'Women\'s Role in Dawah',desc:'Muslim women are essential partners in dawah. The Mothers of the Believers were scholars, teachers, and callers. Sheikh al-Ghazali rejects marginalizing women and calls for empowering them in education, dawah, and social work. Half of society cannot be ignored.',verse:'The believing men and believing women are allies of one another. They enjoin what is right',verseRef:'At-Tawbah 71',hadith:'Women are the counterparts of men — Abu Dawud',action:'Support a woman in your community to participate in education, dawah, and charity work',young:'Girls and boys are equally important! We can all do good things 👩‍🏫'},
    fr:{title:'Role des Femmes dans la Dawah',desc:'Les femmes musulmanes sont des partenaires essentielles dans la dawah. Les Meres des Croyants etaient des savantes, enseignantes et predicatrices. Sheikh al-Ghazali rejette la marginalisation des femmes et appelle a les autonomiser dans l\'education et la dawah.',verse:'Les croyants et les croyantes sont allies les uns des autres. Ils ordonnent le bien',verseRef:'At-Tawbah 71',hadith:'Les femmes sont les homologues des hommes — Abu Dawud',action:'Soutenez une femme de votre communaute pour participer a l\'education, la dawah et le travail caritatif',young:'Les filles et les garcons sont egalement importants ! Nous pouvons tous faire le bien 👩‍🏫'}
  },
  {
    id:10, emoji:'📖',
    ar:{title:'مسؤولية العلماء',desc:'العلماء ورثة الأنبياء ومسؤوليتهم عظيمة. الشيخ الغزالي ينتقد العلماء الذين يصمتون عن الحق أو يتملقون السلطة. العالم الحق يقول الحق ولو كان مراً ويدافع عن المظلومين ويرشد الحاكم والمحكوم.',verse:'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',verseRef:'فاطر ٢٨',hadith:'العلماء ورثة الأنبياء — رواه أبو داود',action:'ادعم عالماً أو طالب علم يقول الحق بشجاعة — هؤلاء كنز الأمة',young:'العلماء مثل المصابيح التي تنير الطريق! احترمهم وتعلم منهم 📖'},
    en:{title:'Scholars\' Responsibility',desc:'Scholars are the heirs of the prophets and their responsibility is great. Sheikh al-Ghazali criticizes scholars who stay silent about truth or flatter authority. A true scholar speaks truth even if bitter, defends the oppressed, and guides rulers and people.',verse:'Only those fear Allah from among His servants who have knowledge',verseRef:'Fatir 28',hadith:'Scholars are the heirs of the prophets — Abu Dawud',action:'Support a scholar or student of knowledge who speaks truth courageously — they are the Ummah\'s treasure',young:'Scholars are like lamps that light the way! Respect them and learn from them 📖'},
    fr:{title:'Responsabilite des Savants',desc:'Les savants sont les heritiers des prophetes et leur responsabilite est grande. Sheikh al-Ghazali critique les savants qui se taisent devant la verite ou flattent le pouvoir. Un vrai savant dit la verite meme amere et defend les opprimes.',verse:'Seuls les savants craignent Allah parmi Ses serviteurs',verseRef:'Fatir 28',hadith:'Les savants sont les heritiers des prophetes — Abu Dawud',action:'Soutenez un savant ou un etudiant en savoir qui parle avec courage — ils sont le tresor de la Oumma',young:'Les savants sont comme des lampes qui eclairent le chemin ! Respecte-les et apprends d\'eux 📖'}
  },
  {
    id:11, emoji:'🏛️',
    ar:{title:'بناء المؤسسات',desc:'العمل المؤسسي أقوى من العمل الفردي. الشيخ الغزالي يدعو إلى إنشاء مؤسسات قوية: مراكز بحث ومدارس ومستشفيات ووسائل إعلام. المؤسسات تبقى حتى لو ذهب الأفراد. الأمة تحتاج إلى بنية مؤسسية متينة.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',verseRef:'المائدة ٢',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'شارك في بناء أو دعم مؤسسة تعليمية أو خيرية في مجتمعك',young:'العمل الجماعي أقوى بكثير من العمل الفردي! شارك أصدقاءك في مشروع مفيد 🏛️'},
    en:{title:'Institutional Building',desc:'Institutional work is stronger than individual work. Sheikh al-Ghazali calls for establishing strong institutions: research centers, schools, hospitals, and media outlets. Institutions remain even when individuals leave. The Ummah needs a solid institutional foundation.',verse:'And cooperate in righteousness and piety and do not cooperate in sin and aggression',verseRef:'Al-Maidah 2',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Participate in building or supporting an educational or charitable institution in your community',young:'Teamwork is much stronger than working alone! Join your friends in a useful project 🏛️'},
    fr:{title:'Construction Institutionnelle',desc:'Le travail institutionnel est plus fort que le travail individuel. Sheikh al-Ghazali appelle a etablir des institutions solides : centres de recherche, ecoles, hopitaux et medias. Les institutions restent meme quand les individus partent.',verse:'Et cooperez dans la bonte et la piete et ne cooperez pas dans le peche et l\'agression',verseRef:'Al-Maidah 2',hadith:'La main d\'Allah est avec la communaute — Tirmidhi',action:'Participez a la construction ou au soutien d\'une institution educative ou caritative dans votre communaute',young:'Le travail d\'equipe est beaucoup plus fort que le travail individuel ! Rejoins tes amis dans un projet utile 🏛️'}
  },
  {
    id:12, emoji:'🌐',
    ar:{title:'التعاون الدولي',desc:'المسلمون في العالم يحتاجون إلى تعاون أكبر فيما بينهم. الشيخ الغزالي يدعو إلى وحدة إسلامية تقوم على التعاون لا الهيمنة. تبادل الخبرات والموارد بين الدول الإسلامية يقوي الجميع.',verse:'وَإِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاتَّقُونِ',verseRef:'المؤمنون ٥٢',hadith:'مثل المؤمنين في توادهم كمثل الجسد الواحد — متفق عليه',action:'تعرف على مسلمين من بلدان مختلفة وتبادل الخبرات والأفكار معهم',young:'المسلمون في كل العالم إخوة! تعرف على أصدقاء من بلدان مختلفة 🌐'},
    en:{title:'International Cooperation',desc:'Muslims worldwide need greater cooperation among themselves. Sheikh al-Ghazali calls for Islamic unity based on cooperation, not dominance. Exchanging expertise and resources between Muslim countries strengthens everyone.',verse:'And indeed this community of yours is one community, and I am your Lord, so fear Me',verseRef:'Al-Mu\'minun 52',hadith:'The believers in their mutual love are like one body — Agreed upon',action:'Connect with Muslims from different countries and exchange experiences and ideas',young:'Muslims all over the world are brothers! Make friends from different countries 🌐'},
    fr:{title:'Cooperation Internationale',desc:'Les musulmans du monde entier ont besoin d\'une plus grande cooperation entre eux. Sheikh al-Ghazali appelle a une unite islamique basee sur la cooperation, pas la domination. L\'echange d\'expertise et de ressources renforce tout le monde.',verse:'Et certes cette communaute qui est la votre est une communaute unique, et Je suis votre Seigneur, craignez-Moi',verseRef:'Al-Mu\'minun 52',hadith:'Les croyants dans leur amour mutuel sont comme un seul corps — Unanimement reconnu',action:'Connectez-vous avec des musulmans de differents pays et echangez experiences et idees',young:'Les musulmans du monde entier sont freres ! Fais-toi des amis de differents pays 🌐'}
  },
  {
    id:13, emoji:'🪞',
    ar:{title:'النقد الذاتي',desc:'النقد الذاتي قوة لا ضعف. الشيخ الغزالي يدعو المسلمين إلى مراجعة أنفسهم بصدق قبل أن يلوموا الآخرين. من لا ينتقد نفسه لا يتطور. المحاسبة الذاتية أول خطوة في الإصلاح الحقيقي.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ',verseRef:'الحشر ١٨',hadith:'حاسبوا أنفسكم قبل أن تحاسبوا — أثر عمر بن الخطاب',action:'راجع نفسك اليوم بصدق: ما الذي يمكنك تحسينه في سلوكك وعملك؟',young:'كن صادقاً مع نفسك! راجع أفعالك وحاول أن تكون أفضل كل يوم 🪞'},
    en:{title:'Self-Criticism',desc:'Self-criticism is strength, not weakness. Sheikh al-Ghazali calls Muslims to review themselves honestly before blaming others. Those who do not criticize themselves do not develop. Self-accountability is the first step in real reform.',verse:'O you who believe, fear Allah and let every soul look to what it has put forth for tomorrow',verseRef:'Al-Hashr 18',hadith:'Hold yourselves accountable before you are held accountable — narration of Umar ibn al-Khattab',action:'Review yourself honestly today: what can you improve in your behavior and work?',young:'Be honest with yourself! Review your actions and try to be better every day 🪞'},
    fr:{title:'Autocritique',desc:'L\'autocritique est une force, pas une faiblesse. Sheikh al-Ghazali appelle les musulmans a se remettre en question honnetement avant de blamer les autres. Ceux qui ne se critiquent pas ne se developpent pas.',verse:'O vous qui croyez, craignez Allah et que chaque ame regarde ce qu\'elle a prepare pour demain',verseRef:'Al-Hashr 18',hadith:'Jugez-vous vous-memes avant d\'etre juges — recit d\'Umar ibn al-Khattab',action:'Revoyez-vous honnetement aujourd\'hui : qu\'est-ce que vous pouvez ameliorer dans votre comportement et travail ?',young:'Sois honnete avec toi-meme ! Revois tes actions et essaie d\'etre meilleur chaque jour 🪞'}
  },
  {
    id:14, emoji:'🔧',
    ar:{title:'التجديد لا التدمير',desc:'الإصلاح يكون بالبناء لا بالهدم. الشيخ الغزالي يدعو إلى تجديد الفكر الإسلامي مع الحفاظ على الأصول. التجديد ليس تغريباً ولا تقليداً أعمى. إنما هو فهم جديد للنصوص يراعي الزمان والمكان.',verse:'لِكُلٍّ جَعَلْنَا مِنْكُمْ شِرْعَةً وَمِنْهَاجًا',verseRef:'المائدة ٤٨',hadith:'إن الله يبعث لهذه الأمة على رأس كل مائة سنة من يجدد لها دينها — رواه أبو داود',action:'فكّر في طريقة جديدة لتقديم فكرة إسلامية بأسلوب عصري وجذاب',young:'جدّد أفكارك! ابحث عن طرق جديدة لفهم دينك وتطبيقه في حياتك 🔧'},
    en:{title:'Renewal Not Destruction',desc:'Reform comes through building, not demolition. Sheikh al-Ghazali calls for renewing Islamic thought while preserving fundamentals. Renewal is not Westernization or blind imitation. It is a fresh understanding of texts that considers time and place.',verse:'To each of you We prescribed a law and a method',verseRef:'Al-Maidah 48',hadith:'Indeed Allah sends for this Ummah at the head of every hundred years someone who renews its religion — Abu Dawud',action:'Think of a new way to present an Islamic idea in a modern and attractive style',young:'Renew your ideas! Find new ways to understand your religion and apply it in your life 🔧'},
    fr:{title:'Renouveau pas Destruction',desc:'La reforme passe par la construction, pas la demolition. Sheikh al-Ghazali appelle au renouvellement de la pensee islamique tout en preservant les fondamentaux. Le renouveau n\'est ni occidentalisation ni imitation aveugle.',verse:'A chacun de vous Nous avons prescrit une loi et une methode',verseRef:'Al-Maidah 48',hadith:'Certes Allah envoie a cette Oumma a la tete de chaque siecle celui qui renouvelle sa religion — Abu Dawud',action:'Pensez a une nouvelle facon de presenter une idee islamique dans un style moderne et attrayant',young:'Renouvelle tes idees ! Trouve de nouvelles facons de comprendre ta religion et de l\'appliquer dans ta vie 🔧'}
  },
  {
    id:15, emoji:'🌅',
    ar:{title:'الأمل للأمة',desc:'رغم كل التحديات، الشيخ الغزالي متفائل بمستقبل الأمة. التاريخ يثبت أن الإسلام ينتصر دائماً بعد الشدائد. الأمل ليس سلبية بل هو طاقة إيجابية تدفع إلى العمل. المسلم لا ييأس أبداً لأن الله معه.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ',verseRef:'آل عمران ١٣٩',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'كن متفائلاً اليوم وانشر الأمل والإيجابية حولك — المستقبل مشرق',young:'لا تيأس أبداً! المستقبل مشرق والله معنا دائماً — كن متفائلاً! 🌅'},
    en:{title:'Hope for the Ummah',desc:'Despite all challenges, Sheikh al-Ghazali is optimistic about the Ummah\'s future. History proves that Islam always triumphs after hardships. Hope is not passivity but positive energy that drives action. A Muslim never despairs because Allah is with them.',verse:'Do not weaken or grieve, for you are the superior ones if you are believers',verseRef:'Al Imran 139',hadith:'There will always remain a group from my Ummah victorious upon the truth — Muslim',action:'Be optimistic today and spread hope and positivity around you — the future is bright',young:'Never give up! The future is bright and Allah is always with us — be optimistic! 🌅'},
    fr:{title:'Espoir pour la Oumma',desc:'Malgre tous les defis, Sheikh al-Ghazali est optimiste quant a l\'avenir de la Oumma. L\'histoire prouve que l\'Islam triomphe toujours apres les epreuves. L\'espoir n\'est pas de la passivite mais une energie positive qui pousse a l\'action.',verse:'Ne faiblissez pas et ne vous affligez pas alors que vous etes les plus hauts si vous etes croyants',verseRef:'Al Imran 139',hadith:'Il restera toujours un groupe de ma Oumma victorieux sur la verite — Muslim',action:'Soyez optimiste aujourd\'hui et repandez l\'espoir et la positivite autour de vous — l\'avenir est radieux',young:'N\'abandonne jamais ! L\'avenir est radieux et Allah est toujours avec nous — sois optimiste ! 🌅'}
  }
];

// ═══════════════ QUIZ DATA (10 questions) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا ب..."',opts:['أموالهم','أنفسهم','أعدائهم','حكامهم'],correct:1,hint:'التغيير يبدأ من الداخل',quran:'الرعد ١١'},
    en:{q:'Complete the verse: "Allah will not change the condition of a people until they change what is in..."',opts:['Their wealth','Themselves','Their enemies','Their rulers'],correct:1,hint:'Change starts from within',quran:'Ar-Ra\'d 11'},
    fr:{q:'Completez le verset : "Allah ne modifie pas l\'etat d\'un peuple tant qu\'ils ne modifient pas ce qui est en..."',opts:['Leurs richesses','Eux-memes','Leurs ennemis','Leurs dirigeants'],correct:1,hint:'Le changement commence de l\'interieur',quran:'Ar-Ra\'d 11'}
  },
  {
    ar:{q:'ما أفضل الجهاد حسب الحديث النبوي؟',opts:['جهاد السيف','كلمة حق عند سلطان جائر','الصيام والصلاة','الهجرة'],correct:1,hint:'هذا الجهاد يحتاج شجاعة فكرية',quran:'الفرقان ٥٢'},
    en:{q:'What is the best jihad according to the Prophet\'s hadith?',opts:['Jihad of the sword','A word of truth before a tyrannical ruler','Fasting and prayer','Migration'],correct:1,hint:'This jihad requires intellectual courage',quran:'Al-Furqan 52'},
    fr:{q:'Quel est le meilleur jihad selon le hadith du Prophete ?',opts:['Le jihad de l\'epee','Une parole de verite devant un dirigeant tyrannique','Le jeune et la priere','La migration'],correct:1,hint:'Ce jihad necessite du courage intellectuel',quran:'Al-Furqan 52'}
  },
  {
    ar:{q:'ما أول كلمة نزلت في القرآن تدل على أهمية التعليم؟',opts:['قل','بسم','اقرأ','سبح'],correct:2,hint:'هذه الكلمة في أول سورة نزلت',quran:'العلق ١'},
    en:{q:'What first word revealed in the Quran indicates the importance of education?',opts:['Say','In the name','Read','Glorify'],correct:2,hint:'This word is in the first surah revealed',quran:'Al-Alaq 1'},
    fr:{q:'Quel premier mot revele dans le Coran indique l\'importance de l\'education ?',opts:['Dis','Au nom','Lis','Glorifie'],correct:2,hint:'Ce mot est dans la premiere sourate revelee',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'من قال: "حاسبوا أنفسكم قبل أن تحاسبوا"؟',opts:['أبو بكر الصديق','عمر بن الخطاب','علي بن أبي طالب','عثمان بن عفان'],correct:1,hint:'هذا الخليفة الثاني المعروف بالعدل',quran:'الحشر ١٨'},
    en:{q:'Who said: "Hold yourselves accountable before you are held accountable"?',opts:['Abu Bakr','Umar ibn al-Khattab','Ali ibn Abi Talib','Uthman ibn Affan'],correct:1,hint:'This is the second caliph known for justice',quran:'Al-Hashr 18'},
    fr:{q:'Qui a dit : "Jugez-vous vous-memes avant d\'etre juges" ?',opts:['Abu Bakr','Umar ibn al-Khattab','Ali ibn Abi Talib','Uthman ibn Affan'],correct:1,hint:'C\'est le deuxieme calife connu pour sa justice',quran:'Al-Hashr 18'}
  },
  {
    ar:{q:'أكمل الحديث: "المؤمن القوي خير و... إلى الله من المؤمن الضعيف"',opts:['أقرب','أحب','أعلم','أكرم'],correct:1,hint:'هذا الحديث يحث على القوة بكل أنواعها',quran:'الأنفال ٣٠'},
    en:{q:'Complete the hadith: "The strong believer is better and more ... to Allah than the weak believer"',opts:['Closer','Beloved','Knowledgeable','Honored'],correct:1,hint:'This hadith encourages strength in all forms',quran:'Al-Anfal 30'},
    fr:{q:'Completez le hadith : "Le croyant fort est meilleur et plus ... d\'Allah que le croyant faible"',opts:['Proche','Aime','Savant','Honore'],correct:1,hint:'Ce hadith encourage la force sous toutes ses formes',quran:'Al-Anfal 30'}
  },
  {
    ar:{q:'أكمل الآية: "وَجَاهِدْهُمْ بِهِ جِهَادًا ..."',opts:['صغيراً','متوسطاً','كبيراً','خفيفاً'],correct:2,hint:'هذه الآية تتحدث عن الجهاد بالقرآن',quran:'الفرقان ٥٢'},
    en:{q:'Complete the verse: "And strive against them with it a ... striving"',opts:['Small','Medium','Great','Light'],correct:2,hint:'This verse talks about striving with the Quran',quran:'Al-Furqan 52'},
    fr:{q:'Completez le verset : "Et lutte contre eux avec cela d\'une ... lutte"',opts:['Petite','Moyenne','Grande','Legere'],correct:2,hint:'Ce verset parle du combat avec le Coran',quran:'Al-Furqan 52'}
  },
  {
    ar:{q:'ما الذي يبعثه الله على رأس كل مائة سنة حسب الحديث؟',opts:['حرباً','من يجدد الدين','نبياً','زلزالاً'],correct:1,hint:'هذا الحديث عن التجديد في الإسلام',quran:'المائدة ٤٨'},
    en:{q:'What does Allah send at the head of every hundred years according to the hadith?',opts:['A war','Someone who renews the religion','A prophet','An earthquake'],correct:1,hint:'This hadith is about renewal in Islam',quran:'Al-Maidah 48'},
    fr:{q:'Qu\'est-ce qu\'Allah envoie a la tete de chaque siecle selon le hadith ?',opts:['Une guerre','Quelqu\'un qui renouvelle la religion','Un prophete','Un tremblement de terre'],correct:1,hint:'Ce hadith parle du renouveau en Islam',quran:'Al-Maidah 48'}
  },
  {
    ar:{q:'أكمل الحديث: "ما أكل أحد طعاماً قط خيراً من أن يأكل من عمل ..."',opts:['عقله','يده','ماله','أرضه'],correct:1,hint:'هذا الحديث عن أهمية العمل والكسب',quran:'الملك ١٥'},
    en:{q:'Complete the hadith: "No one has ever eaten food better than that earned by working with their own..."',opts:['Mind','Hands','Wealth','Land'],correct:1,hint:'This hadith is about the importance of working and earning',quran:'Al-Mulk 15'},
    fr:{q:'Completez le hadith : "Personne n\'a jamais mange de meilleure nourriture que celle gagnee par le travail de ses..."',opts:['Esprit','Mains','Richesse','Terre'],correct:1,hint:'Ce hadith parle de l\'importance du travail et du gain',quran:'Al-Mulk 15'}
  },
  {
    ar:{q:'من هو مؤلف كتاب "جهاد الدعوة بين عجز الداخل وكيد الخارج"؟',opts:['سيد قطب','يوسف القرضاوي','محمد الغزالي','حسن البنا'],correct:2,hint:'هذا العالم المصري لُقب بأديب الدعوة',quran:'النحل ١٢٥'},
    en:{q:'Who authored "Jihad of Dawah Between Internal Weakness and External Plots"?',opts:['Sayyid Qutb','Yusuf al-Qaradawi','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'This Egyptian scholar was nicknamed "The Literary Preacher"',quran:'An-Nahl 125'},
    fr:{q:'Qui est l\'auteur de "Jihad de la Dawah entre Faiblesse Interne et Complots Externes" ?',opts:['Sayyid Qutb','Yusuf al-Qaradawi','Mohammed al-Ghazali','Hasan al-Banna'],correct:2,hint:'Ce savant egyptien etait surnomme "Le Litteraire de la Predication"',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ ..." إن كنتم مؤمنين',opts:['الأقوياء','الأعلون','الصابرون','المنتصرون'],correct:1,hint:'هذه الآية تبعث الأمل في النفوس',quran:'آل عمران ١٣٩'},
    en:{q:'Complete the verse: "Do not weaken or grieve, for you are the ..." if you are believers',opts:['Strongest','Superior ones','Patient ones','Victorious'],correct:1,hint:'This verse inspires hope in hearts',quran:'Al Imran 139'},
    fr:{q:'Completez le verset : "Ne faiblissez pas et ne vous affligez pas alors que vous etes les ..." si vous etes croyants',opts:['Plus forts','Plus hauts','Plus patients','Victorieux'],correct:1,hint:'Ce verset inspire l\'espoir dans les coeurs',quran:'Al Imran 139'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et donne-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'طه ٢٥-٢٦'},
    en:{label:'Dua for Success',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand for me my chest and ease for me my task — Taha 25-26'},
    fr:{label:'Dua pour le Succes',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite-moi ma tache — Taha 25-26'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء الوحدة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'دعاء مأثور'},
    en:{label:'Dua for Unity',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unite our hearts and mend relations between us'},
    fr:{label:'Dua pour l\'Unite',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unis nos coeurs et repare les relations entre nous'} },
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'دعاء القنوت'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide us among those You have guided — Qunut dua'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ وَعَافِنَا فِيمَنْ عَافَيْتَ',tr:'O Allah, guide-nous parmi ceux que Tu as guides — Dua du Qunut'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'jihad-dawah-xp';
const BADGES_KEY = 'jihad-dawah-badges';
const READ_KEY = 'jihad-dawah-read';
const STREAK_KEY = 'jihad-dawah-streak';
const MODE_KEY = 'jihad-dawah-mode';
const QUIZ_BEST_KEY = 'jihad-dawah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

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
let currentCardIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabCards').textContent = t.tabCards;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('cardsTitle').textContent = t.cardsTitle;
  document.getElementById('cardsDesc').textContent = t.cardsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() { const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang]; document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`; document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join(''); }

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id); return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body"><div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>
          <div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div>
          <div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
      </div></div>
    </div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() { const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden'); if (quizState.current >= QUIZ.length) { showQuizResult(); return; } const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1; container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`; }

function answerQuiz(idx) { if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); }); const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); } quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800); }

function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() { const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100); const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20); let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; } document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden'); result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`; result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false; }

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() { const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100); document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`; }
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«جهاد الدعوة بين عجز الداخل وكيد الخارج» كتاب يحلّل التحديات التي تواجه الدعوة الإسلامية من الداخل والخارج. يشخّص الشيخ الغزالي أمراض الأمة الداخلية ويكشف المؤامرات الخارجية ويقدم حلولاً عملية تجمع بين الإصلاح والتجديد.', sourcesTitle:'المصادر', sources:['كتاب "جهاد الدعوة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Jihad of Dawah Between Internal Weakness and External Plots" analyzes challenges facing Islamic dawah from within and without. Sheikh al-Ghazali diagnoses the Ummah\'s internal diseases, exposes external conspiracies, and offers practical solutions combining reform and renewal.', sourcesTitle:'Sources', sources:['"Jihad of Dawah" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"Jihad de la Dawah entre Faiblesse Interne et Complots Externes" analyse les defis de la dawah islamique de l\'interieur et de l\'exterieur. Sheikh al-Ghazali diagnostique les maladies internes de la Oumma, expose les complots externes et propose des solutions pratiques.', sourcesTitle:'Sources', sources:['"Jihad de la Dawah" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "جهاد الدعوة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/jihad-dawah'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Jihad of Dawah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/jihad-dawah'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Jihad de la Dawah" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/jihad-dawah'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() { const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالنصر والتوفيق','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for victory','⭐ Complete all 15 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour la victoire','⭐ Completez les 15 cartes pour devenir Expert'] }; const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText'); ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join(''); ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`; }

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); } }); }

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => { document.body.classList.toggle('young-mode', ageMode === 'young'); updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter(); });
