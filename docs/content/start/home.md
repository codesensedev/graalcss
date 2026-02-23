# Relayout

**Relayout** is a lightweight **responsive layout system** which makes it easy to create complex and responsive design interfaces by combining primitive layouts. 

### The layout problem

Modern applications require design systems to manage complex interfaces with diverse visual elements, consistent spacing, colors, and typography, plus responsive behavior across different screen sizes.

Design systems combine two distinct concerns: **aspect** (visual appearance like colors and typography, unique to each application) and **layout** (structural arrangement and spacing, reusable across applications).

Various design system approaches have emerged, from naming conventions like BEM to comprehensive libraries like Bootstrap, utility-first frameworks like Tailwind, and specialized systems based on flexbox and grid.

Existing tools fall short on the layout side. BEM provides no layout guidance, component libraries usually bundle layout with styling, utility-first frameworks require memorizing lots of classes, and raw CSS demands repetitive code and media queries. Developers still struggle to create consistent, responsive arrangements efficiently.

Relayout attempts to solve the layout problem.

### Our approach

Relayout is built on the principle of **composition** - combining simple, single-purpose layout elements to create complex, responsive interfaces. Rather than predefined component templates, you compose layouts by nesting layout classes and applying modifiers.

Relayout provides a set of primitive classes for layouts and modifiers that can be combined to build complex interfaces. Because it focuses purely on structure, Relayout works seamlessly alongside any existing CSS framework or design system.

This approach offers flexibility, maintainability, and naturally responsive designs without writing media queries.

Each layout class does one thing well:

- **[Stack](#/content/layouts/stack)** arranges items vertically
- **[Cluster](#/content/layouts/cluster)** flows items horizontally with wrapping
- **[Flank](#/content/layouts/flank)** creates a flexible sidebar pattern
- **[Split](#/content/layouts/split)** distributes space between items
- **[Grid](#/content/layouts/grid)** creates uniform columns
- **[Frame](#/content/layouts/frame)** centers content
- **[Divider](#/content/layouts/divider)** adds visual separation

By nesting these simple layouts and adding modifiers, you can build most interface patterns.

### Building blocks

Every layout element has two parts:

**1. Layout class** - defines the arrangement pattern (only one per element):

```html
<div class="rl-stack">...</div>
<div class="rl-cluster">...</div>
<div class="rl-flank">...</div>
```

**2. Modifier classes** - customize the layout (multiple can be applied):

```html
<div class="rl-stack rl-gap-m rl-padding-l rl-border">...</div>
```

### Simple composition

Start with a basic stack and add modifiers:

```preview
<div class="rl-stack rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

The modifiers enhance the layout:
- `rl-gap-m` adds spacing between items
- `rl-padding-l` adds internal padding
- `rl-border` adds a border
- `rl-radius-m` rounds the corners

### Nesting layouts

Nest different layouts to create structure:

```preview
<div class="rl-stack rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div>Stack container</div>
    <div class="rl-cluster rl-gap-m">
        <div>Tag 1</div>
        <div>Tag 2</div>
        <div>Tag 3</div>
    </div>
    <div class="rl-split rl-gap-m">
        <div>Left</div>
        <div>Right</div>
    </div>
</div>
```

A stack contains a cluster and a split - each layout maintains its own behavior.

### Progressive enhancement

Build complexity incrementally by adding modifiers:

**Step 1: Basic structure**

```preview
<div class="rl-flank">
    <div>Logo</div>
    <div>Navigation</div>
</div>
```

**Step 2: Add spacing**

```preview
<div class="rl-flank rl-gap-m">
    <div>Logo</div>
    <div>Navigation</div>
</div>
```

**Step 3: Add visual styling**

```preview
<div class="rl-flank rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div>Logo</div>
    <div>Navigation</div>
</div>
```

### Header composition

Combine flank with cluster for a navigation header:

```preview
<div class="rl-flank rl-gap-m rl-padding-m rl-border rl-radius-m">
    <div style="font-weight: bold;">Brand</div>
    <div class="rl-cluster rl-gap-m">
        <div>Home</div>
        <div>Products</div>
        <div>About</div>
        <div>Contact</div>
    </div>
</div>
```

The flank positions brand and navigation, while the cluster handles the menu items.

### Card composition

Stack with nested layouts creates a card:

```preview
<div class="rl-stack rl-gap-m rl-padding-l rl-border rl-radius-m">
    <div style="font-weight: bold;">Card Title</div>
    <div class="rl-divider"></div>
    <div>Card content goes here with enough text to show the layout structure.</div>
    <div class="rl-cluster rl-gap-s">
        <div class="rl-border rl-padding-s rl-radius-s">Tag 1</div>
        <div class="rl-border rl-padding-s rl-radius-s">Tag 2</div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-split rl-gap-m">
        <div>Date: Feb 14</div>
        <div>Author: John</div>
    </div>
</div>
```

Multiple layouts compose a rich card interface: stack for vertical flow, dividers for separation, cluster for tags, split for metadata.

### Grid of cards

Nest card composition inside a grid:

```preview
<div class="rl-grid rl-gap-m">
    <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 1</div>
        <div>Content for card one</div>
        <div class="rl-cluster rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">New</div>
        </div>
    </div>
    <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 2</div>
        <div>Content for card two</div>
        <div class="rl-cluster rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Popular</div>
        </div>
    </div>
    <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Card 3</div>
        <div>Content for card three</div>
        <div class="rl-cluster rl-gap-s">
            <div class="rl-border rl-padding-s rl-radius-s">Featured</div>
        </div>
    </div>
</div>
```

The grid provides uniform columns, while each card uses stack composition internally.

### Form composition

Stack creates vertical form flow with varied input patterns:

```preview
<div class="rl-stack rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div style="font-weight: bold; font-size: 1.2em;">Contact Form</div>
    <div class="rl-stack rl-gap-s">
        <div>Name</div>
        <div class="rl-border rl-padding-m rl-radius-s">Input field</div>
    </div>
    <div class="rl-stack rl-gap-s">
        <div>Email</div>
        <div class="rl-border rl-padding-m rl-radius-s">Input field</div>
    </div>
    <div class="rl-stack rl-gap-s">
        <div>Message</div>
        <div class="rl-border rl-padding-m rl-radius-s" style="min-height: 5em;">Textarea field</div>
    </div>
    <div class="rl-split rl-gap-m">
        <div></div>
        <div class="rl-cluster rl-gap-m">
            <div class="rl-border rl-padding-m rl-radius-s">Cancel</div>
            <div class="rl-border rl-padding-m rl-radius-s">Submit</div>
        </div>
    </div>
</div>
```

Stack for vertical fields, split to position buttons right, cluster for button group.

### Sidebar layout composition

Combine multiple layouts for a complete page structure:

```preview
<div class="rl-stack rl-border rl-radius-m">
    <div class="rl-flank rl-gap-m rl-padding-m rl-border">
        <div style="font-weight: bold;">Application</div>
        <div class="rl-cluster rl-gap-m">
            <div>Search</div>
            <div>Profile</div>
        </div>
    </div>
    <div class="rl-flank rl-gap-0">
        <div class="rl-stack rl-gap-m rl-padding-m rl-border" style="min-width: 12em;">
            <div style="font-weight: bold;">Navigation</div>
            <div class="rl-divider"></div>
            <div>Dashboard</div>
            <div>Projects</div>
            <div>Settings</div>
        </div>
        <div class="rl-stack rl-gap-m rl-padding-l">
            <div style="font-weight: bold; font-size: 1.2em;">Page Title</div>
            <div>Main content area shows the power of composition. Multiple simple layouts combine to create complex interfaces.</div>
            <div class="rl-grid rl-gap-m">
                <div class="rl-border rl-padding-m rl-radius-m">Widget 1</div>
                <div class="rl-border rl-padding-m rl-radius-m">Widget 2</div>
            </div>
        </div>
    </div>
</div>
```

Outer stack for vertical sections, flank for header, nested flank for sidebar/content, grid for widgets.

### Responsive by default

Composition creates naturally responsive layouts:

```preview
<div class="rl-stack rl-gap-m">
    <div class="rl-cluster rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Clusters wrap automatically</div>
        <div>when space runs out</div>
        <div>no media queries needed</div>
        <div>resize to see</div>
    </div>
    <div class="rl-flank rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Logo</div>
        <div>Flanks wrap when narrow</div>
    </div>
    <div class="rl-grid rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div>Grids adjust</div>
        <div>column count</div>
        <div>automatically</div>
    </div>
</div>
```

Layouts adapt to available space without media queries.

### Constraining composition

Use width modifiers to control layout boundaries:

```preview
<div class="rl-stack rl-gap-l rl-width-s">
    <div class="rl-flank rl-gap-m rl-padding-m rl-border rl-radius-m">
        <div style="font-weight: bold;">Constrained Header</div>
        <div class="rl-cluster rl-gap-m">
            <div>Nav 1</div>
            <div>Nav 2</div>
            <div>Nav 3</div>
        </div>
    </div>
    <div class="rl-stack rl-gap-m rl-padding-l rl-border rl-radius-m">
        <div>Centered content area with maximum width for readability.</div>
        <div>The width modifier centers and constrains the entire composition.</div>
    </div>
</div>
```

Width modifiers center and constrain entire composed layouts.

### Vertical space composition

Combine height modifiers with nested layouts:

```preview
<div class="rl-stack" style="height: 20em; border: 1px solid #ccc;">
    <div class="rl-flank rl-gap-m rl-padding-m rl-border">
        <div style="font-weight: bold;">Header</div>
        <div>Actions</div>
    </div>
    <div class="rl-flank rl-height-fill">
        <div class="rl-stack rl-gap-m rl-padding-m rl-border" style="min-width: 10em;">
            <div>Sidebar</div>
            <div>Menu 1</div>
            <div>Menu 2</div>
        </div>
        <div class="rl-stack rl-gap-m rl-padding-l rl-height-fill">
            <div style="font-weight: bold;">Content</div>
            <div>Fills available vertical space with composition of height-fill modifier.</div>
            <div>Scroll appears if content overflows.</div>
        </div>
    </div>
</div>
```

Height modifiers enable full-height application layouts through composition.

### Visual hierarchy through composition

Layer compositions with varying visual weight:

```preview
<div class="rl-stack rl-gap-xl rl-padding-xl rl-border rl-radius-m">
    <div class="rl-stack rl-gap-l rl-padding-l rl-border rl-radius-m">
        <div style="font-size: 1.2em; font-weight: bold;">Section Level 1</div>
        <div class="rl-stack rl-gap-m rl-padding-m rl-border rl-radius-s">
            <div style="font-weight: bold;">Section Level 2</div>
            <div class="rl-cluster rl-gap-s">
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
                <div class="rl-border rl-padding-s rl-radius-s">Item</div>
            </div>
        </div>
    </div>
</div>
```

Decreasing gap, padding, and radius sizes as you nest creates visual hierarchy.

### Composition patterns

Common composition patterns emerge for different interfaces:

**Navigation pattern:**
```
flank (container)
├─ brand/logo
└─ cluster (menu items)
```

**Card pattern:**
```
stack (container)
├─ title
├─ divider
├─ content
├─ cluster (tags)
└─ split (metadata)
```

**Form pattern:**
```
stack (container)
├─ stack (field group)
├─ stack (field group)
└─ split (actions right)
```

**Dashboard pattern:**
```
stack (page)
├─ flank (header)
├─ flank (content area)
│  ├─ stack (sidebar)
│  └─ grid (widgets)
└─ stack (footer)
```

### Best practices

**1. Start simple, add complexity**

Begin with basic layouts, add modifiers and nesting as needed:

```preview
<div class="rl-stack rl-gap-m">
    <div>Start simple</div>
    <div class="rl-cluster rl-gap-s">
        <div>Add nested</div>
        <div>layouts</div>
        <div>progressively</div>
    </div>
</div>
```

**2. Use semantic HTML**

Compose with appropriate HTML elements:

```html
<header class="rl-flank rl-gap-m rl-padding-m">
    <h1>Title</h1>
    <nav class="rl-cluster rl-gap-m">
        <a href="#">Link</a>
    </nav>
</header>
```

**3. Consistent spacing**

Use the spacing scale consistently:

```preview
<div class="rl-stack rl-gap-l rl-padding-l rl-border rl-radius-m">
    <div>Large gaps and padding for major sections</div>
    <div class="rl-stack rl-gap-m rl-padding-m rl-border rl-radius-s">
        <div>Medium gaps for related content</div>
        <div class="rl-cluster rl-gap-s">
            <div>Small gaps</div>
            <div>for tight groupings</div>
        </div>
    </div>
</div>
```

**4. Limit nesting depth**

Keep compositions readable by limiting nesting (typically 3-4 levels):

```preview
<div class="rl-stack rl-gap-m rl-border rl-radius-m rl-padding-m">
    <div>Level 1: Main container</div>
    <div class="rl-stack rl-gap-s rl-border rl-padding-s">
        <div>Level 2: Sub-section</div>
        <div class="rl-cluster rl-gap-s">
            <div>Level 3: Items</div>
            <div>Readable depth</div>
        </div>
    </div>
</div>
```

**5. Compose for content**

Let content determine layout choices - don't force patterns that don't fit your data.

### Advantages of composition

- **Flexibility:** Build any interface from simple parts
- **Maintainability:** Understand layouts at a glance
- **Consistency:** Reuse patterns across your application
- **Responsive:** Layouts adapt naturally without media queries
- **Performance:** Simple CSS with no runtime calculations
- **Accessibility:** Works with semantic HTML
- **Learning curve:** Master a few simple concepts instead of many specific components

### From simple to complex

The power of composition is building sophisticated interfaces from simple, understandable pieces:

```preview
<div class="rl-stack rl-gap-l rl-border rl-radius-m">
    <div class="rl-flank rl-gap-m rl-padding-m rl-border">
        <div class="rl-cluster rl-gap-s">
            <div style="width: 2em; height: 2em; background: #e0e0e0; border-radius: 0.25rem;"></div>
            <div style="font-weight: bold;">App</div>
        </div>
        <div class="rl-cluster rl-gap-l rl-nowrap-scroll">
            <div>Home</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>Docs</div>
            <div>Support</div>
        </div>
    </div>
    <div class="rl-stack rl-gap-m rl-padding-l">
        <div style="font-weight: bold; font-size: 1.5em;">Welcome</div>
        <div>Complex layouts emerge from simple compositions. Each layout class does one thing well.</div>
        <div class="rl-grid rl-gap-m">
            <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 1</div>
                <div>Description text</div>
            </div>
            <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 2</div>
                <div>Description text</div>
            </div>
            <div class="rl-stack rl-gap-s rl-padding-m rl-border rl-radius-m">
                <div style="font-weight: bold;">Feature 3</div>
                <div>Description text</div>
            </div>
        </div>
    </div>
    <div class="rl-divider"></div>
    <div class="rl-split rl-gap-m rl-padding-m">
        <div>© 2026 App</div>
        <div class="rl-cluster rl-gap-m">
            <div>Privacy</div>
            <div>Terms</div>
        </div>
    </div>
</div>
```

This complete page layout uses: stack for vertical structure, flank for header and navigation, cluster for menus, grid for features, split for footer, and dividers for separation - all composed together.
