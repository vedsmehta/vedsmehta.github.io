---
name: Colonoscopy Research
tools: [TensorFlow, Python, OpenCV, PIL]
image: https://i.imgur.com/91WKbGY.png
description: An 8 month academic research project that efficiently aids the diagnosis of colorectal cancer.
---

# Colonoscopy Research

At the pinnacle of my computer science journey so far, an academic research project I did in my 9th grade year stands strong. Titled "Towards Real-time Polyp Segmentation during Colonoscopy using an EfficientNet-based UNet Architecture", this project aims to aid doctors around the world in diagnosing colorectal cancer, and other Gastrointestinal diseases.

Here is the abstract:

> In this paper, I present a method for improving polyp diagnosis during endoscopy using image segmentation techniques. The method involves a technique for precisely segmenting polyps from endoscopic images using cutting-edge deep learning algorithms. The deep convolutional neural network (DCNN) is trained using a hand-segmented dataset that includes a range of polyp sizes, shapes, and appearances. Using a different validation dataset, the performance of the suggested technique is assessed by contrasting the outcomes of the automated segmentation with those of the manual annotations. When compared to manual examination, the results show a considerable increase in the rate of polyp discovery while still not sacrificing real-time efficiency as seen in current State-of-the-Art implementations. The automated segmentation technique can reduce the likelihood of missing or incorrectly diagnosed polyps by providing reliable and consistent polyp detection. By integrating this approach into the endoscopy workflow, we can potentially enhance patient outcomes, alleviate the burden on endoscopists, and improve the efficiency and accuracy of colorectal cancer screening.


![EffnetUnet](https://i.imgur.com/91WKbGY.png)
> A 3D view of the neural network I developed.

![preds](https://i.imgur.com/cHfHrfv.png)
> sample predictions from the network


Here is a code snippet from one of my successful model architectures, a UNet with an EfficientNetB4 encoder:
```python
from efficientnet import EfficientNetB4

def UEfficientNet(input_shape=(None, None, 3),dropout_rate=0.1):

    backbone = EfficientNetB4(weights='imagenet',
                            include_top=False,
                            input_shape=input_shape)
    input = backbone.input
    start_neurons = 16

    conv4 = backbone.layers[342].output # Top
    conv4 = LeakyReLU(alpha=0.1)(conv4)
    pool4 = MaxPooling2D((2, 2))(conv4)
    pool4 = Dropout(dropout_rate)(pool4)
    
     # Middle
    convm = Conv2D(start_neurons * 32, (3, 3), activation=None, padding="same")(pool4)
    convm = residual_block(convm,start_neurons * 32) # this is an abstraction for a skip connection layer
    convm = residual_block(convm,start_neurons * 32)
    convm = LeakyReLU(alpha=0.1)(convm)
    
    deconv4 = Conv2DTranspose(start_neurons * 16, (3, 3), strides=(2, 2), padding="same")(convm)
    uconv4 = concatenate([deconv4, conv4])
    uconv4 = Dropout(dropout_rate)(uconv4)
    
    uconv4 = Conv2D(start_neurons * 16, (3, 3), activation=None, padding="same")(uconv4)
    uconv4 = residual_block(uconv4,start_neurons * 16)
    uconv4 = residual_block(uconv4,start_neurons * 16)
    uconv4 = LeakyReLU(alpha=0.1)(uconv4)
    
    deconv3 = Conv2DTranspose(start_neurons * 8, (3, 3), strides=(2, 2), padding="same")(uconv4)
    conv3 = backbone.layers[154].output
    uconv3 = concatenate([deconv3, conv3])    
    uconv3 = Dropout(dropout_rate)(uconv3)
    
    uconv3 = Conv2D(start_neurons * 8, (3, 3), activation=None, padding="same")(uconv3)
    uconv3 = residual_block(uconv3,start_neurons * 8)
    uconv3 = residual_block(uconv3,start_neurons * 8)
    uconv3 = LeakyReLU(alpha=0.1)(uconv3)

    deconv2 = Conv2DTranspose(start_neurons * 4, (3, 3), strides=(2, 2), padding="same")(uconv3)
    conv2 = backbone.layers[92].output
    uconv2 = concatenate([deconv2, conv2])
        
    uconv2 = Dropout(0.1)(uconv2)
    uconv2 = Conv2D(start_neurons * 4, (3, 3), activation=None, padding="same")(uconv2)
    uconv2 = residual_block(uconv2,start_neurons * 4)
    uconv2 = residual_block(uconv2,start_neurons * 4)
    uconv2 = LeakyReLU(alpha=0.1)(uconv2)
    
    deconv1 = Conv2DTranspose(start_neurons * 2, (3, 3), strides=(2, 2), padding="same")(uconv2)
    conv1 = backbone.layers[30].output
    uconv1 = concatenate([deconv1, conv1])
    
    uconv1 = Dropout(0.1)(uconv1)
    uconv1 = Conv2D(start_neurons * 2, (3, 3), activation=None, padding="same")(uconv1)
    uconv1 = residual_block(uconv1,start_neurons * 2)
    uconv1 = residual_block(uconv1,start_neurons * 2)
    uconv1 = LeakyReLU(alpha=0.1)(uconv1)
    
    uconv0 = Conv2DTranspose(start_neurons * 1, (3, 3), strides=(2, 2), padding="same")(uconv1)   
    uconv0 = Dropout(0.1)(uconv0)
    uconv0 = Conv2D(start_neurons * 1, (3, 3), activation=None, padding="same")(uconv0)
    uconv0 = residual_block(uconv0,start_neurons * 1)
    uconv0 = residual_block(uconv0,start_neurons * 1)
    uconv0 = LeakyReLU(alpha=0.1)(uconv0)
    
    uconv0 = Dropout(dropout_rate/2)(uconv0)
    output_layer = Conv2D(1, (1,1), padding="same", activation="sigmoid")(uconv0)    
    
    model = Model(input, output_layer)
    model.name = 'u-xception'

    return model
  ```

This project has allowed me to showcase my skills at a conference in MIT, and an IEEE conference in December.
