export const SITE = {
  name: 'Walid Chennit',
  role: 'Full Stack Software Engineer',
  roleFr: 'Ingénieur Logiciel Full Stack',
  location: 'Algiers, Algeria',
  locationFr: 'Alger, Algérie',
  email: 'walidchennit1@gmail.com',
  phone: '+213 7 94 21 74 94',
  github: 'https://github.com/WalidChennit',
  linkedin: 'https://www.linkedin.com/in/walid-chennit-a40b66259/',
  whatsapp: 'https://wa.me/213558083327',
  cv: '/cv/Walid-Chennit-CV.pdf',
};

export const NAV_LINKS = [
  { href: '/', label: 'Home', labelFr: 'Accueil' },
  { href: '/about', label: 'About', labelFr: 'À propos' },
  { href: '/projects', label: 'Projects', labelFr: 'Projets' },
  { href: '/skills', label: 'Skills', labelFr: 'Compétences' },
  { href: '/blog', label: 'Blog', labelFr: 'Blog' },
  { href: '/contact', label: 'Contact', labelFr: 'Contact' },
];

export interface Project {
  slug: string;
  name: string;
  org: string;
  period: string;
  status: 'Live' | 'Active' | 'Ongoing' | 'Completed';
  statusFr: string;
  sector: string;
  sectorFr: string;
  summary: string;
  summaryFr: string;
  highlights: string[];
  highlightsFr: string[];
  stack: string[];
  demoUrl?: string;
  demoAccounts?: { role: string; email: string; pass: string }[];
  images?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'elearning-coaching-platform',
    name: 'E-Learning Coaching Platform',
    org: 'Private Client',
    period: 'Present',
    status: 'Active',
    statusFr: 'Actif',
    sector: 'EdTech',
    sectorFr: 'EdTech',
    summary:
      'A full-stack school coaching platform currently in development — personalized study programs, quizzes, mock exams, teacher video-session booking, and parent/institution tracking dashboards, bilingual French/Arabic (RTL).',
    summaryFr:
      "Une plateforme full-stack de coaching scolaire actuellement en développement — programmes de révision personnalisés, quiz, examens blancs, réservation de séances vidéo avec des enseignants, et tableaux de bord de suivi pour parents et établissements, bilingue français/arabe (RTL).",
    highlights: [
      'Next.js frontend, NestJS modular REST APIs, PostgreSQL + Prisma.',
      'Multi-role platform: students, teachers, parents, institutions and admin.',
      'Adaptive learning: progress tracking, weak-point detection, auto-graded quizzes and mock exams.',
      'Teacher scheduling and video-session booking workflow.',
      'Bilingual interface with full French / Arabic (RTL) support.',
    ],
    highlightsFr: [
      'Frontend Next.js, APIs REST modulaires NestJS, PostgreSQL + Prisma.',
      'Plateforme multi-rôles : élèves, enseignants, parents, établissements et administration.',
      "Apprentissage adaptatif : suivi de progression, détection des points faibles, quiz et examens blancs corrigés automatiquement.",
      'Planification enseignant et réservation de séances vidéo.',
      'Interface bilingue avec support complet français / arabe (RTL).',
    ],
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'i18n / RTL'],
    images: [],
  },
  {
    slug: 'virtual-bank',
    name: 'Virtual Bank',
    org: 'Diar Dzair',
    period: 'Present',
    status: 'Live',
    statusFr: 'En ligne',
    sector: 'Finance',
    sectorFr: 'Finance',
    summary:
      'A complete virtual banking platform — a mobile app for end-users and a hardened backend handling accounts, transactions, digital wallets and history streams.',
    summaryFr:
      'Une plateforme de banque virtuelle complète — une application mobile pour les utilisateurs finaux et un backend durci gérant les comptes, transactions, portefeuilles numériques et historiques.',
    highlights: [
      'Full-stack architecture: React Native (Expo) frontend, Spring Boot REST APIs.',
      'Account, transaction and digital wallet flows.',
      'Transaction history with rich filtering.',
      'Hardened authentication, encryption and a fraud-prevention layer.',
    ],
    highlightsFr: [
      'Architecture full-stack : frontend React Native (Expo), APIs REST Spring Boot.',
      'Parcours de comptes, transactions et portefeuilles numériques.',
      "Historique des transactions avec filtrage avancé.",
      'Authentification renforcée, chiffrement et couche anti-fraude.',
    ],
    stack: ['React Native', 'Expo', 'Spring Boot', 'Java', 'REST', 'JWT'],
    images: [
      'onBoarding.PNG',
      'Login.PNG',
      'Signin.PNG',
      'chooseparcour.PNG',
      'dashboard.PNG',
      'dashboard2.PNG',
      'myaccounts.PNG',
      'releve.PNG',
      'virement.PNG',
      'payment.PNG',
      'overviewpayment.PNG',
      'bills.PNG',
      'myfinancement.PNG',
      'myfinancementsdemand.PNG',
    ],
  },
  {
    slug: 'brainerx-formation-finder',
    name: 'BrainerX Formation Finder',
    org: 'BrainerX',
    period: 'Present',
    status: 'Live',
    statusFr: 'En ligne',
    sector: 'Education',
    sectorFr: 'Éducation',
    summary:
      'A test website that helps students figure out which BrainerX course track fits them best, through a short guided assessment.',
    summaryFr:
      "Un site de test qui aide les étudiants à déterminer quelle formation BrainerX leur correspond le mieux, à travers une évaluation guidée courte.",
    highlights: [
      'Guided questionnaire to match a student profile to the right course track.',
      'Simple, fast, deployed as a standalone test site.',
    ],
    highlightsFr: [
      'Questionnaire guidé pour orienter chaque étudiant vers la bonne formation.',
      'Simple et rapide, déployé comme site de test autonome.',
    ],
    stack: ['Next.js', 'Netlify'],
    demoUrl: 'https://test-brainerx.netlify.app/',
    images: [],
  },
  {
    slug: 'brainerx',
    name: 'BrainerX',
    org: 'Programming Instructor',
    period: 'Present',
    status: 'Ongoing',
    statusFr: 'En cours',
    sector: 'Education',
    sectorFr: 'Éducation',
    summary:
      'Teaching programming concepts and engineering practices to learners across levels — designing curricula, mentoring, and guiding hands-on problem solving.',
    summaryFr:
      "Enseignement des concepts de programmation et des pratiques d'ingénierie à des apprenants de tous niveaux — conception de programmes, mentorat et accompagnement pratique à la résolution de problèmes.",
    highlights: [
      'Structured pedagogical content design.',
      'Live workshops and code reviews.',
      'One-to-one mentorship for student growth.',
      'Problem-solving and debugging coaching.',
    ],
    highlightsFr: [
      'Conception structurée de contenu pédagogique.',
      'Ateliers en direct et revues de code.',
      'Mentorat individuel pour la progression des étudiants.',
      'Accompagnement à la résolution de problèmes et au débogage.',
    ],
    stack: ['Mentorship', 'Curriculum Design', 'Workshops'],
    images: [],
  },
  {
    slug: 'rdis',
    name: 'RDIS',
    org: 'CDTA — R&D Information System',
    period: 'Oct 2025 – Jun 2026',
    status: 'Active',
    statusFr: 'Actif',
    sector: 'Research',
    sectorFr: 'Recherche',
    summary:
      'Centralized web platform for managing scientific R&D projects — experiment tracking, document management, and streamlined administrative workflows.',
    summaryFr:
      "Plateforme web centralisée pour la gestion de projets scientifiques R&D — suivi d'expériences, gestion documentaire et workflows administratifs simplifiés.",
    highlights: [
      'Next.js frontend with role-tailored dashboards.',
      'NestJS modular REST APIs in TypeScript.',
      'PostgreSQL relational data layer.',
      'Role-based access control with multi-level validation workflows.',
      'Automated notifications and mission orders.',
      'Purchase requests and service approvals.',
    ],
    highlightsFr: [
      'Frontend Next.js avec tableaux de bord adaptés à chaque rôle.',
      'APIs REST modulaires NestJS en TypeScript.',
      'Couche de données relationnelle PostgreSQL.',
      'Contrôle d\'accès basé sur les rôles avec workflows de validation multi-niveaux.',
      "Notifications automatisées et ordres de mission.",
      'Demandes d\'achat et approbations de services.',
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'REST', 'PostgreSQL', 'RBAC'],
    demoUrl: 'https://rdis-sigma.vercel.app',
    demoAccounts: [
      { role: 'Superuser', email: 'superuser@cdta.dz', pass: 'Super@123456' },
      { role: 'Directeur', email: 'directeur@cdta.dz', pass: 'Demo@123456' },
      { role: 'Secrétaire', email: 'secretaire@cdta.dz', pass: 'Demo@123456' },
      { role: "Chef d'équipe", email: 'yacine.hamidi@cdta.dz', pass: 'Demo@123456' },
      { role: 'Membre', email: 'fatima.ouali@cdta.dz', pass: 'Demo@123456' },
      { role: 'Magasinier', email: 'magasinier@cdta.dz', pass: 'Demo@123456' },
    ],
    images: [],
  },
  {
    slug: 'bibliosphere',
    name: 'BiblioSphere',
    org: 'Personal Project',
    period: 'Jan 2026 – Feb 2026',
    status: 'Completed',
    statusFr: 'Terminé',
    sector: 'Education · Library',
    sectorFr: 'Éducation · Bibliothèque',
    summary:
      'A digital library platform for accessing and managing books, articles and educational resources, with role-based access for admins, staff and students.',
    summaryFr:
      "Une plateforme de bibliothèque numérique pour accéder à et gérer des livres, articles et ressources pédagogiques, avec des accès différenciés pour les administrateurs, le personnel et les étudiants.",
    highlights: [
      'Digital catalog of books and educational resources.',
      'Role-based access: admin, staff and student accounts.',
      'Account and content management dashboard.',
    ],
    highlightsFr: [
      'Catalogue numérique de livres et ressources pédagogiques.',
      'Accès par rôle : comptes administrateur, personnel et étudiant.',
      'Tableau de bord de gestion des comptes et du contenu.',
    ],
    stack: ['Next.js', 'Vercel'],
    demoUrl: 'https://biblio-sphere-delta.vercel.app',
    demoAccounts: [
      { role: 'Admin', email: 'admin@bibliosphere.test', pass: 'Test1234!' },
      { role: 'Personnel', email: 'personnel@bibliosphere.test', pass: 'Test1234!' },
      { role: 'Étudiant', email: 'etudiant@bibliosphere.test', pass: 'Test1234!' },
    ],
    images: [],
  },
  {
    slug: 'ekyc-vault',
    name: 'e-KYC Vault',
    org: "Crédit Populaire d'Algérie",
    period: 'May 2025 – Sep 2025',
    status: 'Completed',
    statusFr: 'Terminé',
    sector: 'Banking · AI',
    sectorFr: 'Banque · IA',
    summary:
      'An e-KYC banking solution for secure remote account opening — fusing mobile UX with computer-vision identity verification and document intelligence.',
    summaryFr:
      "Une solution bancaire e-KYC pour l'ouverture de compte à distance sécurisée — alliant UX mobile, vérification d'identité par vision par ordinateur et intelligence documentaire.",
    highlights: [
      'React Native + Expo mobile client.',
      'NestJS modular REST APIs.',
      'OCR / FastMRZ document extraction.',
      'DeepFace biometric matching.',
      'OpenCV liveness detection.',
      'End-to-end encryption and fraud guards.',
    ],
    highlightsFr: [
      'Client mobile React Native + Expo.',
      'APIs REST modulaires NestJS.',
      'Extraction de documents OCR / FastMRZ.',
      'Reconnaissance biométrique DeepFace.',
      'Détection de vivacité (liveness) OpenCV.',
      'Chiffrement de bout en bout et protections anti-fraude.',
    ],
    stack: ['React Native', 'NestJS', 'PostgreSQL', 'DeepFace', 'OpenCV', 'OCR / FastMRZ'],
    images: [
      'Onboarding.jpeg',
      'onboarding2.jpeg',
      'login.jpeg',
      'password.jpeg',
      'otp.jpeg',
      'otpwhite.jpeg',
      'CINOCR.jpeg',
      'passportOCR.jpeg',
      'liveness.jpeg',
      'exigence1.jpeg',
      'personalinfo.jpeg',
      'blackpersonalinfo.jpeg',
      'residence.jpeg',
      'whiteresidence.jpeg',
      'agences.jpeg',
      'dashboard.jpeg',
      'mycards.jpeg',
      'support.jpeg',
    ],
  },
  {
    slug: 'meeting-board',
    name: 'Meeting Board',
    org: "Crédit Populaire d'Algérie",
    period: 'Jan 2025 – Apr 2025',
    status: 'Completed',
    statusFr: 'Terminé',
    sector: 'Collaboration',
    sectorFr: 'Collaboration',
    summary:
      "A collaborative meeting platform for the bank's boardrooms — planning, live notes, auto-generated minutes and an analytics layer for participation KPIs.",
    summaryFr:
      "Une plateforme collaborative pour les salles de réunion de la banque — planification, prise de notes en direct, comptes rendus générés automatiquement et une couche analytique pour les indicateurs de participation.",
    highlights: [
      'Resource and room scheduling engine.',
      'Collaborative live note-taking.',
      'Auto-generated meeting minutes.',
      'Notifications and reminders pipeline.',
      'Analytics dashboard for participation KPIs.',
    ],
    highlightsFr: [
      'Moteur de planification des ressources et des salles.',
      'Prise de notes collaborative en direct.',
      'Comptes rendus de réunion générés automatiquement.',
      'Pipeline de notifications et de rappels.',
      'Tableau de bord analytique pour les indicateurs de participation.',
    ],
    stack: ['Next.js', 'Express', 'Node.js', 'MongoDB'],
    images: [
      'AddMember.png',
      'MembersList2.png',
      'membersList1.png',
      'MyProfile.png',
      'Events.png',
      'AddNewEventStep1.png',
      'step2.png',
      'step2-1.png',
      'step3.png',
      'step3-1.png',
      'EventDetail.png',
      'EventDetail2.png',
      'EventDetail3.png',
      'Files.png',
    ],
  },
  {
    slug: 'incident-net',
    name: 'Incident Net',
    org: "Banque Nationale d'Algérie",
    period: 'Jan 2024 – Jul 2024',
    status: 'Completed',
    statusFr: 'Terminé',
    sector: 'Banking · IT Ops',
    sectorFr: 'Banque · IT Ops',
    summary:
      'A bank-wide IT incident management and ticketing system — intelligent triage, priority routing, real-time alerts and executive KPI reporting.',
    summaryFr:
      "Un système de gestion des incidents IT et de tickets à l'échelle de la banque — tri intelligent, routage par priorité, alertes en temps réel et reporting KPI pour la direction.",
    highlights: [
      'React.js frontend with role-based dashboards.',
      'C# .NET / Entity Framework backend.',
      'Intelligent ticket categorization and prioritization.',
      'Real-time alerts and SLA tracking.',
      'KPI dashboards and executive reporting.',
      'Resolution-time analytics.',
    ],
    highlightsFr: [
      'Frontend React.js avec tableaux de bord par rôle.',
      'Backend C# .NET / Entity Framework.',
      'Catégorisation et priorisation intelligente des tickets.',
      "Alertes en temps réel et suivi des SLA.",
      'Tableaux de bord KPI et reporting pour la direction.',
      'Analyse des temps de résolution.',
    ],
    stack: ['React.js', 'C# .NET', 'Entity Framework', 'SQL Server'],
    images: [],
  },
];

export interface SkillGroup {
  label: string;
  labelFr: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Languages', labelFr: 'Langages', items: ['TypeScript', 'JavaScript (ES6+)', 'Java', 'C# (.NET)', 'Python', 'SQL'] },
  { label: 'Frameworks & Libraries', labelFr: 'Frameworks & bibliothèques', items: ['Next.js', 'React.js', 'React Native', 'NestJS', 'Spring Boot', 'Express.js', 'Flutter', 'Entity Framework'] },
  { label: 'Databases', labelFr: 'Bases de données', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Prisma ORM'] },
  { label: 'Tools & Infrastructure', labelFr: 'Outils & infrastructure', items: ['Git', 'Docker', 'REST APIs', 'JWT / Auth', 'Agile / Scrum', 'CI/CD'] },
  { label: 'AI & Computer Vision', labelFr: 'IA & vision par ordinateur', items: ['DeepFace (biometrics)', 'OpenCV (liveness)', 'OCR / FastMRZ', 'GenAI in PM workflows'] },
  { label: 'Soft Skills', labelFr: 'Savoir-être', items: ['Problem-solving', 'Analytical thinking', 'Adaptability', 'Fast learner', 'Team work', 'Mentorship'] },
];

export const TOP_SKILLS: { name: string; level: number }[] = [
  { name: 'TypeScript', level: 95 },
  { name: 'NestJS', level: 92 },
  { name: 'Next.js', level: 92 },
  { name: 'React Native', level: 88 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'Spring Boot', level: 80 },
  { name: 'MongoDB', level: 82 },
  { name: 'C# / .NET', level: 78 },
];

export interface EducationEntry {
  period: string;
  title: string;
  titleFr: string;
  org: string;
  note?: string;
  noteFr?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    period: '2025 — 2026',
    title: 'Master 2 — Software Engineering',
    titleFr: 'Master 2 — Génie Logiciel',
    org: 'University of Science and Technology Houari Boumediene · Algiers',
    note: 'Graduated',
    noteFr: 'Diplômé',
  },
  {
    period: '2024 — 2025',
    title: 'Master 1 — Software Engineering',
    titleFr: 'Master 1 — Génie Logiciel',
    org: 'USTHB · Algiers',
  },
  {
    period: '2023 — 2024',
    title: 'Bachelor ISIL — Information Systems & Software Computing',
    titleFr: 'Licence ISIL — Systèmes d\'Information et Informatique Logicielle',
    org: 'USTHB · Algiers',
  },
  {
    period: '2021',
    title: 'Baccalauréat, Natural Sciences — High Honors',
    titleFr: 'Baccalauréat, Sciences Naturelles — Mention Très Bien',
    org: 'Lycée Messoud Belkadi',
  },
];

export interface Certification {
  tag: string;
  name: string;
  desc: string;
  descFr: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    tag: 'Jul 2025',
    name: 'Generative AI for Project Managers',
    desc: 'Understanding GenAI in project management, exploring AI tools and applications.',
    descFr: "Compréhension de l'IA générative dans la gestion de projet, exploration d'outils et d'applications IA.",
  },
  {
    tag: 'Jul 2025 · CNIL',
    name: 'GDPR Workshop',
    desc: 'GDPR principles, DPO role, DPIA, pseudonymization, legal responsibilities.',
    descFr: 'Principes du RGPD, rôle du DPO, AIPD, pseudonymisation, responsabilités légales.',
  },
  {
    tag: 'TCF · 584 pts',
    name: 'Test de Connaissance du Français',
    desc: 'Certified advanced level in spoken and written French.',
    descFr: "Niveau avancé certifié à l'oral et à l'écrit en français.",
  },
  {
    tag: '2023 — 2024',
    name: 'LinkedIn Learning × Microsoft',
    desc: 'Software development principles, architecture, database fundamentals.',
    descFr: 'Principes du développement logiciel, architecture, fondamentaux des bases de données.',
  },
];

export const LANGUAGES = [
  { name: 'Arabic', nameFr: 'Arabe', level: 100, note: 'Native · Mother Tongue', noteFr: 'Natif · Langue maternelle' },
  { name: 'French', nameFr: 'Français', level: 94, note: 'Fluent · TCF 584', noteFr: 'Courant · TCF 584' },
  { name: 'English', nameFr: 'Anglais', level: 88, note: 'Fluent · Working Proficiency', noteFr: 'Courant · Niveau professionnel' },
];

export const STATS = [
  { n: '5+', label: 'Production projects', labelFr: 'Projets en production' },
  { n: '4', label: 'Enterprise clients', labelFr: 'Clients grands comptes' },
  { n: '2+', label: 'Years of full-stack delivery', labelFr: 'Années en full-stack' },
];
