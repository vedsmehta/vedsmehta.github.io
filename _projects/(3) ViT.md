---
name: Vision Transformer Implementation
tools: [Python, TensorFlow
]
image:  https://i.imgur.com/gJ2wiDc.png
description: My TensorFlow recreation of groundbreaking research that has revolutionized the computer vision landscape
---

# ViT (Vision Transformer)

The vision transformer is one of the latest computer vision models produced by the Google Brain Research team. On almost all benchmarks, the ViT outperformed its predecessors in accuracy, and showed massive promise to researchers around the world. However, the code was written using PyTorch as the backing machine learning library and TensorFlow did not have an official implementation. Although I cannot create an official implementation, I decided to replicate ideas from the research paper into TensorFlow code.

I worked to translate this paper:
<object data="https://arxiv.org/pdf/2010.11929.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://arxiv.org/pdf/2010.11929.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://arxiv.org/pdf/2010.11929.pdf">Download PDF</a>.</p>
    </embed>
</object>

---
Into this:
```python
class ViT(tf.keras.Model):
    def __init__(self,
                 image_size,
                 patch_size,
                 num_classes,
                 dim,
                 depth,
                 attention_heads,
                 transformer_units,
                 mlp_head_units,
                 augment=False
                 ):
        super(ViT, self).__init__()
        # Initialize needed variables and calculate num_patches
        self.image_size = image_size
        self.patch_size = patch_size
        self.num_classes = num_classes
        self.projection_dim = dim
        self.transformer_layers = depth
        self.attention_heads = attention_heads
        self.mlp_units = transformer_units
        self.augment = augment
        self.num_patches = (self.image_size // self.patch_size) ** 2
        # Initialize layers
        # self.aug = DataAugmentation(self.image_size)
        self.patches = Patches(self.patch_size)
        self.patchreprs = PatchEmbeddings(
            self.num_patches, self.projection_dim)
        # Build a transformer
        self.transformer = Transformer(
            self.projection_dim, self.mlp_units, self.attention_heads, self.transformer_layers)
        # Create Linear Representation
        self.linear_repr = tf.keras.Sequential([
            tf.keras.layers.LayerNormalization(epsilon=1e-5),
            tf.keras.layers.Flatten(),
            tf.keras.layers.Dropout(0.3)
        ])
        self.mlp = MLP(mlp_head_units)
        # Initialize a classification head
        self.classifier = ClassificationHead(0.3)

    def call(self, input):
        if augment:
            x = self.aug(input)
            patches = self.patches(x)
        else:
            patches = self.patches(input)
        x = self.patchreprs(patches)
        x = self.transformer(x)
        x = self.linear_repr(x)
        x = self.mlp(x)
        x = self.classifier(x)
        return x
```

Although many of the layers and ideas from the research paper are abstracted in this code snippet, the rest of my work can be viewed on github.

<p class="text-center">
{% include elements/button.html link="https://github.com/vedsmehta/ViT-TensorFlow" text="See the code!" %}
</p>