import Styled from 'styled-components'

export const BackgroundContainer = Styled.div`
    background-color:#334155;
   height:96vh;
    margin:0px;
    color:#ffffff;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-family:Roboto;
`
export const CardContainer = Styled.div`
    background-color:black;
    width:50vw;
    height:70vh;
    border-radius:6px;
    display:flex;
    flex-direction:row;
`
export const LeftContainer = Styled.div`
    background-color:black;
    width:50%;
    padding:10px;
`
export const MainHeading = Styled.h1`
    color:#ffffff;
    font-size:25px;
    align-self:center;
    text-align:center;
    
`

export const RightContainer = Styled.div`
    background-color:black;
    width:50%;
    padding-top:20px;
`
export const IconContainer = Styled.ul`
    background-color:#334155;
    margin:10px;
    display:flex;
`
export const Input = Styled.textarea`
   border:0;
   cursor:pointer;
    background-color:transparent;
    color:#ffffff;
    border-width:0px;
    padding:4px;
    margin-left:3px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')}
    font-style: ${props => (props.italic ? 'italic' : 'normal')}
    text-decoration: ${props => (props.underLine ? 'underline' : 'normal')}

`
export const Card = Styled.div`
    background-color:#334155;
    margin:5px;
    height:94%;
    padding:10;
    border:1px solid #ffffff;
    border-radius:4px;
`
export const ButtonBold = Styled.button`
    background-color:transparent;
    cursor:pointer;
    border:0px;
    font-size:12px;
    color: ${props => (props.bold ? ' #faff00' : '#f1f5f9')}
`
export const ButtonItalic = Styled.button`
    background-color:transparent;
    cursor:pointer;
    border:0px;
    font-size:12px;
    color: ${props => (props.italic ? ' #faff00' : '#f1f5f9')}
`
export const ButtonUndeLine = Styled.button`
    background-color:transparent;
    cursor:pointer;
    border:0px;
    font-size:12px;
    color: ${props => (props.underLine ? ' #faff00' : '#f1f5f9')}
`
export const ListItem = Styled.li`
    list-style-type:none;
`
