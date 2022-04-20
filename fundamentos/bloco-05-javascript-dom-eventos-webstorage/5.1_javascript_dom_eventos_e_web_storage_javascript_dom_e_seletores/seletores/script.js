const corheader = document.getElementById('header-container');
corheader.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const tituloEmergencial = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < tituloEmergencial.length; index += 1) {
  tituloEmergencial[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const tarefasNaoEmergencial = document.querySelector('.no-emergency-tasks');
tarefasNaoEmergencial.style.backgroundColor = 'rgb(249, 219, 94)';

const titulosNaoEmergencial = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titulosNaoEmergencial.length; index += 1) {
  titulosNaoEmergencial[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';