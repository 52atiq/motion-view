// import React from 'react';
// import sliderOne from '../../assets/images/slider-one.png'
// import sliderTwo from '../../assets/images/slider-two.png'
// import sliderThree from '../../assets/images/slider-three.png'
// import sliderFour from '../../assets/images/slider-four.png'

// const Slider = () => {

//     const sliderPic =[
//         {
//             id:1,
//             image:sliderOne,
//         },
//         {
//             id:2,
//             image:sliderTwo,
//         },
//         {
//             id:3,
//             image:sliderThree,
//         },
//         {
//             id:4,
//             image:sliderFour,
//         },
       
//     ]
//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//           <div
//             className={className}
//             style={{ ...style, display: "block", background: "red"}}
//             onClick={onClick}
//           />
//         );
//       }
      
//       function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//           <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//           />
//         );
//       }
    
    
    
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 2000,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             initialSlide: 0,
//             autoplay: true,
//             autoplaySpeed: 2000,
//             nextArrow: <SampleNextArrow />,
//             prevArrow: <SamplePrevArrow />,
//             // cssEase: "linear",
//             responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2,
//                   infinite: true,
//                   dots: true
//                 }
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2,
//                   initialSlide: 2
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               }
//             ]
//           };
    
    
//         return (
//             <div className='w-full mx-auto'>
//                 <Slider {...settings}>
//                 {sliderPic.map(item =>(
//                        <div className='card'>
//                        <div className='card-top'>
//                         <img className='w-60 h-60' src={item.image} alt={item.title} />
//                         <h1>{item.title}</h1>
//                          </div>
//                            <div className='card-bottom'> 
//                            <h3>{item.price}</h3>
//                            <p>{item.category}</p>
//                         </div> 
//                    </div>
//                 ))}
//                 </Slider>
               
//             </div>
//         );
//     };

// export default Slider;