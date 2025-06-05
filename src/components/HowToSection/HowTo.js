import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container} from 'react-bootstrap'

function HowTo() {
  return (
    <Container className='text-center'>
        <h3 className='display-3 m-4'>How To Section</h3>
        <p className='h5 mb-4'>Code snippets for HTML, CSS and JavaScript</p>
        <p className='h6'>For example, how to create a slideshow:</p>
        <Container className='my-5 col-xs-12 col-lg-9'>
            <Carousel data-bs-theme="light" fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <p className='h6'>Caption Text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/howto/img_snow_wide.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p className='h6'>Caption Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className='h6'>Caption Three</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </Container>
  )
}

export default HowTo
