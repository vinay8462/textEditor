import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BackgroundContainer,
  CardContainer,
  LeftContainer,
  MainHeading,
  RightContainer,
  IconContainer,
  Input,
  Card,
  ButtonBold,
  ButtonItalic,
  ButtonUndeLine,
  ListItem,
} from './Styled'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underLine: false, searchInput: ''}

  InputContent = event => {
    this.setState({searchInput: event.target.value})
  }

  onBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onUnderLine = () => {
    this.setState(prev => ({underLine: !prev.underLine}))
  }

  render() {
    const {searchInput, bold, underLine, italic} = this.state
    console.log(searchInput)
    return (
      <BackgroundContainer>
        <CardContainer>
          <LeftContainer>
            <MainHeading>Text Editor</MainHeading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </LeftContainer>
          <RightContainer>
            <Card>
              <IconContainer>
                <ListItem>
                  <ButtonBold
                    onClick={this.onBold}
                    bold={bold}
                    data-testid="bold"
                  >
                    <VscBold className="icon" />
                  </ButtonBold>
                </ListItem>
                <ListItem>
                  <ButtonItalic
                    onClick={this.onItalic}
                    italic={italic}
                    data-testid="italic"
                  >
                    <GoItalic className="icon" />
                  </ButtonItalic>
                </ListItem>
                <ListItem>
                  <ButtonUndeLine
                    onClick={this.onUnderLine}
                    underLine={underLine}
                    data-testid="underline"
                  >
                    <AiOutlineUnderline className="icon" />
                  </ButtonUndeLine>
                </ListItem>
              </IconContainer>
              <hr />
              <Input
                onChange={this.InputContent}
                value={searchInput}
                italic={italic}
                bold={bold}
                underLine={underLine}
                rows="20"
                cols="40"
              />
            </Card>
          </RightContainer>
        </CardContainer>
      </BackgroundContainer>
    )
  }
}

export default TextEditor
