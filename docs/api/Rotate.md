`Rotate` (component)
====================

Two buttons to zoom in and out.

```html
<div id='zoom-buttons'>
  <Zoom map={map} />
</div>
```

Properties
----------

### `className`

Css class name to apply on the root element of this component.

type: `string`


### `duration`

Animation duration in milliseconds.

type: `number`
defaultValue: `250`


### `intl`

i18n message strings. Provided through the application through context.

type: `custom`


### `map` (required)

The ol3 map to use.

type: `instanceOf ol.Map`


### `style`

Style for the buttons.

type: `object`
defaultValue: `{
  background: 'rgba(0,60,136,.7)',
  borderRadius: '2px',
  width: '28px',
  height: '28px',
  padding: '2px'
}`
