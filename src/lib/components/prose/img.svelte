<script lang="ts">
  const setsets_avif = import.meta.glob<string>(['/src/static/**/*.{jpg,jpeg,png,webp,avif}', '!/src/static/assets'], {
    query: {
      format: 'avif',
      quality: '80',
      w: '1024',
      as: 'srcset'
    },
    import: 'default',
    eager: true
  })

  const setsets_jpg = import.meta.glob<string>(['/src/static/**/*.{jpg,jpeg,png,webp,avif}', '!/src/static/assets'], {
    query: {
      format: 'jpg',
      quality: '80',
      w: '1024',
      as: 'srcset'
    },
    import: 'default',
    eager: true
  })

  let className: string | undefined = undefined
  export { className as class }
  export let src: string
  export let alt: string = src
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'sync' | 'auto' = 'async'
  let srcset_avif: string | undefined = setsets_avif[`/src/static${src}`]
  let srcset_jpg: string | undefined = setsets_jpg[`/src/static${src}`]
</script>

<picture>
  {#if srcset_avif}
    <source srcset={srcset_avif} type="image/avif" />
  {/if}
  {#if srcset_jpg}
    <source srcset={srcset_jpg} type="image/jpeg" />
  {/if}
  <img {src} {alt} class={className ?? 'rounded-lg my-2'} {loading} {decoding} />
</picture>
