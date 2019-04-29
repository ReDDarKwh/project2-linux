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
    name: 'slow start (facile)',
    desc: 'description n2'
  },
  {
    title: 'Niveau 3 ',
    name: 'slow start (facile)',
    desc: 'description n3'
  },
  {
    title: 'Niveau 4 ',
    name: 'slow start (moyen)',
    desc: 'description n3'
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
    name: 'slow start (difficile)',
    desc: 'description n3'
  },
  {
    title: 'Niveau 8',
    name: 'slow start (difficile) ',
    desc: 'description n3'
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
