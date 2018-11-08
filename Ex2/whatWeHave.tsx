//Exercice 2

/*
  What we want is refacto ChevronLeft because let's face it, it's not comprehensible ;)
*/

import Svg from 'react-native-svg';

const ChevronLeft = ({ style }) => (
  <Svg type="ChevronLeft" rotation={180} style={style}/>
);

//What is displayed : ><
export class ClosedEyes extends Component {
  render(){
    return (
      <>
      <ChevronLeft />
      <ChevronLeft style={{ transform : [{ rotateX: '180deg' }] }} />
      </>
    )
  }
}
