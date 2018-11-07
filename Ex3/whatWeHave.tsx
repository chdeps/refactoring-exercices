// Exercice 3

/*
  What we want here is to externalize TextArea component in another highest order one
*/

export class ComponentOne extends Component {
  public state = {
    isFocused: false,
    value: '',
    disabled: true,
  };

  public render() {
    const { theme } = this.props;
    return (
      <Content>
        <TextArea
          placeholder={i18n.translate('componentOne.placeholder')}
          placeholderTextColor={theme.colors.grey}
          maxLength={2000}
          returnKeyType="done"
          withCounter
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onChangeText={this.onTextChange}
        />
    </Content>
  );
  }

  private onInputFocus = () => {
    this.setState({
      isFocused: true,
    });
  };

  private onInputBlur = () => {
    this.setState({
      isFocused: false,
    });
  };

  private onTextChange = (text: string) => {
    const trimmedText = text.trim();
    this.setState({
      value: trimmedText,
      disabled: trimmedText.length < 5
    });
  };
}
