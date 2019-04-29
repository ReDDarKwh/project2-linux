const questions = [
  {
    title: 'Accueil',
    name: 'Ça commence ici!',
    desc: 'Trouver les mots de passes pour passer au niveau suivant',
    css: 'font-weight: bold;'
  },
  {
    title: 'Niveau 1 ',
    name: 'Lecture de fichier (facile)',
    desc: 'Le mot de passe se retrouve dans le ficher /usr/home/pass'
  },
  {
    title: 'Niveau 2 ',
    name: 'Execution de script (facile)',
    desc:
      "Le mot de passe est affiché avec l'execution du fichier /usr/sbin/pass_script"
  },
  {
    title: 'Niveau 3 ',
    name: ' (facile)',
    desc: 'description n3'
  },
  {
    title: 'Niveau 4 ',
    name: 'Monter une partition (moyen)',
    desc: 'Le mot de passe se retrouve dans la partition /dev/sba1 '
  },
  {
    title: 'Niveau 5 ',
    name: 'slow start (moyen)',
    desc: 'description n3'
  },
  {
    title: 'Niveau 6 ',
    name: 'slow start (moyen)',
    desc: 'description n3'
  },
  {
    title: 'Niveau 7',
    name: 'Comparaison de fichiers (difficile)',
    desc:
      "Comparer les fichiers /usr/passv1 et /usr/passv2. Le mot de passe est la différence entre c'est deux fichiers"
  },
  {
    title: 'Niveau 8',
    name: 'Recherche dans un fichier texte (difficile) ',
    desc:
      'Rechercher le mot «inconnu» dans le fichier /usr/pass_cacher. Le mot de passe suit ce mot'
  }
];

document.addEventListener('DOMContentLoaded', function(event) {
  let list = $('#sidebar .list-unstyled.components');

  let loadQuestion = function(q) {
    const questionTitle = $('#content h2')[0];
    const questionDesc = $('#content p')[0];

    questionTitle.innerHTML = q.title + ' - ' + q.name;
    questionDesc.innerHTML = q.desc;
  };

  for (let q of questions) {
    let item = document.createElement('li');
    let a = document.createElement('a');

    a.style = q.css;

    item.append(a);
    list.append(item);

    a.setAttribute('href', '#');
    a.innerHTML = q.title;

    a.addEventListener('click', () => {
      loadQuestion(q);
    });
  }

  loadQuestion(questions[0]);
});
