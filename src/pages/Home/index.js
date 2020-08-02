/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Container, Text } from './style';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import TemplateBase from '../../template/TemplateBase';
import Loading from '../../components/Loading';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos().then((categoriesWithVideos) => {
      console.log(categoriesWithVideos);
      setCategories([...categoriesWithVideos]);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);
  return (
    <TemplateBase paddingAll={0}>
      {categories.length === 0 && (
      <Container>
        <Loading width={200} height={200}>Loading... </Loading>
        <Text>Loading...</Text>
      </Container>
      )}

      {categories.map((category, index) => {
        if (index === 0) {
          return (
            <React.Fragment key={`#${category.id}_${category.title}-banner`}>
              <BannerMain
                videoTitle={categories[0].videos[0].title || ''}
                url={categories[0].videos[0].url || ''}
                videoDescription="comece pelo básico"
              />

              <Carousel
                ignoreFirstVideo
                category={categories[0]}
              />
            </React.Fragment>
          );
        }

        return (
          <Carousel
            key={`#${category.id}_${category.title}`}
            category={category}
          />
        );
      })}

    </TemplateBase>
  );
}

export default Home;
