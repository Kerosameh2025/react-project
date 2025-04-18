import React, { Component, useEffect , useRef } from "react";
import Slider from "react-slick";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.jpg';
import img5 from '../../assets/images/img-5.jpg';
import img6 from '../../assets/images/img-6.jpg';
import imagesSliderStyles from '../../styles/components/images_slider.module.css'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ShareIcon from '@mui/icons-material/Share';
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={imagesSliderStyles['next-button']}
        onClick={onClick}>
            <NavigateNextIcon color="white" style={{color : "white"}}/> 
        </div>
      
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={imagesSliderStyles['prev-button']}
        onClick={onClick}>
            <NavigateBeforeIcon color="white" style={{color : "white"}}/> 

        </div>
      
    );
  }
function CustomPaging() {   
  let images =[img1 , img2 , img3 , img4 , img5 , img6 ];
  const sliderRef = useRef(null);
  const settings = {
    // appendDots: dots => (
    //     <div className={imagesSliderStyles['custom-dots-container']}>
    //     {images.map((img, idx) => (
    //       <div key={idx} className="custom-dot flex-1 " style={{margin : "10px" , width : "100px" , height : "100px" , borderRadius : "5px" , cursor : "pointer"}}>
    //         <img
    //           style={{ width: '100%', height: '100%', objectFit: 'cover' , borderRadius : "5px"}}
    //           src={img}
    //           alt={`Image ${idx}`}
    //         />
            
    //       </div>
    //     ))}
    //   </div>
    //   ),
    
    customPaging: function(i) {
      return (
        <div className="custom-dot">
        <img src={images[i]} alt={`Image ${i}`} />
        </div>
        
      );
    },
    dotsClass: `slick-dots slick-thumb ${imagesSliderStyles['slick-dots']}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  useEffect(()=>{
    console.log(imagesSliderStyles['slick-dots']);
  },[])
  return (
    <Container maxWidth="xl" >
       <div className="slider-container my-10">
      <Slider ref={sliderRef}  {...settings}>
        {images.map((img , idx) => {
            return (
                <div className="mt-10 relative" key={idx}>
                    <img 
                      style={{
                        width: "100%",
                        maxHeight: "600px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                     src={img} alt="" />
        <div className={imagesSliderStyles['banner_info']}>
        <div className="banner_info_title_pricing flex justify-between items-center">
            <div>
        <Stack direction="row" spacing={1} sx={{marginBottom : "10px"}}>
        <Chip 
        label="For Sale"
        component="a"
        href="#basic-chip"
        size="medium"
        clickable
        sx={{
            backgroundColor: "#fff !important", 
            color: "black",
            borderColor: "#ccc",
            "&:hover": {
                backgroundColor: "#1db2ff !important",
                color: "white",
                cursor: "pointer",
                borderColor: "#1db2ff"
                },
        }}
        />
        <Chip
        label="Single Family"
        component="a"
        href="#basic-chip"
        variant="outlined"
        clickable
        sx={{
            color: "black",
            background : "#fff",
            "&:hover": {
                backgroundColor: "#1db2ff !important",
                color: "white",
                cursor: "pointer",
                borderColor: "#1db2ff"
                },
        }}
        />
        <Chip 
        label="Featured"
        component="a"
        href="#basic-chip"
        size="medium"
        clickable
        sx={{
            backgroundColor: "#1db2ff !important", 
            color: "white"
        }}
        
        />
        <Chip 
        label="Hot"
        component="a"
        href="#basic-chip"
        size="medium"
        clickable
        sx={{
            backgroundColor: "#dd3333 !important", 
            color: "white"
        }}
        
        />
        </Stack>
        <Stack
         direction="row"
          spacing={2} 
          sx={{ justifyContent: "center",
            alignItems : "center",
            display : "flex"}}
          >
        <Typography className="font-bold" variant="h4" gutterBottom style={{marginTop : "10px" , color : "white" , fontWeight : "bold"}}>
        Home in Merrick Way
        </Typography>
        <Chip 
        label="$540,000"
        component="a"
        href="#basic-chip"
        sx={{
            backgroundColor: "#1db2ff !important", 
            color: "white",
            fontSize : "30px",
            fontWeight : "70px",
            padding: "2px 8px",
            marginTop : "20px"
        }}
        
        />
        </Stack>
        <Stack
        direction="row"
        spacing={1}
        sx={{marginTop : "10px" , display : "flex",justifyContent:"space-between" , alignItems : "center" , width : "90%"}}
        >
            <Stack direction="row" spacing={2}>
            <LocationOnIcon sx={{color : "#1db2ff" ,  }} />
          <Typography  variant="subtitle2" gutterBottom sx={{color: "rgba(255, 255, 255, 0.75)"}}>
            Merrick Way, Miami, FL 33134, USA
            </Typography>
            </Stack >
            <Stack direction="row" spacing={2}>
            <Tooltip title="Share" placement="top" 
            sx={{background : "#1a1a1a" , color : "#808080" ,    "&:hover": {
                backgroundColor: "#1a1a1a !important",
             },} }>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Share" placement="top" 
            sx={{background : "#1a1a1a" , color : "#808080" ,    "&:hover": {
                backgroundColor: "#1a1a1a !important",
             },} }>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Share" placement="top" 
            sx={{background : "#1a1a1a" , color : "#808080" ,    "&:hover": {
                backgroundColor: "#1a1a1a !important",
             },} }>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </Tooltip>
       
            </Stack>
        </Stack>
            </div>
          
        </div>
                </div>
                </div>
            )
        })}
      </Slider>
      <div className={imagesSliderStyles['custom-dots-container']} style={{ display: "flex", justifyContent: "center", marginTop: "20px" , width : "80%" }}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              onClick={() => sliderRef.current.slickGoTo(idx)} 
              className="custom-dot"
              style={{
                margin: "10px",
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                cursor: "pointer",
                overflow: "hidden",
                border: "2px solid transparent",
                flex : 1
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                src={img}
                alt={`Thumbnail ${idx}`}
              />
            </div>
          ))}
        </div>
      
    </div>
 </Container>
  );
}

export default CustomPaging;
