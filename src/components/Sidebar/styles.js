import styled from "styled-components"; 

const SidebarContainer = styled.div`
flex: 0.2;
background-color:#000;
color: #fff;
height: 100vh;
min-width:240px;
& img {
    margin-top: 10px;
    height: 90px;
    padding: 10px;
}
& hr {
    border: 1px solid smokegray;
    width: 90%;
    margin: 10px auto;
}
`

const PlayList = styled.div`
margin:10px 15px;
`

const Choices = styled.div`
display:flex;
align-items: center;
height:40px;
color: gray;
cursor:pointer;
& :hover {
    color: white;
    transition: 0.4s;
}
& svg {
    margin: 10px auto;
}
& h3 {
    margin: 10px auto;
}
& p {
    margin: 10px 0 0 20px;
}
`

export { SidebarContainer, PlayList, Choices }