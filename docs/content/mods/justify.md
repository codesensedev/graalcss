## Justify `(rl-justify-*)`

The justify modifier controls how elements are positioned along the main axis of a layout. The main axis is the primary direction in which elements flow - vertical for stacks, horizontal for clusters, flanks, and splits.

Apply class `rl-justify-*` to a layout container, where `*` can be `start`, `center`, or `end`.

### Justify values

- **`rl-justify-start`** - Positions elements at the start of the main axis
- **`rl-justify-center`** - Positions elements at the center of the main axis  
- **`rl-justify-end`** - Positions elements at the end of the main axis

### Justify with stack

In stack layouts, the main axis is vertical, so justify controls vertical positioning. This only has visible effect when the stack container has more height than its content needs.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-stack rl-justify-start rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-stack rl-justify-center rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-stack rl-justify-end rl-gap-m" style="height: 12em; border: 1px solid #ccc;">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Justify with cluster

In cluster layouts, the main axis is horizontal, so justify controls horizontal positioning of the entire cluster of items.

#### `rl-justify-start` (default)

```preview|debug
<div class="rl-cluster rl-justify-start rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-cluster rl-justify-center rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-cluster rl-justify-end rl-gap-m">
    <div>Tag 1</div>
    <div>Tag 2</div>
    <div>Tag 3</div>
    <div>Tag 4</div>
</div>
```

### Justify with flank

In flank layouts, justify has no practical effect because flanks are designed to fill horizontal space by having one element grow to fill available space. The growing element prevents justify-content from having any visible impact.

```preview|debug
<div class="rl-flank rl-justify-center rl-gap-m">
    <div>Logo</div>
    <div>Navigation fills space (justify has no effect)</div>
</div>
```

### Justify with split

In split layouts, applying justify classes overrides the default `space-between` behavior and makes the split behave more like a cluster. This changes the fundamental character of the split layout.

#### Default split (space-between)

```preview|debug
<div class="rl-split rl-gap-m">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
</div>
```

#### `rl-justify-start`

```preview|debug
<div class="rl-split rl-justify-start rl-gap-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-split rl-justify-center rl-gap-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-split rl-justify-end rl-gap-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Justify with grid

In grid layouts, justify controls how items are positioned horizontally within their individual grid cells. This is most visible when grid items are narrower than their cells.

#### `rl-justify-start`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-justify-start rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-justify-center rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-grid rl-grid-fit-l rl-justify-end rl-gap-m">
    <div>A</div>
    <div>Item B</div>
    <div>C</div>
    <div>Item D</div>
</div>
```

### Justify with frame

In frame layouts, justify controls horizontal positioning of the centered content.

#### `rl-justify-start`

```preview|debug
<div class="rl-frame rl-justify-start" style="height: 10em; border: 1px solid #ccc;">
    <div>Content on left</div>
</div>
```

#### `rl-justify-center`

```preview|debug
<div class="rl-frame rl-justify-center" style="height: 10em; border: 1px solid #ccc;">
    <div>Content centered</div>
</div>
```

#### `rl-justify-end`

```preview|debug
<div class="rl-frame rl-justify-end" style="height: 10em; border: 1px solid #ccc;">
    <div>Content on right</div>
</div>
```

### Justify behavior comparison

| Layout | Main Axis | What Justify Controls | Default | Notes |
|--------|-----------|----------------------|---------|-------|
| **Stack** | Vertical | Vertical positioning of all items | `start` | Only visible when container height > content height |
| **Cluster** | Horizontal | Horizontal positioning of wrapped rows | `start` | Affects alignment of entire cluster |
| **Flank** | Horizontal | N/A | N/A | No effect - one element grows to fill space |
| **Split** | Horizontal | Overrides space-between behavior | `space-between` | Changes split to cluster-like behavior |
| **Grid** | N/A | Horizontal positioning within cells | `stretch` | Uses `justify-items` property |
| **Frame** | Horizontal | Horizontal positioning of content | `space-around` | Centers content by default |

### Usage notes

The justify modifier controls main-axis positioning, but its behavior varies significantly across layouts:

**Stack layouts** (vertical main axis):
- Justify controls vertical positioning
- Only visible when the stack has explicit height greater than content
- Values: `start` (top), `center` (middle), `end` (bottom)

**Cluster layouts** (horizontal main axis):
- Justify controls horizontal positioning of the entire cluster
- Affects all rows when content wraps
- Values: `start` (left), `center`, `end` (right)

**Flank layouts**:
- Justify has no effect because one element grows to fill space
- The fundamental flank behavior overrides justify-content

**Split layouts**:
- Applying justify overrides the default `space-between` behavior
- This fundamentally changes the split into a cluster-like layout
- Generally not recommended unless you specifically want this behavior

**Grid layouts**:
- Justify controls horizontal positioning within individual cells
- Uses `justify-items` property (not `justify-content`)
- Most visible when items are narrower than their cells

**Frame layouts**:
- Justify controls horizontal positioning of centered content
- Default `space-around` centers content horizontally
- Values: `start` (left), `center`, `end` (right)

**Understanding main axis vs cross axis:**
- Main axis: The primary direction elements flow (vertical for stack, horizontal for others)
- Cross axis: Perpendicular to main axis (controlled by `align`)
- Justify always controls the main axis
- In flexbox: `justify-content` controls main axis distribution
- In grid: `justify-items` controls horizontal positioning within cells

The justify modifier is most useful for stacks (vertical centering) and clusters (horizontal positioning). For flanks and splits, it either has no effect or changes fundamental behavior, so use with caution.
