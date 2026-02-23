## Cluster `(rl-cluster)`

The cluster arranges elements horizontally in a row, wrapping to the next line when needed. This creates a natural flowing layout where items stay close together and wrap gracefully when they run out of space.

Clusters are well suited for tags, badges, button groups, navigation items, chip lists, and any collection of items that should flow naturally across multiple lines.

#### `rl-cluster`

By default, items flow from left to right and wrap to the next line when needed.

```preview|debug
<div class="rl-cluster">
    <div>Tag one</div>
    <div>Tag two</div>
    <div>Tag three</div>
    <div>Tag four</div>
    <div>Tag five</div>
    <div>Tag six</div>
</div>
```

```preview|debug
<div class="rl-cluster" style="width: 15em;">
    <div>Action</div>
    <div>Edit</div>
    <div>Delete</div>
    <div>Share</div>
    <div>Export</div>
</div>
```

### Gap between elements

By default, there is no gap between the cluster elements. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the cluster container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-s`

```preview|debug
<div class="rl-cluster rl-gap-s" style="width: 20em;">
    <div>React</div>
    <div>Vue</div>
    <div>Angular</div>
    <div>Svelte</div>
    <div>Solid</div>
    <div>Lit</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis.

In the cluster layout, the cross axis is the vertical axis, so when aligning elements in a cluster, they are positioned vertically relative to it.

Apply class `rl-align-*` to the cluster container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-cluster rl-gap-m rl-align-start" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-cluster rl-gap-m rl-align-center" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-cluster rl-gap-m rl-align-end" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-cluster rl-gap-m rl-align-stretch" style="height: 8em;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis.

In the cluster layout, the main axis is the horizontal axis, so when justifying elements in a cluster, they are positioned horizontally relative to it.

Apply class `rl-justify-*` to the cluster container, where `*` can be `start`, `center`, or `end`.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-cluster rl-justify-start rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-cluster rl-justify-center rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-cluster rl-justify-end rl-gap-m">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
</div>
```

### Wrapping

By default, cluster elements wrap to the next line when they don't fit in the available width. This is the core behavior of clusters.

#### `rl-nowrap`

Apply class `rl-nowrap` to prevent wrapping (elements will overflow).

```preview|debug
<div class="rl-cluster rl-gap-m rl-nowrap" style="width: 15em;">
    <div>Long item one</div>
    <div>Long item two</div>
    <div>Long item three</div>
</div>
```

### Padding around container

By default, there is no padding around the cluster container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the cluster container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-cluster rl-gap-m rl-padding-l">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
</div>
```

### Border around container

By default, there is no border around the cluster container.

Apply class `rl-border` to the cluster container.

#### `rl-border`

```preview
<div class="rl-cluster rl-gap-m rl-padding-l rl-border">
    <div>Option A</div>
    <div>Option B</div>
    <div>Option C</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the cluster container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-cluster rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Button 1</div>
    <div>Button 2</div>
    <div>Button 3</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-cluster rl-gap-s rl-radius-m rl-padding-m rl-border rl-width-s">
        <div>Small</div>
        <div>Width</div>
        <div>Container</div>
    </div>
    <br />
    <div class="rl-cluster rl-gap-s rl-radius-l rl-padding-m rl-border rl-width-l">
        <div>Large</div>
        <div>Width</div>
        <div>Container</div>
    </div>
</div>
```

### Height

By default, containers take up only the height needed for their content. Height classes control how containers fill vertical space.

Apply class `rl-height-full` to make the container fill 100% of its parent's height with vertical scrolling if needed.

Apply class `rl-height-fill` to make the container grow to fill available space in a flex layout.

#### `rl-height-full`

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-cluster rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Badge 1</div>
        <div>Badge 2</div>
        <div>Badge 3</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-cluster rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Tag A</div>
        <div>Tag B</div>
        <div>Tag C</div>
    </div>
</div>
```

### Usage notes

The cluster layout creates a natural flowing horizontal arrangement:

- **Flow direction**: Horizontal (left to right by default)
- **Wrapping behavior**: Elements wrap to the next line automatically when space runs out
- **Main axis**: Horizontal (controlled by `justify-content`)
- **Cross axis**: Vertical (controlled by `align-items`)
- **Default alignment**: `center` aligns items vertically in the middle
- **Default justify**: `start` positions items from the left
- **Intrinsic sizing**: Elements take only the space they need
- **Prevent wrapping**: Apply `rl-nowrap` to keep all items on one line

The cluster is perfect for collections of small items that should flow naturally: tags, badges, chips, button groups, or navigation items. Unlike grid layouts with rigid columns, clusters adapt fluidly to content size and available space, creating a more organic layout.
