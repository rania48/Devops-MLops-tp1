/* FR / EN translation. French text lives in the HTML; each entry below maps the exact French
   text of a leaf element (whitespace-normalized) to its English version. Elements that contain
   inline markup use a data-i18n key and the HTML entries in EN_HTML. */
(function () {
  const EN = {
    // Navigation
    'Accueil': 'Home',
    'À propos': 'About',
    'Parcours': 'Background',
    'Expérience': 'Experience',
    'Projets': 'Projects',
    'Compétences': 'Skills',

    // Hero
    'Portfolio · IA & Data Science': 'Portfolio · AI & Data Science',
    'Bonjour, je suis': "Hello, I'm",
    'Voir mes projets': 'View my projects',
    'Télécharger le CV': 'Download my CV',
    'Appel ou WhatsApp — au choix': 'Call or WhatsApp — your choice',

    // Stats
    'e': 'th',
    'Année ingénieur — EMSI Tanger': 'Engineering year — EMSI Tangier',
    'Certifications obtenues': 'Certifications earned',
    'Stages & expériences pro': 'Internships & work experience',
    'EF SET Anglais — C2 Proficient': 'EF SET English — C2 Proficient',

    // About
    '01 — À propos': '01 — About',
    'Qui suis-je ?': 'Who am I?',
    '🎓 Formation': '🎓 Education',
    'Ingénierie Informatique & Réseaux — EMSI Tanger': 'Computer Engineering & Networks — EMSI Tangier',
    '📍 Localisation': '📍 Location',
    'Tanger, Maroc — Mobilité nationale et internationale': 'Tangier, Morocco — Open to national and international mobility',
    '🗣️ Langues': '🗣️ Languages',
    'Arabe (natale) · Français (bilingue) · Anglais (avancé, C2)': 'Arabic (native) · French (bilingual) · English (advanced, C2)',
    '🎯 Objectif': '🎯 Goal',
    'Stage PFE 6 mois — dès Janvier 2027': '6-month PFE internship — from January 2027',

    // Activities
    'Engagements & activités extra-scolaires': 'Involvement & extracurricular activities',
    'Ambassadrice': 'Ambassador',
    'Depuis 2024': 'Since 2024',
    'Career Center — EMSI Tanger': 'Career Center — EMSI Tangier',
    'Membre': 'Member',
    "Mai 2025 — Aujourd'hui · 1 an 5 mois": 'May 2025 — Present · 1 yr 5 mos',
    'Co-responsable du pôle Financement': 'Co-Head of the Funding Department',
    'Oct. 2024 — Mars 2025 · 6 mois': 'Oct. 2024 — Mar. 2025 · 6 mos',
    'ENACTUS EMSI Tanger': 'ENACTUS EMSI Tangier',
    'Membre du pôle Étude et Analyse des Projets': 'Member of the Project Study and Analysis Department',
    'Janv. 2024 — Oct. 2024 · 10 mois': 'Jan. 2024 — Oct. 2024 · 10 mos',
    'Recherche de projets innovants et développement de solutions durables.': 'Researching innovative projects and developing sustainable solutions.',
    'Compétitrice': 'Competitive Swimmer',
    'Janv. 2017 — Fév. 2020 · 3 ans 2 mois': 'Jan. 2017 — Feb. 2020 · 3 yrs 2 mos',
    'Fédération Royale Marocaine de Natation — Oujda': 'Royal Moroccan Swimming Federation — Oujda',
    "Compétitrice au MCO (Mouloudia Club d'Oujda), puis à l'USO (Union Sportive d'Oujda).": "Competed for MCO (Mouloudia Club d'Oujda), then for USO (Union Sportive d'Oujda).",
    'Oct. 2015 — Juin 2020 · 4 ans 9 mois': 'Oct. 2015 — June 2020 · 4 yrs 9 mos',

    // Education
    '02 — Parcours': '02 — Background',
    'Formation': 'Education',
    '2024 — En cours': '2024 — Present',
    'Cycle Ingénieur — Ingénierie Informatique & Réseaux': 'Engineering Cycle — Computer Engineering & Networks',
    "École Marocaine des Sciences de l'Ingénieur (EMSI) — Tanger": 'Moroccan School of Engineering Sciences (EMSI) — Tangier',
    'Classes Préparatoires Intégrées': 'Integrated Preparatory Classes',
    'Baccalauréat Sciences Physiques, Option Français': 'Baccalaureate in Physical Sciences, French Option',
    'Lycée Mohammed VI — Oujda': 'Mohammed VI High School — Oujda',

    // Experience
    '03 — Expérience': '03 — Experience',
    'Expérience professionnelle': 'Professional experience',
    'Stagiaire IA & Data': 'AI & Data Intern',
    'Juil. — Août 2026': 'July — Aug. 2026',
    'Projet : NetResolve AI — Plateforme intelligente de gestion des incidents réseau': 'Project: NetResolve AI — Intelligent network incident management platform',
    "Conception d'une plateforme intelligente de résolution d'incidents basée sur une architecture RAG, combinant recherche exacte dans PostgreSQL, recherche sémantique par embeddings avec ChromaDB et génération de réponses via un LLM (Azure OpenAI). Orchestration avec Airflow d'un pipeline analytique vers Snowflake, intégrant clustering HDBSCAN, KPI Power BI et reporting automatisé.":
      'Design of an intelligent incident-resolution platform based on a RAG architecture, combining exact search in PostgreSQL, semantic search with embeddings in ChromaDB, and answer generation through an LLM (Azure OpenAI). Airflow orchestration of an analytics pipeline to Snowflake, including HDBSCAN clustering, Power BI KPIs and automated reporting.',
    'Stagiaire Consultante AMOA SAP': 'SAP Functional Consultant Intern (AMOA)',
    'Août 2025': 'Aug. 2025',
    "Projet : Intégration POS → SAP — L'Oréal / AESOP Canada": "Project: POS → SAP Integration — L'Oréal / AESOP Canada",
    "Conception et validation des fichiers d'interfaces pour garantir une intégration cohérente des ventes, paiements et mouvements de stock en consignation pour l'ouverture d'un point de vente AESOP au Canada. Intégration des 4 flux de consignation (Fill-Up, Issue, Return, Pick-Up) dans SAP, qualification des anomalies fonctionnelles et techniques, suivi des corrections et mises à jour.":
      'Design and validation of interface files to ensure consistent integration of sales, payments and consignment stock movements for the opening of an AESOP store in Canada. Integration of the 4 consignment flows (Fill-Up, Issue, Return, Pick-Up) into SAP, qualification of functional and technical anomalies, and follow-up of fixes and updates.',
    'Analyse fonctionnelle': 'Functional analysis',

    // Projects
    '04 — Projets': '04 — Projects',
    'Projets académiques': 'Academic projects',
    'Analyse de Sentiment sur les Avis de Films — Text Mining & NLP': 'Movie Review Sentiment Analysis — Text Mining & NLP',
    "Pipeline complet de text mining sur le dataset IMDB (50 000 avis de films, classes positive/négative parfaitement équilibrées), ramené à 49 582 avis après nettoyage des doublons. Prétraitement NLP avec NLTK (nettoyage, tokenisation, suppression des stopwords, stemming), puis comparaison de deux vectorisations — Bag-of-Words et TF-IDF — réduites par LSI (SVD tronquée, 300 dimensions) et classifiées par régression logistique. Le pipeline TF-IDF + LSI s'est révélé le plus performant, avec 87,2 % d'accuracy et un F1-score de 87,4 %.":
      "Full text-mining pipeline on the IMDB dataset (50,000 movie reviews, perfectly balanced positive/negative classes), narrowed down to 49,582 reviews after removing duplicates. NLP preprocessing with NLTK (cleaning, tokenization, stopword removal, stemming), then a comparison of two vectorization methods — Bag-of-Words and TF-IDF — reduced via LSI (truncated SVD, 300 dimensions) and classified with logistic regression. The TF-IDF + LSI pipeline proved the most effective, reaching 87.2% accuracy and an F1-score of 87.4%.",
    'Moteur de Matching IA & Optimisation de la Recherche Sémantique': 'AI Matching Engine & Semantic Search Optimization',
    'Plateforme de recrutement intelligente : matching sémantique CV/offres, classement des profils et assistant conversationnel (RAG) pour accompagner le recruteur.':
      'Intelligent recruitment platform: semantic matching between resumes and job postings, candidate ranking, and a conversational assistant (RAG) to support the recruiter.',
    'Analyse distribuée de séquences ADN — MapReduce & Machine Learning': 'Distributed DNA Sequence Analysis — MapReduce & Machine Learning',
    "Pipeline 100 % MapReduce d'analyse de séquences ADN issues du Human Microbiome Project (HMP), sur un cluster Hadoop HDFS : prétraitement FASTA, extraction de k-mers (k = 5), vecteurs de fréquences, similarité cosinus, alignement Smith-Waterman, puis K-Means itératif MapReduce. Les clusters obtenus correspondent aux sites corporels HMP.":
      '100% MapReduce pipeline for analyzing DNA sequences from the Human Microbiome Project (HMP) on a Hadoop HDFS cluster: FASTA preprocessing, k-mer extraction (k = 5), frequency vectors, cosine similarity, Smith-Waterman alignment, then iterative K-Means in MapReduce. The resulting clusters match the HMP body sites.',
    "Système décisionnel BI — Pilotage de la performance d'une école supérieure": 'BI Decision-Support System — Performance Management of a Higher Education School',
    "Chaîne BI complète transformant un dataset scolaire simulé (27 fichiers CSV, ~21 000 lignes) en un dashboard Power BI de 10 pages : chargement dans Snowflake via un script Python, transformation avec dbt (RAW → STAGING → MARTS), puis KPI en DAX (taux de réussite, satisfaction globale pondérée, taux de recouvrement, budget prévu vs exécuté…).":
      'Complete BI pipeline turning a simulated school dataset (27 CSV files, ~21,000 rows) into a 10-page Power BI dashboard: loading into Snowflake with a Python script, transformation with dbt (RAW → STAGING → MARTS), then KPIs in DAX (pass rate, weighted overall satisfaction, collection rate, planned vs. actual budget…).',
    "Détection d'intrusions réseau (IDS) temps réel": 'Real-Time Network Intrusion Detection (IDS)',
    'Application mHealth — Suivi & Gestion Patient': 'mHealth Application — Patient Monitoring & Management',
    "Application Android mHealth pour 4 profils utilisateurs (patient, médecin, secrétaire, admin), centralisant dossiers médicaux, rendez-vous, messagerie patient–médecin et gestion des droits, pour digitaliser le parcours de suivi patient.":
      'Android mHealth application for 4 user profiles (patient, doctor, secretary, admin), centralizing medical records, appointments, patient–doctor messaging and permission management, to digitalize the patient follow-up journey.',
    "EMSI Share Learn — Plateforme d'apprentissage": 'EMSI Share Learn — Learning Platform',
    "Plateforme multi-rôles intégrant partage de ressources, quiz, suivi des scores et gestion des utilisateurs pour la communauté EMSI.":
      'Multi-role platform featuring resource sharing, quizzes, score tracking and user management for the EMSI community.',

    // Skills
    '05 — Compétences': '05 — Skills',
    'Compétences techniques': 'Technical skills',
    'Langages': 'Programming languages',
    'Bases de données': 'Databases',
    'IA Générative': 'Generative AI',
    'DevOps & Outils': 'DevOps & Tools',
    'Gestion de projet': 'Project management',
    'Français': 'French',
    'Bilingue': 'Bilingual',
    'Anglais': 'English',
    'Avancé — C2 Proficient (74/100)': 'Advanced — C2 Proficient (74/100)',
    'Arabe': 'Arabic',
    'Langue maternelle': 'Native language',

    // Certifications
    '06 — Certifications': '06 — Certifications',
    'Certifications & formations': 'Certifications & courses',

    // Contact
    '07 — Contact': '07 — Contact',
    'Travaillons ensemble': "Let's work together",
    'Appeler — +212 641-89-79-88': 'Call — +212 641-89-79-88',
    'Télécharger mon CV': 'Download my CV'
  };

  const EN_HTML = {
    heroDesc: "Engineering student in <strong>Artificial Intelligence &amp; Data Science</strong>, in her 5<sup>th</sup> year at EMSI Tangier, looking for a <strong>6-month end-of-studies internship (PFE) starting January 2027</strong> in AI/Data, in SAP SD/MM topics to deepen her functional skills, or in projects combining both.",
    aboutText: 'Engineering student specializing in <strong>Artificial Intelligence &amp; Data Science</strong>, in the 5<sup>th</sup> year at <strong>EMSI Tangier</strong>. I have gained hands-on experience in <strong>generative AI (RAG, LLMs)</strong>, <strong>Data Engineering</strong> and <strong>SAP Retail functional consulting (AMOA)</strong> through internships and academic projects. Curious and rigorous, I enjoy designing intelligent solutions applied to SAP systems and business processes.',
    idsDesc: 'Real-time intelligent IDS on 3.1 million flows (CIC-IDS2017, 15 classes), combining Random Forest, XGBoost and CNN-BiLSTM-Transformer — <strong>99.84% accuracy</strong>. Real-time pipeline Kafka → Spark Structured Streaming → MongoDB → Streamlit, automating the ingestion, classification and visualization of security alerts.',
    contactLead: 'Looking for a <strong>PFE internship (6 months, starting January 2027)</strong> in AI / Data Science, SAP SD/MM, or projects combining both. Feel free to get in touch.'
  };

  const TYPED = {
    fr: ['Élève Ingénieure IA & Data Science', 'AMOA SAP Retail'],
    en: ['Engineering Student in AI & Data Science', 'SAP Retail Consulting (AMOA)']
  };

  const UI = {
    fr: { viewCert: '🔍 Voir le certificat', close: 'Fermer', title: 'Rania Oulmidi — Élève Ingénieure IA & Data Science' },
    en: { viewCert: '🔍 View certificate', close: 'Close', title: 'Rania Oulmidi — AI & Data Science Engineering Student' }
  };

  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const originals = new Map();
  const listeners = [];
  let lang = 'fr';
  try { const s = localStorage.getItem('lang'); if (s === 'en' || s === 'fr') lang = s; } catch (e) {}

  function leaves() {
    return Array.from(document.body.querySelectorAll('*')).filter(el =>
      el.children.length === 0 && !['SCRIPT', 'STYLE', 'SVG', 'PATH', 'IMG'].includes(el.tagName.toUpperCase()) &&
      !el.closest('#cert-grid, svg') && norm(el.textContent) !== '');
  }

  function apply(notify) {
    document.documentElement.lang = lang;
    document.title = UI[lang].title;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      el.innerHTML = lang === 'en' ? EN_HTML[el.dataset.i18n] : originals.get(el);
    });
    leaves().forEach(el => {
      if (el.hasAttribute('data-i18n')) return;
      const fr = originals.has(el) ? originals.get(el) : el.textContent;
      const en = EN[norm(fr)];
      if (en === undefined) return;
      originals.set(el, fr);
      el.textContent = lang === 'en' ? en : fr;
    });
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    const closeBtn = document.getElementById('cert-modal-close');
    if (closeBtn) closeBtn.setAttribute('aria-label', UI[lang].close);
    if (notify) listeners.forEach(fn => fn(lang));
  }

  function set(l) {
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    apply(true);
  }

  window.I18N = {
    get lang() { return lang; },
    typed: () => TYPED[lang],
    ui: () => UI[lang],
    onChange: (fn) => listeners.push(fn),
    init() {
      document.querySelectorAll('.lang-switch button').forEach(b => b.addEventListener('click', () => set(b.dataset.lang)));
      apply(false);
    }
  };
})();
