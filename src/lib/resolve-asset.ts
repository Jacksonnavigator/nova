type AssetManifest = {
  url: string;
  original_filename?: string;
};

/**
 * Lovable stores images in cloud R2 and references them via /__l5e/assets-v1/…
 * Those URLs only work in Lovable's sandbox or when LOVABLE_PREVIEW_HOST is set.
 * Local copies live in public/assets/ using original_filename.
 */
export function resolveAsset(asset: AssetManifest): string {
  if (asset.original_filename) {
    return `/assets/${asset.original_filename}`;
  }
  return asset.url;
}
