import styled from "styled-components"  

const FooterContainer = styled.div`
position:fixed;
bottom: 0;
height: 90px;
width: 100vw;
background-color: #181818;
color: #fff;
display:flex;
justify-content: space-between;
`
const FooterLeft = styled.div`
display: flex;
align-items:center;
flex: 0.3%;
max-width: 300px;
& img {
    width: 90px;
    padding: 10px;
    object-fit: contain;
}
`
const FooterCenter = styled.div`
flex: 04%;
display: flex;
align-items:center;
justify-content: space-between;
margin: 0 20px;
max-width: 300px;
& .MuiSvgIcon-root:hover {
    color: #1db954;
    transition: .4s;
}
`
const FooterRight = styled.div`
flex: 0.3%;
display: flex;
align-items:center;
max-width: 300px;
justify-content: space-between;
margin-right:30px;
& .MuiSlider-root {
    color: #1db954;
}
`

export { FooterContainer, FooterLeft, FooterCenter, FooterRight}