## Flank `(rl-flank)`

The flank arranges elements horizontally in a row, with the last element automatically expanding to fill the remaining space. This creates a common layout pattern where one or more items are positioned on the left, while the final item takes up all available space on the right.

Flanks are well suited for navigation bars, toolbars, header layouts, and any situation where you need a leading element and a trailing element that fills the remaining space.

#### `rl-flank`

By default, the last child in the flank grows to fill available space, while other elements take only the space they need.

```preview|debug
<div class="rl-flank">
    <div>Label</div>
    <div>This content fills the remaining space</div>
</div>
```

Apply class `rl-flank-end` to reverse the pattern - the first child grows to fill space while the last child takes only what it needs.

#### `rl-flank-end`

```preview|debug
<div class="rl-flank rl-flank-end">
    <div>This content fills the remaining space</div>
    <div>Actions</div>
</div>
```

### Gap between elements

By default, there is no gap between the flank elements. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the flank container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-flank rl-gap-l">
    <div>Logo</div>
    <div>Navigation Menu</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis.

In the flank layout, the cross axis is the vertical axis, so when aligning elements in a flank, they are positioned vertically relative to it.

Apply class `rl-align-*` to the flank container, where `*` can be `start`, `center`, `end`, or `stretch`.

#### `rl-align-start`

```preview|debug
<div class="rl-flank rl-align-start" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-center` (default)

```preview|debug
<div class="rl-flank rl-align-center" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-flank rl-align-end" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

#### `rl-align-stretch`

```preview|debug
<div class="rl-flank rl-align-stretch" style="height: 5em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis. 

In the flank layout, the main axis is the vertical axis.

Because the flank layout is supposed to fill the horizontal space, justifying elements does not have any effect for flank layout.

### Wrapping

By default, flank elements wrap to the next line when they don't fit in the available width. This can be controlled with wrap classes.

#### `rl-nowrap`

```preview|debug
<div class="rl-flank rl-gap-m rl-nowrap" style="width: 15em;">
    <div>Long content item one</div>
    <div>Long content item two</div>
    <div>Long content item three</div>
</div>
```

### Padding around container

By default, there is no padding around the flank container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the flank container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-flank rl-gap-m rl-padding-l">
    <div>Logo</div>
    <div>Navigation Menu</div>
</div>
```

### Border around container

By default, there is no border around the flank container.

Apply class `rl-border` to the flank container.

#### `rl-border`

```preview
<div class="rl-flank rl-gap-m rl-padding-l rl-border">
    <div>Logo</div>
    <div>Navigation Menu</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the flank container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-m`

```preview
<div class="rl-flank rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Logo</div>
    <div>Navigation Menu</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-flank rl-gap-m rl-radius-m rl-padding-m rl-border rl-width-xs">
        <div>Logo</div>
        <div>Small width</div>
    </div>
    <br />
    <div class="rl-flank rl-gap-m rl-radius-l rl-padding-m rl-border rl-width-s">
        <div>Logo</div>
        <div>Large width</div>
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
    <div class="rl-flank rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Logo</div>
        <div>Fills parent height</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-flank rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Sidebar</div>
        <div>Main content grows vertically</div>
    </div>
</div>
```

### Usage notes

The flank layout creates a flexible horizontal arrangement with one dominant element:

- **Growing behavior**: The last child gets `flex-grow: 999` to fill remaining space
- **Reverse pattern**: Apply `rl-flank-end` to make the first child grow instead
- **Main axis**: Horizontal (elements flow left to right)
- **Cross axis**: Vertical (controlled by `align-items`)
- **Default alignment**: `center` aligns items vertically in the middle
- **Wrapping**: Elements wrap by default when they don't fit
- **Justify limitation**: Because flanks fill horizontal space, `justify-content` has no effect

The flank is perfect for navigation bars, toolbars, and headers where you need one element (like a navigation menu or content area) to take up all remaining space while other elements (like logos or buttons) stay compact.