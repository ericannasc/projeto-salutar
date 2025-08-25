'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import estilos from './Carrossel.module.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slidesData = [
    {
    id: 1,
    image: '/img1.png',
    title: 'RECADASTRAMENTO',
    description: 'Acesse nosso formulário e mantenha seus dados atualizados.',
    link: '#',
    linkText: 'Atualizar Agora'
  },
  {
    id: 2,
    image: '/img2.png',
    title: 'APOIE NOSSOS PROJETOS',
    description: 'Contribua com nossas iniciativas para melhorar a vida de outros através da Educação!',
    link: '#',
    linkText: 'Faça sua Doação!'
  },
  {
    id: 3,
    image: '/img3.png',
    title: 'ASSOCIAÇÃO CLUBE SALUTAR',
    description: 'A mais de 10 anos transformando vidas!',
    link: '#',
    linkText: 'Nossos Projetos'
  },
  {
    id: 4,
    image: '/img4.png',
    title: 'SEJA UM ASSOCIADO',
    description: 'Produtos e convênios exclusivos para associados e seus dependentes.',
    link: '#',
    linkText: 'Associe-se'
  },
  {
    id: 5,
    image: '/img5.png',
    title: 'DESCONTOS E VANTAGENS EXCLUSIVOS',
    description: 'Uma rede de convênios e benefícios especiais para associados do Clube Salutar nas empresas parceiras.',
    link: '#',
    linkText: 'Saiba mais'
  },
  ];

  return (
    <div className={estilos.carouselContainer}>
      <Slider {...settings}>
        {slidesData.map(slide => (
            <div key={slide.id}>
                <div className={estilos.carouselSlide} style={{ backgroundImage: `url(${slide.image})` }}>
                    <div className={estilos.carouselContent}>
                        <h2 className={estilos.carouselTitle}> {slide.title} </h2>
                        <p className={estilos.carouselDescription}> {slide.description} </p>
                        <a href={slide.link} className={estilos.carouselButton}> {slide.linkText} </a>
                    </div>
                </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;