import { IPostPicturesContainerProps } from 'affiny-core/modules';
import { IProfilePictureEditGalleryContainerProps } from 'affiny-core/modules/account/containers/profilePictureEditGalleryContainerFactory';
import { i18n } from 'affiny-core/translations';
import { RefObject } from 'Affiny/node_modules/@types/react';
import styled from 'Affiny/src/libraries/styled-components';
import {
  ImagePickerResponse,
  ImagePickerService,
} from 'Affiny/src/services/ImagePickerService';
import { Add } from 'Affiny/src/ui/Buttons/Add/';
import {
  EBUTTON_ACTION_ICONS,
  ProfilePicture,
} from 'Affiny/src/ui/Pictures/ProfilePicture/ProfilePicture.component';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { ImportPictureActionSheet } from './ImportPictureActionSheet.component';

const PictureActionSheetRef: RefObject<ActionSheet> = React.createRef();

type TProps = IPostPicturesContainerProps &
  IProfilePictureEditGalleryContainerProps;

export class Component extends Component<TProps> {

  public render() {
    const {
      hasPicture,
      hasOnlyMainPicture,
      mainPicture,
      otherPictures,
    } = this.props;

    const buttonText = hasPicture
      ? undefined
      : i18n.translate('profilePictureEditGallery.addPictureText');
    const mainButtonType = hasOnlyMainPicture
      ? undefined
      : EBUTTON_ACTION_ICONS.DELETE;

    return (
      <Container contentContainerStyle={{ padding: 16 }}>
        {mainPicture && (
          <MainPictureContainer>
            <ProfilePicture
              imageUri={mainPicture.attributes.formats.PROFILE_PORTRAIT}
              buttonType={mainButtonType}
              status={i18n.translate(
                'profilePictureEditGallery.profilePicture'
              )}
            />
          </MainPictureContainer>
        )}
        <OtherPictureListContainer>
          <Add
            text={buttonText}
            isSmall={hasPicture}
            onPress={this.openImportActionSheet}
          />
          {hasPicture &&
          !hasOnlyMainPicture &&
          otherPictures.map(item => (
            <ProfilePicture
              isSmall
              imageUri={item.attributes.formats.PROFILE_PORTRAIT}
              key={item.id}
              buttonType={EBUTTON_ACTION_ICONS.MORE}
            />
          ))}
            </OtherPictureListContainer>
            <ImportPictureActionSheet
            innerRef={PictureActionSheetRef}
            fromFacebook={this.temporaryAlert('FB')}
            fromGallery={this.temporaryAlert('GALLERY')}
            fromCamera={this.launchCamera}
            />
            </Container>
      );
    }

    private openImportActionSheet = () =>
          PictureActionSheetRef.current && PictureActionSheetRef.current.show();

    private temporaryAlert = (from: string) => () => {
            Alert.alert(`Import from ${from}`);
          };

    private launchCamera = () =>
          ImagePickerService.launchCamera(this.onPicturePicked);

    private onPicturePicked = (picture: ImagePickerResponse) =>
            this.props.postPictures({
              imageBase64: picture.data,
              type: 'portrait',
              refreshPictures: true,
            });
}

const Container = styled.ScrollView`
   background-color: ${({ theme }) => theme.colors.white};
`;

const MainPictureContainer = styled.View`
   margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const OtherPictureListContainer = styled.View`
   flex-grow: 1;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
`;

