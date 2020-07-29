import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import TemplateBase from '../../template/TemplateBase'

function Home() {
  return (
    <div>
      <TemplateBase>
        <React.Fragment>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"comece pelo básico"}
        />
        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
        <Carousel
          category={dadosIniciais.categorias[1]}
          />
          </React.Fragment>
      </TemplateBase>
    </div>
  );
}

export default Home;
