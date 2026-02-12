const situations = [
    {
        id: "1A",
        domain: "Domaine 1 : Recherche, évaluation et gestion de l'information",
        title: "Le débat qui s'emballe",
        situation: "En plein débat sur le climat, Emma affirme : 'J'ai vu sur TikTok que 97% des scientifiques se trompent.' Tu réagis comment ?",
        digital: {
            competence: "Évaluer l'information",
            status: "ACTIVÉE",
            domainDescription: "Savoir chercher, trier le vrai du faux, et organiser ce qu'on trouve. Bref : naviguer dans le déluge d'infos sans se noyer.",
            practice: "Fact-checking en direct. Tu guides Emma sur le site Décodeurs ou AFP Factuel depuis son smartphone. Elle remonte aux sources primaires, repère les red flags.",
            why: "Tu travailles directement la compétence \"Évaluer l'information\" du référentiel européen : distinguer les sources fiables/douteuses, vérifier la crédibilité, croiser les infos.",
            argument: "Sans accès immédiat au numérique, le fake reste dans les têtes jusqu'au prochain cours. Avec leur laptop, ils·elles développent le réflexe critique en temps réel.On est dans le feed-back immédiat!"
        },
        analog: {
            competence: "1.2 - Évaluer l'information",
            status: "NON ACTIVÉE",
            domainDescription: "Savoir chercher, trier le vrai du faux, et organiser ce qu'on trouve. Bref : naviguer dans le déluge d'infos sans se noyer.",
            practice: "Tu notes la phrase au tableau pour en rediscuter demain avec des photocopies d'articles.",
            timeLost: "24h de latence = 24h où la désinformation circule dans le groupe WhatsApp de classe. Tu stresses le matin en faisant la file à la photocopieuse... Et qui lit vraiment les photocopies ? "
        }
    },
    {
        id: "1B",
        domain: "Domaine 1 : Recherche, évaluation et gestion de l'information",
        title: "Le dossier documentaire",
        situation: "Travail sur les migrations : les élèves doivent réunir 10 sources variées (articles, vidéos, podcasts, infographies) sur le sujet. Comment ils s'organisent ?",
        digital: {
            competence: "1.1 - Naviguer, rechercher et filtrer l'information + 1.3 - Gérer l'information",
            status: "ACTIVÉES",
            domainDescription: "Savoir chercher, trier le vrai du faux, et organiser ce qu'on trouve. Bref : naviguer dans le déluge d'infos sans se noyer.",
            practice: "Chaque élève collecte, tague et partage dans un digipad collaboratif. Tu vois en temps réel qui bloque, qui cartonne, qui est hors-sujet.",
            why: "Combo de deux compétences du référentiel : chercher efficacement (1.1) ET organiser/archiver ce qu'on trouve (1.3). C'est exactement ce que le DigComp appelle la \"gestion de l'information\".",
            argument: "La veille documentaire devient un réflexe quotidien, pas un truc ponctuel de \"projet\". Avec leur laptop, ils·elles construisent leur banque de ressources au fil de l'eau."
        },
        analog: {
            competence: "1.1 - Naviguer, rechercher et filtrer + 1.3 - Gérer l'information",
            status: "NON ACTIVÉES",
            domainDescription: "Savoir chercher, trier le vrai du faux, et organiser ce qu'on trouve. Bref : naviguer dans le déluge d'infos sans se noyer.",
            practice: "Impression massive de documents sur le sujet, classeurs physiques, un élève rapporte tout chez lui... et perd le dossier dans le bus.",
            timeLost: "Gérer 10 sources papier, c'est l'enfer. Retrouver \"ce super article de Libé\" ? Bonne chance. Les compétences 1.1 et 1.3 du DigComp (recherche et gestion) restent hors de portée."
        }
    },
    {
        id: "2A",
        domain: "Domaine 2 : Communication et collaboration",
        title: "Le travail de groupe qui dérape",
        situation: "Travail collaboratif sur Baudelaire. Sarah fait tout, les autres font la sieste. Comment tu structures la collaboration pour éviter ça ?",
        digital: {
            competence: "2.4 - Collaborer au moyen de technologies numériques",
            status: "ACTIVÉE",
            domainDescription: "Échanger, partager, bosser en équipe avec le numérique. Aussi : gérer son identité en ligne et savoir se comporter en citoyen·ne numérique sans être un troll.",
            practice: "Document Word ou Canva partagé avec suivi des contributions, chat Teams pour coordonner, Kanban en ligne pour répartir les tâches.",
            why: "La compétence 2.4 du référentiel, c'est précisément ça : utiliser des outils collaboratifs numériques pour travailler ensemble efficacement. Pas juste \"être ensemble\", mais vraiment co-produire.",
            argument: "Chacun·e sur son appareil = responsabilité traçable. Tu repères le·a fantômes avant la catastrophe. Sarah arrête de tout porter sur ses épaules. C'est la vraie collaboration, pas le travail de groupe façade."
        },
        analog: {
            competence: "2.4 - Collaborer au moyen de technologies numériques",
            status: "NON ACTIVÉE",
            domainDescription: "Échanger, partager, bosser en équipe avec le numérique. (Mais aussi : gérer son identité en ligne et savoir se comporter en citoyen·ne numérique sans être un troll.)",
            practice: "Prise de notes sur feuilles volante, \"on se voit demain\". Le lendemain, l'élève qui a les notes est absent...",
            timeLost: "Qui a la version finale ? Mystère. Qui a bossé ? Encore plus mystérieux. Sarah fait tout quand même, en mode panique la veille. La compétence 2.4 du DigComp (collaboration numérique structurée) n'est pas développée."
        }
    },
    {
        id: "2B",
        domain: "Domaine 2 : Communication et collaboration",
        title: "Le cyberharcèlement naissant",
        situation: "Thomas publie un mème moqueur sur Léa dans le groupe WhatsApp de classe. Ça dégénère. Ta réaction ?",
        digital: {
            competence: "2.5 - Comportement numérique",
            status: "ACTIVÉE",
            domainDescription: "Échanger, partager, bosser en équipe avec le numérique. Aussi : gérer son identité en ligne et savoir se comporter en citoyen·ne numérique sans être un troll.",
            practice: "Atelier express via Kahoot ou, mieux, bookwidgets sur les traces numériques. Chacun·e découvre ce qui reste en ligne pour toujours.",
            why: "Le \"Comportement numérique\" (compétence 2.5), c'est savoir adapter sa conduite en ligne : respect, empathie, conscience des impacts. Le DigComp 3.0 a d'ailleurs renommé \"Nétiquette\" en \"Comportement numérique\" pour mieux refléter ces enjeux.",
            argument: "L'apprentissage se fait dans l'instant. Pas un cours magistral qui passe au-dessus de la tête, mais une expérience concrète : \"Ah zut, ça laisse vraiment des traces ?\""
        },
        analog: {
            competence: "2.5 - Comportement numérique",
            status: "NON ACTIVÉE",
            domainDescription: "Échanger, partager, bosser en équipe avec le numérique. Aussi : gérer son identité en ligne et savoir se comporter en citoyen·ne numérique sans être un troll.",
            practice: "Tu fais un speech moral de 40 min sur le respect et la bienveillance.",
            timeLost: "Impact réel ? ~3 élèves écoutent. Les autres scrollent sous la table. Thomas ne capte pas vraiment pourquoi c'est grave. La compétence 2.5 du DigComp (comportement numérique responsable) reste abstraite."
        }
    },
    {
        id: "3A",
        domain: "Domaine 3 : Création de contenu",
        title: "L'exposé PowerPoint zombie",
        situation: "Mohamed présente 'La Première Guerre mondiale' : 47 slides, police Comic Sans, texte copié-collé de Wikipédia ou de ChatGPT. Trois élèves ronflent au fonde la classe et tes yeux sont lourds... Comment tu le fais évoluer ?",
        digital: {
            competence: "3.1 - Développer du contenu numérique",
            status: "ACTIVÉE",
            domainDescription: "Produire, remixer, coder. Du simple montage photo jusqu'à la programmation, en passant par les questions de droits d'auteur. Créer plutôt que consommer.",
            practice: "Tu montres Canva ou Genially en live, chacun·e recrée un slide sur son laptop. Critères : 1 visuel fort, 3 mots-clés max, narration percutante.",
            why: "La compétence 3.1, c'est créer des contenus numériques sous différents formats. Pas juste \"faire un PowerPoint\", mais penser design, message, impact. C'est la différence entre copier et créer.",
            argument: "Le 1:1 = lab de création permanent. Mohamed passe de \"copier-coller\" à \"designer\". Il comprend la différence entre information et communication. Avec son laptop, il peut itérer, tester, refaire."
        },
        analog: {
            competence: "3.1 - Développer du contenu numérique",
            status: "NON ACTIVÉE",
            domainDescription: "Produire, remixer, coder. Du simple montage photo jusqu'à la programmation, en passant par les questions de droits d'auteur. Créer plutôt que consommer.",
            practice: "Tu distribues une grille d'évaluation papier avec plein de critères pour qu'il comprenne ce qu'est un bon powerpoint.",
            timeLost: "Mohamed lit les critères, hoche la tête... et ne sait toujours pas *comment* faire mieux. Il refait la même chose en 35 slides. La compétence 3.1 du DigComp (création numérique réfléchie) n'est pas vraiment atteinte."
        }
    },
    {
        id: "3B",
        domain: "Domaine 3 : Création de contenu",
        title: "Le podcast historique",
        situation: "Projet : créer un podcast de 5 min sur une personnalité du XXe siècle. Faisable en classe ?",
        digital: {
            competence: "3.1 - Développer du contenu numérique + 3.4 - Pensée computationnelle et programmation",
            status: "ACTIVÉES",
            domainDescription: "Produire, remixer, coder. Du simple montage photo jusqu'à la programmation, en passant par les questions de droits d'auteur. Créer plutôt que consommer.",
            practice: "Enregistrement sur Audacity ou Anchor, montage simple, export MP3 voire publication sur Spotify... Tu héberges les podcasts sur un site sharepoint de classe.",
            why: "Double combo : création de contenu audio (3.1) + logique de production avec étapes et algorithme de montage (3.4). Le DigComp 3.0 a élargi \"Programmation\" en \"Pensée computationnelle\" pour inclure ce type de logique séquentielle.",
            argument: "Chaque élève devient producteur·rice de savoir, pas juste consommateur·rice. Tu as une bibliothèque audio qui s'enrichit chaque année. Les élèves de 4e écoutent ceux des 5e. Avec leur laptop, ils·elles maîtrisent toute la chaîne de production."
        },
        analog: {
            competence: "3.1 - Développer du contenu + 3.4 - Pensée computationnelle",
            status: "NON ACTIVÉES",
            domainDescription: "Produire, remixer, coder. Du simple montage photo jusqu'à la programmation, en passant par les questions de droits d'auteur. Créer plutôt que consommer.",
            practice: "Tu réserves la salle info 3 semaines à l'avance. 2 élèves par PC, bagarre pour l'unique micro, la moitié n'a pas le temps de finir.",
            timeLost: "Certains abandonnent. D'autres se connectent sur Netflix, c'est plus simple... Tu récupères 4 podcasts sur 24. Les compétences 3.1 et 3.4 du DigComp (création et logique de production) restent inaccessibles à la majorité."
        }
    },
    {
        id: "4A",
        domain: "Domaine 4 : Sécurité, bien-être et usage responsable",
        title: "La notification permanente",
        situation: "Pendant ton cours, Sofia check Instagram toutes les 90 secondes. Tu fais quoi ?",
        digital: {
            competence: "4.3 - Favoriser le bien-être",
            status: "ACTIVÉE",
            domainDescription: "Protéger ses données, ses appareils, sa santé mentale et la planète. Le numérique, c'est puissant... mais pas sans effets secondaires.",
            practice: "Tu proposes un \"Digital Detox Challenge\" d'une matinée via l'app Forest (tous·tes ensemble). Débriefing après : comment ils·elles se sentent sans notifs.",
            why: "La compétence 4.3 (anciennement \"Protéger la santé\"), c'est gérer son bien-être numérique : éviter la surcharge, reconnaître l'addiction, trouver l'équilibre. Le DigComp 3.0 a élargi le domaine \"Sécurité\" pour y intégrer explicitement le bien-être.",
            argument: "Le paradoxe génial : l'outil numérique régule... le numérique. Sofia découvre qu'elle peut survivre sans scroller. Avec son laptop, elle apprend l'autodiscipline numérique, pas juste la contrainte externe."
        },
        analog: {
            competence: "4.3 - Favoriser le bien-être",
            status: "NON ACTIVÉE",
            domainDescription: "Protéger ses données, ses appareils, sa santé mentale et la planète. Le numérique, c'est puissant... mais pas sans effets secondaires.",
            practice: "Tu confisques le smartphone. Sofia râle, tu passes pour le·a flic, elle recommence demain. La tension monte.",
            timeLost: "Aucune compétence développée. Elle n'apprend pas à s'autoréguler, juste à contourner l'interdiction. La compétence 4.3 du DigComp (bien-être numérique) reste hors de portée. Le problème revient dès que tu rends le téléphone."
        }
    },
    {
        id: "4B",
        domain: "Domaine 4 : Sécurité, bien-être et usage responsable",
        title: "Le phishing par mail",
        situation: "Un élève reçoit 'Votre compte scolaire expire. Cliquez ici.' Il clique et se fait hacker son compte scolaire. Comment tu transformes ça en apprentissage ?",
        digital: {
            competence: "4.1 - Protéger les appareils + 4.2 - Protéger les données personnelles et la vie privée",
            status: "ACTIVÉES",
            domainDescription: "Protéger ses données, ses appareils, sa santé mentale et la planète. Le numérique, c'est puissant... mais pas sans effets secondaires.",
            practice: "Tu fais suivre aux élèves le parcours Pix \"Comportement sécurisé en ligne\" sur le Pix orga de ton école. Chaque élève suit un parcours individualisé adapté à son niveau basé sur des situations pratique",
            why: "Combo sécurité : protéger son appareil des malwares (4.1) ET ses données perso du vol (4.2). C'est exactement ce que le référentiel DigComp définit comme \"compétence en cybersécurité\" — une des 5 priorités du DigComp 3.0.",
            argument: "Ils·elles développent le réflexe du doute avec leur outil quotidien. Grâce à une expérience d'apprentissage qui est adaptée pour chacun."
        },
        analog: {
            competence: "4.1 - Protéger les appareils + 4.2 - Protéger les données",
            status: "NON ACTIVÉES",
            domainDescription: "Protéger ses données, ses appareils, sa santé mentale et la planète. Le numérique, c'est puissant... mais pas sans effets secondaires.",
            practice: "Tu fais un speech : \"Faites attention aux mails louches, regardez l'adresse de l'expéditeur, bla bla bla.\"",
            timeLost: "Qui écoute vraiment ? Et surtout, qui se souvient du conseil abstrait quand le prochain phishing arrive dans leur boîte ? Les compétences 4.1 et 4.2 du DigComp (cybersécurité pratique) restent théoriques."
        }
    },
    {
        id: "5A",
        domain: "Domaine 5 : Identification et résolution de problèmes",
        title: "Le projecteur qui lâche",
        situation: "Tu es en plein cours, le projecteur multimédia crashe. Les élèves attendent. Ta solution ?",
        digital: {
            competence: "5.1 - Identifier et résoudre des problèmes techniques",
            status: "ACTIVÉE",
            domainDescription: "Diagnostiquer les pannes, choisir les bons outils numériques, innover, et savoir ce qu'on ne sait pas (pour pouvoir l'apprendre). L'autonomie numérique, quoi.",
            practice: "Tu partages le lien du cours via QR code, chacun·e suit sur son écran. Tu continues sans perdre 10 minutes.",
            why: "La compétence 5.1, c'est précisément ça : diagnostiquer un problème technique et trouver une solution alternative. Le DigComp appelle ça la \"résilience numérique\" — être capable de rebondir quand ça plante.",
            argument: "Le 1:1 = plan B intégré. Panne technique ? Pas de panique. Ton cours roule. Les élèves apprennent aussi que le numérique, ce n'est pas \"ça marche ou ça plante\", c'est \"je trouve une solution\"."
        },
        analog: {
            competence: "5.1 - Identifier et résoudre des problèmes techniques",
            status: "NON ACTIVÉE",
            domainDescription: "Diagnostiquer les pannes, choisir les bons outils numériques, innover, et savoir ce qu'on ne sait pas (pour pouvoir l'apprendre). L'autonomie numérique, quoi.",
            practice: "Tu dessines au tableau en mode WWII. Le cours prend 2x plus de temps, tu perds le fil, les élèves du fond décrochent.",
            timeLost: "Tu as préparé un support visuel pour une raison. Sans lui, tout le monde rame. Et personne n'apprend à gérer l'imprévu technique. La compétence 5.1 du DigComp (résolution de problèmes numériques) n'est jamais mobilisée."
        }
    },
    {
        id: "5B",
        domain: "Domaine 5 : Identification et résolution de problèmes",
        title: "L'élève en décrochage",
        situation: "Jerome ne suit plus depuis 3 semaines. Il dit que 'les maths, c'est mort'. Comment tu le raccroches ?",
        digital: {
            competence: "5.2 - Identifier les besoins et les réponses technologiques",
            status: "ACTIVÉE",
            domainDescription: "Diagnostiquer les pannes, choisir les bons outils numériques, innover, et savoir ce qu'on ne sait pas (pour pouvoir l'apprendre). L'autonomie numérique, quoi.",
            practice: "Tu lui proposes Photomath pour visualiser les équations, GeoGebra pour manipuler, Khan Academy pour revoir à son rythme.",
            why: "La compétence 5.2, c'est identifier un besoin d'apprentissage et trouver la technologie qui y répond. Tu ne lui donnes pas la solution, tu lui donnes l'outil pour qu'il trouve sa solution.",
            argument: "Son laptop = tremplin de remédiation individualisé. Il peut reculer de 2 chapitres sans que tout le monde le sache. Il peut avancer à 3h du mat' s'il est inspiré. Tu suis sa progression sans qu'il se sente jugé. C'est la vraie différenciation."
        },
        analog: {
            competence: "5.2 - Identifier les besoins et les réponses technologiques",
            status: "NON ACTIVÉE",
            domainDescription: "Diagnostiquer les pannes, choisir les bons outils numériques, innover, et savoir ce qu'on ne sait pas (pour pouvoir l'apprendre). L'autonomie numérique, quoi.",
            practice: "Tu lui donnes des fiches d'exercices supplémentaires et des encouragements.",
            timeLost: "Il ne les fait pas. Parce que le support qui l'a perdu, c'est le même que celui qui est censé le sauver. Il a besoin d'une autre porte d'entrée, pas de plus de la même chose. La compétence 5.2 du DigComp (trouver les bons outils pour ses besoins) reste hors de portée."
        }
    }
];
