const questions = [
  {
    title: 'Accueil',
    name: 'Bienvenue sur notre site !',
    desc:
      'Le jeu consiste à trouver les mots de passe des usagers en exécutant des commandes bash pour passer au niveau suivant. <br>Pour commencer, connectez-vous en SSH a la machine <b>prj2.lan</b> avec l’usager <b>user1</b> et le mot de passe <b>93aoFiMz08sC</b> .',
    css: 'font-weight: bold;'
  },
  {
    title: 'Niveau 1',
    name: 'Lecture de fichier (facile)',
    desc:
      'Le mot de passe pour <b>user2</b> se retrouve dans le ficher <i>/home/user1/pass.txt</i> .'
  },
  {
    title: 'Niveau 2',
    name: 'Exécution de script (facile)',
    desc:
      "Le mot de passe pour <b>user3</b> est affiché avec l'execution du fichier <i>/home/user2/pass_script.sh</i> ."
  },
  {
    title: 'Niveau 3',
    name: 'Fichier texte encrypté (facile)',
    desc:
      'Le mot de passe pour <b>user4</b> est encodé en base 64 dans le fichier <i>/home/user3/base64</i>'
  },
  {
    title: 'Niveau 4',
    name: 'Monter une partition (moyen)',
    desc:
      'Le mot de passe pour <b>user5</b> est dans la partition /home/user4/Partition.img '
  },
  {
    title: 'Niveau 5',
    name: 'Lecture d’un fichier simple (moyen)',
    desc:
      'Le mot de passe pour <b>user6</b> fdd se trouve a la ligne 1352642 du fichier  <i>/home/user5/file.txt</i>'
  },
  {
    title: 'Niveau 6',
    name: 'Lecture d’un fichier simple(moyen)',
    desc:
      'Le mot de passe pour <b>user7</b> est se trouve dans le fichier <i>/home/user6/pass.txt</i> .'
  },
  {
    title: 'Niveau 7',
    name: 'Comparaison de fichiers (difficile)',
    desc:
      'Le mot de passe pour <b>user8</b> est la différence entre les fichier <i>/home/user7/file1.txt</i> et <i>/home/user7/file2.txt</i> .'
  },
  {
    title: 'Niveau 8',
    name: 'Recherche dans un fichier texte (difficile) ',
    desc:
      "Le mot de passe finale se trouve après le mot 'inconnu' dans le fichier <i>pass_cacher.txt</i>"
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
