---
name: Assisting Emotional Regulation of Patients with Neurological Disorders
tools: [Python, TensorFlow, NumPy, Matplotlib, MNE]
image: https://i.imgur.com/Q6bznjN.png
description: This project was my second scientific research project, in which I used various data processing techniques and artificial intelligence methods to help people impacted by neurological disorders manage their emotions; a major symptom associated with any disorder.
---
# Brain-Computer Interfaces for Emotional Regulation of People with Neurological Disorders

In this project, I pushed my limits and explored my ability to use AI for social good. Having become a theme in my previous projects, I decided to carry forward the use of medical imaging in my work. This project has a personal value for me, as my cousin is diagnosed with autism. Every time I see her I try to think of ways I can help her with my skills, which is how I arrived upon the development of this system. Using machine learning and data processing, I developed an algorithm which not only predicts the emotion of a patient, but also simulates the neural conditions of patients with neurological disorders: a key component of training my machine learning model and rendering this project successful.

![BCI](https://i.imgur.com/Q6bznjN.png)
<!-- TODO -->

I used open data from a website called OpenNeuro, which provides neurological datasets for free. The dataset had 40 recordings from the scalps of regular people during an exposure to various emotional stimuli. The devices used to create the recordings are called Electroencephalograms, or EEGs: a noninvasive method to capturing neural time series.

## Neurological Disorder Simulation Algorithm

This algorithm was developed after I conducted heavy research into what differentiates the neural signals of patients with and without neurological disorders. The main differentiator is derived from the complexity, and is a metric known as multiscale entropy. This metric allows one to measure the complexity of a neural time series over various different timescales. Multiscale Entropy is significantly higher in patients with neurological disorders than those without. I figured out that adding random noise which models a gaussian distribution to every single timestep in a neural timeseries increases the multiscale entropy by a significant amount.

I used `NumPy` arrays and `TensorFlow` mathematical functions to develop this algorithm

The python code for the algorithm is as follows:
```python
class SimulateNeurologicalComplexity(tf.keras.layers.Layer):
    def __init__(self, complexity_factor=0.2, **kwargs):
        super(SimulateNeurologicalComplexity, self).__init__(**kwargs)
        self.complexity_factor = complexity_factor

    def build(self, input_shape):
        super(SimulateEEGComplexity, self).build(input_shape)

    def call(self, inputs):
        original_eeg_data = inputs
        
        # Simulate complexity across all channels
        simulated_neural_data = tf.identity(original_eeg_data)
        
        # Apply complexity to the EEG data
        complexity = tf.math.reduce_std(simulated_neural_data) * self.complexity_factor
        noise = tf.random.normal(tf.shape(simulated_neural_data), mean=0, stddev=1)
        simulated_neural_data *= (noise)
        
        return simulated_neural_data

    def get_config(self):
        config = super(SimulateEEGComplexity, self).get_config()
        config.update({"complexity_factor": self.complexity_factor})
        return config    
```

## Deep Convolutional Neural Network

For the machine learning algorithm, I turned to deep learning, specifically Deep Convolutional Neural Networks to analyze energy diagrams of patient recordings. I transformed the data into a power spectral density chart for each recording, which is a representation of each wavelength and the extent to which it occurs. Doing this for all recording channels on the EEG led to a 128 by 128 image representation of a person going through an emotion. The data had 18 different emotion groups associated with it which I first split into two groups: `["Positive", "Negative"]`. A deep convolutional neural network would classify images into these two groups and then further classify them into one of the 18 emotion categories. To build this Deep Convolutional Neural Network, I relied on `keras`, the high-level API within the TensorFlow library which allows one to build powerful and customizable neural networks.

```python
class EEGModel(tf.keras.Model):
    def residual_block(self, x, filters, downsample=False):
        """A residual block.

        Args:
            x: The input tensor.
            filters: The number of filters in the convolutional layers.
            downsample: Whether to downsample the input.

        Returns:
            The output tensor.
        """

        y = tf.keras.layers.Conv2D(filters, (3, 3), strides=(1 if not downsample else 2), padding='same')(x)
        y = tf.keras.layers.BatchNormalization()(y)
        y = tf.keras.layers.Activation('relu')(y)

        y = tf.keras.layers.Conv2D(filters, (3, 3), strides=(1, 1), padding='same')(y)
        y = tf.keras.layers.BatchNormalization()(y)

        if downsample:
            shortcut = tf.keras.layers.Conv2D(filters, (1, 1), strides=(2, 2), padding='same')(x)
            shortcut = tf.keras.layers.BatchNormalization()(shortcut)
        else:
            shortcut = x

        output = tf.keras.layers.add([y, shortcut])
        output = tf.keras.layers.Activation('relu')(output)

        return output
    def base_model(self, inputs):
        x = tf.keras.layers.Conv2D(64, (7, 7), strides=(2, 2), padding='same')(inputs)
        x = tf.keras.layers.BatchNormalization()(x)
        x = tf.keras.layers.Activation('relu')(x)
        x = tf.keras.layers.MaxPooling2D((3, 3), strides=(2, 2))(x)

        # Residual blocks
        for i in range(3):
            x = residual_block(x, 64)

        for i in range(4):
            x = residual_block(x, 128, downsample=True if i == 0 else False)

        for i in range(6):
            x = residual_block(x, 256, downsample=True if i == 0 else False)

        for i in range(3):
            x = residual_block(x, 512, downsample=True if i == 0 else False)
        return x
    def __init__(self, binary_model=None):
        super(EEGModel, self).__init__()
        self.eeg_comp = SimulateEEGComplexity()
        self.pooling = layers.Flatten()
        self.bin_output = layers.Dense(1, activation='sigmoid')

        self.catatt = layers.Dense(256, activation="relu")
        self.flat = layers.Flatten()
        self.add_2 = layers.Dense(256, activation="relu")
        self.add = layers.Add()
        self.cat_output = layers.Dense(1, activation="sigmoid")
    def call(self, inputs, training=None, mask=None):
        # Binary Classification
        x = self.eeg_comp(inputs)
        x = base_model(x)
        pool = self.pooling(x)
        binary_predictions  = self.bin_output(pool)
        # not so binary classification
        # x = self.gru_1(inputs)
        # x = self.gru_2(x)
        # x = layers.BatchNormalization()(x)
        x_1 = self.catatt(pool)
        x_2 = self.add_2(binary_predictions)
        x = self.add([x_1, x_2])
        subclass_predictions = self.cat_output(x)

        return binary_predictions, subclass_predictions
```
