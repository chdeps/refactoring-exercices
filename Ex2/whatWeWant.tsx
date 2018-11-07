// Exercice 2

enum EDirection {
  right = 180,
  left = 0
}

const Chevron = ({ direction } : { direction : EDirection }) => {
  return <Svg type="ChevronLeft" rotation={direction} />
};

// What is displayed : ><
export class ClosedEyes extends Component {
  render(){
    return (
      <>
        <Chevron direction="right" />
        <Chevron direction="left" />
      </>
    )
  }
}
