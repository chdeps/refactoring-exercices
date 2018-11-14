import { filter } from 'lodash';
import { connect } from 'react-redux';
import { withProps } from 'recompose';
import { compose } from 'redux';
import { IPicture } from '../../pictures/types';
import { IRootState } from '../../state';
import { selectMainPicture, selectPictures } from '../selectors';
import {Component} from "../WhatWeHave/component";

const mapStateToProps = (state: IRootState) => ({
  pictures: selectPictures(state),
  mainPicture: selectMainPicture(state),
});

type IProfilePictureEditGalleryContainerOwnProps = ReturnType<
  typeof mapStateToProps
  >;

export const profilePictureEditGalleryContainerFactory = compose(
  connect(mapStateToProps),
  withProps((ownProps: IProfilePictureEditGalleryContainerOwnProps) => {
    const picturesCount = ownProps.pictures.length;
    const otherPictures = filter(ownProps.pictures, {
      attributes: { isMainPicture: false },
    });
    const otherPictureCount = otherPictures.length;
    return {
      otherPictures,
      hasPicture: picturesCount > 0,
      hasMoreThanOnePicture: otherPictureCount > 0,
    };
  })
);

export type IProfilePictureEditGalleryContainerProps = IProfilePictureEditGalleryContainerOwnProps & {
  otherPictures: IPicture[];
  hasPicture: boolean;
  hasMoreThanOnePicture: boolean;
};

export const componentContainer = componentContainerFactory(Component);
