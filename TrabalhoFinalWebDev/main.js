import './style.css'

// URL da API
const apiURL = 'http://localhost:8080/produto';

// Função para buscar as fotos da API
export async function fetchPhotos() {
  try {
    const sortOrder = document.getElementById('sort-options').value;
    const urlWithParams = `http://localhost:8080/produto?order=${sortOrder}`;
    const response = await fetch(urlWithParams);
    const photos = await response.json();
    displayPhotos(photos.slice(0, 100));
  } catch (error) {
    console.error('Erro ao carregar os produtos:', error);
  }
}

// Função para exibir as fotos na galeria
function displayPhotos(photos) {
  const gallery = document.getElementById('gallery');
  const totalPhotosElement = document.getElementById('total-photos');
  gallery.innerHTML = '';  // Limpa a galeria antes de adicionar novas fotos

  // Atualiza o total de fotos no rodapé
  totalPhotosElement.textContent = photos.length;

  // Exibe cada foto na galeria com título e preço
  photos.forEach(produto => {
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('photo-item');

    // Criar a imagem
    const imgElement = document.createElement('img');
    imgElement.src = produto.imageUrl;
    imgElement.alt = produto.descricao;

    // Criar o título
    const titleElement = document.createElement('h3');
    titleElement.textContent = produto.nome;

    // Criar o preço
    const priceElement = document.createElement('p');
    priceElement.textContent = 'R$ '+ produto.preco;

    // Adicionar imagem, título e preço ao container da foto
    photoContainer.appendChild(imgElement);
    photoContainer.appendChild(titleElement);
    photoContainer.appendChild(priceElement);

    // Adicionar o container da foto na galeria
    gallery.appendChild(photoContainer);
  });
}

// Chama a função ao carregar a página
fetchPhotos();

