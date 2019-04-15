const questions = [
  {
    title: 'Accueil',
    name: 'Ça commence ici!',
    desc: 'Trouver les mots de passes pour passer au niveau suivant'
  },
  {
    title: 'Niveau 1',
    name: 'Slow start',
    desc: 'description n1'
  },
  {
    title: 'Niveau 2',
    name: ' slow start',
    desc: 'description n2'
  },
  {
    title: 'Niveau 3',
    name: 'slow start',
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
