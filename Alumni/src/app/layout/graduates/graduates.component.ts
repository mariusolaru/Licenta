import { Component, OnInit ,NgModule, VERSION } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy, GalleryService,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';

@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.scss'],
  animations: [routerTransition()] 
})
export class GraduatesComponent {

  name: string;

  constructor(private galleryService: GalleryService) {
    this.name = `${VERSION.full}`
  }

  imageIndex = 1;
  galleryId = 1;

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
  };
  plainGalleryRowSpaceAround: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
  };
  plainGalleryRowATags: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
    // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
    // I added this here, to be more explicit.
    advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
  };

  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
  };

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png'
        //description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
        //description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
        //description: 'Description 4',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
      }
    )
  ];

  imagesHtmlDescriptions: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img2.png',
        description: '<ol><li>This is</li><li>the description</li><li>number</li><li>2</li></ol>'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img4.jpg',
        description: 'Description 4',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/img5.jpg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/img5.jpg'
      }
    )
  ];

  imagesRect: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/milan-pegasus-gallery-statue.jpg',
        description: 'Description 1'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-milan-pegasus-gallery-statue.jpg'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-47223.jpeg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-52062.jpeg',
        description: 'Description 3'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
        description: 'Description 3'
      }
    ),
    new Image(
      3,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-66943.jpeg',
        description: 'Description 4'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg'
      }
    ),
    new Image(
      4,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-93750.jpeg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg'
      }
    ),
    new Image(
      5,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-94420.jpeg',
        description: 'Description 6'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg'
      }
    ),
    new Image(
      6,
      { // modal
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-96947.jpeg'
      },
      { // plain
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/thumbs/t-pexels-photo-96947.jpg'
      }
    )
  ];

  imagesMixedSizes: Image[] = [
    new Image(0, {
      // modal
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-135230.png',
      description: 'Description 1'
    }),
    new Image(1, {
      // modal
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-547115.jpeg'
    }),
    new Image(2, {
      // modal
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-556664.jpeg',
      description: 'Description 3'
    }),
    new Image(3, {
      // modal
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-787594.jpeg',
      description: 'Description 4'
    }),
    new Image(4, {
      // modal
      img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/gallery/pexels-photo-803105.jpeg'
    })
  ];

  // example of images with small previews (they are different files) to show
  // loading spinners
  imagesForLoadingSpinner: Image[] = [
    new Image(
      0,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-74506.jpg'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-74506-thumb.jpg' }
    ),
    new Image(
      1,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-106006.jpg'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-106006-thumb.jpg' }
    ),
    new Image(
      2,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-464336.jpg'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-464336-thumb.jpg' }
    ),
    new Image(
      3,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo.jpg'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/pexels-photo-thumb.jpg' }
    ),
    new Image(
      4,
      {
        img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/traffic-highway-lights-night-56891.jpg'
      },
      { img: 'https://raw.githubusercontent.com/Ks89/angular-modal-gallery/v4/examples/systemjs/assets/images/loading-spinner-samples/traffic-highway-lights-night-56891-thumb.jpg' }
    )
  ];

  // array with a single image inside (the first one)
  singleImage: Image[] = [this.images[0]];

  dotsConfig: DotsConfig = {
    visible: false
  };

  customDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customDescriptionStyle: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => ',
    style: {
      bgColor: 'rgba(255,0,0,.5)',
      textColor: 'blue',
      marginTop: '3px',
      marginBottom: '0px',
      marginLeft: '5px',
      marginRight: '5px',
      position: 'absolute',
      top: '0px',
      height: '25px'
      // be careful to use width, in particular with % values
    }
  };

  customDescriptionHideIfEmpty: Description = {
    strategy: DescriptionStrategy.HIDE_IF_EMPTY,
    imageText: 'Look this image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  customFullDescriptionHidden: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image'
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  // customButtonsSize: ButtonSize = {
  //   width: 10,
  //   height: 10,
  //   unit: 'px'
  // };

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };
  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };
  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };
  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  // default buttons but extUrl will open the link in a new tab instead of the current one
  // this requires to specify all buttons manually (also if they are not really custom)
  customButtonsConfigExtUrlNewTab: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'ext-url-image',
        type: ButtonType.EXTURL,
        extUrlInNewTab: true // <--- this is the important thing to understand this example
      },
      {
        className: 'download-image',
        type: ButtonType.DOWNLOAD
      },
      {
        className: 'close-image',
        type: ButtonType.CLOSE
      }
    ]
  };

  customButtonsFontAwesomeConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      {
        className: 'fas fa-plus white',
        type: ButtonType.CUSTOM,
        ariaLabel: 'custom plus aria label',
        title: 'custom plus title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-times white',
        type: ButtonType.CLOSE,
        ariaLabel: 'custom close aria label',
        title: 'custom close title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-download white',
        type: ButtonType.DOWNLOAD,
        ariaLabel: 'custom download aria label',
        title: 'custom download title',
        fontSize: '20px'
      },
      {
        className: 'fas fa-external-link-alt white',
        type: ButtonType.EXTURL,
        ariaLabel: 'custom exturl aria label',
        title: 'custom exturl title',
        fontSize: '20px'
      }
    ]
  };

  previewConfigOneImage: PreviewConfig = {
    visible: true,
    number: 1
  };

  previewConfigNoArrows: PreviewConfig = {
    visible: true,
    arrows: false
  };

  previewConfigNoClickable: PreviewConfig = {
    visible: true,
    clickable: false
  };

  // TODO still not implemented
  previewConfigAlwaysCenter: PreviewConfig = {
    visible: true
  };

  previewConfigCustomSize: PreviewConfig = {
    visible: true,
    size: { width: '30px', height: '30px' }
  };

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews'
  };

  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalColumn(image: Image) {
    console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalRowDescription(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  onButtonBeforeHook(event: ButtonEvent) {
    console.log('onButtonBeforeHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after a click on a button, but before that the related
    // action is applied.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.

    if (event.button.type === ButtonType.DELETE) {
      // remove the current image and reassign all other to the array of images

      console.log('delete in app with images count ' + this.images.length);

      this.images = this.images.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    console.log('onButtonAfterHook ', event);

    if (!event || !event.button) {
      return;
    }

    // Invoked after both a click on a button and its related action.
    // For instance: this method will be invoked after a click
    // of 'close' button, but before that the modal gallery
    // will be really closed.
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    console.log('onCustomButtonBeforeHook with galleryId=' + galleryId + ' and event: ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after a click on a button, but before that the related
    // action is applied.

    if (event.button.type === ButtonType.CUSTOM) {
      console.log('adding a new random image at the end');
      this.addRandomImage();

      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.images.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    console.log('onCustomButtonAfterHook with galleryId=' + galleryId + ' and event: ', event);
    if (!event || !event.button) {
      return;
    }
    // Invoked after both a click on a button and its related action.
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onIsFirstImage onfirst action: ' + Action[event.action]);
    console.log('onIsFirstImage onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onIsLastImage onlast action: ' + Action[event.action]);
    console.log('onIsLastImage onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    // reset custom plain gallery config
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(-1, true) });
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(-1, true) });
  }

  addRandomImage() {
    const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
    const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.images = [...this.images, newImage];
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }

  trackById(index: number, item: Image) {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

}
