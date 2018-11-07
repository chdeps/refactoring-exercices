// Exercice 3

export class ComponentOne extends Component<TProps, TState> {
  public state = {
    isFocused: false,
    value: '',
    disabled: true,
  };

  public render() {
    const { theme } = this.props;
    return (
      <Content>
        <AnnounceText
          placeholder={i18n.translate(
            'componentOne.placeholder'
          )}
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


export class AnnounceText extends Component<TProps> {
  public render() {
    const { theme, ...otherProps } = this.props;
    return (
      <TextArea
        {...otherProps}
        placeholderTextColor={theme.colors.grey}
        returnKeyType="done"
        withCounter
        maxLength={2000}
      />
    );
  }
}
