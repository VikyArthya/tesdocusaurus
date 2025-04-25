---
sidebar_position: 1
---

# Testing

nama saya **_Viky_**

`ini adalah dokumentasi pertama saya`

```md title="Judul" {2}
---
sidebar_label: "Halooo !"
---

Perkenalkan
```

## SubTesting

ini adalah [dokumentasi](#subtesting)

```md
Let's see how to [Create a page](./create-a-page.md).
```

![logo test](/img/dummy2.jpg)

## SubTesting 2

:::tip My Tip

test tip hijau

:::

:::danger ini Berbahaya

test bahaya

:::

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`);
}}>
{children}
</span>
);

ini <Highlight color="#25c2a0">warna green</Highlight> !

ini <Highlight color="#1877F2">wana blue</Highlight> !
