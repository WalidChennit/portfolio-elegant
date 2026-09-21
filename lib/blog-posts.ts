export interface BlogSection {
  heading?: string;
  headingFr?: string;
  body: string[];
  bodyFr: string[];
}

export interface BlogPost {
  slug: string;
  date: string;
  dateFr: string;
  readTime: string;
  readTimeFr: string;
  tags: string[];
  tagsFr: string[];
  title: string;
  titleFr: string;
  dek: string;
  dekFr: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-with-llms',
    date: 'Feb 8, 2026',
    dateFr: '8 fév. 2026',
    readTime: '11 min read',
    readTimeFr: '11 min de lecture',
    tags: ['LLM', 'AI', 'Engineering'],
    tagsFr: ['LLM', 'IA', 'Ingénierie'],
    title: "Building with LLMs: what actually changes when your API calls a model instead of a database",
    titleFr: 'Construire avec les LLM : ce qui change vraiment quand votre API appelle un modèle plutôt qu\'une base de données',
    dek: 'Non-determinism, prompts as an untyped contract, when retrieval actually earns its complexity, and why evaluation — not the model — ends up being the hard part.',
    dekFr: "Le non-déterminisme, les prompts comme contrat non typé, quand le retrieval justifie vraiment sa complexité, et pourquoi l'évaluation — pas le modèle — finit par être la partie difficile.",
    sections: [
      {
        heading: 'A different kind of dependency',
        headingFr: 'Une dépendance d\'un genre différent',
        body: [
          "Coming from a background of biometric and OCR pipelines on the e-KYC work at CPA — where a computer-vision model's output is at least a well-defined vector or bounding box — wiring an LLM into a product forces a mental adjustment. A database query is deterministic: same input, same rows, every time. An LLM call is not. The same prompt can come back phrased two different ways, occasionally with a different answer entirely, and your system has to be built assuming that from day one instead of discovering it in production.",
          "That single property — non-determinism — is the root of almost every LLM engineering problem worth talking about. It's not that the models are unreliable in some vague sense; it's that a huge amount of standard backend practice quietly assumes determinism, and every one of those assumptions needs to be re-examined.",
        ],
        bodyFr: [
          "En venant d'un contexte de pipelines biométriques et OCR sur le projet e-KYC chez CPA — où la sortie d'un modèle de vision par ordinateur est au moins un vecteur ou une bounding box bien définie — brancher un LLM dans un produit impose un ajustement mental. Une requête base de données est déterministe : même entrée, mêmes lignes, à chaque fois. Un appel LLM ne l'est pas. Le même prompt peut revenir formulé de deux façons différentes, parfois avec une réponse totalement différente, et votre système doit être conçu en partant de ce principe dès le premier jour plutôt que de le découvrir en production.",
          "Cette seule propriété — le non-déterminisme — est à l'origine de presque tous les problèmes d'ingénierie LLM qui méritent d'être évoqués. Ce n'est pas que les modèles soient peu fiables au sens vague du terme ; c'est qu'une énorme partie des pratiques backend standards suppose implicitement le déterminisme, et chacune de ces suppositions doit être réexaminée.",
        ],
      },
      {
        heading: "Prompts are an API contract you can't type-check",
        headingFr: 'Les prompts sont un contrat d\'API que l\'on ne peut pas typer',
        body: [
          "A REST endpoint has a schema. A prompt has… whatever text you wrote, and a hope. I've settled into treating prompts exactly like code: versioned in the repo, reviewed in pull requests, and never edited directly in a dashboard where the change isn't tracked. The moment a prompt lives outside version control, you lose the ability to answer 'what changed between the version that worked and the version that doesn't' — which is the first question you'll ask the day output quality regresses.",
          "Structured output — asking the model to return JSON against an explicit schema, and validating that response the same way you'd validate any external input — closes most of the gap between 'an LLM' and 'a typed API.' It doesn't make the model deterministic, but it makes the failure mode a parseable, catchable error instead of a silently malformed string flowing downstream.",
        ],
        bodyFr: [
          "Un endpoint REST a un schéma. Un prompt a… le texte que vous avez écrit, et un espoir. J'ai fini par traiter les prompts exactement comme du code : versionnés dans le dépôt, revus en pull request, et jamais édités directement dans un tableau de bord où le changement n'est pas tracé. Dès qu'un prompt vit hors du contrôle de version, on perd la capacité de répondre à « qu'est-ce qui a changé entre la version qui marchait et celle qui ne marche plus » — la première question qu'on se pose le jour où la qualité des réponses se dégrade.",
          "La sortie structurée — demander au modèle de renvoyer du JSON conforme à un schéma explicite, et valider cette réponse comme on validerait n'importe quelle entrée externe — comble l'essentiel de l'écart entre « un LLM » et « une API typée ». Cela ne rend pas le modèle déterministe, mais cela transforme le mode d'échec en une erreur analysable et détectable plutôt qu'en une chaîne mal formée qui circule silencieusement en aval.",
        ],
      },
      {
        heading: 'Where retrieval earns its complexity (and where it doesn\'t)',
        headingFr: 'Où le retrieval justifie sa complexité (et où il ne le fait pas)',
        body: [
          "Retrieval-augmented generation gets reached for by default in a lot of teams, and it's genuinely the right tool when the answer depends on information that changes after the model's training cutoff, or that's private to your system — a user's own documents, a company's internal knowledge base. It is not the right tool for grounding general reasoning, and it adds a whole new failure surface: chunking strategy, embedding drift, retrieval ranking, and a second place non-determinism can sneak in before the model even sees a prompt.",
          "The question I ask before reaching for RAG is simpler than the architecture: does the fact I need actually exist somewhere retrievable, or am I hoping retrieval will paper over a reasoning gap the model doesn't have? Those are different problems, and only one of them is solved by adding a vector database.",
        ],
        bodyFr: [
          "Le retrieval-augmented generation est devenu le réflexe par défaut de beaucoup d'équipes, et c'est réellement le bon outil quand la réponse dépend d'informations qui changent après la date limite d'entraînement du modèle, ou qui sont privées à votre système — les documents propres d'un utilisateur, la base de connaissances interne d'une entreprise. Ce n'est pas le bon outil pour ancrer un raisonnement général, et cela ajoute toute une nouvelle surface d'échec : stratégie de découpage, dérive des embeddings, classement du retrieval, et un deuxième endroit où le non-déterminisme peut s'infiltrer avant même que le modèle ne voie un prompt.",
          "La question que je pose avant de recourir au RAG est plus simple que l'architecture elle-même : est-ce que le fait dont j'ai besoin existe réellement quelque part de façon interrogeable, ou est-ce que j'espère que le retrieval va masquer une lacune de raisonnement que le modèle n'a pas ? Ce sont deux problèmes différents, et un seul d'entre eux se résout en ajoutant une base de données vectorielle.",
        ],
      },
      {
        heading: 'Latency, cost, and the fallback path',
        headingFr: 'Latence, coût, et le chemin de repli',
        body: [
          "Every LLM call is a network round-trip to a service you don't control, with latency and cost that scale with output length — which is a very different budget from a database call. Streaming responses back to the client hides a lot of that latency perceptually, the same trick that made the e-KYC capture flow feel instant despite real model inference happening underneath. What streaming doesn't hide is cost, so caching identical or near-identical requests, and setting hard ceilings on output length for anything running in a loop, both stop being optional past a certain scale.",
          "And because the dependency is genuinely less reliable than a database — rate limits, provider outages, occasional malformed output — every LLM-backed feature needs an explicit degraded path: a cached answer, a simpler rule-based fallback, or an honest 'try again' state, decided at design time rather than discovered the first time the provider has a bad day.",
        ],
        bodyFr: [
          "Chaque appel LLM est un aller-retour réseau vers un service que vous ne contrôlez pas, avec une latence et un coût qui augmentent avec la longueur de la réponse — un budget très différent d'un appel base de données. Le streaming des réponses vers le client masque une bonne partie de cette latence perçue, la même astuce qui rendait le parcours de capture e-KYC instantané malgré une véritable inférence de modèle en coulisses. Ce que le streaming ne masque pas, c'est le coût : mettre en cache les requêtes identiques ou quasi identiques, et fixer des plafonds stricts sur la longueur des réponses pour tout ce qui tourne en boucle, cessent d'être optionnels passé un certain seuil.",
          "Et comme la dépendance est réellement moins fiable qu'une base de données — limites de débit, pannes du fournisseur, sorties parfois mal formées — chaque fonctionnalité adossée à un LLM a besoin d'un chemin dégradé explicite : une réponse en cache, un repli plus simple basé sur des règles, ou un état honnête « réessayez » — décidé à la conception plutôt que découvert le jour où le fournisseur a un problème.",
        ],
      },
      {
        heading: "Evaluation is the part nobody enjoys",
        headingFr: "L'évaluation, la partie que personne n'aime",
        body: [
          "The unglamorous truth: getting a prompt to work once is easy, and knowing whether your last change made things better or worse across hundreds of real inputs is the actual engineering problem. That needs the same discipline as any other regression suite — a fixed set of representative inputs with known-good expectations, run automatically before a prompt or model change ships, not eyeballed on three examples in a notebook. It's less interesting than writing the prompt, and it's the difference between a demo and something you can keep shipping changes to without quietly degrading it.",
        ],
        bodyFr: [
          "La vérité peu glorieuse : faire fonctionner un prompt une fois est facile, et savoir si votre dernier changement a amélioré ou dégradé les choses sur des centaines d'entrées réelles est le véritable problème d'ingénierie. Cela demande la même discipline qu'une suite de tests de non-régression classique — un ensemble fixe d'entrées représentatives avec des attentes connues et validées, exécuté automatiquement avant chaque changement de prompt ou de modèle, et non évalué à l'œil sur trois exemples dans un notebook. C'est moins intéressant que d'écrire le prompt, et c'est ce qui fait la différence entre une démo et quelque chose qu'on peut continuer à faire évoluer sans le dégrader silencieusement.",
        ],
      },
    ],
  },
  {
    slug: 'ekyc-biometrics-cpa',
    date: 'Oct 4, 2025',
    dateFr: '4 oct. 2025',
    readTime: '14 min read',
    readTimeFr: '14 min de lecture',
    tags: ['KYC', 'Biometrics', 'NestJS'],
    tagsFr: ['KYC', 'Biométrie', 'NestJS'],
    featured: true,
    title: 'Shipping AI biometrics into a national bank: lessons from building e-KYC at CPA',
    titleFr: 'Déployer de la biométrie IA dans une banque nationale : leçons tirées de l\'e-KYC chez CPA',
    dek: "OCR + FastMRZ for document intelligence, DeepFace for face matching, OpenCV for liveness — how we stitched it all together inside a regulated banking environment and kept the pipeline fast enough to feel instant on mid-range Android devices.",
    dekFr: "OCR + FastMRZ pour l'intelligence documentaire, DeepFace pour la reconnaissance faciale, OpenCV pour la détection de vivacité — comment nous avons assemblé tout cela dans un environnement bancaire réglementé, en gardant un pipeline assez rapide pour paraître instantané sur des Android milieu de gamme.",
    sections: [
      {
        heading: 'The brief',
        headingFr: 'Le brief',
        body: [
          "Crédit Populaire d'Algérie wanted to let new customers open an account from their phone, with no branch visit and no human reviewing a photo of an ID card by eye. That's a simple sentence that hides a genuinely hard problem: you have to prove, in a few seconds, that the person holding the phone is a real human, that they match the ID they're presenting, and that the ID itself hasn't been tampered with — all while running on whatever Android device a customer happens to own, not a lab-grade test phone.",
          "The team building this was small: a React Native mobile client, a NestJS backend split into clean modules, and three separate computer-vision problems bolted onto the identity flow. My job was to make those three pieces feel like one smooth, boring five-step form instead of three research projects stapled together.",
        ],
        bodyFr: [
          "Le Crédit Populaire d'Algérie voulait permettre aux nouveaux clients d'ouvrir un compte depuis leur téléphone, sans passage en agence et sans qu'un humain n'examine à l'œil une photo de carte d'identité. Une phrase simple qui cache un problème réellement difficile : il faut prouver, en quelques secondes, que la personne qui tient le téléphone est un être humain réel, qu'elle correspond bien à la pièce d'identité présentée, et que cette pièce n'a pas été falsifiée — le tout sur n'importe quel appareil Android que possède le client, pas un téléphone de test calibré en laboratoire.",
          "L'équipe qui a construit cela était réduite : un client mobile React Native, un backend NestJS découpé en modules propres, et trois problèmes de vision par ordinateur distincts greffés sur le parcours d'identité. Mon rôle était de faire en sorte que ces trois briques donnent l'impression d'un seul formulaire fluide et sans surprise en cinq étapes, plutôt que trois projets de recherche assemblés tant bien que mal.",
        ],
      },
      {
        heading: 'Three problems wearing one UI',
        headingFr: 'Trois problèmes derrière une seule interface',
        body: [
          "Document extraction came first. We used OCR combined with FastMRZ to read the machine-readable zone on the national ID — the two lines of characters printed along the bottom that encode name, date of birth and document number in a fixed format. MRZ parsing is forgiving of OCR noise because it's a checksum-validated format, which made it the natural first pass before falling back to full-frame OCR for fields that aren't in the MRZ.",
          "Face matching came next, using DeepFace to compare the portrait on the extracted document against a live selfie. The interesting engineering problem here wasn't the matching model itself — it's a solved problem at this point — it was normalizing wildly inconsistent input: a phone photo of a laminated card under fluorescent branch lighting versus a front-facing camera selfie in someone's kitchen. We spent more time on image preprocessing (crop, lighting normalization, glare rejection) than on the matching threshold itself.",
          "Liveness detection closed the loop with OpenCV, making sure the 'live selfie' wasn't a photo of a photo. We used simple, resilient signals — prompted micro-movements and blink detection — rather than anything exotic, because the failure mode we cared most about was false rejections of legitimate customers on cheap devices, not defeating a sophisticated attacker with studio equipment.",
        ],
        bodyFr: [
          "L'extraction documentaire venait en premier. Nous avons utilisé l'OCR combiné à FastMRZ pour lire la zone de lecture automatique de la carte d'identité — les deux lignes de caractères imprimées en bas qui encodent le nom, la date de naissance et le numéro de document dans un format fixe. Le parsing MRZ tolère bien le bruit OCR car c'est un format validé par checksum, ce qui en faisait le passage naturel avant de recourir à l'OCR plein cadre pour les champs absents de la MRZ.",
          "La reconnaissance faciale venait ensuite, avec DeepFace pour comparer le portrait extrait du document à un selfie en direct. Le problème d'ingénierie intéressant n'était pas le modèle de comparaison lui-même — c'est un problème résolu aujourd'hui — mais la normalisation d'entrées extrêmement hétérogènes : une photo de carte plastifiée prise au téléphone sous l'éclairage fluorescent d'une agence, face à un selfie pris avec la caméra frontale dans la cuisine de quelqu'un. Nous avons passé plus de temps sur le prétraitement d'image (recadrage, normalisation de la lumière, suppression des reflets) que sur le seuil de correspondance lui-même.",
          "La détection de vivacité bouclait le tout avec OpenCV, en s'assurant que le « selfie en direct » n'était pas la photo d'une photo. Nous avons utilisé des signaux simples et robustes — micro-mouvements demandés et détection de clignement — plutôt que quelque chose d'exotique, car le mode d'échec qui nous préoccupait le plus était le rejet à tort de clients légitimes sur des appareils bas de gamme, pas la mise en échec d'un attaquant sophistiqué équipé en studio.",
        ],
      },
      {
        heading: 'Making it feel instant',
        headingFr: 'Donner une impression d\'instantanéité',
        body: [
          "None of this matters if a customer gives up halfway through. We kept the perceived latency down by running document-side checks (MRZ validation, blur/glare detection) client-side before anything hits the network, so a bad capture gets rejected in place instead of round-tripping to the server first. The heavier models — face match and liveness scoring — run server-side behind a NestJS module boundary that we could scale independently once we saw where the queue actually backed up.",
          "The result held up to a sub-second feel end-to-end on mid-range Android hardware for the common path, with the slow path reserved for genuinely bad captures that needed a retry — which is exactly where you want the friction to live.",
        ],
        bodyFr: [
          "Rien de tout cela n'a d'importance si le client abandonne à mi-parcours. Nous avons limité la latence perçue en exécutant les vérifications côté document (validation MRZ, détection de flou/reflet) côté client avant tout envoi réseau, de sorte qu'une mauvaise capture soit rejetée sur place plutôt que de faire un aller-retour vers le serveur. Les modèles plus lourds — correspondance faciale et score de vivacité — tournent côté serveur derrière une frontière de module NestJS que nous pouvions faire évoluer indépendamment une fois identifié où la file d'attente se bloquait réellement.",
          "Le résultat tenait une sensation inférieure à la seconde de bout en bout sur du matériel Android milieu de gamme pour le chemin courant, la lenteur étant réservée aux captures réellement mauvaises nécessitant une nouvelle tentative — exactement là où l'on souhaite que la friction se situe.",
        ],
      },
      {
        heading: 'What regulated banking actually adds',
        headingFr: 'Ce que la banque réglementée ajoute réellement',
        body: [
          "The computer vision was the fun part. The unglamorous majority of the work was everything banking compliance demands around it: encrypting document images at rest and in transit, keeping a tamper-evident audit trail of every verification decision, building in a manual-review escalation path for anything the automated pipeline wasn't confident about, and making sure nothing about the flow silently exposed personally identifiable information in logs. None of that shows up in a demo video, and all of it is the difference between a prototype and something a bank can actually put its name on.",
        ],
        bodyFr: [
          "La vision par ordinateur était la partie amusante. La majorité peu glorieuse du travail était tout ce que la conformité bancaire exige autour : chiffrer les images de documents au repos et en transit, maintenir une piste d'audit infalsifiable de chaque décision de vérification, prévoir un chemin d'escalade vers une revue manuelle pour tout ce dont le pipeline automatisé n'était pas sûr, et s'assurer qu'aucune donnée personnelle identifiable ne fuitait silencieusement dans les logs. Rien de tout cela n'apparaît dans une vidéo de démo, et c'est pourtant exactement ce qui fait la différence entre un prototype et quelque chose sur lequel une banque peut réellement apposer son nom.",
        ],
      },
    ],
  },
  {
    slug: 'rbac-engine-rdis',
    date: 'Sep 18, 2025',
    dateFr: '18 sep. 2025',
    readTime: '11 min read',
    readTimeFr: '11 min de lecture',
    tags: ['RBAC', 'NestJS', 'Architecture'],
    tagsFr: ['RBAC', 'NestJS', 'Architecture'],
    title: "Designing an RBAC engine that doesn't make your CTO cry",
    titleFr: 'Concevoir un moteur RBAC qui ne fait pas pleurer votre CTO',
    dek: 'What we learned building role-based access for researchers, project leads and admins in the CDTA RDIS platform.',
    dekFr: "Ce que nous avons appris en construisant l'accès basé sur les rôles pour les chercheurs, chefs de projet et administrateurs de la plateforme RDIS du CDTA.",
    sections: [
      {
        heading: 'The shape of the problem',
        headingFr: 'La forme du problème',
        body: [
          "RDIS manages the research lifecycle at CDTA — projects, missions, purchase requests, service approvals — for people who each see a different slice of that world. A team member should see their own project's experiments. A team lead approves requests for their team. A secretary handles administrative workflows across teams. A director signs off on budget and mission orders. A superuser configures the whole system. Seven roles in total, and the temptation with seven roles is always to reach for a big permission matrix and call it done.",
          "That temptation is a trap. A flat matrix of role × action checks boxes fast, and then six months later nobody can explain why a chef d'équipe can approve one kind of request but not another, because the answer lives in twelve scattered `if (user.role === 'chef')` checks instead of one place.",
        ],
        bodyFr: [
          "RDIS gère le cycle de vie de la recherche au CDTA — projets, missions, demandes d'achat, approbations de services — pour des personnes qui voient chacune une tranche différente de ce monde. Un membre d'équipe voit les expériences de son propre projet. Un chef d'équipe approuve les demandes de son équipe. Une secrétaire gère les workflows administratifs à travers les équipes. Un directeur valide le budget et les ordres de mission. Un superutilisateur configure l'ensemble du système. Sept rôles au total, et la tentation avec sept rôles est toujours de partir sur une grande matrice de permissions et de considérer le sujet clos.",
          "Cette tentation est un piège. Une matrice plate rôle × action coche les cases rapidement, et six mois plus tard, plus personne ne peut expliquer pourquoi un chef d'équipe peut approuver un type de demande mais pas un autre, parce que la réponse se trouve dans douze vérifications `if (user.role === 'chef')` éparpillées plutôt qu'à un seul endroit.",
        ],
      },
      {
        heading: "What we built instead",
        headingFr: 'Ce que nous avons construit à la place',
        body: [
          "We separated *who you are* from *what you can touch*. Roles define a set of permissions (create_mission, approve_purchase, view_team_experiments), and every protected route or mutation checks a permission, never a role name directly. That one discipline — no `role === X` string comparisons in business logic, ever — is what keeps the system legible as it grows, because adding an eighth role later means composing existing permissions instead of hunting down every place a role name was hardcoded.",
          'On top of that sits scoping: a permission on its own answers "can this user approve purchases," but not "which purchases." We attach a scope resolver to actions that need one — team-level, project-level, or global — so a chef d\'équipe with approve_purchase only ever sees requests inside their own team\'s scope, enforced at the query layer in NestJS with Prisma, not filtered after the fact in the controller.',
          "Multi-level validation workflows fell out of this almost for free: a mission order that needs both a team lead's and a director's sign-off is just a workflow definition listing two required permissions in sequence, not a special case bolted onto the mission-order module.",
        ],
        bodyFr: [
          "Nous avons séparé *qui vous êtes* de *ce que vous pouvez toucher*. Les rôles définissent un ensemble de permissions (create_mission, approve_purchase, view_team_experiments), et chaque route ou mutation protégée vérifie une permission, jamais un nom de rôle directement. Cette seule discipline — aucune comparaison de chaîne `role === X` dans la logique métier, jamais — est ce qui garde le système lisible à mesure qu'il grandit, car ajouter un huitième rôle plus tard revient à composer des permissions existantes plutôt qu'à traquer chaque endroit où un nom de rôle était codé en dur.",
          "Par-dessus vient le scoping : une permission seule répond à « cet utilisateur peut-il approuver des achats », mais pas à « lesquels ». Nous attachons un résolveur de portée aux actions qui en ont besoin — niveau équipe, niveau projet, ou global — de sorte qu'un chef d'équipe avec approve_purchase ne voit jamais que les demandes de son propre périmètre, appliqué au niveau de la requête dans NestJS avec Prisma, et non filtré après coup dans le contrôleur.",
          "Les workflows de validation multi-niveaux en ont découlé presque gratuitement : un ordre de mission qui nécessite la signature d'un chef d'équipe et d'un directeur n'est qu'une définition de workflow listant deux permissions requises en séquence, et non un cas particulier greffé sur le module des ordres de mission.",
        ],
      },
      {
        heading: 'The guard rail that mattered most',
        headingFr: 'Le garde-fou le plus important',
        body: [
          "The single decision I'd defend hardest: permission checks live in a NestJS guard decorator at the route level, and nowhere else. It's tempting to also add a defensive check deeper in a service method 'just in case,' but that duplication is exactly how RBAC systems rot — two sources of truth that quietly drift apart until someone can do something the UI didn't mean to allow. One source of truth, enforced at the boundary, tested at the boundary.",
        ],
        bodyFr: [
          "La décision que je défendrais le plus fermement : les vérifications de permissions vivent dans un décorateur guard NestJS au niveau de la route, et nulle part ailleurs. Il est tentant d'ajouter aussi une vérification défensive plus profondément dans une méthode de service « au cas où », mais cette duplication est exactement ce qui fait pourrir les systèmes RBAC — deux sources de vérité qui dérivent silencieusement jusqu'à ce que quelqu'un puisse faire quelque chose que l'interface n'avait pas prévu d'autoriser. Une seule source de vérité, appliquée à la frontière, testée à la frontière.",
        ],
      },
    ],
  },
  {
    slug: 'spring-boot-react-native-diar-dzair',
    date: 'Jul 22, 2025',
    dateFr: '22 juil. 2025',
    readTime: '10 min read',
    readTimeFr: '10 min de lecture',
    tags: ['Spring Boot', 'React Native', 'Mobile'],
    tagsFr: ['Spring Boot', 'React Native', 'Mobile'],
    title: "Spring Boot & React Native: a banking app's two halves",
    titleFr: 'Spring Boot & React Native : les deux moitiés d\'une application bancaire',
    dek: 'Building the Diar Dzair virtual bank — how the mobile UX and the Java backend stay in sync.',
    dekFr: 'Construire la banque virtuelle Diar Dzair — comment l\'UX mobile et le backend Java restent synchronisés.',
    sections: [
      {
        heading: 'Two very different worlds',
        headingFr: 'Deux mondes très différents',
        body: [
          "Diar Dzair is a full virtual banking platform: a React Native (Expo) app for end users, and a Spring Boot backend handling accounts, transactions, digital wallets and history streams. Those two halves are built by people thinking in completely different idioms — one side is optimizing for render performance and gesture feel on a phone, the other is optimizing for transactional correctness and throughput on a server. Getting them to agree on a contract is most of the job.",
        ],
        bodyFr: [
          "Diar Dzair est une plateforme de banque virtuelle complète : une application React Native (Expo) pour les utilisateurs finaux, et un backend Spring Boot gérant les comptes, transactions, portefeuilles numériques et flux d'historique. Ces deux moitiés sont construites par des personnes qui pensent dans des idiomes complètement différents — un côté optimise la performance de rendu et le ressenti gestuel sur téléphone, l'autre optimise la correction transactionnelle et le débit sur serveur. Les faire s'accorder sur un contrat constitue l'essentiel du travail.",
        ],
      },
      {
        heading: 'Contracts before code',
        headingFr: 'Les contrats avant le code',
        body: [
          "We locked down REST API contracts before writing the screens that would consume them — request/response shapes, error codes, pagination conventions for transaction history — because the alternative is a frontend and backend evolving their own private dialects and reconciling them in painful late-stage debugging sessions. Spring Boot's typed DTOs made this easy to keep honest: if the contract changed, the backend wouldn't compile until every consumer was updated too.",
          'Money movement forced a stricter version of this discipline. Every balance-changing endpoint is idempotent by design, keyed off a client-generated request ID, because a mobile network retry that silently double-submits a transfer is not an edge case in banking — it\'s a certainty you have to design for from day one, not patch in after the first incident.',
        ],
        bodyFr: [
          "Nous avons figé les contrats d'API REST avant même d'écrire les écrans qui les consommeraient — formes des requêtes/réponses, codes d'erreur, conventions de pagination pour l'historique des transactions — car l'alternative, c'est un frontend et un backend qui développent chacun leur propre dialecte privé et qu'il faut réconcilier lors de pénibles sessions de débogage tardives. Les DTO typés de Spring Boot ont facilité le maintien de cette rigueur : si le contrat changeait, le backend ne compilait plus tant que chaque consommateur n'était pas mis à jour.",
          "Les mouvements d'argent ont imposé une version encore plus stricte de cette discipline. Chaque endpoint modifiant un solde est idempotent par conception, indexé sur un identifiant de requête généré côté client, car une nouvelle tentative réseau mobile qui soumet silencieusement un virement en double n'est pas un cas marginal en banque — c'est une certitude qu'il faut concevoir dès le premier jour, pas corriger après le premier incident.",
        ],
      },
      {
        heading: 'What React Native actually needed from the backend',
        headingFr: 'Ce dont React Native avait vraiment besoin du backend',
        body: [
          "The mobile side cared about two things above all: predictable latency and rich filtering on transaction history without shipping the whole ledger to the phone. That pushed filtering and pagination logic server-side, with the Expo client staying a thin rendering layer over a well-shaped API rather than reimplementing business rules on-device — which also meant a rule change (say, a new fraud check) shipped instantly to every user without an app store release.",
          "The payoff of getting the contract right early was that the two teams could work almost independently after the first two weeks — the backend team scaling out the wallet and fraud-prevention layer, the mobile team polishing gesture-level UX — without either side blocking the other.",
        ],
        bodyFr: [
          "Le côté mobile se souciait avant tout de deux choses : une latence prévisible et un filtrage riche de l'historique des transactions sans envoyer tout le grand livre au téléphone. Cela a poussé la logique de filtrage et de pagination côté serveur, le client Expo restant une fine couche de rendu au-dessus d'une API bien conçue plutôt que de réimplémenter les règles métier sur l'appareil — ce qui signifiait aussi qu'un changement de règle (par exemple un nouveau contrôle anti-fraude) était déployé instantanément à tous les utilisateurs sans passer par une mise à jour de l'app store.",
          "Le bénéfice d'avoir bien posé le contrat dès le début, c'est que les deux équipes ont pu travailler presque indépendamment après les deux premières semaines — l'équipe backend faisant évoluer le portefeuille et la couche anti-fraude, l'équipe mobile peaufinant l'UX au niveau des gestes — sans qu'aucun côté ne bloque l'autre.",
        ],
      },
    ],
  },
  {
    slug: 'shape-of-a-great-rest-api',
    date: 'May 30, 2025',
    dateFr: '30 mai 2025',
    readTime: '9 min read',
    readTimeFr: '9 min de lecture',
    tags: ['REST', 'Developer Experience'],
    tagsFr: ['REST', 'Expérience développeur'],
    title: 'The shape of a great REST API',
    titleFr: 'À quoi ressemble une excellente API REST',
    dek: 'Naming, versioning, errors, idempotency. A field guide pulled from four production NestJS backends.',
    dekFr: 'Nommage, versioning, erreurs, idempotence. Un guide de terrain tiré de quatre backends NestJS en production.',
    sections: [
      {
        heading: 'Naming is a promise',
        headingFr: 'Nommer, c\'est promettre',
        body: [
          "Across RDIS, e-KYC, Meeting Board and Diar Dzair's backend surfaces, the APIs that aged well all shared one trait: resource names that describe a noun, not an action. `/purchase-requests/:id/approve` beats `/approvePurchaseRequest?id=`, not for taste but because it composes — the same resource naturally supports `/purchase-requests/:id/reject`, `/purchase-requests/:id/history`, without inventing a new verb-shaped endpoint every time a new operation shows up.",
        ],
        bodyFr: [
          "À travers RDIS, e-KYC, Meeting Board et les surfaces backend de Diar Dzair, les API qui ont bien vieilli partagent toutes un même trait : des noms de ressources qui décrivent un nom commun, pas une action. `/purchase-requests/:id/approve` l'emporte sur `/approvePurchaseRequest?id=`, non par goût mais parce que cela se compose — la même ressource supporte naturellement `/purchase-requests/:id/reject`, `/purchase-requests/:id/history`, sans inventer un nouvel endpoint en forme de verbe à chaque nouvelle opération.",
        ],
      },
      {
        heading: 'Errors are part of the API, not an afterthought',
        headingFr: 'Les erreurs font partie de l\'API, pas un ajout tardif',
        body: [
          "A REST API's error shape is as much a contract as its success shape, and it's the part teams design last and regret first. We standardized on one envelope everywhere — a machine-readable error code, a human message, and a field-level detail array for validation failures — so a frontend can branch on `error.code` instead of string-matching a message meant for a human. That single decision, applied consistently, killed an entire category of 'why is the error toast blank' bugs.",
        ],
        bodyFr: [
          "La forme des erreurs d'une API REST est un contrat au même titre que celle de ses succès, et c'est la partie que les équipes conçoivent en dernier et regrettent en premier. Nous avons standardisé une seule enveloppe partout — un code d'erreur exploitable par une machine, un message humain, et un tableau de détails par champ pour les échecs de validation — afin qu'un frontend puisse brancher sa logique sur `error.code` plutôt que de faire du pattern-matching sur un message destiné à un humain. Cette seule décision, appliquée systématiquement, a éliminé toute une catégorie de bugs du type « pourquoi le toast d'erreur est-il vide ».",
        ],
      },
      {
        heading: 'Idempotency is not optional past a certain point',
        headingFr: "L'idempotence n'est plus optionnelle passé un certain point",
        body: [
          "Any endpoint that changes money, state that triggers a notification, or anything a mobile client might retry on a flaky connection needs to be safe to call twice. We support this with a client-supplied idempotency key on mutating endpoints, checked against a short-lived store before the mutation runs. It's a small addition to the request shape that removes an entire class of production incidents around double-submission.",
        ],
        bodyFr: [
          "Tout endpoint qui déplace de l'argent, change un état déclenchant une notification, ou que peut retenter un client mobile sur une connexion instable, doit pouvoir être appelé deux fois sans danger. Nous supportons cela via une clé d'idempotence fournie par le client sur les endpoints de mutation, vérifiée contre un stockage de courte durée avant l'exécution de la mutation. C'est un petit ajout à la forme de la requête qui élimine toute une classe d'incidents de production liés aux doubles soumissions.",
        ],
      },
      {
        heading: 'Versioning: plan the exit before you need it',
        headingFr: 'Versioning : préparer la sortie avant d\'en avoir besoin',
        body: [
          "We version at the URL (`/v1/...`) from day one, even for the very first release, because retrofitting a version scheme onto a live API with real clients is far more painful than reserving the URL segment when nobody's using it yet. It costs nothing early and buys freedom later.",
        ],
        bodyFr: [
          "Nous versionnons dans l'URL (`/v1/...`) dès le premier jour, même pour la toute première version, car ajouter un système de versioning après coup sur une API en production avec de vrais clients est bien plus douloureux que de réserver le segment d'URL quand personne ne l'utilise encore. Cela ne coûte rien au départ et achète de la liberté plus tard.",
        ],
      },
    ],
  },
  {
    slug: 'why-i-teach-brainerx',
    date: 'Apr 12, 2025',
    dateFr: '12 avr. 2025',
    readTime: '7 min read',
    readTimeFr: '7 min de lecture',
    tags: ['Mentorship', 'Craft'],
    tagsFr: ['Mentorat', 'Métier'],
    title: 'Why I teach: notes from BrainerX',
    titleFr: 'Pourquoi j\'enseigne : notes depuis BrainerX',
    dek: 'Mentoring made me a better engineer. What I learned teaching juniors how to think in systems.',
    dekFr: "Le mentorat a fait de moi un meilleur ingénieur. Ce que j'ai appris en apprenant aux juniors à penser en systèmes.",
    sections: [
      {
        heading: "Teaching exposes what you don't actually understand",
        headingFr: "Enseigner révèle ce qu'on ne comprend pas vraiment",
        body: [
          "I started teaching programming alongside my engineering work expecting it to be a one-way transfer — I know things, I explain them. What actually happens is that explaining a concept out loud to someone who will immediately ask 'but why' exposes every place where your own understanding was pattern-matching instead of reasoning. Explaining why we reach for a specific data structure, or why a particular error-handling pattern exists, forces you to reconstruct the reasoning from scratch instead of reciting the conclusion.",
        ],
        bodyFr: [
          "J'ai commencé à enseigner la programmation en parallèle de mon travail d'ingénieur en m'attendant à un transfert à sens unique — je sais des choses, je les explique. Ce qui se passe en réalité, c'est qu'expliquer un concept à voix haute à quelqu'un qui va immédiatement demander « mais pourquoi » révèle chaque endroit où votre propre compréhension relevait du pattern-matching plutôt que du raisonnement. Expliquer pourquoi on choisit telle structure de données, ou pourquoi tel pattern de gestion d'erreurs existe, oblige à reconstruire le raisonnement depuis zéro plutôt qu'à réciter la conclusion.",
        ],
      },
      {
        heading: 'The most useful thing I teach',
        headingFr: 'La chose la plus utile que j\'enseigne',
        body: [
          "Beginners default to solving the symptom in front of them. The habit I try hardest to instill is stepping back one level before writing code: what's the actual shape of this problem, and what's the smallest correct version of it? Debugging coaching follows the same pattern — resisting the urge to hand someone the fix, and instead asking the next question that narrows the search space, because the skill that transfers isn't the fix, it's the narrowing.",
        ],
        bodyFr: [
          "Les débutants ont tendance à résoudre par défaut le symptôme qu'ils ont sous les yeux. L'habitude que je m'efforce le plus d'instiller est de prendre du recul avant d'écrire du code : quelle est la forme réelle de ce problème, et quelle en est la plus petite version correcte ? L'accompagnement au débogage suit le même schéma — résister à l'envie de donner directement la solution, et poser plutôt la question suivante qui réduit l'espace de recherche, car la compétence qui se transmet n'est pas la solution, c'est le fait de savoir réduire le champ.",
        ],
      },
      {
        heading: "It's not charity, it's practice",
        headingFr: "Ce n'est pas de la charité, c'est de la pratique",
        body: [
          "Structured curriculum design, live workshops, code reviews, one-to-one mentorship — I treat teaching as deliberate practice on the same muscles I use in production work: communicating a design decision clearly, reviewing someone else's code without ego, and holding a mental model of a system precise enough to explain, not just precise enough to use.",
        ],
        bodyFr: [
          "Conception structurée de programmes, ateliers en direct, revues de code, mentorat individuel — je considère l'enseignement comme un entraînement délibéré des mêmes muscles que j'utilise dans mon travail de production : communiquer clairement une décision de conception, relire le code de quelqu'un d'autre sans ego, et maintenir un modèle mental d'un système assez précis pour être expliqué, pas seulement assez précis pour être utilisé.",
        ],
      },
    ],
  },
  {
    slug: 'dotnet-to-typescript-migration',
    date: 'Nov 4, 2024',
    dateFr: '4 nov. 2024',
    readTime: '8 min read',
    readTimeFr: '8 min de lecture',
    tags: ['.NET', 'TypeScript', 'Career'],
    tagsFr: ['.NET', 'TypeScript', 'Carrière'],
    title: 'From C# .NET to TypeScript: a one-year migration of muscle memory',
    titleFr: 'De C# .NET à TypeScript : un an pour migrer les réflexes',
    dek: 'What snapped, what carried over, and the patterns I now write in both stacks without thinking.',
    dekFr: 'Ce qui a cassé, ce qui a survécu, et les patterns que j\'écris désormais sans y penser dans les deux stacks.',
    sections: [
      {
        heading: 'Where it started',
        headingFr: 'Le point de départ',
        body: [
          "Incident Net, the IT incident management and ticketing system I built for Banque Nationale d'Algérie, ran on a React.js frontend with a C# .NET / Entity Framework backend. It was my deepest exposure to the .NET world — strongly typed from top to bottom, Entity Framework doing a lot of the heavy lifting around migrations and relational mapping, and a request pipeline built around dependency injection that .NET makes almost impossible to get wrong.",
        ],
        bodyFr: [
          "Incident Net, le système de gestion des incidents IT et de tickets que j'ai construit pour la Banque Nationale d'Algérie, tournait sur un frontend React.js avec un backend C# .NET / Entity Framework. C'était mon exposition la plus profonde au monde .NET — typé de bout en bout, Entity Framework prenant en charge une grande partie du travail autour des migrations et du mapping relationnel, et un pipeline de requêtes construit autour de l'injection de dépendances que .NET rend presque impossible à mal faire.",
        ],
      },
      {
        heading: 'What carried over cleanly',
        headingFr: 'Ce qui s\'est transféré proprement',
        body: [
          "The mental model, mostly intact: layered architecture, dependency injection, typed models mapped to a relational schema. NestJS's decorator-based structure will look immediately familiar to anyone coming from .NET's `[ApiController]` and attribute-based routing — modules, controllers, providers map almost one-to-one onto .NET's own separation of concerns. Entity Framework's migration workflow translated directly to Prisma's, once I stopped looking for the exact same commands and started looking for the same underlying idea: schema as code, migrations as history.",
        ],
        bodyFr: [
          "Le modèle mental, resté presque intact : architecture en couches, injection de dépendances, modèles typés mappés à un schéma relationnel. La structure à base de décorateurs de NestJS paraîtra immédiatement familière à quiconque vient du `[ApiController]` et du routage par attributs de .NET — modules, contrôleurs, providers se transposent presque un pour un sur la séparation des responsabilités propre à .NET. Le workflow de migration d'Entity Framework s'est traduit directement vers celui de Prisma, une fois que j'ai arrêté de chercher les mêmes commandes exactes pour chercher plutôt la même idée sous-jacente : le schéma comme code, les migrations comme historique.",
        ],
      },
      {
        heading: 'What actually snapped',
        headingFr: 'Ce qui a vraiment cassé',
        body: [
          "TypeScript's structural typing took the longest to stop fighting. Coming from C#'s nominal type system, where two types with identical shapes are still different types unless you say otherwise, TypeScript's 'if it quacks like a duck, it's a duck' model felt loose at first and then, once it clicked, felt like less ceremony for the same safety in most day-to-day code. The other adjustment was async ergonomics — trading .NET's `Task`-based async/await for JavaScript's event-loop model meant relearning what actually blocks and what doesn't, especially around database calls that look synchronous in C# and are very much not in a Node runtime.",
        ],
        bodyFr: [
          "Le typage structurel de TypeScript est ce contre quoi j'ai lutté le plus longtemps. En venant du système de types nominal de C#, où deux types de forme identique restent des types différents sauf indication contraire, le modèle « si ça cancane comme un canard, c'est un canard » de TypeScript a d'abord semblé trop souple, puis, une fois le déclic fait, a fini par ressembler à moins de cérémonie pour la même sécurité dans la majorité du code quotidien. L'autre ajustement concernait l'ergonomie asynchrone — troquer l'async/await basé sur `Task` de .NET pour le modèle d'event-loop de JavaScript signifiait réapprendre ce qui bloque réellement et ce qui ne bloque pas, notamment autour des appels base de données qui paraissent synchrones en C# et ne le sont absolument pas dans un runtime Node.",
        ],
      },
      {
        heading: "The takeaway",
        headingFr: 'Ce qu\'il faut retenir',
        body: [
          "A year later, I write both without translating in my head, and the thing I'd tell anyone making the same jump: the stack changes, but the discipline — typed contracts, clear layering, migrations you can read like a changelog — is the part worth protecting, and it survives the move.",
        ],
        bodyFr: [
          "Un an plus tard, j'écris les deux sans traduire mentalement, et ce que je dirais à quiconque fait le même saut : la stack change, mais la discipline — contrats typés, découpage en couches clair, migrations qu'on peut lire comme un changelog — est la partie qui mérite d'être protégée, et elle survit à la transition.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
