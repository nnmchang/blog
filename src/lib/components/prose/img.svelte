<script lang="ts">
  const setsets = import.meta.glob<string>(['/src/static/**/*.{jpg,jpeg,png,webp,avif}', '!/src/static/assets'], {
    query: {
      format: 'avif',
      quality: '80',
      w: '736',
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
  let srcset: string | undefined = setsets[`/src/static${src}`]
</script>

{#if srcset}
  <picture>
    <source {srcset} type="image/avif" />
    <img {src} {alt} class={className ?? 'rounded-lg my-2'} {loading} {decoding} />
  </picture>
{:else}
  <img {src} {alt} class={className ?? 'rounded-lg my-2'} {loading} {decoding} />
{/if}
