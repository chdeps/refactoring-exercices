import { filter } from 'lodash';
import { connect } from 'react-redux';
import { withProps } from 'recompose';
import { compose } from 'redux';
import { IPicture } from '../../pictures/types';
import { IRootState } from '../../state';
import { selectMainPicture, selectPictures } from '../selectors';
import { Component } from './component';

const mapStateToProps = (state: IRootState) => ({
  pictures: selectPictures(state),
  mainPicture: selectMainPicture(state),
});

type IComponentContainerOwnProps = ReturnType<
  typeof mapStateToProps
  >;

const componentContainerFactory = compose(
  connect(mapStateToProps),
  withProps((ownProps: IComponentContainerOwnProps) => {
    const otherPictures = filter(ownProps.pictures, {
      attributes: { isMainPicture: false },
    });
    return {
      otherPictures,
      hasPicture: ownProps.pictures.length > 0,
      hasOnlyMainPicture: otherPictures.length === 0,
    };
  })
);

export const componentContainer = componentContainerFactory(Component);
