import React from 'react';
import Menu from '../../Components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../Components/BannerMain'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={""}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />
   </div>

  );
}

export default Home;
