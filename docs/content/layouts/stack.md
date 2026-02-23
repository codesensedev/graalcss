## Stack `(rl-stack)`

The stack arranges the elements vertically, with consistent spacing between them. The elements in a stack can be aligned horiontally to the start, center, or end, or they can stretch and fill the horizontal space.

Stacks are well suited for forms, text, and ensuring consistent spacing between elements in the document flow.

#### `rl-stack`

By default, items in the stack are stretched, filling the available width.

```preview|debug
<div class="rl-stack">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Gap between elements

By default, there is no gap between the stack elements. The default gap is configurable by overriding variable `--rl-gap-default`.

Apply class `rl-gap-*` to the stack container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-gap-l`

```preview|debug
<div class="rl-stack rl-gap-l">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Aligning elements

Aligning elements refers to positioning elements along the cross axis. 

In the stack layout, the cross axis is the vertical axis, so when aligning elements in a stack, they are positioned horizontally relative to it.

Apply class `rl-align-*` to the stack container, where `*` can be `start`, `center`, `end`, or `stretch`.

Except for `stretch`, all other align classes make the elements take only as much space as they need.

#### `rl-align-start`

```preview|debug
<div class="rl-stack rl-align-start">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-center`

```preview|debug
<div class="rl-stack rl-align-center">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-end`

```preview|debug
<div class="rl-stack rl-align-end">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-align-stretch` (default)

```preview|debug
<div class="rl-stack rl-align-stretch">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Justifying elements

Justifying elements refers to positioning elements along the main axis. 

In the stack layout, the main axis is the horizontal axis, so when justifying elements in a stack, they are positioned vertically relative to it.

Apply class `rl-justify-*` to the stack container, where `*` can be `start`, `center`, or `end`.

Because the stack and it's elements only occupy as much space as needed vertically, justifying elements has effect only when the stack container height is greater than the elements inside it.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-stack rl-justify-start" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-stack rl-justify-center" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-stack rl-justify-end" style="height: 10em;">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Dividers between elements

Stack elements can be visually separated by adding divider lines between them.

Apply class `rl-divider` to an empty element placed at the same level as the other stack elements. 

#### `rl-divider`

```preview
<div class="rl-stack rl-gap-m">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Padding around container

By default, there is no padding around the stack container. The default padding is configurable by overriding variable `--rl-padding-default`.

Apply class `rl-padding-*` to the stack container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-padding-l`

```preview|debug
<div class="rl-stack rl-padding-l">
    <div>Acta non verba</div>
    <div>Tempus fugit</div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

### Border around container

By default, there is no border around the stack container. 

Apply class `rl-border` to the stack container.

#### `rl-border`

```preview
<div class="rl-stack rl-gap-m rl-padding-l rl-border">
    <div>Acta non verba</div>
    <div class="rl-divider"></div>
    <div>Tempus fugit</div>
    <div class="rl-divider"></div>
    <div>Faber est suae quisque fortunae</div>
</div>
```

```preview
<div class="rl-stack rl-border">
    <div class="rl-padding-m">Acta non verba</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Tempus fugit</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

### Border radius

By default, the border does not have rounded corners. The default radius is configurable by overriding variable `--rl-radius-default`, which will apply only if a border is applied to the container.

Apply class `rl-radius-*` to the stack container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

#### `rl-radius-l`

```preview
<div class="rl-stack rl-border rl-radius-m">
    <div class="rl-padding-m">Acta non verba</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Tempus fugit</div>
    <div class="rl-divider"></div>
    <div class="rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

```preview
<div class="rl-stack rl-gap-m">
    <div class="rl-border rl-radius-m rl-padding-m">Acta non verba</div>
    <div class="rl-border rl-radius-l rl-padding-m">Tempus fugit</div>
    <div class="rl-border rl-radius-xl rl-padding-m">Faber est suae quisque fortunae</div>
</div>
```

### Width

By default, containers take up the full width available to them. Width classes constrain the maximum width and center the container horizontally.

Apply class `rl-width-*` to the container, where `*` can be `xs`, `s`, `m`, `l`, `xl`, or `2xl`.

```preview
<div>
    <div class="rl-radius-m rl-padding-m rl-border rl-width-xs">Acta non verba</div>
    <br />
    <div class="rl-radius-l rl-padding-m rl-border  rl-width-s">Tempus fugit</div>
</div>
```

### Height

By default, containers take up only the height needed for their content. Height classes control how containers fill vertical space.

Apply class `rl-height-full` to make the container fill 100% of its parent's height with vertical scrolling if needed.

Apply class `rl-height-fill` to make the container grow to fill available space in a flex layout.

#### `rl-height-full`

```preview|debug
<div style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-stack rl-height-full rl-border rl-padding-m">
        <div>Fills parent height</div>
        <div>Content with scroll if needed</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed height item</div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-m">
        <div>Grows to fill remaining space</div>
    </div>
</div>
```

### Usage notes

The stack layout is a fundamental vertical layout pattern with specific characteristics:

- **Main axis**: Vertical (controlled by `justify-content`)
- **Cross axis**: Horizontal (controlled by `align-items`)
- **Default alignment**: `stretch` makes children fill the horizontal space
- **Text alignment**: The `rl-align-*` classes also set `text-align` for proper text positioning
- **Gap behavior**: Uses CSS flexbox `gap` property for consistent spacing
- **Vertical space**: By default, stacks only take as much vertical space as their content needs
- **Justify effect**: `rl-justify-*` classes only have visible effect when the container height exceeds content height

The stack is ideal when you need consistent vertical spacing and want elements to automatically stack on top of each other without manual margin management.