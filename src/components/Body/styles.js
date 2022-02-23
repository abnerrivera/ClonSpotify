import styled from "styled-components";

const BodyContainer = styled.div`
flex: 0.8;
height:100vh;
background-color: #131313;
color: #fff;
padding: 30px;
overflow-y: overlay;
& ::-webkit-scrollbar{
    display: none;
}

`

const HeaderContainer = styled.div`
background-color: #181818;
display: flex;
justify-content: space-between;
margin-bottom: 35px;
padding: 30px;
`

const HeaderLeft = styled.div`
display: flex;
padding: fixed;
align-items: center;
background-color: #fff;
border-radius:50px;
flex: 0.5;
min-width:72px;
& input {
    border: none;
    width: 100%;
}
`

const HeaderRight = styled.div`
color: white;
display: flex;
align-items: center;
& h4 {
    margin-left:15px;
}
`

const Info = styled.div`
display: flex;
& img {
    width:10vw;
    margin: 0 30px;
    box-shadow: 0 4px 60px #000;
    min-width: 200px;
    min-height: 150px;
}
`
const InfoText = styled.div`
color: #fff;
& h4 {
    
}
& h5 {
    font-size: 20px;
}
`

const Songs = styled.div`
margin: 20px -20px;
`
const Icons = styled.div`
margin-left: 30px;
& .MuiSvgIcon-root{
    margin: 10px;
}
& .MuiSvgIcon-root:hover {
    color: #1db954;
    transition: .4s;  
}
`

const SongRowContainer = styled.div`
display:flex;
margin-left:25px;
align-items:center;
z-index:90;
color:white;
& :hover {
    cursor: pointer;
    background-color: #1db954;
    opacity:0.9;
}
& img {
    height:50px;
    width:50px;
    margin-right: 20px;
    padding: 5px;
    object-fit: contain;
}
`

const SongInfo = styled.div`

`


export { BodyContainer,
    HeaderContainer, 
    HeaderLeft, 
    HeaderRight, 
    Info,
    InfoText,
    Songs,
    Icons,
    SongRowContainer,
    SongInfo
}