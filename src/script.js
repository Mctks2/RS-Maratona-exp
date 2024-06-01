const elementoResposta = document.querySelector("#resposta");

const respostas = [
  "Você tem poder sobre sua mente - não sobre eventos externos. Perceba isso e encontrará força. - Marcus Aurélio",
  "A felicidade da sua vida depende da qualidade dos seus pensamentos. - Marcus Aurelio",
  "Tudo o que ouvimos é uma opinião, não um fato. Tudo o que vemos é uma perspectiva, não a verdade. - Marcus Aurelio",
  "Não perca mais tempo discutindo sobre o que deve ser um homem bom. Seja um. - Marcus Aurelio",
  "Se não é certo, não faça; se não é verdade, não diga. - Marcus Aurelio",
  "Sofremos não pelos eventos em nossas vidas, mas pelo nosso julgamento sobre eles. - Epicteto",
  "Primeiro diga a si mesmo o que você seria; e então faça o que você tem que fazer. - Epicteto",
  "Nenhum homem é livre se não for mestre de si mesmo. - Epicteto",
  "As circunstâncias não fazem o homem, apenas o revelam a si mesmo. - Epicteto",
  "Não é o que acontece com você, mas como você reage a isso que importa. - Epicteto",
  "Sorte é o que acontece quando a preparação encontra a oportunidade. - Sêneca",
  "Sofremos mais na imaginação do que na realidade. - Sêneca",
  "Como é um conto, assim é a vida: não importa quanto tempo dura, mas quão boa ela é. - Sêneca",
  "Quem é corajoso é livre. - Sêneca",
  "As dificuldades fortalecem a mente, assim como o trabalho fortalece o corpo. - Sêneca",
  "O valor moral não pode ser alcançado sem um equilíbrio adequado entre o que é bom para si e o que é bom para os outros. - Panécio de Rodes",
  "É função da sabedoria discriminar entre o bem e o mal. - Panécio de Rodes",
  "A busca pela virtude é o verdadeiro objetivo da vida. - Panécio de Rodes",
  "A vida pública deve ser abordada com cautela, garantindo que as ações estejam alinhadas com a integridade moral. - Panécio de Rodes",
  "A amizade está enraizada na virtude e é essencial para uma vida plena. - Panécio de Rodes",
];


// Botão fazer pergunta 
function buscarResposta() {
   // Resetar opacidade para exibir nova resposta
  elementoResposta.style.opacity = 1;

  //gerar numero aleatorio
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  elementoResposta.innerHTML = respostas[numeroAleatorio];

  // sumir resposta depois de 3s
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
  }, 5000);
}
