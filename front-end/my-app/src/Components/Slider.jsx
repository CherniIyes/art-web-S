import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "99%" }}
                        className=""
                        src="https://cdn.hero.page/wallpapers/52c4029c-56f9-4a20-828e-946ad6b36da1-deep-tones-abstract-oil-painting-wallpapers-wallpaper-1.png"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "600px", width: "99%" }}
                        className=""
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcGZuCyJW7Cc6_sNfjdc0SRxU5SQPZAO3lfCjyQ9eu3o9BQBuWZKT4TTGCwB5q8DEbkXyS9NgG77SIed8v9RMy-6LvYYQnWBy_YQ8_x23o6ntJQundKDSx5a5UbxIMXuG1nPs__3956m9U_r5TFuu3CGjWCuhAoloaoak1VNu_t6sKzpp_VWhQDsKB4g/s3840/lake-forest-night-painting-1222023.png"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>

            {/* <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "99%" }}
                        className=""
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrekthehimalayas.com%2Fsar-pass-trek&psig=AOvVaw1DTbfi4QQ-TSrDm8EkUm97&ust=1706049133714000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj3lcCG8oMDFQAAAAAdAAAAABAD"
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item> */}

            {/* <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "373.53px" }}
                        className=""
                        src="https://outdoorishome.com/wp-content/uploads/2021/11/Hammocking-in-winter-e1636475924383.jpg"
                        alt="First slide"
                    />
                 
                </div>
            </Carousel.Item> */}
        </Carousel>
    )
}
export default Slider;
