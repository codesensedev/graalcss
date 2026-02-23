## Split `(rl-split)`

The split arranges elements horizontally in a row with maximum space distributed between them. This creates a layout where elements are pushed to opposite ends or evenly distributed across the available space.

Splits are well suited for layouts where you want elements spaced apart, such as navigation items, card layouts, or any design requiring even distribution of space.

#### `rl-split`

By default, elements are distributed with maximum space between them using `justify-content: space-between`.

```preview|debug
<div class="rl-split">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

```preview|debug
<div class="rl-split">
    <div>Start</div>
    <div>End</div>
</div>
```

Apply class `rl-split-equal` to make all children equal width and grow to fill available space.

#### `rl-split-equal`

```preview|debug
<div class="rl-split rl-split-equal">
    <div>Equal width</div>
    <div>Equal width</div>
    <div>Equal width</div>
</div>
```

### Gap between elements

By default, there is no gap between the split elements (space is controlled by `space-between`). Adding gap provides minimum spacing between elements.

Apply class `rl-gap-*` to the split container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-split rl-gap-l">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis.

In the split layout, the cross axis is the vertical axis, so when aligning elements in a split, they are positioned vertically relative to it.

Apply class `rl-align-*` to the split container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-split rl-align-start" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-split rl-align-center" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-split rl-align-end" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-split rl-align-stretch" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis. 

In the split layout, the main axis is the vertical axis.

Because the split layout is supposed to fill the horizontal space, justifying elements does not really apply to split layout. Applying justify mods to split layout will display is as a cluster justified to start, center, or end.

### Wrapping

By default, split elements wrap to the next line when they don't fit in the available width. This can be controlled with wrap classes.

#### `rl-nowrap`

```preview|debug
<div class="rl-split rl-gap-m rl-nowrap" style="width: 15em;">
    <div>Long content item one</div>
    <div>Long content item two</div>
    <div>Long content item three</div>
</div>
```

### Padding around container

By default, there is no padding around the split container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the split container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-split rl-gap-m rl-padding-l">
    <div>Left</div>
    <div>Right</div>
</div>
```

### Border around container

By default, there is no border around the split container.

Apply class `rl-border` to the split container.

#### `rl-border`

```preview
<div class="rl-split rl-gap-m rl-padding-l rl-border">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the split container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-split rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-split rl-gap-m rl-radius-m rl-padding-m rl-border rl-width-s">
        <div>Left</div>
        <div>Right</div>
    </div>
    <br />
    <div class="rl-split rl-gap-m rl-radius-l rl-padding-m rl-border rl-width-l">
        <div>Left</div>
        <div>Right</div>
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
    <div class="rl-split rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-split rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Left sidebar</div>
        <div>Right content</div>
    </div>
</div>
```

### Usage notes

The split layout maximizes space distribution between elements:

- **Space distribution**: Uses `justify-content: space-between` to push elements apart
- **Equal width variant**: Apply `rl-split-equal` to make all children equal width with `flex: 1 1 0`
- **Main axis**: Horizontal (elements flow left to right)
- **Cross axis**: Vertical (controlled by `align-items`)
- **Default alignment**: `center` aligns items vertically in the middle
- **Gap behavior**: Provides minimum spacing; `space-between` adds additional space
- **Wrapping**: Elements wrap by default when they don't fit
- **Justify limitation**: Applying `rl-justify-*` classes changes behavior to cluster-like layout

The split is ideal for layouts where you want maximum separation between elements, such as positioning items at opposite ends (left/right) or evenly distributing space across multiple items. Use `rl-split-equal` for uniform columns or cards.
