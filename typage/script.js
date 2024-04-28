const questions = [
    { text: "Vous rechargez-vous davantage en étant seul ou en étant avec d'autres personnes ?", trait: "E" },
    { text: "Accordez-vous plus d'importance aux faits concrets ou aux théories et modèles abstraits ?", trait: "N" },
    { text: "Basez-vous principalement vos décisions sur la logique ou sur vos valeurs personnelles ?", trait: "T" },
    { text: "Préférez-vous avoir un emploi du temps structuré ou garder vos options ouvertes ?", trait: "J" },
    { text: "Préférez-vous des livres de fiction ou des ouvrages factuels et techniques ?", trait: "N" },
    { text: "Vous définissez-vous davantage comme une personne réservée ou franche ?", trait: "E" },
    { text: "Vous fiez-vous davantage à votre expérience ou à votre intuition dans la prise de décision ?", trait: "N" },
    { text: "Aimez-vous avoir plusieurs projets en cours en parallèle ou préférez-vous vous concentrer sur une seule chose à la fois ?", trait: "J" },
    { text: "Êtes-vous plus attiré par les emplois impliquant des interactions sociales fréquentes ou de la réflexion individuelle ?", trait: "E" },
    { text: "Vous concentrez-vous davantage sur les détails pratiques ou sur les concepts généraux ?", trait: "N" },
    { text: "Prenez-vous généralement des décisions avec votre tête ou votre cœur ?", trait: "T" },
    { text: "Vous sentez-vous plus à l'aise dans un environnement prévisible ou imprévisible ?", trait: "J" },
    { text: "Préférez-vous des activités énergiques ou relaxantes ?", trait: "E" },
    { text: "Faites-vous davantage confiance aux faits ou à votre sixième sens ?", trait: "N" },
    { text: "Valorisez-vous plus la justice impartiale ou la compassion dans vos prises de décision ?", trait: "T" },
    { text: "Aimez-vous planifier à l'avance ou être spontané ?", trait: "J" },
    { text: "Recherchez-vous activement les rencontres et événements sociaux ou préférez-vous un cadre plus intime ?", trait: "E" },
    { text: "Vous fiez-vous plus à ce qui est tangible et réel ou à ce qui est abstrait et théorique ?", trait: "N" },
    { text: "Dans un conflit, accordez-vous plus d'importance à l'équité ou à préserver les sentiments des gens ?", trait: "T" },
    { text: "Aimez-vous avoir des horaires et des routines ou un style de vie plus imprévisible ?", trait: "J" },
    { text: "Vous décrivez-vous comme une personne expansive ou réservée ?", trait: "E" },
    { text: "Lors de la résolution d'un problème, confiez-vous plus à votre raison ou votre intuition ?", trait: "N" },
    { text: "Dans le travail, accordez-vous plus d'importance aux tâches ou aux relations interpersonnelles ?", trait: "T" },
    { text: "Appréciez-vous plus travailler sur des projets ouverts ou avec un début et une fin bien définis ?", trait: "J" },
    { text: "Dans les conversations, préférez-vous écouter ou parler ?", trait: "E" },
    { text: "Vous fiez-vous davantage aux données mesurables ou aux interprétations et significations ?", trait: "N" },
    { text: "Vous basez-vous davantage sur des critères objectifs ou sur les circonstances particulières dans la prise de décision ?", trait: "T" },
    { text: "Préférez-vous des procédures définies ou une approche flexible ?", trait: "J" },
    { text: "Aimez-vous être le centre d'attention ou préférez-vous rester en retrait ?", trait: "E" },
    { text: "Accordez-vous plus d'importance aux réalités présentes ou aux possibilités futures ?", trait: "N" },
    { text: "Lors d'un différend, cherchez-vous davantage à établir ce qui est juste ou à préserver l'harmonie ?", trait: "T" },
    { text: "Appréciez-vous plus avoir un emploi du temps prévisible ou ouvert ?", trait: "J" },
    { text: "Vous qualifiez-vous comme une personne chaleureuse ou impassible ?", trait: "T" },
    { text: "Vous fiez-vous plus à l'information concrète ou à vos impressions intuitives ?", trait: "N" },
    { text: "Vous considérez-vous comme une personne objective ou subjective dans la prise de décision ?", trait: "T" },
    { text: "Préférez-vous avoir un cadre clairement défini ou aimez-vous garder une certaine spontanéité ?", trait: "J" },
    { text: "Évitez-vous les grands rassemblements ou les appréciez-vous ?", trait: "E" },
    { text: "Vous préoccupez-vous davantage des faits ou des possibilités théoriques ?", trait: "N" },
    { text: "Vos décisions se basent-elles principalement sur la raison ou les valeurs humaines ?", trait: "T" },
    { text: "Aimez-vous mieux suivre un plan établi ou garder une certaine flexibilité ?", trait: "J" },
    { text: "Préférez-vous les interactions sociales énergiques ou un cadre plus calme ?", trait: "E" },
    { text: "Portez-vous plus attention aux expériences réelles ou aux idées et réflexions abstraites ?", trait: "N" },
    { text: "Vos jugements se fondent-ils davantage sur la logique pure ou les circonstances particulières ?", trait: "T" },
    { text: "Vous sentez-vous plus à l'aise avec des emplois du temps stricts ou une flexibilité totale ?", trait: "J" },
    { text: "Appréciez-vous davantage les activités solitaires ou en groupe ?", trait: "E" },
    { text: "Vous préoccupez-vous davantage du présent concret ou des potentialités futures ?", trait: "N" },
    { text: "Vous considérez-vous comme une personne impartiale ou compatissante ?", trait: "T" },
    { text: "Préférez-vous une vie bien structurée ou garder une grande souplesse ?", trait: "J" }
];
const careerRecommendations = {
    "ISTJ": ["Comptable", "An   alyste financier", "Bibliothécaire", "Gestionnaire de projet", "Inspecteur", "Contrôleur de la qualité", "Avocat", "Juge"],
    "ISTP": ["Ingénieur", "Programmeur", "Concepteur de produits", "Mécanicien", "Pilote", "Détective privé", "Inventeur", "Électricien"],
    "ESTP": ["Entrepreneur", "Négociateur", "Courtier", "Vendeur", "Chef de chantier", "Agent de sécurité", "Athlète professionnel", "Pompier"],
    "ESTJ": ["Gestionnaire de projet", "Chef d'entreprise", "Officier militaire", "Juge", "Banquier", "Agent immobilier", "Superviseur", "Gestionnaire des opérations"],
    "ISFJ": ["Infirmier", "Travailleur social", "Enseignant", "Conseiller d'orientation", "Secrétaire exécutif", "Bibliothécaire", "Assistant administratif", "Thérapeute"],
    "ISFP": ["Artiste", "Musicien", "Photographe", "Graphiste", "Fleuriste", "Chef cuisinier", "Éducateur de la petite enfance", "Massothérapeute"],
    "ESFP": ["Animateur", "Acteur", "Entraîneur sportif", "Représentant des ventes", "Hôte d'accueil", "Assistant de vol", "Coiffeur", "Décorateur d'intérieur"],
    "ESFJ": ["Enseignant", "Conseiller", "Travailleur social", "Recruteur", "Responsable des ressources humaines", "Ministre du culte", "Physiothérapeute", "Infirmier"],
    "INFJ": ["Psychologue", "Écrivain", "Conseiller spirituel", "Professeur d'université", "Artiste", "Coach de vie", "Travailleur humanitaire", "Psychothérapeute"],
    "INFP": ["Écrivain", "Poète", "Psychologue", "Travailleur social", "Professeur", "Artiste", "Consultant", "Missionnaire"],
    "ENFP": ["Entrepreneur", "Animateur d'événements", "Coach de vie", "Journaliste", "Publicitaire", "Acteur", "Artiste", "Psychologue"],
    "ENFJ": ["Coach", "Enseignant", "Ministre du culte", "Gestionnaire des ressources humaines", "Consultant", "Conférencier motivationnel", "Philanthrope", "Journaliste"],
    "INTJ": ["Scientifique", "Analyste de systèmes", "Programmeur", "Stratège", "Consultant", "Architecte de l'information", "Avocat", "Économiste"],
    "INTP": ["Scientifique", "Programmeur", "Ingénieur logiciel", "Analyste de systèmes", "Philosophe", "Chercheur", "Architecte", "Inventeur"],
    "ENTP": ["Entrepreneur", "Consultant", "Avocat", "Journaliste", "Publicitaire", "Animateur", "Inventeur", "Agent de voyages"],
    "ENTJ": ["Entrepreneur", "Chef d'entreprise", "Consultant en management", "Avocat", "Juge", "Stratège militaire", "Gestionnaire de projet", "Producteur de télévision"]
};

const personalities = {
    "ISTJ": "Les ISTJ sont des personnes réservées, pratiques, factuelles et organisées. Ils aiment les systèmes, les règles et l'ordre établi. Leur force réside dans leur fiabilité, leur sens du devoir et leur capacité à bien gérer les détails. Ils excellent dans les tâches qui nécessitent de la discipline et de la persévérance.",
    "ISTP": "Les ISTP sont des personnes réservées, pragmatiques et curieuses. Ils apprécient les défis pratiques et techniques. Ils sont doués pour résoudre des problèmes de manière ingénieuse et improvisée. Ils valorisent l'efficacité et la liberté d'action.",
    "ESTP": "Les ESTP sont des personnes énergiques, audacieuses et spontanées. Ils aiment l'action, les défis et les situations imprévues. Ils ont un bon sens pratique et sont souvent doués pour négocier et vendre. Ils apprécient la liberté et n'aiment pas trop de règles ou de routines.",
    "ESTJ": "Les ESTJ sont des personnes énergiques, décisives et organisées. Ils ont un fort sens du leadership et aiment prendre en charge les situations. Ils sont efficaces, fiables et attachés aux traditions. Ils peuvent parfois manquer de flexibilité.",
    "ISFJ": "Les ISFJ sont des personnes dévouées, loyales et responsables. Ils ont un grand sens du devoir et aiment prendre soin des autres. Ils apprécient l'harmonie, la stabilité et respectent les traditions. Ils peuvent manquer d'assurance pour exprimer leurs besoins personnels.",
    "ISFP": "Les ISFP sont des personnes sensibles, créatives et spontanées. Ils valorisent l'harmonie, l'authenticité et apprécient les expériences sensorielles. Ils ont un grand sens de l'esthétique et sont souvent doués pour les arts. Ils n'aiment pas les conflits et les environnements trop structurés.",
    "ESFP": "Les ESFP sont des personnes chaleureuses, énergiques et spontanées. Ils aiment être au centre de l'action et apprécient les activités sociales et sensorielles. Ils ont un bon sens de l'observation et sont souvent doués pour détecter l'ambiance d'un groupe. Ils n'aiment pas la routine et valorisent la liberté.",
    "ESFJ": "Les ESFJ sont des personnes dévouées, chaleureuses et consciencieuses. Ils excellent dans la prise en charge des autres et leur apport d'un soutien pratique. Ils valorisent l'harmonie, la coopération et respectent les traditions établies. Ils peuvent parfois manquer d'objectivité.",
    "INFJ": "Les INFJ sont des personnes idéalistes, déterminées et perspicaces. Ils ont une vision à long terme et cherchent à améliorer les choses. Ils excellent dans la compréhension des motivations humaines complexes. Leur désir de perfection peut parfois les rendre trop critiques.",
    "INFP": "Les INFP sont des personnes idéalistes, loyales et créatives. Ils valorisent l'authenticité, l'harmonie et cherchent à aider les autres. Ils excellent dans les domaines qui impliquent l'expression personnelle et artistique. Ils peuvent parfois manquer de confiance en eux.",
    "ENFP": "Les ENFP sont des personnes énergiques, enthousiastes et créatives. Ils aiment explorer de nouvelles idées et possibilités. Ils excellent dans la communication, la résolution de problèmes et l'inspiration des autres. Ils peuvent parfois manquer de discipline pour terminer les tâches.",
    "ENFJ": "Les ENFJ sont des personnes chaleureuses, persuasives et altruistes. Ils excellent dans le mentorat, l'encadrement et l'inspiration des autres. Ils valorisent l'harmonie et cherchent à favoriser la coopération. Ils peuvent parfois trop se fier à leurs intuitions.",
    "INTJ": "Les INTJ sont des personnes réservées, stratégiques et innovantes. Ils ont une pensée abstraite et intellectuelle. Ils excellent dans la résolution de problèmes complexes grâce à leur raisonnement logique. Leur recherche constante de perfection peut parfois les rendre trop critiques envers les autres.",
    "INTP": "Les INTP sont des personnes réservées, curieuses et analytiques. Ils aiment explorer les idées, les théories et les concepts. Ils excellent dans la résolution de problèmes grâce à leur raisonnement logique et leur capacité à voir les modèles sous-jacents. Ils peuvent parfois être perçus comme détachés ou indifférents aux aspects pratiques.",
    "ENTP": "Les ENTP sont des personnes énergiques, créatives et débattantes. Ils aiment explorer de nouvelles idées et remettre en question les conventions établies. Ils excellent dans la génération d'idées innovantes et la communication persuasive. Ils peuvent parfois manquer de patience pour les tâches routinières.",
    "ENTJ": "Les ENTJ sont des personnes énergiques, stratégiques et déterminées. Ils ont un fort sens du leadership et de l'organisation. Ils excellent dans la planification à long terme, la prise de décision et la gestion de projets complexes. Ils peuvent parfois être perçus comme trop autoritaires ou insensibles aux besoins des autres."
 };

 
let currentQuestionIndex = 0;
const answers = [];

function createSlider(question) {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = "50";
    slider.classList.add("slider");

    const container = document.createElement("div");
    container.classList.add("question");

    const label = document.createElement("label");
    label.textContent = question;

    const value = document.createElement("span");
    value.textContent = slider.value + "%";

    slider.addEventListener("input", () => {
        value.textContent = slider.value + "%";
    });

    container.appendChild(label);
    container.appendChild(slider);
    container.appendChild(value);

    return container;
}

function calculateMBTIType(answers) {
    const scoreMap = {
        "E": 0,
        "I": 0,
        "S": 0,
        "N": 0,
        "T": 0,
        "F": 0,
        "J": 0,
        "P": 0
    };

    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        const trait = questions[i].trait;
        const score = parseInt(answer);

        if (trait === "E" || trait === "I") {
            scoreMap["E"] += score;
            scoreMap["I"] += 100 - score;
        } else if (trait === "S" || trait === "N") {
            scoreMap["S"] += score;
            scoreMap["N"] += 100 - score;
        } else if (trait === "T" || trait === "F") {
            scoreMap["T"] += score;
            scoreMap["F"] += 100 - score;
        } else if (trait === "J" || trait === "P") {
            scoreMap["J"] += score;
            scoreMap["P"] += 100 - score;
        }
    }

    let mbtiType = "";
    mbtiType += scoreMap["E"] >= scoreMap["I"] ? "E" : "I";
    mbtiType += scoreMap["S"] >= scoreMap["N"] ? "S" : "N";
    mbtiType += scoreMap["T"] >= scoreMap["F"] ? "T" : "F";
    mbtiType += scoreMap["J"] >= scoreMap["P"] ? "J" : "P";

    return mbtiType;
}
function displayResult(mbtiType) {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Votre type de personnalité MBTI est : ${mbtiType}`;

    const description = personalities[mbtiType];
    if (description) {
        resultContainer.appendChild(document.createElement("br"));
        resultContainer.appendChild(document.createTextNode(description));
    }

    const careers = careerRecommendations[mbtiType];
    if (careers) {
        const careerList = document.createElement("ul");
        careers.forEach(career => {
            const careerItem = document.createElement("li");
            careerItem.textContent = career;
            careerList.appendChild(careerItem);
        });
        resultContainer.appendChild(document.createElement("br"));
        resultContainer.appendChild(document.createTextNode("Voici quelques carrières qui pourraient vous convenir :"));
        resultContainer.appendChild(careerList);
    } else {
        resultContainer.appendChild(document.createElement("br"));
        resultContainer.appendChild(document.createTextNode("Désolé, nous n'avons pas de recommandations de carrière pour ce type de personnalité."));
    }
}

function showNextQuestion() {
    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        const slider = createSlider(questions[currentQuestionIndex].text);
        questionsContainer.appendChild(slider);
        currentQuestionIndex++;

        if (currentQuestionIndex === questions.length) {
            document.getElementById("nextButton").style.display = "none";
            document.getElementById("submitButton").disabled = false;
        }
    } else {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").disabled = false;
    }
}

function showEmailModal() {
    const modal = document.getElementById("emailModal");
    const span = document.getElementsByClassName("close")[0];
    const submitEmail = document.getElementById("submitEmail");

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    submitEmail.onclick = function() {
        const emailInput = document.getElementById("emailInput");
        const email = emailInput.value.trim();

        if (email) {
            // Vous pouvez ici envoyer l'email à un serveur ou l'enregistrer localement
            console.log("Email soumis :", email);
            modal.style.display = "none";
            const mbtiType = calculateMBTIType(answers);
            displayResult(mbtiType);
        } else {
            alert("Veuillez entrer une adresse email valide.");
        }
    }
}

function init() {
    const nextButton = document.getElementById("nextButton");
    const submitButton = document.getElementById("submitButton");

    nextButton.addEventListener("click", showNextQuestion);
    submitButton.addEventListener("click", showEmailModal);

    showNextQuestion();
}

init();