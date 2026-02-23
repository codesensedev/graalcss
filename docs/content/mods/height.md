## Height `(rl-height-full, rl-height-fill)`

The height modifier controls how containers fill vertical space. By default, layout containers only take the height needed for their content. Height modifiers allow containers to expand vertically to fill available space, creating full-height layouts and flexible vertical distributions.

Height modifiers are well suited for full-page layouts, vertically scrolling sections, sidebar layouts, and any design requiring containers to fill or adapt to available vertical space.

### Height values

The height modifier comes in two variants, each serving different vertical layout needs:

- **`rl-height-full`**: Sets the container to `height: 100%` with `overflow-y: auto`, filling 100% of the parent's height with scrolling enabled if content exceeds the container
- **`rl-height-fill`**: Uses `flex: 1 1 0` with `min-height: 0`, `height: auto`, and `overflow-y: auto`, making the container grow to fill available space in a flex layout while allowing proper scrolling

The key difference: `rl-height-full` requires a parent with defined height, while `rl-height-fill` works within flex containers to consume remaining vertical space.

### Height with stack

Height modifiers help create vertically scrolling content areas within stacks.

#### `rl-height-full`

```preview|debug
<div style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-stack rl-height-full rl-border rl-padding-m">
        <div>Stack fills parent height</div>
        <div>With automatic scrolling</div>
        <div>If content overflows</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed height header</div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Stack grows to fill remaining space</div>
        <div>Perfect for content areas</div>
        <div>That need to fill available height</div>
    </div>
</div>
```

Multiple fill areas distribute space equally:

```preview|debug
<div class="rl-stack rl-gap-m" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed header</div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-m">
        <div>First fill area</div>
        <div>Takes half the remaining space</div>
    </div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-m">
        <div>Second fill area</div>
        <div>Takes the other half</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed footer</div>
</div>
```

### Height with cluster

Height modifiers control the overall vertical space of cluster containers.

#### `rl-height-full`

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-cluster rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
        <div>Tag 4</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-cluster rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Badge A</div>
        <div>Badge B</div>
        <div>Badge C</div>
        <div>Badge D</div>
    </div>
</div>
```

### Height with flank

Height modifiers expand flanks vertically, useful for sidebar layouts.

#### `rl-height-full`

```preview|debug
<div style="height: 10em; border: 1px solid #ccc;">
    <div class="rl-flank rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Logo</div>
        <div>Navigation fills parent height</div>
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

### Height with split

Height modifiers help create vertically expanded split layouts.

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

### Height with grid

Height modifiers control the overall grid container height.

#### `rl-height-full`

```preview|debug
<div style="height: 15em; border: 1px solid #ccc;">
    <div class="rl-grid rl-height-full rl-border rl-padding-m rl-gap-m">
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
    </div>
</div>
```

#### `rl-height-fill`

```preview|debug
<div class="rl-stack" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Dashboard Header</div>
    <div class="rl-grid rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Widget 1</div>
        <div>Widget 2</div>
        <div>Widget 3</div>
        <div>Widget 4</div>
    </div>
</div>
```

### Height with frame

Frames naturally fill parent height (100%), but height modifiers can be applied to frame children.

#### `rl-height-full` on frame

```preview|debug
<div style="height: 12em; border: 1px solid #ccc;">
    <div class="rl-frame rl-height-full rl-border rl-padding-m">
        <div>Centered content in full-height frame</div>
    </div>
</div>
```

#### `rl-height-fill` on frame

```preview|debug
<div class="rl-stack" style="height: 18em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Header</div>
    <div class="rl-frame rl-height-fill rl-border rl-padding-m">
        <div>Centered content grows with available space</div>
    </div>
</div>
```

### Full-height layouts

Height modifiers enable classic application layouts with headers, content areas, and footers.

#### Classic header/content/footer

```preview|debug
<div class="rl-stack" style="height: 25em; border: 1px solid #ccc;">
    <div class="rl-flank rl-gap-m rl-border rl-padding-m">
        <div>Logo</div>
        <div class="rl-cluster rl-gap-m">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    </div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-l rl-gap-m">
        <div>Main Content Area</div>
        <div>This area fills all available vertical space</div>
        <div>Scrolls automatically if content overflows</div>
    </div>
    <div class="rl-border rl-padding-m">
        <div>Footer content</div>
    </div>
</div>
```

#### Sidebar layout

```preview|debug
<div class="rl-stack" style="height: 25em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Application Header</div>
    <div class="rl-flank rl-height-fill">
        <div class="rl-stack rl-gap-m rl-border rl-padding-m" style="width: 12em;">
            <div>Sidebar</div>
            <div class="rl-divider"></div>
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Settings</div>
        </div>
        <div class="rl-stack rl-height-fill rl-border rl-padding-l rl-gap-m">
            <div>Main Content</div>
            <div>Fills remaining space</div>
            <div>Both horizontally and vertically</div>
        </div>
    </div>
</div>
```

### Scrolling content areas

Height modifiers with overflow enable scrollable regions.

```preview|debug
<div class="rl-stack rl-gap-m" style="height: 25em; border: 1px solid #ccc;">
    <div class="rl-border rl-padding-m">Fixed Header</div>
    <div class="rl-stack rl-height-fill rl-border rl-padding-m rl-gap-m">
        <div>Content item 1</div>
        <div>Content item 2</div>
        <div>Content item 3</div>
        <div>Content item 4</div>
        <div>Content item 5</div>
        <div>Content item 6</div>
        <div>Content item 7</div>
        <div>Content item 8</div>
        <div>Content item 9</div>
        <div>Content item 10</div>
        <div>More content...</div>
        <div>Even more content...</div>
        <div>This area scrolls when content overflows</div>
    </div>
    <div class="rl-border rl-padding-m">Fixed Footer</div>
</div>
```

### Multi-column layouts

Create flexible layouts with multiple vertical sections.

```preview|debug
<div class="rl-flank" style="height: 25em; border: 1px solid #ccc;">
    <div class="rl-stack" style="width: 15em; border-right: 1px solid #ccc;">
        <div class="rl-border rl-padding-m">Left Header</div>
        <div class="rl-stack rl-height-fill rl-padding-m rl-gap-s">
            <div>Nav Item 1</div>
            <div>Nav Item 2</div>
            <div>Nav Item 3</div>
            <div>Nav Item 4</div>
            <div>Nav Item 5</div>
            <div>Nav Item 6</div>
            <div>Many more items...</div>
            <div>Scrolls if needed</div>
        </div>
    </div>
    <div class="rl-stack rl-height-fill">
        <div class="rl-border rl-padding-m">Main Header</div>
        <div class="rl-stack rl-height-fill rl-padding-l rl-gap-m">
            <div>Main content area</div>
            <div>Also fills and scrolls</div>
            <div>Independently from sidebar</div>
        </div>
    </div>
</div>
```

### Dashboard layouts

Height modifiers organize dashboard widgets and panels.

```preview|debug
<div class="rl-stack" style="height: 30em; border: 1px solid #ccc;">
    <div class="rl-flank rl-gap-m rl-border rl-padding-m">
        <div>Dashboard</div>
        <div class="rl-cluster rl-gap-m">
            <div>Profile</div>
            <div>Settings</div>
        </div>
    </div>
    <div class="rl-split rl-height-fill rl-gap-m rl-padding-m">
        <div class="rl-stack rl-gap-m" style="flex: 2;">
            <div class="rl-stack rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Recent Activity</div>
                <div class="rl-divider"></div>
                <div>Activity 1</div>
                <div>Activity 2</div>
                <div>Activity 3</div>
            </div>
            <div class="rl-stack rl-height-fill rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Main Content</div>
                <div class="rl-divider"></div>
                <div>Content grows to fill space</div>
                <div>Scrollable if needed</div>
            </div>
        </div>
        <div class="rl-stack rl-gap-m" style="flex: 1; min-width: 15em;">
            <div class="rl-stack rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Stats</div>
                <div class="rl-divider"></div>
                <div>Users: 1,234</div>
                <div>Revenue: $56,789</div>
            </div>
            <div class="rl-stack rl-height-fill rl-gap-s rl-border rl-radius-m rl-padding-m">
                <div>Notifications</div>
                <div class="rl-divider"></div>
                <div>Notification 1</div>
                <div>Notification 2</div>
                <div>Notification 3</div>
                <div>Notification 4</div>
                <div>Many more...</div>
                <div>Scrolls independently</div>
            </div>
        </div>
    </div>
</div>
```

### Application shells

Complete application layouts with navigation and content areas.

```preview|debug
<div class="rl-stack" style="height: 30em; border: 1px solid #ccc;">
    <div class="rl-flank rl-gap-m rl-border rl-padding-m">
        <div class="rl-cluster rl-gap-m">
            <div class="rl-frame" style="height: 2em; width: 2em; background: #e0e0e0; border-radius: 0.25rem;"></div>
            <div style="font-weight: bold;">My Application</div>
        </div>
        <div class="rl-cluster rl-gap-m">
            <div>Search</div>
            <div>User</div>
        </div>
    </div>
    <div class="rl-flank rl-height-fill">
        <div class="rl-stack rl-border" style="width: 14em;">
            <div class="rl-padding-m">Navigation</div>
            <div class="rl-divider"></div>
            <div class="rl-stack rl-height-fill rl-padding-m rl-gap-s">
                <div>Dashboard</div>
                <div>Projects</div>
                <div>Team</div>
                <div>Analytics</div>
                <div>Reports</div>
                <div>Settings</div>
                <div>Help</div>
            </div>
        </div>
        <div class="rl-stack rl-height-fill">
            <div class="rl-flank rl-gap-m rl-border rl-padding-m">
                <div style="font-size: 1.2em; font-weight: bold;">Page Title</div>
                <div class="rl-cluster rl-gap-m">
                    <div class="rl-border rl-padding-s rl-radius-s">Action</div>
                    <div class="rl-border rl-padding-s rl-radius-s">More</div>
                </div>
            </div>
            <div class="rl-stack rl-height-fill rl-padding-l rl-gap-m">
                <div>Page Content Area</div>
                <div>This area fills all remaining vertical space</div>
                <div>Scrolls when content exceeds available height</div>
                <div class="rl-grid rl-gap-m">
                    <div class="rl-border rl-padding-m rl-radius-m">Card 1</div>
                    <div class="rl-border rl-padding-m rl-radius-m">Card 2</div>
                    <div class="rl-border rl-padding-m rl-radius-m">Card 3</div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Modal and dialog layouts

Height modifiers create properly sized modal content areas.

```preview
<div class="rl-frame" style="height: 25em; background: rgba(0,0,0,0.1);">
    <div class="rl-stack rl-border rl-radius-m" style="width: 25em; height: 18em; background: white;">
        <div class="rl-flank rl-gap-m rl-border rl-padding-m">
            <div style="font-weight: bold;">Modal Title</div>
            <div>✕</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-stack rl-height-fill rl-padding-l rl-gap-m">
            <div>Modal content area</div>
            <div>Fills available space between header and footer</div>
            <div>Scrolls if content is too long</div>
            <div>More content...</div>
            <div>Even more content...</div>
        </div>
        <div class="rl-divider"></div>
        <div class="rl-split rl-gap-m rl-border rl-padding-m">
            <div></div>
            <div class="rl-cluster rl-gap-m">
                <div class="rl-border rl-padding-s rl-radius-s">Cancel</div>
                <div class="rl-border rl-padding-s rl-radius-s">Save</div>
            </div>
        </div>
    </div>
</div>
```

### Comparison: height-full vs height-fill

Understanding when to use each modifier:

```preview|debug
<div class="rl-split rl-gap-m">
    <div class="rl-stack rl-gap-s" style="flex: 1;">
        <div>Using height-full (requires parent height):</div>
        <div style="height: 15em; border: 1px solid #ccc;">
            <div class="rl-stack rl-height-full rl-border rl-padding-m">
                <div>Fills 100% of parent</div>
                <div>Parent must have height</div>
            </div>
        </div>
    </div>
    <div class="rl-stack rl-gap-s" style="flex: 1;">
        <div>Using height-fill (for flex layouts):</div>
        <div class="rl-stack" style="height: 15em; border: 1px solid #ccc;">
            <div class="rl-border rl-padding-m">Fixed item</div>
            <div class="rl-stack rl-height-fill rl-border rl-padding-m">
                <div>Grows to fill remaining</div>
                <div>Works in flex context</div>
            </div>
        </div>
    </div>
</div>
```

### Usage notes

The height modifiers enable flexible vertical layouts:

- **`rl-height-full`**:
  - Sets `height: 100%` with `overflow-y: auto`
  - Requires parent element to have defined height
  - Best for: Simple full-height containers, single-level layouts
  - Scrolls automatically when content overflows

- **`rl-height-fill`**:
  - Sets `flex: 1 1 0` with `min-height: 0`, `height: auto`, and `overflow-y: auto`
  - Works within flexbox layouts (stack, cluster, flank, split, etc.)
  - Best for: Application layouts, content areas that grow to fill available space
  - Distributes space among multiple fill containers
  - Scrolls automatically when content overflows

- **Key differences**:
  - `height-full` is absolute (100% of parent)
  - `height-fill` is relative (grows within flex layout)
  - `height-fill` works with multiple siblings (distributes space)
  - `height-full` replaces parent height completely

- **Common patterns**:
  - Header + content + footer: Use `height-fill` on content
  - Sidebar layouts: Use `height-fill` on main content area
  - Scrollable regions: Both modifiers enable automatic scrolling
  - Multiple sections: Use multiple `height-fill` to distribute space equally

- **Important considerations**:
  - Root container needs defined height for height modifiers to work
  - Use `overflow-y: auto` (built-in) for long content
  - `min-height: 0` (in height-fill) prevents flex items from overflowing
  - Combine with other modifiers (padding, border, gap) for complete layouts

Height modifiers are essential for creating modern application interfaces with fixed headers/footers and scrollable content areas. They eliminate the need for manual height calculations and enable truly flexible, responsive vertical layouts.

### Browser compatibility

Both height modifiers use standard CSS properties with excellent browser support:
- `height: 100%` - Universal support
- `flex: 1 1 0` - Modern browsers (IE10+)
- `overflow-y: auto` - Universal support
- `min-height: 0` - Modern browsers

For production use, these modifiers work reliably across all modern browsers and gracefully degrade in older browsers.
