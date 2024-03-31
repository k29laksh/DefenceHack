import React from 'react'
import HomeCard from '../components/HomeCard'
import Header from '../components/Header'
import Banner from '../components/Banner'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.jpg'
import Footer from '../components/Footer'
const Home = () => {
  
  return (
    <div className="dark:bg-radial-gradient dark:text-white w-full ">
    <Header/>
    <Banner/>
      <HomeCard featureImg={feature1} featureName="ID Scanner" featureDetails=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eius id voluptate atque, blanditiis, laudantium fugiat ut ad in maxime
          cumque aut quisquam inventore perspiciatis tenetur deleniti. Magnam,
          atque suscipit?" featureLink="/"/>
      <HomeCard featureImg={feature2} featureName="Ecommerce" featureDetails=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eius id voluptate atque, blanditiis, laudantium fugiat ut ad in maxime
          cumque aut quisquam inventore perspiciatis tenetur deleniti. Magnam,
          atque suscipit?" featureLink="/"/>
      <HomeCard featureImg={feature3} featureName="Blaah Blaah..." featureDetails=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eius id voluptate atque, blanditiis, laudantium fugiat ut ad in maxime
          cumque aut quisquam inventore perspiciatis tenetur deleniti. Magnam,
          atque suscipit?" featureLink="/"/>

          <Footer/>
    </div>
  )
}

export default Home
