const botao = document.getElementById('meuBotao');
const gif = document.getElementById('meuGif');

botao.addEventListener('click', function() {
    botao.style.display = 'none';
    gif.style.display = 'block';
});
