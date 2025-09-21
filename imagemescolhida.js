<!DOCTYPE html>
<html>
<body>
<div id="imagem"></div>

<script>
   let imagem = [
       {
           caminho: 'https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg',
           url: 'https://www.google.com'
       }
   ];

   // ERRO: imagem*length -> CORRETO: imagem.length
   let escolhido = Math.floor(Math.random() * imagem.length);
   let esco = imagem[escolhido];

   // Cria a imagem
   let criar = document.createElement('img');
   criar.src = esco.caminho;
   criar.style.width = '300px';
   criar.style.height = '200px';

   // Se quiser que a imagem seja clicável, use um <a>
   let link = document.createElement('a');
   link.href = esco.url;
   link.target = '_blank'; // Abre em nova aba
   link.appendChild(criar);

   // Adiciona no <div>
   document.getElementById('imagem').appendChild(link);
</script>
</body>
</html>
